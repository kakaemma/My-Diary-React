import {
  LOGIN_INITIATED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION_INITIATED,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
} from '../actions/types';

const initialState = {
  loading: false,
  isLoggedIn: false,
  logginError: {},
  registrationSuccessful: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_INITIATED:
      return {
        ...state,
        loading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registrationSuccessful: true,
      };
    case REGISTRATION_ERROR:
      return {
        ...state,
        loading: false,
      };
    case LOGIN_INITIATED:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        logginError: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
