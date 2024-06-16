import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";


const Header = () => {
  // State to manage the active link
  const [activeLink, setActiveLink] = useState("home");

  // State to manage the visibility of the menu
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black  fixed top-0 left-0 right-0 flex justify-between items-center px-4 sm:px-10 md:px-24 py-4">
      <div className="logo ">Kalaivani</div>
      <div>
        <button
          className={`button-left-right rounded-md sm:hidden text-white transition duration-300 ${
            menuOpen ? "rotate-180" : ""
          }`}
          onClick={handleToggle}
        >
          <FaBars />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute left-0 w-full top-16 bg-black shadow-lg rounded-lg py-2 sm:hidden flex flex-col  px-4 ">
          <Link
            to="#"
            className={`menu hover:bg-slate-600 py-2  px-2 rounded-md ${
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
            to="#"
            className={`menu hover:bg-slate-600 py-2  px-2 rounded-md ${
              activeLink === "about" ? "text-active" : "text-1"
            }`}
            onClick={() => {
              setActiveLink("about");
              setMenuOpen(false); // Close menu on link click
            }}
          >
            About
          </Link>
          <Link
            to="#"
            className={`menu hover:bg-slate-600 py-2  px-2 rounded-md ${
              activeLink === "projects" ? "text-active" : "text-1"
            }`}
            onClick={() => {
              setActiveLink("projects");
              setMenuOpen(false); // Close menu on link click
            }}
          >
            Projects
          </Link>
        </div>
      )}
      <div className="hidden sm:flex gap-8 md:gap-20">
        <Link
          to="#"
          className={`menu ${activeLink === "home" ? "text-active" : "text-1"}`}
          onClick={() => setActiveLink("home")}
        >
          Home
        </Link>
        <Link
          to="#"
          className={`menu ${
            activeLink === "about" ? "text-active" : "text-1"
          }`}
          onClick={() => setActiveLink("about")}
        >
          About
        </Link>
        <Link
          to="#"
          className={`menu ${
            activeLink === "projects" ? "text-active" : "text-1"
          }`}
          onClick={() => setActiveLink("projects")}
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
