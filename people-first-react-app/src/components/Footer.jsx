import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";

import "./Footer.css";
import logo from '../assets/ideas-lab-img/logo.svg'

// Apna logo image yahan import kar lena
// import logo from "../../assets/your-logo.png";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">

        {/* ================= LEFT SIDE ================= */}

        <div className="footer-left">

          {/* LOGO */}
          <div className="footer-logo">
            {/* Agar image hai to ye use karo */}
            {/* <img src={logo} alt="PeopleFirst" /> */}
           <img src={logo} alt="" />
          </div>


          {/* SOCIAL ICONS */}
          <div className="footer-socials">

            <a
              href="#instagram"
              aria-label="Instagram"
              className="social-link"
            >
              <Instagram size={25} strokeWidth={2.2} />
            </a>


            <a
              href="#facebook"
              aria-label="Facebook"
              className="social-link"
            >
              <Facebook size={25} fill="currentColor" />
            </a>


            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="social-link"
            >
              <Linkedin size={25} fill="currentColor" />
            </a>


            <a
              href="#twitter"
              aria-label="Twitter"
              className="social-link"
            >
              <Twitter size={25} fill="currentColor" />
            </a>

          </div>

        </div>


        {/* ================= VERTICAL LINE ================= */}

        <div className="footer-divider"></div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="footer-right">


          {/* PAGES */}
          <div className="footer-column">

            <h3>Pages</h3>

            <Link to="/about">About</Link>

            <Link to="/what-we-do">Services</Link>

            <Link to="/insights">Blog</Link>

            <Link to="/podcasts">Podcast</Link>

            <Link to="/say-hello">Contact</Link>

          </div>


          {/* SUPPORT */}
          <div className="footer-column">

            <h3>Support</h3>

            <Link to="/home">Account</Link>

            <Link to="/ideas-lab">FAQ</Link>

            <Link to="/say-hello">Contact</Link>

          </div>


          {/* LEGAL */}
          <div className="footer-column">

            <h3>Legal</h3>

            <Link to="/privacy">Privacy</Link>

            <Link to="/terms">Terms of Service</Link>

            <Link to="/cookies">Cookies</Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;