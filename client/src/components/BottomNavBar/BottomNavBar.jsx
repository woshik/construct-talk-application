import React from 'react';
import { Link } from 'react-router-dom';
import {
  faSearch, faBell, faCogs, faHome, faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BottomNavBar = () => (
  <div className="fixed-bottom">
    <nav className="footer-menu">
      <div className="container pa-0">
        <div className="menu" style={{ margin: '0 auto' }}>
          <Link to="/search" className="nav-item nav-link"><FontAwesomeIcon icon={faSearch} className="fa fa-search" /></Link>
          <Link to="/notification" className="nav-item nav-link"><FontAwesomeIcon icon={faBell} className="fa fa-bell" /></Link>
          <Link to="/setting" className="nav-item nav-link"><FontAwesomeIcon icon={faCogs} className="fa fa-gears" /></Link>
          <Link to="/" className="nav-item nav-link"><FontAwesomeIcon icon={faHome} className="fa fa-home" /></Link>
          <Link to="/profile" className="nav-item nav-link"><FontAwesomeIcon icon={faUser} className="fa fa-user last" /></Link>
        </div>
      </div>
    </nav>
  </div>
);

export default BottomNavBar;
