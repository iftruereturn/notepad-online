import { 
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAIL,
  SAVE_NOTE_TO_STATE,
  SAVE_NOTE_TO_SERVER_REQUEST,
  SAVE_NOTE_TO_SERVER_SUCCESS,
  SAVE_NOTE_TO_SERVER_FAIL,
  DELETE_THIS_NOTE_REQUEST,
  DELETE_THIS_NOTE_SUCCESS,
  DELETE_THIS_NOTE_FAIL,
  CHANGE_NOTE_NAME,
  CHANGE_NOTE_VALUE,
  CHANGE_NOTE_TAGS
} from '../constants/Note';

const initialState = {
  _id: '',
  name: '',
  value: '',
//  updated: '',
  tags: '',
//  owner: '',
//  private: ''
  savedAt: '',
  fetching: false,
  saving: false,
  deleting: false
};

const note = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_NOTE_REQUEST:
      return { 
        ...state, 
        fetching: action.fetching 
      };

    case FETCH_NOTE_SUCCESS:
      return { 
        ...state, 
        name: action.note.name,
        value: action.note.value,
        tags: action.note.tags.join(', '),
        fetching: action.fetching 
      };

    case FETCH_NOTE_FAIL:
      return { 
        ...state, 
        fetching: action.fetching  
      };

    case SAVE_NOTE_TO_SERVER_REQUEST:
      return { 
        ...state,
        saving: action.saving 
      };

    case SAVE_NOTE_TO_SERVER_SUCCESS:
      return { 
        ...state,
        saving: action.saving
      };

    case SAVE_NOTE_TO_SERVER_FAIL:
      return {
        ...state,
        saving: action.saving 
      };

    case CHANGE_NOTE_NAME:
      return {
        ...state,
        name: action.name
      }

    case CHANGE_NOTE_VALUE:
      return {
        ...state,
        value: action.value
      }

    case CHANGE_NOTE_TAGS:
      return {
        ...state,
        tags: action.tags
      }

    case DELETE_THIS_NOTE_REQUEST:
      return {
        ...state,
        deleting: action.deleting
      }

    case DELETE_THIS_NOTE_SUCCESS:
      return {
        ...state,
        deleting: action.deleting
      }

    case DELETE_THIS_NOTE_FAIL:
      return {
        ...state,
        deleting: action.deleting
      }

    default:
      return state;
  }
};

export default note;
