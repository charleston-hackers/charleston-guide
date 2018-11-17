import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const About = ({ match }) => (
  <div>
    <Title text={`User Profile: ${match.params.username}`} />
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </div>
);

export default About;
