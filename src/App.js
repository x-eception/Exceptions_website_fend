import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Header from './components/Header';
import ThreadRocket from './components/ThreadRocket';
import About from './components/About';
import Blogs from './components/Blogs';
import Projects from './components/Projects';
import FooterContact from './components/FooterContact';
import Ai from './components/Ai';
import './css/styles.css';
function Layout() {
  const location = useLocation();
  const isAiPage = location.pathname === '/ai';

  return (
    <>
      {/* ✅ Show ThreadRocket only if not on /ai */}
      {!isAiPage && <ThreadRocket />}

      {/* ✅ Header and Footer only for home */}
      {!isAiPage && <Header />}

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="scroll-target">
                  <About />
                </section>
                <Blogs />
                <Projects />
              </>
            }
          />
          <Route path="/ai" element={<Ai />} />
        </Routes>
      </main>

      {/* ✅ Footer only for home */}
      {!isAiPage && <FooterContact />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
