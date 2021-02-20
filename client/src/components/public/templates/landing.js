import React from "react";
import RegisterForm from "../forms/RegisterForm";
import LoginForm from "../forms/LoginForm";
import { Route, Switch } from "react-router-dom";

const Body = (props) => {
  return (
    <>
      <p>I am a Public body</p>
      <Switch>
        <Route
          exact
          path="/register"
          render={() => <RegisterForm {...props} />}
        />
        <Route exact path="/login" render={() => <LoginForm {...props} />} />
      </Switch>
    </>
  );
};

export default Body;
