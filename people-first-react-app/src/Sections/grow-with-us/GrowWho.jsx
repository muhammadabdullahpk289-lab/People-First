import React from "react";
import "./GrowWho.css";

const GrowWho = () => {
  const cards = [
    {
      letter: "J",
      number: "1",
      text: (
        <>
          Women seeking
          <br />
          flexible, remote work
          <br />
          opportunities
        </>
      ),
      color: "#a925ef",
      lightColor: "#dfbdf6",
    },
    {
      letter: "O",
      number: "2",
      text: (
        <>
          Youth (18–30) seeking
          <br />
          income-generating
          <br />
          digital skills
        </>
      ),
      color: "#2bb8c1",
      lightColor: "#a8e8eb",
    },
    {
      letter: "I",
      number: "3",
      text: (
        <>
          Institutions seeking
          <br />
          training partnerships
        </>
      ),
      color: "#4854e5",
      lightColor: "#c4c8f5",
    },
    {
      letter: "N",
      number: "4",
      text: (
        <>
          SME employees
          <br />
          wanting to upskill
        </>
      ),
      color: "#d01e38",
      lightColor: "#f5bac2",
    },
  ];

  return (
    <section className="growwho-section">
      <div className="growwho-container">

        {/* Heading */}
        <h2 className="growwho-title">
          WHO CAN
        </h2>

        {/* Cards */}
        <div className="growwho-cards">
          {cards.map((card, index) => (
            <div
              className="growwho-card"
              key={index}
              style={{
                "--card-color": card.color,
                "--light-color": card.lightColor,
              }}
            >
              {/* Top Letter */}
              <div className="growwho-letter-box">
                <span className="growwho-letter">
                  {card.letter}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="growwho-content">

                <div className="growwho-number">
                  {card.number}
                </div>

                <p className="growwho-text">
                  {card.text}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GrowWho;