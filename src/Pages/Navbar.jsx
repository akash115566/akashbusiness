import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const themeColor = "#000080";

  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 999, background: themeColor, padding: "10px 20px", borderBottom: "1px solid #ccc" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>MSME Business Care</div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Link to="/" onClick={handleLinkClick} style={linkStyle}>Home</Link>

          <div onMouseEnter={() => setIsAboutOpen(true)} onMouseLeave={() => setIsAboutOpen(false)} style={{ position: "relative" }}>
            <Link to="/about" style={{ ...linkStyle, display: "flex", alignItems: "center" }}>About ▾</Link>
            {isAboutOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: themeColor, display: "flex", flexDirection: "column", minWidth: "180px", borderRadius: "5px", overflow: "hidden", boxShadow: "0 4px 10px rgba(0,0,0,0.2)" }}>
                <Link to="/founder" style={dropdownLinkStyle}>Our Founder</Link>
                <Link to="/mission" style={dropdownLinkStyle}>Mission & Vision</Link>
                <Link to="/why-us" style={dropdownLinkStyle}>Why Us</Link>
              </div>
            )}
          </div>

          <Link to="/award" onClick={handleLinkClick} style={linkStyle}>Award</Link>
          <Link to="/service" onClick={handleLinkClick} style={linkStyle}>Service</Link>
                    <Link to="/video" onClick={handleLinkClick} style={linkStyle}>Video</Link>
          <Link to="/gallery" onClick={handleLinkClick} style={linkStyle}>Gallery</Link>
          <Link to="/contact" onClick={handleLinkClick} style={linkStyle}>Contact</Link>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)} style={{ display: "none", flexDirection: "column", cursor: "pointer", gap: "5px" }}>
          <span style={{ width: "25px", height: "3px", background: "#fff" }}></span>
          <span style={{ width: "25px", height: "3px", background: "#fff" }}></span>
          <span style={{ width: "25px", height: "3px", background: "#fff" }}></span>
        </div>
      </div>

      {isOpen && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", background: themeColor, padding: "10px 0" }}>
          <Link to="/" onClick={handleLinkClick} style={linkStyle}>Home</Link>
          <div style={{ width: "100%", textAlign: "center" }}>
            <div onClick={() => setIsAboutOpen(!isAboutOpen)} style={{ ...linkStyle, display: "block", cursor: "pointer" }}>About ▾</div>
            {isAboutOpen && (
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "5px" }}>
                <Link to="/founder" onClick={handleLinkClick} style={dropdownLinkStyle}>Our Founder</Link>
                <Link to="/mission" onClick={handleLinkClick} style={dropdownLinkStyle}>Mission & Vision</Link>
                <Link to="/why-us" onClick={handleLinkClick} style={dropdownLinkStyle}>Why Us</Link>
              </div>
            )}
          </div>
          <Link to="/award" onClick={handleLinkClick} style={linkStyle}>Award</Link>
          <Link to="/service" onClick={handleLinkClick} style={linkStyle}>Service</Link>
                              <Link to="/video" onClick={handleLinkClick} style={linkStyle}>Video</Link>
          <Link to="/gallery" onClick={handleLinkClick} style={linkStyle}>Gallery</Link>
          <Link to="/contact" onClick={handleLinkClick} style={linkStyle}>Contact</Link>
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
  );
};

const linkStyle = { textDecoration: "none", color: "#fff", fontWeight: "500" };
const dropdownLinkStyle = { ...linkStyle, padding: "10px 15px", textAlign: "left" };

export default Navbar;
