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
import { browserHistory } from 'react-router';

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

export const addNewNote = () => (dispatch) => {
  
  dispatch({
    type: ADD_NEW_NOTE_REQUEST,
    creating: true
  });

  return fetch('/api/notes', {  
      method: 'post',  
      headers: {  
        'Content-type': 'application/json'
      },  
      body: JSON.stringify({}) 
    })
  .then( (response) => {
    return response.headers.get('location');
  })
  .then( (location) => {
    dispatch({
      type: ADD_NEW_NOTE_SUCCESS,
      creating: false
    });
    let path = location.slice(4);
    browserHistory.push(path);
  } )
  .catch( () => {
    dispatch({
      type: ADD_NEW_NOTE_FAIL,
      creating: false
    });
  });

};
