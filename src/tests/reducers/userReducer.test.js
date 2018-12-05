
import {
  LOGIN_INITIATED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REGISTRATION_INITIATED,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
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
  it('should set isLogged to true on login success', () => {
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
  it('should set loading to true when registration is initiated', () => {
    const registrationInitiated = {
      type: REGISTRATION_INITIATED,
    };
    const currentState = userReducer(initialState, registrationInitiated);
    expect(currentState).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it('should set registrationSuccessful to true when registration is successful', () => {
    const registrationSuccess = {
      type: REGISTRATION_SUCCESS,
    };
    const currentState = userReducer(initialState, registrationSuccess);
    expect(currentState).toEqual({
      ...initialState,
      registrationSuccessful: true,
    });
  });
  it('should set loading to false when there is an eeror', () => {
    const registrationError = {
      type: REGISTRATION_ERROR,
    };
    const currentState = userReducer(initialState, registrationError);
    expect(currentState).toEqual({
      ...initialState,
      loading: false,
    });
  });
});
