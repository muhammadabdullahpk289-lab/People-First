import React, { useEffect, useRef, useState } from "react";
import "./Homework.css";
import img from '../../assets/Home-img/left-plane.png'
import image1 from '../../assets/Home-img/feature1.webp'

const shapeDecor = img;

/** Counts up from 0 to `value` once the element scrolls into view. */
const AnimatedPercent = ({ value, duration = 1400, className = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.round(eased * value));
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              setCount(value);
            }
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={className}>
      {count}%
    </span>
  );
};

const Homework = () => {
  const image = "/images/featured-work/podcast-market-strategy.jpg";
  const badge = { percent: 27, text: "have knowledge about market strategies." };
  const stat = { percent: 80, label: "Increased\nPerformance Rate" };

  return (
    <section className="homework">
      <div className="hw-header">
        <h2>Featured Work</h2>
        <p>Let&apos;s give you exceptional reasons to choose us.</p>
      </div>

      <div className="homework-card">
        {/* Media block (right side) */}
        <div className="hw-media">
          <img className="hw-shape-decor" src={shapeDecor} alt="" />
          <div className="hw-image-wrap">
            <img
              className="hw-image-thumb"
              src={image1}
              alt="Podcast: market strategy"
            />
            <button className="hw-play-btn" aria-label="Play video">
              <span className="hw-play-icon" />
            </button>
            <div className="hw-badge">
              <AnimatedPercent value={badge.percent} className="hw-badge-percent" />
              <span className="hw-badge-text">{badge.text}</span>
            </div>
          </div>
        </div>

        {/* Text block (left side) */}
        <div className="hw-content">
          <h3>Podcast: market strategy</h3>
          <p className="hw-paragraph">
            We are strategy consultants who work with startup strategies and
            help promote and sell your products, including helping marketing.
          </p>
          <div className="hw-stat">
            <AnimatedPercent value={stat.percent} className="hw-stat-percent" />
            <span className="hw-stat-label">
              {stat.label.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homework;