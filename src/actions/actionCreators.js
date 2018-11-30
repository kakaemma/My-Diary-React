import {
  LOGIN_INITIATED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION_INITIATED,
  REGISTRATION_SUCCESS,
} from './types';

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

export const registrationInitiated = () => ({
  type: REGISTRATION_INITIATED,
});
export const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
});
