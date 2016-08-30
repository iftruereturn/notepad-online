import { combineReducers } from 'redux';
import note from './note';
import list from './list';
import auth from './auth';

const notepadOnlineApp = combineReducers({
  note,
  list,
  auth,
});

export default notepadOnlineApp;
