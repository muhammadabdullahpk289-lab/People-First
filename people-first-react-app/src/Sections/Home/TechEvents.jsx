import React, { useEffect, useState } from "react";
import "./TechEvents.css";

import cardImage from "../../assets/Home-img/feature2.webp";
import coneImage from "../../assets/Home-img/right-plane.png";

const TechEvents = () => {
  // Numbers ki starting value
  const [management, setManagement] = useState(0);
  const [productivity, setProductivity] = useState(0);

  useEffect(() => {
    const duration = 1800; // Animation 1.8 seconds

    let startTime = null;

    const animateNumbers = (currentTime) => {
      if (!startTime) startTime = currentTime;

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setManagement(Math.floor(30 * easeOut));
      setProductivity(Math.floor(45 * easeOut));

      if (progress < 1) {
        requestAnimationFrame(animateNumbers);
      }
    };

    requestAnimationFrame(animateNumbers);
  }, []);

  return (
    <section className="tech-events">

      <div className="tech-events-container">

        {/* =====================================================
            LEFT — IMAGE CARD
        ===================================================== */}

        <div className="tech-events-media">

          {/* Cone image */}
          <img
            className="tech-events-cone"
            src={coneImage}
            alt=""
          />

          {/* Main image */}
          <div className="tech-events-image-wrap">

            <img
              className="tech-events-image"
              src={cardImage}
              alt="Tech Events Management"
            />

            {/* Play button */}
            <button
              className="tech-events-play"
              aria-label="Play video"
            >
              <span className="tech-events-play-icon"></span>
            </button>

          </div>

          {/* =====================================================
              45% BADGE — ANIMATED
          ===================================================== */}

          <div className="tech-events-badge">

            <span className="tech-events-badge-percent">
              {productivity}%
            </span>

            <span className="tech-events-badge-text">
              Productivity events
              <br />
              all over Pakistan
            </span>

          </div>

        </div>


        {/* =====================================================
            RIGHT — CONTENT
        ===================================================== */}

        <div className="tech-events-content">

          <h2>
            Tech Events
            <br />
            Management.
          </h2>

          <p className="tech-events-description">
            We are strategy consultants who work with
            startup strategies and help promote and
            sell your products, including helping
            marketing.
          </p>

          {/* =====================================================
              30% STAT — ANIMATED
          ===================================================== */}

          <div className="tech-events-stat">

            <span className="tech-events-stat-percent">
              {management}%
            </span>

            <span className="tech-events-stat-label">
              management skills
            </span>

          </div>


          {/* =====================================================
              TAGS
          ===================================================== */}

          <ul className="tech-events-tags">

            <li>
              <span className="tech-events-tag-icon"></span>
              Seminars
            </li>

            <li>
              <span className="tech-events-tag-icon"></span>
              Round Talks
            </li>

            <li>
              <span className="tech-events-tag-icon"></span>
              Table Talks
            </li>

            <li>
              <span className="tech-events-tag-icon"></span>
              Conferences
            </li>

            <li>
              <span className="tech-events-tag-icon"></span>
              Tech Talks
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
};

export default TechEvents;