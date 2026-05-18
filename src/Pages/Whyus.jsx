import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../Style/whyus.css"; // Make sure CSS path is correct

const Whyus = () => {

  return (
    <>
    <Helmet>
  <title>
    Business Care TV Show | India’s #1 MSME Growth Platform
  </title>

  <meta
    name="description"
    content="Grow your business with Business Care TV Show – India’s leading MSME growth platform. Featured on Aaj Tak, Zee TV, CNBC Prime & more. Get expert marketing strategies."
  />

  <meta
    name="keywords"
    content="Business Care TV Show, MSME growth India, TV advertising India, business marketing strategy, startup growth platform"
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://businesscare.org.in/" />

  {/* ✅ OPEN GRAPH (Facebook / WhatsApp Sharing) */}
  <meta property="og:title" content="Business Care TV Show" />
  <meta
    property="og:description"
    content="India’s #1 MSME Growth Platform featured on top TV channels."
  />
  <meta property="og:url" content="https://businesscare.org.in/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://businesscare.org.in/logo.png" />

  {/* ✅ TWITTER SEO */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Business Care TV Show" />
  <meta
    name="twitter:description"
    content="Grow your business with expert strategies and TV promotion."
  />

  {/* ✅ ORGANIZATION SCHEMA */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Business Care TV Show",
      "url": "https://businesscare.org.in",
      "logo": "https://businesscare.org.in/logo.png",
      "sameAs": [
        "https://www.youtube.com/",
        "https://www.facebook.com/",
        "https://www.instagram.com/"
      ]
    }
    `}
  </script>

  {/* ✅ TV SHOW SCHEMA */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "TVSeries",
      "name": "Business Care TV Show",
      "genre": "Business",
      "inLanguage": "Hindi",
      "countryOfOrigin": "India",
      "description": "India’s leading business TV show helping MSMEs and startups grow with expert strategies.",
      "publisher": {
        "@type": "Organization",
        "name": "Business Care"
      }
    }
    `}
  </script>
</Helmet>
      <section className="whyus-section1">
        <div className="overlay1">
          <div className="text-container1">
            <h2>Why Business<br/> Care </h2>
            <p style={{textAlign:"left",fontWeight:"500"}}>Business improves the quality <br/>of life in two ways. Firstly, it<br/> provides high-quality goods<br/> and service</p>
          
          
          </div>
        </div>
      </section>

    
 <section className="business-care-section">
  <div className="business-care-container">

    <h2 className="business-care-heading">
      Why <span>Business Care?</span>
    </h2>

    <p className="business-care-text">
     Because today businesses don’t just need promotion—they need the right direction,
      visibility, and growth strategy. Business Care brings all of this on one powerful platform, 
      combining media, branding, and business expansion.
    </p>

    <p className="business-care-text">
   It helps brands gain national and global visibility, connect with investors, 
   dealers, and partners, and build a strong market presence through TV and
    strategic planning.
    </p>

    <p className="business-care-text">
      In simple words, Business Care is not just a service—it’s a complete growth ecosystem for MSMEs, startups, and business owners.
    </p>

    <div className="business-care-quote">
      “If you want to grow faster, reach wider, and build a powerful brand—Business Care is the platform.”
    </div>

  </div>
</section>





      <section className="game-changer-section9" >
        <div className="image9">
          <img src="/about/aw4.webp" alt="Business Coaching" />
        </div>
        <div className="content9">
          <h2>Game Changer of Business</h2>
          <p>Are you a new startup? Are you facing problems improving your sales growth?</p>
          <p>But there was no marketing planning and no business awareness. Come meet our business coaches who will change your business module with their unique business tricks.</p>
          <ul>
            <li>How do you sell your product when there are none available on the market?</li>
            <li>How to Make Your Salad Different</li>
            <li>Business strategy plaining</li>
            <li>How to grow sales</li>
            <li>How to do marketing</li>
            <li>How to become no1 brand</li>
            <li>How to succeed</li>
            <li>How to Attract Distributors</li>
            <li>How to Attract Consumers</li>
          </ul>
          {/* <button>READ MORE</button> */}
        </div>
        
      </section>
      
        <section className="case-section1">
      {/* <div className="case-header">
        <h2>Case Studies</h2>
        <p>We explore some of the latest trends and strategies</p>
      </div> */}

      <div className="case-grid1">
        <div className="case-item1">
          <img src="/about/aw2.webp" alt="Case Study 1" />
        </div>

        <div className="case-item1">
          <img src="/about/aw3.webp" alt="Case Study 2" />
        </div>

        <div className="case-item1">
          <img src="/about/g8.webp" alt="Case Study 3" />
        </div>
        
      </div>
      
    </section>
    </>
  );
};

export default Whyus;
