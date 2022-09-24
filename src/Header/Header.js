import React from "react";

import Shadow from "../UI/Shadow";
import "./Header.css";

const Header = () => {
  return (
    <Shadow className="header">
      <div className="logo">
        <h1>Bucket Lists</h1>
      </div>
      <ul className="navbar">
        <li><a href="/">Home</a></li>
        <li><a href="/">About Me</a></li>
        <li><a href="/">Contact</a></li>
      </ul>
    </Shadow>
  );
};

export default Header;
