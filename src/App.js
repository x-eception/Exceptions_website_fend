import React from 'react';
import Header from './components/Header';
import ThreadRocket from './components/ThreadRocket';
import About from './components/About';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import FooterContact from './components/FooterContact';
import './css/styles.css';

export default function App() {
  return (
    <>
      {/* Top Navigation */}
      <Header />

      {/* Floating Paper Rocket at 85% of screen */}
      <ThreadRocket />

      {/* Main Page Sections */}
      <main>
        {/* 🎯 Scroll Target Section */}
        <section id="scroll-target">
          <About />
        </section>

        <Blogs />
        <Projects />
      </main>

      {/* Footer Contact Section */}
      <FooterContact />
    </>
  );
}
