import React from "react";
import logoImg from "../../assets/Grow-with-us-img/logo.svg";
import micImg from "../../assets/Grow-with-us-img/hero-desk.webp";
import guestImg from "../../assets/Grow-with-us-img/why-photo.webp";
import "./GrowHero.css";

export default function GrowHero({ imageSrc }) {
  return (
    <div className="growhero">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="growhero-section">
        <Link to="/ActivePage">
        <div className="growhero-logo">
          <img
            src={logoImg}
            alt="People First"
            className="growhero-logo-img"
          />
        </div>
         </Link>
        <div className="growhero-content">

          <div className="growhero-mic-wrap">
            <img
              src={micImg}
              alt="Microphone"
              className="growhero-mic-img"
            />
          </div>

          <div className="growhero-text">

            <h1 className="growhero-heading">
             <em> Learn</em> Skills. <em> Earn</em> Independently. <em>Build</em> Your Future.{" "}
            </h1>

            <p className="growhero-description">
             <em>People First </em> offers practical, income-generating skills training for youth and women across Pakistan. Our programs are designed around what the market actually needs so graduates can earn from day one.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          GROW HERO VALUE SECTION
      ===================================================== */}

      <section className="growhero-value-section">

        <div className="growhero-value-inner">

          <div className="growhero-value-image">
            <img
              src={imageSrc || guestImg}
              alt="Podcast guest"
            />
          </div>

          <div className="growhero-value-content">

            <h2 className="growhero-value-title">
              Why These Programs Exist
            </h2>

            <p className="growhero-value-quote">
              Pakistan has millions of talented young people and women who lack access to the opportunities. People First bridges the gap between aspiration and opportunity by delivering training that is practical, affordable, and directly connected to real income pathways.
            </p>

            <div className="growhero-value-actions">

              <button className="growhero-btn growhero-btn-primary">
                Partner with Us
              </button>

              <button className="growhero-btn growhero-btn-secondary">
                Join Training Program
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}