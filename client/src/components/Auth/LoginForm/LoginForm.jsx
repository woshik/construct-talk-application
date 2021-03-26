import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { login } from '../../../validation/auth';
import { userLogin, clearError } from '../../../redux/authentication';
import { clearAll } from '../../../redux/registration';
import backGroundImage from '../../../assets/image/bg.png';

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
    <section>
      <div className="container register-container">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-12 col-lg-6 order-lg-2 bg-desktop">
            <img src={backGroundImage} alt="background" className="img-fluid" />
          </div>
          <div className="col-12 col-md-7 col-lg-6">
            <form className="row" method="POST" onSubmit={formik.handleSubmit}>
              <div className="form-wrapper">
                <div className="row mt-5 justify-content-center p-lg-0 p-md-0 p-sm-0 mx-md-0 mx-sm-0">
                  <div className="col-md-12 title-bg">
                    <h1 className="display-3 text-center login-header">
                      WELCOME BACK TO CONSTRUCTTALK
                    </h1>
                  </div>
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

                  <div className="col-md-12 mt-5">
                    <input
                      name="email"
                      id="email"
                      autoComplete="off"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      required
                      className="form-control custom-form-control"
                      placeholder="Username"
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="error text-danger">{formik.errors.email}</p>
                    ) : null}
                  </div>
                  <div className="col-md-12 mt-3">
                    <input
                      type="password"
                      className="form-control custom-form-control"
                      name="password"
                      id="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      required
                      placeholder="Password"
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <p className="error text-danger">{formik.errors.password}</p>
                    ) : null}
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-register mt-5">L O G I N</button>
                  </div>

                  <div className="submit">
                    <div className="col-12 text-center">
                      <Link to="/registration" className="existing-link">Don&#39;t have an account yet?</Link>
                    </div>

                    <div className="col-12 text-center mt-2">
                      <Link to="/registration" className="register-link">Register</Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LoginForm;
