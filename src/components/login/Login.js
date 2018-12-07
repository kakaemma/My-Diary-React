import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from '../forms/LoginForm';
import { loginUser } from '../../actions/userActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentWillReceiveProps(props) {
    if (props.isLoggedIn === true) {
      props.history.push('/dasboard');
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const user = {
      email,
      password,
    };
    const { loginUser } = this.props;
    loginUser(user);
  };

  render() {
    const { loading } = this.props;

    return (
      <div className="common">
        <div className="common-login-register">
          <div className="container">
            <LoginForm
              onChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  loading: state.user.loading,
});
export { Login as LoginTest };
export default connect(mapStateToProps, { loginUser })(Login);
