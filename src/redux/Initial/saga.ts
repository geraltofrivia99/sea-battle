import {
    takeLatest,
} from 'redux-saga/effects';

import * as TYPES from './types';

function* initial() {
    yield console.log('hello');
}

export function* sagaInitial() {
yield takeLatest(TYPES.INITIAL, initial);
}
  