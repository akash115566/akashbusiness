import React from "react";
import { Link } from "react-router-dom";
import "../Style/award.css";

const Award = () => {
  

  const awardsList = [
    {
      year: 2020,
      title: "Best Startup Marketing Initiative",
      organization: "India Media Awards",
    },
    {
      year: 2021,
      title: "Top Innovative Business Strategy",
      organization: "Global Business Summit",
    },
    {
      year: 2022,
      title: "Excellence in Marketing & Growth",
      organization: "Entrepreneurship Awards",
    },
    {
      year: 2023,
      title: "Outstanding Business Advisory",
      organization: "Corporate Leaders Forum",
    },
  ];



  const images = [
    "/about/aw13.webp",
    "/about/aw2.webp",
    "/about/aw3.webp",
    "/about/aw4.webp",
    "/about/aw5.webp",
    "/about/aw6.webp",
    "/about/aw7.webp",
    "/about/aw8.webp",
    "/about/aw9.webp",
    "/about/aw10.webp",
    "/about/aw11.webp",
    "/about/aw12.webp",
  ];



  const awardsList1 = [
    {
      title: "Excellence in Startup Growth",
      organization: "National Entrepreneurship Awards",
    },
    {
      title: "Innovative Marketing Campaign of the Year",
      organization: "India Marketing Excellence Awards",
    },
    {
      title: "Top Business Advisory Firm",
      organization: "Global Business Leadership Forum",
    },
    {
      title: "Outstanding Digital Strategy",
      organization: "Digital India Awards",
    },
    {
      title: "Best Media & Branding Solutions",
      organization: "Corporate Innovation Awards",
    },
    {
      title: "Emerging Business Excellence",
      organization: "Asia-Pacific Business Awards",
    },
    {
      title: "Creative Marketing Leadership",
      organization: "International Marketing Summit",
    },
    {
      title: "Strategic Growth Excellence",
      organization: "Business Visionary Awards",
    },
  ];


  return (
    <>
      {/* 🔹 Hero Section */}
      <section className="awards-hero fixed-bg-section2">
        <div className="overlay2">
          <div className="text-content2">
            <h2>🏆 BusinessCare Awards & Recognition</h2>
            <h3>
              Celebrating Excellence in <span>Business & Marketing</span>
            </h3>
            <p>
              BusinessCare’s journey of innovation, impact, and strategic excellence has been
              recognized across multiple prestigious awards in India and globally.
            </p>
          {/* <Link to="/Contact">  <button className="cta-btn">Explore Awards</button></Link> */}
          </div>
        </div>

        {/* 🔹 Wave Shape Divider */}
        {/* <div className="wave-divider">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,100 900,0 1200,80 L1200,120 L0,120 Z" fill="#fdfaf6" />
            <path d="M0,0 C400,120 800,0 1200,60 L1200,120 L0,120 Z" fill="#f9f4ef" opacity="0.7" />
            <path d="M0,0 C500,80 700,0 1200,40 L1200,120 L0,120 Z" fill="#fdfaf6" opacity="0.5" />
          </svg>
        </div> */}
      </section>

      {/* 🔹 Awards List Section */}
 



      <section className="gallery-section" >
        {/* <div className="gallery-header">
          <h2>Our Featured Work</h2>
        </div> */}

        <div className="gallery-container">
          {images.map((img, index) => (
            <div className="gallery-card" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

      </section>








  
     
    </>
  );
};

export default Award;
