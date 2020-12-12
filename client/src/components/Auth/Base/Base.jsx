import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo from '../../../assets/image/logo-circle.png';
import './base.scss';

const Base = ({ children }) => (
  <div>
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
      </Link>
    </header>
    <div className="container">{children}</div>
  </div>
);

Base.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Base;
