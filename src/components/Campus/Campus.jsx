// Importing CSS file for styling the Campus component
import "./Campus.css";

// Importing images used in the component
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

// Defining the Campus component
const Campus = () => {
  return (
    <div className="campus">
        {/* Gallery section containing four images */}
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
            <img src={gallery_3} alt="" />
            <img src={gallery_4} alt="" />
        </div>

        {/* Button to view more content, with an arrow icon */}
        <button className="btn dark-btn">
          See more here
          {/* Arrow icon to visually indicate the button's direction */}
          <img src={white_arrow} alt="" />
        </button>
    </div>
  );
}

// Exporting the Campus component so it can be used in other files
export default Campus;
