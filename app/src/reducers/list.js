import {
  FIND_NOTES_REQUEST,
  FIND_NOTES_SUCCESS,
  FIND_NOTES_FAIL,
  ADD_NEW_NOTE_REQUEST,
  ADD_NEW_NOTE_SUCCESS,
  ADD_NEW_NOTE_FAIL,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  OPEN_NOTE_REQUEST,
  OPEN_NOTE_SUCCESS,
  OPEN_NOTE_FAIL
} from '../constants/List';

const initialState = {
  searching: false,
  foundNotes: []
};

const list = (state = initialState, action) => {

  switch (action.type) {
    case FIND_NOTES_REQUEST:
      return {
        ...state,
        searching: action.searching
      }

    case FIND_NOTES_SUCCESS:
      return {
        ...state,
        foundNotes:  action.foundNotes,
        searching: action.searching
      }

    case FIND_NOTES_FAIL:
      return {
        ...state,
        searching: action.searching
      }

    default:
      return state;
  }
};

export default list;
