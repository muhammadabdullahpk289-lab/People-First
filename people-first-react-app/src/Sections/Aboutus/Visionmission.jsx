import React from "react";
import "./VisionMission.css";
import { BookOpen, TrendingUp, Users, Repeat } from "lucide-react";

// ===============================
// IMAGES — apni images yahan laga dein (path replace kar dein)
// ===============================
import topBlob from "../../assets/aboutus-img/blob.png";
import arrowIcon from "../../assets/aboutus-img/right-plane.png";
import visionIcon from "../../assets/aboutus-img/mission.webp";
import missionIcon from "../../assets/aboutus-img/vision.webp";
import globeImage from "../../assets/aboutus-img/globe.webp";

// ===============================
// FEATURE DATA (LEARN / GROW / LEAD / TRANSFORM)
// ===============================
const features = [
  {
    icon: <BookOpen size={26} strokeWidth={2} />,
    title: "LEARN",
    desc: "Build Knowledge. Sharpen Skills.",
  },
  {
    icon: <TrendingUp size={26} strokeWidth={2} />,
    title: "GROW",
    desc: "Fuel Growth. Create Impact.",
  },
  {
    icon: <Users size={26} strokeWidth={2} />,
    title: "LEAD",
    desc: "Inspire Others. Drive Change.",
  },
  {
    icon: <Repeat size={26} strokeWidth={2} />,
    title: "TRANSFORM",
    desc: "Build World Class Market Leaders.",
  },
];

const VisionMission = () => {
  return (
    <section className="vm-section">


      {/* TOP LEFT PURPLE BLOB */}
      <img src={topBlob} alt="" className="vm-blob" />

      {/* HEADER */}
      <div className="vm-header">
        <div className="vm-header-line"></div>

        <div className="vm-header-text">
          <h1>VISION &amp; MISSION</h1>
          <p>OUR PURPOSE. OUR PROMISE. OUR PATH FORWARD.</p>
        </div>

        <div className="vm-header-line right"></div>

        <img src={arrowIcon} alt="" className="vm-header-arrow" />
      </div>

      {/* VISION / MISSION + GLOBE */}
      <div className="vm-columns">
        <div className="vm-text-col">
          <div className="vm-block">
            <div className="vm-icon-circle">
              <img src={visionIcon} alt="Our Vision" />
            </div>
            <div className="vm-block-content">
              <h2>OUR VISION</h2>
              <div className="gradient-line"></div>
              <p>
                A compounding global ecosystem{" "}
                <strong>launching 100 market-ready brands</strong> by the end
                of 2028 to <strong>eliminate</strong> economic isolation and
                drive <strong>decentralized community leadership</strong>.
              </p>
            </div>
          </div>

          <div className="vm-block">
            <div className="vm-icon-circle">
              <img src={missionIcon} alt="Our Mission" />
            </div>
            <div className="vm-block-content">
              <h2>OUR MISSION</h2>
              <div className="gradient-line"></div>
              <p>
                We <strong>replace isolation with collective growth.</strong>{" "}
                By uniting different sectors into one venture-building engine,
                we empower people to{" "}
                <strong>Learn × Grow × Lead × Transforming</strong> raw
                talent into world-class market leaders.
              </p>
            </div>
          </div>
        </div>

        <img src={globeImage} alt="Global ecosystem" className="vm-globe" />
      </div>

      {/* FEATURE CARD */}
      <div className="vm-feature-wrap">
        <img src={arrowIcon} alt="" className="vm-feature-arrow" />

        <div className="vm-feature-card">
          {features.map((feature, index) => (
            <React.Fragment key={feature.title}>
              <div className="vm-feature-item">
                <div className="vm-feature-icon">{feature.icon}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </div>

              {index < features.length - 1 && (
                <span className="vm-feature-sep">×</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;