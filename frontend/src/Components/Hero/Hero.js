import React from 'react';

import Background from '@/Assets/img/bank-tree.jpeg';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <img src={Background} alt="Background" />
            <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
};

export default Hero;