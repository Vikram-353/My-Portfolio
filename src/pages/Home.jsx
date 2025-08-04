import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets, projectsData } from "../assets/assets";
import { researchData } from "../Components/ResearchProjects";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGithub,
  FaLinkedin,
  FaOrcid,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiThreedotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

import {
  ExternalLink,
  BookOpen,
  Award,
  FileText,
  Lightbulb,
} from "lucide-react";

// Tech stack icons
const TechIcon = ({ name, icon }) => (
  <motion.div
    className="flex flex-col items-center justify-center p-3"
    whileHover={{ scale: 1.1 }}
  >
    <img src={icon} alt={name} className="w-10 h-10" />
    <p className="text-xs mt-1 text-gray-300">{name}</p>
  </motion.div>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Featured project component
const FeaturedProject = ({
  title,
  description,
  image,
  technologies,
  codeLink,
}) => (
  <motion.div
    className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
    whileHover={{ y: -10 }}
  >
    <div className="relative h-48 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-blue-400">{title}</h3>
      <p className="text-gray-300 mt-2 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {technologies.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        to={codeLink}
        className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm font-semibold"
      >
        View Project →
      </Link>
    </div>
  </motion.div>
);

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "testimonials",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sample data for skills
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl" /> },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="text-orange-500 text-3xl" />,
    },
    {
      name: "Three.js",
      icon: <SiThreedotjs className="text-black text-3xl" />,
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss className="text-cyan-400 text-3xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-3xl" />,
    },
    { name: "AWS", icon: <FaAws className="text-orange-400 text-3xl" /> },
  ];

  const socials = [
    {
      name: "GitHub",
      icon: (
        <FaGithub className="text-3xl text-gray-400 hover:text-black transition" />
      ),
      link: "https://github.com/Vikram-353",
    },
    {
      name: "LinkedIn",
      icon: (
        <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-700 transition" />
      ),
      link: "https://linkedin.com/in/vikram-ranjan890",
    },
    {
      name: "LeetCode",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-8 h-8"
        />
      ),
      link: "https://leetcode.com/u/Vikram_Ranjan/",
    },
    {
      name: "ORCID",
      icon: (
        <FaOrcid className="text-3xl text-green-300 hover:text-green-700 transition" />
      ),
      link: "https://orcid.org/0009-0000-5494-4240",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      {/* About Section - Improved for better responsiveness */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 px-6 md:px-10 overflow-hidden w-full max-w-7xl mx-auto"
      >
        {/* Aesthetic Tech Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
        `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Floating Geometric Elements */}
          <motion.div
            className="absolute top-20 right-20 w-12 md:w-16 h-12 md:h-16 border border-blue-400/20 rounded-lg backdrop-blur-sm"
            animate={{ rotate: [0, 360], scale: [1, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-32 left-16 w-10 md:w-12 h-10 md:h-12 border border-purple-400/25 rotate-45"
            animate={{ rotate: [45, 405], y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Elegant Gradient Orbs */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-full blur-2xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/3 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-purple-500/8 to-blue-500/8 rounded-full blur-xl"
            animate={{ scale: [1, 1.2, 1], x: [0, 15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Minimalist Code Elements */}
          {["{ innovation }", "const magic = true", "export creativity"].map(
            (code, i) => (
              <motion.div
                key={i}
                className="absolute text-xs font-mono text-blue-300/20 select-none"
                style={{ left: `${15 + i * 25}%`, top: `${25 + i * 15}%` }}
                animate={{ opacity: [0.2, 0.4, 0.2], y: [0, -8, 0] }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  delay: i * 1.2,
                  ease: "easeInOut",
                }}
              >
                {code}
              </motion.div>
            )
          )}

          {/* Subtle Particle Dots */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ opacity: [0, 0.6, 0], scale: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Elegant Line Accents */}
          <motion.div
            className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent to-blue-400/40"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
          />
          <motion.div
            className="absolute bottom-1/3 left-0 w-24 h-px bg-gradient-to-r from-transparent to-purple-400/30"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 5,
              delay: 2,
            }}
          />
        </div>

        {/* Left Side - Text Content */}
        <motion.div
          className="relative z-10 text-center  lg:text-left max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="inline-block text-sm font-medium text-blue-400 mb-4 px-4     rounded-lg bg-blue-900/20 backdrop-blur-md border border-blue-400/20"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(37, 99, 235, 0.1)",
            }}
          >
            Welcome to my digital space
          </motion.span>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Vikram Ranjan
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            I craft elegant digital experiences by transforming complex ideas
            into intuitive, beautiful applications. Specializing in{" "}
            <span className="text-blue-400 font-medium">modern frontend</span>,{" "}
            <span className="text-purple-400 font-medium">AI integration</span>,
            and{" "}
            <span className="text-cyan-400 font-medium">
              data visualization
            </span>
            .
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/projects"
                className="block text-center w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
              >
                View My Work
              </Link>
            </motion.div>
            <motion.div
              className="w-full sm:w-auto"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href={assets.resume}
                className="block text-center w-full sm:w-auto bg-transparent border border-blue-400/50 text-blue-300 px-6 py-3 rounded-lg text-base font-medium hover:bg-blue-400/10 hover:border-blue-400 transition-all duration-300"
                download
                aria-label="Download resume"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xl p-3 rounded-lg hover:bg-blue-400/5 border border-transparent hover:border-blue-400/20"
                aria-label={`Follow on ${social.name || "social"}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
      </section>

      <section
        id="about"
        className="text-center px-4 sm:px-8 md:px-10 py-16 md:py-20 bg-gray-900/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-200 md:h-72 lg:w-250 lg:h-80 mx-auto md:mx-0">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-full animate-pulse p-1">
                {/* Inner container with shadow effect */}
                <div className="w-full h-full bg-white rounded-full p-1">
                  {/* Image container */}
                  <div className="w-full h-full rounded-full overflow-hidden shadow-inner ring-2 ring-white">
                    <img
                      src={assets.profile_pic}
                      alt="Vikram Ranjan"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative accent dots */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-teal-400 rounded-full"></div>
            </div>

            {/* Text Content - Improved text alignment and spacing */}
            <div className="text-left mt-6 md:mt-0">
              <p className="text-gray-300 text-base md:text-lg text-justify">
                I'm a front-end developer and AI enthusiast, passionate about
                building modern, intelligent, and visually compelling web
                applications. My journey started with a love for creating clean,
                responsive, and interactive user interfaces, which gradually
                expanded into the realms of AI, machine learning, and smart
                systems.
              </p>
              <p className="mt-4 text-gray-300 text-base md:text-lg text-justify">
                With experience in React, Tailwind CSS, and MERN stack
                development, I specialize in crafting seamless, intuitive, and
                accessible digital experiences. Beyond UI/UX, I have a deep
                interest in integrating AI-driven solutions into
                applications—whether it's computer vision, predictive analytics,
                or automation.
              </p>

              <div className="mt-6">
                <Link
                  to="/about"
                  className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center"
                >
                  Learn more about my journey
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-8 md:px-20 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            {/* <h1 className="text-2xl md:text-3xl font-bold">
              <Lightbulb className="text-blue-400 w-7 h-7 animate-pulse" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h1> */}

            <motion.h1
              className="text-3xl md:text-4xl font-bold inline-flex items-center justify-center gap-2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Lightbulb className="text-blue-400 w-7 h-7 animate-pulse" />
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </motion.h1>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto px-4">
              Here are some of my recent projects that showcase my skills and
              interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projectsData.map((project, index) =>
              project.featured ? (
                <FeaturedProject key={index} {...project} />
              ) : (
                ""
              )
            )}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block bg-blue-600/20 border border-blue-500 px-6 py-3 rounded-lg text-lg hover:bg-blue-500/30 transition duration-300"
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </section>
      {/* Skills Section - Improved for better responsiveness */}
      <section
        id="research"
        className="relative px-4 sm:px-8 md:px-20 py-16 md:py-20 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          {/* Header Section */}

          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
                <BookOpen className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Research & Innovations
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Explore my published research papers and patented innovations in
              AI, machine learning, and healthcare technology.
            </motion.p>
          </div>

          {/* Research Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {researchData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative h-full p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl shadow-xl transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 group-hover:border-blue-400/50 transition-colors duration-300">
                            <IconComponent className="w-5 h-5 text-blue-400" />
                          </div>
                          <div>
                            <span className="inline-block px-2 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full border border-blue-500/30">
                              {item.type}
                            </span>
                            <div className="text-xs text-gray-500 mt-1">
                              {item.year}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-blue-100 transition-colors duration-300">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 mb-6 leading-relaxed text-sm line-clamp-4 group-hover:text-gray-300 transition-colors duration-300">
                        {item.description}
                      </p>

                      {/* Link */}
                      <motion.a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm group/link transition-colors duration-300"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span>{item.linkText}</span>
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                      </motion.a>
                    </div>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-full text-blue-400 hover:border-blue-400/50 transition-colors duration-300 cursor-pointer">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">
                More publications coming soon
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
