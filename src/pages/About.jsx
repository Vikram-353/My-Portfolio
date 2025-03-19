import React from "react";
import { assets } from "../assets/assets";

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          About Me
        </h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={assets.profile_pic}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
          />
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg text-center leading-relaxed">
          Hi, I'm{" "}
          <span className="text-blue-400 font-semibold">Vikram Ranjan</span>, a
          passionate <b>MERN Stack Developer </b> with a keen interest in AI &
          Data Science. I love building <b>dynamic web applications</b> and
          integrating <b>machine learning models</b> into real-world projects.
        </p>

        {/* Skills Section */}
        <div className="mt-6">
          <h3 className="text-2xl text-white font-semibold mb-3">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Python",
              "Machine Learning",
              "Tailwind CSS",
              "Three.js",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-6">
          <h3 className="text-2xl text-white font-semibold mb-3">Experience</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              🚀 IT Intern at CUTS Institute for Regulation & Competition (CIRC)
            </li>
            <li>🔹 Developed Coal Mines Manager System with Shift Handover</li>
            <li>🧠 Built an AI-Powered Parking Management System</li>
          </ul>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center mt-6">
          <a
            href="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
