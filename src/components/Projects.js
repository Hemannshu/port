import React from 'react';
import './Projects.css';

const breach = process.env.PUBLIC_URL + '/assets/image.png';
const sheild = process.env.PUBLIC_URL + '/assets/sheild.png';
const organize = process.env.PUBLIC_URL + '/assets/organize.png';
const weather = process.env.PUBLIC_URL + '/assets/weather.png';
const grabby = process.env.PUBLIC_URL + '/assets/grabby.png';
const study = process.env.PUBLIC_URL + '/assets/studybuddy.png';
const studybuddy = process.env.PUBLIC_URL + '/assets/studybuddylogo.jpg';

const projects = [
  {
    title: 'Breach.AI 🔑🔒',
    subtitle: null,
    date: 'April 2025',
    image: breach,
    description: 'A comprehensive password security solution that combines advanced machine learning, cryptographic analysis, and real-time vulnerability assessment to help users create and manage secure passwords. Barclays Hack-O-Hire 25 Finals Project 🏆',
    tech: ['Next.js', 'React', 'Flask', 'Python', 'Machine Learning', 'Firebase', 'bcrypt', 'OWASP ZAP', 'Supabase', 'TailwindCSS', 'Shadcn UI', 'NextUI'],
    links: [
      { label: 'Source', url: 'https://github.com/Hemannshu/Breach.AI----Barclays-Hack-O-Hire-25-Finalist', type: 'github' },
      { label: 'Website', url: 'https://barclays-hackathon.vercel.app/', type: 'website' }
    ]
  },
  {
    title: "SHEild🛡️",
    subtitle: null,
    date: 'Feb 2025 - March 2025 ',
    image: sheild,
    description: 'A women\'s safety app offering features like Shake-to-Alert SOS, location sharing, offline emergency functionality, nearby services directory, self-defense resources, and trusted contact management to ensure reliable and proactive safety measures.',
    tech: ['Flutter', 'Firebase', 'Google Maps API', 'Twilio', 'Node.js', 'MySQL', 'MongoDB'],
    links: [
      { label: 'Source', url: 'https://github.com/TanyaYadav8266/Women-Safety-app', type: 'github' }
    ]
  }, 
  {
    title: 'StudyBuddy🧑‍🎓🧑‍💻',
    subtitle: null,
    date: 'May 2025',
    image: studybuddy,
    description: 'StudyBuddy is a Flutter-Firebase app that helps students manage studies, explore opportunities, and connect with peers. It features secure login, unique usernames, and real-time data sync. Users can join study groups, track tasks, and get reminders. A built-in chatbot assists with tasks and queries. The app also lets students find jobs, explore resources, and improve productivity—all in one place.',
    tech: ['Flutter', 'Firebase', 'GoogleMapsAPI', 'Node.js', 'MySQL'],
    links: [
      { label: 'Source', url: 'https://github.com/jiya19g/sepm', type: 'github' },
    ]
  },
 
];

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: 4, verticalAlign: 'middle'}}><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
);

const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: 4, verticalAlign: 'middle'}}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
);

const Projects = () => (
  <section className="projects-section-modern">
    <div className="projects-header-modern">
      <h2>My Projects</h2>
      <h1>Check out my latest work</h1>
      <p>I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
    </div>
    <div className="projects-list-modern">
      {projects.map((project, idx) => (
        <div className="project-card-modern-small" key={idx}>
          {project.image && (
            <div className="project-img-modern-wrap">
              <img src={project.image} alt={project.title} className="project-img-modern" />
            </div>
          )}
          <div className="project-card-top">
            {project.subtitle && <div className="project-subtitle-modern">{project.subtitle}</div>}
            <div className="project-title-row">
              <span className="project-title-modern">{project.title}</span>
              {project.date && <span className="project-date-modern">{project.date}</span>}
            </div>
          </div>
          <div className="project-desc-modern">{project.description}</div>
          <div className="project-tech-modern">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-tag-modern">{tech}</span>
            ))}
          </div>
          <div className="project-links-modern">
            {project.links && project.links.map((link, i) => (
              <a key={i} href={link.url} className="project-link-modern" target="_blank" rel="noopener noreferrer">
                {link.type === 'github' ? <GithubIcon /> : link.type === 'website' ? <GlobeIcon /> : null}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;