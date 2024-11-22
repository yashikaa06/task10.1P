import React, { useState } from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // To display feedback

  const handleSubscribe = async () => {
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Subscription successful! Check your inbox.");
        setEmail(""); // Clear the input field
      } else {
        setMessage("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      {/* Email Signup Section */}
      <div className="email-signup">
        <label htmlFor="email">SIGN UP FOR OUR DAILY INSIDER</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
        {message && <p className="message">{message}</p>}
      </div>

      {/* Footer Section */}
      <div className="footer">
        <div className="footer-section">
          <h3>Explore</h3>
          <a href="#">Home</a>
          <a href="#">Questions</a>
          <a href="#">Articles</a>
          <a href="#">Tutorials</a>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Help</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="footer-section">
          <h3>Stay connected</h3>
          <div className="social-icons">
            <a href="#">
              <img
                src="https://via.placeholder.com/20/000000?text=F"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="https://via.placeholder.com/20/000000?text=T"
                alt="Twitter"
              />
            </a>
            <a href="#">
              <img
                src="https://via.placeholder.com/20/000000?text=I"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="dev-at">DEV@Deakin</div>
      <div className="bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms</a>
        <a href="#">Code of Conduct</a>
      </div>
    </div>
  );
};

export default Footer;