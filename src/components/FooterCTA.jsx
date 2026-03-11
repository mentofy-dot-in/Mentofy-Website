import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCTA.css';

const FooterCTA = () => {
    return (
        <footer className="footer-cta section">
            <div className="container">
                <div className="cta-box glass-card reveal delay-100">
                    <h2>Ready to Wake Up Disciplined?</h2>
                    <p>Stop snoozing. Start your mornings with purpose and momentum.</p>
                    <button
                        className="btn-primary btn-large cta-btn"
                        onClick={() => window.open('https://play.google.com/store/apps/details?id=com.momentum.alarm', '_blank')}
                    >
                        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                            <path d="M4.3,2.4L15.9,13l-4.2,4.2L4.3,2.4 M16.9,14l2.1,1.2c0.8,0.5,0.8,1.2,0,1.7l-2.1,1.2l-3.2-3.2L16.9,14 M3,2c-0.5,0.3-0.8,0.9-0.8,1.7v16.6c0,0.8,0.3,1.4,0.8,1.7l11.4-11.4L3,2" />
                        </svg>
                        Download on Play Store
                    </button>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Mentofy. All rights reserved.</p>
                    <Link to="/privacy-policy" style={{ color: 'var(--accent-cyan)', textDecoration: 'none', fontSize: '0.9rem', marginTop: '8px', display: 'inline-block' }}>
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default FooterCTA;
