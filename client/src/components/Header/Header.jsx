import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ pageTitle, companyName }) => (
  <header className="row">
    <div className="col-2">
      <h4 className="text-center">{pageTitle}</h4>
    </div>
    <div className="col-8">
      <h1 className="title">{companyName}</h1>
    </div>
  </header>
);

Header.defaultProps = {
  companyName: 'ConstructTalk',
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  companyName: PropTypes.string,
};

export default Header;
