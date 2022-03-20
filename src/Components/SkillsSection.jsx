import React from "react";
import "../CSS/SkillsSection.css";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiJavascript, SiCsharp, SiHtml5 } from "react-icons/si";
import BackgroundAnimation from "./BackgroundAnimation";

function SkillsSection() {
  const { ref, inView } = useInView({
    threshold: 0.45,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
    }
    if (!inView) {
      //   animation.start({
      //     y: -80,
      //     opacity: 0,
      //     transition: { duration: 0.5, ease: "easeInOut" },
      //   });
    }
  }, [inView]);
  return (
    <div className="skilsContainer">
      <motion.div
        ref={ref}
        animate={animation}
        className="skilsContantContainer"
      >
        <h1>What can i do?</h1>
        <div className="skilsIconContainer">
          <div>
            <div>
              <FaJava className="skilsIcon" />
              {/* <div className="iconCover">Java</div> */}
            </div>
            <div>
              <SiCsharp className="skilsIcon" />
            </div>
            <div>
              <FaPython className="skilsIcon" />
            </div>
          </div>
          <div>
            <div>
              <SiJavascript className="skilsIcon" />
            </div>
            <div>
              <FaReact className="skilsIcon" />
            </div>
            <div>
              <SiHtml5 className="skilsIcon" />
            </div>
          </div>
        </div>
        <h4>And more</h4>
        <BackgroundAnimation shapeCount={10} />
      </motion.div>
    </div>
  );
}

export default SkillsSection;
