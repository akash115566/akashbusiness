import React from "react";
import "../Style/business.css"
import { Helmet } from "react-helmet";

const BusinessPromotion = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Business Promotion Services in India</title>
        <meta name="description" content="Grow your business with powerful promotion services including TV, radio, OTT and digital marketing." />
        <meta name="keywords" content="Business Promotion India" />
        <link rel="canonical" href="https://yourwebsite.com/business-promotion-services" />
      </Helmet>

      <h1>Business Promotion Services</h1>

      <h2>Grow Your Business Faster</h2>
      <p>
        Business Care offers complete business promotion solutions across TV, radio,
        OTT platforms and digital marketing channels.
      </p>

      <h2>Our Promotion Channels</h2>
      <ul>
        <li>TV Advertising</li>
        <li>Radio Advertising</li>
        <li>OTT Ads</li>
        <li>Digital Marketing</li>
      </ul>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>360° marketing solutions</li>
        <li>Affordable packages</li>
        <li>Pan India reach</li>
      </ul>

      <button>Promote Your Business</button>
    </div>
  );
};

export default BusinessPromotion;