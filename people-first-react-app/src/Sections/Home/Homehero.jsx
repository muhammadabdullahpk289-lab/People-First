import React from "react";
import { Link } from "react-router-dom";
import "./Homehero.css";

import logo from "../../assets/Home-img/logo.svg";
import pattern from "../../assets/Home-img/pattern.png";

const HomeHero = () => {
  return (
    <section className="hero">

      {/* Logo */}
      <Link to="/ActivePage">
        <div className="logo">
          <img src={logo} alt="People First logo mark" />
        </div>
      </Link>

      {/* Headline content */}
      <div className="content">
        <h1>
          <span className="why">Why</span>{" "}
          <span className="rest">Struggle Alone?</span>
        </h1>

        <p className="subtext">
          Isolation Breeds Failure. People First Rewrites the Script.
          Together We Progress, Together We Win. Across your physical, mind
          &amp; market journey
        </p>

        <p className="tagline">
          <span className="learn">Learn</span>
          <span className="x">x</span>
          <span className="grow">Grow</span>
          <span className="x">x</span>
          <span className="lead">Lead</span>
        </p>
      </div>

      {/* Bottom full-width pattern */}
      <div className="hero-pattern">
        <img src={pattern} alt="" />
      </div>

      {/* CTAs */}
      <div className="cta-row">
        <button className="btn btn-primary">
          Partner with Us
        </button>

        <button className="btn btn-secondary">
          Join Training Program
        </button>
      </div>

    </section>
  );
};

export default HomeHero;