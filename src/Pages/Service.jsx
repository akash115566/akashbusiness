import React from "react";
import { color, motion } from "framer-motion";
 import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import Purpose from "./Purpose";


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
   

<Helmet>
  <title>Business Care Services | Marketing Strategy & Business Growth Programs</title>

  <meta
    name="description"
    content="Explore Business Care services including startup marketing strategy, business growth programs, audience targeting, and sales growth planning for MSMEs and entrepreneurs."
  />

  <meta
    name="keywords"
    content="Business Care services, startup marketing strategy, business growth India, MSME marketing, sales growth strategy, audience targeting"
  />

  <link
    rel="canonical"
    href="https://businesscare.org.in/service"
  />

  {/* ✅ SERVICES SCHEMA */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Business Marketing & Growth Strategy",
      "provider": {
        "@type": "Organization",
        "name": "Business Care TV Show",
        "url": "https://businesscare.org.in"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "description": "Business Care provides startup marketing strategies, old business revival programs, audience targeting, and sales growth consulting services."
    }
    `}
  </script>
</Helmet>
      {/* 🏆 Awards Section */}
      <section
        className="awards-hero1 fixed-bg-section">
        <div className="overlay1">
          <div className="text-content1">
            <h2>🏆 BusinessCare Service & Recognition</h2>
            <h3>
              Celebrating Excellence in <span>Business & Marketing</span>
            </h3>
            {/* <p>
              BusinessCare’s journey of innovation, impact, and strategic
              excellence has been recognized across multiple prestigious awards
              in India and globally.
            </p> */}
            {/* <Link to="/Contact">  <button className="cta-btn2">Explore Awards</button></Link> */}
          </div>
        </div>
      </section>





      <section className="low-investment-section11">
      <div className="low-investment-container11">
        <h1>NEW START UP MARKETING STRATEGY</h1>

        {/* LEFT CONTENT */}
        <div className="low-investment-left11">
          <h2 className="low-investment-heading11">Programmes for Raising New Startups</h2>
          <p className="low-investment-text11">
            In relation to the development of any startup, it is very important to understand their business model and consumer angle.
          </p>
          <button className="low-investment-btn11">CALL NOW</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="low-investment-right11">
          <img src="/about/s1.webp" alt="Low Investment Strategy" className="low-investment-image1" loading="lazy"/>
        </div>

      </div>
    </section>










      <section className="low-investment-section11"  style={{background:"#EBB02D"}}>
      <div className="low-investment-container11">
        <h1>OLD BUSINESS GROWTH PROGRAMMES STRATEGY</h1>

        {/* LEFT CONTENT */}
        <div className="low-investment-left11">
          <h2 className="low-investment-heading11" style={{color:"#111"}}>How to Revive an Old Business</h2>
          <p className="low-investment-text11" style={{color:"#111" ,fontSize:"18px"}}>
           Raising the buzz of the product from door to door, Make everyone need, make everyone rote again and again. Stand out from your competitors and make a name for yourself again.
          </p>
          <button className="low-investment-btn11" style={{background:"#EBB02D"}}>CALL NOW</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="low-investment-right11">
          <img src="/about/s2.webp" alt="Low Investment Strategy" className="low-investment-image1" loading="lazy" />
        </div>

      </div>
    </section>















      <section className="low-investment-section11">
      <div className="low-investment-container11">
        <h1>HOW TO TARGET YOUR AUDIENCE</h1>

        {/* LEFT CONTENT */}
        <div className="low-investment-left11">
          <h2 className="low-investment-heading11" style={{textAlign:'start'}}>Find Your Real Buyer.</h2>
          <p className="low-investment-text11" style={{fontSize:"1.5rem"}}>
          Grab real customers,<br />
  end buyer's hassle,<br />
start your sales<br/>
For More Information<br/>
Contact us: 8076151724</p>
          {/* <button className="low-investment-btn11">CALL NOW</button> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="low-investment-right11">
          <img src="/about/s3.webp" alt="Low Investment Strategy" className="low-investment-image1" loading="lazy"/>
        </div>

      </div>
    </section>


   










      <section className="low-investment-section11"  style={{background:"#EBB02D"}}>
      <div className="low-investment-container11">
        <h1>HOW TO GROW YOUR SALES</h1>

        {/* LEFT CONTENT */}
        <div className="low-investment-left11">
          <h2 className="low-investment-heading11" style={{textAlign:"start"}}>Find your real buyer.</h2>
          <p className="low-investment-text11"style={{fontSize:"1.5rem"}} >
            When the need of the customer arises,<br/>
then your business will shine.<br/>
For More Understanding<br/>
Contact us: 8076151724
          </p>
          {/* <button className="low-investment-btn11">CALL NOW</button> */}
        </div>

        {/* RIGHT IMAGE */}
        <div className="low-investment-right11">
          <img src="/about/s4.webp" alt="Low Investment Strategy" className="low-investment-image1" loading="lazy"/>
        </div>

      </div>
    </section>


      <Purpose />



    </>
  );
};

export default Service;
