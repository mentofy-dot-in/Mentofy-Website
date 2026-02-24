import React from 'react';
import './SleepHealth.css';

const SleepHealth = () => {
    return (
        <section className="sleep-health section">
            <div className="container">
                <div className="features-header reveal delay-100">
                    <h2>🌙 Sleep Health & Pre-Bed</h2>
                    <p>Momentum isn't just about waking up; it's about going to sleep correctly.</p>
                </div>

                <div className="bento-grid">
                    <div className="bento-card large-card glass-card reveal delay-200">
                        <div className="card-content">
                            <h3>Sleep Reminder Overlay</h3>
                            <p>When your target bedtime arrives, Momentum overrides your screen with beautiful motivational quotes and a countdown. Snooze for 5 minutes or dismiss to gently force yourself off late-night scrolling.</p>
                        </div>
                        <div className="card-visual">
                            <div className="overlay-mockup">
                                <p className="quote">"Sleep is the best meditation." - Dalai Lama</p>
                                <button className="btn-snooze">Snooze (5m)</button>
                            </div>
                        </div>
                    </div>

                    <div className="bento-card small-card glass-card reveal delay-300">
                        <div className="card-content">
                            <h3>Sleep Sounds Player</h3>
                            <p>A beautifully designed media player filled with ambient sleep sounds: Rain, White Noise, Forest, and Ocean.</p>
                            <ul className="feature-list mt-3">
                                <li>✨ Smart Sleep Timer (fade-out after 30m)</li>
                                <li>✨ Infinite loop tracking all night</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bento-card small-card glass-card reveal delay-400">
                        <div className="card-content">
                            <h3>Advanced Wake Settings</h3>
                            <p>No sudden panics.</p>
                            <ul className="feature-list mt-3">
                                <li>✨ <strong>Gentle Wake:</strong> Gradually ramps up volume.</li>
                                <li>✨ <strong>Auto-Stop:</strong> Mutes ignored alarms to save battery.</li>
                                <li>✨ <strong>Wake Up Check:</strong> Silent tests to ensure you didn't fall back asleep.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SleepHealth;
