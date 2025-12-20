import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


import "../Style/service.css";

const Service = () => {


  const categories = [
    { name: "Teaching / Tutoring", icon: "👨‍🏫" },
    { name: "Graphic Design", icon: "🎨" },
    { name: "Web Development", icon: "💻" },
    { name: "Cooking / Catering", icon: "🍳" },
    { name: "Fitness / Yoga", icon: "🧘" },
    { name: "Music / Dance", icon: "🎵" },
    { name: "Home Repair", icon: "🛠️" },
    { name: "Translation", icon: "📚" },
  ];

  const services = [
    {
      title: "Maths Tutoring",
      desc: "Class 10th & 12th Mathematics online tutoring.",
      user: "Akash",
      rating: 5,
      location: "Online",
    },
    {
      title: "Logo Designing",
      desc: "Professional logos and branding material.",
      user: "Riya",
      rating: 4,
      location: "Delhi",
    },
    {
      title: "Cooking Classes",
      desc: "Learn Indian & Italian cuisines.",
      user: "Rohit",
      rating: 5,
      location: "Mumbai",
    },
  ];

  return (
    <>
      {/* 🏆 Awards Section */}
      <section
        className="awards-hero fixed-bg-section"

      >
        <div className="overlay">
          <div className="text-content">
            <h2>🏆 MSME BusinessCare Awards &  Recognition</h2>
            <h3>
              Celebrating Excellence in <span>Business & Marketing</span>
            </h3>
            <p>
              BusinessCare’s journey of innovation, impact, and strategic
              excellence has been recognized across multiple prestigious awards
              in India and globally.
            </p>
            {/* <Link to="/Contact">  <button className="cta-btn2">Explore Awards</button></Link> */}
          </div>
        </div>
      </section>

      <section className="startup-section">
        <div className="container">

          <h2 className="main-heading">
            NEW START UP MARKETING STRATEGY
          </h2>

          <div className="content-wrapper">

            {/* Left Content */}
            <div className="left-content">
              <h3>Programmes for Raising New Startups</h3>

              <p>
                In relation to the development of any startup, it is very important
                to understand their business model and consumer angle.
              </p>

              <button className="call-btn">
                <img src="./" alt="Call" />
                CALL NOW
              </button>
            </div>

            {/* Right Image */}
            <div className="right-image">
              <img src="./about/s1.webp" alt="Startup Strategy" />
            </div>

          </div>
        </div>
      </section>









      <section className="startup-section" style={{background:"#EBB02D"}}>
        <div className="container">

          <h2 className="main-heading">
           OLD BUSINESS GROWTH PROGRAMMES STRATEGY
          </h2>

          <div className="content-wrapper">

            {/* Left Content */}
            <div className="left-content">
              <h3>How to Revive an Old Business</h3>

              <p>
                Raising the buzz of the product from door to door, Make everyone need, 
                make everyone rote again and again. Stand out from your competitors
                 and make a name for yourself again.
              </p>

              <button className="call-btn">
                <img src="./" alt="Call" />
                CALL NOW
              </button>
            </div>

            {/* Right Image */}
            <div className="right-image">
              <img src="./about/s2.webp" alt="Startup Strategy" />
            </div>

          </div>
        </div>
      </section>













      <section className="startup-section" style={{background:"#51073B"}}>
        <div className="container">

          <h2 className="main-heading">
            HOW TO TARGET YOUR AUDIENCE
          </h2>

          <div className="content-wrapper">

            {/* Left Content */}
            <div className="left-content">
              <h3>Find Your Real Buyer.</h3>

              <p>
                Grab real customers, end buyer's hassle, and
                start your sales
                For More Information
                Contact us: 7042438293
              </p>

              <button className="call-btn">
                <img src="./" alt="Call" />
                CALL NOW
              </button>
            </div>

            {/* Right Image */}
            <div className="right-image">
              <img src="./about/s3.webp" alt="Startup Strategy" />
            </div>

          </div>
        </div>
      </section>








      <section className="startup-section" style={{background:"#EBB02D"}}>
        <div className="container">

          <h2 className="main-heading">
            HOW TO GROW YOUR SALES
          </h2>

          <div className="content-wrapper">

            {/* Left Content */}
            <div className="left-content">
              <h3>Find your real buyer.</h3>

              <p>
                When the need of the customer arises,
                then your business will shine.
                For More Understanding
                Contact us: 7042438293
              </p>

              <button className="call-btn">
                <img src="./" alt="Call" />
                CALL NOW
              </button>
            </div>

            {/* Right Image */}
            <div className="right-image">
              <img src="./about/s4.webp" alt="Startup Strategy" />
            </div>

          </div>
        </div>
      </section>



    </>
  );
};

export default Service;
