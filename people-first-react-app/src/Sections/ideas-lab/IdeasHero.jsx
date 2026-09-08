import { useState } from "react";

import "./IdeasHero.css";
import "./Contactmodal.css";

// ===============================
// IMAGES
// ===============================
import stone1 from "../../assets/ideas-lab-img/crystal-red.webp";
import stone2 from "../../assets/ideas-lab-img/crystal-purple.webp";
import magnet from "../../assets/ideas-lab-img/magnet.webp";
import logo from '../../assets/ideas-lab-img/logo.svg'

// ===============================
// IDEAS HERO
// ===============================
export default function IdeasHero() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // ===============================
  // FORM DATA
  // ===============================
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "Training Partner",
    message: "",
  });


  // ===============================
  // HANDLE INPUT CHANGE
  // ===============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  // ===============================
  // HANDLE FORM SUBMIT
  // ===============================
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setIsModalOpen(false);

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      role: "Training Partner",
      message: "",
    });
  };


  return (
    <section className="ideas-hero">

      {/* =====================================================
          LOGO
      ===================================================== */}
      <Link to="/active-page">
      <div className="ideas-header">
        <img src={logo} alt="" />
      </div>
      </Link>

      {/* =====================================================
          WAVY BACKGROUND
      ===================================================== */}
      <svg
        className="hero-waves"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <path
          d="M0 90 C 240 40, 480 140, 720 95 C 960 50, 1200 130, 1440 75"
          fill="none"
          stroke="#e3e3e6"
          strokeWidth="1.4"
        />

        <path
          d="M0 140 C 260 190, 500 100, 760 150 C 1000 195, 1220 110, 1440 155"
          fill="none"
          stroke="#e9e9ec"
          strokeWidth="1.4"
        />

        <path
          d="M0 30 C 220 70, 520 5, 780 55 C 1040 100, 1260 20, 1440 60"
          fill="none"
          stroke="#ececef"
          strokeWidth="1.2"
        />

      </svg>


      {/* =====================================================
          FLOATING DECORATIVE SHAPES
      ===================================================== */}

      <img
        src={stone1}
        alt=""
        className="float-shape shape-red"
      />

      <img
        src={stone2}
        alt=""
        className="float-shape shape-purple"
      />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="ideas-content">

        {/* ---------- Magnet ---------- */}
        <div className="ideas-visual">

          <img
            src={magnet}
            alt="Magnet"
            className="magnet-img"
          />

        </div>


        {/* ---------- Text ---------- */}
        <div className="ideas-text">

          <h1>
            Insights to Help You Grow in EcoSystem
          </h1>

          <p>
            Practical articles, guides, and perspectives on human
            transformation, economic gateways, startup growth, and
            skills development — written for business owners,
            entrepreneurs, and professionals.
          </p>

        </div>

      </div>


      {/* =====================================================
          ACTION BUTTONS
      ===================================================== */}
      <div className="ideas-actions">

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsModalOpen(true)}
        >
          Partner with Us
        </button>


        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setIsModalOpen(true)}
        >
          Join Training Program
        </button>


        <button
          type="button"
          className="btn-icon"
          aria-label="Chat"
        >

          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >

            <path
              d="M21 11.5C21 16.19 16.97 20 12 20C10.6 20 9.28 19.72 8.1 19.22L3 20L4.5 15.9C3.55 14.63 3 13.12 3 11.5C3 6.81 7.03 3 12 3C16.97 3 21 6.81 21 11.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

          </svg>

        </button>

      </div>


      {/* =====================================================
          CONTACT MODAL
      ===================================================== */}

      {isModalOpen && (

        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >

          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >

            {/* ---------- Close Button ---------- */}
            <button
              type="button"
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>


            {/* =================================================
                LEFT SIDE
            ================================================= */}
            <div className="modal-left">

              <h2>
                Get In Touch
              </h2>


              <p className="modal-subtitle">
                Share your thoughts we will help you make it real!
              </p>


              {/* ---------- WhatsApp ---------- */}
              <div className="contact-line">

                <span className="contact-icon whatsapp">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >

                    <path
                      d="M17.5 14.4C17.2 14.25 15.7 13.5 15.4 13.4C15.1 13.3 14.9 13.25 14.7 13.55C14.5 13.85 13.95 14.5 13.75 14.7C13.6 14.9 13.4 14.9 13.1 14.75C11.4 14 10.3 13.35 9.2 11.5C8.9 11 9.5 11.05 10.05 9.95C10.15 9.75 10.1 9.6 10.05 9.45C10 9.3 9.4 7.8 9.15 7.2C8.9 6.6 8.65 6.7 8.45 6.7C8.25 6.65 8.05 6.65 7.85 6.65C7.65 6.65 7.35 6.7 7.05 7C6.75 7.3 6 8.05 6 9.55C6 11.05 7.1 12.5 7.25 12.7C7.4 12.9 9.4 16 12.4 17.2C14.75 18.15 15.15 17.9 15.65 17.85C16.15 17.8 17.2 17.2 17.45 16.55C17.65 15.9 17.65 15.35 17.6 15.25C17.55 15.1 17.7 15 17.5 14.4Z"
                      fill="#25D366"
                    />

                    <path
                      d="M12 2C6.5 2 2 6.5 2 12C2 13.8 2.45 15.5 3.3 17L2 22L7.15 20.75C8.6 21.5 10.25 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2Z"
                      stroke="#25D366"
                      strokeWidth="1.3"
                      fill="none"
                    />

                  </svg>

                </span>


                <div>

                  <p>
                    +92 300 1231234
                  </p>

                  <p>
                    +92 300 1231234
                  </p>

                </div>

              </div>


              {/* ---------- Email ---------- */}
              <div className="contact-line">

                <span className="contact-icon">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >

                    <path
                      d="M2 6C2 4.9 2.9 4 4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6Z"
                      fill="#EA4335"
                    />

                    <path
                      d="M2 6L12 13L22 6"
                      stroke="#fff"
                      strokeWidth="1.3"
                    />

                  </svg>

                </span>


                <div>

                  <p>
                    info@techinsights.com
                  </p>

                  <p>
                    tech@insights.com
                  </p>

                </div>

              </div>


              {/* ---------- Social Icons ---------- */}
              <div className="social-row">

                <a
                  href="#"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>

              </div>

            </div>


            {/* =================================================
                RIGHT SIDE - FORM
            ================================================= */}
            <form
              className="modal-right"
              onSubmit={handleSubmit}
            >

              {/* ---------- Full Name ---------- */}
              <label>
                Full Name
              </label>

              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />


              {/* ---------- Email ---------- */}
              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />


              {/* ---------- Phone ---------- */}
              <label>
                Phone
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />


              {/* ---------- Role ---------- */}
              <label>
                I am a
              </label>

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >

                <option value="Training Partner">
                  Training Partner
                </option>

                <option value="Business Owner">
                  Business Owner
                </option>

                <option value="Entrepreneur">
                  Entrepreneur
                </option>

                <option value="Professional">
                  Professional
                </option>

                <option value="Student">
                  Student
                </option>

              </select>


              {/* ---------- Message ---------- */}
              <label>
                How can we help you?
              </label>

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>


              {/* ---------- Submit ---------- */}
              <button
                type="submit"
                className="modal-submit"
              >
                Submit
              </button>

            </form>

          </div>

        </div>

      )}

    </section>
  );
}