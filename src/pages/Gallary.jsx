// import React, { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { assets, galleryItems } from "../assets/assets";

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
//     presentation: "bg-blue-600", // New category
//   };

//   const categoryLabels = {
//     hackathon: "Hackathon",
//     certificate: "Certificate",
//     presentation: "Presentation",
//   };

//   return (
//     <motion.div
//       ref={cardRef}
//       className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg perspective-1000 cursor-pointer h-full"
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
//         {categoryLabels[item.category]}
//       </div>

//       {/* Improved responsive image sizing */}
//       <div className="aspect-w-16 aspect-h-9 w-full">
//         <img
//           src={item.src}
//           alt={item.alt}
//           className="w-full h-auto max-h-[500px] md:max-h-[300px] object-cover object-center"
//         />
//       </div>

//       <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition duration-300 p-4 text-center">
//         <h3 className="text-white text-xl font-bold mb-2">{item.alt}</h3>
//         <p className="text-gray-200 text-sm mb-1">{item.date}</p>
//         <p className="text-white text-sm line-clamp-3">{item.description}</p>
//       </div>
//     </motion.div>
//   );
// };

// const Modal = ({ item, onClose }) => {
//   if (!item) return null;

//   // Category-specific content
//   const renderCategorySpecificContent = () => {
//     switch (item.category) {
//       case "hackathon":
//         return (
//           <div className="mb-4">
//             <p className="text-gray-400 text-sm mb-2">Location</p>
//             <p className="text-white">{item.location}</p>
//           </div>
//         );
//       case "certificate":
//         return (
//           <div className="mb-4">
//             <p className="text-gray-400 text-sm mb-2">Issuing Organization</p>
//             <p className="text-white">{item.issuer}</p>
//           </div>
//         );
//       case "presentation":
//         return (
//           <div className="mb-4">
//             <p className="text-gray-400 text-sm mb-2">Venue</p>
//             <p className="text-white">{item.venue}</p>
//             {item.slidesLink && (
//               <a
//                 href={item.slidesLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block mt-2 text-blue-500 hover:text-blue-400"
//               >
//                 View Slides
//               </a>
//             )}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   const categoryColors = {
//     hackathon: "bg-purple-600",
//     certificate: "bg-green-600",
//     presentation: "bg-blue-600",
//   };

//   const categoryLabels = {
//     hackathon: "Hackathon",
//     certificate: "Certificate",
//     presentation: "Presentation",
//   };

//   return (
//     <motion.div
//       className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       onClick={onClose}
//     >
//       <motion.div
//         className="bg-gray-800 rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
//         initial={{ scale: 0.8, y: 20 }}
//         animate={{ scale: 1, y: 0 }}
//         exit={{ scale: 0.8, y: 20 }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* <img
//           src={item.src}
//           alt={item.alt}
//           className="w-full h-120 md:h-50 object-cover object-center"
//         /> */}

//         <img
//           src={item.src}
//           alt={item.alt}
//           className="w-full h-auto max-h-[500px] md:max-h-[300px] object-cover object-center"
//         />

//         <div className="p-6">
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h3 className="text-2xl font-bold text-white">{item.alt}</h3>
//               <p className="text-gray-400">{item.date}</p>
//             </div>
//             <span
//               className={`${
//                 categoryColors[item.category]
//               } text-white px-3 py-1 rounded-full text-sm`}
//             >
//               {categoryLabels[item.category]}
//             </span>
//           </div>

//           <p className="text-gray-300 mb-4">{item.description}</p>

//           {renderCategorySpecificContent()}

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
//     <section className="min-h-screen bg-gray-900 py-16 px-4 sm:px-6">
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
//             A collection of my hackathon experiences, certifications, and
//             presentations in the field of technology
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
//             <button
//               className={`py-2 px-4 rounded-full transition ${
//                 selectedCategory === "presentation"
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//               }`}
//               onClick={() => setSelectedCategory("presentation")}
//             >
//               Presentations
//             </button>
//           </div>

//           <div className="relative mt-4 md:mt-0">
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
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { galleryItems } from "../assets/assets.js";

// Custom hook for intersection observer animations
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
};

const CategoryBadge = ({ category }) => {
  const categoryStyles = {
    hackathon: "bg-gradient-to-r from-purple-600 to-purple-800",
    certificate: "bg-gradient-to-r from-green-600 to-green-800",
    presentation: "bg-gradient-to-r from-blue-600 to-blue-800",
  };

  const categoryLabels = {
    hackathon: "Hackathon",
    certificate: "Certificate",
    presentation: "Presentation",
  };

  return (
    <span
      className={`${categoryStyles[category]} text-white text-xs font-bold py-1 px-3 rounded-full z-10 shadow-lg`}
    >
      {categoryLabels[category]}
    </span>
  );
};

