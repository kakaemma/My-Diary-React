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
    // console.log(nextProps);
    if (props.isLoggedIn === true) {
      props.history.push('/register');
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
    return (
      <div className="common">
        <div className="common-login-register">
          <div className="container">
            <LoginForm onChange={this.handleChange} handleSubmit={this.handleSubmit} />
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
};

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
});
export { Login as LoginTest };
export default connect(mapStateToProps, { loginUser })(Login);
