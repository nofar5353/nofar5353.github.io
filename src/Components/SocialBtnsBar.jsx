import React from "react";
import "../CSS/socialBtnsBar.css";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function SocialBtnsBar() {
  const openGit = () => {
    window.open("https://github.com/nofar5353", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/nofar-levy-58bb631bb/", "_blank");
  };

  return (
    <div className="btnsContainer">
      <button onClick={openGit}>
        <FiGithub className="iconStyle" onClick={openGit} />
      </button>

      <button onClick={openLinkedin}>
        <FiLinkedin className="iconStyle" />
      </button>
      <div></div>
    </div>
  );
}

export default SocialBtnsBar;
