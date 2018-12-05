import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LoginTest } from '../../components/login/Login';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

describe('Login', () => {
  let wrapper;
  const history = { push: jest.fn() };
  const props = {
    history,
    loading: false,
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    isLoggedIn: false,
    loginUser: jest.fn(),
  };
  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });
  beforeEach(() => {
    const store = mockStore({ intitialState: {} });
    wrapper = shallow(<LoginTest {...props} store={store} />);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state when handleChange is called', () => {
    wrapper.instance().handleChange(getEvent('email', 'test@gmail.com'));
    expect(wrapper.state().email).toEqual('test@gmail.com');
  });
  it('should call loginUser when handleSubmit is called', () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(props.loginUser).toBeCalled();
  });
  it('should redirect if login is successful', () => {
    const nextProps = {
      isLoggedIn: true,
    };
    wrapper.setProps(nextProps);
    expect(history.push).toBeCalled();
  });
  it('should not redirect if login is not successful', () => {
    const nextProps = {
      isLoggedIn: false,
    };
    wrapper.setProps(nextProps);
    expect(history.push).toBeCalled();
  });
});
