import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/userActions';
import RegistrationForm from '../forms/RegistrationForm';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.registrationSuccessful === true) {
      nextProps.history.push('/');
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, email, password } = this.state;
    const { registerUser } = this.props;
    const userData = {
      name,
      email,
      password,
    };
    registerUser(userData);
  };

  render() {
    const { loading } = this.props;
    return (
      <div className="common">
        <div className="common-login-register">
          <div className="container">
            <RegistrationForm
              onchange={this.handleChange}
              handleSubmit={this.handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  registrationSuccessful: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,

};
export const mapStateToProps = state => ({
  registrationSuccessful: state.user.registrationSuccessful,
  loading: state.user.loading,
});
export { Register as RegisterTest };
export default connect(mapStateToProps, { registerUser })(Register);
