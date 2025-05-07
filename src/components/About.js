import React from 'react';
import './About.css';

const About = () => (
  <section className="about-section">
    
    <h2 className="about-section-title">Who I Am</h2>
    <div className="about-card-border">
      <img src="/illustrations/jumping.png" alt="Jumping Illustration" className="about-illustration about-illustration-topright" />
      <img src="/illustrations/Screenshot 2025-05-02 181740.png" alt="Coffee Cup Illustration" className="about-illustration about-illustration-bottomleft" />
      <div className="about-card">
        <p>
        I'm a full-stack developer with a strong leaning toward frontend development — <b>React</b> is where I'm most comfortable, but I've gained experience working with frameworks like <b>Next.js, Django, Flask, Spring, Angular, and Express</b> through hands-on projects and internships.</p>
        <p>I’m a quick learner who enjoys picking up new stacks and solving problems wherever I’m needed.</p>

<p>Beyond web development, I take a keen interest in low-level programming and systems—diving into C++ and networking fundamentals in my spare time just to better understand the layers beneath the code I write.</p>
<p>I'm proficient in JavaScript/TypeScript, Python, Java, C, and C++, and I've spent time improving my problem-solving skills on platforms like Leetcode, Hackerrank (5★).</p>
<p>I'm <b>certified</b> in cloud and databases — <b>AWS, Azure, and Oracle</b>, ready to architect and scale like a pro!</p>
<p>I also actively participate in hackathons and enjoy building under pressure — notable achievements include being a <b>Top 8 Finalist</b> (out of 6000+ participants) in <b>Barclays Hack-O-Hire 2025</b>, <b>🥇 Winner</b> at <b>Day Zero Hackathon</b> (5000+ participants across India), and <b>🥈 2nd Runner-up</b> at <b>Hack the Cosmos Hackathon</b> (among 200+ teams nationwide).</p>

<p>I love collaborating on real-world problems, building scalable solutions, and constantly growing as a developer — one bug (or feature) at a time.</p>
      </div>
    </div>
  </section>
);

export default About; 