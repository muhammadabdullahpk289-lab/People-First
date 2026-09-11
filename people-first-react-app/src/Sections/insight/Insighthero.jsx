import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Insighthero.css";

import logo from "../../assets/insight-img/logo.svg";

/* =====================================================
   SAME PENCIL ICON FOR ALL CARDS
===================================================== */

import pencilIcon from "../../assets/insight-img/hero-desk.webp";

/* =====================================================
   DIFFERENT MAIN IMAGE FOR EACH CARD
===================================================== */

import cardImage1 from "../../assets/insight-img/studio-audience.webp";
import cardImage2 from "../../assets/insight-img/article-2.webp";
import cardImage3 from "../../assets/insight-img/article-3.webp";


/* =====================================================
   CATEGORIES
===================================================== */

const CATEGORIES = [
  "All Category",
  "Digital Commerce",
  "Business Growth",
  "Skills & Training",
];


/* =====================================================
   INSIGHT CARDS
===================================================== */

const CARDS = [
  {
    id: 1,

    category: "Digital Commerce",

    /* SAME PENCIL ICON */
    icon: pencilIcon,

    title:
      "Reasons Pakistani Manufacturers Should Start Selling Online",

    description:
      "The strategy is the key to grow your business through online marketing",

    statTarget: 80,

    statLabel: [
      "Beneficial",
      "Marketing tips",
    ],

    badgeYear: "2025",

    badgeLabel: "MARKETING TIPS",

    /* CARD 1 IMAGE */
    image: cardImage1,

    imageAlt:
      "Audience attending a People First business and industry conference",
  },


  {
    id: 2,

    category: "Business Growth",

    /* SAME PENCIL ICON */
    icon: pencilIcon,

    title:
      "How to Digitize Your Business Without a Big Budget",

    description:
      "We are strategy consultants who work with startup strategies and help promote and sell your products, including helping marketing.",

    statTarget: 27,

    statLabel: [
      "PRODUCTIVITY",
      "INCREASE",
      "ON AVERAGE",
    ],

    badgeYear: "2025",

    badgeLabel: "BUSINESS GROWTH",

    /* CARD 2 IMAGE */
    image: cardImage2,

    imageAlt:
      "Exclusive interview with DG Punjab Information Technology Board",
  },


  {
    id: 3,

    category: "Skills & Training",

    /* SAME PENCIL ICON */
    icon: pencilIcon,

    title:
      "Building Market-Ready Skills That Employers Actually Hire For",

    description:
      "Practical, income-generating training built around what the market needs right now — not what it needed five years ago.",

    statTarget: 80,

    statLabel: [
      "Beneficial",
      "Marketing tips",
    ],

    badgeYear: "2025",

    badgeLabel: "MARKETING TIPS",

    /* CARD 3 IMAGE */
    image: cardImage3,

    imageAlt:
      "Lahore Chamber of Commerce & Industry group photo",
  },
];


/* =====================================================
   INSIGHTS PAGE
===================================================== */

