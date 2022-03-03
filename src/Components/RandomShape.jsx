import React, { useRef, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

function RandomShape() {
  const [config, setConfig] = useState(() => getConfig());
  const [flip, setFlip] = useState(false);

  const Circle = styled.div`
    background-color: #9b5de5;
    width: ${config.size};
    height: ${config.size};
    border-radius: 50%;
    bordercolor: white;
  `;

  const Square = styled.div`
    background-color: #f15bb5;
    width: ${config.size};
    height: ${config.size};
  `;

  const Triangular = styled.div`
    width: 0;
    height: 0;
    border-left: ${config.size} solid transparent;
    border-right: ${config.size} solid transparent;
    border-bottom: ${config.sizeX2} solid #fee440;
  `;

  const SHAPE_TYPES = [
    <Circle />,
    <Square />,
    <Triangular />,
    <Circle />,
    <Square />,
  ];
  const fall = useSpring({
    from: {
      // backgroundColor: "blue",
      position: "absolute",
      zIndex: "-2",
      top: config.top1,
      left: config.left1,
      opacity: config.opacity,
      rotateZ: 0,
      borderRadius: 50,
    },
    to: {
      // backgroundColor: "red",
      position: "absolute",
      zIndex: "-2",
      top: config.top2,
      left: config.left2,
      opacity: 0,
      rotateZ: 360,
    },
    config: { duration: config.fallDuration, mass: 2 },
    reset: true,
    reverse: flip,
    onRest: () => setFlip(!flip),
  });

  return (
    <animated.div style={({ position: "absolute" }, fall)}>
      {SHAPE_TYPES[randomInt(0, 4)]}
    </animated.div>
  );
}
const getConfig = () => {
  const intSize = randomInt(5, 12);
  const size = intSize.toString() + "px";
  const sizeX2 = (intSize * 2).toString() + "px";
  const opacity = randomInt(3, 10) / 10;
  const left1 = randomInt(1, 99).toString() + "%";
  const left2 = randomInt(1, 99).toString() + "%";
  const fallDuration = randomInt(10000, 30000);
  const fallDelay = randomInt(200, 10000);
  const top1 = randomInt(1, 99).toString() + "%";
  const top2 = randomInt(1, 99).toString() + "%";

  return {
    size,
    sizeX2,
    opacity,
    left1,
    left2,
    fallDuration,
    fallDelay,
    top1,
    top2,
  };
};
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default RandomShape;
