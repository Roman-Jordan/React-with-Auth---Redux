import React from "react";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";
import { Route, Switch } from "react-router";

const Body = (props) => {
  return (
    <>
      <p>I am a Public body</p>
      <Switch>
        <Route  path="/register" render={() => <RegisterForm {...props} />} />
        <Route  render={() => <LoginForm {...props} />} />
      </Switch>
    </>
  );
};

export default Body;
