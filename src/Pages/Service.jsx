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

      {/* 🔹 Service Banner */}
      

      {/* 🔹 Hero Section */}
  

      {/* 🔹 Marketing Programs */}
      <section
        className="programs-section"

      >
        <h2>NEW START UP MARKETING STRATEGY</h2>
        <div className="programs-container">
          <div className="program-card zig-left" >
            
            <div className="program-content"  >
              <h3>Programmes for Raising New Startups</h3>
              <p>
            In relation to the development of any startup, it is very important to understand their business model and consumer angle.
              </p>
              <Link to="tel:7042438293" className="cta-btn">
                CALL NOW
              </Link>
            </div>

            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.28.24.png"
              alt="New Startup Marketing Strategy"
            />




          </div>
 <h2>OLD BUSINESS GROWTH PROGRAMMES STRATEGY</h2>
          <div className="program-card zig-right" >
          
            <div className="program-content"  >
              <h3>How to Revive an Old Business</h3>
              <p>
              Raising the buzz of the product from door to door, Make everyone need, make everyone rote again and again. Stand out from your competitors and make a name for yourself again.
              </p>
              <Link to="tel:7042438293" className="cta-btn">
                CALL NOW
              </Link>
            </div>

             <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.20.19-e1681987481804.png"
              alt="Old Business Growth Strategy"
            />




          </div>
     <h2>HOW TO TARGET YOUR AUDIENCE</h2>
          <div className="program-card zig-left" >
       
           
            <div className="program-content"  >
              <h3>Find Your Real Buyer.</h3>
              <p>
               Grab real customers, end buyer's hassle, and
start your sales
For More Information
Contact us: 7042438293
              </p>
             <Link to="tel:7042438293" className="cta-btn">
                CALL NOW
              </Link>
            </div>

             <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.24.03.png"
              alt="How to Target Your Audience"
            />





          </div>
             <h2>HOW TO GROW YOUR SALES</h2>
          <div className="program-card zig-right" >
        
            <div className="program-content"  >
              <h3>Find your real buyer.</h3>
              <p>
             When the need of the customer arises,
then your business will shine.
For More Understanding
Contact us: 7042438293
              </p>
              <Link to="tel:7042438293" className="cta-btn">
                CALL NOW
              </Link>
            </div>

            <img
              src="https://businesscare.org.in/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-04-at-15.19.05.png"
              alt="How to Grow Your Sales"
            />



          </div>
        </div>
      </section>

      {/* 🔹 Why Choose Us */}
    

   
    </>
  );
};

export default Service;
