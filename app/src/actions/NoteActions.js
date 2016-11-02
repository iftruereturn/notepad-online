/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }]*/

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
import {
  DELETE_NOTE_SUCCESS,
  REFRESH_NOTE_DATA_IN_LIST,
} from '../constants/List';

export const fetchNote = (noteId) => (dispatch) => {
  dispatch({
    type: FETCH_NOTE_REQUEST,
    payload: {
      fetching: true,
      noteId,
    },
  });

  return fetch(`/api/notes/${noteId}`, {
    credentials: 'same-origin',
  }).then((response) => response.json())
    .then((note) => {
      dispatch({
        type: FETCH_NOTE_SUCCESS,
        payload: {
          fetching: false,
          note,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: FETCH_NOTE_FAIL,
        payload: {
          fetching: false,
          noteId,
        },
      });
    });
};

export const saveNoteToServer = (noteId) => (dispatch, getState) => {
  const { note, list } = getState();
  const { name, value, tags, isSecret, owner } = note;

  dispatch({
    type: SAVE_NOTE_TO_SERVER_REQUEST,
    payload: {
      saving: true,
      noteId,
    },
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
      payload: {
        saving: false,
        noteId,
      },
    });

    return fetch(`/api/notes/${noteId}?info=true`, {
      credentials: 'same-origin',
    });
  }).then((response) => response.json())
    .then((noteInfo) => {
      let index;
      let found = false;

      for (index = 0; index < list.foundNotes.length; index++) {
        if (list.foundNotes[index]._id === noteId) {
          found = true;
          break;
        }
      }

      if (found) { // action to list subreducer
        dispatch({
          type: REFRESH_NOTE_DATA_IN_LIST,
          payload: {
            noteInfo,
            index,
          },
        });
      }
    })
  .catch(() => {
    dispatch({
      type: SAVE_NOTE_TO_SERVER_FAIL,
      payload: {
        saving: false,
        noteId,
      },
    });
  });
};

export const changeName = (name) => (dispatch) => {
  dispatch({
    type: CHANGE_NOTE_NAME,
    payload: {
      name,
    },
  });
};

export const changeValue = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_NOTE_VALUE,
    payload: {
      value,
    },
  });
};

export const changeTags = (tags) => (dispatch) => {
  dispatch({
    type: CHANGE_NOTE_TAGS,
    payload: {
      tags,
    },
  });
};

export const changeIsSecret = (isSecret) => (dispatch) => {
  dispatch({
    type: CHANGE_NOTE_IS_SECRET,
    payload: {
      isSecret,
    },
  });
};

export const deleteThisNote = (noteId) => (dispatch, getState) => {
  dispatch({
    type: DELETE_THIS_NOTE_REQUEST,
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
        type: DELETE_THIS_NOTE_SUCCESS,
        payload: {
          deleting: false,
        },
      });

      // Refresh list
      dispatch({
        type: DELETE_NOTE_SUCCESS,
        payload: {
          deleting: false,
          noteIndexToDelete: index,
        },
      });
      browserHistory.push('/notes');
    } else {
      dispatch({
        type: DELETE_THIS_NOTE_FAIL,
        payload: {
          deleting: false,
        },
      });
    }
  }).catch(() => {
    dispatch({
      type: DELETE_THIS_NOTE_FAIL,
      payload: {
        deleting: false,
      },
    });
  });
};
