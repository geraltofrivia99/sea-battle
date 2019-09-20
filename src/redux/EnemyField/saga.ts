import {
  takeLatest, put, select, call, delay
} from 'redux-saga/effects';

import { createMatrix, transformCoordinates, compareRandom, checkMaxDecks, getEmptyTempShip } from '../../utils';

import * as TYPES from './types';

import * as ACTIONS from './actions';
import { setFooterText } from '../Initial/actions';
import * as FACTIONS from '../Field/actions';

import { IState, IFieldCoord } from '../../types';
import { object } from 'prop-types';

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

const getField = (state: IState) => (state.field);

function* testShoot({ x, y }: any) {
  const field = yield select(getField);
  const val = field.matrix[x][y];
  switch(val) {
    case 0:
      yield put(FACTIONS.addElementToCell({
        icon: 'dot',
        coords: {x,y},
      }))
      yield put(FACTIONS.setDeckInMatrix({ x, y, iconNumber: 3 }))
    break;
    case 1:
      yield put(FACTIONS.addElementToCell({
        icon: 'red-cross',
        coords: {x,y},
      }))
      yield put(FACTIONS.setDeckInMatrix({ x, y, iconNumber: 4 }));
      const { squadron } = field;
      const { tempShip } = yield select(getEnemy);
      const newTempShip = { ...tempShip };
      for (let i = squadron.length - 1; i >= 0; i--) {
        const { matrix, decks, hits, shipname, x0, y0 } = squadron[i];
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
            yield put(FACTIONS.updateSquadron(newSquadron));
            if (hits + 1 === decks) {
              newTempShip.x0 = x0;
              newTempShip.y0 = y0;

              const newSquadron = squadron.filter((cur: any) => cur.shipname !== shipname);
              yield put(FACTIONS.updateSquadron(newSquadron));
            }
            break;
          }
        }
      }
      if (squadron.length === 0) {
        //endGame
      } else {
        newTempShip.totalHits++;

        let points	= [
          [x - 1, y - 1],
          [x - 1, y + 1],
          [x + 1, y - 1],
          [x + 1, y + 1]
        ];
        yield call(markEmptyCell, points, field.matrix);
        // находим максимально количество палуб из оставшихся кораблей
        const max = checkMaxDecks(squadron);
        if (newTempShip.totalHits >= max) {
          // корабль потоплен
				  // помечаем клетки вокруг корабля, как гарантированно пустые
 
          // однопалубный корабль
          if (newTempShip.totalHits === 1) {
            points = [
              // верхняя
              [newTempShip.x0 - 1, newTempShip.y0],
              // нижняя
              [newTempShip.x0 + 1, newTempShip.y0],
              // левая
              [newTempShip.x0, newTempShip.y0 - 1],
              // правая
              [newTempShip.x0, newTempShip.y0 + 1],
            ];
          } else {
            // получаем координаты левой или верхней клетки
            var x1 = newTempShip.x0 - newTempShip.kx,
            y1 = newTempShip.y0 - newTempShip.ky,
            // получаем координаты правой или нижней клетки
            // для этого к координате первой палубы прибавляем количество палуб
            // умноженное на коэффициент, определяющий направление расположения
            // палуб корабля
            // kx == 1 и ky == 0 - вертикально,
            // kx == 0 и ky == 1 - горизонтально
            x2 = newTempShip.x0 + newTempShip.kx * newTempShip.totalHits,
            y2 = newTempShip.y0 + newTempShip.ky * newTempShip.totalHits;
            points = [
              [x1, y1],
              [x2, y2]
            ];
          }
          const { matrix } = yield select(getField);
          yield call(markEmptyCell, points, matrix);
          // сбрасываем значения свойств объекта comp.tempShip в исходное состояние;
          yield put(ACTIONS.updateTempShip(getEmptyTempShip()));
        } else {
          // продолжаем обстрел клеток вокруг попадания
          const { shootMatrixAround, shootMatrix } = yield select(getEnemy);
          const { matrix } = yield select(getField);
          yield call(setShootMatrixAroundGen, newTempShip, { x, y }, shootMatrixAround, matrix, shootMatrix);
        }
        yield delay(1000);
        yield put(ACTIONS.enemyShoot());
      }
      yield put(ACTIONS.updateTempShip({ ...newTempShip }));
    break;
  }
}

