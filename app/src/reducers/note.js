import {
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAIL,
  SAVE_NOTE_TO_SERVER_REQUEST,
  SAVE_NOTE_TO_SERVER_SUCCESS,
  SAVE_NOTE_TO_SERVER_FAIL,
  DELETE_THIS_NOTE_REQUEST,
  DELETE_THIS_NOTE_SUCCESS,
  DELETE_THIS_NOTE_FAIL,
  CHANGE_NOTE_NAME,
  CHANGE_NOTE_VALUE,
  CHANGE_NOTE_TAGS,
  CHANGE_NOTE_IS_SECRET,
} from '../constants/Note';

const initialState = {
  _id: '',
  name: '',
  value: '',
  createdAt: '',
  updatedAt: '',
  tags: '',
  owner: '',
  isSecret: false,
  fetching: false,
  saving: false,
  deleting: false,
};

const note = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTE_REQUEST:
      return {
        ...state,
        fetching: action.payload.fetching,
      };

    case FETCH_NOTE_SUCCESS:
      return {
        ...state,
        name: action.payload.note.name,
        value: action.payload.note.value,
        createdAt: new Date(action.payload.note.createdAt).toLocaleString(),
        updatedAt: new Date(action.payload.note.updatedAt).toLocaleString(),
        tags: action.payload.note.tags.join(', '),
        owner: action.payload.note.owner,
        isSecret: action.payload.note.isSecret,
        fetching: action.payload.fetching,
      };

    case FETCH_NOTE_FAIL:
      return {
        ...state,
        fetching: action.payload.fetching,
      };

    case SAVE_NOTE_TO_SERVER_REQUEST:
      return {
        ...state,
        saving: action.payload.saving,
      };

    case SAVE_NOTE_TO_SERVER_SUCCESS:
      return {
        ...state,
        saving: action.payload.saving,
      };

    case SAVE_NOTE_TO_SERVER_FAIL:
      return {
        ...state,
        saving: action.payload.saving,
      };

    case CHANGE_NOTE_NAME:
      return {
        ...state,
        name: action.payload.name,
      };

    case CHANGE_NOTE_VALUE:
      return {
        ...state,
        value: action.payload.value,
      };

    case CHANGE_NOTE_TAGS:
      return {
        ...state,
        tags: action.payload.tags,
      };

    case CHANGE_NOTE_IS_SECRET:
      return {
        ...state,
        isSecret: action.payload.isSecret,
      };

    case DELETE_THIS_NOTE_REQUEST:
      return {
        ...state,
        deleting: action.payload.deleting,
      };

    case DELETE_THIS_NOTE_SUCCESS:
      return {
        ...state,
        deleting: action.payload.deleting,
      };

    case DELETE_THIS_NOTE_FAIL:
      return {
        ...state,
        deleting: action.payload.deleting,
      };

    default:
      return state;
  }
};

export default note;
