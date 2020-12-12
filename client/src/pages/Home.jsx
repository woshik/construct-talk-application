import React from 'react';
import Base from '../components/Base/Base';
import Post from '../components/Post/Post';
import '../assets/scss/home.scss';

const Home = () => (
  <Base pageTitle="Home">
    <Post />
    <Post />
  </Base>
);

export default Home;
