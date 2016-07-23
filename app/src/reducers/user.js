import { 
  USER_SIGNUP_REQUEST, 
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL 
} from '../constants/User';

const initialState = {
  username: '',
  password: '',
  logInRequested: false,
  signUpRequested: false,
  logOutRequested: false
};

const user = (state = initialState, action) => {

  switch (action.type) {

    case USER_SIGNUP_REQUEST:
      return {
        ...state,
        username: action.username,
        pasword: action.password,
        signUpRequested: action.signUpRequested
      }

    case USER_SIGNUP_SUCCESS:
      return {
        ...state,
        signUpRequested: action.signUpRequested
      }

    case USER_SIGNUP_FAIL:
      return {
        ...state,
        signUpRequested: action.signUpRequested
      }

    case USER_LOGIN_REQUEST:
      return {
        ...state,
        username: action.username,
        pasword: action.password,
        logInRequested: action.logInRequested
      }

    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        logInRequested: action.logInRequested
      }

    case USER_LOGIN_FAIL:
      return {
        ...state,
        logInRequested: action.logInRequested
      }

    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        logOutRequested: action.logOutRequested
      }

    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        logOutRequested: action.logOutRequested
      }

    case USER_LOGOUT_FAIL:
      return {
        ...state,
        logOutRequested: action.logOutRequested
      }

    default:
      return state;
  }
};