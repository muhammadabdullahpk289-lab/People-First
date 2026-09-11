import React from "react";
import "./AboutHero.css";

// Apni actual image paths yahan replace kar dena
import logo from "../../assets/aboutus-img/logo.webp";
import founderImage from "../../assets/aboutus-img/founder.webp";
import wave from '../../assets/aboutus-img/10001.png'

const journeyCards = [
  {
    title: "LEARN",
    subtitle: "I want to build skills and opportunities",
    items: ["Students", "Young Professionals", "Beginners"],
    className: "learn-card",
    buttonClass: "learn-btn",
  },
  {
    title: "GROW",
    subtitle: "I want to scale my business & Career",
    items: ["Professionals", "Entrepreneurs", "Businesses"],
    className: "grow-card",
    buttonClass: "grow-btn",
  },
  {
    title: "LEAD",
    subtitle: "I want to build skills and opportunities",
    items: ["Founders", "Investors", "Institutions"],
    className: "lead-card",
    buttonClass: "lead-btn",
  },
];

const AboutHero = () => {
  return (
    <section className="about-hero">

      {/* =====================================================
          TOP HERO
      ===================================================== */}
      <div className="about-hero-top">

        {/* Logo */}
        <Link to="/ActivePage">
          <div className="about-logo">
            <img src={logo} alt="People First" />
          </div>
        </Link>

        {/* Left Content */}
        <div className="about-hero-content">

          <h1>
            Every Movement Begins
            <br />
            with a Question.
          </h1>

          <h2>
            “Why do so many talented people fail, even when they have
            <br className="desktop-break" />
            passion and good intentions?”
          </h2>

          <div className="about-description">

            <p>
              After more than 25 years working closely with entrepreneurs,
              students, farmers, and investors across diverse sectors, our
              founder, Rai Salahuddin Ahmad, realized that regardless of the
              industry, individuals consistently confront the same fundamental
              challenge: People are fighting alone.
            </p>

            <p>
              A passionate young person lacks guidance. A skilled professional
              lacks a platform to grow. A business owner lacks the network to
              scale. Talent is everywhere, but the ecosystem to sustain it is
              missing.
            </p>

            <p>
              People First was born out of a simple conclusion: People don't
              just need isolated education, funding, or jobs. They need
              connections, opportunities, mentorship, and a unified platform
              where they can discover themselves, perform at their highest
              level, and build meaningful lives.
            </p>

          </div>
        </div>

        {/* Right Founder Area */}
        <div className="about-founder">

          <div className="founder-image-wrapper">
            <img
              src={founderImage}
              alt="Founder"
              className="founder-image"
            />
          </div>

          <div className="founder-buttons">
            <button className="partner-btn">
              Partner with Us
            </button>

            <button className="training-btn">
              Join Training Program
            </button>
          </div>

        </div>

        {/* Say Hello */}
        <div className="say-hello">
          <span>Say Hello!</span>

          <span className="hello-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 11.5C20 15.6421 16.1944 19 11.5 19C10.4498 19 9.44398 18.8376 8.51906 18.5387L4 21L5.4048 17.1502C3.9086 15.7277 3 13.7445 3 11.5C3 7.35786 6.80558 4 11.5 4C16.1944 4 20 7.35786 20 11.5Z"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </div>

      </div>


      {/* =====================================================
          WAVES
      ===================================================== */}
      <div className="about-waves">
         <img src={wave} alt="" />
      </div>


      {/* =====================================================
          JOURNEY SECTION
      ===================================================== */}
      <div className="journey-section">

        <div className="journey-heading">

          <h2>WHERE ARE YOU IN YOUR JOURNEY</h2>

          <p>
            Choose your path and let us help you grow.
          </p>

        </div>


        <div className="journey-cards">

          {journeyCards.map((card, index) => (
            <div
              className={`journey-card ${card.className}`}
              key={index}
            >

              <h3>{card.title}</h3>

              <p className="journey-subtitle">
                {card.subtitle}
              </p>

              <ul>
                {card.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span className="check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className={`explore-btn ${card.buttonClass}`}>
                <span>Explore Path</span>
                <span className="arrow">→</span>
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default AboutHero;