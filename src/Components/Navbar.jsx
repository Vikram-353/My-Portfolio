// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { assets } from "../assets/assets.js";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   return (
//     <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-4 px-6 shadow-lg">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo & Name */}
//         <Link to="/" className="flex items-center space-x-3">
//           <img
//             src={assets.profile_pic}
//             alt="Profile"
//             className="w-12 h-12 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
//           />
//           <span className="text-2xl font-bold hidden md:block tracking-wide">
//             Vikram Ranjan
//           </span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-6">
//           {["Home", "About", "Projects", "Contact", "Gallery"].map((item) => (
//             <Link
//               key={item}
//               to={`/${item.toLowerCase()}`}
//               className={`relative px-4 py-2 text-lg font-medium transition duration-300 hover:text-blue-400 ${
//                 location.pathname === `/${item.toLowerCase()}`
//                   ? "text-blue-500 border-b-2 border-blue-500"
//                   : ""
//               }`}
//             >
//               {item}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-3xl hover:text-blue-400 transition duration-300"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 right-0 w-3/4 h-full bg-gray-900 transition-transform transform ${
//           menuOpen ? "translate-x-0" : "translate-x-full"
//         } shadow-lg p-6 md:hidden z-50`}
//       >
//         <button
//           className="absolute top-5 right-5 text-3xl text-white hover:text-blue-400 transition duration-300"
//           onClick={() => setMenuOpen(false)}
//         >
//           <AiOutlineClose />
//         </button>
//         <ul className="flex flex-col space-y-6 mt-16">
//           {["Home", "About", "Projects", "Contact", "Galery"].map((item) => (
//             <li key={item} className="text-center">
//               <Link
//                 to={`/${item.toLowerCase()}`}
//                 className="block text-xl font-semibold hover:text-blue-400 transition duration-300"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 {item}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { assets } from "../assets/assets.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a preference stored
    const savedPreference = localStorage.getItem("darkMode");
    return savedPreference ? JSON.parse(savedPreference) : false;
  });
  const location = useLocation();

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle dark mode toggle
  useEffect(() => {
    // Update localStorage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    // Update document class
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("menu-button");

      if (
        menuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        menuButton &&
        !menuButton.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Define navigation items
  const navItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // Active link style
  const getActiveStyle = (path) => {
    // Handle home page special case
    if (path === "/" && location.pathname === "/") {
      return true;
    }
    // For other pages
    return (
      location.pathname === path ||
      (path !== "/" && location.pathname.startsWith(path))
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-full">
              <img
                src={assets.profile_pic}
                alt="Vikram Ranjan"
                className="w-12 h-12 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-wide ${
                  scrolled ? "text-gray-800 dark:text-white" : "text-white"
                }`}
              >
                Vikram Ranjan
              </span>
              <span
                className={`text-xs font-medium ${
                  scrolled
                    ? "text-gray-600 dark:text-gray-300"
                    : "text-gray-300"
                }`}
              >
                Software Developer
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 mx-1 text-sm font-medium rounded-md transition duration-300 ${
                  getActiveStyle(item.path)
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : `${
                        scrolled
                          ? "text-gray-700 dark:text-gray-300"
                          : "text-gray-200"
                      } hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50`
                }`}
              >
                {item.name}
                {getActiveStyle(item.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 dark:bg-blue-400 rounded-full"></span>
                )}
              </Link>
            ))}

            {/* Dark mode toggle */}
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition duration-300 ${
                scrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
            </button> */}

            {/* Social Links */}
            <div className="flex items-center space-x-1 ml-2 border-l pl-3 border-gray-300 dark:border-gray-700">
              {[
                {
                  icon: <FaGithub size={18} />,
                  url: "https://github.com/vikramranjan",
                },
                {
                  icon: <FaLinkedin size={18} />,
                  url: "https://linkedin.com/in/vikramranjan",
                },
                {
                  icon: <FaTwitter size={18} />,
                  url: "https://twitter.com/vikramranjan",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full transition duration-300 ${
                    scrolled
                      ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                      : "text-white hover:bg-white/10 hover:text-blue-300"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="menu-button"
            className={`md:hidden p-2 rounded-lg transition duration-300 ${
              scrolled
                ? "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-3/4 h-full bg-white dark:bg-gray-900 transition-transform transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-lg p-6 md:hidden z-50`}
      >
        <div className="flex justify-between items-center mb-8">
          <Link
            to="/home"
            className="flex items-center space-x-3"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={assets.profile_pic}
              alt="Profile"
              className="w-10 h-10 rounded-full shadow-md"
            />
            <span className="text-lg font-bold text-gray-800 dark:text-white">
              Vikram Ranjan
            </span>
          </Link>
          <button
            className="p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition duration-300"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Mobile navigation items */}
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition duration-300 ${
                getActiveStyle(item.path)
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile bottom actions */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300"
            >
              {darkMode ? <RiSunLine size={20} /> : <RiMoonLine size={20} />}
              <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>

            {/* Social icons */}
            <div className="flex space-x-2">
              {[
                {
                  icon: <FaGithub size={20} />,
                  url: "https://github.com/vikramranjan",
                },
                {
                  icon: <FaLinkedin size={20} />,
                  url: "https://linkedin.com/in/vikramranjan",
                },
                {
                  icon: <FaTwitter size={20} />,
                  url: "https://twitter.com/vikramranjan",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default Navbar;
