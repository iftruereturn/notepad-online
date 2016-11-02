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

const initialState = {
  username: '',
  logInRequested: false,
  signUpRequested: false,
  logOutRequested: false,
  checkIfLoggedInRequested: false,
  loggedIn: false,
  errorMessage: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {

    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        username: action.payload.username,
        signUpRequested: action.payload.signUpRequested,
      };

    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signUpRequested: action.payload.signUpRequested,
        errorMessage: action.payload.errorMessage,
      };

    case USER_SIGNUP_FAIL:
      return {
        ...state,
        signUpRequested: action.payload.signUpRequested,
        errorMessage: action.payload.errorMessage,
      };

    case USER_LOGIN_REQUEST:
      return {
        ...state,
        username: action.payload.username,
        logInRequested: action.payload.logInRequested,
      };

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        logInRequested: action.payload.logInRequested,
        loggedIn: action.payload.loggedIn,
        errorMessage: action.payload.errorMessage,
      };

    case USER_LOGIN_FAIL:
      return {
        ...state,
        logInRequested: action.payload.logInRequested,
        errorMessage: action.payload.errorMessage,
      };

    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        logOutRequested: action.payload.logOutRequested,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        logOutRequested: action.payload.logOutRequested,
        loggedIn: action.payload.loggedIn,
        errorMessage: action.payload.errorMessage,
      };

    case USER_LOGOUT_FAIL:
      return {
        ...state,
        logOutRequested: action.payload.logOutRequested,
        errorMessage: action.payload.errorMessage,
      };

    case CHECK_IF_LOGGED_IN_REQUEST:
      return {
        ...state,
        checkIfLoggedInRequested: action.payload.checkIfLoggedInRequested,
      };

    case CHECK_IF_LOGGED_IN_SUCCESS:
      return {
        ...state,
        username: action.payload.username,
        checkIfLoggedInRequested: action.payload.checkIfLoggedInRequested,
        loggedIn: action.payload.loggedIn,
        errorMessage: action.payload.errorMessage,
      };

    case CHECK_IF_LOGGED_IN_FAIL:
      return {
        ...state,
        checkIfLoggedInRequested: action.payload.checkIfLoggedInRequested,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default auth;
