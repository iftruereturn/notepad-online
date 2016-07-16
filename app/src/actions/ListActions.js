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
  OPEN_NOTE_REQUEST,
  OPEN_NOTE_SUCCESS,
  OPEN_NOTE_FAIL
} from '../constants/List';

export const findNotesByTags = (queryString) => (dispatch) => {

  let formattedQueryString;

  if (queryString === '') {
    formattedQueryString = '';
  } else {
    formattedQueryString = '?tags=' + queryString.split(' ')
                                      .map( el => el.trim() )
                                      .filter( el => el !== '' )
                                      .join('&tags=');
  }

  console.log(formattedQueryString);

  dispatch({
    type: FIND_NOTES_REQUEST,
    searching: true
  });

  return fetch('/api/notes' + formattedQueryString).then( (response) => {
      return response.json();
    })
    .then( (foundNotes) => {
      dispatch({
        type: FIND_NOTES_SUCCESS,
        foundNotes,
        searching: false
      });
    })
    .catch( () => {
      dispatch({
        type: FIND_NOTES_FAIL,
        searching: false
      });
    });
};