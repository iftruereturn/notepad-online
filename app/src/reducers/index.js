import { combineReducers } from 'redux';
import note from './note';
import list from './list';
import user from './user';

const notepadOnlineApp = combineReducers({
  note,
  list,
  user
});

export default notepadOnlineApp;