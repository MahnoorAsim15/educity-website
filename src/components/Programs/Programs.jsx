// Importing CSS file for styling the Programs component
import "./Programs.css";

// Importing images for program thumbnails and icons
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

// Defining the Programs component
const Programs = () => {
  return (
    <div className="programs">
        {/* Individual program with image, icon, and title */}
        <div className="program">
            <img src={program_1} alt="Graduation Program" />
            <div className="caption">
                <img src={program_icon_1} alt="Graduation Icon" />
                <p>Graduação</p>
            </div>
        </div>

        {/* Mestrado program with corresponding image and icon */}
        <div className="program">
            <img src={program_2} alt="Master's Program" />
            <div className="caption">
                <img src={program_icon_2} alt="Master's Icon" />
                <p>Mestrado</p>
            </div>
        </div>

        {/* Pós Graduação program with corresponding image and icon */}
        <div className="program">
            <img src={program_3} alt="Post-Graduation Program" />
            <div className="caption">
                <img src={program_icon_3} alt="Post-Graduation Icon" />
                <p>Pós Graduação</p>
            </div>
        </div>
    </div>
  );
}

// Exporting the Programs component for use in other parts of the application
export default Programs;
