import { browserHistory } from 'react-router';
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

export const fetchNote = (noteId) => (dispatch) => {
  // Need to verify if this note is already fetched or now fetching
  // if (getFetchingState())

  dispatch({
    type: FETCH_NOTE_REQUEST,
    fetching: true,
    noteId,
  });

  return fetch(`/api/notes/${noteId}`, {
    credentials: 'same-origin',
  }).then((response) => response.json())
    .then((note) => {
      dispatch({
        type: FETCH_NOTE_SUCCESS,
        fetching: false,
        note,
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_NOTE_FAIL,
        fetching: false,
        noteId,
      });
    });
};

export const saveNoteToServer = (noteId) => (dispatch, getState) => {
  const { note } = getState();
  const { name, value, tags, isSecret, owner } = note;

  dispatch({
    type: SAVE_NOTE_TO_SERVER_REQUEST,
    saving: true,
    noteId,
  });

  return fetch(`/api/notes/${noteId}`, {
    method: 'put',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ name, value, tags, isSecret, owner }),
    credentials: 'same-origin',
  }).then(() => {
    dispatch({
      type: SAVE_NOTE_TO_SERVER_SUCCESS,
      saving: false,
      noteId,
    });
  }).catch(() => {
    dispatch({
      type: SAVE_NOTE_TO_SERVER_FAIL,
      saving: false,
      noteId,
    });
  });
};

export const changeName = (name) => (dispatch) => {
  dispatch({
    type: CHANGE_NOTE_NAME,
    name,
  });
};

export const changeValue = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_NOTE_VALUE,
    value,
  });
};

export const changeTags = (tags) => (dispatch) => {
  dispatch({
    type: CHANGE_NOTE_TAGS,
    tags,
  });
};

export const changeIsSecret = (isSecret) => (dispatch) => {
  dispatch({
    type: CHANGE_NOTE_IS_SECRET,
    isSecret,
  });
};

export const deleteThisNote = (noteId) => (dispatch) => {
  dispatch({
    type: DELETE_THIS_NOTE_REQUEST,
    deleting: true,
  });

  return fetch(`/api/notes/${noteId}`, {
    method: 'delete',
    credentials: 'same-origin',
  }).then((response) => {
    if (response.status === 200) {
      dispatch({
        type: DELETE_THIS_NOTE_SUCCESS,
        deleting: false,
      });
      browserHistory.push('/notes');
    } else {
      dispatch({
        type: DELETE_THIS_NOTE_FAIL,
        deleting: false,
      });
    }
  }).catch(() => {
    dispatch({
      type: DELETE_THIS_NOTE_FAIL,
      deleting: false,
    });
  });
};
