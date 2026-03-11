import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo"><Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Mentofy</Link></div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className={`toggle-track ${theme === 'light' ? 'light-active' : ''}`}>
              <span className="toggle-icon sun">☀️</span>
              <span className="toggle-icon moon">🌙</span>
              <div className="toggle-thumb" />
            </div>
          </button>
          <button
            className="btn-primary nav-cta"
            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.momentum.alarm', '_blank')}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M4.3,2.4L15.9,13l-4.2,4.2L4.3,2.4 M16.9,14l2.1,1.2c0.8,0.5,0.8,1.2,0,1.7l-2.1,1.2l-3.2-3.2L16.9,14 M3,2c-0.5,0.3-0.8,0.9-0.8,1.7v16.6c0,0.8,0.3,1.4,0.8,1.7l11.4-11.4L3,2" />
            </svg>
            Get on Play Store
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
