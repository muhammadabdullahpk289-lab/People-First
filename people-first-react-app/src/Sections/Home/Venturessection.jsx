import React from "react";
import "./Venturessection.css";
import img1 from '../../assets/Home-img/merchanity.webp'
import img2 from '../../assets/Home-img/insights.webp'
import img3 from '../../assets/Home-img/abaad.webp'
import img4 from '../../assets/Home-img/kissan-veer.webp'

// Replace each logo path below with your actual image file path.
// Set logo: null for cards that should show an empty grey placeholder.
const ventures = [
  { name: "Merchanity", sub: "Digital Commerce Solutions", logo: img1, accent: true },
  { name: "Insights", sub: "Media & IT Intelligence", logo: img2, accent: true },
  { name: "SME & Consumer", sub: "Media & IT Intelligence", logo: null, accent: true },
  { name: "Health care", sub: "Media & IT Intelligence", logo: null, accent: true },
  { name: "Technology", sub: "Media & IT Intelligence", logo: null },
  { name: "Abaad.pk", sub: "Smart Property Solutions", logo: img3 },
  { name: "Kissan Veer", sub: "Empowering Agriculture", logo: img4 },
  { name: "Renewable Energy", sub: "Media & IT Intelligence", logo: null, accent: true },
  { name: "Knowledge", sub: "Media & IT Intelligence", logo: null, select: true },
];

function Shard({ flip }) {
  return (
    <svg viewBox="0 0 90 190" fill="none" className={`shard ${flip ? "right" : "left"}`}>
      <path d="M10 190 L38 10 L46 60 Z" fill="#2fa89b" />
      <path d="M40 190 L58 30 L70 90 Z" fill="#4a5fb0" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Card({ v }) {
  const cardClass = ["card", v.accent ? "accent-left" : "", v.select ? "accent-select" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cardClass}>
      <div className={`card-logo ${v.logo ? "" : "placeholder"}`}>
        {v.logo && <img src={v.logo} alt={`${v.name} logo`} />}
      </div>

      <p className="card-title">{v.name}</p>
      <p className="card-sub">{v.sub}</p>

      <a href="#" className="explore">
        Explore Website <ArrowIcon />
      </a>
    </div>
  );
}

export default function VenturesSection() {
  return (
    <div className="ventures-wrapper">
      <section className="hero">
        <Shard />
        <Shard flip />

        <p className="hero-text">
          We shape <strong>capable</strong>, <strong>confident</strong>, and{" "}
          <strong>market-ready</strong> individuals through comprehensive
          personal and professional growth. Through our core, joint,
          affiliated, and genesis ventures
        </p>
      </section>

      <div className="grid-wrap">
        <div className="grid">
          {ventures.map((v) => (
            <Card key={v.name} v={v} />
          ))}
        </div>
      </div>
    </div>
  );
}