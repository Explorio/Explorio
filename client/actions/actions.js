import * as types from '../constants/actionTypes';

export const logInActionCreator = (username, password) => ({
  type: types.LOG_IN,
  payload: [username, password]
});

export const signUpActionCreator = (username, password) => ({
  type: types.SIGN_UP,
  payload: [username, password]
});

export const addFriendActionCreator = (username) => ({
  type: types.ADD_FRIEND,
  payload: username
});

export const updateLocationActionCreator = (username) => ({
  type: types.UPDATE_LOCATION,
  payload: username
});