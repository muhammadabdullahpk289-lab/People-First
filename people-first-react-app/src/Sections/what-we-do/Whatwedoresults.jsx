import React from "react";
import "./Whatwedoresults.css";
import img1 from '../../assets/what-we-do-img/icon-core.webp'
import img2 from '../../assets/what-we-do-img/icon-joint.webp'
import img3 from '../../assets/what-we-do-img/icon-affiliated.webp'
import img4 from '../../assets/what-we-do-img/icon-genesis.webp'
import img5 from '../../assets/what-we-do-img/result-visibility.webp'
import img6 from '../../assets/what-we-do-img/result-dependency.webp'
import img7 from '../../assets/what-we-do-img/result-margins.webp'
import img8 from '../../assets/what-we-do-img/result-operations.webp'
import img9 from '../../assets/what-we-do-img/result-growth.webp'
import img10 from '../../assets/what-we-do-img/impact-economic.webp'
import img11 from '../../assets/what-we-do-img/impact-youth.webp'
import img12 from '../../assets/what-we-do-img/impact-women.webp'
import img13 from '../../assets/what-we-do-img/impact-industry.webp'
import img14 from '../../assets/what-we-do-img/impact-digital.webp'



const ventures = [
  {
    key: "core",
    title: "Core Ventures",
    desc: "Built and operated by People First.",
    color: "purple",
    image: img1, // <-- IMAGE PATH
  },
  {
    key: "joint",
    title: "Joint Ventures",
    desc: "Partnered for greater impact",
    color: "teal",
    image: img2, // <-- IMAGE PATH
  },
  {
    key: "affiliated",
    title: "Affiliated Ventures",
    desc: "Groomed and aligned under People First",
    color: "purple",
    image: img3, // <-- IMAGE PATH
  },
  {
    key: "genesis",
    title: "Genesis Ventures",
    desc: "Co-created by people First",
    color: "red",
    image: img4, // <-- IMAGE PATH
  },
];

const results = [
  {
    key: "visibility",
    title: "Increased online visibility and inbound customer enquiries",
    image: img5, // <-- IMAGE PATH
  },
  {
    key: "margins",
    title: "Higher profit margins through direct sales channels",
    image: img6, // <-- IMAGE PATH
  },
  {
    key: "growth",
    title: "Sustainable digital growth",
    image: img7, // <-- IMAGE PATH
  },
  {
    key: "intermediaries",
    title: "Reduced dependency on intermediaries",
    image: img8, // <-- IMAGE PATH
  },
  {
    key: "efficient",
    title: "Faster, more efficient operations",
    image: img9, // <-- IMAGE PATH
  },
];

const impactAreas = [
  {
    key: "economic",
    title: "Economic Empowerment",
    desc: "Removing middlemen and enabling direct commerce so producers keep more of what they earn.",
    image: img10, // <-- IMAGE PATH
  },
  {
    key: "youth",
    title: "Youth Employment",
    desc: "Providing practical digital skills that create real income pathways for Pakistan's young generation.",
    image: img11, // <-- IMAGE PATH
  },
  {
    key: "women",
    title: "Women's Financial Independence",
    desc: "Training programs and remote work opportunities enabling women to earn on their own terms.",
    image: img12, // <-- IMAGE PATH
  },
  {
    key: "academia",
    title: "Industry Academia Bridge",
    desc: "Connecting educational institutions with industry needs to reduce the skills gap.",
    image: img13, // <-- IMAGE PATH
  },
  {
    key: "digital",
    title: "Digital Inclusion",
    desc: "Making technology and digital tools accessible to businesses that have traditionally been left behind",
    image: img14, // <-- IMAGE PATH
  },
];

export default function WhatWeDoResults() {
  return (
    <section className="wwdr">
      {/* ---------------- VENTURES ---------------- */}
      <div className="wwdr-ventures">
        <div className="wwdr-ventures-grid">
          {ventures.map((v) => (
            <div
              key={v.key}
              className={`wwdr-venture-card wwdr-venture-card--${v.color}`}
            >
              <img src={v.image} alt={v.title} className="wwdr-venture-icon" />
              <h3
                className={`wwdr-venture-title wwdr-venture-title--${v.color}`}
              >
                {v.title.toUpperCase()}
              </h3>
              <p className="wwdr-venture-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- RESULTS CLIENTS CAN EXPECT ---------------- */}
      <div className="wwdr-results">
        <h2 className="wwdr-results-heading">Results Clients Can Expect</h2>
        <div className="wwdr-results-grid">
          {results.map((r) => (
            <div key={r.key} className="wwdr-result-item">
              <img src={r.image} alt={r.title} className="wwdr-result-icon" />
              <p className="wwdr-result-title">{r.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ---------------- IMPACT FOCUS AREAS ---------------- */}
      <div className="wwdr-impact">
        <h2 className="wwdr-impact-heading">IMPACT FOCUS AREAS</h2>
        <div className="wwdr-impact-grid">
          {impactAreas.map((a) => (
            <div key={a.key} className="wwdr-impact-card">
              <div className="wwdr-impact-text">
                <h3 className="wwdr-impact-title">{a.title}</h3>
                <p className="wwdr-impact-desc">{a.desc}</p>
              </div>
              <img src={a.image} alt={a.title} className="wwdr-impact-icon" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}