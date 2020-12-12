import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const requestImageFile = require.context('../../assets/image', false, /.png$/);

const MenuItem = ({ pageName }) => (
  <Link to={`/${pageName}`}>
    <img src={requestImageFile(`./${pageName}.png`).default} alt={pageName} />
  </Link>
);

MenuItem.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default MenuItem;
