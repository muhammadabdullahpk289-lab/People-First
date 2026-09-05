import React from "react";
import "./TheStory.css";
import img1 from '../../assets/Home-img/blob3.png'
import img2 from '../../assets/Home-img/blob4.png'
import img3 from '../../assets/Home-img/left-plane.png'
import img4 from '../../assets/Home-img/right-plane.png'
import img5 from '../../assets/Home-img/founder-cliff.webp'
import img6 from '../../assets/Home-img/logo-light.webp'

const blobTeal = img1;
const blobPurple = img2;
const shapeLeft = img3;
const shapeRight = img4;
const mainPhoto = img5;
const logoIcon = img6;

const TheStory = () => {
  return (
    <section className="story">
      <img className="st-blob st-blob-left" src={blobTeal} alt="" />
      <img className="st-blob st-blob-right" src={blobPurple} alt="" />
      <img className="st-shape st-shape-left" src={shapeLeft} alt="" />
      <img className="st-shape st-shape-right" src={shapeRight} alt="" />

      <div className="st-inner">
        {/* Left column */}
        <div className="st-left">
          <h2 className="st-title">The Story</h2>
          <p className="st-subtitle">Every Movement Begins with a Question.</p>

          <div className="st-quote-box">
            <span className="st-quote-mark">&ldquo;</span>
            <p>
              Why do so many talented people fail, even when they have
              passion and good intentions?
            </p>
          </div>

          <p className="st-paragraph">
            After more than 25 years working closely with entrepreneurs,
            students, farmers, and investors across diverse sectors, our
            founder, Rai Salahuddin Ahmad, realized that regardless of the
            industry, individuals consistently confront the same fundamental
            challenge: <strong>People are struggling alone.</strong>
          </p>

          <ul className="st-list">
            <li>
              <svg viewBox="0 0 24 24" className="st-list-icon">
                <circle cx="12" cy="8" r="4" fill="currentColor" />
                <path
                  fill="currentColor"
                  d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8v1H4v-1z"
                />
              </svg>
              <span>
                A passionate young person <strong>lacks guidance.</strong>
              </span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="st-list-icon">
                <path
                  fill="currentColor"
                  d="M9 4h6a2 2 0 0 1 2 2v1h3a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1h3V6a2 2 0 0 1 2-2zm0 3h6V6H9v1z"
                />
              </svg>
              <span>
                A skilled professional lacks a{" "}
                <strong>Platform To Grow</strong>
              </span>
            </li>
            <li>
              <svg viewBox="0 0 24 24" className="st-list-icon">
                <circle cx="6" cy="6" r="2.4" fill="currentColor" />
                <circle cx="18" cy="6" r="2.4" fill="currentColor" />
                <circle cx="12" cy="14" r="2.6" fill="currentColor" />
                <circle cx="6" cy="19" r="2" fill="currentColor" />
                <circle cx="18" cy="19" r="2" fill="currentColor" />
              </svg>
              <span>
                A business owner lacks the <strong>Network to scale.</strong>
              </span>
            </li>
          </ul>

          <p className="st-closing">
            Talent is everywhere, but the{" "}
            <strong>ecosystem to sustain it is missing.</strong>
          </p>
        </div>

        {/* Right column — photo + overlapping conclusion circle */}
        <div className="st-right">
          <div className="st-photo-wrap">
            <img className="st-photo" src={mainPhoto} alt="Founder standing on a cliff overlooking mountains" />
          </div>

          <div className="st-conclusion">
            <img className="st-conclusion-logo" src={logoIcon} alt="People First" />
            <p className="st-conclusion-title">was born out of a simple conclusion:</p>
            <p className="st-conclusion-sub">
              People don&apos;t just need isolated education, funding, or jobs
            </p>
            <p className="st-conclusion-text">
              They need connections, opportunities, mentorship, and a unified
              platform where they can discover themselves, perform at their
              highest level, and build meaningful lives.
            </p>
            <span className="st-conclusion-mark">&rdquo;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheStory;