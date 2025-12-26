import React from "react";
import { motion } from "framer-motion";

import "../Style/gallery.css";
import { useOutletContext } from "react-router-dom";

const Gallery = () => {

  const images = [
    "/about/g1.webp",
    "/about/g2.webp",
    "/about/g3.webp",
    "/about/g4.webp",
    "/about/g5.webp",
    "/about/g6.webp",
    "/about/g7.webp",
    "/about/g8.webp",
    "/about/g9.webp",
    "/about/g10.webp",
    "/about/g11.webp",
    "/about/g12.webp",
    "/about/g13.webp",
    "/about/g14.webp",
    "/about/g1.webp",
    "/about/g16.webp",
    "/about/g17.webp",
    "/about/g18.webp",
    "/about/g19.webp",
    "/about/g20.webp",
  ];


  const videos = [
"/vid1.mp4",
"/vid2.mp4",
"/vid3.mp4"
];

  return (
    <>
      {/* 🔹 Hero Section with Fixed Background */}
      <section className="gallery-hero" >
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Business Care Moments
          </motion.h1>
          <p>Capturing success, creativity, and growth — one frame at a time.</p>
        </div>
      </section>

      {/* 🔹 Image Gallery */}
      <section className="gallery-section" >
        <h2>Photo Gallery</h2>
        <div className="gallery-grid" >
          {images.map((img, index) => (
            <motion.div
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={img} alt={`Gallery ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>


    </>
  );
};

export default Gallery;
