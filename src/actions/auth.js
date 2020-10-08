import { APIurls } from '../helper/url';
import {
  AUTHENTICATE_USER,
  CLEAR_ALL_AUTH,
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  SEARCH_AGAIN,
  SEARCH_FAIL,
  SEARCH_START,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from './actionTypes';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}
export function startSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function startFail(errorMessage) {
  return {
    type: LOGIN_FAIL,
    error: errorMessage,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIurls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          localStorage.setItem('token', data.token);
          dispatch(startSuccess(data.user));
          return;
        }
        dispatch(startFail(data.message));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
// Signup section starts here

export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}
export function signupSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
export function signupFail(errorMessage) {
  return {
    type: SIGNUP_FAIL,
    error: errorMessage,
  };
}

export function signup(email, password, name) {
  return (dispatch) => {
    dispatch(startSignup());
    const url = APIurls.signup();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          dispatch(signupSuccess(data.user));
          return;
        }
        dispatch(signupFail(data.message));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser(user) {
  return {
    type: LOGOUT_USER,
    user,
  };
}

export function clearAllAuth() {
  return {
    type: CLEAR_ALL_AUTH,
  };
}
//Search
export function searchStart() {
  return {
    type: SEARCH_START,
  };
}
export function searchFail(errorMessage) {
  return {
    type: SEARCH_FAIL,
    error: errorMessage,
  };
}
export function searchAgain() {
  return {
    type: SEARCH_AGAIN,
  };
}
