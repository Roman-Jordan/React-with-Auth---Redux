import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../../../store/actions";
const Header = (props) => {
  return (
    <header>
      <p>I am a Protected Header</p>
      <nav>
        <Link>link</Link>
        <Link>link</Link>
        <Link>link</Link>
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

export default connect(mapStateToProps, { logOut })(Header);
