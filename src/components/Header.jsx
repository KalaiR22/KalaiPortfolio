import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState("home");

  // State to manage the visibility of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-50">
      <div className="bg-black fixed top-0 left-0 right-0 flex justify-between shadow-xl shadow-black/40 rounded-md items-center px-4 sm:px-10 xl:px-14 2xl:px-28 py-4 h-14 sm:h-20">
        <div className="logo">Kalaivani</div>
        <div>
          <button
            className={`button-left-right rounded-md sm:hidden text-white transition duration-300 px-2 py-1 ${
              menuOpen ? "rotate-180" : ""
            }`}
            onClick={handleToggle}
          >
            <FaBars />
          </button>
        </div>
        {menuOpen && (
          <div className="absolute left-0 w-full top-14 bg-black shadow-lg rounded-lg py-2 sm:hidden flex flex-col px-4">
            <Link
              to="/"
              className={`menu hover:bg-slate-600 py-2 px-2 rounded-md ${
                activeLink === "home" ? "text-active" : "text-1"
              }`}
              onClick={() => {
                setActiveLink("home");
                setMenuOpen(false); // Close menu on link click
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`menu hover:bg-slate-600 py-2 px-2 rounded-md ${
                activeLink === "about" ? "text-active" : "text-1"
              }`}
              onClick={() => {
                setActiveLink("about");
                setMenuOpen(false); // Close menu on link click
              }}
            >
              About
            </Link>
            <ScrollLink
              to="projects-section"
              smooth={true}
              duration={500}
              className={`menu hover:bg-slate-600 py-2 px-2 rounded-md cursor-pointer ${
                activeLink === "projects" ? "text-active" : "text-1"
              }`}
              onClick={() => {
                setActiveLink("projects");
                setMenuOpen(false); // Close menu on link click
              }}
            >
              Projects
            </ScrollLink>
          </div>
        )}
        <div className="hidden sm:flex gap-8 md:gap-20">
          <Link
            to="/"
            className={`menu ${
              activeLink === "home" ? "text-active" : "text-1"
            }`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`menu ${
              activeLink === "about" ? "text-active" : "text-1"
            }`}
            onClick={() => setActiveLink("about")}
          >
            About
          </Link>
          <ScrollLink
            to="projects-section"
            smooth={true}
            duration={500}
            className={`menu cursor-pointer ${
              activeLink === "projects" ? "text-active" : "text-1"
            }`}
            onClick={() => setActiveLink("projects")}
          >
            Projects
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
