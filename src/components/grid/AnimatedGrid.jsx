import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';

const AnimatedGrid = () => {
    // 2x3 Grid Positions (x: 0-1, y: 0-2)
    // Coords in percentages relative to the container
    const positions = [
        { x: '0%', y: '0%' },      // 0: Top Left
        { x: '50%', y: '0%' },     // 1: Top Right
        { x: '50%', y: '33.33%' }, // 2: Mid Right
        { x: '50%', y: '66.66%' }, // 3: Bottom Right
        { x: '0%', y: '66.66%' },  // 4: Bottom Left
        { x: '0%', y: '33.33%' },  // 5: Mid Left
    ];

    const cards = [
        { id: 1, type: 'purple', title: '', desc: '', icon: <LayoutGrid size={24} color="white" /> }, // TL: Purple Logo
        { id: 2, type: 'yellow', title: 'Own your power', desc: '', icon: <span className="text-2xl font-light">+</span> }, // TR: Yellow Text
        { id: 3, type: 'dark', title: '', desc: '', icon: null }, // MR: Dark
        { id: 4, type: 'yellow', title: 'Building trust in blockchain technology', desc: '', icon: <span className="text-2xl font-light">+</span> }, // BR: Yellow Text
        { id: 5, type: 'purple', title: 'Total Care. Total Different.', desc: '', icon: <span className="text-xs opacity-50 tracking-widest">+++++++</span> }, // BL: Purple Text
        { id: 6, type: 'dark', title: '', desc: '', icon: null }, // ML: Dark
    ];

    // Card state to track current position index for each card
    // We want them to follow each other, so we offset their starting indices
    const [cardIndices, setCardIndices] = useState(cards.map((_, i) => i));

    useEffect(() => {
        const interval = setInterval(() => {
            setCardIndices(prevIndices => {
                return prevIndices.map(index => (index + 1) % 6);
            });
        }, 1000); // Move every 1 second

        return () => clearInterval(interval);
    }, []);

    const getCardStyle = (type) => {
        switch (type) {
            case 'purple': return 'card-purple';
            case 'yellow': return 'card-yellow';
            case 'blur': return 'card-blur';
            default: return 'card-dark';
        }
    };

    return (
        <div className="animated-grid-container">
            {cards.map((card, i) => {
                const posIndex = cardIndices[i];
                const targetPos = positions[posIndex];
                const Icon = card.icon;

                return (
                    <motion.div
                        key={card.id}
                        className={`grid-card ${getCardStyle(card.type)}`}
                        animate={{
                            left: targetPos.x,
                            top: targetPos.y,
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                    >
                        {card.icon && (
                            <div className="card-icon-lg">
                                {card.icon}
                            </div>
                        )}
                        {card.title && (
                            <div className="mt-auto">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-desc">{card.desc}</p>
                            </div>
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

export default AnimatedGrid;
