import {
  takeLatest, put, select, call, delay
} from 'redux-saga/effects';

import { createMatrix, transformCoordinates, compareRandom } from '../../utils';

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

function* setShootMAtrixStart() {
  // заполняем массив shootMatrix координатами каждой из
  // 100 клеток игрового поля
  const shootMatrix: number[][] = [];
  const shootMatrixAI = [];
	for (var i = 0; i < 10; i++) {
		for(var j = 0; j < 10; j++) {
			yield shootMatrix.push([i, j]);
		}
  }
  const { startPoints } = yield select(getEnemy);

  for (let i = 0, length = startPoints.length; i < length; i++) {
		// получаем массив координат начальных точек диагоналей
		const arr = startPoints[i];
		for (let j = 0, lh = arr.length; j < lh; j++) {
			// координаты текущей начальной точки диагонали
			let x = arr[j][0],
				y = arr[j][1];

			// в зависимости от направления диагонали используется разный алгоритм
			// получения и проверки следующей координаты клетки расположенной на
      // диагонали
			switch(i) {
				// получаем координаты клеток находящиеся на диагоналях направленных
				// вправо-вниз, при этом и координата 'X', и координата 'Y' увеличиваются
				// на единицу при каждом цикле, пока не достигнут своих предельных
				// значений
				case 0:
					while(x <= 9 && y <= 9) {
						shootMatrixAI.push([x,y]);
						x = (x <= 9) ? x : 9;
						y = (y <= 9) ? y : 9;
						x++; y++;
					};
					break;

				// получаем координаты клеток находящиеся на диагоналях направленных
				// вправо-вверх, при этом у координты 'X' при каждом цикле значение
				// уменьшается на единицу, а у координаты 'Y' - увеличивается,
				// пока не достигнут своих предельных значений
				case 1:
					while(x >= 0 && x <= 9 && y <= 9) {
						shootMatrixAI.push([x,y]);
						x = (x >= 0 && x <= 9) ? x : (x < 0) ? 0 : 9;
						y = (y <= 9) ? y : 9;
						x--; y++;
					};
					break;
			}
		}
  }

  shootMatrix.sort(compareRandom);
  shootMatrixAI.sort(compareRandom);
  yield put(ACTIONS.setShootMatrix(shootMatrix));
  yield put(ACTIONS.setShootMatrixAI(shootMatrixAI));
}

function* getCoordinatesShoot(shootMatrixAround: number[][], shootMatrixAI: number[][], shootMatrix: number[][]) {
  // в первую очередь, обращаемся к массиву shootMatrixAround и получаем
	// координаты для обстрела попадания, если данный массив пустой, то
	// если ещё есть координаты выстрелов для реализации оптимальной
	// тактики, получаем их, в противном случае
	// берём координаты очередного выстрела из массива shootMatrix
	// const coords = (shootMatrixAround.length > 0) ? shootMatrixAround.pop() : (shootMatrixAI.length > 0) ? shootMatrixAI.pop() : shootMatrix.pop();
  const coords = (shootMatrixAround.length > 0)
    ? yield call(genericPop, { type: 'shootMatrixAround', matrix: shootMatrixAround })
    : (shootMatrixAI.length > 0)
      ? yield call(genericPop, { type: 'shootMatrixAI', matrix: shootMatrixAI })
      : yield call(genericPop, { type: 'shootMatrix', matrix: shootMatrix })
	// заносим полученные координаты в объект
	const obj = {
		x: coords !== undefined ? coords[0] : 0,
		y: coords !== undefined ? coords[1] : 0
	};
 
	// удаляем выбранные координаты из массивов shootMatrixAI и shootMatrix
  // для исключения повторной стрельбы по этим координатам в дальнейшем
  const {
    shootMatrixAI: newShootMatrixAI,
    shootMatrix: newShootMatrix
  } = yield select(getEnemy);
	if (newShootMatrixAI.length !== 0) {
		yield call(deleteElementMatrix, { matrix: newShootMatrixAI, type: 'shootMatrixAI', obj });
	}
	yield call(deleteElementMatrix, { matrix: newShootMatrix, type: 'shootMatrix', obj });
	return obj;
}

function* genericPop({ type, matrix }: any) {
  switch(type) {
    case 'shootMatrix':
      const newShootMatrix = [...matrix];
      const lastShootItem = newShootMatrix.pop();
      yield put(ACTIONS.setShootMatrix(newShootMatrix));
      return lastShootItem;
    case 'shootMatrixAI':
      const newShootAMtrixAI = [...matrix];
      const lastShootAI = newShootAMtrixAI.pop();
      yield put(ACTIONS.setShootMatrixAI(newShootAMtrixAI));
      return lastShootAI;
    case 'shootMatrixAround':
      const newMatrix = [...matrix];
      const last = newMatrix.pop();
      yield put(ACTIONS.setShootMatrixAround(newMatrix));
      return last;
  }
}

function* deleteElementMatrix({ matrix, type, obj }: any) {
  const array = [...matrix];
  // перебираем массив
	for (var i = 0, lh = array.length; i < lh; i++) {
		// находим ячейку массива, в которой содержатся координаты равные
		// переданным во втором аргументе и удаляем эту ячейку
		if (array[i][0] == obj.x && array[i][1] == obj.y) {
			array.splice(i, 1);
			// нужный элемент массива удалён, поэтому перебирать массив
			// далее нет смысла, поэтому прерываем цикл
			break;
		}
  }
  type === 'shootMatrix'
    ? yield put(ACTIONS.setShootMatrix(array))
    : yield put(ACTIONS.setShootMatrixAI(array));
}


export function* sagaEnemyField() {
  yield takeLatest(TYPES.INITIAL_ENEMY_FIELD_START, initialFieldStart);
  yield takeLatest(TYPES.SHOOT, shoot);
  yield takeLatest(TYPES.SET_BLOCKED_CELL, setBlockedCell);
  yield takeLatest(TYPES.SET_SHOOT_MATRIX_START, setShootMAtrixStart);
}