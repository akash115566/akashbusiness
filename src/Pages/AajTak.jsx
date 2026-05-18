import React from "react";
import "../Style/aajtk.css"
import { Helmet } from "react-helmet";

const AajTak = () => {
  return (
    <>
      <Helmet>
        <title>Advertise on Aaj Tak Channel | TV Advertising India</title>

        <meta
          name="description"
          content="Advertise on Aaj Tak channel with Business Care. Get maximum brand visibility, high TRP reach and powerful TV advertising campaigns across India."
        />

        <meta
          name="keywords"
          content="advertise on Aaj Tak, Aaj Tak ad cost, TV advertising India, news channel ads India"
        />

        {/* ✅ Correct Canonical */}
        <link
          rel="canonical"
          href="https://businesscare.org.in/advertise-on-aaj-tak"
        />

        {/* ✅ SCHEMA MARKUP */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Aaj Tak Advertising Service",
            "provider": {
              "@type": "Organization",
              "name": "Business Care",
              "url": "https://businesscare.org.in"
            },
            "areaServed": "India",
            "description": "Run ads on Aaj Tak news channel with expert planning, ad creation and campaign management services."
          }
          `}
        </script>
      </Helmet>
    <div className="page">
    

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
    </>
  );
};


export default AajTak;