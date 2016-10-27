import {
  FIND_NOTES_REQUEST,
  FIND_NOTES_SUCCESS,
  FIND_NOTES_FAIL,
  LOAD_MORE_NOTES_REQUEST,
  LOAD_MORE_NOTES_SUCCESS,
  LOAD_MORE_NOTES_FAIL,
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
  lastNoteCreatedAt: 0,
  formattedQueryString: '',
  loadingMoreNotes: false,
};

const list = (state = initialState, action) => {
  switch (action.type) {
    case FIND_NOTES_REQUEST:
      return {
        ...state,
        searching: action.searching,
        formattedQueryString: action.formattedQueryString,
      };

    case FIND_NOTES_SUCCESS:
      return {
        ...state,
        foundNotes: action.foundNotes,
        searching: action.searching,
        lastNoteCreatedAt: action.lastNoteCreatedAt,
      };

    case FIND_NOTES_FAIL:
      return {
        ...state,
        searching: action.searching,
      };

    case LOAD_MORE_NOTES_REQUEST:
      return {
        ...state,
        loadingMoreNotes: action.loadingMoreNotes,
      };

    case LOAD_MORE_NOTES_SUCCESS:
      return {
        ...state,
        foundNotes: action.foundNotes,
        lastNoteCreatedAt: action.lastNoteCreatedAtNew,
        loadingMoreNotes: action.loadingMoreNotes,
      };

    case LOAD_MORE_NOTES_FAIL:
      return {
        ...state,
        loadingMoreNotes: action.loadingMoreNotes,
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
        foundNotes: [
          ...state.foundNotes.slice(0, action.noteIndexToDelete),
          ...state.foundNotes.slice(action.noteIndexToDelete + 1),
        ],
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
