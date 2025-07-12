import React from 'react';

function About({ data }) {
  if (!data) return null;

  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img src="/api/placeholder/250/250" alt={data.name} />
        </div>
        <div className="about-text">
          <p>{data.bio}</p>
          <p>
            I'm passionate about creating exceptional digital experiences that combine 
            beautiful design with robust functionality. With expertise in the MERN stack, 
            I bring ideas to life through clean, efficient code and thoughtful user interfaces.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, contributing 
            to open-source projects, or enjoying a good cup of coffee while reading about 
            the latest in web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
