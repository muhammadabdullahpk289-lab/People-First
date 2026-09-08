export default function Terms() {
  return (
    <section
      className="legal-page"
      style={{
        maxWidth: "1300px",
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

      <h1>Terms &amp; Conditions</h1>

      <p>
        Replace this starter copy with your final terms and conditions. These
        terms explain the rules, responsibilities, and conditions that apply
        when using our website and services.
      </p>

      <h2>Use of this website</h2>

      <p>
        Users are expected to use this website responsibly and only for lawful
        purposes. All website content, branding, designs, text, graphics, and
        other intellectual property remain protected by applicable laws and
        may not be copied, reproduced, or distributed without appropriate
        permission.
      </p>

      <h2>Changes</h2>

      <p>
        We may update these terms from time to time to reflect changes to our
        services, website, or applicable requirements. Updated terms will be
        published on this page, and continued use of the website after changes
        are posted may indicate acceptance of the updated terms.
      </p>
    </section>
  );
}