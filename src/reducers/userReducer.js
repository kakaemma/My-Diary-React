import { LOGIN_INITIATED, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  isLoggedIn: false,
  logginError: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
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
        logginError: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
