import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure this path is correct

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

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
    <header className="header">
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </div>
      <div className="logo">(Ex)-ceptions</div>
      <nav className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
        <a href="#blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Keep in Touch</a>
      </nav>
    </header>
  );
}
