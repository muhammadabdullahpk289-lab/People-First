import React, { useState } from "react";
import "./OurPodcasts.css";
import img1 from '../../assets/Podcast-img/ep-itcn.webp'
import img2 from '../../assets/Podcast-img/ep-press.webp'
import img3 from '../../assets/Podcast-img/ep-5g.webp'

const podcasts = [
  {
    id: 1,
    title: "Podcast 1 : world will know about the magic of digital world & its achievements.",
    labelText: "Largest digital marketing conference",
    labelColor: "#2ecc9a",
    image: img1,
  },
  {
    id: 2,
    title: "Podcast 2 : world will know about the magic of digital world & its achievements.",
    labelText: "Largest digital marketing conference",
    labelColor: "#e91e63",
    image: img2,
  },
  {
    id: 3,
    title: "Podcast 3: world will know about the magic of digital world & its achievements.",
    labelText: "Largest digital marketing conference",
    labelColor: "#5e3aa8",
    image: img3,
  },
];

export default function OurPodcasts() {
  const [page, setPage] = useState(1);
  const totalPages = 4;

  const goToPage = (p) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  return (
    <section className="podcasts-section">
      <h2 className="podcasts-heading">OUR PODCASTS</h2>

      {page === 1 ? (
        <div className="podcasts-list">
          {podcasts.map((podcast) => (
            <div className="podcast-card" key={podcast.id}>
              <div className="podcast-media">
                {/* Replace src below with your own image path */}
                <img src={podcast.image} alt={podcast.title} />
                <div className="play-button">
                  <svg viewBox="0 0 24 24" width="22" height="22">
                    <polygon points="6,4 20,12 6,20" fill="#5e3aa8" />
                  </svg>
                </div>
                <div
                  className="podcast-label"
                  style={{ background: podcast.labelColor}}
                >
                  {podcast.labelText}
                </div>
              </div>

              <div className="podcast-info">
                <h3>{podcast.title}</h3>
                <div className="podcast-details">
                  <div className="detail-block">
                    <h4>50+ clients</h4>
                    <p>
                      Search Digital Agency New York, Information from
                      Trusted Internet. Explore the Best Info Now.
                    </p>
                  </div>
                  <div className="detail-block">
                    <h4>Concept</h4>
                    <p>
                      For more than 50 years, global stage for innovation.
                      And the all-digital CES 2022 continued to be.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="podcasts-placeholder">
          <p>More episodes are on the way.</p>
        </div>
      )}

      <div className="pagination-row">
        <div className="pagination-buttons">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className={`page-btn ${page === num ? "active" : ""}`}
              onClick={() => goToPage(num)}
            >
              {num}
            </button>
          ))}
          <button
            className="page-btn next-btn"
            onClick={() => goToPage(page + 1)}
          >
            Next &gt;
          </button>
        </div>

        <button className="view-all-btn">View All</button>
      </div>
    </section>
  );
}