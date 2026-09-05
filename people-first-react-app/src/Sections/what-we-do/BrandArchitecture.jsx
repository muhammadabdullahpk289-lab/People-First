import React from "react";
import "./BrandArchitecture.css";
import { GraduationCap } from "lucide-react";

// =====================================================
// IMAGE
// =====================================================

import purpleShape from "../../assets/what-we-do-img/swoosh.png";


// =====================================================
// PIPELINE DATA
// =====================================================

const pipelineStages = [
  {
    number: "01",
    stage: "PHYSICAL STAGE",
    title: "Securing the Foundation",

    description:
      "A workforce cannot focus on growth or innovation if its foundational survival requirements are unmet. We secure the basics so our people can focus on building a better future.",

    color: "green",

    items: [
      {
        title: "Agriculture",
        desc: "Providing pure healthy and affordable food & nutrition for every home.",
      },
      {
        title: "Real Estate",
        desc: "Delivering high quality secure and affordable housing & property solutions",
      },
      {
        title: "HealthCare & Wellness",
        desc: "Advancing healthier lives through quality care and innovative wellness solutions.",
      },
      {
        title: "Renewable Energy",
        desc: "Driving a sustainable future with clean and renewable energy solutions.",
      },
    ],

    outcomeTitle: "Financial Freedom & Stability",

    outcomeText:
      "Lower expenses. Better living. Stronger communities.",
  },


  {
    number: "02",
    stage: "MIND STAGE",
    title: "Cultivating Capability",

    description:
      "Once the physical and financial baselines are stabilized, individuals gain the mental bandwidth required for advancement.",

    color: "blue",

    education: true,

    educationTitle:
      "National Agaaz Readiness Programme (NARP)",

    educationDesc:
      "A foundational learning initiative to educate, skills and build the strategic acumen of our people, transforming raw potential into market ready talent.",

    outcomeTitle: "Skilled Minds & Confidence",

    outcomeText:
      "Education. Skills. Strategy. Self-reliance.",
  },


  {
    number: "03",
    stage: "MARKET STAGE",
    title: "Scaling to Prosperity",

    description:
      "Training the mind without building commercial infrastructure creates a bottleneck of underutilized talent.",

    color: "purple",

    items: [
      {
        title: "Merchanity",
        desc: "An e-commerce platform connecting skilled talent with businesses to drive trade and growth.",
      },
      {
        title: "TECH SOLUTIONS",
        desc: "Delivering accessible, innovative, and impactful tech solutions to empower every user.",
      },
      {
        title: "Media & Marketing",
        desc: "Empowering brands through creative media and strategic marketing solutions.",
      },
      {
        title: "SMEs & Consumer Manufacturing",
        desc: "Enabling businesses to produce, innovate, and scale consumer products.",
      },
    ],

    outcomeTitle:
      "Enterprise Growth & Prosperity",

    outcomeText:
      "Opportunities. Trade. Scale. Wealth Creation.",
  },
];


// =====================================================
// BRAND ARCHITECTURE
// =====================================================

const BrandArchitecture = () => {
  return (
    <section className="brand-architecture">

      {/* =====================================================
          TOP RIGHT PURPLE IMAGE
      ===================================================== */}

      <img
        src={purpleShape}
        alt=""
        className="brand-purple-shape"
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="brand-content">

        <span className="brand-label">
          BRAND ARCHITECTURE
        </span>


        <h1>
          The Three Dimensions of
          <br />
          <span>Holistic</span> Evolution
        </h1>


        <div className="brand-line"></div>


        <p>
          The People First Evolution Model divides development
          into three distinct operational circles — Physical,
          Mind, and Market — because true economic empowerment
          must mirror the natural progression of human capability.
        </p>


        <p>
          We build the foundation, cultivate potential, and create
          the pathways that lead our people to lasting prosperity.
        </p>

      </div>


      {/* =====================================================
          EVOLUTIONARY PIPELINE
          ECOSYSTEM CARD REMOVED
      ===================================================== */}

      <div className="evolutionary-pipeline">

        <h2 className="pipeline-heading">
          Our Evolutionary Pipeline
        </h2>


        <div className="pipeline-grid">

          {pipelineStages.map((stage) => (

            <div
              className={`pipeline-card pipeline-card--${stage.color}`}
              key={stage.number}
            >

              {/* =====================================================
                  PIPELINE HEADER
              ===================================================== */}

              <div className="pipeline-header">

                <div className="pipeline-number">
                  {stage.number}
                </div>


                <div className="pipeline-heading-text">

                  <span className="pipeline-stage">
                    {stage.stage}
                  </span>

                  <h3>
                    {stage.title}
                  </h3>

                </div>

              </div>


              {/* =====================================================
                  DESCRIPTION
              ===================================================== */}

              <p className="pipeline-description">
                {stage.description}
              </p>


              {/* =====================================================
                  PIPELINE ITEMS
              ===================================================== */}

              {stage.items && (

                <div className="pipeline-items">

                  {stage.items.map((item) => (

                    <div
                      className="pipeline-item"
                      key={item.title}
                    >

                      <h4>
                        {item.title}
                      </h4>

                      <p>
                        {item.desc}
                      </p>

                    </div>

                  ))}

                </div>

              )}


              {/* =====================================================
                  EDUCATION CARD
              ===================================================== */}

              {stage.education && (

                <div className="pipeline-education">

                  <GraduationCap
                    className="pipeline-education-icon"
                    size={34}
                    strokeWidth={2}
                  />


                  <h4>
                    {stage.educationTitle}
                  </h4>


                  <p>
                    {stage.educationDesc}
                  </p>

                </div>

              )}


              {/* =====================================================
                  OUTCOME
              ===================================================== */}

              <div className="pipeline-outcome">

                <div className="pipeline-outcome-label">
                  OUTCOME:
                </div>


                <div className="pipeline-outcome-content">

                  <strong>
                    {stage.outcomeTitle}
                  </strong>

                  <span>
                    {stage.outcomeText}
                  </span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};


export default BrandArchitecture;