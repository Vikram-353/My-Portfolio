// import React from "react";
// import { assets } from "../assets/assets";

// function About() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
//       <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
//         {/* Title */}
//         <h2 className="text-4xl font-bold text-white text-center mb-6">
//           About Me
//         </h2>

//         {/* Profile Image */}
//         <div className="flex justify-center mb-6">
//           <img
//             src={assets.profile_pic}
//             alt="Profile"
//             className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
//           />
//         </div>

//         {/* Description */}
//         <p className="text-gray-300 text-lg text-center leading-relaxed">
//           Hi, I'm{" "}
//           <span className="text-blue-400 font-semibold">Vikram Ranjan</span>, a
//           passionate <b>MERN Stack Developer </b> with a keen interest in AI &
//           Data Science. I love building <b>dynamic web applications</b> and
//           integrating <b>machine learning models</b> into real-world projects.
//         </p>

//         {/* Skills Section */}
//         <div className="mt-6">
//           <h3 className="text-2xl text-white font-semibold mb-3">Skills</h3>
//           <div className="flex flex-wrap gap-3">
//             {[
//               "React.js",
//               "Node.js",
//               "Express.js",
//               "MongoDB",
//               "Python",
//               "Machine Learning",
//               "Tailwind CSS",
//               "Three.js",
//             ].map((skill, index) => (
//               <span
//                 key={index}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Experience */}
//         <div className="mt-6">
//           <h3 className="text-2xl text-white font-semibold mb-3">Experience</h3>
//           <ul className="text-gray-400 space-y-2">
//             <li>
//               🚀 IT Intern at CUTS Institute for Regulation & Competition (CIRC)
//             </li>
//             <li>🔹 Developed Coal Mines Manager System with Shift Handover</li>
//             <li>🧠 Built an AI-Powered Parking Management System</li>
//           </ul>
//         </div>

//         {/* Contact Button */}
//         <div className="flex justify-center mt-6">
//           <a
//             href="/contact"
//             className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
//           >
//             Contact Me
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { assets } from "../assets/assets";

// function About() {
//   const [activeTab, setActiveTab] = useState("skills");

//   // Skills with icons and proficiency levels
//   const skills = [
//     { name: "React.js", icon: "💻", level: 90 },
//     { name: "Node.js", icon: "🚀", level: 85 },
//     { name: "Express.js", icon: "⚡", level: 85 },
//     { name: "MongoDB", icon: "🍃", level: 80 },
//     { name: "Python", icon: "🐍", level: 85 },
//     { name: "Machine Learning", icon: "🧠", level: 75 },
//     { name: "Tailwind CSS", icon: "🎨", level: 90 },
//     { name: "Three.js", icon: "🌐", level: 70 },
//   ];

//   // Experience details with dates and descriptions
//   const experiences = [
//     {
//       title: "IT Intern",
//       company: "CUTS Institute for Regulation & Competition (CIRC)",
//       period: "Jun 2023 - Aug 2023",
//       description:
//         "Developed Coal Mines Manager System with Shift Handover feature, improving operational efficiency by 35%.",
//     },
//     {
//       title: "Full Stack Developer",
//       company: "AI-Powered Parking Management System",
//       period: "Jan 2023 - May 2023",
//       description:
//         "Built an intelligent parking system utilizing computer vision and React.js frontend with Node.js backend, reducing wait times by 45%.",
//     },
//   ];

//   // Education details
//   const education = [
//     {
//       degree: "B.Tech in Computer Science",
//       institution: "Your University",
//       period: "2020 - 2024",
//       gpa: "8.7/10",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="  px-4 py-25 w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900  "
//     >
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-8">
//         {/* Profile Image with animated border */}
//         <motion.div
//           className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 300 }}
//         >
//           <img
//             src={assets.avatar || "https://via.placeholder.com/300"}
//             alt="Vikram Ranjan"
//             className="w-full h-full object-cover"
//           />
//         </motion.div>

//         {/* Introduction */}
//         <div className="md:w-1/2">
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold mb-4 text-gray-300 relative"
//             initial={{ x: -50 }}
//             animate={{ x: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             Hi, I'm{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Vikram Ranjan
//             </span>
//             {/* <div className="absolute -bottom-2 left-0 w-24 h-1 bg-blue-600"></div> */}
//           </motion.h1>

//           <motion.p
//             className="text-lg text-gray-400 mb-6 leading-relaxed"
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.7 }}
//           >
//             A passionate <strong>MERN Stack Developer</strong> with a keen
//             interest in <strong>AI & Data Science</strong>. I love building{" "}
//             <strong>dynamic web applications</strong> and integrating{" "}
//             <strong>machine learning models</strong> into real-world projects.
//           </motion.p>

