import { fork } from 'redux-saga/effects';

import { sagaInitial as init } from './Initial/saga';
import { sagaField as field } from './Field/saga';
import { sagaEnemyField as enemy } from './EnemyField/saga';

export function* rootSaga() {
  yield fork(init);
  yield fork(field);
  yield fork(enemy);
}
