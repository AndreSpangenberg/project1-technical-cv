import React from 'react';
import '../App.css';
import './heroSection.css';

function HeroSection() {
    return (
        <div className = 'hero-container'>
          <video src = '/video/video-1.mp4' autoPlay loop muted />
          <h1>TECHNICAL CV</h1>
          <p>CREATED BY ANDRE SPANGENBERG 2020</p>
        </div>
    );
}

export default HeroSection;