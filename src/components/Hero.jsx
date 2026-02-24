import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section">
            <div className="container hero-content">
                <div className="hero-text reveal delay-100">
                    <div className="badge">
                        <span className="glow-dot"></span>
                        Introducing Momentum
                    </div>
                    <h1 className="headline">
                        Stop Tracking.<br />
                        <span className="text-gradient">Start Achieving.</span>
                    </h1>
                    <p className="sub-headline">
                        The next generation habit tracker that adapts to your life. Powerful analytics, beautiful design, and zero friction.
                    </p>
                    <div className="hero-actions">
                        <button
                            className="btn-primary btn-large"
                            onClick={() => window.open('https://play.google.com/store/apps/details?id=com.momentum.alarm', '_blank')}
                        >
                            Get it on Google Play
                        </button>
                        <p className="trusted-text">Join 50,000+ top performers</p>
                    </div>
                </div>

                <div className="hero-visual reveal delay-300">
                    <div className="mockup-container">
                        {/* The actual image will be placed here once generated */}
                        <img src="/momentum_app_mockup.png" alt="Momentum App Mockup" className="app-mockup" />
                        <div className="mockup-glow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
