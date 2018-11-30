import axios from 'axios';

const baseURL = 'https://diary-2018.herokuapp.com/api/v1/';
const timeout = 60000;
const token = localStorage.getItem('auth_token');
const headers = token
  ? {
    'Content-Type': 'application/json',
    Authorization: `Token ${token}`,
  } : {
    'Content-Type': 'application/json',
  };

const axiosInstance = axios.create({
  baseURL,
  timeout,
  headers,
});

export default axiosInstance;
