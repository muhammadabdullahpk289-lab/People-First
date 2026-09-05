import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Darrell Steward",
    handle: "@darrels",
    color: "#4a4fc4",
    text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["#another"],
  },
  {
    name: "Leslie Alexander",
    handle: "@lesslie",
    color: "#3fae9e",
    text: "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
    tags: ["#postcrafts"],
  },
  {
    name: "Jenny Wilson",
    handle: "@jennywilson",
    color: "#d18b2c",
    text: "This is a top quality product. No need to think twice before making it live on web.",
    tags: ["#make_it_fast"],
  },
  {
    name: "Kristin Watson",
    handle: "@kristinwatson2",
    color: "#4a4fc4",
    text: "Finally, I've found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    tags: ["#postcrafts"],
  },
  {
    name: "Guy Hawkins",
    handle: "@jennywilson",
    color: "#c94a5a",
    text: "This is a top quality product. No need to think twice before making it live on web.",
    tags: ["#make_it_fast"],
  },
  {
    name: "Marvin McKinney",
    handle: "@jennywilson",
    color: "#7b5fc7",
    text: "With Postcrafts, it's quicker with the customer, the customer is more ensured of getting exactly what they ordered, and I'm all for the efficiency.",
    tags: ["#dev", "#tools"],
  },
  {
    name: "Annette Black",
    handle: "@jennywilson",
    color: "#2f8fd6",
    text: "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["#another"],
  },
  {
    name: "Floyd Miles",
    handle: "@jennywilson",
    color: "#a8323f",
    text: "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: ["#postcrafts"],
  },
];

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="tst-twitter-icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M23 4.9c-.8.35-1.68.6-2.6.7a4.5 4.5 0 0 0 1.98-2.5c-.87.52-1.84.9-2.87 1.1A4.52 4.52 0 0 0 11.9 8.4 12.83 12.83 0 0 1 2.6 3.6a4.52 4.52 0 0 0 1.4 6.03 4.48 4.48 0 0 1-2.05-.57v.06a4.52 4.52 0 0 0 3.63 4.43 4.52 4.52 0 0 1-2.04.08 4.52 4.52 0 0 0 4.22 3.14A9.06 9.06 0 0 1 1 19.54a12.79 12.79 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.2 9.2 0 0 0 23 4.9z"
    />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="tst-user-icon" aria-hidden="true">
    <circle cx="12" cy="8" r="4" fill="#fff" />
    <path fill="#fff" d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8v1H4v-1z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="tst-heading">People are saying about us</h2>

      <div className="tst-grid">
        {testimonials.map((t) => (
          <div className="tst-card" key={t.name + t.text.slice(0, 10)}>
            <div className="tst-card-header">
              <div className="tst-avatar" style={{ background: t.color }}>
                <UserIcon />
              </div>
              <div className="tst-name-block">
                <p className="tst-name">{t.name}</p>
                <p className="tst-handle">{t.handle}</p>
              </div>
              <TwitterIcon />
            </div>

            <p className="tst-text">{t.text}</p>

            <p className="tst-tags">
              {t.tags.map((tag, i) => (
                <React.Fragment key={tag}>
                  <span className="tst-tag">{tag}</span>
                  {i < t.tags.length - 1 && " "}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;