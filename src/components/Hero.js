import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi 👋, I'm Tanya</h1>
          
          <p>Building full-stack solutions, designing with intent, and diving deep into systems — all while still an engineering student.</p>
        </div>
        <img src={'/assets/profilepic.jpg'} alt="Tanya Yadav" className="hero-profile" />
      </div>
    </section>
  );
};

export default Hero; 