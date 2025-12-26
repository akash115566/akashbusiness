import React from 'react'
import { motion } from "framer-motion";
import "../Style/video.css";

const Video = () => {


      const videos = [
"/vid1.mp4",
"/vid2.mp4",
"/vid3.mp4"
];

  return (
   <>
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

     
      <section className="video-section" >
<div className="video-container">
<h2 className="video-heading">OUR VIDEO</h2>


<div className="video-grid">
{videos.map((src, i) => (
<div key={i} className="video-item">
<video className="video-player" controls playsInline preload="metadata" src={src}>
Your browser does not support the video tag.
</video>
{/* <p className="video-caption">Video {i + 1}</p> */}
</div>
))}
</div>


{/* <p className="responsive-note">On small screens (480px), scroll horizontally to view all videos side by side.</p> */}
</div>
</section>
   </>
  )
}

export default Video
