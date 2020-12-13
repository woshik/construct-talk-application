import React from 'react';
import Base from '../components/Base/Base';
import Post from '../components/Post/Post';
import CreatePost from '../components/CreatePost/CreatePost';
import '../assets/scss/home.scss';

const Home = () => (
  <Base pageTitle="Home">
    <>
      <CreatePost />
      <div className="content">
        <Post />
      </div>
    </>
  </Base>
);

export default Home;
