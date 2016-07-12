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
import { fetchNoteById } from '../utils';

export function fetchNote = (noteId) => (dispatch) => {
  // Need to verify if this note is already fetched or now fetching
  // if (getFetchingState())

  dispatch({
    type: FETCH_NOTE_REQUEST,
    noteId
  });

  let note = fetchNoteById(noteId);

  if (note === undefined) {
    dispatch({
      type: FETCH_NOTE_FAIL,
      noteId
    });
  } else {
    dispatch({
      type: FETCH_NOTE_SUCCESS,
      note
    });
  }
};

