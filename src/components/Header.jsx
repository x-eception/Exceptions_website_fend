// import React from 'react'
// import '../App.css'

// export default function Header() {
//   return (
//     <header id="site-header">
//       <div className="logo">(Ex)-ceptions</div>
//       <nav className="nav-links">
//         <a href="#about">About Us</a>
//         <a href="#blogs">Blogs</a>
//         <a href="#projects">Projects</a>
//         <a href="#contact">Keep in Touch</a>
//       </nav>
//     </header>
//   )
// }
// 



import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header id="site-header">
      <div className="logo">(Ex)-ceptions</div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <nav className={`nav-links ${menuOpen ? 'show-menu' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Keep in Touch</a>
      </nav>
    </header>
  );
}
