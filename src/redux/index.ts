import {
    createStore, combineReducers, applyMiddleware, compose
  } from 'redux';

  import createSagaMiddleware from 'redux-saga';
  import { composeWithDevTools } from 'redux-devtools-extension';
//   import { persistStore, persistReducer } from 'redux-persist';
//   import storage from 'redux-persist/lib/storage';
//   import { createBrowserHistory } from 'history';
//   import { connectRouter, routerMiddleware } from 'connected-react-router';
  
  import { rootSaga } from './saga';

  import { initReducer } from './Initial/reducer';
  import { fieldReducer } from './Field/reducer';
  
  const sagaMiddleware = createSagaMiddleware();
  
  
  const reducer = combineReducers({
    init: initReducer
  });
  
  const rootReducer = (state: any, action: any) => {
    let initState = state;
    if (action.type === 'LOG_OUT_USER') {
      initState = undefined;
    }
    return reducer(initState, action);
  };
  
  
  
  const middleware = composeWithDevTools(
    compose(
      applyMiddleware(
        sagaMiddleware,
        // createLogger({ collapsed: true })
      )
    )
  );
  
  export const store = createStore(
    rootReducer,
    middleware
  );
  
  
  sagaMiddleware.run(rootSaga);
  