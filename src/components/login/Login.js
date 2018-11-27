import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
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
export default Login;
