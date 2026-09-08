import { useState } from "react";

export default function SayHello() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <style>{`
        /* =========================================
           SAY HELLO / CONTACT SECTION
        ========================================= */

        .contact-page {
          width: 100%;
          min-height: 100vh;
          box-sizing: border-box;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 70px;
          padding: 50px 70px 50px 34px;

          background: #702061;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* =========================================
           LEFT CONTENT
        ========================================= */

        .contact-copy {
          width: 42%;
          max-width: 470px;
          color: #ffffff;
        }

        .eyebrow {
          margin-bottom: 12px;

          font-size: 28px;
          font-weight: 800;
          line-height: 1.1;

          color: #ffffff;
          text-transform: uppercase;
        }

        .contact-copy h1 {
          margin: 0 0 12px;

          font-size: 38px;
          line-height: 1.15;
          font-weight: 800;

          color: #ffffff;
        }

        .contact-copy p {
          margin: 0;

          max-width: 420px;

          font-size: 16px;
          line-height: 1.6;
          font-weight: 500;

          color: rgba(255, 255, 255, 0.85);
        }

        /* =========================================
           FORM
        ========================================= */

        .contact-form {
          width: 52%;
          max-width: 545px;

          box-sizing: border-box;

          padding: 25px 20px 20px;

          background: #eeeeee;

          border-radius: 28px;

          display: flex;
          flex-direction: column;
          gap: 11px;

          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
        }

        /* =========================================
           LABELS
        ========================================= */

        .contact-form label {
          display: flex;
          flex-direction: column;

          gap: 6px;

          font-size: 14px;
          font-weight: 600;

          color: #333333;
        }

        /* =========================================
           INPUTS
        ========================================= */

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          box-sizing: border-box;

          border: none;
          outline: none;

          background: #ffffff;

          border-radius: 9px;

          padding: 12px 15px;

          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;

          color: #333333;

          transition: 0.2s ease;
        }

        .contact-form input {
          height: 49px;
        }

        .contact-form textarea {
          min-height: 120px;
          resize: vertical;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder {
          color: #a3a3ae;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          box-shadow: 0 0 0 2px rgba(157, 28, 62, 0.2);
        }

        /* =========================================
           BUTTON
        ========================================= */

        .primary-btn {
          width: 100%;
          height: 40px;

          margin-top: 2px;

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

        .primary-btn:hover {
          background: #851632;
          transform: translateY(-1px);
        }

        .primary-btn:active {
          transform: translateY(0);
        }

        /* =========================================
           SUCCESS MESSAGE
        ========================================= */

        .form-success {
          margin: 3px 0 0;

          text-align: center;

          font-size: 14px;
          font-weight: 600;

          color: #702061;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {
          .contact-page {
            gap: 40px;
            padding: 45px 30px;
          }

          .contact-copy {
            width: 40%;
          }

          .contact-copy h1 {
            font-size: 32px;
          }

          .contact-form {
            width: 60%;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 700px) {
          .contact-page {
            min-height: auto;

            flex-direction: column;
            align-items: stretch;

            gap: 35px;

            padding: 45px 20px;
          }

          .contact-copy {
            width: 100%;
            max-width: none;
          }

          .eyebrow {
            font-size: 24px;
          }

          .contact-copy h1 {
            font-size: 30px;
          }

          .contact-copy p {
            font-size: 15px;
          }

          .contact-form {
            width: 100%;
            max-width: none;

            padding: 22px 16px 18px;

            border-radius: 24px;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 400px) {
          .contact-page {
            padding: 35px 15px;
          }

          .contact-copy h1 {
            font-size: 27px;
          }

          .contact-form input {
            height: 46px;
          }

          .contact-form textarea {
            min-height: 110px;
          }
        }
      `}</style>

      <section className="contact-page">
        <div className="contact-copy">
          <div className="eyebrow">SAY HELLO</div>

          <h1>Let’s start a conversation.</h1>

          <p>
            Tell us a little about what you are working on and we’ll take it
            from there.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input
              name="name"
              required
              placeholder="Your name"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              required
              rows="6"
              placeholder="Tell us about your project..."
            />
          </label>

          <button className="primary-btn" type="submit">
            Send Message
          </button>

          {sent && (
            <p className="form-success">
              Thanks! Your demo form was submitted.
            </p>
          )}
        </form>
      </section>
    </>
  );
}