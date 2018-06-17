export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const signup = user => dispatch => (
  APIUtil.signUp(user)
    .then(payload => dispatch(receiveCurrentUser(payload)))
);

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(payload => dispatch(receiveCurrentUser(payload)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(payload => dispatch(logoutCurrentUser()))
);

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
