import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact-section-modern">
    <div className="contact-section-badge">Contact</div>
    <h2 className="contact-section-title">Get in Touch</h2>
    <div className="contact-card">
      <p className="contact-desc">
        Want to chat? Just shoot me a mail{' '}
        <a className="contact-link-highlight" href="mailto:hs3155@srmist.edu.in">with a direct question</a>{' '}
        and I'll respond whenever I can.
      </p>
      {/* If you have contact links, place them here */}
    </div>
  </section>
);

export default Contact; 