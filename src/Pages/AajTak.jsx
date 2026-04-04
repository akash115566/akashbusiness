import React from "react";
import "../Style/aajtk.css"
import { Helmet } from "react-helmet";

const AajTak = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Advertise on Aaj Tak | TV Ads India</title>
        <meta name="description" content="Run your business ads on Aaj Tak channel with Business Care. Get maximum reach and brand visibility." />
        <meta name="keywords" content="Advertise on Aaj Tak" />
        <link rel="canonical" href="https://yourwebsite.com/advertise-on-aaj-tak" />
      </Helmet>

      <h1>Advertise on Aaj Tak</h1>

      <h2>Boost Your Brand Visibility</h2>
      <p>
        Advertise your business on Aaj Tak, one of India's top news channels,
        and reach millions of viewers instantly.
      </p>

      <h2>Our Services</h2>
      <ul>
        <li>Ad slot booking</li>
        <li>Campaign planning</li>
        <li>Ad creation</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Massive audience reach</li>
        <li>High credibility</li>
        <li>Strong brand impact</li>
      </ul>

      <button>Book Aaj Tak Ad</button>
    </div>
  );
};

export default AajTak;