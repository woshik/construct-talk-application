import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, faBell, faHome, faUser, faCogs, faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/image/logo-circle.png';

const Header = () => (
  <nav className="custom-navbar">
    <div className="container d-flex justify-content-center align-items-center">
      <Link to="/" className="navbar-brand logo"><img src={logo} alt="logo" width="75px" /></Link>
      <div className="nav-contetent">
        <form className="navbar-form form-inline">
          <div className="input-group search-box">
            <input type="text" id="topsearch" className="form-control" placeholder="Search here..." />
            <span className="input-group-addon"><FontAwesomeIcon icon={faSearch} /></span>
          </div>
        </form>
        <div className="items">
          <Link to="/notification"><FontAwesomeIcon icon={faBell} /></Link>
          <Link to="/setting"><FontAwesomeIcon icon={faCogs} /></Link>
          <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
          <Link to="/profile"><FontAwesomeIcon icon={faUser} /></Link>
          <Link to="/profile"><FontAwesomeIcon icon={faSignOutAlt} className="last" /></Link>
        </div>
      </div>
      <div className="clearfix" />
    </div>
  </nav>
);

export default Header;
