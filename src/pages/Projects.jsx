import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { assets } from "../assets/assets.js";

const projects = [
  {
    id: 1,
    title: "Smart Parking System",
    description:
      "An AI-powered system for real-time parking space detection using YOLOv8.",
    image: assets.profile_pic, // Replace with actual image path
    link: "#",
  },
  {
    id: 2,
    title: "Coal Mines Manager",
    description:
      "A shift handover system with real-time reports, safety checks, and employee tracking.",
    image: assets.profile_pic, // Replace with actual image path
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A 3D interactive portfolio showcasing my skills and projects.",
    image: assets.profile_pic, // Replace with actual image path
    link: "#",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function Projects() {
  return (
    <section className="min-h-screen bg-gray-900 py-16 px-6">
      <motion.div
        initial="hidden"
        animate="visible"
        className="container mx-auto text-center"
      >
        <h2 className="text-5xl font-bold text-white mb-12">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.4}
                glareColor="#ffffff"
                glarePosition="bottom"
                scale={1.05}
              >
                <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mt-2">{project.description}</p>
                    <a
                      href={project.link}
                      className="inline-block mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg hover:scale-110 transition-transform"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
