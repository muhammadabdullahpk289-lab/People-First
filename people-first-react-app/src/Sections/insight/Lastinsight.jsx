import React from "react";
import "./LastInsight.css";
import img from '../../assets/insight-img/ep-itcn.webp'

/* =====================================================
   CONTENT — edit this to change what the card shows
===================================================== */

const DATA = {
  image: img, // <-- put your image here
  imageAlt: "People First team on stage at ITCN Asia",
  badge: "Largest digital\nmarketing conference",
  videoHref: "/podcasts", // link the play button should open, if any
  title:
    "Podcast 1 : world will know about the magic of digital world & its achievements.",
  columns: [
    {
      heading: "50+ clients",
      description:
        "Search Digital Agency New York, Information from Trusted Internet. Explore the Best Info Now.",
    },
    {
      heading: "Concept",
      description:
        "For more than 50 years, global stage for innovation. And the all-digital CES 2022 continued to be.",
    },
  ],
};

/* =====================================================
   LAST INSIGHT CARD
===================================================== */

export default function LastInsight() {
  return (
    <section className="last-insight">
      <article className="last-insight__card">
        {/* =============================================
            MEDIA
        ============================================= */}
        <div className="last-insight__media">
          <img
            className="last-insight__image"
            src={DATA.image}
            alt={DATA.imageAlt}
          />

          <a
            href={DATA.videoHref}
            className="last-insight__play"
            aria-label="Play video"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </a>

          <div className="last-insight__badge">
            {DATA.badge.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>

        {/* =============================================
            CONTENT
        ============================================= */}
        <div className="last-insight__content">
          <h3 className="last-insight__title">{DATA.title}</h3>

          <div className="last-insight__columns">
            {DATA.columns.map((col) => (
              <div className="last-insight__column" key={col.heading}>
                <h4 className="last-insight__column-heading">{col.heading}</h4>
                <p className="last-insight__column-description">
                  {col.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}