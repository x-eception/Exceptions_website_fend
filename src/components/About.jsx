import React from 'react';
import '../css/About.css'

export default function About() {
  const images = [
    'stickman.png',
     'exceptions4.png',
         'exceptions4.png',
          'stickman.png',
    // 'ChatGPT Image Jun 25, 2025, 01_02_18 PM.png',
    // 'aws_banner.png',
    // 'digital_market.png',
  ]; // Add your actual image file names

  return (
    <section id="about">
      <div className="about-left">
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

      <div className="about-right">
        <div className="image-gallery">
          {images.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={`/images/${img}`} alt={`Gallery ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
