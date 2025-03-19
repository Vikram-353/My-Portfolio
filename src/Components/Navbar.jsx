import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { assets } from "../assets/assets.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={assets.profile_pic}
            alt="Profile"
            className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <span className="text-2xl font-bold hidden md:block tracking-wide">
            Vikram Ranjan
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "About", "Projects", "Contact", "Gallery"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className={`relative px-4 py-2 text-lg font-medium transition duration-300 hover:text-blue-400 ${
                location.pathname === `/${item.toLowerCase()}`
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl hover:text-blue-400 transition duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-gray-900 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg p-6 md:hidden z-50`}
      >
        <button
          className="absolute top-5 right-5 text-3xl text-white hover:text-blue-400 transition duration-300"
          onClick={() => setMenuOpen(false)}
        >
          <AiOutlineClose />
        </button>
        <ul className="flex flex-col space-y-6 mt-16">
          {["Home", "About", "Projects", "Contact", "Galery"].map((item) => (
            <li key={item} className="text-center">
              <Link
                to={`/${item.toLowerCase()}`}
                className="block text-xl font-semibold hover:text-blue-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
