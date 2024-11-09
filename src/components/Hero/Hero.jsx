// Importing CSS file for styling the Hero component
import "./Hero.css";

// Importing image asset for the button arrow icon
import dark_arrow from "../../assets/dark-arrow.png";

// Defining the Hero component
const Hero = () => {
  return (
    <div className="hero container">
      {/* Text section inside the hero area */}
      <div className="hero-text">
        {/* Main headline */}
        <h1>We Ensure better education for a better world</h1>
        
        {/* Supporting paragraph */}
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        
        {/* Button with an arrow icon to encourage exploring more content */}
        <button className="btn">
          Explore more 
          <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
}

// Exporting the Hero component so it can be used in other files
export default Hero;
