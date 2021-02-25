import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logOut} from '../../../store/actions/auth';
const Header = (props) => {
  return (
    <header>
      <p>Welcome Back</p>
      <nav>
        <Link to="/" onClick={props.logOut}>
          Logout
        </Link>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.loggedIn,
  };
};

export default connect(mapStateToProps, {logOut})(Header);