export default function InsightsPage() {

  const [selectedCategory, setSelectedCategory] =
    useState("All Category");

  const [isOpen, setIsOpen] =
    useState(false);

  const [animatedNumber, setAnimatedNumber] =
    useState(0);

  const [animatedYear, setAnimatedYear] =
    useState(0);

  const dropdownRef = useRef(null);


  /* =====================================================
     CLOSE DROPDOWN WHEN CLICK OUTSIDE
  ===================================================== */

  useEffect(() => {

    function handleClickOutside(e) {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {

        setIsOpen(false);

      }

    }


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };

  }, []);


  /* =====================================================
     FILTER CARDS
  ===================================================== */

  const filteredCards =
    selectedCategory === "All Category"
      ? [CARDS[0]]
      : CARDS.filter(
          (card) =>
            card.category === selectedCategory
        );


  /* =====================================================
     NUMBER + YEAR ANIMATION
  ===================================================== */

  useEffect(() => {

    if (!filteredCards.length) {

      setAnimatedNumber(0);
      setAnimatedYear(0);

      return;

    }


    const card = filteredCards[0];


    const targetNumber =
      card.statTarget;


    const targetYear =
      Number(card.badgeYear);


    setAnimatedNumber(0);
    setAnimatedYear(0);


    const duration = 1500;


    const startTime =
      performance.now();


    let animationFrame;


    const animate = (currentTime) => {

      const elapsed =
        currentTime - startTime;


      const progress =
        Math.min(
          elapsed / duration,
          1
        );


      const easeOut =
        1 -
        Math.pow(
          1 - progress,
          3
        );


      const currentNumber =
        Math.floor(
          targetNumber *
          easeOut
        );


      const currentYear =
        Math.floor(
          targetYear *
          easeOut
        );


      setAnimatedNumber(
        currentNumber
      );


      setAnimatedYear(
        currentYear
      );


      if (progress < 1) {

        animationFrame =
          requestAnimationFrame(
            animate
          );

      } else {

        setAnimatedNumber(
          targetNumber
        );

        setAnimatedYear(
          targetYear
        );

      }

    };


    animationFrame =
      requestAnimationFrame(
        animate
      );


    return () => {

      cancelAnimationFrame(
        animationFrame
      );

    };

  }, [selectedCategory]);


  /* =====================================================
     CATEGORY SELECT
  ===================================================== */

  const handleSelect = (
    category
  ) => {

    setSelectedCategory(
      category
    );

    setIsOpen(false);

  };


  /* =====================================================
     RETURN
  ===================================================== */

  return (

    <div className="insights-page">


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="site-header">

        <a
          href="/ActivePage"
          className="site-header__logo"
        >

          <img
            className="site-header__logo-img"
            src={logo}
            alt="People First"
          />

        </a>

      </header>


      {/* =================================================
          HERO
      ================================================= */}

      <section className="insights-hero">

        <div className="insights-hero__controls">


          {/* =================================================
              CATEGORY DROPDOWN
          ================================================= */}

          <div
            className={`category-dropdown ${
              isOpen
                ? "is-open"
                : ""
            }`}
            ref={dropdownRef}
          >


            <button
              type="button"
              className="category-dropdown__trigger"
              onClick={() =>
                setIsOpen(
                  (prev) =>
                    !prev
                )
              }
              aria-haspopup="listbox"
              aria-expanded={
                isOpen
              }
            >

              <svg
                className="category-dropdown__caret"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >

                <polyline points="6 9 12 15 18 9" />

              </svg>


              <span>
                {selectedCategory}
              </span>

            </button>


            {/* =================================================
                DROPDOWN LIST
            ================================================= */}

            {isOpen && (

              <ul
                className="category-dropdown__list"
                role="listbox"
              >

                {CATEGORIES.map(
                  (category) => (

                    <li
                      key={category}
                    >

                      <button
                        type="button"
                        className={`category-dropdown__item ${
                          category ===
                          selectedCategory
                            ? "is-active"
                            : ""
                        }`}
                        onClick={() =>
                          handleSelect(
                            category
                          )
                        }
                        role="option"
                        aria-selected={
                          category ===
                          selectedCategory
                        }
                      >

                        {category}

                      </button>

                    </li>

                  )
                )}

              </ul>

            )}

          </div>


          {/* =================================================
              ACTION BUTTONS
          ================================================= */}

          <div className="insights-hero__actions">

            <a
              href="/partner"
              className="btn btn--primary"
            >
              Partner with Us
            </a>


            <a
              href="/training"
              className="btn btn--secondary"
            >
              Join Training Program
            </a>


            <a
              href="/contact"
              className="icon-btn"
              aria-label="Chat with us"
            >

              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >

                <path
                  d="
                    M21 11.5
                    a8.38 8.38 0 0 1-.9 3.8
                    8.5 8.5 0 0 1-7.6 4.7
                    8.38 8.38 0 0 1-3.8-.9
                    L3 21l1.9-5.7
                    a8.38 8.38 0 0 1-.9-3.8
                    8.5 8.5 0 0 1 4.7-7.6
                    8.38 8.38 0 0 1 3.8-.9
                    h.5
                    a8.48 8.48 0 0 1 8 8
                    v.5z
                  "
                />

              </svg>

            </a>

          </div>

        </div>

      </section>


      {/* =================================================
          INSIGHT CARDS
      ================================================= */}

      <section className="insight-cards">

        {filteredCards.map(
          (card) => (

            <article
              className="insight-card"
              key={card.id}
            >


              {/* =================================================
                  CARD TEXT
              ================================================= */}

              <div className="insight-card__text">


                {/* =================================================
                    SAME PENCIL ICON FOR ALL CARDS
                ================================================= */}

                <span
                  className="insight-card__icon"
                >

                  <img
                    src={card.icon}
                    alt=""
                    className="insight-card__icon-img"
                  />

                </span>


                {/* =================================================
                    TITLE
                ================================================= */}

                <h3 className="insight-card__title">

                  {card.title}

                </h3>


                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="insight-card__description">

                  {card.description}

                </p>


                {/* =================================================
                    STAT
                ================================================= */}

                <div className="insight-card__stat">

                  <span className="insight-card__stat-value">

                    {animatedNumber}%

                  </span>


                  <span className="insight-card__stat-label">

                    {card.statLabel.map(
                      (line) => (

                        <React.Fragment
                          key={line}
                        >

                          {line}

                          <br />

                        </React.Fragment>

                      )
                    )}

                  </span>

                </div>

              </div>


              {/* =================================================
                  CARD IMAGE
              ================================================= */}

              <div className="insight-card__media">


                {/* DIFFERENT IMAGE FOR EACH CARD */}

                <img
                  className="insight-card__image"
                  src={card.image}
                  alt={card.imageAlt}
                />


                {/* =================================================
                    BADGE
                ================================================= */}

                {card.badgeYear && (

                  <div className="insight-card__badge">

                    <span className="insight-card__badge-year">

                      {animatedYear}

                    </span>


                    <span className="insight-card__badge-label">

                      {card.badgeLabel}

                    </span>

                  </div>

                )}

              </div>

            </article>

          )
        )}


        {/* =================================================
            EMPTY
        ================================================= */}

        {filteredCards.length === 0 && (

          <p className="insight-cards__empty">

            No posts in this category yet.

          </p>

        )}

      </section>

    </div>

  );

}