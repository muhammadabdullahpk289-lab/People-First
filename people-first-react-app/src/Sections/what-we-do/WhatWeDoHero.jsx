import React from "react";
import "./WhatWeDoHero.css";

import logo from '../../assets/what-we-do-img/logo.svg';
import painPointsImage from "../../assets/what-we-do-img/pain-points.webp";

const WhatWeDoHero = () => {
  return (
    <section className="whatwedohero">

      {/* ================= BACKGROUND ================= */}
      <div className="whatwedohero-overlay"></div>

      {/* ================= CONTENT ================= */}
      <div className="whatwedohero-container">

        {/* ================= LOGO ================= */}
        <div className="whatwedohero-logo">
          <img
            src={logo}
            alt="People First"
          />
        </div>


        {/* ================= TITLE ================= */}
        <div className="whatwedohero-title">
          <h1>PAIN POINTS WE ADDRESS</h1>
        </div>


        {/* ================= PAIN POINTS IMAGE ================= */}
        <div className="whatwedohero-image">
          <img
            src={painPointsImage}
            alt="Pain Points We Address"
          />
        </div>

      </div>

    </section>
  );
};

export default WhatWeDoHero;