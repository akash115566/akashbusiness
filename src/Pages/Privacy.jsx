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
        <h2 className="privacy-title">Privacy Policy</h2>

        {/* Content Grid */}
        <div className="privacy-grid">

          {/* Left Side */}
          <div className="privacy-left">
            <p>
              <strong>Business Care</strong> values your privacy. In this privacy
              policy (“policy”), we describe the information that we collect
              about you when you visit our website,
              https://www.businesscare.org.in/ (the “Website”) and use the
              services available on the Website (“Services”) and how we use and
              disclose that information.
            </p>

            <p>
              If you have any questions or comments about the privacy policy,
              please contact us at <strong>support@businesscare.org.in</strong>.
              Your use of the Website and/or Services and any personal
              information you provide on the website remains subject to the
              terms of the Policy and Business Care’ Terms of Use.
            </p>

            <p>
              At the time of using Business Care, you will share certain
              personal information. Pooja Movie Creations respects your
              personal information. Such information may include your name,
              address, mobile number, email ID, age, IP address, payment
              details, and any other information shared while using the
              services.
            </p>

            <p>
              In case you participate in any other schemes, facilities, or
              services provided by Business Care, the same policy will apply.
            </p>
          </div>

          {/* Right Side */}
          <div className="privacy-right">
            <p>
              The Business Care Service could be vulnerable to hacking, virus
              attacks, and your personal data may be at risk. Business Care
              takes all necessary and reasonable precautions to protect its
              services and data.
            </p>

            <p>
              Advertisements on the Pooja Movie Creations website may be
              provided by third-party advertisers. These advertisers may set
              mobile device IDs on their applications. Pooja Movie Creations
              is not responsible for such advertisers.
            </p>

            <p>
              You are advised to proceed at your own discretion while dealing
              with advertisers. Business Care does not recommend or guarantee
              the quality, commitment, or authenticity of advertisers or their
              services.
            </p>

            <p>
              Any additional information provided by you will be treated as
              confidential, securely stored, and handled with caution to
              protect your personal information.
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Privacy;
