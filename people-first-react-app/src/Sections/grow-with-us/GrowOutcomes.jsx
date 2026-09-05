import React from "react";
import "./GrowOutcomes.css";

import outcome1 from "../../assets/Grow-with-us-img/out-earn.webp";
import outcome2 from "../../assets/Grow-with-us-img/out-employability.webp";
import outcome3 from "../../assets/Grow-with-us-img/out-skills.webp";
import outcome4 from "../../assets/Grow-with-us-img/out-independence.webp";

const outcomes = [
  {
    image: outcome1,
    text: (
      <>
        Ability to <strong>earn income remotely</strong>
        <br />
        through freelancing or digital
        <br />
        business
      </>
    ),
  },
  {
    image: outcome2,
    text: (
      <>
        <strong>Improved employability</strong> in
        <br />
        technology and digital roles
      </>
    ),
  },
  {
    image: outcome3,
    text: (
      <>
        <strong>Real-world skills</strong> aligned with
        <br />
        current market demand
      </>
    ),
  },
  {
    image: outcome4,
    text: (
      <>
        <strong>Greater economic independence,</strong>
        <br />
        especially for women
      </>
    ),
  },
];

export default function GrowOutcomes() {
  return (
    <section className="growoutcomes-section">

      <div className="growoutcomes-container">

        {/* =================================================
            TITLE
        ================================================= */}

        <h2 className="growoutcomes-title">
          PROGRAM OUTCOMES
        </h2>


        {/* =================================================
            OUTCOMES GRID
        ================================================= */}

        <div className="growoutcomes-grid">

          {outcomes.map((outcome, index) => (
            <div
              className="growoutcomes-card"
              key={index}
            >

              {/* IMAGE */}

              <div className="growoutcomes-image">
                <img
                  src={outcome.image}
                  alt={`Program outcome ${index + 1}`}
                />
              </div>


              {/* TEXT CARD */}

              <div className="growoutcomes-content">
                <p className="growoutcomes-text">
                  {outcome.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}