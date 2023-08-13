import React from "react";
import "./contact.css";
export const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <div className="image-section">
          {/* Your image content here */}
        </div>
        <div className="contact-section">
          <h2>Get in Touch</h2>
          <form>
            <input type="text" placeholder="Name" className="rounded-input" />
            <input type="email" placeholder="Email" className="rounded-input" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
