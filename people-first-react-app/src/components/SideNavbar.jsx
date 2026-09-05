import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import img1 from "../assets/active-page-img/100013.svg";
import img2 from "../assets/active-page-img/10002.svg";
import img3 from "../assets/active-page-img/10004.svg";
import img4 from "../assets/active-page-img/10003.svg";
import img5 from "../assets/active-page-img/10005.svg";
import img6 from "../assets/active-page-img/10006.svg";
import img7 from "../assets/active-page-img/10007.svg";

import "./SideNavbar.css";


const sideItems = [
  {
    path: "/ideas-lab",
    label: "IDEAS LAB",
    image: img1,
  },
  {
    path: "/what-we-do",
    label: "WHAT WE DO",
    image: img2,
  },
  {
    path: "/about",
    label: "ABOUT US",
    image: img3,
  },
  {
    path: "/home",
    label: "HOME",
    image: img4,
  },
  {
    path: "/podcasts",
    label: "PODCASTS",
    image: img5,
  },
  {
    path: "/grow-with-us",
    label: "GROW WITH US",
    image: img6,
  },
  {
    path: "/insights",
    label: "INSIGHTS BY PEOPLE FIRST",
    image: img7,
  },
];


export default function SideNavbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);


  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };


  return (
    <>
      {/* BACKDROP */}

      <div
        className={`side-nav-backdrop ${
          open ? "show" : ""
        }`}
        onClick={() => setOpen(false)}
      />


      {/* SIDE NAVBAR */}

      <aside
        className={`side-navbar ${
          open ? "open" : ""
        }`}
      >

        {/* ARROW */}

        <button
          type="button"
          className="side-nav-arrow"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="side-arrow-icon">
            ‹
          </span>
        </button>


        {/* MENU */}

        <div className="side-navbar-inner">

          {sideItems.map((item) => {

            const isActive =
              location.pathname === item.path;

            return (
              <button
                key={item.path}
                type="button"
                className={`side-nav-item ${
                  isActive ? "active" : ""
                }`}
                onClick={() =>
                  handleNavigate(item.path)
                }
              >

                {/* LABEL */}

                <span className="side-nav-label">
                  {item.label}
                </span>


                {/* IMAGE */}

                <span className="side-nav-icon-box">

                  <img
                    src={item.image}
                    alt={item.label}
                    className="side-nav-image"
                  />

                </span>

              </button>
            );

          })}

        </div>

      </aside>
    </>
  );
}