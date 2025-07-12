import React from 'react';

function Hero({ data }) {
  if (!data) return null;

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{data.name}</h1>
        <p className="subtitle">{data.title}</p>
        <p className="bio">{data.bio}</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
