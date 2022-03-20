import React, { useState } from "react";
import { RiCloseCircleFill } from "react-icons/ri";

// import "../CSS/ProjectsSection.css";

function Project(props) {
  const [isclick, setIsClick] = useState(false);

  const activeStyle = {
    visibility: "visible",
    position: "absolute",
    width: "100vh",
    height: "60vh",
    transition: "0.7s width",
  };

  return (
    <div
      className="ProjectContainer"
      style={{
        backgroundImage:
          "linear-gradient(2turn,rgba(20, 16, 16, 0.5)," +
          props.color +
          ",rgba(20, 16, 16, 0.5))",
      }}
    >
      <div className="projectLogoContainer">
        <img src={props.logoUrl} />
      </div>
      <div className="projNameContainer">
        <h3>{props.name}</h3>
      </div>
      <div className="openBtnContainer">
        <button onClick={() => setIsClick(!isclick)}>View</button>
      </div>

      <div className="projectInfoContainer" style={isclick ? activeStyle : {}}>
        <div className="projImgContainer">
          <img src={props.imgUrl} />
        </div>
        <div
          className="projDescriptionContainer"
          style={{ backgroundColor: props.color }}
        >
          <h5>{props.name}</h5>
          <p>{props.description}</p>
          <p>{props.Languages}</p>
        </div>
        <button onClick={() => setIsClick(!isclick)}>
          <RiCloseCircleFill />
        </button>
      </div>
    </div>
  );
}

export default Project;
