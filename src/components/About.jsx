import React, { useState } from 'react';
import '../css/About.css';

export default function About() {
  const [showToast, setShowToast] = useState(false);

  const handleScrollClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const highlights = [
    {
      title: '🔧 MERN Stack Development',
      desc: 'We build scalable full-stack web and mobile apps using MongoDB, Express, React, and Node.js. Ideal for fast-moving startups needing clean architecture.'
    },
    {
  title: '📱 Mobile App Development',
  desc: 'Building intuitive, high-performance apps for Android and iOS using React Native and Flutter. Designed for scale and smooth user experiences.'
},{
  title: '🌐 Domain Purchase & Setup',
  desc: 'We help register, configure, and manage domains with DNS, SSL, and cloud hosting for seamless web deployment.'
},
    {
      title: '☁️ Cloud Solutions',
      desc: 'We help businesses migrate, deploy, and optimize apps using AWS, Azure, and Google Cloud. Our DevOps support ensures smooth CI/CD and uptime.'
    },
    {
      title: '📈 Digital Marketing',
      desc: 'Our team crafts digital campaigns that deliver. From SEO to targeted ads, we drive ROI through strategic execution and constant analytics optimization.'
    },
    {
      title: '🤝 Tech Consulting',
      desc: 'We advise startups on tech stacks, architecture, and scaling strategies. From MVP to enterprise scale, our insight helps save time and cost.'
    },
    {
      title: '🚀 Product Strategy',
      desc: 'Helping founders define product goals, roadmaps, and lean MVPs for early market traction and validation.'
    },
    {
      title: '🎯 Branding & UI/UX',
      desc: 'Designing interfaces that not only look good but convert. From wireframes to polished UIs with a strong identity.'
    },
{
  title: '🤖 AI Automation',
  desc: 'We automate business workflows using AI—chatbots, task bots, and smart schedulers—reducing manual effort and boosting efficiency.'
},
{
  title: '🧠 AI Model Handling',
  desc: 'From training to deployment, we manage machine learning models using Python, TensorFlow, and cloud ML pipelines for real-time insights.'
},
{
  title: '🔗 Domain Integration',
  desc: 'We connect your domain with services like Vercel, Netlify, AWS, and email platforms, ensuring a smooth and secure digital identity.'
}
  ];

  return (
    <section id="about-section">
      <div className="about-title-wrapper">
        <div className="about-title-row">
          <img src="/iconnn.png" alt="Logo" className="notebook-stamp-inline" />
          <h2>About Us</h2>
          <button className="scroll-icon" onClick={handleScrollClick}>👇</button>
        </div>
      </div>

      <div className="about-grid">
        {highlights.map((item, index) => (
          <div className="about-item-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {showToast && (
        <div className="toast-message">
          📧 Reach us at: <a href="mailto:exceptionz13@gmail.com">exceptionz13@gmail.com</a>
        </div>
      )}
    </section>
  );
}
