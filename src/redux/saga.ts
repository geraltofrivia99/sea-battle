import { fork } from 'redux-saga/effects';

import { sagaInitial as init } from './Initial/saga';

export function* rootSaga() {
  yield fork(init);

}
