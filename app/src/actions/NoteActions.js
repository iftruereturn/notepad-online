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
// import { fetchNoteById } from '../utils';

export const fetchNote = (noteId) => (dispatch) => {
  // Need to verify if this note is already fetched or now fetching
  // if (getFetchingState())

  dispatch({
    type: FETCH_NOTE_REQUEST,
    noteId
  });

  return fetch('/api/notes/' + noteId).then( (response) => {
      return response.json();
    })
    .then( (note) => {
      dispatch({
        type: FETCH_NOTE_SUCCESS,
        note
      });
    })
    .catch( () => {
      dispatch({
        type: FETCH_NOTE_FAIL,
        noteId
      });
    });
};

export const saveNoteToServer = (noteId, note) => (dispatch) => {

  dispatch({
    type: SAVE_NOTE_TO_SERVER_REQUEST,
    noteId
  });

  return fetch('/api/notes/' + noteId, {  
      method: 'put',  
      headers: {  
        'Content-type': 'application/json'
      },  
      body: JSON.stringify(note) 
    })
    .then( (res) => { 
      dispatch({
        type: SAVE_NOTE_TO_SERVER_SUCCESS,
        noteId
      }); 
    })
    .catch( (res) => {
      dispatch({
        type: SAVE_NOTE_TO_SERVER_FAIL,
        noteId
      });
    });
};

