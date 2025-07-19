import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/styles.css';
import '../App.css';

export default function FooterContact() {
  const [status, setStatus] = useState(null);
  const [ask, setAsk] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const BASE = process.env.REACT_APP_API_URL;

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);
    data.ask = ask; // include the ask question

    const res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setStatus('✅ Thank you for reaching out!');
      e.target.reset();
      setAsk('');
    } else {
      setStatus('❌ Submission failed. Please try again.');
    }
  }

  return (
    <footer id="contact">
      {/* ✅ Floating Logo */}
      <div
        className="chatbot-logo-wrapper"
        onClick={() => navigate('/ai')}
        onTouchStart={() => navigate('/ai')}
      >
        <img
          src="/images/ChatGPT Image Jul 12, 2025, 07_12_37 PM.png"
          alt="EX Logo"
          className="footer-floating-logo"
        />
        <span className="click-me-label">Click me</span>
      </div>

      <h2>Try Catch-(ex)</h2>

      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="mobile" placeholder="Mobile Number" required />

        {/* ✅ Ask Anything field - triggers modal */}
        <textarea
          name="ask"
          value={ask}
          placeholder="Ask anything (optional – will be sent to email)"
          readOnly
          onClick={() => setShowModal(true)}
          required={false}
        />

        <button type="submit">Submit</button>
      </form>

      {status && <p className="form-status">{status}</p>}
      <p className="footer-rights">© 2025 Exceptionz ❤️ | All Rights Reserved</p>

      {/* ✅ Privacy Policy & Terms buttons */}
      <div className="footer-links">
        <button
          className="footer-link-button"
          onClick={() => (window.location.href = '/pp.html')}
        >
          Privacy Policy
        </button>
        <button
          className="footer-link-button"
          onClick={() => (window.location.href = '/t&c.html')}
        >
          Terms & Conditions
        </button>
      </div>

      {/* ✅ Popup Modal */}
      {showModal && (
        <div className="ask-modal-overlay">
          <div className="ask-modal">
            <h3>Ask Anything</h3>
            <textarea
              rows="4"
              placeholder="Type your question..."
              onChange={(e) => setAsk(e.target.value)}
              value={ask}
              autoFocus
            />
            <button onClick={() => setShowModal(false)}>OK</button>
          </div>
        </div>
      )}
    </footer>
  );
}
