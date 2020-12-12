import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { login } from '../../../validation/auth';
import { userLogin, clearError } from '../../../redux/authentication';
import { clearAll } from '../../../redux/registration';

import logo from '../../../assets/image/logo.png';
import './LoginForm.scss';

const initialValues = {
  email: '',
  password: '',
};

let setTimeOut;

const LoginForm = () => {
  const regState = useSelector(({ reg }) => reg);
  const authState = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (regState.registered) {
      setTimeout(() => {
        dispatch(clearAll());
      }, 3000);
    }
  }, []);

  useEffect(() => {
    clearTimeout(setTimeOut);
    setTimeOut = setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  }, [authState.error]);

  const formik = useFormik({
    initialValues,
    validationSchema: login,
    onSubmit: (values) => dispatch(userLogin(values)),
  });

  return (
    <>
      <div className="title">
        <h1>
          Welcome Back
          <br />
          to
        </h1>
        <img className="form-logo" src={logo} alt="logo" />
      </div>

      <div className="form-wrapper">
        {authState.error ? (
          <div className="error-message mb-4">
            {authState.error}
          </div>
        ) : null}

        {regState.registered ? (
          <div className="success-message mb-4">
            You are successfully registered
          </div>
        ) : null}

        <form method="POST" onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">
              Email
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                autoComplete="off"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                required
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="error">{formik.errors.email}</p>
              ) : null}
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                required
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="error">{formik.errors.password}</p>
              ) : null}
            </label>
          </div>
          <div className="form-button">
            <button type="submit" className="btn">
              Login
            </button>
            <Link to="/registration" className="btn">
              Create an Account
            </Link>
          </div>
        </form>
      </div>

      <div className="footer">
        <h2>Connecting Construction Professionals!</h2>
      </div>
    </>
  );
};

export default LoginForm;
