import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const LoginForm = (props) => {
  const { onChange, handleSubmit } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 centeredPanel">
          <div className="loginPanel">
            <h3>Login to your account</h3>
            <form onSubmit={handleSubmit} id="loginForm">
              <div className="form-group">
                <div className="input-group mb-3 with-margin">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="mail"><i className="fas fa-envelope" /></span>
                  </div>
                  <input type="text" name="email" onChange={onChange} id="email" className="formField" placeholder="Email Address" />
                </div>
              </div>
              <div className="form-group">
                <div className="input-group mb-3 with-margin">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="mail"><i className="fas fa-key" /></span>
                  </div>
                  <input type="password" name="password" onChange={onChange} id="password" className="formField" placeholder="Password" />
                </div>
              </div>
              <button className="button puppleButton" type="submit">Sign in</button>
            </form>
            <p className="panelFooter">
            New to My Diary ?
              <span><Link to="/register"> Signup </Link></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
LoginForm.propTypes = {
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
