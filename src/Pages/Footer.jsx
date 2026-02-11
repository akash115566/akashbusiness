import React from "react";
import "../Style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";   // ✅ Correct import

const Footer = () => {


  const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"   // smooth hata bhi sakte ho
  });
};

  return (
    <>
      <footer
        className="footer"
      

      >
        <div className="footer-container">

          {/* 🔹 Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/award">Award</Link></li>
              <li><Link to="/mission">Mission & Vision</Link></li>
              <li><Link to="/founder">Our Founders</Link></li>
              <li><Link to="/why-us">Why Business Care</Link></li>
               <li><Link to="/privacy">Privacy & Policy</Link></li>
                 <li><Link to="/terms">Terms and Conditions</Link></li>
                 <li><Link to="/associate">Business Care Associate Form</Link></li>
                       
            </ul>
          </div>

          {/* 🔹 Services */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
               <li><Link to="/service"  onClick={scrollToTop}>Grow Your Sales</Link></li>
              <li><Link to="/"  onClick={scrollToTop}>Low Investment Big Buzz</Link></li>
              <li><Link to="/service"  onClick={scrollToTop}>Find your Target Audience</Link></li>
              <li><Link to="/service"  onClick={scrollToTop}>Startups Marketing Strategy</Link></li>
              <li><Link to="/service"  onClick={scrollToTop}>Business Growth Programe Strategy</Link></li>
              <li><Link to="/"  onClick={scrollToTop}>Choose Right Media Platforms</Link></li>
               <li><Link to="/formPage">Business care tv show registration form</Link></li>
      
            </ul>
          </div>

          {/* 🔹 Contact Info */}
          <div className="footer-column">
            <h3>Contact Details</h3>
            <p>📞 <strong>Phone: +91 8076151724</strong></p>
            <p>📧 <strong>Email:</strong> <a href="mailto:Info@businesscare.org.in">Info@businesscare.org.in</a></p>

            {/* 🔹 Social Links */}
     <div className="social-links">
  <p><strong>Follow Us On:</strong></p>

  <a href="https://share.google/fnkU5NXc1Vu23FTSW" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faFacebookF} />
  </a>

  <a href="https://share.google/yG4numo2IQ2TW394i" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>

  <a href="https://www.linkedin.com/company/business-care-noida/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>

  <a href="https://x.com/businesscareup" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faTwitter} />
  </a>

  <a href="https://share.google/thz5aGDzQ6FRjbskI" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faYoutube} />
  </a>
</div>


          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 BusinessCare. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
