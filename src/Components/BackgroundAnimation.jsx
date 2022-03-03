import React from "react";
import RandomShape from "./RandomShape";

function BackgroundAnimation(props) {
  return (
    <div>
      {new Array(props.shapeCount).fill(true).map((_, i) => (
        <RandomShape key={i} />
      ))}
    </div>
  );
}

export default BackgroundAnimation;
