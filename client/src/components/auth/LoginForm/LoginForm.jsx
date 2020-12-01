import React from 'react';
import './LoginForm.scss';
import logo from '../../../assets/image/logo.png';

const LoginForm = () => (
  <>
    <div className="title">
      <h1>
        Welcome Back
        <br />
        to
        <br />
        <img className="form-logo" src={logo} alt="logo" />
      </h1>
    </div>

    <div className="form-wrapper">
      <form method="POST" action="#">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            autoComplete="off"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="form-button">
          <a href="./registration.html" className="btn">
            Create an Account
          </a>
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>

    <div className="footer">
      <h2>Connecting Construction Professionals!</h2>
    </div>
  </>
);

export default LoginForm;
