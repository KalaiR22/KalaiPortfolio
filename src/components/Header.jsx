import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative z-50">
      <div className="bg-black fixed top-0 left-0 right-0 flex justify-between shadow-xl shadow-black/40 rounded-md items-center px-4 sm:px-10 xl:px-14 2xl:px-28 py-8 h-14 sm:h-20">
        <div className="logo">Kalaivani</div>
        <div>
          <button
            className={`button-left-right rounded-full sm:hidden text-white transition duration-300 px-2 py-2 ${
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
                location.pathname === "/" ? "text-active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`menu hover:bg-slate-600 py-2 px-2 rounded-md ${
                location.pathname === "/about" ? "text-active" : ""
              }`}
            >
              About
            </Link>
          </div>
        )}
        <div className="hidden sm:flex gap-8 md:gap-20">
          <Link
            to="/"
            className={`menu ${location.pathname === "/" ? "text-active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`menu ${
              location.pathname === "/about" ? "text-active" : ""
            }`}
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
