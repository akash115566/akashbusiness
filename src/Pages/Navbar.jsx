import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/navbar.css";

import {
  FaFacebookF,  FaTwitter,  FaLinkedinIn,  FaInstagram,  FaYoutube,  FaSearch,} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const handleLinkClick = () => setIsOpen(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
   <div
  className="top-info-bar"
  style={{
    background: "#111",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 20px",
    fontSize: "14px",
  }}
>

  {/* Left */}
  <div>
    {/* A-111, Sec-63, Noida UP-201301 | +91 7042-438-293 */}
  </div>

  {/* Right */}
  <div style={{  
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "6px 20px",
    fontSize: "14px",
    gap:"10px" }}>
 

    <div className="social-icons" style={{gap:"15px",display:"flex", color:"#fff"}}>
      <a href="https://www.facebook.com/businesscarenoida/" target="_blank" rel="noopener noreferrer" style={{color:"#fff"}}>
        <FaFacebookF />
      </a>
      <a href="https://x.com/businesscareup" target="_blank" rel="noopener noreferrer" style={{color:"#fff"}}>
        <FaTwitter />
      </a>
      <a href="https://www.linkedin.com/company/business-care-noida/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" style={{color:"#fff"}}>
        <FaLinkedinIn />
      </a>
      <a href="https://www.instagram.com/Businesscarenoida/" target="_blank" rel="noopener noreferrer" style={{color:"#fff"}}>
        <FaInstagram />
      </a>
      <a href="https://www.youtube.com/@BusinessCareNoida/featured" target="_blank" rel="noopener noreferrer"style={{color:"#fff"}}>
        <FaYoutube />
      </a>
      <a href="/search" style={{color:"#fff"}}>
        <FaSearch />
      </a>
    </div>
     <a href="/contact" style={{color:"#fff",border:"1px solid #fff", padding:"6px 12px", }}>
        Schedule A Call Today
      </a>
      
  </div>
</div>

  
      {/* Main Navbar */}
      <nav style={{
        position: isSticky ? "fixed" : "relative",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 999,
        background: "#111",       // themeColor removed
        padding: "10px 20px",
        border:"1px solid  #fff",
        borderBottom: "1px solid #ccc",
        transition: "all 0.3s ease"
      }}>
       <div style={{
  display: "flex",
  alignItems: "center",
  gap: "45px",
  width: "1200px",
}}>
  {/* Hamburger */}
 

          <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>
            <img
    src="./lo1.jpeg"
    alt="MSME Business Care"
    style={{ height: "32px", width: "auto" }}
  /></div>

          {/* Navbar Links */}
         <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: "100px" }}>

            <Link to="/" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Home</Link>
            <div onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)} style={{ position: "relative" }}>
              <Link to="/about" style={{ ...linkStyle, display: "flex", alignItems: "center", color:"#fff" }}>About ▾</Link>
              {isAboutOpen && (
                <div style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  background: "#111",   // themeColor removed
                  display: "flex",
                  flexDirection: "column",
                  minWidth: "180px",
                  borderRadius: "5px",
                  overflow: "hidden",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
                }}>
                  <Link to="/founder" style={{ ...dropdownLinkStyle, color:"#fff" }}>Our Founder</Link>
                  <Link to="/mission" style={{ ...dropdownLinkStyle, color:"#fff" }}>Mission & Vision</Link>
                  <Link to="/why-us" style={{ ...dropdownLinkStyle, color:"#fff" }}>Why Us</Link>
                </div>
              )}
            </div>
            <Link to="/award" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Award</Link>
            <Link to="/service" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Service</Link>
            <Link to="/video" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Video</Link>
            <Link to="/gallery" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Gallery</Link>
            <Link to="/contact" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Contact</Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)} style={{ display: "none", flexDirection: "column", cursor: "pointer", gap: "5px" }}>
            <span style={{ width: "25px", height: "3px", background: "#fff" }}></span>
            <span style={{ width: "25px", height: "3px", background: "#fff" }}></span>
            <span style={{ width: "25px", height: "3px", background: "#fff" }}></span>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start",textAlign:"left", gap: "20px", background: "#111", padding: "10px 0" }}>
            <Link to="/" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Home</Link>
            <div style={{ width: "100%", textAlign: "left" }}>
              <div onClick={() => setIsAboutOpen(!isAboutOpen)} style={{ ...linkStyle, display: "block", cursor: "pointer", color:"#fff" }}>About ▾</div>
              {isAboutOpen && (
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "5px" }}>
                  <Link to="/founder" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#fff" }}>Our Founder</Link>
                  <Link to="/mission" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#fff" }}>Mission & Vision</Link>
                  <Link to="/why-us" onClick={handleLinkClick} style={{ ...dropdownLinkStyle, color:"#fff" }}>Why Us</Link>
                </div>
              )}
            </div>
            <Link to="/award" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Award</Link>
            <Link to="/service" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Service</Link>
            <Link to="/video" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Video</Link>
            <Link to="/gallery" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Gallery</Link>
            <Link to="/contact" onClick={handleLinkClick} style={{ ...linkStyle, color:"#fff" }}>Contact</Link>
          </div>
        )}

        <style>
          {`
            @media (max-width: 768px) {
              .hamburger { display: flex !important; }
              .nav-links { display: none !important; }
            }
          `}
        </style>
      </nav>
    </>
  );
};

const linkStyle = { textDecoration: "none", fontWeight: "500" };
const dropdownLinkStyle = { ...linkStyle, padding: "10px 15px", textAlign: "left" };

export default Navbar;
