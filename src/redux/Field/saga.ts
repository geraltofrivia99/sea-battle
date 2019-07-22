import {
    takeLatest, put, select, call, delay, takeEvery
} from 'redux-saga/effects';

import {
	createMatrix,
	getCoordinatesDecks,
	getShipName,
	checkLocationShip
} from '../../utils';

import * as TYPES from './types';

import {
	addToEnemySquadron,
	setDeckInEnemyMatrix,
	setEnemyMatrix
} from '../EnemyField/actions';
import * as ACTIONS from './actions';

import { IState, IFieldCoord, IFc } from '../../types';

const getShipData = (state: IState) => ({
	shipsData: state.field.shipsData,
	matrix: state.field.matrix,
	squadron: state.field.squadron
});
const getFieldSide = (state: IState) => (state.field.fieldSide);
const getEnemyShipData = (state: IState) => ({
	enemyMatrix: state.enemy.enemyMatrix,
	enemySquadron: state.enemy.squadron
})

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
	const matrix = createMatrix();
	yield put(ACTIONS.setMatrix(matrix));
  yield put(ACTIONS.initialField(field));
}

function* startGameWithRandomShips() {
	yield put(ACTIONS.randomLocationShip('user'));
	yield put(ACTIONS.randomLocationShip('enemy'));
}

function* randomLocationShip({ payload }: any) {
		const { field } = payload;
		const isUserField = field === 'user';
		const { shipsData, matrix } = yield select(getShipData);
		const { enemyMatrix } = yield select(getEnemyShipData);
		const currentMatrix = isUserField ? matrix : enemyMatrix;
    for (let i = 0, length = shipsData.length; i < length; i++) {
			const decks = shipsData[i][0];
			for (let j = 0; j < i; j++) {
				const fc = getCoordinatesDecks(decks, currentMatrix);
				fc.decks = decks;
				fc.shipname = shipsData[i][1] + String(j + 1);
				const shipMatrix = yield call(createShip, fc, isUserField);
				const shipForSquadron = {
					matrix: shipMatrix,
					hits: 0,
					decks,
					kx: fc.kx,
					ky: fc.ky,
					shipname: fc.shipname,
					x0: fc.x,
					y0: fc.y,
					isVisible: true,
				}
			yield put(isUserField
				? ACTIONS.addToSquadron(shipForSquadron)
				: addToEnemySquadron(shipForSquadron)
				);
			};
    };
};

function* addSingleShip({ payload }: any) {
	const { ship: { decks, x, y, kx, ky } } = payload;
	const { squadron } = yield select(getShipData);
	const fc = {
		shipname: getShipName(+decks, squadron.length),
		x,
		y,
		kx,
		ky,
		decks
	};
	const shipMatrix = yield call(createShip, fc, true);
	yield put(ACTIONS.addToSquadron({
		matrix: shipMatrix,
		hits: 0,
		decks: +decks,
		kx: fc.kx,
		ky: fc.ky,
		shipname: fc.shipname,
		x0: fc.x,
		y0: fc.y,
		isVisible: true
	}));
}

function* changeShipDirection({ payload }: any) {
	const { ship } = payload;
	const { ky, kx, x0, y0, decks } = ship;
	const { squadron, matrix } = yield select(getShipData);
	yield call(cleanShip, ship);	
	const isValideLocations = yield call(checkLocationShip, x0, y0, ky, kx, decks, matrix);
	if (isValideLocations) {
		const newSquadron = squadron.filter((cur: IFc) => cur.shipname !== ship.shipname);
		yield put(ACTIONS.updateSquadron(newSquadron));
		yield put(ACTIONS.addSingleShipStart({
			kx: ky,
			ky: kx,
			x: x0,
			y: y0,
			decks: decks
		}))
	}
}

function* cleanShip(ship: any) {
	// const { matrix } = yield select(getShipData);
	const { x0: x, y0: y, decks, kx, ky } = ship;
	let k = 0;
	
	while (k < decks) {
		yield put(ACTIONS.setDeckInMatrix({ x: x + k * kx, y: y + k * ky, iconNumber: 0 }));
		k++;
	}
}


function* createShip(fc: any, isUserField: boolean) {
	let k = 0;
	let matrix = [];
	while (k < fc.decks) {
		const coords = { x: fc.x + k * fc.kx, y: fc.y + k * fc.ky, iconNumber: 1 };
		yield put(isUserField ? ACTIONS.setDeckInMatrix(coords) : setDeckInEnemyMatrix(coords));
		matrix.push([fc.x + k * fc.kx, fc.y + k * fc.ky]);
		k++;
	}
	return matrix;
}

export function* sagaField() {
  yield takeLatest(TYPES.INITIAL_FIELD_START, initialFieldStart);
	yield takeEvery(TYPES.RANDOM_LOC_SHIP_START, randomLocationShip);
	yield takeLatest(TYPES.ADD_SINGLE_SHIP_START, addSingleShip);
	yield takeLatest(TYPES.CHANGE_SHIP_DIRECTION, changeShipDirection);
	yield takeLatest(TYPES.START_GAME_WITH_RANDOM_SHIPS, startGameWithRandomShips);
	
}