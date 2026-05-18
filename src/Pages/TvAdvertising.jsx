import React from "react";
import "../Style/tvadd.css"
import { Helmet } from "react-helmet";

const TvAdvertising = () => {
  return (
    <>
    <Helmet>
  <title>TV Advertising in India | Advertise on National TV Channels</title>

  <meta
    name="description"
    content="Advertise your business on India's top TV channels like Aaj Tak, Zee TV, News18 & CNBC with Business Care. Get maximum reach, brand awareness, and high-impact TV campaigns."
  />

  <meta
    name="keywords"
    content="TV advertising India, advertise on TV India, TV ads cost India, national TV advertising, business promotion TV, Aaj Tak ads, Zee TV ads"
  />

  <link
    rel="canonical"
    href="https://businesscare.org.in/tv-advertising-india"
  />

  {/* ✅ OPEN GRAPH */}
  <meta property="og:title" content="TV Advertising in India | Business Care" />
  <meta property="og:description" content="Run your ads on India's top TV channels and grow your brand visibility." />
  <meta property="og:url" content="https://businesscare.org.in/tv-advertising-india" />
  <meta property="og:type" content="website" />

  {/* ✅ TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="TV Advertising India" />
  <meta name="twitter:description" content="Promote your business on national TV channels with Business Care." />

  {/* ✅ SERVICE SCHEMA */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "TV Advertising Services in India",
      "provider": {
        "@type": "Organization",
        "name": "Business Care TV Show",
        "url": "https://businesscare.org.in"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "description": "Advertise on national TV channels like Aaj Tak, Zee TV, News18 and CNBC with Business Care to increase brand visibility and reach millions of viewers."
    }
    `}
  </script>
</Helmet>
    <div className="page">
      {/* <Helmet>
        <title>TV Advertising in India | Promote on National TV Channels</title>
        <meta name="description" content="Promote your business on national TV channels in India with Business Care. Affordable TV ads with high reach and brand visibility." />
        <meta name="keywords" content="TV Advertising India" />
        <link rel="canonical" href="https://yourwebsite.com/tv-advertising-india" />
      </Helmet> */}

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
    </>
  );
};

export default TvAdvertising;