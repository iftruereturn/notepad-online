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
} from '../constants/List';

const initialState = {
  creating: false,
  searching: false,
  deleting: false,
  foundNotes: [],
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case FIND_NOTES_REQUEST:
      return {
        ...state,
        searching: action.searching,
      };

    case FIND_NOTES_SUCCESS:
      return {
        ...state,
        foundNotes: action.foundNotes,
        searching: action.searching,
      };

    case FIND_NOTES_FAIL:
      return {
        ...state,
        searching: action.searching,
      };

    case ADD_NEW_NOTE_REQUEST:
      return {
        ...state,
        creating: action.creating,
      };

    case ADD_NEW_NOTE_SUCCESS:
      return {
        ...state,
        creating: action.creating,
      };

    case ADD_NEW_NOTE_FAIL:
      return {
        ...state,
        creating: action.creating,
      };

    case DELETE_NOTE_REQUEST:
      return {
        ...state,
        deleting: action.deleting,
      };

    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deleting: action.deleting,
      };

    case DELETE_NOTE_FAIL:
      return {
        ...state,
        deleting: action.deleting,
      };

    default:
      return state;
  }
};

export default list;
