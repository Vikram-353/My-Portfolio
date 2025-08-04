import React, { useState, useEffect } from "react";
import { color, motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import {
  Code,
  Database,
  Server,
  Cpu,
  Brain,
  PenTool,
  Layers,
  Terminal,
  Zap,
  Hexagon,
} from "lucide-react";
function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      category: "Frontend", 
      color: "bg-blue-500",
      icon: Code,
      skills: [
        { name: "React.js", icon: Code },
        { name: "Tailwind CSS", icon: PenTool },
        { name: "JavaScript", icon: Terminal },
      ],
    },
    {
      category: "Backend",
      color: "bg-green-500",
      icon: Server,
      skills: [
        { name: "Node.js", icon: Layers },
        { name: "Express.js", icon: Server },
        { name: "Python", icon: Cpu },
      ],
    },
    {
      category: "Database",
      color: "bg-purple-500",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "MySQL", icon: Zap },
      ],
    },
    {
      category: "Advanced",
      color: "bg-red-500",
      icon: Brain,
      skills: [
        { name: "Machine Learning", icon: Brain },
        { name: "Data Structures", icon: Hexagon },
      ],
    },
  ];

  // Experience details with dates and descriptions
  const experiences = [
    {
      title: "IT Intern",
      company: "CUTS Institute for Regulation & Competition (CIRC)",
      period: "Jun 2024 - Aug 2024",
      description: (
        <>
          Developed{" "}
          <a
            className="text-blue-600"
            href="https://www.circ.in/circ_ids.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            IDS Calculator
          </a>{" "}
          and{" "}
          <a
            className="text-blue-600"
            href="https://www.circ.in/circ_ssde.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            SSDE
          </a>
          , during internship period.
        </>
      ),
    },
    {
      title: "Data Science",
      company: "Celebal Technologies",
      period: "Jun 2025 - Aug 2025",
      description:
        "During my internship, I gained hands-on experience in Python programming, data science, feature engineering, and regression analysis. I also explored clustering techniques, SQL basics, and the fundamentals of Generative AI (GenAI) through practical projects and weekly modules.",
    },
  ];

  // Education details
  const education = [
    {
      degree: "B.Tech in Artificial Intelliegence and Data Science",
      institution: "Vivekananda Institute of Professional Studies",
      period: "2022 - 2026",
      gpa: "8.98/10",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
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
            src={assets.profile_pic}
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
              href="https://github.com/Vikram-353"
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
              href="https://linkedin.com/in/vikram-ranjan890"
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
              href="mailto:vikramranjan71122@gmail.com"
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
            className={`px-3 sm:px-6 py-2 sm:py-3 text-xs hover:cursor-pointer sm:text-sm font-medium border ${
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
            className={`px-3 sm:px-6 py-2 sm:py-3 text-xs  hover:cursor-pointer sm:text-sm font-medium border-t border-b ${
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
            className={`px-3 sm:px-6 py-2 sm:py-3 text-xs  hover:cursor-pointer sm:text-sm font-medium border ${
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

      {activeTab === "skills" && (
        <motion.div
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-100 text-center flex items-center justify-center">
            <Zap className="mr-4 text-blue-500" size={40} />
            My Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={catIndex}
                  className="bg-gray-800 cursor-pointer rounded-xl p-6 shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                  }}
                >
                  <div className="flex items-center mb-4">
                    <CategoryIcon
                      className={`mr-3 ${category.color}`}
                      size={32}
                    />
                    <h3 className="text-xl font-semibold text-gray-200">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;
                      return (
                        <motion.div
                          key={skillIndex}
                          className="flex items-center space-x-3 p-2 rounded-lg transition-all duration-100"
                          whileHover={{
                            x: 10,
                            backgroundColor: "rgba(255,255,255,0.1)",
                          }}
                          onHoverStart={() => setHoveredSkill(skill)}
                          onHoverEnd={() => setHoveredSkill(null)}
                        >
                          <SkillIcon className="text-gray-400" size={24} />
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}

      {activeTab === "experience" && (
        <motion.div
          className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-400">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-6 sm:pl-8 border-l-4 border-blue-600"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="ml-2">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {exp.title}
                  </h3>
                  <div className="text-sm text-gray-400 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                    <span>{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {activeTab === "education" && (
        <motion.div
          className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-blue-400">
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-blue-600 pl-5"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <div className="text-sm text-gray-400 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1">
                  <span>{edu.institution}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{edu.period}</span>
                </div>
                <p className="text-base text-gray-300 mb-1">GPA: {edu.gpa}</p>
                <a
                  href="https://www.ipuranklist.com/student/09917711922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 underline transition duration-300"
                >
                  View complete scorecard.
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Certifications
            </h3>
            <ul className="list-disc list-inside text-base text-gray-300 space-y-2">
              <li>Certified in Machine Learning by Udemy.</li>
              <li>
                CDAC certificate for Foundation of Data Science and Big Data.
              </li>
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
          <Link to="/contact">Contact Me</Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default About;
