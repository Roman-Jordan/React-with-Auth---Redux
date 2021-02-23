import React, { useState } from "react";
import { connect } from "react-redux";
import { loginHandler } from '../../../store/actions/auth';

const LoginForm = props => {

  let [user, setUser] = useState({});
  let email = user.email ? user.email : "";
  let password = user.password ? user.password : "";
  
  const change = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = e => {
    e.preventDefault();
    props.loginHandler(user);
  };

  return (
    <div id="loginForm">
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
        {props.error && props.error.errors.map(error => {
          return <p key={Object.keys(error)} className="error">{Object.values(error)}</p>
        })}
        <button type="submit" >Submit</button>
      </form>
    </div>
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
