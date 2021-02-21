import React, { useState } from "react";
import { connect } from "react-redux";
import { loginHandler } from "../../../util/axiosWithAuth";

const LoginForm = props => {

  let [user, setUser] = useState({});
  let email = user.email ? user.email : "";
  let password = user.password ? user.password : "";

  const change = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
      user.email 
      && user.password 
      && props.loginHandler(user,props);
  };


  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={change}
          name="email"
          placeholder="email"
          value={email}
          type="text"
        />
        <input
          onChange={change}
          name="password"
          placeholder="Password"
          value={password}
          type="password"
        />

        <input type="submit" />
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ...state.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginHandler }
)(LoginForm);
