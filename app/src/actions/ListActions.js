/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]*/

import { browserHistory } from 'react-router';
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
} from '../constants/List';

export const findNotesByTags = (queryString) => (dispatch) => {
  let formattedQueryString;

  if (queryString === '') { // new search (without tags)
    formattedQueryString = '';
  } else { // new search (with tags)
    const queryStringRightSide = queryString.replace(/,/g, ' ')
                            .split(' ')
                            .map(el => el.trim())
                            .filter(el => el !== '')
                            .join('&tags=');
    formattedQueryString = `tags=${queryStringRightSide}`;
  }

  dispatch({
    type: FIND_NOTES_REQUEST,
    payload: {
      searching: true,
      formattedQueryString,
    },
  });

  return fetch(`/api/notes?${formattedQueryString}&limit=6`, {
    credentials: 'same-origin',
  }).then((response) => response.json())
    .then((foundNotes) => {
      // console.log(foundNotes);

      // if (loadMore) {
      //   allNotes = [...(getState().list.foundNotes), ...foundNotes];
      // } else {
      //   allNotes = foundNotes;
      // }

      // alert(allNotes);

      const lastNoteCreatedAt = (new Date(foundNotes[foundNotes.length - 1].createdAt)).getTime();

      // console.log(lastNoteCreatedAt);

      dispatch({
        type: FIND_NOTES_SUCCESS,
        payload: {
          foundNotes,
          searching: false,
          lastNoteCreatedAt,
        },
      });
    }).catch(() => {
      dispatch({
        type: FIND_NOTES_FAIL,
        payload: {
          searching: false,
        },
      });
    });
};

export const loadMoreNotes = () => (dispatch, getState) => {
  const listState = getState().list;
  const lastNoteCreatedAt = listState.lastNoteCreatedAt;
  let formattedQueryString = listState.formattedQueryString;

  formattedQueryString += `&date=${lastNoteCreatedAt}&limit=3`;

  dispatch({
    type: LOAD_MORE_NOTES_REQUEST,
    payload: {
      loadingMoreNotes: true,
    },
  });

  return fetch(`/api/notes?${formattedQueryString}`, {
    credentials: 'same-origin',
  }).then((response) => response.json())
    .then((moreNotes) => {
      const allNotes = [...(getState().list.foundNotes), ...moreNotes];
      const lastNoteCreatedAtNew = (new Date(allNotes[allNotes.length - 1].createdAt)).getTime();

      dispatch({
        type: LOAD_MORE_NOTES_SUCCESS,
        payload: {
          loadingMoreNotes: false,
          foundNotes: allNotes,
          lastNoteCreatedAtNew,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: LOAD_MORE_NOTES_FAIL,
        payload: {
          loadingMoreNotes: false,
        },
      });
    });
};

export const addNewNote = () => (dispatch) => {
  dispatch({
    type: ADD_NEW_NOTE_REQUEST,
    payload: {
      creating: true,
    },
  });

  return fetch('/api/notes', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({}),
    credentials: 'same-origin',
  }).then((response) => response.headers.get('location'))
    .then((location) => {
      dispatch({
        type: ADD_NEW_NOTE_SUCCESS,
        payload: {
          creating: false,
        },
      });
      const path = location.slice(4);
      browserHistory.push(path);
    }).catch(() => {
      dispatch({
        type: ADD_NEW_NOTE_FAIL,
        payload: {
          creating: false,
        },
      });
    });
};

export const deleteNote = (noteId) => (dispatch, getState) => {
  dispatch({
    type: DELETE_NOTE_REQUEST,
    payload: {
      deleting: true,
    },
  });

  return fetch(`/api/notes/${noteId}`, {
    method: 'delete',
    credentials: 'same-origin',
  }).then((response) => {
    if (response.status === 200) {
      const listStateNotes = getState().list.foundNotes;
      let index;

      for (index = 0; index < listStateNotes.length; index++) {
        if (listStateNotes[index]._id === noteId) {
          break;
        }
      }

      dispatch({
        type: DELETE_NOTE_SUCCESS,
        payload: {
          deleting: false,
          noteIndexToDelete: index,
        },
      });
    } else {
      dispatch({
        type: DELETE_NOTE_FAIL,
        payload: {
          deleting: false,
        },
      });
    }
  }).catch(() => {
    dispatch({
      type: DELETE_NOTE_FAIL,
      payload: {
        deleting: false,
      },
    });
  });
};
