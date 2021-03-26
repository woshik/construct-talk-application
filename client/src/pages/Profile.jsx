import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import BottomNavBar from '../components/BottomNavBar/BottomNavBar';

import img2 from '../assets/image/2.jpg';

const Profile = () => (
  <>
    <div className="container-fluid m-0 p-0">
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-xl-3 col-lg-4">
            <div className="side-bar-section">
              <div className="d-flex flex-column justify-content-center">
                <div className="card card-profile">
                  <div className="card-img">
                    <img src={img2} alt="" />
                    <div className="upload-photo-text">
                      Upload Photo
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="card-body-header">
                      Sara Dan
                    </div>
                    <div className="card-body-text">
                      Construction Analysis
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <Link
                    to="/"
                    className="btn btn-edit-about hidden-md-and-down"
                  >
                    Edit About Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <nav>
              <div
                className="nav nav-tabs nav-fill"
                id="nav-tab"
                role="tablist"
              >
                <Link
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#about"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  About
                </Link>
                <Link
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#photos"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Photos
                </Link>
                <Link
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#videos"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Videos
                </Link>
                <Link
                  className="nav-item nav-link"
                  id="nav-about-tab"
                  data-toggle="tab"
                  href="#reviews"
                  role="tab"
                  aria-controls="nav-about"
                  aria-selected="false"
                >
                  Reviews
                </Link>
                <Link
                  className="nav-item nav-link"
                  id="nav-qa-tab"
                  data-toggle="tab"
                  href="#qa"
                  role="tab"
                  aria-controls="nav-about"
                  aria-selected="false"
                >
                  Q&A
                </Link>
                <Link
                  className="nav-item nav-link"
                  id="nav-experience-tab"
                  data-toggle="tab"
                  href="#experience"
                  role="tab"
                  aria-controls="nav-about"
                  aria-selected="false"
                >
                  Experience
                </Link>
                <Link
                  className="nav-item nav-link"
                  id="nav-corrections-tab"
                  data-toggle="tab"
                  href="#corrections"
                  role="tab"
                  aria-controls="nav-about"
                  aria-selected="false"
                >
                  Corrections
                </Link>
              </div>
            </nav>

            <div
              className="tab-content py-3 px-3 px-sm-0"
              id="nav-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="about"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <h3 className="about-me-title">About Me</h3>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero
                  eos et accusam et justo duo dolores et ea
                  rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit
                  amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="photos"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div className="row">
                  <div className="col-lg-3 photo-box">
                    <img src={img2} alt="" />
                  </div>
                  <div className="col-lg-3 photo-box">
                    <img src={img2} alt="" />
                  </div>
                  <div className="col-lg-3 photo-box">
                    <img src={img2} alt="" />
                  </div>
                  <div className="col-lg-3 photo-box">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="videos"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                <div className="row">
                  <div className="col-lg-3 video-player">
                    <video width="100%" controls>
                      <source
                        src="http://techslides.com/demos/sample-videos/small.ogv"
                        type="video/mp4"
                      />
                      <track kind="captions" />
                      Your browser does not support HTML
                      video.
                    </video>
                  </div>
                  <div className="col-lg-3 video-player">
                    <video width="100%" controls>
                      <source
                        src="http://techslides.com/demos/sample-videos/small.ogv"
                        type="video/mp4"
                      />
                      <track kind="captions" />
                      Your browser does not support HTML
                      video.
                    </video>
                  </div>
                  <div className="col-lg-3 video-player">
                    <video width="100%" controls>
                      <source
                        src="http://techslides.com/demos/sample-videos/small.ogv"
                        type="video/mp4"
                      />
                      <track kind="captions" />
                      Your browser does not support HTML
                      video.
                    </video>
                  </div>
                  <div className="col-lg-3 video-player">
                    <video width="100%" controls>
                      <source
                        src="http://techslides.com/demos/sample-videos/small.ogv"
                        type="video/mp4"
                      />
                      <track kind="captions" />
                      Your browser does not support HTML
                      video.
                    </video>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="reviews"
                role="tabpanel"
                aria-labelledby="nav-about-tab"
              >
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex flex-row justify-content-between">
                      <div className="review-pic">
                        <img src={img2} alt="" />
                        <div className="review-name">
                          Robin J.
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center rating">
                        <div className="rating-title">
                          Excellent
                        </div>
                        <div className="rating-title mx-3">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                      </div>
                      <div className="clearfix" />
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3">
                    <p>
                      Lorem ipsum dolor sit amet,
                      consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt
                      ut labore et dolore magna aliquyam
                      erat, sed diam voluptua. At vero eos
                      et accusam et justo duo dolores et
                      ea rebum. Stet clita kasd gubergren,
                      no sea takimata sanctus est Lorem
                      ipsum dolor sit amet. Lorem ipsum
                      dolor sit amet, consetetur
                      sadipscing elitr, sed diam nonumy
                      eirmod tempor invidunt ut labore et
                      dolore magna
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="qa"
                role="tabpanel"
                aria-labelledby="nav-qa-tab"
              >
                <div className="row">
                  <div className="review-pic d-flex flex-row align-items-center">
                    <img
                      src="https://picsum.photos/200/305"
                      alt=""
                    />
                    <div className="review-name">
                      Robin J.
                    </div>
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet ?
                  </p>

                  <div className="review-pic d-flex flex-row align-items-center mx-5 mt-4">
                    <img src={img2} alt="" />
                    <div className="review-name">
                      Robin J.
                    </div>
                  </div>
                  <p className="answer">
                    Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut
                  </p>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="experience"
                role="tabpanel"
                aria-labelledby="nav-experience-tab"
              >
                <div className="row">
                  <div className="row desktop-experience">
                    <div className="col-12 experience-container">
                      <div className="d-flex flex-row">
                        <div>
                          <img
                            src={img2}
                            alt=""
                          />
                        </div>
                        <div className="mx-4">
                          <h3 className="card-body-header">
                            Some Project
                          </h3>
                          <p style={{ marginTop: '-8px;' }}>
                            Team Name
                          </p>
                          <p>
                            Lorem ipsum dolor sit
                            amet, consetetur
                            sadipscing elitr, sed
                            diam nonumy eirmod
                            tempor invidunt ut
                            labore et dolore magna
                            aliquyam erat, sed diam
                            voluptua. At vero eos et
                            accusam et justo duo
                            dolores et ea rebum.
                            Stet clita kasd
                            gubergren, no sea
                            takimata sanctus est
                            Lorem ipsum dolor sit
                            amet. Lorem ipsum dolor
                            sit amet, consetetur
                            sadipscing elitr, sed
                            diam nonumy eirmod
                            tempor invidunt ut
                            labore et dolore magna
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mobile-experience">
                    <div className="col-12 experience-container">
                      <div className="d-flex flex-row">
                        <div className="mobile-pic">
                          <img
                            src={img2}
                            alt=""
                          />
                        </div>
                        <div className="mobile-title">
                          <h3 className="card-body-header">
                            Some Project
                          </h3>
                          <p style={{ marginTop: '-8px;' }}>
                            Team Name
                          </p>
                        </div>
                      </div>
                      <p className="mobile-text">
                        Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed
                        diam nonumy eirmod tempor
                        invidunt ut labore et dolore
                        magna aliquyam erat, sed diam
                        voluptua. At vero eos et accusam
                        et justo duo dolores et ea
                        rebum. Stet clita kasd
                        gubergren, no sea takimata
                        sanctus est Lorem ipsum dolor
                        sit amet. Lorem ipsum dolor sit
                        amet, consetetur sadipscing
                        elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et
                        dolore magna
                      </p>
                    </div>
                    <div className="col-12 mobile-btn">
                      <Link
                        to="/"
                        className="btn btn-edit-about"
                      >
                        Add Experience
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="corrections"
                role="tabpanel"
                aria-labelledby="nav-experience-tab"
              >
                <div className="row">
                  <div className="row justify-content-between connection-desktop">
                    <div className="col-lg-3">
                      <div className="card card-correction">
                        <span className="icon">
                          <i className="fa fa-bars" />
                        </span>
                        <img src={img2} alt="" />
                        <div className="mt-1">
                          <div className="card-body-header">
                            Sara Dan
                          </div>
                          <div className="card-body-text">
                            Construction Analysis
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="card card-correction">
                        <span className="icon">
                          <i className="fa fa-bars" />
                        </span>
                        <img src={img2} alt="" />
                        <div className="mt-1">
                          <div className="card-body-header">
                            Sara Dan
                          </div>
                          <div className="card-body-text">
                            Construction Analysis
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="card card-correction">
                        <span className="icon">
                          <i className="fa fa-bars" />
                        </span>
                        <img src={img2} alt="" />
                        <div className="mt-1">
                          <div className="card-body-header">
                            Sara Dan
                          </div>
                          <div className="card-body-text">
                            Construction Analysis
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="card card-correction">
                        <span className="icon">
                          <i className="fa fa-bars" />
                        </span>
                        <img src={img2} alt="" />
                        <div className="mt-1">
                          <div className="card-body-header">
                            Sara Dan
                          </div>
                          <div className="card-body-text">
                            Construction Analysis
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="connection-mobile">
                    <div className="box">
                      <div className="card card-correction">
                        <span className="icon">
                          <i className="fa fa-bars" />
                        </span>
                        <img src={img2} alt="" />
                        <div className="mt-1">
                          <div className="card-body-header">
                            Sara Dan
                          </div>
                          <div className="card-body-text">
                            Construction Analysis
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="card card-correction">
                        <span className="icon">
                          <i className="fa fa-bars" />
                        </span>
                        <img src={img2} alt="" />
                        <div className="mt-1">
                          <div className="card-body-header">
                            Sara Dan
                          </div>
                          <div className="card-body-text">
                            Construction Analysis
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="card card-correction">
                        <span className="icon">
                          <i className="fa fa-bars" />
                        </span>
                        <img src={img2} alt="" />
                        <div className="mt-1">
                          <div className="card-body-header">
                            Sara Dan
                          </div>
                          <div className="card-body-text">
                            Construction Analysis
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box">
                      <div className="card card-correction">
                        <span className="icon">
                          <i className="fa fa-bars" />
                        </span>
                        <img src={img2} alt="" />
                        <div className="mt-1">
                          <div className="card-body-header">
                            Sara Dan
                          </div>
                          <div className="card-body-text">
                            Construction Analysis
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BottomNavBar />
  </>
);

export default Profile;
