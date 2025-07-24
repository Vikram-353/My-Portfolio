import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  TorusKnot,
  MeshWobbleMaterial,
  Stars,
  useTexture,
} from "@react-three/drei";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { assets, projectsData } from "../assets/assets";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaDribbble,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiThreedotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

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

// Animated Scene
const AnimatedScene = () => {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
      <TorusKnot args={[1, 0.3, 128, 32]} scale={1.8}>
        <MeshWobbleMaterial
          color="#4299e1"
          attach="material"
          factor={0.6}
          speed={1.5}
          metalness={0.8}
          roughness={0.2}
        />
      </TorusKnot>
    </>
  );
};

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
        <FaGithub className="text-3xl text-gray-800 hover:text-black transition" />
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
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 bg-secondary-500/20 rounded-full blur-3xl animate-float"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
            animationDelay: '2s'
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <section
        id="home"
        className="pt-30 lg:pt-0 flex flex-col lg:flex-row items-center justify-center gap-20 px-8 md:px-20 min-h-screen relative z-10"
      >
        {/* Left Side - Text Content */}
        <motion.div
          className="text-center lg:text-left max-w-xl relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
          
          <motion.span
            className="inline-block text-sm font-semibold text-primary-400 mb-2 px-4 py-2 rounded-full bg-glass border border-primary-400/30 shadow-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ✨ Welcome to my portfolio
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm{" "}
            <span className="text-gradient animate-gradient-x bg-gradient-to-r from-primary-400 via-secondary-500 to-primary-600">
              Vikram Ranjan
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-dark-300 text-lg max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            I transform complex ideas into elegant, user-friendly applications.
            Specializing in
            <span className="text-primary-400 font-semibold"> front-end development</span> with a
            focus on
            <span className="text-secondary-400 font-semibold"> AI integration</span> and
            <span className="text-primary-400 font-semibold"> data visualization</span>.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl text-lg font-semibold hover:from-primary-500 hover:to-primary-600 transition-all duration-300 shadow-glow hover:shadow-glow-lg transform hover:-translate-y-1"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={assets.resume}
                className="group relative px-8 py-4 bg-glass-dark border border-primary-400/30 rounded-xl text-lg font-semibold hover:bg-primary-600/20 transition-all duration-300 shadow-lg hover:shadow-glow transform hover:-translate-y-1"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-400 to-primary-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center lg:justify-start space-x-6"
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
                className="group relative p-3 bg-glass-dark border border-dark-600 rounded-xl hover:border-primary-400/50 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {social.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Enhanced 3D Animation */}
        <motion.div
          className="w-full h-[300px] md:h-[400px] lg:h-[600px] lg:w-[600px] mt-20 lg:mt-20 md:pb-8 sm:pb-5 mb-5 md:mb-8 lg:mb-10 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {/* Decorative rings */}
          <div className="absolute inset-0 rounded-full border border-primary-400/20 animate-spin-slow"></div>
          <div className="absolute inset-4 rounded-full border border-secondary-400/20 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          
          <Canvas className="rounded-xl relative z-10">
            <AnimatedScene />
          </Canvas>
          
          {/* Floating particles */}
          <div className="absolute top-10 left-10 w-2 h-2 bg-primary-400 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-secondary-400 rounded-full animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-10 w-1 h-1 bg-primary-300 rounded-full animate-bounce-slow" style={{ animationDelay: '2s' }}></div>
        </motion.div>
      </section>

      {/* About Section - Enhanced */}
      <section
        id="about"
        className="text-center px-4 sm:px-8 md:px-20 py-16 md:py-20 bg-glass-dark backdrop-blur-xl relative"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-secondary-900/20"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.div
            className="inline-block mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm font-semibold text-primary-400 px-4 py-2 rounded-full bg-primary-900/30 border border-primary-400/30">
              About Me
            </span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <span className="text-gradient">
              Crafting Digital Experiences
            </span>
          </h2>

          <div className="mt-8 flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Enhanced image container with multiple layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-secondary-500 to-primary-600 rounded-full animate-gradient-xy p-1">
                <div className="w-full h-full bg-dark-900 rounded-full p-2">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-inner ring-2 ring-white/20 relative">
                    <img
                      src={assets.profile_pic}
                      alt="Vikram Ranjan"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-full shadow-glow"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-secondary-400 to-primary-500 rounded-full shadow-glow-purple"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/2 -right-6 w-4 h-4 bg-primary-300 rounded-full shadow-glow"
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
              ></motion.div>
            </motion.div>

            {/* Enhanced text content */}
            <div className="text-left mt-6 md:mt-0 space-y-6">
              <motion.p
                className="text-dark-200 text-lg leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                I'm a <span className="text-primary-400 font-semibold">front-end developer</span> and <span className="text-secondary-400 font-semibold">AI enthusiast</span>, passionate about
                building modern, intelligent, and visually compelling web
                applications. My journey started with a love for creating clean,
                responsive, and interactive user interfaces.
              </motion.p>
              
              <motion.p
                className="text-dark-200 text-lg leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                With expertise in <span className="text-primary-400 font-semibold">React, Tailwind CSS, and MERN stack</span>
                development, I specialize in crafting seamless, intuitive, and
                accessible digital experiences with <span className="text-secondary-400 font-semibold">AI-driven solutions</span>.
              </motion.p>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/about"
                  className="group inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold text-lg transition-all duration-300"
                >
                  <span className="mr-2">Learn more about my journey</span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform group-hover:translate-x-2 transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    whileHover={{ x: 5 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section - Enhanced */}
      <section id="projects" className="px-4 sm:px-8 md:px-20 py-16 md:py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-semibold text-secondary-400 px-4 py-2 rounded-full bg-secondary-900/30 border border-secondary-400/30">
                Portfolio
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">
                Featured Projects
              </span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Here are some of my recent projects that showcase my skills and
              passion for creating innovative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) =>
              project.featured ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-glass-dark border border-dark-600 rounded-2xl overflow-hidden hover:border-primary-400/50 transition-all duration-500 shadow-xl hover:shadow-glow h-full">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                      
                      {/* Overlay content */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.technologies.slice(0, 2).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-primary-600/80 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 2 && (
                            <span className="bg-secondary-600/80 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                              +{project.technologies.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-dark-300 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <Link
                        to={project.codeLink}
                        className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-all duration-300 group-hover:translate-x-2"
                      >
                        <span>View Project</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2 transform transition-transform duration-300"
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
                </motion.div>
              ) : null
            )}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/projects"
              className="group inline-flex items-center px-8 py-4 bg-glass border border-primary-400/30 rounded-xl text-lg font-semibold hover:bg-primary-600/20 transition-all duration-300 shadow-lg hover:shadow-glow transform hover:-translate-y-1"
            >
              <span>View All Projects</span>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
                whileHover={{ x: 5 }}
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section - Enhanced */}
      <section
        id="skills"
        className="px-4 sm:px-8 md:px-20 py-16 md:py-20 bg-glass-dark backdrop-blur-xl relative"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/20 via-transparent to-primary-900/20"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-semibold text-primary-400 px-4 py-2 rounded-full bg-primary-900/30 border border-primary-400/30">
                Technologies
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Tools and technologies I work with to bring ideas to life and create amazing digital experiences.
            </p>
          </div>

          <div className="bg-glass border border-dark-600/50 p-8 md:p-12 rounded-2xl shadow-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 bg-glass-dark border border-dark-600 rounded-xl hover:border-primary-400/50 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-sm md:text-base font-medium text-center group-hover:text-primary-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-secondary-400/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research Section - Enhanced */}
      <section id="research" className="px-4 sm:px-8 md:px-20 py-16 md:py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-900/5 to-transparent"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="text-center mb-16">
            <motion.div
              className="inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-semibold text-secondary-400 px-4 py-2 rounded-full bg-secondary-900/30 border border-secondary-400/30">
                Research
              </span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">
                Research & Innovations
              </span>
            </h2>
            <p className="text-dark-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Explore my published research papers and patented innovations in AI, machine learning, and data science.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Cyberbullying Behavior Analysis",
                description: "Analyzing cyberbullying behavior in social media using supervised machine learning & natural language processing",
                link: "https://scholar.google.com/citations?hl=en&user=8fP0PUUAAAAJ&view_op=list_works&gmla=ANZ5fUPQlsMPR0kwVHUbRswk_EP7jz-eS_a0p0AHOP7PHKRrdGcSEgvAqS7q_WrO81lxuRCqMymD7t88SBoUmJky9sm3CMXQs5jZZmPv1Qr1nJ8dQ8krZba3Vx5SxCD08PgPX9E",
                type: "Research Paper"
              },
              {
                title: "AQI Prediction and Sustainable Pollution Control",
                description: "Performance Evaluation of Various Machine Learning Models and Its Implications for Informed Air Policy Decisions: A Comparative Study for Delhi",
                link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=8fP0PUUAAAAJ&citation_for_view=8fP0PUUAAAAJ:u-x6o8ySG0sC",
                type: "Research Paper"
              },
              {
                title: "Real-time Image Processing & Smart Healthcare",
                description: "Conducted qualitative and quantitative analysis for mental stress detection using physiological and behavioral data with eXplainable AI (XAI)",
                link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=8fP0PUUAAAAJ&citation_for_view=8fP0PUUAAAAJ:d1gkVwhDpl0C",
                type: "Journal"
              },
              {
                title: "Enterprise AI Chatbots",
                description: "Enterprise AI Chatbots: Enhancing with RAG and LLaMA 3.2 - A patented innovation in conversational AI",
                link: assets.Patent,
                type: "Patent"
              }
            ].map((research, index) => (
              <motion.div
                key={index}
                className="group bg-glass-dark border border-dark-600 rounded-2xl p-8 hover:border-primary-400/50 transition-all duration-500 shadow-xl hover:shadow-glow transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    research.type === 'Patent' 
                      ? 'bg-secondary-600/20 text-secondary-400 border border-secondary-400/30'
                      : 'bg-primary-600/20 text-primary-400 border border-primary-400/30'
                  }`}>
                    {research.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                  {research.title}
                </h3>
                
                <p className="text-dark-300 leading-relaxed mb-6">
                  {research.description}
                </p>
                
                <a
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 font-semibold transition-all duration-300 group-hover:translate-x-2"
                >
                  <span>{research.type === 'Patent' ? 'View Patent' : 'Google Scholar'}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-2 transform transition-transform duration-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/5 to-secondary-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;

          >
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Animation */}
        <motion.div
          className="w-full h-[300px] md:h-[400px] lg:h-[600px] lg:w-[600px] mt-20 lg:mt-20 md:pb-8 sm:pb-5 mb-5 md:mb-8 lg:mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Canvas className="rounded-xl">
            <AnimatedScene />
          </Canvas>
        </motion.div>
      </section>

      {/* About Section - Improved for better responsiveness */}
      <section
        id="about"
        className="text-center px-4 sm:px-8 md:px-20 py-16 md:py-20 bg-gray-900/50 backdrop-blur-sm"
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

          <div className="mt-6 flex flex-col md:flex-row gap-8 items-center">
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
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
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
        id="skills"
        className="px-4 sm:px-8 md:px-20 py-16 md:py-20 bg-gray-900/50"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto px-4">
              Tools and technologies I work with to bring ideas to life.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-xl border border-gray-700">
            {/* Responsive grid with improved spacing and alignment */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-2 sm:gap-3 p-3 hover:bg-gray-700/30 transition-colors rounded-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="mb-2 sm:mb-0">{skill.icon}</div>
                  <span className="text-sm md:text-base font-medium text-center sm:text-left">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Research Section */}
      <section id="research" className="px-4 sm:px-8 md:px-20 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Research & Innovations
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto px-4">
              Explore my published research papers and patented innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                Cyberbullying Behavior Analysis
              </h3>
              <p className="text-gray-400 mt-2">
                Analyzing cyberbullying behavior in social media using
                supervised machine learning & natural language processing
              </p>
              <a
                href="https://scholar.google.com/citations?hl=en&user=8fP0PUUAAAAJ&view_op=list_works&gmla=ANZ5fUPQlsMPR0kwVHUbRswk_EP7jz-eS_a0p0AHOP7PHKRrdGcSEgvAqS7q_WrO81lxuRCqMymD7t88SBoUmJky9sm3CMXQs5jZZmPv1Qr1nJ8dQ8krZba3Vx5SxCD08PgPX9E"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                Google Scholar →
              </a>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                AQI Prediction and Sustainable Pollution Control Solutions.
              </h3>
              <p className="text-gray-400 mt-2">
                Performance Evaluation of Various Machine Learning Models and
                Its Implications for Informed Air Policy Decisions: A
                Comparative Study for Delhi
              </p>
              <a
                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=8fP0PUUAAAAJ&citation_for_view=8fP0PUUAAAAJ:u-x6o8ySG0sC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                Google Scholar →
              </a>
            </div>

            {/* //Journal  */}
            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                Real time image processing and smart healthcare using
                eXplainable artificial intelligence (XAI)
              </h3>
              <p className="text-gray-400 mt-2">
                Conducted qualitative and quantitative analysis for mental
                stress detection using physiological and behavioral data.
                Integrated advanced AI techniques for enhanced emotion
                recognition accuracy. Compared ensemble learning models and
                achieved improved performance using Deep Neural Networks (DNN).
              </p>
              <a
                href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=8fP0PUUAAAAJ&citation_for_view=8fP0PUUAAAAJ:d1gkVwhDpl0C"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                Google Scholar →
              </a>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                Enterprise AI Chatbots
              </h3>
              <p className="text-gray-400 mt-2">
                Enterprise AI Chatbots: Enhancing with RAG and LLaMA 3.2
              </p>
              <a
                href={assets.Patent}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                View Patent →
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
