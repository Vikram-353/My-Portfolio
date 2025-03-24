import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-12 relative">
      {/* Back to Top Button */}
      <div className="absolute right-8 -top-5">
        <button
          onClick={scrollToTop}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 group"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-8 border-b border-gray-700">
          {/* Branding & About */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              Vikram Ranjan
            </h2>
            <p className="text-gray-400 mb-4">
              Passionate Front-End Developer & AI Enthusiast building innovative
              digital experiences.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-xl transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="bg-gray-700 h-1 w-3 mr-2 rounded-full"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="bg-gray-700 h-1 w-3 mr-2 rounded-full"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="bg-gray-700 h-1 w-3 mr-2 rounded-full"></span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="bg-gray-700 h-1 w-3 mr-2 rounded-full"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Get In Touch
            </h3>
            <p className="text-gray-400 mb-2">
              Have a project in mind? Let's talk!
            </p>
            <a
              href="mailto:vikram@example.com"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              vikramranjan71122@gmail.com
            </a>
            <div className="mt-6 bg-gray-800 rounded-lg p-4 border border-gray-700">
              <p className="text-sm text-gray-400">
                "Technology is best when it brings people together."
              </p>
              <p className="text-xs text-right text-gray-500 mt-2">
                - Matt Mullenweg
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Area */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vikram Ranjan. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2 md:mt-0">
            Designed with ❤️ and React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
