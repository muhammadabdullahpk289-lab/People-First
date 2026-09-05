import React from "react";
import "./GrowArea.css";
import logo from '../../assets/Grow-with-us-img/plane-teal.webp'
import img1 from '../../assets/Grow-with-us-img/prog-freelance.webp'
import img2 from '../../assets/Grow-with-us-img/prog-ecom.webp'
import img3 from '../../assets/Grow-with-us-img/prog-social.webp'
import img4 from '../../assets/Grow-with-us-img/prog-ai.webp'
import img5 from '../../assets/Grow-with-us-img/prog-comms.webp'

const GrowArea = () => {
  const programAreas = [
    {
      title: (
        <>
          Freelancing &<br />
          Remote Work
        </>
      ),
      description: (
        <>
          How to earn online using global
          <br />
          platforms.
        </>
      ),
      image: img1,
      className: "growarea-card-1",
    },

    {
      title: (
        <>
          E commerce
          <br />
          Operations
        </>
      ),
      description: (
        <>
          How to run a successful online
          <br />
          store.
        </>
      ),
      image: img2,
      className: "growarea-card-2",
    },

    {
      title: (
        <>
          Social Media
          <br />
          Training
        </>
      ),
      description: (
        <>
          Content Creation, Social media,
          <br />
          SEO & Advertising
        </>
      ),
      image: img3,
      className: "growarea-card-3",
    },

    {
      title: (
        <>
          AI Tools for
          <br />
          Work
        </>
      ),
      description: (
        <>
          Using AI to increase productivity
          <br />
          & Value
        </>
      ),
      image: img4,
      className: "growarea-card-4",
    },

    {
      title: (
        <>
          Business
          <br />
          Communication &
          <br />
          Professional Skills
        </>
      ),
      description: (
        <>
          Work ready Digital
          <br />
          Communication
        </>
      ),
      image: img5,
      className: "growarea-card-5",
    },
  ];

  return (
    <section className="growarea-section">

      {/* TOP LEFT LOGO */}
      <img
        src={logo}
        alt="Grow Area Logo"
        className="growarea-logo"
      />

      {/* HEADING */}
      <h2 className="growarea-heading">
        PROGRAM AREAS
      </h2>

      {/* CARDS */}
      <div className="growarea-cards">

        {programAreas.map((area, index) => (
          <div
            className={`growarea-card ${area.className}`}
            key={index}
          >
            {/* TEXT */}
            <div className="growarea-card-content">

              <h3 className="growarea-card-title">
                {area.title}
              </h3>

              <p className="growarea-card-description">
                {area.description}
              </p>

            </div>

            {/* IMAGE */}
            <div className="growarea-image-wrapper">
              <img
                src={area.image}
                alt=""
                className="growarea-card-image"
              />
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default GrowArea;