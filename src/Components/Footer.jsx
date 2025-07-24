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
    <footer className="bg-gradient-to-r from-dark-900 via-dark-800 to-dark-900 text-dark-300 py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-secondary-900/10"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div>
      
      {/* Back to Top Button */}
      <div className="absolute right-8 -top-6">
        <motion.button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-500 hover:to-secondary-500 text-white p-4 rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300 group transform hover:-translate-y-1"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" size={20} />
        </motion.button>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-primary-400/20">
          {/* Branding & About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-2xl font-bold mb-6 text-gradient">
              Vikram Ranjan
            </h2>
            <p className="text-dark-300 mb-6 leading-relaxed">
              Passionate Front-End Developer & AI Enthusiast building innovative
              digital experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-glass-dark border border-dark-600 rounded-xl text-dark-400 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-glass-dark border border-dark-600 rounded-xl text-dark-400 hover:text-primary-400 hover:border-primary-400/50 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link
                    to="/"
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="bg-primary-600 h-1 w-3 mr-3 rounded-full group-hover:w-4 transition-all duration-300"></span>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="bg-primary-600 h-1 w-3 mr-3 rounded-full group-hover:w-4 transition-all duration-300"></span>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="bg-primary-600 h-1 w-3 mr-3 rounded-full group-hover:w-4 transition-all duration-300"></span>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-dark-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="bg-primary-600 h-1 w-3 mr-3 rounded-full group-hover:w-4 transition-all duration-300"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-lg font-semibold mb-6">
              Get In Touch
            </h3>
            <p className="text-dark-400 mb-4 leading-relaxed">
              Have a project in mind? Let's talk!
            </p>
            <a
              href="mailto:vikramranjan71122@gmail.com"
              className="text-primary-400 hover:text-primary-300 transition-colors duration-300 font-medium"
            >
              vikramranjan71122@gmail.com
            </a>
            <div className="mt-8 bg-glass-dark border border-primary-400/20 rounded-xl p-6 shadow-lg">
              <p className="text-sm text-dark-300 italic leading-relaxed">
                "Technology is best when it brings people together."
              </p>
              <p className="text-xs text-right text-primary-400 mt-3 font-medium">
                - Matt Mullenweg
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Area */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-dark-500">
            © {new Date().getFullYear()} Vikram Ranjan. All Rights Reserved.
          </p>
          <p className="text-xs text-dark-600 mt-2 md:mt-0 flex items-center">
            Designed with <span className="text-red-400 mx-1 animate-pulse">❤️</span> and <span className="text-primary-400 ml-1 font-semibold">React</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
