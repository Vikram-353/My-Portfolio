// import React from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import { assets } from "../assets/assets.js";

// const projects = [
//   {
//     id: 1,
//     title: "Smart Parking System",
//     description:
//       "An AI-powered system for real-time parking space detection using YOLOv8.",
//     image: assets.profile_pic, // Replace with actual image path
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Coal Mines Manager",
//     description:
//       "A shift handover system with real-time reports, safety checks, and employee tracking.",
//     image: assets.profile_pic, // Replace with actual image path
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Portfolio Website",
//     description:
//       "A 3D interactive portfolio showcasing my skills and projects.",
//     image: assets.profile_pic, // Replace with actual image path
//     link: "#",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// function Projects() {
//   return (
//     <section className="min-h-screen bg-gray-900 py-16 px-6">
//       <motion.div
//         initial="hidden"
//         animate="visible"
//         className="container mx-auto text-center"
//       >
//         <h2 className="text-5xl font-bold text-white mb-12">
//           My <span className="text-blue-500">Projects</span>
//         </h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((project) => (
//             <motion.div key={project.id} variants={cardVariants}>
//               <Tilt
//                 glareEnable={true}
//                 glareMaxOpacity={0.4}
//                 glareColor="#ffffff"
//                 glarePosition="bottom"
//                 scale={1.05}
//               >
//                 <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-56 object-cover rounded-t-lg"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-2xl font-semibold text-white">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-300 mt-2">{project.description}</p>
//                     <a
//                       href={project.link}
//                       className="inline-block mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:scale-110 transition-transform"
//                     >
//                       View Project
//                     </a>
//                   </div>
//                 </div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default Projects;
// import React from "react";
// import { motion } from "framer-motion";
// import Tilt from "react-parallax-tilt";
// import { assets } from "../assets/assets.js";

// const projects = [
//   {
//     id: 1,
//     title: "Smart Parking System",
//     description:
//       "An AI-powered system for real-time parking space detection using YOLOv8.",
//     image: assets.profile_pic, // Replace with actual image path
//     link: "#",
//   },
//   {
//     id: 2,
//     title: "Coal Mines Manager",
//     description:
//       "A shift handover system with real-time reports, safety checks, and employee tracking.",
//     image: assets.profile_pic, // Replace with actual image path
//     link: "#",
//   },
//   {
//     id: 3,
//     title: "Portfolio Website",
//     description:
//       "A 3D interactive portfolio showcasing my skills and projects.",
//     image: assets.profile_pic, // Replace with actual image path
//     link: "#",
//   },
// ];

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// // ✅ Define the FeaturedProject Component
// const FeaturedProject = ({ title, description, image, link }) => {
//   return (
//     <motion.div
//       variants={cardVariants}
//       initial="hidden"
//       animate="visible"
//       whileHover={{ scale: 1.05 }}
//       className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
//     >
//       <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable>
//         <img src={image} alt={title} className="w-full h-48 object-cover" />
//       </Tilt>

//       <div className="p-6 text-center">
//         <h3 className="text-xl font-semibold mb-3">{title}</h3>
//         <p className="text-gray-400">{description}</p>
//         <a
//           href={link}
//           className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
//         >
//           View Project
//         </a>
//       </div>
//     </motion.div>
//   );
// };

// function Projects() {
//   return (
//     <section className="py-16 bg-gray-900 text-white">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           className="text-4xl font-bold mb-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
//         >
//           My Projects
//         </motion.h2>

//         <section id="projects" className="px-8 md:px-20 py-20">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold">
//                 <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//                   Featured Projects
//                 </span>
//               </h2>
//               <p className="text-gray-400 mt-4 max-w-xl mx-auto">
//                 Here are some of my recent projects that showcase my skills and
//                 interests.
//               </p>
//             </div>

//             {/* ✅ Use 'projects' array instead of 'featuredProjects' */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {projects.map((project, index) => (
//                 <FeaturedProject key={index} {...project} />
//               ))}
//             </div>
//           </motion.div>
//         </section>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { assets } from "../assets/assets.js";

