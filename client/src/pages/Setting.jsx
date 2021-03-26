import React from 'react';
import Header from '../components/Header/Header';
import BottomNavBar from '../components/BottomNavBar/BottomNavBar';

const Setting = () => (
  <>
    <div className="container-fluid m-0 p-0">
      <Header />
      <div className="container home-container mt-5">
        <div className="row mt-5">
          <div className="reg-from-wrapper">
            <form>
              <div className="d-flex flex-row mt-3 form-half">
                <div className="form-group">
                  <input type="text" className="form-control custom-form-control-short" placeholder="First Name" />
                </div>
                <div className="form-group" style={{ marginLeft: '1%' }}>
                  <input type="text" className="form-control custom-form-control-short" placeholder="Last Name" />
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control custom-form-control"
                  placeholder="Company Name(Optional)"
                />
              </div>
              <div>
                <button type="button" className="btn btn-register mt-5">SAVE CHANGES</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <BottomNavBar />
  </>
);

export default Setting;
