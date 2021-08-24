import React from "react";
import logo_holberton from "../assets/logo_holberton.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img src={logo_holberton} />
      <h1>School dashboard</h1>
    </div>
  );
}

export default Header;
