import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const Home = () => (
  <div>
    <Title text="Hacker's Guide to Charleston" />
    <div>
      <Link to="/about">About</Link>
    </div>
  </div>
);

export default Home;
