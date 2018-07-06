import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./comp/dashboard/Dashboard";
import Form from "./comp/form/Form";

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/add" component={Form} />
  </Switch>
);
