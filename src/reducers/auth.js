import {
  LOGIN_START,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  AUTHENTICATE_USER,
  LOGOUT_USER,
  CLEAR_ALL_AUTH,
  SEARCH_START,
  SEARCH_FAIL,
  SEARCH_AGAIN,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {},
  error: null,
  isLoggedin: false,
  isProgress: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START:
    case SIGNUP_START:
    case SEARCH_START:
      return {
        ...state,
        isProgress: true,
      };
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
        error: null,
        isProgress: false,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case SEARCH_FAIL:
      return {
        ...state,
        isProgress: false,
        error: action.error,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    case CLEAR_ALL_AUTH:
      return {
        ...state,
        error: null,
      };
    case SEARCH_AGAIN:
      return {
        ...state,
        isProgress: false,
      };

    default:
      return state;
  }
}
