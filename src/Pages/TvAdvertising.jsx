import React from "react";
import "../Style/tvadd.css"
import { Helmet } from "react-helmet";

const TvAdvertising = () => {
  return (
    <div className="page">
      <Helmet>
        <title>TV Advertising in India | Promote on National TV Channels</title>
        <meta name="description" content="Promote your business on national TV channels in India with Business Care. Affordable TV ads with high reach and brand visibility." />
        <meta name="keywords" content="TV Advertising India" />
        <link rel="canonical" href="https://yourwebsite.com/tv-advertising-india" />
      </Helmet>

      <h1>TV Advertising in India</h1>

      <h2>Promote on National TV Channels</h2>
      <p>
        Business Care helps you advertise on leading national TV channels across India.
        Reach millions of viewers and grow your brand visibility with powerful TV campaigns.
      </p>

      <h2>Why Choose TV Advertising?</h2>
      <ul>
        <li>Massive audience reach</li>
        <li>High trust & credibility</li>
        <li>Fast brand awareness</li>
        <li>Pan India visibility</li>
      </ul>

      <h2>Our Services</h2>
      <ul>
        <li>Ad film creation</li>
        <li>Media planning</li>
        <li>Prime time slot booking</li>
        <li>Campaign management</li>
      </ul>

      <button>Book TV Campaign</button>
    </div>
  );
};

export default TvAdvertising;