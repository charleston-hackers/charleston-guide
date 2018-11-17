import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import About from './About';
import NoMatch from './NoMatch';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/:username" component={Profile} />
    <Route component={NoMatch} />
  </Switch>
);

export default Routes;
