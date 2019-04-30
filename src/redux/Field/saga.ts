import {
    takeLatest, put,
} from 'redux-saga/effects';

import { createMatrix } from '../../utils';

import * as TYPES from './types';
import * as ACTIONS from './actions';

function* initialField() {
    yield console.log('hello');
}

function* randomLocationShip() {
    yield console.log('rlshp');
    const matrix = createMatrix();
    yield put(ACTIONS.setMatrix(matrix));
    
}

export function* sagaField() {
    yield takeLatest(TYPES.INITIAL_FIELD, initialField);
    yield takeLatest(TYPES.RANDOM_LOC_SHIP_START, randomLocationShip);
}
  