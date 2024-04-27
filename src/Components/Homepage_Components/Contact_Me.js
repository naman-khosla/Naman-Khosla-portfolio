import React from "react";
import "./Contact_Me.css";

const ContactMe = () => {
  return (
    <div className="contact-me-container">
      <h1 className="contact-me-header">Get in Touch</h1>
      <form className="contact-me-form">
        <div className="form-row">
          <input type="text" placeholder="First name*" required />
          <input type="text" placeholder="Last name" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email address*" required />
          <input type="tel" placeholder="Mobile Number" />
        </div>
        <textarea placeholder="Your message here*" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="back-to-top">
        <a href="#top">Back to Top</a>
      </div>
    </div>
  );
};

export default ContactMe;
