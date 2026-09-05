import React, { useEffect, useState } from "react";
import "./AboutKey.css";

// =====================================================
// PARTNER LOGOS
// =====================================================

import kot from "../../assets/aboutus-img/kot-logo.webp";
import nust from "../../assets/aboutus-img/nu-logo.webp";
import fintech from "../../assets/aboutus-img/Fintech-Logo.webp";
import skillx from "../../assets/aboutus-img/skiilx-logo.webp";


// =====================================================
// LOGO ARRAYS
// =====================================================

const firstRow = [
  kot,
  nust,
  fintech,
  skillx,
  kot,
  nust,
  fintech,
  skillx,
];

const secondRow = [
  skillx,
  fintech,
  nust,
  kot,
  skillx,
  fintech,
  nust,
  kot,
];


// =====================================================
// ANIMATED NUMBER COMPONENT
// =====================================================

function AnimatedNumber({ target, duration = 1800 }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }

      const progress = Math.min(
        (currentTime - startTime) / duration,
        1
      );

      // Smooth ease-out animation
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentNumber = Math.floor(
        easeOut * target
      );

      setNumber(currentNumber);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setNumber(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [target, duration]);

  return <>{number}+</>;
}


// =====================================================
// ABOUT KEY
// =====================================================

function AboutKey() {
  return (
    <section className="about-key">

      {/* =====================================================
          TOP CONTENT
      ===================================================== */}

      <div className="about-key-top">

        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <div className="about-key-intro">

          <span className="about-key-badge">
            TRUST &amp; CREDIBILITY
          </span>

          <h2>
            KEY <span>STATS</span>
          </h2>

          <p>
            Our client retention rate is among the highest in
            the industry, reflecting long-term partnerships
            built on consistent execution.
          </p>

        </div>


        {/* =====================================================
            RIGHT SIDE STATS
        ===================================================== */}

        <div className="about-key-stats">

          {/* =====================================================
              BIG STAT
          ===================================================== */}

          <div className="about-stat-big">

            <strong>
              <AnimatedNumber target={100} duration={2000} />
            </strong>

            <div className="about-stat-label">
              <span>BRANDS</span>
              <small>SUPPORTED</small>
            </div>

          </div>


          {/* =====================================================
              SMALL STATS
          ===================================================== */}

          <div className="about-stat-small-wrapper">

            {/* 25+ */}

            <div className="about-stat-small">

              <strong>
                <AnimatedNumber target={25} duration={1500} />
              </strong>

              <div className="about-stat-label">
                <span>YEARS</span>
                <small>IN BUSINESS</small>
              </div>

            </div>


            {/* 20+ */}

            <div className="about-stat-small">

              <strong>
                <AnimatedNumber target={20} duration={1400} />
              </strong>

              <div className="about-stat-label">
                <span>CERTIFIED</span>
                <small>EXPERTS</small>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          STRATEGIC PARTNERS HEADING
      ===================================================== */}

      <div className="about-key-partners-heading">

        <h2>
          OUR STRATEGIC PARTNERS
        </h2>

      </div>


      {/* =====================================================
          PARTNER LOGOS
      ===================================================== */}

      <div className="about-key-marquee">

        {/* =====================================================
            ROW 1
        ===================================================== */}

        <div className="about-key-marquee-row">

          <div className="about-key-track about-key-track-right">

            {firstRow.map((logo, index) => (
              <div
                className="about-key-logo"
                key={`first-${index}`}
              >
                <img
                  src={logo}
                  alt="Strategic Partner"
                />
              </div>
            ))}

          </div>

        </div>


        {/* =====================================================
            ROW 2
        ===================================================== */}

        <div className="about-key-marquee-row">

          <div className="about-key-track about-key-track-left">

            {secondRow.map((logo, index) => (
              <div
                className="about-key-logo"
                key={`second-${index}`}
              >
                <img
                  src={logo}
                  alt="Strategic Partner"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutKey;