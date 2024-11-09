// Importing CSS file for styling the About component
import "./About.css";

// Importing images used in the component
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

// Defining the About component, which takes in 'setPlayerState' as a prop
const About = ({ setPlayerState }) => {
  return (
    <div className="about">
        {/* Left side of the About section, containing images */}
        <div className="about-left">
            {/* Displays the main about image */}
            <img src={about_img} alt="" className="about-img" />
            {/* Play icon, which when clicked, calls setPlayerState to change the player state */}
            <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayerState(true)}/>
        </div>

        {/* Right side of the About section, containing text content */}
        <div className="about-right">
          {/* Section heading */}
          <h3>ABOUT UNIVERSITY</h3>
          {/* Main title */}
          <h1>Nurturing Tomorrow's Leaders Today</h1>
          
          {/* Text content paragraphs describing the university's programs and goals */}
          <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
          <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
          <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>
        </div>
    </div>
  );
}

// Exporting the About component so it can be used in other files
export default About;
