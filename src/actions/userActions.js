import { toast } from 'react-toastify';
import axiosInstance from '../config/axiosInstance';
import {
  registrationInitiated,
  registrationSuccess,
  loginInitiated,
  loginSuccess,
  loginError,
} from './actionCreators';

export const registerUser = userData => dispatch => {
  dispatch(registrationInitiated());
  return axiosInstance.post('auth/signup', userData)
    .then(response => {
      dispatch(registrationSuccess());
      toast.success(response.data.message, { autoClose: 3500, hideProgressBar: true });
    }).catch(() => {
      toast.error('Error in registration', { autoClose: 3500, hideProgressBar: true });
    });
};

export const loginUser = userData => dispatch => {
  dispatch(loginInitiated());
  return axiosInstance.post('auth/login', userData)
    .then((response) => {
      dispatch(loginSuccess());
      toast.success('Login successful', { autoClose: 3500, hideProgressBar: true });
    }).catch(() => {
      dispatch(loginError);
      toast.error('Invalid email or password', { autoClose: 3500, hideProgressBar: true });
    });
};
