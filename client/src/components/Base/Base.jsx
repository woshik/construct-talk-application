import React from 'react';
import PropTypes from 'prop-types';

// components
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';

const Base = ({ pageTitle, children }) => (
  <div className="container-fluid">
    <Header pageTitle={pageTitle} />
    <main className="row">
      <div className="col-2">
        <div className="row mt-5">
          <div className="col-12">
            <h4 className="label">Connections</h4>
            <div className="card mt-3 mb-3">
              <div className="row no-gutters">
                <div className="col-md-4 d-flex align-items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAPwAc93me5AXKq6r9nQpoMG2qdqLyqE8Xw&usqp=CAU"
                    alt="DPR"
                    className="card-img"
                  />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                  <div className="card-body">
                    <p className="card-text">DPR Construction</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4 d-flex align-items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAPwAc93me5AXKq6r9nQpoMG2qdqLyqE8Xw&usqp=CAU"
                    alt="DPR"
                    className="card-img"
                  />
                </div>
                <div className="col-md-8 d-flex align-items-center">
                  <div className="card-body">
                    <p className="card-text">DPR Construction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-8">{children}</div>
      <div className="col-2 d-flex flex-column align-items-center">
        <div className="row mb-5">
          <Logo />
        </div>
        <div className="row left-sidebar">
          <Menu />
        </div>
        <div className="row mt-5">
          <h4 className="label">ADS</h4>
        </div>
      </div>
    </main>
  </div>
);

Base.propTypes = {
  children: PropTypes.element.isRequired,
  pageTitle: PropTypes.string.isRequired,
};

export default Base;
