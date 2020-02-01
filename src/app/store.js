import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import invariant from 'redux-immutable-state-invariant';

import sagas from './sagas';
import reducers from './reducers';

const storeBuilder = () => {
  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middleware.unshift(invariant());
  }

  const enhancer = composeWithDevTools(applyMiddleware(...middleware));

  const store = createStore(reducers, enhancer);

  sagas.map(saga => (sagaMiddleware.run(saga)));

  return store;
}

export default storeBuilder;