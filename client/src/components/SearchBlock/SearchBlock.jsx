import React from 'react';
import searchLogo from '../../assets/image/search.png';

const SearchBlock = () => (
  <>
    <div className="row">
      <div className="col-2">
        <img src={searchLogo} alt="search" />
      </div>
      <div className="col-10 d-flex align-items-center content-title">
        <h2>Search</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-12 p-5">
        <input className="form-control" type="text" placeholder="Search" />
        <p className="mt-3">Search By:</p>
        <div className="form-check">
          <label className="form-check-label" htmlFor="defaultCheck1">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            Trade
          </label>
        </div>
        <div className="form-check">

          <label className="form-check-label" htmlFor="defaultCheck2">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" />
            Location
          </label>
        </div>
      </div>
    </div>
  </>
);

export default SearchBlock;
