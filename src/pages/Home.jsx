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
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <section
        id="home"
        className="pt-30 lg:pt-0 flex flex-col lg:flex-row items-center justify-center  gap-20  px-8 md:px-20 min-h-screen"
      >
        {/* Left Side - Text Content */}
        <motion.div
          className="text-center lg:text-left max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="inline-block text-sm font-semibold text-blue-400 mb-2 px-3 py-1 rounded-full bg-blue-900/30 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome to my portfolio
          </motion.span>

          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vikram Ranjan
            </span>
          </motion.h1>

          <motion.p
            className="mt-4 text-gray-300 text-lg max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            I transform complex ideas into elegant, user-friendly applications.
            Specializing in
            <span className="text-blue-400"> front-end development</span> with a
            focus on
            <span className="text-blue-400"> AI integration</span> and
            <span className="text-blue-400"> data visualization</span>.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Link
              to="/projects"
              className="bg-blue-600 px-8 py-3 rounded-lg text-lg hover:bg-blue-500 transition duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-blue-500 px-8 py-3 rounded-lg text-lg hover:bg-blue-500/10 transition duration-300"
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center lg:justify-start space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
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
          className="w-full h-[300px] md:h-[400px] lg:h-[600px] lg:w-[600px] mt-10 lg:mt-0"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                Cyberbullying Behavior Analysis
              </h3>
              <p className="text-gray-400 mt-2">
                Analyzing cyberbullying behavior in social media using
                supervised machine learning & natural language processing
              </p>
              <a
                href="https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=Ranjan%2C+V.%2C+Suthar%2C+K.%2C+Verma%2C+M.%2C+Salaria%2C+S.%2C+%26+Vij%2C+S.+%282024%29.+Analyzing+cyberbullying+behavior+in+social+media+using+supervised+machine+learning+%26+natural+language+processing.+Available+at+SSRN+4938099.&btnG="
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
            {/* <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                Surviellence System
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
            </div> */}
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
