import React from 'react';

function Skills({ data }) {
  if (!data || !data.skills) return null;

  const skillIcons = {
    'JavaScript': 'fab fa-js-square',
    'React': 'fab fa-react',
    'Node.js': 'fab fa-node-js',
    'MongoDB': 'fas fa-database',
    'Express.js': 'fas fa-server',
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'Python': 'fab fa-python',
    'Git': 'fab fa-git-alt',
    'AWS': 'fab fa-aws',
    'Docker': 'fab fa-docker',
    'TypeScript': 'fas fa-code'
  };

  return (
    <section id="skills" className="section skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-grid">
        {data.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <i className={skillIcons[skill] || 'fas fa-code'}></i>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
