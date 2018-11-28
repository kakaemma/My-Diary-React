import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from '../../components/login/Login';

configure({ adapter: new Adapter() });

describe('Login', () => {
  let wrapper;
  const props = {
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
  };
  const getEvent = (name = '', value = '') => ({
    preventDefault: jest.fn(),
    target: {
      name,
      value,
    },
  });
  beforeEach(() => {
    wrapper = shallow(<Login {...props} />);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should set state when handleChange is called', () => {
    wrapper.instance().handleChange(getEvent('email', 'test@gmail.com'));
    expect(wrapper.state().email).toEqual('test@gmail.com');
  });
});
