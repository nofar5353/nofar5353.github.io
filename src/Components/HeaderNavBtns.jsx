import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

function HeaderNavBtns() {
  const handleClick = () => {};
  return (
    <div className="navbtnContainer">
      <Link
        activeClass="active"
        to="aboutContainer"
        spy={true}
        smooth={true}
        className="navBtn"
      >
        About
      </Link>
      <Link
        activeClass="active"
        to="skilsContainer"
        spy={true}
        smooth={true}
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
