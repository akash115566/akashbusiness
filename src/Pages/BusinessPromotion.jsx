import React from "react";
import "../Style/business.css"
import { Helmet } from "react-helmet";

const BusinessPromotion = () => {
  return (
    <> 
     <Helmet>
        <title>Business Promotion Services in India | TV, OTT & Digital Marketing</title>

        <meta 
          name="description" 
          content="Boost your business with Business Care promotion services including TV ads, OTT advertising, radio and digital marketing across India." 
        />

        <meta 
          name="keywords" 
          content="business promotion India, TV advertising India, OTT ads India, digital marketing services" 
        />

        {/* ✅ Correct Canonical */}
        <link 
          rel="canonical" 
          href="https://businesscare.org.in/business-promotion-services" 
        />

        {/* ✅ SCHEMA MARKUP */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Business Promotion Services",
            "provider": {
              "@type": "Organization",
              "name": "Business Care",
              "url": "https://businesscare.org.in"
            },
            "areaServed": "India",
            "description": "Business Care offers TV advertising, OTT ads, radio promotions and digital marketing services for business growth."
          }
          `}
        </script>
      </Helmet>
   
    <div className="page">
       

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
     </>
  );
};

export default BusinessPromotion;