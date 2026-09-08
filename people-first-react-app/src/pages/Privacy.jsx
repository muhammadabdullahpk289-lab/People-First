export default function Privacy() {
  return (
    <section
      className="legal-page"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "120px 30px 80px",
        fontFamily: "Inter, Arial, sans-serif",
        color: "#666",
        lineHeight: "1.8",
      }}
    >
      <style>
        {`
          .legal-page {
            background: #ffffff;
          }

          .legal-page .eyebrow {
            display: inline-block;
            margin-bottom: 18px;
            padding: 7px 16px;
            border-radius: 30px;
            background: #f4edf6;
            color: #491557;
            font-size: 13px;
            font-weight: 700;
            letter-spacing: 2px;
          }

          .legal-page h1 {
            margin: 0 0 25px;
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
            margin: 0 0 20px;
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

      <h1>Privacy Policy</h1>

      <p>
        Replace this starter copy with your final privacy policy. This page
        explains how we collect, use, protect, and manage information when you
        interact with our website and services.
      </p>

      <h2>Information we collect</h2>

      <p>
        We may collect information that you provide directly to us, such as
        your name, email address, contact details, and other information you
        choose to submit through our website. We may also collect basic
        technical information to help us improve the performance and security
        of our website.
      </p>

      <h2>How we use information</h2>

      <p>
        We use collected information to provide and improve our services,
        respond to enquiries, communicate with users, maintain website
        security, and understand how our website is being used. We retain
        information only for as long as reasonably necessary for these
        purposes and applicable legal requirements.
      </p>
    </section>
  );
}