import {
    takeLatest, put, select, call
} from 'redux-saga/effects';

import { createMatrix } from '../../utils';

import * as TYPES from './types';
import * as ACTIONS from './actions';
import { IState } from './reducer';



interface IFc {
    x: number;
    y: number;
    kx: number;
    ky: number;
    decks?: number;
    shipname?: string;
}

const getShipData = (state: IState) => state.field.shipsData

function* initialField() {
    yield console.log('hello');
}

function* randomLocationShip() {
    const matrix = createMatrix();
    yield put(ACTIONS.setMatrix(matrix));
    const shipsData = yield select(getShipData);
    for (let i = 0, length = shipsData.length; i < length; i++) {
        const decks = shipsData[i][0];

        for (let j = 0; j < i; j++) {
            const fc = getCoordinatesDecks(decks, matrix);
            fc.decks = decks;
            fc.shipname = shipsData[i][1] + String(j + 1);
			const shipMatrix = yield call(createShip, fc)
			yield put(ACTIONS.addToSquadron({
				matrix: shipMatrix,
				hits: 0,
				decks,
				kx: fc.kx,
				ky: fc.ky,
				shipname: fc.shipname,
				x0: fc.x,
				y0: fc.y
			}))
        }
    }
}

export function* sagaField() {
    yield takeLatest(TYPES.INITIAL_FIELD, initialField);
    yield takeLatest(TYPES.RANDOM_LOC_SHIP_START, randomLocationShip);
}

function* createShip(fc: any) {
	let k = 0;
	let matrix = [];
	while (k < fc.decks) {
		yield put(ACTIONS.setDeckInMatrix({ x: fc.x + k * fc.kx, y: fc.y + k * fc.ky }));
		matrix.push([fc.x + k * fc.kx, fc.y + k * fc.ky])
		k++;
	}
	return matrix;
}

function getCoordinatesDecks(decks: number, matrix: any): IFc {
	// получаем коэффициенты определяющие направление расположения корабля
	// kx === 0 и ky === 1 — корабль расположен горизонтально,
	// kx === 1 и ky === 0 - вертикально.
	var kx = getRandom(1),
		ky = (kx === 0) ? 1 : 0,
		x, y;
 
	// в зависимости от направления расположения, генерируем
	// начальные координаты
	if (kx === 0) {
		x = getRandom(9);
		y = getRandom(10 - decks);
	} else {
		x = getRandom(10 - decks);
		y = getRandom(9);
	}
 
	// проверяем валидность координат всех палуб корабля:
	// нет ли в полученных координатах или соседних клетках ранее
	// созданных кораблей
	var result = checkLocationShip(x, y, kx, ky, decks, matrix);
	// если координаты невалидны, снова запускаем функцию
	if (!result) return getCoordinatesDecks(decks, matrix);
 
	// создаём объект, свойствами которого будут начальные координаты и
	// коэффициенты определяющие направления палуб
	return {
        x: x,
		y: y,
		kx: kx,
		ky: ky
    };
}

function getRandom(n: number) {
	// n - максимальное значение, которое хотим получить
	return Math.floor(Math.random() * (n + 1));
}

function checkLocationShip (x: number, y: number, kx: number, ky: number, decks: number, matrix: any) {
	// зарегистрируем переменные
    let fromX: number;
    let toX: number = 0;
    let fromY: number;
    let toY: number = 0;
 
	// формируем индексы начала и конца цикла для строк
	// если координата 'x' равна нулю, то это значит, что палуба расположена в самой верхней строке,
	// т. е. примыкает к верхней границе и началом цикла будет строка с индексом 0
	// в противном случае, нужно начать проверку со строки с индексом на единицу меньшим, чем у
	// исходной, т.е. находящейся выше исходной строки
	fromX = (x === 0) ? x : x - 1;
	// если условие истинно - это значит, что корабль расположен вертикально и его последняя палуба примыкает
	// к нижней границе игрового поля
	// поэтому координата 'x' последней палубы будет индексом конца цикла
	if (x + kx * decks === 10 && kx === 1) toX = x + kx * decks;
	// корабль расположен вертикально и между ним и нижней границей игрового поля есть, как минимум, ещё
	// одна строка, координата этой строки и будет индексом конца цикла
	else if (x + kx * decks < 10 && kx === 1) toX = x + kx * decks + 1;
	// корабль расположен горизонтально вдоль нижней границы игрового поля
	else if (x === 9 && kx === 0) toX = x + 1;
	// корабль расположен горизонтально где-то по середине игрового поля
	else if (x < 9 && kx === 0) toX = x + 2;
 
	// формируем индексы начала и конца цикла для столбцов
	// принцип такой же, как и для строк
	fromY = (y === 0) ? y : y - 1;
	if (y + ky * decks === 10 && ky === 1) toY = y + ky * decks;
	else if (y + ky * decks < 10 && ky === 1) toY = y + ky * decks + 1;
	else if (y === 9 && ky === 0) toY = y + 1;
	else if (y < 9 && ky === 0) toY = y + 2;
 
	// запускаем циклы и проверяем выбранный диапазон ячеек
	// если значение текущей ячейки равно 1 (там есть палуба корабля)
	// возвращаем false 
	for (var i = fromX; i < toX; i++) {
		for (var j = fromY; j < toY; j++) {
			if (matrix[i][j] === 1) return false;
		}
	}
	return true;
}
  