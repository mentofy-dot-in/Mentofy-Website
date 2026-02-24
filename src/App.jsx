import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import SleepHealth from './components/SleepHealth';
import AntiCheat from './components/AntiCheat';
import FooterCTA from './components/FooterCTA';
import { Analytics } from '@vercel/analytics/react';


function App() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="bg-mesh"></div>
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <SleepHealth />
        <AntiCheat />
      </main>
      <FooterCTA />
      <Analytics />
    </>

  );
}

export default App;
// Deployment Trigger
