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
              <li><Link to="/award">Award</Link></li>
              <li><Link to="/mission">Mission & Vision</Link></li>
              <li><Link to="/founder">Our Founders</Link></li>
              <li><Link to="/why-us">Why Business Care</Link></li>
               <li><Link to="/privacy">Privacy & Policy</Link></li>
                 <li><Link to="/terms">Terms and Conditions</Link></li>
                       
            </ul>
          </div>

          {/* 🔹 Services */}
          <div className="footer-column">
            <h3>Services</h3>
            <ul>
               <li><Link to="/service">Grow Your Sales</Link></li>
              <li><Link to="/home">Low Investment Big Buzz</Link></li>
              <li><Link to="/service">Find your Target Audience</Link></li>
              <li><Link to="/service">Startups Marketing Strategy</Link></li>
              <li><Link to="/service">Business Growth Programe Strategy</Link></li>
              <li><Link to="/service">Choose Right Media Platforms</Link></li>
               <li><Link to="/formPage">Business care tv show registration form</Link></li>
      
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
