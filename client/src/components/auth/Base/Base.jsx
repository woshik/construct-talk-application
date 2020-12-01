import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../../assets/image/logo-circle.png';
import './base.scss';

const Base = ({ children }) => (
  <div>
    <header>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </header>
    <div className="container">{children}</div>
  </div>
);

Base.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Base;
