import React from 'react';
import '../css/Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-left">
        <h2>Projects We’ve Completed</h2>
        <p>
          At <strong>Exceptions</strong>, we turn ideas into scalable solutions — from websites and portals to custom-built apps. Below are some of our recent launches:
        </p>
        <p><strong>💻 Websites & Web Apps:</strong></p>
        <ul>
          <li>
            <strong>✅ To-Do Web App</strong> – <a href="https://todo-frontend-nu-weld.vercel.app" target="_blank" rel="noopener noreferrer">Visit</a>
          </li>
          <li>
            <strong>✅ Sri Mahalakshmi Garments</strong> – <a href="https://garments-f.vercel.app/" target="_blank" rel="noopener noreferrer">Visit</a>
          </li>
          <li>
            <strong>✅ Smart Recipe (AI Kitchen Assistant)</strong> – <a href="https://smart-kitchen-teal.vercel.app/" target="_blank" rel="noopener noreferrer">Visit</a>
          </li>
          <li>
            <strong>✅ Ganesh Malligai Grocery Shop</strong> – <a href="https://frontend-one-eta-56.vercel.app/" target="_blank" rel="noopener noreferrer">Visit</a>
          </li>
        </ul>

        <p><strong>📱 Mobile Applications:</strong></p>
        <ul>
          <li>
            ✅ <strong>Todo App</strong> – <a href="https://play.google.com/store/apps/details?id=com.exceptionz.quicknotes" target="_blank" rel="noopener noreferrer">Play Store</a>
          </li>
          <li>
            ✅ <strong>Fresh Mart</strong> – <a href="https://play.google.com/store/apps/details?id=com.exceptionz.fittrack" target="_blank" rel="noopener noreferrer">Play Store</a>
          </li>
          <li>
            ✅ <strong>Daily Quotes</strong> – <a href="https://play.google.com/store/apps/details?id=com.exceptionz.shoplist" target="_blank" rel="noopener noreferrer">Play Store</a>
          </li>
          <li>
            ✅<strong>Spotfix</strong> – <a href="https://play.google.com/store/apps/details?id=com.exceptionz.shoplist" target="_blank" rel="noopener noreferrer">Play Store</a>
          </li>
        </ul>
      </div>

      <div className="projects-right">
        <img src="/images/application-business-collaboration-colleagues.jpg" alt="Our Projects Showcase" />
      </div>
    </section>
  );
}
