import { LOGIN_INITIATED, LOGIN_SUCCESS, LOGINN_ERROR } from './types';

export const loginInitiated = () => ({
  type: LOGIN_INITIATED,
});

export const loginError = (payload) => ({
  type: LOGINN_ERROR,
  payload,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});
