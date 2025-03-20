import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-white text-2xl font-bold">Vikram's Portfolio</h2>
          <p className="mt-2 text-sm">
            Passionate Front-End Developer & AI Enthusiast
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
          <Link to="/home" className="hover:text-white">
            Home
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/projects" className="hover:text-white">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-white"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-white"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6 text-sm">
        © {new Date().getFullYear()} Vikram Ranjan. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
