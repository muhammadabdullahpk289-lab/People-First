import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import logoImg from "../../assets/Podcast-img/logo.svg";
import micImg from "../../assets/Podcast-img/mic.webp";
import guestImg from "../../assets/Podcast-img/value-guest.webp";
import "./Podcasthero.css";

export default function PodcastHero({ imageSrc }) {
  return (
    <div className="podcast-hero">
      {/* ---------- Hero Section ---------- */}
      <section className="hero-section">
        <Link to="/ActivePage">
        <div className="hero-logo">
          <img src={logoImg} alt="People First" className="hero-logo-img" />
        </div>
        </Link>
        <div className="hero-content">
          <div className="hero-mic-wrap">
            <img src={micImg} alt="Microphone" className="hero-mic-img" />
          </div>

          <div className="hero-text">
            <h1 className="hero-heading">
              Real <em>Conversations.</em> Real <em>Insights.</em> Real{" "}
              <em>Growth.</em>
            </h1>
            <p className="hero-description">
              The People First Podcast brings together entrepreneurs,
              industry leaders, technology experts, and innovators to share
              knowledge, experience, and honest perspectives on building
              successful businesses in Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Podcast Value Section ---------- */}
      <section className="podcast-value-section">
        <div className="podcast-value-inner">
          <div className="podcast-value-image">
            <img src={imageSrc || guestImg} alt="Podcast guest" />
          </div>

          <div className="podcast-value-content">
            <h2 className="podcast-value-title">Podcast Value</h2>
            <p className="podcast-value-quote">
              "Whether you're a business owner navigating digital change, a
              startup founder seeking guidance, or a professional looking to
              stay ahead Tech Insights Podcast delivers practical knowledge
              from people who've done it."
            </p>

            <div className="podcast-value-actions">
              <button className="btn btn-primary">Partner with Us</button>
              <button className="btn btn-secondary">
                Join Training Program
              </button>
             
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}