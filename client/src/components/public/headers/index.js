import React from "react";
import {Link} from "react-router-dom";
const Header = (props) => {
  console.log(props);
  return (
    <header>
      <p>I am a non Protected Header</p>
      <nav>
        <Link>link</Link>
        <Link>link</Link>
        <Link>link</Link>
        <Link to="/login">login</Link>
      </nav>
    </header>
  );
};

export default Header;
