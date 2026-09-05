import React from "react";
import { GraduationCap, MessageCircle } from "lucide-react";
import "./PeopleFirstEcosystem.css";

const PeopleFirstEcosystem = () => {
  const physicalItems = [
    {
      title: "Agriculture",
      text: "Providing pure healthy and affordable food & nutrition for every home.",
    },
    {
      title: "Real Estate",
      text: "Delivering high quality secure and affordable housing & property solutions.",
    },
    {
      title: "HealthCare & Wellness",
      text: "Advancing healthier lives through quality care and innovative wellness solutions.",
    },
    {
      title: "Renewable Energy",
      text: "Driving a sustainable future with clean and renewable energy solutions.",
    },
  ];

  const marketItems = [
    {
      title: "Merchanity",
      text: "An e-commerce platform connecting skilled talent with businesses to drive trade and growth.",
    },
    {
      title: "TECH SOLUTIONS",
      text: "Delivering accessible, innovative, and impactful tech solutions to power a smarter world.",
    },
    {
      title: "Media & Marketing",
      text: "Empowering brands through creative media and strategic marketing solutions.",
    },
    {
      title: "SMEs & Consumer Manufacturing",
      text: "Supporting entrepreneurs and businesses through scalable products and market solutions.",
    },
  ];

  return (
    <section className="ecosystem-scroll-wrapper">
      {/* =====================================================
          STICKY SECTION
      ===================================================== */}

      <div className="ecosystem-section">
        {/* Background Effects */}

        <div className="ecosystem-glow ecosystem-glow-left"></div>
        <div className="ecosystem-glow ecosystem-glow-right"></div>

        <div className="ecosystem-container">
          {/* ================= HEADING ================= */}

          <div className="ecosystem-heading">
            <h1>THE PEOPLE FIRST ECOSYSTEM</h1>

            <p>
              The People First Evolution Model sequences human potential across
              Physical, Mind, and Market circles, deploying synchronized
              ventures and strategic JVs for rapid, self-sustaining growth.
            </p>
          </div>

          {/* ================= CARDS ================= */}

          <div className="ecosystem-cards">
            {/* ================= PHYSICAL STAGE ================= */}

            <div className="ecosystem-card physical-card">
              <div className="ecosystem-card-header">
                <span className="stage-number">1</span>

                <h2>THE PHYSICAL STAGE</h2>
              </div>

              <div className="stage-description">
                A strong foundation is essential. We meet basic needs, provide
                services and ensure access to leading, income-generating and
                creating financial freedom.
              </div>

              <div className="physical-list">
                {physicalItems.map((item, index) => (
                  <div className="ecosystem-list-item" key={index}>
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= MIND STAGE ================= */}

            <div className="ecosystem-card mind-card">
              <div className="ecosystem-card-header">
                <span className="stage-number">2</span>

                <h2>THE MIND STAGE</h2>
              </div>

              <div className="stage-description">
                Once the foundation is stable, we unlock mental potential
                through education, skills & strategic acumen.
              </div>

              <div className="mind-content">
                <div className="mind-inner-card">
                  <GraduationCap
                    size={28}
                    strokeWidth={2}
                    className="mind-icon"
                  />

                  <h3>
                    National Agaaz Readiness Programme
                    <br />
                    (NARP)
                  </h3>

                  <p>
                    A foundational learning initiative to educate, build skills
                    and transform raw potential into market-ready talent.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= MARKET STAGE ================= */}

            <div className="ecosystem-card market-card">
              <div className="ecosystem-card-header">
                <span className="stage-number">3</span>

                <h2>THE MARKET STAGE</h2>
              </div>

              <div className="stage-description">
                We bridge talent to opportunity through commerce, trade and
                entrepreneurship.
              </div>

              <div className="market-list">
                {marketItems.map((item, index) => (
                  <div className="ecosystem-list-item" key={index}>
                    <h3>{item.title}</h3>

                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= CHAT ICON ================= */}

        <button
          className="ecosystem-chat"
          aria-label="Open chat"
          onClick={() => console.log("Chat clicked")}
        >
          <MessageCircle size={25} />
        </button>
      </div>
    </section>
  );
};

export default PeopleFirstEcosystem;