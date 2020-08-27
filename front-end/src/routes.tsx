import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Board from './pages/Board';
import Home from './pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/dashboard" component={Board} />
      <Route path="/" component={() => <h1>404 - Page not found</h1>}></Route>
    </Switch>
  );
};

export default Routes;
