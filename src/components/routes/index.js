import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../login/Login';
import register from '../register/Register';


const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={register} />
  </Switch>

);
export default Routes;
