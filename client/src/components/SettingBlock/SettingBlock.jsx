import React from 'react';
import settingLogo from '../../assets/image/setting.png';

const SettingBlock = () => (
  <>
    <div className="row">
      <div className="col-2">
        <img src={settingLogo} alt="setting" />
      </div>
      <div className="col-10 d-flex align-items-center content-title">
        <h2>Setting</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12 p-5">
        <form method="POST" action="#">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="username">
                Username
                <input type="text" className="form-control" id="username" autoComplete="off" />
              </label>

            </div>
            <div className="form-group col-md-6">
              <label htmlFor="password">
                Password
                <input type="password" className="form-control" id="password" />
              </label>

            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-5">
              <label htmlFor="first-name">
                First Name
                <input type="text" className="form-control" id="first-name" autoComplete="off" />
              </label>

            </div>

            <div className="form-group col-md-2">
              <label htmlFor="mi">
                MI
                <input type="text" className="form-control" id="mi" autoComplete="off" />
              </label>

            </div>

            <div className="form-group col-md-5">
              <label htmlFor="last-name">
                Last Name
                <input type="text" className="form-control" id="last-name" autoComplete="off" />
              </label>

            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-8">
              <label htmlFor="company-name">
                Company Name (if applicable)
                <input type="text" className="form-control" id="company-name" autoComplete="off" />
              </label>

            </div>

            <div className="form-group col-md-4">
              <label htmlFor="dob">
                Date of Birth
                <input type="text" className="form-control" id="dob" />
              </label>

            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="country">
                Country
                <input type="text" className="form-control" id="country" />
              </label>

            </div>

            <div className="form-group col-md-4">
              <label htmlFor="state">
                State
                <input type="text" className="form-control" id="state" />
              </label>

            </div>

            <div className="form-group col-md-4">
              <label htmlFor="county">
                County
                <input type="text" className="form-control" id="county" />
              </label>

            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-12">
              <label htmlFor="specility">
                What&apos;s your specility?
                <input type="text" className="form-control" id="specility" />
              </label>
            </div>
          </div>

        </form>
      </div>
    </div>
  </>
);

export default SettingBlock;
