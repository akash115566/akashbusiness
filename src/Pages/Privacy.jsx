import React from "react";
import "../Style/privacy.css";

const Privacy = () => {
  return (
    <>
    <section className="banner-section">
  <div className="banner-content">
    <h1>Privacy</h1>
  </div>

  {/* Wave Shape Divider */}
  <div className="banner-wave">
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path
        d="M0,0 
           C150,100 350,0 600,40 
           C850,80 1050,120 1200,60 
           L1200,120 
           L0,120 Z"
      />
    </svg>
  </div>
</section>

      {/* Content Section */}
<section className="privacy-section">
      <div className="privacy-container">

        {/* Top Heading */}
        <h2 className="privacy-title" style={{textAlign:"center",fontSize:'3rem'}}>Privacy Policy</h2>

        {/* Content Grid */}
        <div className="privacy-grid">

   <section className="privacy-section">

  <p>
    <strong>Business Care</strong> (“we,” “our,” or “the Show”) is committed to
    protecting the privacy, integrity, and rights of Indian business owners,
    viewers, and partners. This Privacy Policy outlines how information is
    handled and the terms governing the use of the Business Care concept.
  </p>

  <h3>1. Accuracy of Information</h3>
  <p>
    Business Care ensures that all content broadcasted or published is created
    with due diligence. The show does not intentionally present false,
    misleading, or incorrect information. Any information shared is for
    awareness and educational purposes only.
  </p>

  <h3>2. Purpose of the Show</h3>
  <p>Business Care TV Show is designed exclusively to:</p>
  <ul>
    <li>Create awareness among Indian business owners</li>
    <li>Promote new and emerging business trades</li>
    <li>Support entrepreneurship and business ecosystems in India</li>
  </ul>
  <p>
    The show does not guarantee business success, profits, or outcomes.
  </p>

  <h3>3. Data Privacy & Protection</h3>
  <ul>
    <li>
      All business-related information, documents, and data shared by business
      owners are kept confidential.
    </li>
    <li>
      Business Care follows strict data protection practices and does not
      misuse, sell, or share business data with third parties without consent.
    </li>
    <li>
      Data is used only for program-related purposes and promotional activities
      approved by the business owner.
    </li>
  </ul>

  <h3>4. Trademark & Intellectual Property Rights</h3>
  <p>
    “Business Care” is a Registered Trademark Concept. The format, name, logo,
    idea, and presentation style are legally protected.
  </p>
  <p>
    Any unauthorized copying, imitation, reproduction, or operation of a
    similar concept will result in legal action under applicable laws.
  </p>

  <h3>5. Broadcast & Platform Restrictions</h3>
  <p>
    No individual, business owner, or third party is permitted to independently
    telecast, upload, stream, or distribute the Business Care show or its
    content on any platform without prior written consent from the Business
    Care Legal Team.
  </p>
  <p>
    Unauthorized use will be considered a violation of intellectual property
    rights and may lead to legal proceedings.
  </p>

  <h3>6. Legal Jurisdiction</h3>
  <p>
    All disputes, claims, or legal matters related to Business Care shall be
    governed by the laws of India and subject to the jurisdiction of Indian
    courts.
  </p>

</section>


        </div>
      </div>
    </section>
    </>
  );
};

export default Privacy;
