import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { AiOutlineFile } from "react-icons/ai";
import "../CSS/AboutContent.css";
import BackgroundAnimation from "./BackgroundAnimation";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AboutContent() {
  const { ref, inView } = useInView({
    threshold: 0.45,
  });
  const animation = useAnimation();
  const imganimation = useAnimation();
  const imganimation2 = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
      imganimation.start({
        position: "absolute",
        top: "7%",
        bottom: "80%",
        left: "90%",
        right: "0%",
        backgroundColor: "#00ffbb",
        opacity: 1,
        transition: { duration: 1.5, ease: "easeInOut" },
      });
      imganimation2.start({
        position: "absolute",
        top: "0%",
        bottom: "95%",
        left: "65%",
        right: "0%",
        backgroundColor: "#E31F71",
        transition: { duration: 1.5, ease: "easeInOut" },
        opacity: 1,
      });
    }
    if (!inView) {
      // animation.start({
      //   y: -80,
      //   opacity: 0,
      //   transition: { duration: 0.5, ease: "easeInOut" },
      // });
    }
  }, [inView]);

  return (
    <div className="aboutContainer">
      <motion.div
        ref={ref}
        animate={animation}
        className="aboutContantContainer"
      >
        <div>
          <h1>About me</h1>
          <p>
            I’m a 3rd year Computer Science student. I love coding, solve
            problems, and design things. I’m about to graduate and I’m excited
            and looking forward to starting my career in the industry.
          </p>
          <div className="aboutBtns">
            <div>
              <FiGithub className="iconStyle" onClick={openGit} />
              <h6>Github</h6>
            </div>
            <div>
              <FiLinkedin className="iconStyle" onClick={openLinkedin} />
              <h6>Linkedin</h6>
            </div>
            <div>
              <AiOutlineFile className="iconStyle" onClick={openResume} />
              <h6>Resume</h6>
            </div>
          </div>
        </div>
        <div className="imgDiv">
          <img className="meImg" src={require("../images/me.png")} />
          <motion.div ref={ref} animate={imganimation} className="imgEffect" />
          <motion.div
            ref={ref}
            animate={imganimation2}
            className="imgEffect2"
          />
        </div>
      </motion.div>
      <BackgroundAnimation shapeCount={10} />
    </div>
  );
}

const openGit = () => {
  window.open("https://github.com/nofar5353", "_blank");
};

const openLinkedin = () => {
  window.open("https://www.linkedin.com/in/nofar-levy-58bb631bb/", "_blank");
};
const openResume = () => {
  window.open(
    "https://drive.google.com/file/d/13nJHlcPsGxoGj9dEcXQkDm7fPOHSrMXd/view?usp=sharing",
    "_blank"
  );
};

export default AboutContent;
