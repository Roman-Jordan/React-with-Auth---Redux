import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <header>
      <p>I am a non Protected Header</p>
      <nav>
        <p>link</p>
        <p>link</p>
        <p>link</p>
        <p>link</p>
      </nav>
    </header>
  );
};

export default Header;
