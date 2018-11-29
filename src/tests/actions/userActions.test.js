import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import registerUser from '../../actions/userActions';
import axiosInstance from '../../config/axiosInstance';
import {
  REGISTRATION_INITIATED, REGISTRATION_SUCCESS,
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
      message: 'successfully added',
    };
    const expectedActions = [
      { type: REGISTRATION_INITIATED },
    ];
    mock.onPost('auth/signup', userData).reply(400, response);
    store.dispatch(registerUser(userData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
