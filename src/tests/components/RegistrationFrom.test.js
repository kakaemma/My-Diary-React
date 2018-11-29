import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RegistrationForm from '../../components/forms/RegistrationForm';

configure({ adapter: new Adapter() });

describe('RegistrationForm', () => {
  let wrapper;
  const props = {
    handleSubmit: jest.fn(),
    onchange: jest.fn(),
  };
  beforeEach(() => {
    wrapper = shallow(<RegistrationForm {...props} />);
  });
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call onChange when there is a change in the an input field', () => {
    wrapper.find('#name').simulate('change');
    expect(props.onchange).toBeCalled();
  });
  it('should call handleSubmit when the form is submitted', () => {
    wrapper.find('#regForm').simulate('submit');
    expect(props.handleSubmit).toBeCalled();
  });
});
