import React from "react";
import { Link } from "react-router-dom";

import "../Style/mission.css"; // Make sure this file exists

const Mission = () => {

  const services = [
    { title: "Digital Marketing", desc: "SEO, social media campaigns, PPC ads." },
    { title: "Creative Branding", desc: "Logo design, corporate identity." },
    { title: "Content Marketing", desc: "Blogs, videos, infographics." },
    { title: "Media Planning", desc: "Ads placement and campaign management." },
  ];
  return (
    <>
      <section className="mission-section1" >
        <div className="overlay">
          <div className="mission-text1">
            <h2>Empowering <br/> Your Brand</h2>
            <p>
              At BusinessCare TV Show, <br/> we create marketing solutions that
              
            </p>
            {/* <button className="cta-btn">Learn More</button> */}
          </div>
        </div>
      </section>



      <section className="mission-section" >
        <div className="mission-container">
          {/* Mission */}
          <div className="mission-box">
            <div className="mission-image">
              <img src="/about/m1.webp" alt="Mission" />
            </div>
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At <strong>BusinessCare TV Show</strong>, our mission is to empower brands
                and businesses with innovative marketing solutions that connect them
                to their audience effectively. We believe in crafting impactful campaigns
                that not only increase visibility but also build trust and long-lasting relationships.
              </p>
              <p>
                Our goal is to transform creative ideas into powerful digital experiences
                that drive measurable results and sustainable business growth.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="vision-box" style={{background:"#d54fdeff"}}> 
            <div className="vision-text">
              <h2>Our Vision</h2>
              <p>
                Our vision is to become a globally recognized advertising agency that
                redefines the standards of creative marketing. We aim to inspire
                innovation and help businesses reach their full potential by combining
                strategy, storytelling, and cutting-edge technology.
              </p>
              <p>
                We envision a future where every brand can communicate authentically,
                engage meaningfully, and grow responsibly — with BusinessCare as their trusted partner.
              </p>
            </div>
            <div className="vision-image">
              <img src="/about/m2.webp" alt="Vision" />
            </div>
          </div>
        </div>
      </section>








     
    </>
  );
};

export default Mission;
