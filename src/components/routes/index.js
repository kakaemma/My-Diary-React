import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../login/Login';
import register from '../register/Register';
import Dashboard from '../Dashboard';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={register} />
    <Route exact path="/dashboard" component={Dashboard} />
  </Switch>

);
export default Routes;
