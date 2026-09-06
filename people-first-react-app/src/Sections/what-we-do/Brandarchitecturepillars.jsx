import React from "react";
import "./Brandarchitecturepillars.css";
import { Check } from "lucide-react";

// ===============================
// IMAGES — apni images yahan laga dein (path replace kar dein)
// ===============================
import topBlob from "../../assets/what-we-do-img/10002.png";
import coreIcon from "../../assets/what-we-do-img/icon-core.webp";
import jointIcon from "../../assets/what-we-do-img/icon-joint.webp";
import affiliatedIcon from "../../assets/what-we-do-img/icon-affiliated.webp";
import genesisIcon from "../../assets/what-we-do-img/icon-genesis.webp";

const BrandArchitecturePillars = () => {
  return (
    <section className="ba-section">
      {/* TOP LEFT PURPLE BLOB */}
      <img src={topBlob} alt="" className="ba-blob" />

      {/* HEADER */}
      <div className="ba-header">
        <div className="ba-header-top">
          <div className="ba-header-line"></div>
          <h1>BRAND ARCHITECTURE</h1>
          <div className="ba-header-line"></div>
        </div>

        <h2>Building an Ecosystem, Not Just Businesses</h2>

        <p>
          People First (Pvt) Ltd is a registered venture builder under the
          Securities and Exchange Commission of Pakistan (SECP). To scale
          seamlessly without sacrificing our community values, our corporate
          architecture is divided into four distinct pillars.
        </p>
      </div>

      {/* CARD GRID */}
      <div className="ba-grid">
        {/* CORE VENTURES */}
        <div className="ba-card ba-card--core">
          <div className="ba-card-header">
            <div className="ba-card-icon">
              <img src={coreIcon} alt="Core Ventures" />
            </div>
            <h3>CORE VENTURES</h3>
          </div>

          <p className="ba-card-text">
            Ventures indubitably, fully funded, and operated directly by the
            parent company.
          </p>

          <p className="ba-card-purpose">
            <strong>Purpose:</strong>
            They create our foundational industrial infrastructure and
            outline on-the-ground training platforms.
          </p>

          <ul className="ba-card-list">
            <li>
              <span className="ba-card-check">
                <Check size={10} strokeWidth={3} />
              </span>
              Real estate developments
            </li>
            <li>
              <span className="ba-card-check">
                <Check size={10} strokeWidth={3} />
              </span>
              Agrifood blending grounds
            </li>
            <li>
              <span className="ba-card-check">
                <Check size={10} strokeWidth={3} />
              </span>
              Core media properties
            </li>
          </ul>

          <p className="ba-card-footer">
            Direct ownership | Operational backbone
          </p>
        </div>

        {/* JOINT VENTURES */}
        <div className="ba-card ba-card--joint">
          <div className="ba-card-header">
            <div className="ba-card-icon">
              <img src={jointIcon} alt="Joint Ventures" />
            </div>
            <h3>JOINT VENTURES</h3>
          </div>

          <p className="ba-card-text">
            Independent businesses that align with our core philosophy and
            enter a formal equity or operational partnership with us.
          </p>

          <p className="ba-card-purpose">
            <strong>Purpose:</strong>
            Combining external specialized expertise with People First's
            infrastructure, network, and resource pool to achieve fast
            market scaling.
          </p>

          <p className="ba-card-footer">Partnership-driven growth engine</p>
        </div>

        {/* AFFILIATED VENTURES */}
        <div className="ba-card ba-card--affiliated">
          <div className="ba-card-header">
            <div className="ba-card-icon">
              <img src={affiliatedIcon} alt="Affiliated Ventures" />
            </div>
            <h3>AFFILIATED VENTURES</h3>
          </div>

          <p className="ba-card-text">
            Existing, fully operational organizations that voluntarily place
            their strategic direction and management outputs under the
            governance of the People First ecosystem.
          </p>

          <p className="ba-card-purpose">
            <strong>Purpose:</strong>
            Optimizing underperforming assets or traditional businesses by
            aligning them with sustainable, community-first values and
            modern technological frameworks.
          </p>

          <p className="ba-card-footer">Transformation of existing businesses</p>
        </div>

        {/* GENESIS VENTURES */}
        <div className="ba-card ba-card--genesis">
          <div className="ba-card-header">
            <div className="ba-card-icon">
              <img src={genesisIcon} alt="Genesis Ventures" />
            </div>
            <h3>GENESIS VENTURES</h3>
          </div>

          <p className="ba-card-text">
            The highest and most powerful expression of our mission. Brand
            new companies built completely from scratch inside the
            ecosystem.
          </p>

          <p className="ba-card-purpose">
            <strong>Purpose:</strong>
            These are brands not co-founded by individuals who originally
            entered with training but who possess the passion. They are
            incubated through the Venture Stage, advanced through the
            Scaling Stage, and emerge as fully capable corporate founders in
            the final stage.
          </p>

          <p className="ba-card-footer">Founder creation engine</p>
        </div>
      </div>
    </section>
  );
};

export default BrandArchitecturePillars;