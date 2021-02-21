import React from "react";
import {Link} from "react-router-dom";
const Header = (props) => {
  return (
    <header>
      <p>I am a non Protected Header</p>
      <nav>
        {(props.location.pathname === '/login' || props.location.pathname === '/') &&  <Link to="/register">Register</Link>}
        {props.location.pathname === '/register' && <Link to="/login">Login</Link>}
      </nav>
    </header>
  );
};

export default Header;