//           {/* Social Links */}
//           <div className="flex space-x-4">
//             <motion.a
//               href="https://github.com/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 hover:text-blue-600 transition-colors"
//               whileHover={{ scale: 1.2 }}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             </motion.a>
//             <motion.a
//               href="https://linkedin.com/in/yourusername"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-700 hover:text-blue-600 transition-colors"
//               whileHover={{ scale: 1.2 }}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//                 aria-hidden="true"
//               >
//                 <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
//               </svg>
//             </motion.a>
//             <motion.a
//               href="mailto:youremail@example.com"
//               className="text-gray-700 hover:text-blue-600 transition-colors"
//               whileHover={{ scale: 1.2 }}
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 ></path>
//               </svg>
//             </motion.a>
//           </div>
//         </div>
//       </div>

//       {/* Tabs Navigation */}
//       <div className="flex justify-center mb-8">
//         <div className="inline-flex rounded-md shadow-sm" role="group">
//           <button
//             type="button"
//             className={`px-6 py-3 text-sm font-medium border ${
//               activeTab === "skills"
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-50"
//             } focus:z-10 focus:ring-2 focus:ring-blue-500 rounded-l-lg`}
//             onClick={() => setActiveTab("skills")}
//           >
//             Skills
//           </button>
//           <button
//             type="button"
//             className={`px-6 py-3 text-sm font-medium border-t border-b ${
//               activeTab === "experience"
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-50"
//             } focus:z-10 focus:ring-2 focus:ring-blue-500`}
//             onClick={() => setActiveTab("experience")}
//           >
//             Experience
//           </button>
//           <button
//             type="button"
//             className={`px-6 py-3 text-sm font-medium border ${
//               activeTab === "education"
//                 ? "bg-blue-600 text-white"
//                 : "bg-white text-gray-700 hover:bg-gray-50"
//             } focus:z-10 focus:ring-2 focus:ring-blue-500 rounded-r-lg`}
//             onClick={() => setActiveTab("education")}
//           >
//             Education
//           </button>
//         </div>
//       </div>

