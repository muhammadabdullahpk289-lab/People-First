import React, { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

import "./RecommendedArticle.css";

import articleImage1 from "../../assets/ideas-lab-img/article-1.webp";
import articleImage2 from "../../assets/ideas-lab-img/article-2.webp";
import articleImage3 from "../../assets/ideas-lab-img/article-3.webp";

const RecommendedArticles = () => {
  const sectionRef = useRef(null);

  const [percentage1, setPercentage1] = useState(0);
  const [year1, setYear1] = useState(0);

  const [percentage2, setPercentage2] = useState(0);
  const [performance2, setPerformance2] = useState(0);

  const [percentage3, setPercentage3] = useState(0);
  const [year3, setYear3] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let animationStarted = false;

    const animateNumber = (from, to, duration, setter) => {
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;

        const progress = Math.min(elapsed / duration, 1);

        const easeOut = 1 - Math.pow(1 - progress, 3);

        const value = Math.floor(
          from + (to - from) * easeOut
        );

        setter(value);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          setter(to);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting && !animationStarted) {
          animationStarted = true;

          // ARTICLE 1
          animateNumber(
            0,
            80,
            1600,
            setPercentage1
          );

          animateNumber(
            0,
            2025,
            2000,
            setYear1
          );

          // ARTICLE 2
          animateNumber(
            0,
            27,
            1400,
            setPercentage2
          );

          animateNumber(
            0,
            80,
            1600,
            setPerformance2
          );

          // ARTICLE 3
          animateNumber(
            0,
            80,
            1600,
            setPercentage3
          );

          animateNumber(
            0,
            2025,
            2000,
            setYear3
          );
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlay = (name) => {
    console.log(`${name} video playing`);
  };

  return (
    <section
      ref={sectionRef}
      className="recommended-articles"
    >
      <div className="recommended-articles-container">

        {/* =================================================
            TITLE
        ================================================= */}

        <h2 className="recommended-title">
          Recommended Article
        </h2>


        {/* =================================================
            ARTICLE 1
        ================================================= */}

        <article className="article-row article-row-1">

          <div className="article-text">

            <h3>
              Reasons Pakistani Manufacturers
              <br />
              Should Start Selling Online
            </h3>

            <p>
              The strategy is the key to grow your business
              through online
              <br className="desktop-break" />
              marketing
            </p>

            <div className="article-stat">

              <span>
                {percentage1}%
              </span>

              <p>
                Beneficial
                <br />
                Marketing tips
              </p>

            </div>

          </div>


          <div className="article-image-wrapper">

            <div className="article-image">

              <img
                src={articleImage1}
                alt="Marketing Article"
              />

              <div className="article-overlay" />

              <button
                className="article-play"
                type="button"
                onClick={() => handlePlay("article 1")}
              >
                <Play
                  fill="currentColor"
                  size={22}
                />
              </button>

            </div>


            <div className="article-floating-card">

              <strong>
                {year1}
              </strong>

              <span>
                MARKETING
                <br />
                TIPS
              </span>

            </div>

          </div>

        </article>


        {/* =================================================
            ARTICLE 2
        ================================================= */}

        <article className="article-row article-row-2">

          <div className="article-image-wrapper">

            <div className="article-image">

              <img
                src={articleImage2}
                alt="Business Interview"
              />

              <div className="article-overlay" />

              <button
                className="article-play"
                type="button"
                onClick={() => handlePlay("article 2")}
              >
                <Play
                  fill="currentColor"
                  size={22}
                />
              </button>

            </div>


            <div className="article-floating-card">

              <strong>
                {percentage2}%
              </strong>

              <span>
                Productivity increase
                <br />
                on average
              </span>

            </div>

          </div>


          <div className="article-text">

            <h3>
              How to Digitize Your Business
              <br />
              Without a Big Budget
            </h3>

            <p>
              We are strategy consultants with startup
              strategies and help promote and sell your
              products, including helping marketing.
            </p>

            <div className="article-stat">

              <span>
                {performance2}%
              </span>

              <p>
                Increased
                <br />
                Performance Rate
              </p>

            </div>

          </div>

        </article>


        {/* =================================================
            ARTICLE 3
        ================================================= */}

        <article className="article-row article-row-3">

          <div className="article-text">

            <h3>
              Building Market-Ready Skills That
              <br />
              Employers Actually Hire For
            </h3>

            <p>
              Practical, income-generating training built
              around what the market needs right now —
              not what it needed five years ago.
            </p>

            <div className="article-stat">

              <span>
                {percentage3}%
              </span>

              <p>
                Beneficial
                <br />
                Marketing tips
              </p>

            </div>

          </div>


          <div className="article-image-wrapper">

            <div className="article-image">

              <img
                src={articleImage3}
                alt="Business Event"
              />

              <div className="article-overlay" />

              <button
                className="article-play"
                type="button"
                onClick={() => handlePlay("article 3")}
              >
                <Play
                  fill="currentColor"
                  size={22}
                />
              </button>

            </div>


            <div className="article-floating-card">

              <strong>
                {year3}
              </strong>

              <span>
                MARKETING
                <br />
                TIPS
              </span>

            </div>

          </div>

        </article>

      </div>
    </section>
  );
};

export default RecommendedArticles;