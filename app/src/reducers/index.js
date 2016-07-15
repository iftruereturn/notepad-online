import { combineReducers } from 'redux';
import note from './note';
import list from './list';

const notepadOnlineApp = combineReducers({
  note,
  list
});

export default notepadOnlineApp;