import { 
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAIL,
  SAVE_NOTE_TO_STATE,
  SAVE_NOTE_TO_SERVER_REQUEST,
  SAVE_NOTE_TO_SERVER_SUCCESS,
  SAVE_NOTE_TO_SERVER_FAIL,
  DELETE_THIS_NOTE,
  CHANGE_NOTE_NAME,
  CHANGE_NOTE_VALUE,
  CHANGE_NOTE_TAGS
} from '../constants/Note';

const initialState = {
  name: '',
  value: '',
//  updated: '',
  tags: '',
//  owner: '',
//  private: ''
  savedAt: '',
  fetching: false,
  saving: false
};

const note = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_NOTE_REQUEST:
      return { 
        ...state, 
        fetching: true 
      };

    case FETCH_NOTE_SUCCESS:
      return { 
        ...state, 
        name: action.note.name,
        value: action.note.value,
        tags: action.note.tags,
        fetching: false
      };

    case FETCH_NOTE_FAIL:
      return state;

    case SAVE_NOTE_TO_SERVER_REQUEST:
      return { 
        ...state,
        saving: true
      };

    case SAVE_NOTE_TO_SERVER_SUCCESS:
      return { 
        ...state,
        saving: false
      };

    case SAVE_NOTE_TO_SERVER_FAIL:
      return state;

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

    default:
      return state;
  }
};

export default note;
