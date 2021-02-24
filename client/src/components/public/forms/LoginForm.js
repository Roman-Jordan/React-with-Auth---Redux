import React, { useState } from "react";
import { connect } from "react-redux";
import { loginHandler } from '../../../store/actions/auth';
import Loader from 'react-loader-spinner';

const LoginForm = props => {

  let {error} = props.auth || null;
  let [user, setUser] = useState({});
  let [fetching, setFetching] = useState(false);

  let email = user.email ? user.email : "";
  let password = user.password ? user.password : "";

  const change = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  const onSubmit = async e => {
    e.preventDefault();
    props.auth.error = null;
    setFetching(true);
    await timeout(2000);
    props.loginHandler(user)
    
  };
error && fetching && setFetching(false)

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
      {error && error.errors.map(error => {
        return <p key={Object.keys(error)} className="error">{Object.values(error)}</p>
      })}
      <button type="submit" >
        {fetching
          ? <Loader type="ThreeDots" color="#00BFFF" height={20} width={20} />
          : 'Submit'
        }
      </button>
    </form>
  </div>
);
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { loginHandler }
)(LoginForm);
