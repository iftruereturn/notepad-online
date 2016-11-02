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
  REFRESH_NOTE_DATA_IN_LIST,
} from '../constants/List';
import {
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from '../constants/Auth';

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
        searching: action.payload.searching,
        formattedQueryString: action.payload.formattedQueryString,
      };

    case FIND_NOTES_SUCCESS:
      return {
        ...state,
        foundNotes: action.payload.foundNotes,
        searching: action.payload.searching,
        lastNoteCreatedAt: action.payload.lastNoteCreatedAt,
      };

    case FIND_NOTES_FAIL:
      return {
        ...state,
        searching: action.payload.searching,
      };

    case LOAD_MORE_NOTES_REQUEST:
      return {
        ...state,
        loadingMoreNotes: action.payload.loadingMoreNotes,
      };

    case LOAD_MORE_NOTES_SUCCESS:
      return {
        ...state,
        foundNotes: action.payload.foundNotes,
        lastNoteCreatedAt: action.payload.lastNoteCreatedAtNew,
        loadingMoreNotes: action.payload.loadingMoreNotes,
      };

    case LOAD_MORE_NOTES_FAIL:
      return {
        ...state,
        loadingMoreNotes: action.payload.loadingMoreNotes,
      };

    case ADD_NEW_NOTE_REQUEST:
      return {
        ...state,
        creating: action.payload.creating,
      };

    case ADD_NEW_NOTE_SUCCESS:
      return {
        ...state,
        creating: action.payload.creating,
      };

    case ADD_NEW_NOTE_FAIL:
      return {
        ...state,
        creating: action.payload.creating,
      };

    case DELETE_NOTE_REQUEST:
      return {
        ...state,
        deleting: action.payload.deleting,
      };

    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deleting: action.payload.deleting,
        foundNotes: [
          ...state.foundNotes.slice(0, action.payload.noteIndexToDelete),
          ...state.foundNotes.slice(action.payload.noteIndexToDelete + 1),
        ],
      };

    case DELETE_NOTE_FAIL:
      return {
        ...state,
        deleting: action.payload.deleting,
      };

    case REFRESH_NOTE_DATA_IN_LIST:
      return {
        ...state,
        foundNotes: state.foundNotes.map((elem, i) => {
          if (i === action.payload.index) {
            return {
              ...elem,
              name: action.payload.noteInfo.name,
              tags: action.payload.noteInfo.tags,
              isSecret: action.payload.noteInfo.isSecret,
              updatedAt: action.payload.noteInfo.updatedAt,
              createdAt: action.payload.noteInfo.createdAt,
            };
          }

          return elem;
        }),
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        foundNotes: [],
      };

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        foundNotes: [],
      };

    default:
      return state;
  }
};

export default list;