const GalleryItem = ({ item, onClick, index }) => {
  const cardRef = useRef(null);
  const { ref: inViewRef, isInView } = useInView({ threshold: 0.1 });

  // Create a callback ref that sets both refs
  const setRefs = (element) => {
    // Set both refs to the same element
    cardRef.current = element;
    if (inViewRef) {
      inViewRef.current = element;
    }
  };

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(card, {
        rotationY: x * 12,
        rotationX: -y * 12,
        scale: 1.03,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotationY: 0,
        rotationX: 0,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.7)",
      });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={setRefs}
      className="relative bg-gray-800/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group h-full"
      style={{
        transformStyle: "preserve-3d",
        transformOrigin: "center center",
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      onClick={() => onClick(item)}
      whileHover={{ borderColor: "#3b82f6" }}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <div className="absolute top-3 right-3 z-10">
          <CategoryBadge category={item.category} />
        </div>

        <div className="w-full aspect-video overflow-hidden">
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover object-center transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
          {item.alt}
        </h3>
        <p className="text-gray-400 text-sm mb-2">{item.date}</p>
        <p className="text-gray-300 text-sm line-clamp-2 mb-3">
          {item.description}
        </p>

        <button className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium group">
          View details
          <svg
            className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

const Modal = ({ item, onClose }) => {
  if (!item) return null;

  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  // Category-specific content renderer
  const renderCategorySpecificContent = () => {
    switch (item.category) {
      case "hackathon":
        return (
          <div className="mb-6 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg">
            <h4 className="text-white text-lg font-medium mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Location
            </h4>
            <p className="text-gray-300">{item.location}</p>
          </div>
        );
      case "certificate":
        return (
          <div className="mb-6 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg">
            <h4 className="text-white text-lg font-medium mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                ></path>
              </svg>
              Issuing Organization
            </h4>
            <p className="text-gray-300">{item.issuer}</p>
          </div>
        );
      case "presentation":
        return (
          <div className="mb-6 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg">
            <h4 className="text-white text-lg font-medium mb-3 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                ></path>
              </svg>
              Venue
            </h4>
            <p className="text-gray-300">{item.venue}</p>
            {item.slidesLink && (
              <a
                href={item.slidesLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-3 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  ></path>
                </svg>
                View Slides
              </a>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          ref={modalRef}
          className="bg-gray-900 rounded-2xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700"
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            {/* Close button positioned absolutely in the top right */}
            <button
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <div className="relative">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6">
                <CategoryBadge category={item.category} />
                <h2 className="text-3xl font-bold text-white mt-3">
                  {item.alt}
                </h2>
                <p className="text-gray-300 mt-1">{item.date}</p>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  About this achievement
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {renderCategorySpecificContent()}

              <div className="pt-4 border-t border-gray-700">
                <button
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg transition-all font-medium flex items-center justify-center"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { ref: headerRef, isInView: headerInView } = useInView({
    threshold: 0.1,
  });

  // Filter items based on category and search term
  const filteredItems = galleryItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      item.alt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 sm:px-6 relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-32 w-64 h-64 bg-purple-500 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-900/50 text-blue-400 text-sm font-medium mb-4">
            Portfolio Showcase
          </span>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-800 bg-clip-text text-transparent">
            My Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated collection of my hackathon experiences, certifications,
            and presentations in the field of technology
          </p>
        </motion.div>

        <div className="mb-10 flex flex-col md:flex-row justify-between gap-4">
          {/* Filter Pills */}
          <motion.div
            className="flex gap-2 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <button
              className={`group py-2 px-5 rounded-full transition-all duration-300 ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg shadow-blue-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory("all")}
            >
              <span className="flex items-center">
                <svg
                  className={`w-4 h-4 mr-2 ${
                    selectedCategory === "all"
                      ? "text-blue-300"
                      : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
                All
              </span>
            </button>
            <button
              className={`group py-2 px-5 rounded-full transition-all duration-300 ${
                selectedCategory === "hackathon"
                  ? "bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg shadow-purple-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory("hackathon")}
            >
              <span className="flex items-center">
                <svg
                  className={`w-4 h-4 mr-2 ${
                    selectedCategory === "hackathon"
                      ? "text-purple-300"
                      : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                Hackathons
              </span>
            </button>
            <button
              className={`group py-2 px-5 rounded-full transition-all duration-300 ${
                selectedCategory === "certificate"
                  ? "bg-gradient-to-r from-green-600 to-green-800 text-white shadow-lg shadow-green-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory("certificate")}
            >
              <span className="flex items-center">
                <svg
                  className={`w-4 h-4 mr-2 ${
                    selectedCategory === "certificate"
                      ? "text-green-300"
                      : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                Certificates
              </span>
            </button>
            <button
              className={`group py-2 px-5 rounded-full transition-all duration-300 ${
                selectedCategory === "presentation"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-800 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
              onClick={() => setSelectedCategory("presentation")}
            >
              <span className="flex items-center">
                <svg
                  className={`w-4 h-4 mr-2 ${
                    selectedCategory === "presentation"
                      ? "text-indigo-300"
                      : "text-gray-400"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  ></path>
                </svg>
                Presentations
              </span>
            </button>
          </motion.div>

          {/* Search Box */}
          <motion.div
            className="relative mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search achievements..."
                className="bg-gray-800 text-white py-3 px-5 pl-10 rounded-full w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all border border-gray-700"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg
                className="absolute left-3 top-3.5 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              {searchTerm && (
                <button
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-white"
                  onClick={() => setSearchTerm("")}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {filteredItems.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layout
          >
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={setSelectedItem}
                index={index}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-20 bg-gray-800/30 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <svg
              className="w-16 h-16 mx-auto text-gray-600 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p className="text-gray-400 text-lg font-medium">
              No achievements found matching your criteria.
            </p>
            <button
              className="mt-4 text-blue-400 hover:text-blue-300 transition-colors font-medium"
              onClick={() => {
                setSelectedCategory("all");
                setSearchTerm("");
              }}
            >
              Clear filters
            </button>
          </motion.div>
        )}

        {/* Conditional rendering of the modal */}
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </div>
    </section>
  );
}

export default Gallery;
