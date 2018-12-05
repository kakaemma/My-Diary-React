import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RegisterTest, mapStateToProps } from '../../components/register/Register';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
configure({ adapter: new Adapter() });

describe('Register', () => {
  let wrapper;
  const history = { push: jest.fn() };

  const props = {
    history,
    loading: false,
    handleSubmit: jest.fn(),
    handleChange: jest.fn(),
    registerUser: jest.fn(),
    registrationSuccessful: false,
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
    wrapper = shallow(<RegisterTest {...props} store={store} />);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should not redirect if registration is not successful', () => {
    const nextProps = {
      registrationSuccessful: false,
    };
    wrapper.setProps({ ...nextProps });
    expect(history.push).not.toBeCalled();
  });
  it('should redirect if registration is successful', () => {
    const nextProps = {
      registrationSuccessful: true,
    };
    wrapper.setProps({ ...nextProps });
    expect(history.push).toBeCalled();
  });
  it('should set state when handleChange is called', () => {
    wrapper.instance().handleChange(getEvent('email', 'test@gmail.com'));
    expect(wrapper.state().email).toEqual('test@gmail.com');
  });
  it('should call registerUser when handleSubmit is called', () => {
    wrapper.instance().handleSubmit(getEvent());
    expect(props.registerUser).toBeCalled();
  });
  it('should mapSate to Props', () => {
    const mockState = {
      user: { registrationSuccessful: false },
    };
    const returnedValue = mapStateToProps(mockState);
    expect(returnedValue).toEqual({ registrationSuccessful: false });
  });
});
