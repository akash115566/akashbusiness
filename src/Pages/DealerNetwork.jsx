import React from "react";
import "../Style/dealer.css"
import { Helmet } from "react-helmet";

const DealerNetwork = () => {
  return (
    <>
     <Helmet>
        <title>Dealer & Distributor Network Services in India | Business Care</title>

        <meta
          name="description"
          content="Build your dealer and distributor network across India with Business Care. Expand your business, increase sales and grow faster with expert strategies."
        />

        <meta
          name="keywords"
          content="dealer network India, distributor network India, channel partners India, business expansion India"
        />

        {/* ✅ Correct Canonical */}
        <link
          rel="canonical"
          href="https://businesscare.org.in/dealer-network-india"
        />

        {/* ✅ SCHEMA MARKUP */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Dealer & Distributor Network Services",
            "provider": {
              "@type": "Organization",
              "name": "Business Care",
              "url": "https://businesscare.org.in"
            },
            "areaServed": "India",
            "description": "Build dealer and distributor network across India with expert onboarding, lead generation and business expansion strategies."
          }
          `}
        </script>
      </Helmet>
    <div className="page">
    

      <h1>Dealer Network India</h1>

      <h2>Expand Your Business Across India</h2>
      <p>
        Build a strong dealer and distributor network with Business Care.
        We help you connect with the right partners in every major city.
      </p>

      <h2>Our Services</h2>
      <ul>
        <li>Dealer onboarding</li>
        <li>Distributor network setup</li>
        <li>Lead generation</li>
        <li>Market expansion strategy</li>
      </ul>

      <h2>Benefits</h2>
      <ul>
        <li>Increase sales</li>
        <li>Stronger local presence</li>
        <li>Faster growth</li>
      </ul>

      <button>Build Network Now</button>
    </div>
    </>
  );
};

export default DealerNetwork;