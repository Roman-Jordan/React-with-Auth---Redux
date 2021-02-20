import React from "react";

const Header = (props) => {
  console.log(props);
  return (
    <header className="mainHeader">
      <p>I am a non Protected Header</p>
    </header>
  );
};

export default Header;
