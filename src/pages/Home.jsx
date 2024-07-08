import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Crisscross from "../components/Crisscross";
import AboutMe from "../components/AboutMe";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const [showArrow, setShowArrow] = useState(false);



  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pt-16 sm:pt-24">
      <Banner />
      <Crisscross />
      <AboutMe />
      <Tools />
      <div id="projects-section">
        <Projects />
      </div>
      {showArrow && (
        <button
          className="fixed bottom-4 right-4 bg-gradient-to-b from-gradientstart to-gradientend text-white p-2 rounded-full shadow-lg "
          onClick={scrollToTop}
          
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
