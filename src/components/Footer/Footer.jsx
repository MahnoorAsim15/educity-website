// Importing React library and CSS file for styling the Footer component
import React from 'react';
import "./Footer.css";

// Defining the Footer component
const Footer = () => {
  return (
    <footer className="footer">
        {/* Copyright text */}
        <p>&copy; 2024 Edusity Website. All rights reserved.</p>
        
        {/* List of footer links */}
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </footer>
  );
}

// Exporting the Footer component so it can be used in other files
export default Footer;
