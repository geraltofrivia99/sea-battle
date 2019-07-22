import {
  takeLatest, put, select, call, delay
} from 'redux-saga/effects';

import { createMatrix, transformCoordinates, getCloneCoords } from '../../utils';

import * as TYPES from './types';

import * as ACTIONS from './actions';
import { setFooterText } from '../Initial/actions';

import { IState, IFieldCoord } from '../../types';

const getFieldSide = (state: IState) => (state.enemy.fieldSide);
const getEnemy = (state: IState) => (state.enemy)

function* initialFieldStart({ payload }: any) {
  const { el } = payload;
	const fieldSide = yield select(getFieldSide);
	const fieldX = el.getBoundingClientRect().top + window.pageYOffset;
	const fieldY = el.getBoundingClientRect().left + window.pageXOffset;
	const field: IFieldCoord = {
		fieldX,
		fieldY,
		fieldRight: fieldY + fieldSide,
		fieldBtm: fieldX + fieldSide,
	};
	const enemyMatrix = createMatrix();
	yield put(ACTIONS.setEnemyMatrix(enemyMatrix));
  yield put(ACTIONS.initialEnemyField(field));
}

function* shoot({ payload }: any) {
  const { e } = payload;
  const enemy = yield select(getEnemy);
  const { x, y } = transformCoordinates(e, enemy);
  // if (e !== undefined) {
  //   coords = transformCoordinates(e, enemy);
  // } else {
  //   // получаем координаты для выстрела компьютера
  //   // coords = self.getCoordinatesShot();
  // }

  // значение матрицы по полученным координатам
  const val	= enemy.enemyMatrix[x][y];
  switch(val) {
    case 0:
      yield put(ACTIONS.addElementToCell({
        icon: 'dot',
        coords: {
          x,
          y
        },
      }))
      yield put(ACTIONS.setDeckInEnemyMatrix({ x, y, iconNumber: 3 }))
      break;
    case 1:
        yield put(ACTIONS.addElementToCell({
          icon: 'red-cross',
          coords: {
            x,
            y
          },
        }))
        yield put(ACTIONS.setDeckInEnemyMatrix({ x, y, iconNumber: 4 }));
        const { squadron } = enemy;
        for (let i = squadron.length - 1; i >= 0; i--) {
          const { matrix, decks, hits, shipname } = squadron[i];
          const arrayDescks = matrix;
          for (let j = 0, length = arrayDescks.length; j < length; j++) {
            if (arrayDescks[j][0] === x && arrayDescks[j][1] === y) {
              const newSquadron = squadron.map((cur: any) => {
                if (cur.shipname === shipname) {
                  return {
                    ...cur,
                    hits: cur.hits + 1
                  }
                }
                return cur;
              })
              yield put(ACTIONS.updateEnemySquadron(newSquadron));
              if (hits + 1 === decks) {
                const { squadron } = yield select(getEnemy);
                const newSquadron = squadron.filter((cur: any) => cur.shipname !== shipname);
                yield put(ACTIONS.updateEnemySquadron(newSquadron));
              }
              break;
            }
          }
        }
        break;
    case 3:
    case 4:
      yield put(setFooterText('Координата уже обстреленна'));
      yield delay(2000);
      yield put(setFooterText(''));
      break;
  }
};

function* setBlockedCell({ payload }: any) {
  const { e } = payload;
  const enemy = yield select(getEnemy);
  const { x, y } = transformCoordinates(e, enemy);
  const ch = yield call(checkCell, enemy, { x, y });
  if (!ch) {
    yield put(ACTIONS.addElementToCell({
      icon: 'shaded',
      coords: {
        x,
        y
      },
    }))
    yield put(ACTIONS.setDeckInEnemyMatrix({ x, y, iconNumber: 2 }));
  } else if (ch.icon === 'shaded') {
    const newCells = enemy.cells.filter(({ coords }: any) => coords.x !== x && coords.y !== y);
    yield put(ACTIONS.updateCells(newCells));
    yield put(ACTIONS.setDeckInEnemyMatrix({ x, y, iconNumber: 0 }));
  }
}

function checkCell(field: any, incCoords: any) {
	// получаем коллекцию всех иконок, установленных на игровом поле компьютера
  let result = null;
  const { cells } = field;
	// перебираем полученную коллекцию иконок
	cells.forEach((el: any) => {
		// преобразуем относительные координаты иконок в координаты матрицы
		const { coords: { x, y } } = el;
		// сравниваем координаты иконок с координатами клика
		if (incCoords.x == x && incCoords.y == y) {
			result = el;
		}
	});
	return result;
};


export function* sagaEnemyField() {
  yield takeLatest(TYPES.INITIAL_ENEMY_FIELD_START, initialFieldStart);
  yield takeLatest(TYPES.SHOOT, shoot);
  yield takeLatest(TYPES.SET_BLOCKED_CELL, setBlockedCell);
}