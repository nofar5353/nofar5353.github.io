import React, { useRef } from "react";

import "../CSS/Main.css";
import Header from "./Header";
import HeaderNavBtns from "./HeaderNavBtns";

import SocialBtnsBar from "./SocialBtnsBar";
import AboutContent from "./AboutContent";
import { motion, AnimatePresence } from "framer-motion";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";
import Footer from "./Footer";

function Main() {
  const scrollRef = useRef(null);

  const goToSection = (secId) => {};
  return (
    <AnimatePresence>
      <div className="container">
        <HeaderNavBtns />
        <SocialBtnsBar />
        <Header />
        <AboutContent />
        <SkillsSection />
        <ProjectsSection />
        {/* <Footer /> */}
      </div>
    </AnimatePresence>
  );
}

export default Main;
