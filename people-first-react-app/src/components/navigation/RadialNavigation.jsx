import { Link } from "react-router-dom";
import "./RadialNavigation.css";

import img1 from "../../assets/active-page-img/10003.svg";
import img2 from "../../assets/active-page-img/10004.svg";
import img3 from "../../assets/active-page-img/10005.svg";
import img4 from "../../assets/active-page-img/10002.svg";
import img5 from "../../assets/active-page-img/10006.svg";
import img6 from "../../assets/active-page-img/100013.svg";
import img7 from "../../assets/active-page-img/10007.svg";

import peopleFirstLogo from "../../assets/active-page-img/10001.svg";


const items = [
  {
    label: "HOME",
    path: "/home",
    image: img1,
    position: "home",
  },
  {
    label: "ABOUT US",
    path: "/about",
    image: img2,
    position: "about",
  },
  {
    label: "PODCASTS",
    path: "/podcasts",
    image: img3,
    position: "podcasts",
  },
  {
    label: "WHAT WE DO",
    path: "/what-we-do",
    image: img4,
    position: "what",
  },
  {
    label: "GROW WITH US",
    path: "/grow-with-us",
    image: img5,
    position: "grow",
  },
  {
    label: "IDEAS LAB",
    path: "/ideas-lab",
    image: img6,
    position: "ideas",
  },
  {
    label: "INSIGHTS BY PEOPLE FIRST",
    path: "/insights",
    image: img7,
    position: "insights",
  },
];


export default function RadialNavigation() {

  return (
    <section className="radial-section">

      {/* =================================================
          CENTER LOGO
      ================================================= */}

      <div className="radial-logo">
        <img
          src={peopleFirstLogo}
          alt="People First"
        />
      </div>


      {/* =================================================
          NAVIGATION
      ================================================= */}

      <nav className="radial-nav">

        {items.map((item) => (

          <Link
            key={item.path}
            to={item.path}
            className={`radial-item radial-${item.position}`}
          >

            {/* LABEL */}

            <span className="radial-label">
              {item.label}
            </span>


            {/* IMAGE */}

            <span className="radial-icon">

              <img
                src={item.image}
                alt={item.label}
              />

            </span>

          </Link>

        ))}

      </nav>

    </section>
  );
}