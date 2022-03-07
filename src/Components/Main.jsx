import React, { useRef } from "react";

import "../CSS/Main.css";
import Header from "./Header";
import HeaderNavBtns from "./HeaderNavBtns";

import SocialBtnsBar from "./SocialBtnsBar";
import AboutContent from "./AboutContent";
import { motion, AnimatePresence } from "framer-motion";
import SkillsSection from "./SkillsSection";

function Main() {
  const scrollRef = useRef(null);
  // useScrollSnap({ ref: scrollRef, duration: 1, delay: 0 });

  const goToSection = (secId) => {};
  return (
    <AnimatePresence>
      <div className="container">
        <HeaderNavBtns />
        <SocialBtnsBar />
        <Header />
        <AboutContent />
        <SkillsSection />
        <div className="projectsContainer">
          <h1>projectsContainer</h1>
        </div>
        <div className="footer">
          <h1>footer</h1>
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Main;
