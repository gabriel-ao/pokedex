import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';

import Home from '../pages/Home/';

const ROUTES = {
  HOME: '/',
};

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
