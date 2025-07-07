import React from 'react'
import '../App.css'

export default function Header() {
  return (
    <header id="site-header">
      <div className="logo">(Ex)-ceptions</div>
      <nav className="nav-links">
        <a href="#about">About Us</a>
        <a href="#blogs">Blogs</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Keep in Touch</a>
      </nav>
    </header>
  )
}
