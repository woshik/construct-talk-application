import React from 'react';

const Post = () => (
  <div className="card mb-5">
    <div className="card-header mb-3">
      <div className="card">
        <div className="row no-gutters">
          <div className="profile-picture-wrapper d-flex align-items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAPwAc93me5AXKq6r9nQpoMG2qdqLyqE8Xw&usqp=CAU"
              alt="drp"
              className="card-img profile-picture"
            />
          </div>
          <div className="col-10 d-flex align-items-center">
            <div className="card-body status">
              <p>
                <b>DPR</b>
                added a photo
              </p>
              <p>Very proude about our hear working team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="card-body">
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="drp"
      />
      <p className="card-text">Today at 10:30 am</p>
    </div>
  </div>
);

export default Post;
