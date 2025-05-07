import React from 'react';
import './Hackathons.css';

const barclays = process.env.PUBLIC_URL + '/assets/barclays.png';
const dayzero = process.env.PUBLIC_URL + '/assets/dayzero.webp';
const hackthecosmos = process.env.PUBLIC_URL + '/assets/hackthecosmos.webp';
const layer2 = process.env.PUBLIC_URL + '/assets/layer.webp';

const hackathons = [
  {
    icon: <img src={barclays} alt="barclays" style={{width: 50, height: 50, borderRadius: '10%'}} />,
    date: 'April 27 - 28th, 2025',
    title: 'Barclays Hack-O-Hire',
    location: 'Barclays Chennai Campus, Chennai',
    description: `As part of Barclays' Hack-O-Hire 25, we developed a comprehensive AI-driven password security solution that addresses the problem statement of password strength analysis. Our system integrates advanced machine learning, cryptographic analysis, and real-time vulnerability assessment to help users create and manage strong, secure passwords. Competing against 6,500+ registrations and over 1,200 teams, our team proudly secured a spot in the 🏆 Top 8 finalists, showcasing the effectiveness and innovation of our solution.`
  },
  {
    icon: <img src={hackthecosmos} alt="hackthecosmos" style={{width: 60, height: 60, borderRadius: '10%'}} />,
    date: 'April 2025',
    title: 'Hack The Cosmos',
    location: 'SRMIST, Chennai',
    description: `Participated in the hackathon with an innovative AI-powered mental wellness assistant that offers mood tracking, personalized coping strategies, and real-time emotional support using sentiment analysis and behavioral patterns.`
  },
  {
    icon: <img src={dayzero} alt="dayzero" style={{width: 50, height: 50, borderRadius: '10%'}} />,
    date: 'March 2025',
    title: 'DayZero Hackathon',
    location: 'SRMIST, Chennai',
    description: `Developed a comprehensive women's safety app during the hackathon, integrating critical features like Shake-to-Alert SOS, real-time location sharing, offline emergency support, a nearby services directory, self-defense resources, and trusted contact management. Designed to offer proactive and reliable safety, the app earned 🏆 2nd prize among 2,000+ teams from across India, demonstrating its innovation and real-world impact.`
  },
  {
    icon: <img src={layer2} alt="layer2" style={{width: 50, height: 50, borderRadius: '10%'}} />,
    date: 'March 31st, 2024',
    title: 'Layer 2.0',
    location: 'SRMIST, Chennai',
    description: `Architectured an AI-powered carbon footprint tracker that seamlessly integrates with users' devices to analyze travel, energy use, and consumption patterns. The platform delivers real-time insights, personalized sustainability tips, and gamified challenges to encourage eco-friendly habits and reduce environmental impact.`
  },
];

const Hackathons = () => (
  <section className="hackathons-section">
    <div className="hackathons-badge">Hackathons</div>
    <h2 className="hackathons-title">I like building things</h2>
    <p className="hackathons-desc">I have a knack for competing in hackathons. Its always eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.</p>
    <div className="hackathons-timeline">
      {hackathons.map((h, idx) => (
        <div className="hackathon-item" key={idx}>
          <div className="hackathon-icon-wrap">
            {typeof h.icon === 'string' ? <span className="hackathon-icon-emoji">{h.icon}</span> : h.icon}
            {idx !== hackathons.length - 1 && <div className="hackathon-timeline-dot" />}
          </div>
          <div className="hackathon-content">
            <div className="hackathon-date">{h.date}</div>
            <div className="hackathon-title">{h.title}</div>
            <div className="hackathon-location">{h.location}</div>
            <div className="hackathon-description">{h.description}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Hackathons; 