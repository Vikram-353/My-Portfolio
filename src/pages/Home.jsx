// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div className="w-full min-h-screen bg-gray-900 text-white">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10">
//         {/* Left Side - Text Content */}
//         <div className="text-center md:text-left max-w-xl">
//           <h1 className="text-4xl md:text-6xl font-bold">
//             Hello, I'm Vikram Ranjan
//           </h1>
//           <p className="mt-4 text-gray-400 text-lg">
//             Front-End Developer | AI & ML Enthusiast
//           </p>
//           <div className="mt-6 flex justify-center md:justify-start space-x-4">
//             <Link
//               to="/projects"
//               className="bg-blue-600 px-6 py-2 rounded-lg text-lg hover:bg-blue-500"
//             >
//               View Projects
//             </Link>
//             <Link
//               to="/contact"
//               className="border border-blue-500 px-6 py-2 rounded-lg text-lg hover:bg-blue-500"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         {/* Right Side - 3D Animation */}
//         <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
//           <Canvas>
//             <OrbitControls enableZoom={false} />
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[2, 5, 2]} intensity={1} />
//             <Sphere args={[1, 100, 200]} scale={2.5}>
//               <MeshDistortMaterial
//                 color="#4B9CD3"
//                 attach="material"
//                 distort={0.5}
//                 speed={2}
//               />
//             </Sphere>
//           </Canvas>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="text-center px-8 md:px-20 py-10">
//         <h2 className="text-3xl font-bold">About Me</h2>
//         <p className="mt-4 text-gray-400 text-lg">
//           Passionate about creating dynamic and intelligent web applications.
//         </p>
//       </section>

