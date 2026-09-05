import React from "react";
import "./PodcastAnalytics.css";
import analics from '../../assets/Podcast-img/analytics.webp'

export default function PodcastAnalytics() {
  return (
    <div className="analytics-section">
      <div className="analytics-text">
        <h1>ADVANCED PODCAST ANALYTICS</h1>
        <p>
          Track your podcast's downloads with advanced podcast statistics.
          Filter by podcast episode, device type, date, podcast app, or
          location. <strong>Stats are IAB certified, and advanced analytics
          are included with all pricing plans.</strong>
        </p>
      </div>

      <div className="analytics-image">
        {/* Replace src below with your own image path */}
        <img src={analics} alt="Podcast analytics devices" />
      </div>
    </div>
  );
}