import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { userRegistration, clearError } from '../../../redux/registration';
import { registration } from '../../../validation/auth';
import countryList from '../../../assets/data/country';
import specialty from '../../../assets/data/specialty';
import logo from '../../../assets/image/logo.png';
import './RegistrationForm.scss';

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
  otherSpecialty: '',
};

let setTimeOut = null;

const RegistrationForm = () => {
  const regState = useSelector(({ reg }) => reg);
  const dispatch = useDispatch();

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

  return regState.registered ? (
    <Redirect to="/login" />
  ) : (
    <>
      <div className="title">
        <h1>
          Welcome
          <br />
          to
        </h1>
        <img className="form-logo" src={logo} alt="logo" />
      </div>

      <div className="form-wrapper">
        {regState.error ? (
          <div className="error-message mb-4">{regState.error}</div>
        ) : null}

        <form method="POST" onSubmit={formik.handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstName">
                First Name
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  id="firstName"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  required
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <p className="error">{formik.errors.firstName}</p>
                ) : null}
              </label>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="lastName">
                Last Name
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  id="lastName"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  required
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <p className="error">{formik.errors.lastName}</p>
                ) : null}
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
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
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  autoComplete="off"
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
            <div className="form-group col-md-6">
              <label htmlFor="confirmPassword">
                Confirm Password
                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  required
                />
                {formik.touched.confirmPassword
                && formik.errors.confirmPassword ? (
                  <p className="error">{formik.errors.confirmPassword}</p>
                  ) : null}
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="dob">
                Date of Birth
                <input
                  type="date"
                  className="form-control"
                  name="dob"
                  id="dob"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.dob}
                  required
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <p className="error">{formik.errors.dob}</p>
                ) : null}
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="companyName">
                Company Name (if applicable)
                <input
                  type="text"
                  className="form-control"
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
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="country">
                Country
                <select
                  className="form-control"
                  name="country"
                  id="country"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultValue={formik.values.country}
                  required
                >
                  <option value="">Select Country</option>
                  {countryList.map((country) => (
                    <option value={country.code} key={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {formik.touched.country && formik.errors.country ? (
                  <p className="error">{formik.errors.country}</p>
                ) : null}
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="state">
                State
                <input
                  type="text"
                  className="form-control"
                  name="state"
                  id="state"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.state}
                  required
                />
                {formik.touched.state && formik.errors.state ? (
                  <p className="error">{formik.errors.state}</p>
                ) : null}
              </label>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="city">
                city
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="city"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  required
                />
                {formik.touched.city && formik.errors.city ? (
                  <p className="error">{formik.errors.city}</p>
                ) : null}
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="specialty">
                What&apos;s your specialty?
                <select
                  className="form-control"
                  name="specialty"
                  id="specialty"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  defaultValue={formik.values.specialty}
                >
                  <option value="">Select Specialty</option>
                  {specialty.map((item) => (
                    <option value={item.name} key={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
                {formik.touched.specialty && formik.errors.specialty ? (
                  <p className="error">{formik.errors.specialty}</p>
                ) : null}
              </label>
            </div>
          </div>

          {formik.values.specialty === 'Other' ? (
            <div className="form-row">
              <div className="form-group col-12">
                <label htmlFor="otherSpecialty">
                  Other Specialty
                  <input
                    className="form-control"
                    name="otherSpecialty"
                    id="otherSpecialty"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.otherSpecialty}
                  />
                  {formik.touched.otherSpecialty
                  && formik.errors.otherSpecialty ? (
                    <p className="error">{formik.errors.otherSpecialty}</p>
                    ) : null}
                </label>
              </div>
            </div>
          ) : null}

          <div className="form-button">
            <button type="submit" className="btn">
              Sign me up
            </button>
            <Link to="/login" className="btn">
              Back To Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationForm;
