import React from 'react';
import './HeroSection.css'; // Assuming you have a CSS file for styles

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="profile-pic-container">
                <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
            </div>
            <h1>Welcome to My Portfolio</h1>
        </div>
    );
};

export default HeroSection;