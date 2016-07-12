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
  name: null,
  value: null,
//  updated: '',
  tags: null,
//  owner: '',
//  private: ''
  savedAt: null
};

export function fetchNote = (noteId) => (dispatch) => {
  // Need to verify if this note is already fetched or now fetching
  // if (getFetchingState())

  return dispatch({
    type: FETCH_NOTE_REQUEST,
    noteId
  });
}

