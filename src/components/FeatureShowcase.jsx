import React from 'react';
import './FeatureShowcase.css';

const FeatureShowcase = () => {
    return (
        <section className="features section">
            <div className="container">
                <div className="features-header reveal delay-100">
                    <h2>Engineered for Excellence</h2>
                    <p>Everything you need to build unbreakable habits.</p>
                </div>

                <div className="bento-grid">
                    <div className="bento-card large-card glass-card reveal delay-200">
                        <div className="card-content">
                            <h3>Intelligent Analytics</h3>
                            <p>Visualize your progress with stunning, interactive charts that help you identify patterns and stay on track.</p>
                        </div>
                        <div className="card-visual">
                            <div className="mock-chart"></div>
                        </div>
                    </div>

                    <div className="bento-card small-card glass-card reveal delay-300">
                        <div className="card-content">
                            <h3>Deep Focus Mode</h3>
                            <p>Eliminate distractions with a dedicated focus environment.</p>
                        </div>
                    </div>

                    <div className="bento-card small-card glass-card reveal delay-400">
                        <div className="card-content">
                            <h3>Smart Reminders</h3>
                            <p>Get notified exactly when you're most likely to complete a habit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureShowcase;
