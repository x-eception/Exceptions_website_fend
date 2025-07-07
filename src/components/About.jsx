import React from 'react';
import '../css/About.css';

export default function About() {
  return (
    <section id="about">
      <div className="about-left">
        {/* ✅ Logo placed outside red line, like a notebook stamp */}
        <img
          src="/iconnn.png"
          alt="Exceptions Logo"
          className="notebook-stamp"
        />

        <h2>About Us</h2>
        <p>
          We’re <strong>Exceptions</strong> — a team of builders, thinkers, and cloud explorers with one mission:
          <br />
          <em>Craft smart solutions that help businesses scale fast.</em>
        </p>
        <p>
          Born out of a love for clean code and creative marketing, we specialize in:
        </p>
        <ul>
          <li>🔧 MERN Stack Development</li>
          <li>☁️ Cloud Solutions (AWS, Azure, GCP)</li>
          <li>📈 Digital Marketing that Converts</li>
        </ul>
        <p>
          Whether you're just starting up or scaling up — <br />
          <strong>we're your tech + cloud + marketing partner.</strong>
        </p>
        <p>
          ✉️ Reach us at: <a href="mailto:exceptionz13@gmail.com">exceptionz13@gmail.com</a>
        </p>
      </div>

      {/* Vertical Divider */}
      <div className="vertical-line"></div>

      <div className="about-right">
        <img src="/images/ChatGPT Image Jul 6, 2025, 08_40_35 AM.png" alt="About Us" />
      </div>
    </section>
  );
}
