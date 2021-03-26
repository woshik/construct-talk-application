import React from 'react';
import Header from '../components/Header/Header';
import BottomNavBar from '../components/BottomNavBar/BottomNavBar';
import img1 from '../assets/image/adv.png';
import img2 from '../assets/image/2.jpg';

const Home = () => (
  <>
    <div className="container-fluid m-0 p-0">
      <Header />
      <div className="container home-container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-3" />
          <div className="col-lg-6">
            <form className="">
              <div className="input-group">
                <input type="text" id="search" className="form-control comment-box" placeholder="What's on your mind" />
                <span className="input-group-addon">
                  <i className="fa fa-picture-o custom-icon" />
                  <i className="fa fa-video-camera custom-icon" />
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className="row align-items-center mt-5">
          <div className="col-lg-3" />
          <div className="col-lg-6">
            <div className="card-post">
              <div className="review-pic d-flex flex-row align-items-center">
                <img src={img2} alt="" />
                <div className="post-username">Robin J.</div>
              </div>
              <div className="post-body mt-3">
                <img className="img-post" src={img2} alt="" />
                <div className="share-comment">
                  <i className="fa fa-heart-o" />
                  <i className="fa fa-comment-o" />
                  <i className="fa fa-share last" />
                </div>
                <div className="post-text p-3 mt-3">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                  sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                  sed diam voluptua.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 advertisement">
            <img src={img1} alt="adv" />
          </div>
        </div>
      </div>
    </div>
    <BottomNavBar />
  </>
);

export default Home;
