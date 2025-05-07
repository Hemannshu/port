import React, { useState } from 'react';
import './Education.css';

const srmLogo = process.env.PUBLIC_URL + '/assets/srm-logo.png';
const salwanLogo = process.env.PUBLIC_URL + '/assets/salwan-logo.png';
const bluebellsLogo = process.env.PUBLIC_URL + '/assets/bluebells-logo.jpeg';

const education = [
  {
    school: 'SRM Institute of Science and Technology',
    logo: srmLogo,
    degree: 'B.Tech in Computer Science (CSE-IT)',
    location: 'Chennai, India',
    duration: '2022 – 2026',
    highlights: [
      'GPA: 8.8/10',
      'Specialization in Information Technology',
      'Relevant coursework: Data Structures, Algorithms, NLP, Computer Networks, Operating Systems, DBMS',
      'Active participant in hackathons and coding competitions'
    ]
  },
  {
    school: 'Salwan Public School',
    logo: salwanLogo,
    degree: 'Class 12 (CBSE)',
    location: 'Gurgaon, India',
    duration: '2020 – 2021',
    highlights: [
      'Grade: 88.2% ',
    ]
  },
  {
    school: 'Blue Bells Public School',
    logo: bluebellsLogo,
    degree: 'Class 10 (CBSE)',
    location: 'Gurgaon, India',
    duration: '2018 – 2019',
    highlights: [
      'Grade: 92%',
      'Foundation in STEM subjects',
      'Awarded for academic excellence',
      'Participated in national science exhibitions'
    ]
  }
];

const Education = () => {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="education" id="education">
      <div className="education-section-badge">Education</div>
      <h2 className="education-section-title">My Academic Journey</h2>
      
      <div className="education-container">
        {education.map((edu, idx) => (
          <div 
            className={`education-item ${expandedIdx === idx ? 'expanded' : ''}`}
            key={idx}
            onClick={() => toggleExpand(idx)}
          >
            <div className="education-header">
              <div className="school-info">
                <img src={edu.logo} alt={edu.school} className="school-logo" />
                <div>
                  <h3>{edu.school}</h3>
                  <p>{edu.degree}</p>
                </div>
              </div>
              
              <div className="education-meta">
                <span className="grade">{edu.grade}</span>
                <span className="duration">{edu.duration}</span>
                <div className={`expand-icon ${expandedIdx === idx ? 'expanded' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="education-details">
              <div className="location">{edu.location}</div>
              
              <ul className="highlights-list">
                {edu.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;