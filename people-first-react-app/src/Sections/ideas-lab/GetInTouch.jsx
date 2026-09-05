import React from "react";
import "./GetInTouch.css";

import globeImage from "../../assets/ideas-lab-img/10002.webp";

const GetInTouch = () => {
  const handleConsultation = () => {
    console.log("Book a Consultation clicked");
  };

  const handleTraining = () => {
    console.log("Join a Training Program clicked");
  };

  const handlePartner = () => {
    console.log("Partner With Us clicked");
  };

  return (
    <section className="get-touch-section">
      <div className="get-touch-container">

        {/* Globe Image */}
        <div className="globe-design">
          <img
            src={globeImage}
            alt="Globe"
            className="globe-image"
          />
        </div>

        {/* Left Content */}
        <div className="get-touch-content">
          <h2>Let’s Get in Touch</h2>

          <p>
            Learn More about us and what you wanna do
            <br />
            further.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="get-touch-actions">
          <div className="top-buttons">

            <button
              className="consultation-btn"
              onClick={handleConsultation}
            >
              Book a Consultation
            </button>

            <button
              className="training-btn"
              onClick={handleTraining}
            >
              Join a Training Program
            </button>

          </div>

          <button
            className="partner-btn"
            onClick={handlePartner}
          >
            Partner With Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;