import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import notepadOnlineApp from '../reducers';

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    notepadOnlineApp,
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
