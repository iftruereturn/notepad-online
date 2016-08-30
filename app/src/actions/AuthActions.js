import { browserHistory } from 'react-router';
import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  CHECK_IF_LOGGED_IN_REQUEST,
  CHECK_IF_LOGGED_IN_SUCCESS,
  CHECK_IF_LOGGED_IN_FAIL,
} from '../constants/Auth';

export const signUp = (username, password) => (dispatch) => {
  // Need to verify if this user if already exist

  dispatch({
    type: USER_SIGNUP_REQUEST,
    signUpRequested: true,
    username,
  });

  return fetch('/api/signup', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'same-origin',
  }).then((response) => {
    // Because CORS
    if (response.status === 401
        || response.status === 404
        || response.status === 502) {
      throw new Error();
    }

    dispatch({
      type: USER_SIGNUP_SUCCESS,
      signUpRequested: false,
      errorMessage: '',
    });
  }).catch(() => {
    dispatch({
      type: USER_SIGNUP_FAIL,
      signUpRequested: false,
      errorMessage: 'Signup error',
    });
  });
};

export const logIn = (username, password) => (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST,
    logInRequested: true,
    username,
  });

  return fetch('/api/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
    credentials: 'same-origin',
  }).then((response) => {
    // Because CORS
    if (response.status === 401
        || response.status === 404
        || response.status === 502) {
      throw new Error();
    }

    dispatch({
      type: USER_LOGIN_SUCCESS,
      logInRequested: false,
      loggedIn: true,
      errorMessage: '',
    });

    browserHistory.push('/');
  }).catch(() => {
    dispatch({
      type: USER_LOGIN_FAIL,
      logInRequested: false,
      errorMessage: 'Login error',
    });
  });
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: USER_LOGOUT_REQUEST,
    logOutRequested: true,
  });

  return fetch('/api/logout', {
    credentials: 'same-origin',
  }).then((response) => {
    // Because CORS
    if (response.status === 401
        || response.status === 404
        || response.status === 502) {
      throw new Error();
    }

    dispatch({
      type: USER_LOGOUT_SUCCESS,
      logOutRequested: false,
      loggedIn: false,
      errorMessage: '',
    });

    browserHistory.push('/');
  }).catch(() => {
    dispatch({
      type: USER_LOGOUT_FAIL,
      logOutRequested: false,
      errorMessage: 'Logout error',
    });
  });
};

export const checkIfLoggedIn = () => (dispatch) => {
  dispatch({
    type: CHECK_IF_LOGGED_IN_REQUEST,
    checkIfLoggedInRequested: true,
  });

  return fetch('/api/account', {
    credentials: 'same-origin',
  }).then((response) => {
    // Because CORS
    if (response.status === 401
        || response.status === 404
        || response.status === 502) {
      throw response;
    }

    return response.json();
  }).then((json) => {
    dispatch({
      type: CHECK_IF_LOGGED_IN_SUCCESS,
      checkIfLoggedInRequested: false,
      username: json.username,
      loggedIn: true,
      errorMessage: '',
    });
  }).catch(() => {
    dispatch({
      type: CHECK_IF_LOGGED_IN_FAIL,
      checkIfLoggedInRequested: false,
      errorMessage: '',
    });
  });
};
