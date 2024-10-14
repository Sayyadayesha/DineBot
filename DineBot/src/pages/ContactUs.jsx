import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; // For envelope icon (email)
import { faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // For social media icons
import './ContactUs.css'; // Assuming you will add the custom styles in this file

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us through any of the following channels:</p>
        
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" className="social-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icon" />
          </a>
          <a href="mailto:contact@dinebot.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" className="social-icon" />
          </a>
        </div>

        <div className="contact-details">
          <p>Email: <a href="mailto:contact@dinebot.com">contact@dinebot.com</a></p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
