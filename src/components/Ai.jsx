import React, { useState, useEffect, useRef } from 'react';
import '../css/Ai.css';
import botLogo from './ChatGPT Image Jul 12, 2025, 07_12_37 PM.png'; // your round logo

const services = [
  { title: '🔧 MERN Stack Development', desc: 'We build scalable full-stack web and mobile apps using MongoDB, Express, React, and Node.js. Ideal for fast-moving startups needing clean architecture.' },
  { title: '📱 Mobile App Development', desc: 'Building intuitive, high-performance apps for Android and iOS using React Native and Flutter. Designed for scale and smooth user experiences.' },
  { title: '🌐 Domain Purchase & Setup', desc: 'We help register, configure, and manage domains with DNS, SSL, and cloud hosting for seamless web deployment.' },
  { title: '☁️ Cloud Solutions', desc: 'We help businesses migrate, deploy, and optimize apps using AWS, Azure, and Google Cloud. Our DevOps support ensures smooth CI/CD and uptime.' },
  { title: '📈 Digital Marketing', desc: 'Our team crafts digital campaigns that deliver. From SEO to targeted ads, we drive ROI through strategic execution and constant analytics optimization.' },
  { title: '🤝 Tech Consulting', desc: 'We advise startups on tech stacks, architecture, and scaling strategies. From MVP to enterprise scale, our insight helps save time and cost.' },
  { title: '🚀 Product Strategy', desc: 'Helping founders define product goals, roadmaps, and lean MVPs for early market traction and validation.' },
  { title: '🎯 Branding & UI/UX', desc: 'Designing interfaces that not only look good but convert. From wireframes to polished UIs with a strong identity.' },
  { title: '🤖 AI Automation', desc: 'We automate business workflows using AI—chatbots, task bots, and smart schedulers—reducing manual effort and boosting efficiency.' },
  { title: '🧠 AI Model Handling', desc: 'From training to deployment, we manage machine learning models using Python, TensorFlow, and cloud ML pipelines for real-time insights.' },
  { title: '🔗 Domain Integration', desc: 'We connect your domain with services like Vercel, Netlify, AWS, and email platforms, ensuring a smooth and secure digital identity.' },
  // ✅ New: Contact / Reach Us entry
  { title: '📧 Reach us', desc: 'You can reach us at exceptionz13@gmail.com. We’ll get back to you ASAP!' }
];

const predefinedQA = services.map(service => ({
  question: service.title.replace(/^[^a-zA-Z]+/, '').toLowerCase(),
  answer: service.desc
}));

export default function Ai() {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);

  const handleAsk = (customQuery) => {
    const userInput = (customQuery || query).trim();
    const lower = userInput.toLowerCase();

    let botResponse;

    if (['hi', 'hello', 'hey', 'hai'].includes(lower)) {
      botResponse = '👋 Hello! How can I help you today?';
    } else if (
      lower.includes('contact') ||
      lower.includes('reach') ||
      lower.includes('email')
    ) {
      botResponse = '📧 You can reach us at exceptionz13@gmail.com. We’ll get back to you ASAP!';
    } else {
      const matched = predefinedQA.find(q => lower.includes(q.question));
      botResponse = matched ? matched.answer : "🤖 I'm still learning. We'll have an answer soon!";
    }

    setChat(prev => [
      ...prev,
      { sender: 'user', text: userInput },
      { sender: 'bot', text: botResponse }
    ]);

    setQuery('');
    setSuggestions([]);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    const matches = predefinedQA.filter(q =>
      q.question.includes(value.toLowerCase())
    );
    setSuggestions(matches.slice(0, 5));
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  return (
    <div id="ai" className="chatbot-fullscreen">
      <div className="chatbot-header">
        <img src={botLogo} alt="Bot Logo" className="bot-logo" />
        Exceptionz AI Assistant
      </div>

      <div className="chatbot-messages">
        {chat.map((item, i) => (
          <div className={`chat-message ${item.sender}`} key={i}>
            <div className="avatar">{item.sender === 'user' ? '🧑' : '🤖'}</div>
            <div className="message-text">{item.text}</div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {suggestions.length > 0 && (
        <div className="chat-suggestions-top">
          {suggestions.map((s, i) => (
            <div key={i} className="suggestion" onClick={() => handleAsk(s.question)}>
              {s.question}
            </div>
          ))}
        </div>
      )}

      <div className="chat-input-area-row">
        <input
          type="text"
          placeholder="Ask about our services..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
        />
        <button onClick={() => handleAsk()}>Send</button>
      </div>
    </div>
  );
}
