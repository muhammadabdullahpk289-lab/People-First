import { useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SayHello() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);
  };

  return (
    <>
      <style>{`

        /* =====================================================
           SAY HELLO / CONTACT PAGE
        ===================================================== */

        .sayhello-page {
          width: 100%;
          min-height: 100vh;

          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 35px;

          padding: 25px 60px 27px;

          background: #702061;

          font-family: Arial, Helvetica, sans-serif;

          overflow: hidden;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .sayhello-left {
          width: 45%;
          max-width: 500px;

          color: #ffffff;

          flex-shrink: 0;
        }


        .sayhello-left h1 {
          margin: 0 0 8px;

          color: #ffffff;

          font-size: 28px;
          font-weight: 800;

          line-height: 1.15;

          text-transform: uppercase;
        }


        .sayhello-subtitle {
          margin: 0;

          max-width: 430px;

          color: rgba(255, 255, 255, 0.85);

          font-size: 15px;
          font-weight: 600;

          line-height: 1.5;
        }


        /* =====================================================
           CONTACT INFORMATION
        ===================================================== */

        .contact-info {
          display: flex;
          align-items: flex-start;

          gap: 15px;
        }


        .phone-info {
          margin-top: 32px;
        }


        .email-info {
          margin-top: 25px;
        }


        /* =====================================================
           CONTACT ICONS
        ===================================================== */

        .contact-icon {
          width: 24px;
          min-width: 24px;

          height: 28px;

          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 25px;
        }


        .whatsapp-icon {
          color: #00e676;
        }


        .email-icon {
          color: #ffffff;

          font-size: 28px;
        }


        /* =====================================================
           CONTACT TEXT
        ===================================================== */

        .contact-details {
          display: flex;
          flex-direction: column;

          gap: 8px;
        }


        .contact-details p {
          margin: 0;

          color: #ffffff;

          font-size: 16px;
          font-weight: 600;

          line-height: 1.35;
        }


        /* =====================================================
           SOCIAL ICONS
        ===================================================== */

        .social-icons {
          display: flex;
          align-items: center;

          gap: 35px;

          margin-top: 36px;

          padding-left: 8px;
        }


        .social-icons a {
          width: 28px;
          height: 28px;

          display: flex;
          align-items: center;
          justify-content: center;

          text-decoration: none;

          font-size: 26px;

          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }


        .social-icons a:hover {
          transform: translateY(-3px);

          opacity: 0.8;
        }


        /* FACEBOOK */

        .social-icons a:nth-child(1) {
          color: #1877f2;
        }


        /* TWITTER */

        .social-icons a:nth-child(2) {
          color: #1da1f2;
        }


        /* LINKEDIN */

        .social-icons a:nth-child(3) {
          color: #0077b5;
        }


        /* INSTAGRAM */

        .social-icons a:nth-child(4) {
          color: #f77737;
        }


        /* =====================================================
           FORM
        ===================================================== */

        .sayhello-form {
          width: 50%;
          max-width: 545px;

          box-sizing: border-box;

          padding: 21px 20px 19px;

          background: #eeeeee;

          border-radius: 28px;

          display: flex;
          flex-direction: column;

          gap: 9px;

          box-shadow:
            0 8px 25px rgba(0, 0, 0, 0.08);

          flex-shrink: 0;
        }


        /* =====================================================
           FORM LABEL
        ===================================================== */

        .sayhello-form label {
          width: 100%;

          display: flex;
          flex-direction: column;

          gap: 5px;

          font-size: 13px;
          font-weight: 600;

          color: #333333;
        }


        .sayhello-form label span {
          display: block;
        }


        /* =====================================================
           INPUT / SELECT / TEXTAREA
        ===================================================== */

        .sayhello-form input,
        .sayhello-form select,
        .sayhello-form textarea {
          width: 100%;

          box-sizing: border-box;

          border: none;
          outline: none;

          background: #ffffff;

          border-radius: 9px;

          font-family: Arial, Helvetica, sans-serif;

          font-size: 16px;

          color: #333333;

          transition:
            box-shadow 0.2s ease,
            transform 0.2s ease;
        }


        /* INPUT */

        .sayhello-form input {
          height: 35px;

          padding: 0 15px;
        }


        /* SELECT */

        .sayhello-form select {
          height: 35px;

          padding: 0 15px;

          cursor: pointer;

          appearance: auto;
        }


        /* TEXTAREA */

        .sayhello-form textarea {
          min-height: 72px;

          padding: 12px 15px;

          resize: vertical;
        }


        /* =====================================================
           PLACEHOLDER
        ===================================================== */

        .sayhello-form input::placeholder,
        .sayhello-form textarea::placeholder {
          color: #a3a3ae;
        }


        /* =====================================================
           FOCUS
        ===================================================== */

        .sayhello-form input:focus,
        .sayhello-form select:focus,
        .sayhello-form textarea:focus {
          box-shadow:
            0 0 0 2px rgba(157, 28, 62, 0.20);
        }


        /* =====================================================
           SUBMIT BUTTON
        ===================================================== */

        .sayhello-submit {
          width: 100%;

          height: 40px;

          margin-top: 3px;

          border: none;

          border-radius: 7px;

          background: #9d1c3e;

          color: #ffffff;

          font-size: 16px;
          font-weight: 700;

          cursor: pointer;

          transition:
            background 0.2s ease,
            transform 0.2s ease;
        }


        .sayhello-submit:hover {
          background: #851632;

          transform: translateY(-1px);
        }


        .sayhello-submit:active {
          transform: translateY(0);
        }


        /* =====================================================
           SUCCESS MESSAGE
        ===================================================== */

        .sayhello-success {
          margin: 2px 0 0;

          text-align: center;

          color: #702061;

          font-size: 13px;

          font-weight: 600;
        }


        /* =====================================================
           LARGE SCREEN
        ===================================================== */

        @media (min-width: 1200px) {

          .sayhello-page {
            gap: 35px;

            padding-left: 60px;
            padding-right: 60px;
          }


          .sayhello-left {
            width: 45%;
            max-width: 500px;
          }


          .sayhello-left h1 {
            font-size: 30px;
          }


          .sayhello-form {
            width: 50%;
            max-width: 545px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 950px) {

          .sayhello-page {
            gap: 30px;

            padding: 40px 25px;
          }


          .sayhello-left {
            width: 44%;
          }


          .sayhello-form {
            width: 56%;
          }


          .sayhello-left h1 {
            font-size: 26px;
          }


          .sayhello-subtitle {
            font-size: 14px;
          }


          .contact-details p {
            font-size: 15px;
          }


          .social-icons {
            gap: 28px;
          }

        }


        /* =====================================================
           TABLET SMALL
        ===================================================== */

        @media (max-width: 800px) {

          .sayhello-page {
            gap: 25px;

            padding: 35px 20px;
          }


          .sayhello-left h1 {
            font-size: 24px;
          }


          .sayhello-form {
            padding: 20px 16px 18px;

            border-radius: 24px;
          }


          .sayhello-form input,
          .sayhello-form select {
            height: 38px;
          }


          .sayhello-form textarea {
            min-height: 80px;
          }


          .social-icons {
            gap: 24px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .sayhello-page {
            min-height: auto;

            flex-direction: column;

            align-items: stretch;

            justify-content: flex-start;

            gap: 40px;

            padding: 45px 20px;

            overflow: visible;
          }


          /* LEFT */

          .sayhello-left {
            width: 100%;

            max-width: none;
          }


          .sayhello-left h1 {
            font-size: 30px;

            margin-bottom: 10px;
          }


          .sayhello-subtitle {
            max-width: 100%;

            font-size: 15px;
          }


          /* PHONE */

          .phone-info {
            margin-top: 28px;
          }


          /* EMAIL */

          .email-info {
            margin-top: 22px;
          }


          .contact-details p {
            font-size: 15px;
          }


          /* SOCIAL */

          .social-icons {
            margin-top: 30px;

            padding-left: 5px;

            gap: 30px;
          }


          /* FORM */

          .sayhello-form {
            width: 100%;

            max-width: none;

            padding: 22px 16px 18px;

            border-radius: 24px;

            gap: 10px;
          }


          .sayhello-form input {
            height: 44px;
          }


          .sayhello-form select {
            height: 44px;
          }


          .sayhello-form textarea {
            min-height: 110px;
          }


          .sayhello-submit {
            height: 42px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 400px) {

          .sayhello-page {
            padding: 35px 15px;

            gap: 35px;
          }


          .sayhello-left h1 {
            font-size: 27px;
          }


          .sayhello-subtitle {
            font-size: 14px;
          }


          .contact-info {
            gap: 12px;
          }


          .contact-details p {
            font-size: 14px;
          }


          .social-icons {
            gap: 24px;

            margin-top: 28px;
          }


          .social-icons a {
            font-size: 24px;
          }


          .sayhello-form {
            padding: 20px 14px 16px;

            border-radius: 22px;
          }


          .sayhello-form label {
            font-size: 12px;
          }


          .sayhello-form input,
          .sayhello-form select {
            height: 42px;

            font-size: 15px;
          }


          .sayhello-form textarea {
            min-height: 105px;

            font-size: 15px;
          }


          .sayhello-submit {
            height: 40px;

            font-size: 15px;
          }

        }


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 320px) {

          .sayhello-page {
            padding-left: 12px;
            padding-right: 12px;
          }


          .sayhello-left h1 {
            font-size: 25px;
          }


          .social-icons {
            gap: 20px;
          }


          .sayhello-form {
            padding-left: 12px;
            padding-right: 12px;
          }

        }

      `}</style>

      <section className="sayhello-page">

        {/* LEFT SIDE */}

        <div className="sayhello-left">

          <h1>
            GET IN TOUCH
          </h1>

          <p className="sayhello-subtitle">
            Share your thoughts we will help you make it real!
          </p>


          {/* PHONE */}

          <div className="contact-info phone-info">

            <div className="contact-icon whatsapp-icon">
              <FaWhatsapp />
            </div>

            <div className="contact-details">

              <p>
                +92 300 1231234
              </p>

              <p>
                +92 300 1231234
              </p>

            </div>

          </div>


          {/* EMAIL */}

          <div className="contact-info email-info">

            <div className="contact-icon email-icon">
              <MdEmail />
            </div>

            <div className="contact-details">

              <p>
                info@techinsights.com
              </p>

              <p>
                tech@insights.com
              </p>

            </div>

          </div>


          {/* SOCIAL MEDIA */}

          <div className="social-icons">

            <a
              href="#"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>


            <a
              href="#"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>


            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>


            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

          </div>

        </div>


        {/* RIGHT FORM */}

        <form
          className="sayhello-form"
          onSubmit={handleSubmit}
        >

          {/* FULL NAME */}

          <label>

            <span>
              Full Name
            </span>

            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
            />

          </label>


          {/* EMAIL */}

          <label>

            <span>
              Email Address
            </span>

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
            />

          </label>


          {/* PHONE */}

          <label>

            <span>
              Phone
            </span>

            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone Number"
            />

          </label>


          {/* I AM A */}

          <label>

            <span>
              I am a
            </span>

            <select
              name="role"
              required
              defaultValue=""
            >

              <option
                value=""
                disabled
              >
                Select an option
              </option>

              <option value="student">
                Student
              </option>

              <option value="business">
                Business Owner
              </option>

              <option value="developer">
                Developer
              </option>

              <option value="designer">
                Designer
              </option>

              <option value="other">
                Other
              </option>

            </select>

          </label>


          {/* MESSAGE */}

          <label>

            <span>
              How can we help you?
            </span>

            <textarea
              name="message"
              required
              placeholder="Your Message"
            ></textarea>

          </label>


          {/* SUBMIT */}

          <button
            type="submit"
            className="sayhello-submit"
          >
            Submit
          </button>


          {/* SUCCESS */}

          {sent && (
            <div className="sayhello-success">
              Thanks! Your message has been submitted.
            </div>
          )}

        </form>

      </section>
    </>
  );
}