import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Chat from './Chat/Chat';
import Join from '../pages/Join';
import Profile from './Authentication/Profile';
import Home from '../pages/Home';
import Create from '../pages/Create';

const AppRouter = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route path='/join' component={Join} />
    <Route path='/chat' component={Chat} />
    <Route path='/profile' component={Profile} />
    <Route path ='/create' component={Create} />
  </Switch>
);

export default AppRouter;