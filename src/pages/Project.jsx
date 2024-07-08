import React, { useEffect, useState } from "react";
import Projects from "../components/Projects";
import { FaArrowUp } from "react-icons/fa";

export default function Project() {
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
    <div className="pt-16 sm:pt-24 mt-6">
      <Projects />
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