//       {/* Skills Section */}
//       {activeTab === "skills" && (
//         <motion.div
//           className="bg-grey-950 rounded-lg shadow-lg p-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-bold mb-6 text-gray-100">
//             Technical Skills
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {skills.map((skill, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-gray-900 p-4 rounded-lg text-gray-100 "
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//               >
//                 <div className="flex items-center mb-2">
//                   <span className="text-2xl mr-2">{skill.icon}</span>
//                   <h3 className="text-lg font-semibold">{skill.name}</h3>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-blue-600 h-2.5 rounded-full"
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       {/* Experience Section */}
//       {activeTab === "experience" && (
//         <motion.div
//           className="bg-gray-900  text-gray-100 rounded-lg shadow-lg p-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-bold mb-6 text-gray-200">
//             Work Experience
//           </h2>
//           <div className="space-y-8">
//             {experiences.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600 before:rounded-full"
//                 initial={{ x: -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: index * 0.2, duration: 0.5 }}
//               >
//                 <h3 className="text-xl font-bold text-gray-100">{exp.title}</h3>
//                 <div className="flex items-center text-gray-50 mb-2">
//                   <span>{exp.company}</span>
//                   <span className="mx-2">•</span>
//                   <span className="text-sm">{exp.period}</span>
//                 </div>
//                 <p className="text-gray-100">{exp.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       )}

//       {/* Education Section */}
//       {activeTab === "education" && (
//         <motion.div
//           className="bg-gray-900  text-gray-100  rounded-lg shadow-lg p-8"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h2 className="text-2xl font-bold mb-6 text-gray-200">Education</h2>
//           <div className="space-y-6">
//             {education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 className="border-l-4 border-blue-600 pl-4"
//                 initial={{ x: -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.2, duration: 0.5 }}
//               >
//                 <h3 className="text-xl font-bold text-gray-100">
//                   {edu.degree}
//                 </h3>
//                 <div className="flex items-center text-gray-100 mb-1">
//                   <span>{edu.institution}</span>
//                   <span className="mx-2">•</span>
//                   <span className="text-sm">{edu.period}</span>
//                 </div>
//                 <p className="text-gray-100">GPA: {edu.gpa}</p>
//               </motion.div>
//             ))}
//           </div>

//           {/* Certifications */}
//           <div className="mt-8">
//             <h3 className="text-xl font-bold mb-4 text-gray-200">
//               Certifications
//             </h3>
//             <ul className="space-y-2 list-disc list-inside text-gray-100">
//               <li>AWS Certified Developer Associate</li>
//               <li>MongoDB Database Administrator</li>
//               <li>Google Professional Machine Learning Engineer</li>
//             </ul>
//           </div>
//         </motion.div>
//       )}

//       {/* Contact Section */}
//       <motion.div
//         className="mt-12 text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//       >
//         <h2 className="text-2xl font-bold mb-4 text-grey-100 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//           Let's Connect
//         </h2>
//         <p className="text-gray-300 mb-6 max-w-lg mx-auto">
//           I'm always open to discussing new projects, creative ideas or
//           opportunities to be part of your vision.
//         </p>
//         <motion.button
//           className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg flex items-center mx-auto"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <svg
//             className="w-5 h-5 mr-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//             ></path>
//           </svg>
//           Contact Me
//         </motion.button>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default About;

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  // Skills with icons and proficiency levels
  const skills = [
    { name: "React.js", icon: "💻", level: 90 },
    { name: "Node.js", icon: "🚀", level: 85 },
    { name: "Express.js", icon: "⚡", level: 85 },
    { name: "MongoDB", icon: "🍃", level: 80 },
    { name: "Python", icon: "🐍", level: 85 },
    { name: "Machine Learning", icon: "🧠", level: 75 },
    { name: "Tailwind CSS", icon: "🎨", level: 90 },
    { name: "Three.js", icon: "🌐", level: 70 },
  ];

  // Experience details with dates and descriptions
  const experiences = [
    {
      title: "IT Intern",
      company: "CUTS Institute for Regulation & Competition (CIRC)",
      period: "Jun 2023 - Aug 2023",
      description:
        "Developed Coal Mines Manager System with Shift Handover feature, improving operational efficiency by 35%.",
    },
    {
      title: "Full Stack Developer",
      company: "AI-Powered Parking Management System",
      period: "Jan 2023 - May 2023",
      description:
        "Built an intelligent parking system utilizing computer vision and React.js frontend with Node.js backend, reducing wait times by 45%.",
    },
  ];

  // Education details
  const education = [
    {
      degree: "B.Tech in Computer Science",
      institution: "Your University",
      period: "2020 - 2024",
      gpa: "8.7/10",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 sm:px-6 py-12 sm:py-20 w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900"
    >
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mb-8 md:mb-10 gap-6 md:gap-8 pt-25">
        {/* Profile Image with animated border */}
        <motion.div
          className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img
            src={assets.avatar}
            alt="Vikram Ranjan"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Introduction */}
        <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-300 relative"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Vikram Ranjan
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-400 mb-4 md:mb-6 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            A passionate <strong>MERN Stack Developer</strong> with a keen
            interest in <strong>AI & Data Science</strong>. I love building{" "}
            <strong>dynamic web applications</strong> and integrating{" "}
            <strong>machine learning models</strong> into real-world projects.
          </motion.p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </motion.a>
            <motion.a
              href="mailto:youremail@example.com"
              className="text-gray-400 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex justify-center mb-6 sm:mb-8 overflow-x-auto">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium border ${
              activeTab === "skills"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } focus:z-10 focus:ring-2 focus:ring-blue-500 rounded-l-lg`}
            onClick={() => setActiveTab("skills")}
          >
            Skills
          </button>
          <button
            type="button"
            className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium border-t border-b ${
              activeTab === "experience"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } focus:z-10 focus:ring-2 focus:ring-blue-500`}
            onClick={() => setActiveTab("experience")}
          >
            Experience
          </button>
          <button
            type="button"
            className={`px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium border ${
              activeTab === "education"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            } focus:z-10 focus:ring-2 focus:ring-blue-500 rounded-r-lg`}
            onClick={() => setActiveTab("education")}
          >
            Education
          </button>
        </div>
      </div>

      {/* Skills Section */}
      {activeTab === "skills" && (
        <motion.div
          className="bg-grey-950 rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 p-3 sm:p-4 rounded-lg text-gray-100"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex items-center mb-2">
                  <span className="text-xl sm:text-2xl mr-2">{skill.icon}</span>
                  <h3 className="text-base sm:text-lg font-semibold">
                    {skill.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
                  <div
                    className="bg-blue-600 h-2 sm:h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Experience Section */}
      {activeTab === "experience" && (
        <motion.div
          className="bg-gray-900 text-gray-100 rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-200">
            Work Experience
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-6 sm:pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600 before:rounded-full"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-100">
                  {exp.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-50 mb-2">
                  <span>{exp.company}</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span className="text-xs sm:text-sm">{exp.period}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-100">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Education Section */}
      {activeTab === "education" && (
        <motion.div
          className="bg-gray-900 text-gray-100 rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-200">
            Education
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-blue-600 pl-3 sm:pl-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-100">
                  {edu.degree}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-gray-100 mb-1">
                  <span>{edu.institution}</span>
                  <span className="hidden sm:inline mx-2">•</span>
                  <span className="text-xs sm:text-sm">{edu.period}</span>
                </div>
                <p className="text-sm sm:text-base text-gray-100">
                  GPA: {edu.gpa}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-200">
              Certifications
            </h3>
            <ul className="space-y-1 sm:space-y-2 list-disc list-inside text-sm sm:text-base text-gray-100">
              <li>AWS Certified Developer Associate</li>
              <li>MongoDB Database Administrator</li>
              <li>Google Professional Machine Learning Engineer</li>
            </ul>
          </div>
        </motion.div>
      )}

      {/* Contact Section */}
      <motion.div
        className="mt-8 sm:mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-grey-100 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 max-w-lg mx-auto">
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <motion.button
          className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:bg-blue-700 transition-colors shadow-lg flex items-center mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
          Contact Me
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default About;
