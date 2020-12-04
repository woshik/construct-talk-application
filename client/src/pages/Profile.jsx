import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../redux/authentication';
import '../assets/scss/profile.scss';

import search from '../assets/image/search.png';
import settings from '../assets/image/settings.png';
import home from '../assets/image/home.png';
import logoutIcon from '../assets/image/logout.png';
import circleLogo from '../assets/image/logo-circle.png';

const Profile = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="container-fluid">
      <main className="row">
        <div className="col-2 mt-4">
          <h4>Profile</h4>
        </div>
        <div className="col-8 content">
          <div className="row no-gutters profile-image">
            <div className="col-6">
              <img src="https://www.businessstudynotes.com/wp-content/uploads/2016/04/Company-Meeting.png" alt="Company-Meeting" />
            </div>
            <div className="col-6">
              <img src="https://www.shoosmiths.co.uk/-/media/images/specialisms/construction-engineering-1920x1066.jpg" alt="construction-engineering" />
            </div>
          </div>
          <div className="company-label">
            <h1>ConstrucTTalk</h1>
          </div>
          <div className="row p-5 p-b-3 more-options">
            <div className="col-4">
              <ul>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Photos</Link>
                </li>
                <li>
                  <Link to="/">Videos</Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>
                  <Link to="/">Reviews</Link>
                </li>
                <li>
                  <Link to="/">Q&A</Link>
                </li>
                <li>
                  <Link to="/">Expricence</Link>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li>
                  <Link to="/">Connections</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="rabon" />
          <div className="row p-4">
            <div className="col-12 comment-block mb-3">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="d-flex align-items-center profile-image">
                    <img src="https://yt3.ggpht.com/a/AATXAJyyCMvECo4pF8Y4_tkQmRCfNoVxCpx_tsRrKgaW=s900-c-k-c0x00ffffff-no-rj" alt="construction-engineering" className="card-img" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">
                        <b>Riverbend Nursery</b>
                        connected a status with
                        <b>Tool Box Talk</b>
                      </p>
                      <p className="card-text">&quote;We had such a wounderful time interviewing Andrew and lacet on therir new site Tool Box Talk!&quote;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 comment-block mt-3 mb-3">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="d-flex align-items-center profile-image">
                    <img src="https://yt3.ggpht.com/a/AATXAJyyCMvECo4pF8Y4_tkQmRCfNoVxCpx_tsRrKgaW=s900-c-k-c0x00ffffff-no-rj" alt="construction-engineering" className="card-img" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <p className="card-text">
                        <b>Riverbend Nursery</b>
                        connected a status with
                        <b>Tool Box Talk</b>
                      </p>
                      <p className="card-text">&quote;We had such a wounderful time interviewing Andrew and lacet on therir new site Tool Box Talk!&quote;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-2 d-flex flex-column align-items-center">
          <div className="row mb-5 mt-4">
            <img className="company-logo" src={circleLogo} alt="logo" />
          </div>
          <div className="row left-sidebar">
            <div className="col-6">
              <Link to="./search.html">
                <img src={search} alt="search" />
              </Link>
            </div>
            <div className="col-6">
              <Link to="./setting.html">
                <img src={settings} alt="settings" />
              </Link>
            </div>
            <div className="col-6">
              <Link to="./home.html">
                <img src={home} alt="home" />
              </Link>
            </div>
            <div className="col-6">
              <span onClick={logoutHandler} tabIndex="0" role="button" onKeyDown={logoutHandler}>
                <img src={logoutIcon} alt="logout" />
              </span>
            </div>
          </div>
          <div className="row mt-5">
            <h4 className="label">ADS</h4>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
