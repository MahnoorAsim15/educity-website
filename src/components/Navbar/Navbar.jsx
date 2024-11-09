// Importing CSS file for styling the Navbar component
import "./Navbar.css";

// Importing assets and React hooks
import Logo from "../../assets/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import menu_icon from "../../assets/menu-icon.png";

// Defining the Navbar component
const Navbar = () => {
  // State to manage sticky navbar on scroll
  const [sticky, setSticky] = useState(false);

  // Adding an event listener to make navbar sticky on scroll
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  // State and function to toggle mobile menu visibility
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
        {/* Logo of the website */}
        <img src={Logo} alt="edusity logo" className="logo" />

        {/* Navigation links with smooth scrolling */}
        <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
        </ul>

        {/* Menu icon for mobile view */}
        <img src={menu_icon} alt="menu icon" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
}

// Exporting the Navbar component for use in other parts of the application
export default Navbar;
