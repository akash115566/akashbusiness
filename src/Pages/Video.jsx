import React from 'react'
import { motion } from "framer-motion";
   import { Helmet } from "react-helmet";
import "../Style/video.css";

const Video = () => {


      const videos = [
"/vid1.mp4",
"/vid2.mp4",
"/vid3.mp4"
];

  return (
   <>


<Helmet>
  <title>Business Care Videos | TV Shows, Events & Success Stories</title>

  <meta
    name="description"
    content="Watch Business Care TV show videos, business success stories, events, and behind-the-scenes moments. Discover how brands grow with powerful media strategies."
  />

  <meta
    name="keywords"
    content="Business Care videos, TV show clips, business success videos, MSME growth videos, marketing strategy videos India"
  />

  <link
    rel="canonical"
    href="https://businesscare.org.in/videos"
  />

  {/* ✅ OPEN GRAPH */}
  <meta property="og:title" content="Business Care Videos" />
  <meta property="og:description" content="Watch business success stories and TV show highlights." />
  <meta property="og:url" content="https://businesscare.org.in/videos" />
  <meta property="og:type" content="video.other" />

  {/* ✅ VIDEO SCHEMA */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Business Care Video Gallery",
      "itemListElement": [
        {
          "@type": "VideoObject",
          "name": "Business Care Video 1",
          "contentUrl": "https://businesscare.org.in/vid1.mp4",
          "uploadDate": "2024-01-01",
          "description": "Business Care TV Show highlights and success stories."
        },
        {
          "@type": "VideoObject",
          "name": "Business Care Video 2",
          "contentUrl": "https://businesscare.org.in/vid2.mp4",
          "uploadDate": "2024-01-01",
          "description": "Business growth strategies and media campaigns."
        },
        {
          "@type": "VideoObject",
          "name": "Business Care Video 3",
          "contentUrl": "https://businesscare.org.in/vid3.mp4",
          "uploadDate": "2024-01-01",
          "description": "Business Care events and brand success journeys."
        }
      ]
    }
    `}
  </script>
</Helmet>
         <section className="gallery-hero" >
        <div className="overlay">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          Explore Our Video Gallery
          </motion.h1>
          <p> our journey through powerful visuals, inspiring stories, and unforgettable milestones that define Business Care.</p>
        </div>
      </section>

     
      <section className="video-section" >
<div className="video-container">
<h2 className="video-heading">OUR VIDEO</h2>


<div className="video-grid">
{videos.map((src, i) => (
<div key={i} className="video-item">
<video className="video-player" controls playsInline preload="metadata"  loading="lazy" src={src}>
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
