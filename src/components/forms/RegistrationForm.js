import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const registrationForm = (props) => {
  const { onchange, handleSubmit } = props;
  return (

    <div className="container">
      <div className="register">
        <div className="col-sm-5 registerHeader">
          <h2>Sign up</h2>
        </div>
        <div className="registerContent">
          <div className="smallNotes registerPanel">
            <h3>* Free account</h3>
            <p>Create a free account and have access to your emotions and thoughts on the go</p>
            <hr />
            <h3>* Instant notifications</h3>
            <p>Get notifications prompting you to add entries to your diary on a daily basis</p>
            <hr />
            <h3>Already have an account ?</h3>
            <p>
              <Link to="/"> Sign in to your account </Link>
            </p>
          </div>
          <div className="col-sm-4 regSidebar">
            <form className="registerForm" onSubmit={handleSubmit} id="regForm">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" className="formField" id="name" onChange={onchange} required="required" placeholder="Your name" />
              </div>
              <div className="form-group">
                <input type="email" required="required" name="email" placeholder="Email address" onChange={onchange} className="formField" />
              </div>
              <div className="form-group">
                <input type="password" name="password" required="required" className="formField" onChange={onchange} placeholder="Password" />
              </div>
              <button className="button puppleButton" type="submit" value="Sign in">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
};
registrationForm.propTypes = {
  onchange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default registrationForm;
