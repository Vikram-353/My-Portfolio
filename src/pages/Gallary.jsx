// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { assets,galleryItems } from "../assets/assets";

// // Enhanced data structure with categories and more metadata

// const GalleryItem = ({ item, onClick }) => {
//   const cardRef = useRef(null);

//   useEffect(() => {
//     const card = cardRef.current;
//     const handleMouseMove = (e) => {
//       const { left, top, width, height } = card.getBoundingClientRect();
//       const x = (e.clientX - left) / width - 0.5;
//       const y = (e.clientY - top) / height - 0.5;

//       gsap.to(card, {
//         rotationY: x * 15,
//         rotationX: -y * 15,
//         duration: 0.5,
//         ease: "power1.out",
//       });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5 });
//     };

//     card.addEventListener("mousemove", handleMouseMove);
//     card.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       card.removeEventListener("mousemove", handleMouseMove);
//       card.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   // Category badge colors
//   const categoryStyles = {
//     hackathon: "bg-purple-600",
//     certificate: "bg-green-600",
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg perspective-1000 cursor-pointer "
//       style={{
//         transformStyle: "preserve-3d",
//         transition: "transform 0.3s ease-out",
//       }}
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.5 }}
//       onClick={() => onClick(item)}
//       whileHover={{ scale: 1.03 }}
//     >
//       <div
//         className={`absolute top-2 right-2 ${
//           categoryStyles[item.category]
//         } text-white text-xs font-bold py-1 px-2 rounded-full z-10`}
//       >
//         {item.category === "hackathon" ? "Hackathon" : "Certificate"}
//       </div>

//       <img src={item.src} alt={item.alt} className="w-full h-64 object-cover" />

//       <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 p-4 text-center">
//         <h3 className="text-white text-xl font-bold mb-2">{item.alt}</h3>
//         <p className="text-gray-200 text-sm mb-1">{item.date}</p>
//         <p className="text-white text-sm">{item.description}</p>
//       </div>
//     </motion.div>
//   );
// };

// const Modal = ({ item, onClose }) => {
//   if (!item) return null;

//   return (
//     <motion.div
//       className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//     >
//       <motion.div
//         className="bg-gray-800 rounded-lg overflow-hidden max-w-2xl w-full"
//         initial={{ scale: 0.8, y: 20 }}
//         animate={{ scale: 1, y: 0 }}
//         exit={{ scale: 0.8, y: 20 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <img
//           src={item.src}
//           alt={item.alt}
//           className="w-full h-80 object-cover"
//         />
//         <div className="p-6">
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h3 className="text-2xl font-bold text-white">{item.alt}</h3>
//               <p className="text-gray-400">{item.date}</p>
//             </div>
//             <span
//               className={`${
//                 item.category === "hackathon" ? "bg-purple-600" : "bg-green-600"
//               } text-white px-3 py-1 rounded-full text-sm`}
//             >
//               {item.category === "hackathon" ? "Hackathon" : "Certificate"}
//             </span>
//           </div>

//           <p className="text-gray-300 mb-4">{item.description}</p>

//           {item.category === "hackathon" && (
//             <div className="mb-4">
//               <p className="text-gray-400 text-sm mb-2">Location</p>
//               <p className="text-white">{item.location}</p>
//             </div>
//           )}

//           {item.category === "certificate" && (
//             <div className="mb-4">
//               <p className="text-gray-400 text-sm mb-2">Issuing Organization</p>
//               <p className="text-white">{item.issuer}</p>
//             </div>
//           )}

//           <button
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
//             onClick={onClose}
//           >
//             Close
//           </button>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// function Gallery() {
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter items based on category and search term
//   const filteredItems = galleryItems.filter((item) => {
//     const matchesCategory =
//       selectedCategory === "all" || item.category === selectedCategory;
//     const matchesSearch =
//       item.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <section className="min-h-screen bg-gray-900 py-25 px-6">
//       <div className="container mx-auto">
//         <motion.div
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//             My Achievements
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             A collection of my hackathon experiences and certifications in the
//             field of technology
//           </p>
//         </motion.div>

//         <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
//           <div className="flex gap-2 flex-wrap">
//             <button
//               className={`py-2 px-4 rounded-full transition ${
//                 selectedCategory === "all"
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//               }`}
//               onClick={() => setSelectedCategory("all")}
//             >
//               All
//             </button>
//             <button
//               className={`py-2 px-4 rounded-full transition ${
//                 selectedCategory === "hackathon"
//                   ? "bg-purple-600 text-white"
//                   : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//               }`}
//               onClick={() => setSelectedCategory("hackathon")}
//             >
//               Hackathons
//             </button>
//             <button
//               className={`py-2 px-4 rounded-full transition ${
//                 selectedCategory === "certificate"
//                   ? "bg-green-600 text-white"
//                   : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//               }`}
//               onClick={() => setSelectedCategory("certificate")}
//             >
//               Certificates
//             </button>
//           </div>

