import React from "react";
import "../Style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";   // ✅ Correct import

const Footer = () => {
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
              <li><Link to="/">Awards</Link></li>
              <li><Link to="/">Mission & Vision</Link></li>
              <li><Link to="/">Our Founders</Link></li>
              <li><Link to="/">Why Business Care</Link></li>
            </ul>
          </div>

          {/* 🔹 Services */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
               <li><Link to="/">Blog</Link></li>
              <li><Link to="/">SalesPage</Link></li>
              <li><Link to="/">StrategyPage</Link></li>
              <li><Link to="/">Privacy & Policy</Link></li>
              <li><Link to="/">Terms and Conditions</Link></li>
            </ul>
          </div>

          {/* 🔹 Contact Info */}
          <div className="footer-column">
            <h3>Contact Details</h3>
            <p>📞 <strong>Phone:</strong> +91 7042-438-293</p>
            <p>📧 <strong>Email:</strong> <a href="mailto:Info@businesscare.org.in">Info@businesscare.org.in</a></p>

            {/* 🔹 Social Links */}
            <div className="social-links">
              <p><strong>Follow Us On:</strong></p>

              <a href="https://www.facebook.com/businesscarenoida/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="https://www.instagram.com/Businesscarenoida/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="https://www.linkedin.com/company/business-care-noida/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a href="https://twitter.com/businesscareup" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>

              <a href="https://www.youtube.com/@BusinessCareNoida/featured" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
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
