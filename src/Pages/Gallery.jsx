import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../Style/gallery.css";
import { useOutletContext } from "react-router-dom";

const Gallery = () => {

 const images = [
  {
    src: "/about/g1.webp",
    alt: "Business Conference and Corporate Meeting",
  },
  {
    src: "/about/g2.webp",
    alt: "Professional Team and Business Discussion",
  },
  {
    src: "/about/g3.webp",
    alt: "Corporate Event and Business Networking",
  },
  {
    src: "/about/g4.webp",
    alt: "International Business Meeting",
  },
  {
    src: "/about/g5.webp",
    alt: "Business Growth and Corporate Services",
  },
  {
    src: "/about/g6.webp",
    alt: "Professional Business Team",
  },
  {
    src: "/about/g7.webp",
    alt: "Corporate Seminar and Training",
  },
  {
    src: "/about/g8.webp",
    alt: "Business Presentation and Strategy Planning",
  },
  {
    src: "/about/g9.webp",
    alt: "Company Leadership and Management",
  },
  {
    src: "/about/g10.webp",
    alt: "Business Success and Achievement",
  },
  {
    src: "/about/g11.webp",
    alt: "Corporate Client Meeting",
  },
  {
    src: "/about/g12.webp",
    alt: "Professional Business Services",
  },
  {
    src: "/about/g13.webp",
    alt: "Business Expansion and Development",
  },
  {
    src: "/about/g14.webp",
    alt: "Global Business Partnership",
  },
 
  {
    src: "/about/g16.webp",
    alt: "Professional Corporate Event",
  },
  {
    src: "/about/g17.webp",
    alt: "Business Team Collaboration",
  },
  {
    src: "/about/g18.webp",
    alt: "Entrepreneurship and Business Innovation",
  },
  {
    src: "/about/g19.webp",
    alt: "International Corporate Services",
  },
  {
    src: "/about/g20.webp",
    alt: "Business Leadership and Success",
  },
];

  const videos = [
"/vid1.mp4",
"/vid2.mp4",
"/vid3.mp4"
];

  return (
    <>
       {/* ✅ SEO START */}
      <Helmet>
  {/* ✅ BASIC SEO */}
  <title>Business Care Gallery | Events, TV Shows & Success Stories</title>

  <meta
    name="description"
    content="Explore Business Care gallery featuring TV show moments, business success stories, events, and behind-the-scenes highlights across India."
  />

  <meta
    name="keywords"
    content="Business Care gallery, TV show photos, business events India, MSME success stories, startup events, media coverage"
  />

  <meta name="robots" content="index, follow" />
  <meta name="author" content="Business Care TV Show" />

  {/* ✅ CANONICAL */}
  <link rel="canonical" href="https://businesscare.org.in/gallery" />

  {/* ✅ OPEN GRAPH (Facebook / WhatsApp) */}
  <meta property="og:title" content="Business Care Gallery | TV Shows & Events" />
  <meta
    property="og:description"
    content="Discover Business Care TV show highlights, success stories, and business events across India."
  />
  <meta property="og:url" content="https://businesscare.org.in/gallery" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://businesscare.org.in/preview.jpg" />

  {/* ✅ TWITTER SEO */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Business Care Gallery" />
  <meta
    name="twitter:description"
    content="Explore Business Care TV show gallery, events & success stories."
  />
  <meta name="twitter:image" content="https://businesscare.org.in/preview.jpg" />

  {/* ✅ IMAGE GALLERY SCHEMA (STRUCTURED DATA) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      name: "Business Care Gallery",
      url: "https://businesscare.org.in/gallery",
      description:
        "Gallery of Business Care TV show, events, and business success stories across India.",
      publisher: {
        "@type": "Organization",
        name: "Business Care TV Show",
        logo: {
          "@type": "ImageObject",
          url: "https://businesscare.org.in/logo.png",
        },
      },
    })}
  </script>
</Helmet>
      {/* 🔹 Hero Section with Fixed Background */}
      <section className="gallery-hero1" >
        <div className="overlay1">
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
  <img
    key={index}
    src={img.src}
    alt={img.alt}
    title={img.alt}
    loading="lazy"
  
  />
))}
        </div>
      </section>


    </>
  );
};

export default Gallery;
