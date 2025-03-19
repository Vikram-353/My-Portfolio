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

import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  TorusKnot,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10">
        {/* Left Side - Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm <span className="text-blue-500">Vikram Ranjan</span>
          </motion.h1>
          <motion.p
            className="mt-4 text-gray-400 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Front-End Developer | AI & ML Enthusiast
          </motion.p>
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <Link
              to="/projects"
              className="bg-blue-600 px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition duration-300"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="border border-blue-500 px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition duration-300"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Side - 3D Animation */}
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.6} />
            <directionalLight position={[3, 5, 2]} intensity={1} />
            <TorusKnot args={[1, 0.3, 128, 32]} scale={2}>
              <MeshWobbleMaterial
                color="#ff8c00"
                attach="material"
                factor={0.6} // Intensity of wobble
                speed={2} // Speed of the animation
              />
            </TorusKnot>
          </Canvas>
        </div>
      </section>

      {/* About Section */}
      <section className="text-center px-8 md:px-20 py-10 bg-gray-800">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 text-gray-400 text-lg max-w-3xl mx-auto">
          Passionate about creating dynamic and intelligent web applications.
          Skilled in React.js, AI, and data science, I love blending technology
          and creativity.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-8 md:px-20 py-10">
        <h2 className="text-3xl font-bold text-center">My Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3].map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-4 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">Project {project}</h3>
              <p className="text-gray-400 mt-2">
                Brief description of the project.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center px-8 md:px-20 py-10">
        <h2 className="text-3xl font-bold">Let's Connect</h2>
        <p className="mt-4 text-gray-400 text-lg">Reach out to collaborate!</p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            to="/contact"
            className="bg-blue-600 px-6 py-2 rounded-lg text-lg hover:bg-blue-500 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
