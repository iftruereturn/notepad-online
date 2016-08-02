import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import notepadOnlineApp from '../reducers';
import thunk from 'redux-thunk';
import persistState from 'redux-localstorage';

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const enhancer = compose(
    applyMiddleware(...middlewares),
    persistState('auth', 'user')
  );

  return createStore(
    notepadOnlineApp,
    enhancer
  );
};

export default configureStore;