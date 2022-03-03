import React from "react";
import "../CSS/Header.css";
import BackgroundAnimation from "./BackgroundAnimation";
import RandomShape from "./RandomShape";

function Header() {
  return (
    <div className="headerContant">
      <div className="imgAera">
        <div className="myEmogi"></div>
      </div>
      <div className="textAerea">
        <h1>Hi there!</h1>
        <p>My name is Nofar and i'm a programmer</p>
      </div>
    </div>
  );
}

export default Header;