function* setShootMatrixAroundGen(
  tempShip: any, coords: IObj,
  shootMatrixAround: any, matrix: any, shootMatrix: any
  ){
  if (tempShip.kx === 0 && tempShip.ky === 0) {
    // проверяем, есть ли в объекте 'tempShip.firstHit' координаты, если нет
		// то будем считать, что это первое попадание и запишем
    // в этот объект координаты первого попадания
    if (Object.keys(tempShip.firstHit).length === 0) {
			tempShip.firstHit = coords;
		} else {
			// запишем координаты второго попадания в объект 'nextHit'
			tempShip.nextHit = coords;
			// вычисляем коэффициенты определяющие положения корабля
			// разность между соответствующими координатами первого и второго
			// попадания не может быть больше 1, в противном случае будем
			// считать, что второе попадание было по другому кораблю
			tempShip.kx = (Math.abs(tempShip.firstHit.x - tempShip.nextHit.x) == 1) ? 1 : 0;
			tempShip.ky = (Math.abs(tempShip.firstHit.y - tempShip.nextHit.y) == 1) ? 1 : 0;
		}
  }
  const newShootMatrixAround = [...shootMatrixAround];
  // корабль расположен вертикально
	if (coords.x > 0 && tempShip.ky == 0) {
    newShootMatrixAround.push([coords.x - 1, coords.y])};
	if (coords.x < 9 && tempShip.ky == 0) newShootMatrixAround.push([coords.x + 1, coords.y]);
	// корабль расположен горизонтально
	if (coords.y > 0 && tempShip.kx == 0) newShootMatrixAround.push([coords.x, coords.y - 1]);
  if (coords.y < 9 && tempShip.kx == 0) newShootMatrixAround.push([coords.x, coords.y + 1]);
  // получив координаты обстрела попадания, необходимо проверить их валидность
	// координата валидна, если значение массива не равно или 2 (гарантированно пустая
  // клетка), или 3 (промах), или 4 (попадание)

  for (var i = newShootMatrixAround.length - 1; i >= 0; i--) {
		// получаем координаты X и Y возможного выстрела
		var x = newShootMatrixAround[i][0],
			y = newShootMatrixAround[i][1];
		// проверяем валидность этих координат и если они не валидны - удаляем их из массива
		// координат выстрелов вокруг клетки с попаданием
		if (matrix[x][y] !== 0 && matrix[x][y] !== 1) {
			newShootMatrixAround.splice(i,1);
      yield call(deleteElementMatrix, { matrix: shootMatrix, type: 'shootMatrix', obj: coords });
			// if (comp.shootMatrixAI.length != 0) {
			// 	self.deleteElementMatrix(comp.shootMatrixAI, coords);
			// }
		}
  }
  if (newShootMatrixAround.length == 0) {
		// считаем корабль потопленным, сбрасываем свойства объекта tempShip
		// в исходные состояния
		yield put(ACTIONS.updateTempShip(getEmptyTempShip()));
	}
  yield put(ACTIONS.setShootMatrixAround(newShootMatrixAround));
}

interface IObj {
  x: number;
  y: number;
}

function* markEmptyCell(points: any, matrix: any) {
  let obj:IObj = {x:0,y:0};
  const cellElements = [];
  const newMatrix = [...matrix];
  for (var i = 0, lh = points.length; i < lh; i++) {
    obj = {
      x: points[i][0],
			y: points[i][1]
    }

    if (obj.x < 0 || obj.x > 9 || obj.y < 0 || obj.y > 9) continue;
    if (matrix[obj.x][obj.y] != 0) continue;
    cellElements.push({ icon: 'shaded', coords: { x: obj.x, y: obj.y }});
    newMatrix[obj.x][obj.y] = 2;
  }
  yield put(FACTIONS.addElementsToCell(cellElements));
  yield put(FACTIONS.setMatrix(newMatrix));
  const { shootMatrix, shootMatrixAI, shootMatrixAround } = yield select(getEnemy);
  yield call(deleteElementMatrix, { matrix: shootMatrix, type: 'shootMatrix', obj });
  if (shootMatrixAround.length !== 0) {
    yield call(deleteElementMatrix, { matrix: shootMatrixAround, type: 'shootMatrixAround', obj });
  }
  if (shootMatrixAI !== 0) {
    yield call(deleteElementMatrix, { matrix: shootMatrixAI, type: 'shootMatrixAI', obj });
  }
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
    const newCells = enemy.cells.filter(({ coords }: any) => !(coords.x === x && coords.y === y));
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
// TEEEESSSSSSSSSST--------------------------------------------
function* enemyShoot() {
  const { shootMatrixAround, shootMatrixAI, shootMatrix } = yield select(getEnemy);
  const coords = yield call(getCoordinatesShot, shootMatrixAround, shootMatrixAI, shootMatrix);
  yield call(testShoot, coords);
}

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

function* getCoordinatesShot(shootMatrixAround: number[][], shootMatrixAI: number[][], shootMatrix: number[][]) {
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
  switch(type) {
    case 'shootMatrix':
      yield put(ACTIONS.setShootMatrix(array));
      break;
    case 'shootMatrixAround':
      yield put(ACTIONS.setShootMatrixAround(array));
    case 'shootMatrixAI':
      yield put(ACTIONS.setShootMatrixAI(array));
      break
  }
}


export function* sagaEnemyField() {
  yield takeLatest(TYPES.INITIAL_ENEMY_FIELD_START, initialFieldStart);
  yield takeLatest(TYPES.SHOOT, shoot);
  yield takeLatest(TYPES.SET_BLOCKED_CELL, setBlockedCell);
  yield takeLatest(TYPES.SET_SHOOT_MATRIX_START, setShootMAtrixStart);
  yield takeLatest(TYPES.ENEMY_SHOOT, enemyShoot);
}