//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search achievements..."
//               className="bg-gray-800 text-white py-2 px-4 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <svg
//               className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               ></path>
//             </svg>
//           </div>
//         </div>

//         {filteredItems.length > 0 ? (
//           <motion.div
//             className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-"
//             layout
//           >
//             {filteredItems.map((item) => (
//               <GalleryItem
//                 key={item.id}
//                 item={item}
//                 onClick={setSelectedItem}
//               />
//             ))}
//           </motion.div>
//         ) : (
//           <div className="text-center py-16">
//             <p className="text-gray-400 text-lg">
//               No achievements found matching your criteria.
//             </p>
//           </div>
//         )}

//         {selectedItem && (
//           <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
//         )}
//       </div>
//     </section>
//   );
// }

// export default Gallery;

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { assets, galleryItems } from "../assets/assets";

const GalleryItem = ({ item, onClick }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(card, {
        rotationY: x * 15,
        rotationX: -y * 15,
        duration: 0.5,
        ease: "power1.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, { rotationY: 0, rotationX: 0, duration: 0.5 });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Category badge colors
  const categoryStyles = {
    hackathon: "bg-purple-600",
    certificate: "bg-green-600",
    presentation: "bg-blue-600", // New category
  };

  const categoryLabels = {
    hackathon: "Hackathon",
    certificate: "Certificate",
    presentation: "Presentation",
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg perspective-1000 cursor-pointer h-full"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onClick={() => onClick(item)}
      whileHover={{ scale: 1.03 }}
    >
      <div
        className={`absolute top-2 right-2 ${
          categoryStyles[item.category]
        } text-white text-xs font-bold py-1 px-2 rounded-full z-10`}
      >
        {categoryLabels[item.category]}
      </div>

      {/* Improved responsive image sizing */}
      <div className="aspect-w-16 aspect-h-9 w-full">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-auto max-h-[500px] md:max-h-[300px] object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 p-4 text-center">
        <h3 className="text-white text-xl font-bold mb-2">{item.alt}</h3>
        <p className="text-gray-200 text-sm mb-1">{item.date}</p>
        <p className="text-white text-sm line-clamp-3">{item.description}</p>
      </div>
    </motion.div>
  );
};

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  // Category-specific content
  const renderCategorySpecificContent = () => {
    switch (item.category) {
      case "hackathon":
        return (
          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-2">Location</p>
            <p className="text-white">{item.location}</p>
          </div>
        );
      case "certificate":
        return (
          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-2">Issuing Organization</p>
            <p className="text-white">{item.issuer}</p>
          </div>
        );
      case "presentation":
        return (
          <div className="mb-4">
            <p className="text-gray-400 text-sm mb-2">Venue</p>
            <p className="text-white">{item.venue}</p>
            {item.slidesLink && (
              <a
                href={item.slidesLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-500 hover:text-blue-400"
              >
                View Slides
              </a>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  const categoryColors = {
    hackathon: "bg-purple-600",
    certificate: "bg-green-600",
    presentation: "bg-blue-600",
  };

  const categoryLabels = {
    hackathon: "Hackathon",
    certificate: "Certificate",
    presentation: "Presentation",
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-800 rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <img
          src={item.src}
          alt={item.alt}
          className="w-full h-120 md:h-50 object-cover object-center"
        /> */}

        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-auto max-h-[500px] md:max-h-[300px] object-cover object-center"
        />

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white">{item.alt}</h3>
              <p className="text-gray-400">{item.date}</p>
            </div>
            <span
              className={`${
                categoryColors[item.category]
              } text-white px-3 py-1 rounded-full text-sm`}
            >
              {categoryLabels[item.category]}
            </span>
          </div>

          <p className="text-gray-300 mb-4">{item.description}</p>

          {renderCategorySpecificContent()}

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter items based on category and search term
  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      item.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of my hackathon experiences, certifications, and
            presentations in the field of technology
          </p>
        </motion.div>

        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-2 flex-wrap">
            <button
              className={`py-2 px-4 rounded-full transition ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            <button
              className={`py-2 px-4 rounded-full transition ${
                selectedCategory === "hackathon"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setSelectedCategory("hackathon")}
            >
              Hackathons
            </button>
            <button
              className={`py-2 px-4 rounded-full transition ${
                selectedCategory === "certificate"
                  ? "bg-green-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setSelectedCategory("certificate")}
            >
              Certificates
            </button>
            <button
              className={`py-2 px-4 rounded-full transition ${
                selectedCategory === "presentation"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              onClick={() => setSelectedCategory("presentation")}
            >
              Presentations
            </button>
          </div>

          <div className="relative mt-4 md:mt-0">
            <input
              type="text"
              placeholder="Search achievements..."
              className="bg-gray-800 text-white py-2 px-4 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        {filteredItems.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            {filteredItems.map((item) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={setSelectedItem}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">
              No achievements found matching your criteria.
            </p>
          </div>
        )}

        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>
    </section>
  );
}

export default Gallery;
