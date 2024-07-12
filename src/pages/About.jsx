import React, { useEffect, useState } from "react";
import AboutHero from "../components/AboutHero";
import WorkExperience from "../components/WorkExperience";
import Achievements from "../components/Achievements";
import { FaArrowUp } from "react-icons/fa";

export default function About() {

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
    <div className="pt-24">
      <AboutHero />
      <WorkExperience />
      <Achievements />
      {showArrow && (
        <button
          className="fixed bottom-4 right-4 bg-gradient-to-b from-gradientstart to-gradientend text-white p-2 rounded-full shadow-lg z-100"
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
