import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { assets } from "../assets/assets";

const images = [
  {
    id: 1,
    src: assets.profile_pic,
    alt: "Tech",
  },
  { id: 2, src: assets.profile_pic, alt: "Coding" },
  { id: 3, src: assets.profile_pic, alt: "AI" },
  {
    id: 4,
    src: assets.profile_pic,
    alt: "Robotics",
  },
  {
    id: 5,
    src: assets.profile_pic,
    alt: "Science",
  },
  {
    id: 6,
    src: assets.profile_pic,
    alt: "ML",
  },
];
const GaleryItem = ({ image }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      gsap.to(card, {
        rotationY: x * 20,
        rotationX: -y * 20,
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

  return (
    <motion.div
      ref={cardRef}
      className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg perspective-1000"
      style={{
        transformStyle: "preserve-3d",
        transition: "transform 0.3s ease-out",
      }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
        <h3 className="text-white text-lg font-semibold">{image.alt}</h3>
      </div>
    </motion.div>
  );
};

function Gallary() {
  return (
    <section className="min-h-screen bg-gray-900 py-12 px-6">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          3D Motion Galery
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image) => (
            <GaleryItem key={image.id} image={image} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallary;
