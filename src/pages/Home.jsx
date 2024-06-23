import React from "react";
import Banner from "../components/Banner";
import Crisscross from "../components/Crisscross";
import AboutMe from "../components/AboutMe";
import Tools from "../components/Tools";
import Projects from "../components/Projects";


export default function Home() {
  return (
    <div className="pt-16 sm:pt-24">
      <Banner />
      <Crisscross />
      <AboutMe />
      <Tools />
      <div id="projects-section">
        <Projects />
      </div>
      
    </div>
  );
}
