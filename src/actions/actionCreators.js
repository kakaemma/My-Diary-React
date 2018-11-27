import { LOGIN_INITIATED, LOGIN_SUCCESS, LOGIN_ERROR } from './types';

export const loginInitiated = () => ({
  type: LOGIN_INITIATED,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});
