export default function Cookies() {
  return (
    <section className="legal-page">
      <div className="legal-container">
        <div className="eyebrow">LEGAL</div>

        <h1>Cookie Policy</h1>

        <p className="intro">
          Replace this starter copy with your final cookie policy. This page
          explains how cookies and similar technologies may be used when you
          visit and interact with our website.
        </p>

        <div className="legal-content">
          <h2>What cookies are</h2>

          <p>
            Cookies are small text files that are stored on your device when
            you visit a website. They help websites remember your preferences,
            improve functionality, understand website usage, and provide a
            better browsing experience.
          </p>

          <h2>Your choices</h2>

          <p>
            Visitors can manage or disable non-essential cookies through their
            browser settings or available cookie preferences. Disabling
            certain cookies may affect some features or functionality of the
            website.
          </p>
        </div>
      </div>

      <style>
        {`
          .legal-page {
            width: 100%;
            min-height: 100vh;
            background: #ffffff;
            box-sizing: border-box;
            padding: 120px 30px 100px;
            font-family: Inter, Arial, sans-serif;
          }

          .legal-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            text-align: left;
          }

          .legal-page .eyebrow {
            display: inline-flex;
            align-items: center;
            justify-content: center;

            margin-bottom: 20px;
            padding: 7px 16px;

            background: #f4edf6;
            border-radius: 30px;

            color: #491557;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 2px;
            line-height: 1;
          }

          .legal-page h1 {
            margin: 0;
            color: #491557;

            font-size: clamp(44px, 6vw, 72px);
            font-weight: 800;
            line-height: 1.08;
            letter-spacing: -2px;
          }

          .legal-page h1::after {
            content: "";

            display: block;

            width: 70px;
            height: 4px;

            margin-top: 25px;

            background: #491557;
            border-radius: 10px;
          }

          .legal-page .intro {
            max-width: 900px;
            margin: 30px 0 0;

            color: #777777;
            font-size: 18px;
            font-weight: 400;
            line-height: 1.9;
          }

          .legal-content {
            max-width: 900px;
            margin-top: 55px;
          }

          .legal-page h2 {
            margin: 0 0 15px;

            color: #491557;
            font-size: 29px;
            font-weight: 700;
            line-height: 1.3;
          }

          .legal-page h2:not(:first-child) {
            margin-top: 55px;
          }

          .legal-page .legal-content p {
            margin: 0;

            color: #777777;
            font-size: 17px;
            font-weight: 400;
            line-height: 1.9;
          }

          /* =========================
             TABLET
          ========================= */

          @media (max-width: 768px) {
            .legal-page {
              padding: 90px 25px 70px;
            }

            .legal-page h1 {
              font-size: 48px;
              letter-spacing: -1px;
            }

            .legal-page .intro {
              font-size: 17px;
              line-height: 1.8;
            }

            .legal-content {
              margin-top: 45px;
            }

            .legal-page h2 {
              font-size: 25px;
            }

            .legal-page .legal-content p {
              font-size: 16px;
              line-height: 1.8;
            }
          }

          /* =========================
             MOBILE
          ========================= */

          @media (max-width: 480px) {
            .legal-page {
              padding: 70px 18px 55px;
            }

            .legal-page .eyebrow {
              margin-bottom: 16px;
              padding: 6px 13px;
              font-size: 11px;
              letter-spacing: 1.5px;
            }

            .legal-page h1 {
              font-size: 38px;
              line-height: 1.1;
              letter-spacing: -1px;
            }

            .legal-page h1::after {
              width: 55px;
              height: 3px;
              margin-top: 20px;
            }

            .legal-page .intro {
              margin-top: 25px;
              font-size: 15px;
              line-height: 1.8;
            }

            .legal-content {
              margin-top: 40px;
            }

            .legal-page h2 {
              font-size: 22px;
            }

            .legal-page h2:not(:first-child) {
              margin-top: 40px;
            }

            .legal-page .legal-content p {
              font-size: 15px;
              line-height: 1.8;
            }
          }
        `}
      </style>
    </section>
  );
}