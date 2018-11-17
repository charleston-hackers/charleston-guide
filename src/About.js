import React from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';

const About = () => (
  <div>
    <Title text="About the Guide" />
    <Link to="/">Home</Link>
  </div>
);

export default About;
