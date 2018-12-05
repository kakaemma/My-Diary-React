import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginForm from '../../components/forms/LoginForm';

configure({ adapter: new Adapter() });

describe('LoginForm', () => {
  let wrapper;
  const props = {
    loading: false,
    handleSubmit: jest.fn(),
    onChange: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<LoginForm {...props} />);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call handleSubmit when the form is submitted', () => {
    wrapper.find('#loginForm').simulate('submit');
    expect(props.handleSubmit).toBeCalled();
  });
  it('should call handleChange when there is a change in the email field', () => {
    wrapper.find('#email').simulate('change');
    expect(props.onChange).toBeCalled();
  });
  it('should call handleChange when there is a change in the password field', () => {
    wrapper.find('#password').simulate('change');
    expect(props.onChange).toBeCalled();
  });
});
