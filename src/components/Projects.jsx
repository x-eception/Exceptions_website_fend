import React, { useRef, useEffect } from 'react';
import '../css/Projects.css';

export default function Projects() {
  const mobileRef = useRef(null);
  const webRef = useRef(null);

  const pauseScroll = (ref) => {
    const el = ref.current;
    if (el) {
      const track = el.querySelector('.scroll-track');
      if (!track) return;
      track.style.animationPlayState = 'paused';

      clearTimeout(el.resumeTimer);
      el.resumeTimer = setTimeout(() => {
        track.style.animationPlayState = 'running';
      }, 5000);
    }
  };

  useEffect(() => {
    const refs = [mobileRef, webRef];
    refs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      const handler = () => pauseScroll(ref);
      el.addEventListener('scroll', handler);
      el.addEventListener('touchstart', handler);
      el.addEventListener('mouseenter', handler);
      return () => {
        el.removeEventListener('scroll', handler);
        el.removeEventListener('touchstart', handler);
        el.removeEventListener('mouseenter', handler);
      };
    });
  }, []);

  const mobileApps = [
    {
      title: 'Todo App (Mobile)',
      description: 'Manage tasks easily.',
      link: 'https://play.google.com/store/apps/details?id=com.exceptionz.quicknotes',
      image: '/images/10.jpg',
    },
    {
      title: 'Fresh Mart(Mobile)',
      description: 'Instant groceries.',
      link: 'https://play.google.com/store/apps/details?id=com.exceptionz.fittrack',
      image: '/images/8.jpg',
    },
    {
      title: 'Daily Quotes',
      description: 'Inspirational daily quotes.',
      link: 'https://play.google.com/store/apps/details?id=com.exceptionz.shoplist',
      image: '/images/9.jpg',
    },
    {
      title: 'Spotfix',
      description: 'Fix & report issues.',
      link: 'https://play.google.com/store/apps/details?id=com.exceptionz.shoplist',
      image: '/images/5.jpg',
    },
  ];

  const webApps = [
    {
      title: 'To-Do Web App',
      description: 'Plan your daily tasks.',
      link: 'https://todo-frontend-nu-weld.vercel.app',
      image: '/images/4.png',
    },
    {
      title: 'Smart Recipe',
      description: 'AI-powered recipes.',
      link: 'https://smart-kitchen-teal.vercel.app/',
      image: '/images/3.png',
    },
    {
      title: 'Sri Mahalakshmi Garments',
      description: 'Growiong Clothing Company.',
      link: 'https://garments-f.vercel.app/',
      image: '/images/2.png',
    },
    {
      title: 'Ganesh Malligai',
      description: 'Online grocery shop.',
      link: 'https://frontend-one-eta-56.vercel.app/',
      image: '/images/1.png',
    },
    {
      title: 'B u d - K e r',
      description: 'Personalized Budget Tracker.',
      link: 'https://budgettracker-brown.vercel.app/',
      image: '/images/6.png',
    },
    {
      title: 'Scoops Dreamz',
      description: ' iZe Cream Website',
      link: 'https://scoopsdreamz.netlify.app/',
      image: '/images/7.png',
    },
  ];

  return (
    <section id="projects">
      <div className="projects-left-title">
        <h2>Our Projects</h2>
      </div>

      <div className="projects-right-content">
         <h3 className="projects-subtitle">💻 Web Apps</h3>
        <div className="scroll-wrapper" ref={webRef}>
          <div className="scroll-track scroll-right">
            {[...webApps, ...webApps].map((proj, i) => (
              <div className="project-card" key={`web-${i}`}>
                <img src={proj.image} alt={proj.title} className="project-image" />
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>

        <h3 className="projects-subtitle">📱 Mobile Apps</h3>
        <div className="scroll-wrapper" ref={mobileRef}>
          <div className="scroll-track scroll-left">
            {[...mobileApps, ...mobileApps].map((proj, i) => (
              <div className="project-card" key={`mobile-${i}`}>
                <img src={proj.image} alt={proj.title} className="project-image" />
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  View App →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