// Project data - expanded with more details
const projectsData = [
  {
    id: 1,
    title: "Smart Parking System",
    description:
      "An AI-powered system for real-time parking space detection using YOLOv8.",
    longDescription:
      "This intelligent parking system uses computer vision and deep learning to identify available parking spots in real-time. The solution implements YOLOv8 for object detection, paired with a user-friendly dashboard for parking management.",
    image: assets.profile_pic, // Replace with actual image path
    demoLink: "https://demo.smartparking.com",
    codeLink: "https://github.com/username/smart-parking",
    technologies: ["React", "Python", "YOLOv8", "TensorFlow", "Flask"],
    featured: true,
    category: "AI",
  },
  {
    id: 2,
    title: "Coal Mines Manager",
    description:
      "A shift handover system with real-time reports, safety checks, and employee tracking.",
    longDescription:
      "Developed for the mining industry, this comprehensive management system streamlines shift handovers, generates automated reports, conducts safety checks, and provides real-time employee tracking for enhanced operational efficiency and safety compliance.",
    image: assets.profile_pic, // Replace with actual image path
    demoLink: "https://demo.coalminesmanager.com",
    codeLink: "https://github.com/username/coal-mines-manager",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    featured: true,
    category: "Web App",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A 3D interactive portfolio showcasing my skills and projects.",
    longDescription:
      "This portfolio website features interactive 3D elements built with Three.js and React Three Fiber. It showcases my projects, skills, and experience in an engaging and visually appealing manner.",
    image: assets.profile_pic, // Replace with actual image path
    demoLink: "#",
    codeLink: "https://github.com/username/portfolio",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    featured: false,
    category: "Web App",
  },
  {
    id: 4,
    title: "AI Image Generator",
    description:
      "A web application that uses deep learning to generate unique artwork from text prompts.",
    longDescription:
      "This creative tool uses state-of-the-art machine learning models to transform text descriptions into unique visual artwork. Users can adjust various parameters to control the style, composition, and artistic elements of the generated images.",
    image: assets.profile_pic, // Replace with actual image path
    demoLink: "https://demo.ai-image-generator.com",
    codeLink: "https://github.com/username/ai-image-generator",
    technologies: ["React", "Python", "PyTorch", "FastAPI", "DALL-E"],
    featured: true,
    category: "AI",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A productivity application with AI-powered task prioritization and scheduling.",
    longDescription:
      "This smart task manager helps users optimize their productivity by intelligently organizing tasks based on priority, deadlines, and estimated completion time. It features customizable workflows, team collaboration tools, and insightful analytics.",
    image: assets.profile_pic, // Replace with actual image path
    demoLink: "https://demo.task-manager.com",
    codeLink: "https://github.com/username/task-manager",
    technologies: ["React Native", "Node.js", "MongoDB", "Express"],
    featured: false,
    category: "Mobile App",
  },
  {
    id: 6,
    title: "Weather Forecast Dashboard",
    description:
      "A real-time weather visualization tool with interactive maps and forecasts.",
    longDescription:
      "This comprehensive weather dashboard pulls data from multiple weather APIs to provide accurate forecasts, historical weather data, and interactive visualization tools. Users can view detailed weather patterns on customizable maps and receive personalized alerts.",
    image: assets.profile_pic, // Replace with actual image path
    demoLink: "https://demo.weather-dashboard.com",
    codeLink: "https://github.com/username/weather-dashboard",
    technologies: [
      "Vue.js",
      "D3.js",
      "Node.js",
      "Express",
      "OpenWeatherMap API",
    ],
    featured: false,
    category: "Web App",
  },
];

// Project categories
const categories = ["All", "Web App", "Mobile App", "AI", "UI/UX"];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const [projects, setProjects] = useState(projectsData);
  const [isDetailMode, setIsDetailMode] = useState(false);

  // Filter projects based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setProjects(projectsData);
    } else {
      const filtered = projectsData.filter(
        (project) => project.category === selectedCategory
      );
      setProjects(filtered);
    }
  }, [selectedCategory]);

  // Handlers
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setIsDetailMode(false);
  };

  const openProjectDetail = (project) => {
    setActiveProject(project);
    setIsDetailMode(true);
  };

  const closeProjectDetail = () => {
    setIsDetailMode(false);
    setTimeout(() => setActiveProject(null), 300);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const detailVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-25 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="bg-blue-500/20 text-blue-400 text-sm font-medium px-4 py-1.5 rounded-full">
            MY WORK
          </span>
          <h2 className="text-5xl font-bold mt-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Projects{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Explore my recent work across various domains including web
            development, mobile applications, AI solutions, and design projects.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {!isDetailMode ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={cardVariants} layout>
                <Tilt
                  glareEnable={true}
                  glareMaxOpacity={0.2}
                  glareColor="#ffffff"
                  glarePosition="all"
                  scale={1.02}
                  className="h-full"
                >
                  <div
                    className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl h-full 
                              border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                    onClick={() => openProjectDetail(project)}
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {project.featured && (
                        <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                          Featured
                        </span>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mt-3 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-700/70 text-gray-300 text-xs px-2.5 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="bg-gray-700/70 text-gray-300 text-xs px-2.5 py-1 rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="mt-6 flex justify-between items-center">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openProjectDetail(project);
                          }}
                          className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                        >
                          View Details
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <div className="flex gap-2">
                          {project.demoLink && (
                            <a
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                  fillRule="evenodd"
                                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          )}
                          {project.codeLink && (
                            <a
                              href={project.codeLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 text-gray-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-4xl mx-auto bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-gray-700"
          >
            {activeProject && (
              <>
                <div className="relative">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-72 md:h-96 object-cover"
                  />
                  <button
                    onClick={closeProjectDetail}
                    className="absolute top-4 right-4 bg-gray-900/60 hover:bg-gray-900 text-white p-2 rounded-full transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <h2 className="text-3xl font-bold text-white">
                      {activeProject.title}
                    </h2>
                    <p className="text-blue-400 mt-2">
                      {activeProject.category}
                    </p>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {activeProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-400 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    Project Overview
                  </h3>
                  <p className="text-gray-300 mt-3">
                    {activeProject.longDescription}
                  </p>

                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Features
                      </h3>
                      <ul className="mt-3 space-y-2 list-disc list-inside text-gray-300">
                        <li>Responsive design for all device sizes</li>
                        <li>Intuitive user interface with modern animations</li>
                        <li>Secure authentication and data protection</li>
                        <li>Real-time data processing and visualization</li>
                        <li>Integration with external APIs and services</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        Technical Details
                      </h3>
                      <ul className="mt-3 space-y-2 list-disc list-inside text-gray-300">
                        <li>
                          Frontend: React.js with advanced state management
                        </li>
                        <li>Backend: Node.js with Express framework</li>
                        <li>Database: MongoDB for flexible data storage</li>
                        <li>Authentication: JWT-based secure access control</li>
                        <li>
                          Deployment: Docker containers on AWS infrastructure
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    {activeProject.demoLink && (
                      <a
                        href={activeProject.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {activeProject.codeLink && (
                      <a
                        href={activeProject.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}

        {!isDetailMode && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center mt-16"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
            >
              View more projects on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Projects;
