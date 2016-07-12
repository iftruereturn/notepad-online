import { 
  FETCH_NOTE_REQUEST,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAIL,
  SAVE_NOTE_TO_STATE,
  SAVE_NOTE_TO_SERVER_REQUEST,
  SAVE_NOTE_TO_SERVER_SUCCESS,
  SAVE_NOTE_TO_SERVER_FAIL,
  DELETE_THIS_NOTE
} from '../constants/Note';

const initialState = {
  name: '',
  value: '',
//  updated: '',
  tags: '',
//  owner: '',
//  private: ''
  savedAt: '',
  fetching: false
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

    default:
      return state;
  }
};

export default note;
