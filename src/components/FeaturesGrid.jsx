import React from 'react';
import './FeaturesGrid.css';

const featureCategories = [
    {
        title: "🧠 Cognitive & Memory",
        features: [
            { name: "Math Task", desc: "Solve arithmetic problems (simplest to complex multiplication)." },
            { name: "Emoji Math", desc: "Calculate the value of equations using emojis." },
            { name: "Memory Card", desc: "Flip and match pairs of hidden cards." },
            { name: "Pattern Task", desc: "Memorize and redraw a momentarily flashing grid." },
            { name: "Stroop Match", desc: "Tap the word matching the ink color, not the text." },
            { name: "Ascending Sort", desc: "Tap random numbers in ascending order fast." }
        ]
    },
    {
        title: "🏃‍♂️ Physical & Action",
        features: [
            { name: "Location Scan", desc: "Scan a specific physical barcode (e.g., toothpaste) to dismiss." },
            { name: "Step Task", desc: "Walk a predetermined number of steps around your room." },
            { name: "Shake Task", desc: "Violently shake your phone a specific number of times." }
        ]
    },
    {
        title: "🕹️ Arcade & Mini-Games",
        features: [
            { name: "Flappy Wake", desc: "Guide a character through pipes to reach a target score." },
            { name: "Snake Game", desc: "Classic snake; eat blocks without crashing." },
            { name: "Maze Runner", desc: "Navigate a ball through a complex generated maze." },
            { name: "Bubble Pop", desc: "Rapidly tap moving bubbles without missing." },
            { name: "Tap Task", desc: "Tap the screen as fast as humanly possible." }
        ]
    },
    {
        title: "✍️ Reading & Word",
        features: [
            { name: "Typing Task", desc: "Accurately re-type a generated motivational quote." },
            { name: "Word Scramble", desc: "Unscramble a 5-to-8 letter English word." },
            { name: "Word Chain", desc: "Enter a word starting with the previous word's last letter." },
            { name: "Reverse Typer", desc: "Type a word completely backwards to prove alertness." }
        ]
    },
    {
        title: "🎨 Logic & Puzzles",
        features: [
            { name: "Sudoku Mini", desc: "Solve a 4x4 or 6x6 Sudoku grid." },
            { name: "Color Tiles", desc: "Tap specific colored tiles in rapid sequence." },
            { name: "Compass Snoop", desc: "Orient the phone in a 3D space using device sensors." }
        ]
    }
];

const FeaturesGrid = () => {
    return (
        <section className="features-grid section">
            <div className="container">
                <div className="features-header reveal delay-100">
                    <h2>The 24 Wake-Up Challenges</h2>
                    <p>Momentum guarantees you get out of bed with tasks that force cognitive and physical alertness.</p>
                </div>

                <div className="challenge-categories">
                    {featureCategories.map((category, idx) => (
                        <div key={idx} className={`category-section reveal delay-${Math.min((idx + 2) * 100, 500)}`}>
                            <h3 className="category-title">{category.title}</h3>
                            <div className="grid-list">
                                {category.features.map((feature, fIdx) => (
                                    <div key={fIdx} className="grid-item glass-card">
                                        <h4>{feature.name}</h4>
                                        <p>{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesGrid;
