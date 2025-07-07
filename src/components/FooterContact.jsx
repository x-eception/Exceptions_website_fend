import React, { useState } from 'react';
import '../css/styles.css'; 
import '../App.css'

export default function FooterContact() {
  const [status, setStatus] = useState(null);
  const BASE = process.env.REACT_APP_API_URL; // .env: REACT_APP_API_URL=http://localhost:5000 (or Vercel/Render URL)

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form);

    const res = await fetch(`${BASE}/api/contact`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (res.ok) {
      setStatus('✅ Thank you for reaching out!');
      e.target.reset(); // ✅ Clear form
    } else {
      setStatus('❌ Submission failed. Please try again.');
    }
  }

  return (
    <footer id="contact">
      <h2>Try Catch-(ex)</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="mobile" placeholder="Mobile Number" required />
        <button type="submit">Submit</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </footer>
  );
}
