import React from 'react';
import Skills3DCloud from './Skills3DCloud';
import './Skills.css';

const Skills = () => (
  <section className="skills-section">
    <h2 className="skills-heading-animated">Skills</h2>
    <div className="skills-flat-tags">
      {[
        'React', 'Flask', 'Next.js', 'Typescript', 'Angular','Flutter', 'Three.js','Node.js', 'Python', 'Streamlit', 'Flutter', 'Git', 'Postgres', 'Docker', 'Java', 'C', 'C++', 'MongoDB', 'MySQL', 'Firebase', 'AWS', 'Django',
      ].map(skill => (
        <span className="skill-tag" key={skill}>{skill}</span>
      ))}
    </div>
    <div className="skills-3d-cloud">
      <Skills3DCloud />
    </div>
    
  </section>
);

export default Skills; 