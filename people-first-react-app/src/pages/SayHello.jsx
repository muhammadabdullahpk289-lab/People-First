import { useState } from "react";

export default function SayHello() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="contact-page">
      <div className="contact-copy">
        <div className="eyebrow">SAY HELLO</div>
        <h1>Let’s start a conversation.</h1>
        <p>Tell us a little about what you are working on and we’ll take it from there.</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name<input name="name" required placeholder="Your name" /></label>
        <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
        <label>Message<textarea name="message" required rows="6" placeholder="Tell us about your project..." /></label>
        <button className="primary-btn" type="submit">Send Message</button>
        {sent && <p className="form-success">Thanks! Your demo form was submitted.</p>}
      </form>
    </section>
  );
}