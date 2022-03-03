import React from "react";

import "../CSS/Main.css";
import Header from "./Header";

import SocialBtnsBar from "./SocialBtnsBar";
import HeaderNavBtns from "./HeaderNavBtns";
import BackgroundAnimation from "./BackgroundAnimation";
import RandomShape from "./RandomShape";
import AboutContent from "./AboutContent";

function Main() {
  const goToSection = (secId) => {};
  return (
    <div className="container">
      <SocialBtnsBar />
      <div className="headerContainer">
        <div>
          <HeaderNavBtns />
        </div>
        <div>
          <Header />
          <BackgroundAnimation shapeCount={30} />
        </div>
      </div>
      <div className="aboutContainer">
        <AboutContent />
        <BackgroundAnimation shapeCount={20} />
      </div>
      <div className="skilsContainer">
        <h1>skilsContainer</h1>
      </div>
      <div className="projectsContainer">
        <h1>projectsContainer</h1>
      </div>
      <div className="footer">
        <h1>footer</h1>
      </div>
    </div>
  );
}

export default Main;
