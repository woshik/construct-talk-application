import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { userRegistration, clearError } from '../../../redux/registration';
import { registration } from '../../../validation/auth';
import backGroundImage from '../../../assets/image/bg.png';
import countryList from '../../../assets/data/country';
import specialties from '../../../assets/data/specialty';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  companyName: '',
  dob: '',
  country: '',
  state: '',
  city: '',
  specialty: '',
};

let setTimeOut = null;

const RegistrationForm = () => {
  const regState = useSelector(({ reg }) => reg);
  const dispatch = useDispatch();

  const [countryDropDown, setCountryDropDown] = useState(false);
  const [specialityDropDown, setSpecialityDropDown] = useState(false);

  useEffect(() => {
    clearTimeout(setTimeOut);
    setTimeOut = setTimeout(() => {
      dispatch(clearError());
    }, 3000);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [regState.error]);

  const formik = useFormik({
    initialValues,
    validationSchema: registration,
    onSubmit: (values) => dispatch(userRegistration(values)),
  });

  const handleSpecialityData = (specialit) => {
    formik.setFieldValue('specialty', specialit);
    setSpecialityDropDown(false);
  };

  const handleCountryData = (countryName) => {
    formik.setFieldValue('country', countryName);
    setCountryDropDown(false);
  };

  return regState.registered ? (
    <Redirect to="/login" />
  ) : (
    <div className="container register-container">
      <div className="row mt-5">
        <div className="col-lg-6 col-md-12 col-sm-12 col-12">
          <h3 className="register-header">Welcome To Construct Talk</h3>
          <div className="reg-from-wrapper">
            {regState.error ? (
              <div className="error-message mt-4 mb-2">{regState.error}</div>
            ) : null}
            <form method="POST" onSubmit={formik.handleSubmit}>

              <div className="d-flex flex-row mt-3 form-half">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control custom-form-control-short"
                    name="firstName"
                    id="firstName"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                    required
                    placeholder="First Name"
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <p className="error">{formik.errors.firstName}</p>
                  ) : null}
                </div>
                <div className="form-group" style={{ marginLeft: '1%' }}>
                  <input
                    type="text"
                    className="form-control custom-form-control-short"
                    name="lastName"
                    id="lastName"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                    required
                    placeholder="Last Name"
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <p className="error">{formik.errors.lastName}</p>
                  ) : null}
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="email"
                  className="form-control custom-form-control"
                  name="email"
                  id="email"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  placeholder="Email"
                  required
                />
                {formik.touched.email && formik.errors.email ? (
                  <p className="error">{formik.errors.email}</p>
                ) : null}
              </div>

              <div className="d-flex flex-row mt-3 form-half">
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    placeholder="Password"
                    required
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <p className="error">{formik.errors.password}</p>
                  ) : null}
                </div>
                <div className="form-group" style={{ marginLeft: '1%' }}>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    id="confirmPassword"
                    autoComplete="off"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                    placeholder="Confirm Password"
                    required
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <p className="error">{formik.errors.confirmPassword}</p>
                  ) : null}
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="date"
                  className="form-control custom-form-control"
                  name="dob"
                  id="dob"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                  placeholder="Date of Birth"
                  required
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <p className="error">{formik.errors.dob}</p>
                ) : null}
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control custom-form-control"
                  placeholder="Company Name (Optional)"
                  name="companyName"
                  id="companyName"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.companyName}
                />
                {formik.touched.companyName && formik.errors.companyName ? (
                  <p className="error">{formik.errors.companyName}</p>
                ) : null}
              </div>

              <div className="dropdown mt-3">
                <button
                  className="btn register-dropdown dropdown-toggle"
                  type="button"
                  onClick={() => setCountryDropDown(true)}
                >
                  {formik.values.country ? formik.values.country : 'Country'}
                </button>
                <div
                  className={countryDropDown ? 'show dropdown-menu' : 'dropdown-menu'}
                  aria-labelledby="dropdownMenuButton"
                  style={{
                    height: '250px',
                    overflow: 'scroll',
                    overflowX: 'auto',
                  }}
                >
                  {countryList.map((country) => (
                    <span
                      onClick={() => handleCountryData(country.name)}
                      onKeyPress={() => handleCountryData(country.name)}
                      key={country.code}
                      tabIndex="-1"
                      role="button"
                      className="dropdown-item"
                    >
                      {country.name}
                    </span>
                  ))}

                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  id="state"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                  placeholder="State"
                  required
                />
                {formik.touched.state && formik.errors.state ? (
                  <p className="error">{formik.errors.state}</p>
                ) : null}
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="city"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  placeholder="City"
                  required
                />
                {formik.touched.city && formik.errors.city ? (
                  <p className="error">{formik.errors.city}</p>
                ) : null}
              </div>

              <div className="dropdown mt-3">
                <button
                  className="btn register-dropdown dropdown-toggle"
                  type="button"
                  onClick={() => setSpecialityDropDown(true)}
                >
                  {formik.values.specialty ? formik.values.specialty : 'Specialty'}
                </button>
                <div
                  className={specialityDropDown ? 'show dropdown-menu' : 'dropdown-menu'}
                  style={{
                    height: '250px',
                    overflow: 'scroll',
                    overflowX: 'auto',
                  }}
                >
                  {specialties.map((specialty) => (
                    <span
                      onClick={() => handleSpecialityData(specialty.name)}
                      onKeyPress={() => handleSpecialityData(specialty.name)}
                      key={specialty.id}
                      tabIndex="-1"
                      role="button"
                      className="dropdown-item"
                    >
                      {specialty.name}
                    </span>
                  ))}

                </div>
              </div>

              <div className="submit-reg text-center">
                <button type="submit" className="btn btn-register mt-5">Register</button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-12 col-sm-12 col-12 login-section "
          style={{ textAlign: 'right' }}
        >
          <Link to="/login" className="btn btn-success btn-login">Login</Link>
          <div>
            <img src={backGroundImage} alt="background" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
