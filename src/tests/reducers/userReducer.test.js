
import {
  LOGIN_INITIATED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../actions/types';
import userReducer from '../../reducers/userReducer';

let initialState;
let errorData;

describe('userReducer', () => {
  beforeEach(() => {
    initialState = {
      loading: false,
      isLoggedIn: false,
      logginError: {},
    };
    errorData = 'there was an error';
  });
  it('should run initial state', () => {
    expect(userReducer(initialState, {})).toEqual(initialState);
  });
  it('should set loading to true when login is initiated', () => {
    const action = {
      type: LOGIN_INITIATED,
    };
    const currentState = userReducer(initialState, action);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should set is logged to true on login success', () => {
    const loginAction = {
      type: LOGIN_SUCCESS,
    };
    const logincurrentState = userReducer(initialState, loginAction);
    expect(logincurrentState).toEqual({
      ...initialState,
      isLoggedIn: true,
    });
  });
  it('should add an error when LOGIN_ERROR is passed', () => {
    const loginErrorAction = {
      type: LOGIN_ERROR,
      payload: errorData,
    };
    const currentState = userReducer(initialState, loginErrorAction);
    expect(currentState).toEqual({
      ...initialState,
      logginError: errorData,
    });
  });
});
