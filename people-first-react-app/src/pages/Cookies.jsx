export default function Cookies() {
  return (
    <section
      className="legal-page"
      style={{
        width: "100%",
        minHeight: "100vh",
        margin: "0",
        padding: "120px 30px 80px",
        boxSizing: "border-box",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#666",
        lineHeight: "1.8",
        background: "#ffffff",
      }}
    >
      <style>
        {`
          .legal-page {
            width: 100%;
            min-height: 100vh;
          }

          .legal-page > * {
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
          }

          .legal-page .eyebrow {
            display: block;
            width: fit-content;
            margin-bottom: 18px;
            margin-left: auto;
            margin-right: auto;
            padding: 7px 16px;
            border-radius: 30px;
            background: #f4edf6;
            color: #491557;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 2px;
          }

          .legal-page h1 {
            margin-top: 0;
            margin-bottom: 25px;
            color: #491557;
            font-size: clamp(42px, 6vw, 72px);
            line-height: 1.05;
            font-weight: 800;
            letter-spacing: -2px;
          }

          .legal-page h2 {
            margin-top: 55px;
            margin-bottom: 14px;
            color: #491557;
            font-size: 28px;
            line-height: 1.3;
            font-weight: 700;
          }

          .legal-page p {
            max-width: 850px;
            margin-top: 0;
            margin-bottom: 20px;
            color: #777;
            font-size: 17px;
            line-height: 1.9;
            font-weight: 400;
          }

          .legal-page h1::after {
            content: "";
            display: block;
            width: 70px;
            height: 4px;
            margin-top: 25px;
            border-radius: 10px;
            background: #491557;
          }

          @media (max-width: 768px) {
            .legal-page {
              padding: 90px 22px 60px !important;
            }

            .legal-page h1 {
              font-size: 45px;
              letter-spacing: -1px;
            }

            .legal-page h2 {
              margin-top: 40px;
              font-size: 24px;
            }

            .legal-page p {
              font-size: 16px;
              line-height: 1.8;
            }
          }

          @media (max-width: 480px) {
            .legal-page {
              padding: 70px 18px 50px !important;
            }

            .legal-page h1 {
              font-size: 38px;
            }

            .legal-page h2 {
              font-size: 22px;
            }

            .legal-page p {
              font-size: 15px;
            }

            .legal-page .eyebrow {
              font-size: 11px;
              letter-spacing: 1.5px;
            }
          }
        `}
      </style>

      <div className="eyebrow">LEGAL</div>

      <h1>Cookie Policy</h1>

      <p>
        Replace this starter copy with your final cookie policy. This page
        explains how cookies and similar technologies may be used when you
        visit and interact with our website.
      </p>

      <h2>What cookies are</h2>

      <p>
        Cookies are small text files that are stored on your device when you
        visit a website. They can help websites remember your preferences,
        improve functionality, understand website usage, and provide a better
        browsing experience.
      </p>

      <h2>Your choices</h2>

      <p>
        Visitors can manage or disable non-essential cookies through their
        browser settings or available cookie preferences. Disabling certain
        cookies may affect some features or functionality of the website.
      </p>
    </section>
  );
}