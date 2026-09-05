import React from "react";
import "./PodcastBanner.css";
import banner from '../../assets/Podcast-img/waveform.webp'

export default function PodcastBanner() {
  return (
    <div className="banner">
      <h1>STUDIO-QUALITY SOUND FOR EVERY PODCAST</h1>
      <p className="sub">
        Magic Mastering Will Remove Background Noise, Balance Levels, Remove
        Filler Words, And Help You Achieve Studio-Quality Sound. It's Like An
        Instagram Filter For Your Podcast Audio.
      </p>

      {/* Replace src below with your own image path */}
      <img
        className="banner-img"
        src= {banner}
        alt="Podcast sound illustration"
      />
    </div>
  );
}