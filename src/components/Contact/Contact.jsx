// Importing CSS file for styling the Contact component
import "./Contact.css";

// Importing icons used in the component
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

// Importing React library
import React from "react";

// Defining the Contact component
const Contact = () => {

    // Using state to store the result message of the form submission
    const [result, setResult] = React.useState("");

    // Function to handle form submission
    const onSubmit = async (event) => {
      event.preventDefault();  // Prevents default form submission behavior
      setResult("Enviando....");  // Initial message to indicate form submission
      const formData = new FormData(event.target);

      // Adding access key from environment variables for the API
      formData.append("access_key", import.meta.env.VITE_API_KEY);

      // Sending form data to the API
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      // Parsing the response data
      const data = await response.json();

      // Checking if the form submission was successful
      if (data.success) {
        setResult("Formulário enviado com sucesso!");  // Success message
        event.target.reset();  // Resetting form fields
        setTimeout(() => {
          setResult("");  // Clearing success message after 5 seconds
        }, 5000);
      } else {
        console.log("Error", data);  // Logging error to console
        setResult(data.message);  // Displaying error message
      }
    };

    return (
        <div className="contact">
            {/* Left column with contact information */}
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>
                Feel free to reach out through the contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@GreatStack.dev</li>
                    <li><img src={phone_icon} alt="" />(41) +1 123-456-7890</li>
                    <li><img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge MA 02139, United States</li>
                </ul>
            </div>

            {/* Right column with contact form */}
            <div className="contact-col">
                {/* Form with fields for user input */}
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="Enter your email id" required />
                    <label>Write your messages here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                    <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
                </form>
                {/* Displaying result message after form submission */}
                <span>{result}</span>
            </div>
        </div>
    );
}

// Exporting the Contact component so it can be used in other files
export default Contact;
