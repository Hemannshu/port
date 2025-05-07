import React, { useState } from 'react';
import './Experience.css';

const arka = process.env.PUBLIC_URL + '/assets/arka.png';
const dubg = process.env.PUBLIC_URL + '/assets/dubg.jpeg';
const bharat = process.env.PUBLIC_URL + '/assets/bharat.png';
const oaisis = process.env.PUBLIC_URL + '/assets/oaisis.jpeg';

const experiences = [
  {
    company: 'Arka Consultancy',
    logo: arka,
    title: 'SDE Intern',
    duration: 'Aug 2024 - Nov 2024',
    description: [
      'Developed and deployed cloud-based web applications using AWS services such as EC2, Lambda, and S3, supporting scalable infrastructure for over 10,000 concurrent users.',
       'Collaborated with cross-functional teams across engineering, product, and DevOps to design and implement enterprise-grade solutions with high availability and fault tolerance.',
       'Contributed to backend development using Java and C++ to build performance-critical services, improving system efficiency by up to 30%.',
       'Actively engaged in Agile methodologies, including daily Scrum meetings, sprint planning, and bi-weekly retrospectives, ensuring timely delivery of project milestones.'
    ],
    location: 'Bangalore, India',
    skills: ['AWS', 'Java', 'C++','CI/CD','RESTful API' ,'Agile']
  },
  {
    company: 'Dbug Labs',
    logo: dubg,
    title: 'Frontend Developer',
    duration: 'Oct 2023 - Mar 2025',
    description: [
      'Led the design and development of an AI-powered code review platform, achieving a 20% improvement in code analysis accuracy through iterative model training and feedback integration.',
       'Utilized platform metrics and user interaction data to identify performance bottlenecks and implement enhancements, resulting in faster review cycles and improved user satisfaction.',
      'Additionally, organized and hosted a web-based training event for 50+ students, promoting adoption of the platform and fostering a community of early adopters and contributors.'
    ],
    location: 'Chennai, India',
    skills: ['React', 'AI/ML', 'Flask','Python','Firebase','Git']
  },
  {
    company: 'Oasis Infobyte',
    logo: oaisis,
    title: 'Front End Developer Intern',
    duration: 'Nov 2023 - Jan 2024',
    description: ['Contributed to the end-to-end development of responsive web applications, focusing on clean UI/UX and functional scalability.' ,'Implemented key features using HTML, CSS, JavaScript, and React, enhancing user interactivity and performance across platforms.','Collaborated in a fast-paced Agile environment, delivering multiple modules under tight deadlines while following version control best practices with Git.',
    'Gained hands-on experience in problem-solving, debugging, and optimizing frontend components for real-world applications.'
    ],
    location: 'Remote',
    skills: ['React', 'JavaScript', 'Git']
  },
  {
    company: 'Bharat Intern',
    logo: bharat,
    title: 'Full Stack Developer Intern',
    duration: 'Oct 2023 - Nov 2023',
    description: [
      'Designed and developed a collaborative task management platform featuring intuitive data visualizations to enhance user experience and team productivity.',
      'Integrated real-time analytics to monitor user interactions, resulting in a 10% increase in mobile engagement.',
      'Applied SEO best practices across the platform, significantly improving search engine visibility and organic traffic within weeks of deployment.'
    ],
    location: 'Remote',
    skills: ['Chart.js', 'Analytics','JS', 'SEO']
  }
];

const Experience = () => {
  const [expandedIdx, setExpandedIdx] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-section-badge">Experience</div>
      <h2 className="experience-section-title">Where I've Worked</h2>
      
      <div className="experience-container">
        {experiences.map((exp, idx) => (
          <div 
            className={`experience-item ${expandedIdx === idx ? 'expanded' : ''}`}
            key={idx}
          >
            <div className="experience-header" onClick={() => toggleExpand(idx)}>
              <div className="company-info">
                <img src={exp.logo} alt={exp.company} className="company-logo" />
                <div>
                  <h3>{exp.company}</h3>
                  <p>{exp.title}</p>
                  <span className="duration">{exp.duration}</span>
                </div>
              </div>
              
              <div className="experience-meta">
                <span className="location">{exp.location}</span>
                <div className={`expand-icon ${expandedIdx === idx ? 'expanded' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="experience-details">
              <ul className="description-list">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <div className="skills-container">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;