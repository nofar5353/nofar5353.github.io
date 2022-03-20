import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function HeaderNavBtns() {
  return (
    <div className="navbtnContainer">
      <Link
        activeClass="active"
        to="aboutContantContainer"
        spy={true}
        smooth={true}
        offset={-150}
        className="navBtn"
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="skilsContainer"
        spy={true}
        smooth={true}
        offset={-270}
        className="navBtn"
      >
        Skils
      </Link>
      <Link
        activeClass="active"
        to="projectsContainer"
        spy={true}
        smooth={true}
        className="navBtn"
      >
        Projects
      </Link>
    </div>
  );
}

export default HeaderNavBtns;
