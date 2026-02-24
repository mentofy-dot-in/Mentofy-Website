import React from 'react';
import './AntiCheat.css';

const AntiCheat = () => {
    return (
        <section className="anti-cheat section">
            <div className="container">
                <div className="features-header reveal delay-100">
                    <h2>🛡️ Unbreakable Anti-Cheat</h2>
                    <p>Designed for the heaviest sleepers. You cannot bypass Momentum without actually waking up.</p>
                </div>

                <div className="bento-grid">
                    <div className="bento-card small-card glass-card reveal delay-200">
                        <div className="card-content">
                            <div className="icon-wrapper">🚫</div>
                            <h3>Prevent Power Off</h3>
                            <p>Utilizing Android Accessibility, Momentum blocks the physical power button menu during an active alarm. You can't just restart your phone to escape.</p>
                        </div>
                    </div>

                    <div className="bento-card small-card glass-card reveal delay-300">
                        <div className="card-content">
                            <div className="icon-wrapper">🔒</div>
                            <h3>App-Lock Persistence</h3>
                            <p>Try to swipe to the Home screen? A background watchdog instantly flags the bypass, resumes the ringing, and forces the UI back to the front.</p>
                        </div>
                    </div>

                    <div className="bento-card small-card glass-card reveal delay-400">
                        <div className="card-content">
                            <div className="icon-wrapper">⏳</div>
                            <h3>Task State Persistence</h3>
                            <p>Force-closing the app won't save you. If you didn't complete your math problem, the alarm resumes the moment the phone's scheduler re-syncs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AntiCheat;
