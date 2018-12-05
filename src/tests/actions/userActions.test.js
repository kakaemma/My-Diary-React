import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { registerUser, loginUser } from '../../actions/userActions';
import axiosInstance from '../../config/axiosInstance';
import {
  REGISTRATION_INITIATED,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_INITIATED,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../actions/types';

describe('userActions', () => {
  let store;
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axiosInstance);
    const mockStore = configureMockStore([thunk]);
    store = mockStore({});
  });
  it('should register a user', () => {
    const userData = {
      name: 'test',
      email: 'test@gmail.com',
      password: 'paswdr34',
    };
    const response = {
      message: 'successfully added',
    };
    const expectedActions = [
      { type: REGISTRATION_INITIATED },
      { type: REGISTRATION_SUCCESS },
    ];
    mock.onPost('auth/signup', userData).reply(201, response);
    store.dispatch(registerUser(userData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('should not register a user if there is an error', () => {
    const userData = {
      name: 'test',
      email: 'test@gmail.com',
      password: 'paswdr34',
    };
    const response = {
      message: 'registration error',
    };
    const expectedActions = [
      { type: REGISTRATION_INITIATED },
      {
        type: REGISTRATION_ERROR,
      },
    ];
    mock.onPost('auth/signup', userData).reply(400, response);
    store.dispatch(registerUser(userData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('should login a user', () => {
    const userData = {
      email: 'test@gmail.com',
      password: 'paswdr34',
    };
    const response = {
      message: 'successfully login',
    };
    const expectedActions = [
      { type: LOGIN_INITIATED },
      { type: LOGIN_SUCCESS },
    ];
    mock.onPost('auth/login', userData).reply(200, response);
    store.dispatch(loginUser(userData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it('it should not login a user with wrong details', () => {
    const userData = {
      email: 'wrongemail@gmail.com',
      password: 'paswdr34',
    };
    const response = {
      message: 'successfully login',
    };
    const expectedActions = [
      { type: LOGIN_INITIATED },
      { type: LOGIN_ERROR },
    ];
    mock.onPost('auth/login', userData).reply(400, response);
    store.dispatch(loginUser(userData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
