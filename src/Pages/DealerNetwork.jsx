import React from "react";
import "../Style/dealer.css"
import { Helmet } from "react-helmet";

const DealerNetwork = () => {
  return (
    <div className="page">
      <Helmet>
        <title>Dealer & Distributor Network in India</title>
        <meta name="description" content="Expand your business with dealer and distributor network services across India. Connect with Business Care today." />
        <meta name="keywords" content="Dealer Network India" />
        <link rel="canonical" href="https://yourwebsite.com/dealer-network-india" />
      </Helmet>

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
  );
};

export default DealerNetwork;