//       {/* Projects Section */}
//       <section className="px-8 md:px-20 py-10">
//         <h2 className="text-3xl font-bold text-center">My Work</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           {/* Example Project Card */}
//           <div className="bg-gray-800 p-4 rounded-lg hover:shadow-lg">
//             <h3 className="text-xl font-bold">Project Name</h3>
//             <p className="text-gray-400 mt-2">
//               Brief description of the project.
//             </p>
//           </div>
//           {/* Add more project cards here */}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="text-center px-8 md:px-20 py-10">
//         <h2 className="text-3xl font-bold">Let's Connect</h2>
//         <p className="mt-4 text-gray-400 text-lg">Reach out to collaborate!</p>
//         <div className="mt-6 flex justify-center space-x-4">
//           <Link
//             to="/contact"
//             className="bg-blue-600 px-6 py-2 rounded-lg text-lg hover:bg-blue-500"
//           >
//             Contact Me
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Home() {
//   return (
//     <div className="w-full min-h-screen bg-gray-900 text-white">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10">
//         {/* Left Side - Text Content */}
//         <div className="text-center md:text-left max-w-xl">
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Hello, I'm <span className="text-blue-500">Vikram Ranjan</span>
//           </motion.h1>
//           <motion.p
//             className="mt-4 text-gray-400 text-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 1 }}
//           >
//             Front-End Developer | AI & ML Enthusiast
//           </motion.p>
//           <div className="mt-6 flex justify-center md:justify-start space-x-4">
//             <Link
//               to="/projects"
//               className="bg-blue-600 px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition duration-300"
//             >
//               View Projects
//             </Link>
//             <Link
//               to="/contact"
//               className="border border-blue-500 px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition duration-300"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         {/* Right Side - 3D Animation */}
//         <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
//           <Canvas>
//             <OrbitControls enableZoom={false} />
//             <ambientLight intensity={0.5} />
//             <directionalLight position={[2, 5, 2]} intensity={1} />
//             <Sphere args={[1, 100, 200]} scale={2.5}>
//               <MeshDistortMaterial
//                 color="#4B9CD3"
//                 attach="material"
//                 distort={0.5}
//                 speed={2}
//               />
//             </Sphere>
//           </Canvas>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="text-center px-8 md:px-20 py-10 bg-gray-800">
//         <h2 className="text-3xl font-bold">About Me</h2>
//         <p className="mt-4 text-gray-400 text-lg max-w-3xl mx-auto">
//           Passionate about creating dynamic and intelligent web applications.
//           Skilled in React.js, AI, and data science, I love blending technology
//           and creativity.
//         </p>
//       </section>

//       {/* Projects Section */}
//       <section className="px-8 md:px-20 py-10">
//         <h2 className="text-3xl font-bold text-center">My Work</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           {[1, 2, 3].map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-xl font-bold">Project {project}</h3>
//               <p className="text-gray-400 mt-2">
//                 Brief description of the project.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="text-center px-8 md:px-20 py-10">
//         <h2 className="text-3xl font-bold">Let's Connect</h2>
//         <p className="mt-4 text-gray-400 text-lg">Reach out to collaborate!</p>
//         <div className="mt-6 flex justify-center space-x-4">
//           <Link
//             to="/contact"
//             className="bg-blue-600 px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition duration-300"
//           >
//             Contact Me
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-gray-400 text-center py-6">
//         <p>© 2024 Vikram Ranjan. All rights reserved.</p>
//         <div className="mt-2 flex justify-center space-x-4">
//           <a
//             href="https://github.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition"
//           >
//             GitHub
//           </a>
//           <a
//             href="https://linkedin.com/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-white transition"
//           >
//             LinkedIn
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;

// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import {
//   OrbitControls,
//   TorusKnot,
//   MeshWobbleMaterial,
// } from "@react-three/drei";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// function Home() {
//   return (
//     <div className="w-full min-h-screen bg-gray-900 text-white">
//       {/* Hero Section */}
//       <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10">
//         {/* Left Side - Text Content */}
//         <div className="text-center md:text-left max-w-xl">
//           <motion.h1
//             className="text-4xl md:text-6xl font-bold"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//           >
//             Hello, I'm <span className="text-blue-500">Vikram Ranjan</span>
//           </motion.h1>
//           <motion.p
//             className="mt-4 text-gray-400 text-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 1 }}
//           >
//             Front-End Developer | AI & ML Enthusiast
//           </motion.p>
//           <div className="mt-6 flex justify-center md:justify-start space-x-4">
//             <Link
//               to="/projects"
//               className="bg-blue-600 px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition duration-300"
//             >
//               View Projects
//             </Link>
//             <Link
//               to="/contact"
//               className="border border-blue-500 px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition duration-300"
//             >
//               Contact Me
//             </Link>
//           </div>
//         </div>

//         {/* Right Side - 3D Animation */}
//         <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
//           <Canvas>
//             <OrbitControls enableZoom={false} />
//             <ambientLight intensity={0.6} />
//             <directionalLight position={[3, 5, 2]} intensity={1} />
//             <TorusKnot args={[1, 0.3, 128, 32]} scale={2}>
//               <MeshWobbleMaterial
//                 color="#ff8c00"
//                 attach="material"
//                 factor={0.6} // Intensity of wobble
//                 speed={2} // Speed of the animation
//               />
//             </TorusKnot>
//           </Canvas>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="text-center px-8 md:px-20 py-10 bg-gray-800">
//         <h2 className="text-3xl font-bold">About Me</h2>
//         <p className="mt-4 text-gray-400 text-lg max-w-3xl mx-auto">
//           Passionate about creating dynamic and intelligent web applications.
//           Skilled in React.js, AI, and data science, I love blending technology
//           and creativity.
//         </p>
//       </section>

//       {/* Projects Section */}
//       <section className="px-8 md:px-20 py-10">
//         <h2 className="text-3xl font-bold text-center">My Work</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           {[1, 2, 3].map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
//               whileHover={{ scale: 1.05 }}
//             >
//               <h3 className="text-xl font-bold">Project {project}</h3>
//               <p className="text-gray-400 mt-2">
//                 Brief description of the project.
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="text-center px-8 md:px-20 py-10">
//         <h2 className="text-3xl font-bold">Let's Connect</h2>
//         <p className="mt-4 text-gray-400 text-lg">Reach out to collaborate!</p>
//         <div className="mt-6 flex justify-center space-x-4">
//           <Link
//             to="/contact"
//             className="bg-blue-600 px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition duration-300"
//           >
//             Contact Me
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;

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
import { assets } from "../assets/assets";

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
const FeaturedProject = ({ title, description, image, tags, link }) => (
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
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-900/50 text-blue-200 text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <Link
        to={link}
        className="inline-block mt-4 text-blue-400 hover:text-blue-300 text-sm font-semibold"
      >
        View Project →
      </Link>
    </div>
  </motion.div>
);

// Testimonial component
const Testimonial = ({ quote, author, role }) => (
  <motion.div
    className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <p className="text-gray-300 italic">{quote}</p>
    <div className="mt-4">
      <p className="text-blue-400 font-semibold">{author}</p>
      <p className="text-gray-400 text-sm">{role}</p>
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

  // Sample data for projects
  const featuredProjects = [
    {
      title: "AI Image Generator",
      description:
        "A web application that uses machine learning to generate unique artwork based on text prompts.",
      image: "/api/placeholder/600/400",
      tags: ["React", "TensorFlow.js", "Tailwind CSS"],
      link: "/projects/ai-image-generator",
    },
    {
      title: "Data Visualization Dashboard",
      description:
        "An interactive dashboard for visualizing complex datasets with customizable charts and filters.",
      image: "/api/placeholder/600/400",
      tags: ["D3.js", "React", "Firebase"],
      link: "/projects/data-dashboard",
    },
    {
      title: "Smart Task Manager",
      description:
        "A productivity app that uses AI to prioritize tasks and suggest optimal work schedules.",
      image: "/api/placeholder/600/400",
      tags: ["React Native", "Node.js", "MongoDB"],
      link: "/projects/smart-tasks",
    },
  ];

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

    // {
    //   name: "Twitter",
    //   icon: (
    //     <FaTwitter className="text-3xl text-blue-400 hover:text-blue-500 transition" />
    //   ),
    //   link: "https://twitter.com/yourusername",
    // },
    // {
    //   name: "Dribbble",
    //   icon: (
    //     <FaDribbble className="text-3xl text-pink-500 hover:text-pink-600 transition" />
    //   ),
    //   link: "https://dribbble.com/yourusername",
    // },
  ];
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      <section
        id="home"
        className="pt-20 lg:pt-0 flex flex-col lg:flex-row items-center justify-between px-8 md:px-20 min-h-screen"
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
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
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

      {/* About Section */}
      <section
        id="about"
        className="text-center px-8 md:px-20 py-20 bg-gray-900/50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="mt-6 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-480 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src={assets.profile_pic}
                  alt="Vikram Ranjan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-left">
              <p className="text-gray-300 text-lg">
                I'm a passionate front-end developer with 5+ years of experience
                building modern web applications. My journey in tech started
                with a fascination for creating visually appealing interfaces,
                and evolved into a deep interest in AI and machine learning
                integration.
              </p>
              <p className="mt-4 text-gray-300 text-lg">
                I specialize in creating intuitive, responsive, and accessible
                user interfaces that bridge the gap between complex
                functionalities and user-friendly experiences. My goal is to
                build applications that not only look great but also solve
                real-world problems.
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
      <section id="projects" className="px-8 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Here are some of my recent projects that showcase my skills and
              interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <FeaturedProject key={index} {...project} />
            ))}
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

      {/* Skills Section */}
      <section id="skills" className="px-8 md:px-20 py-20 bg-gray-900/50">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Tools and technologies I work with to bring ideas to life.
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  {skill.icon}
                  <span className="text-lg font-semibold">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="px-8 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                What People Say
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Feedback from clients and collaborators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonial
              quote="Vikram's ability to understand complex requirements and translate them into intuitive user interfaces is unmatched. His work exceeded our expectations."
              author="Sarah Johnson"
              role="CEO, TechInnovate"
            />
            <Testimonial
              quote="Working with Vikram was a pleasure. He not only delivered a beautiful website but also provided valuable insights that improved our overall product."
              author="Michael Chen"
              role="Product Manager, DataViz Inc."
            />
            <Testimonial
              quote="The AI integration Vikram implemented in our app has transformed our user experience. His technical skills and creativity make him stand out."
              author="Priya Sharma"
              role="CTO, AIConnect"
            />
          </div>
        </motion.div>
      </section> */}

      <section id="research" className="px-8 md:px-20 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Research & Innovations
              </span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Explore my published research papers and patented innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                AI-Powered Surveillance System
              </h3>
              <p className="text-gray-400 mt-2">
                A research paper on using YOLOv8 for real-time suspicious
                activity detection.
              </p>
              <a
                href="https://your-research-paper-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                Read More →
              </a>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                Smart Parking Management Patent
              </h3>
              <p className="text-gray-400 mt-2">
                A patented system for detecting empty and occupied parking
                spaces using AI.
              </p>
              <a
                href="https://your-patent-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                View Patent →
              </a>
            </div>

            <div className="p-6 border border-gray-700 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white">
                Coal Mines Safety Monitoring
              </h3>
              <p className="text-gray-400 mt-2">
                A research project on enhancing safety measures in coal mines
                using IoT & AI.
              </p>
              <a
                href="https://your-research-paper-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-4 inline-block"
              >
                Learn More →
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
