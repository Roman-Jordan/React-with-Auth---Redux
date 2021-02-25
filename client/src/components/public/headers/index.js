import React from 'react';
import {Link} from 'react-router-dom';
const Header = (props) => {
  if (props.location.pathname.includes('/android_asset')) {
    props.location.pathname = '/';
  }

  return (
    <header>
      <p>Welcome</p>
      <nav>
        {(props.location.pathname === `/login` || props.location.pathname === `/`) && <Link to="/register">Register</Link>}
        {props.location.pathname === `/register` && <Link to="/login">Login</Link>}
      </nav>
    </header>
  );
};

export default Header;
