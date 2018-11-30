import { toast } from 'react-toastify';
import axiosInstance from '../config/axiosInstance';
import {
  registrationInitiated,
  registrationSuccess,
} from './actionCreators';

const registerUser = userData => dispatch => {
  dispatch(registrationInitiated());
  return axiosInstance.post('auth/signup', userData)
    .then(response => {
      dispatch(registrationSuccess());
      toast.success(response.data.message, { autoClose: 3500, hideProgressBar: true });
    }).catch(() => {
      toast.error('Error in registration', { autoClose: 3500, hideProgressBar: true });
    });
};
export default registerUser;
