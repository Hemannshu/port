import React, { useEffect, useState } from "react";
import "./FloatingMenu.css";

const RESUME_URL = "https://drive.google.com/file/d/1UlGnegZLCsVlHqoQkQdRl5kqBX6gh_D3/view?usp=sharing"; // Replace with your actual resume link
const LINKEDIN_URL = "https://www.linkedin.com/in/myselfhimanshu/"; // Replace with your LinkedIn
const GITHUB_URL = "https://github.com/Hemannshu"; // Replace with your GitHub

const FloatingMenu = () => {
  const [dark, setDark] = useState(false); // Always start in light mode
  const [hovered, setHovered] = useState("");

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <nav className="floating-menu">
      <button
        className="menu-btn"
        aria-label="Home"
        onMouseEnter={() => setHovered("home")}
        onMouseLeave={() => setHovered("")}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 12L12 3l9 9"/><path d="M9 21V9h6v12"/></svg>
        {hovered === "home" && <span className="menu-tooltip">Home</span>}
      </button>
      <a
        className="menu-btn"
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        onMouseEnter={() => setHovered("resume")}
        onMouseLeave={() => setHovered("")}
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 16h6M9 12h6M9 8h6"/></svg>
        {hovered === "resume" && <span className="menu-tooltip">Resume</span>}
      </a>
      <a
        className="menu-btn"
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        onMouseEnter={() => setHovered("linkedin")}
        onMouseLeave={() => setHovered("")}
      >
        {/* LinkedIn Brand SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
        {hovered === "linkedin" && <span className="menu-tooltip">LinkedIn</span>}
      </a>
      <a
        className="menu-btn"
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        onMouseEnter={() => setHovered("github")}
        onMouseLeave={() => setHovered("")}
      >
        {/* GitHub Brand SVG */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.243-.018-2.25-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.933 0-1.31.468-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.047.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.015 2.898-.015 3.293 0 .322.216.699.825.58C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12z"/></svg>
        {hovered === "github" && <span className="menu-tooltip">GitHub</span>}
      </a>
      <span className="menu-divider" />
      <button
        className="menu-btn"
        aria-label="Toggle dark mode"
        onMouseEnter={() => setHovered("dark")}
        onMouseLeave={() => setHovered("")}
        onClick={() => setDark((d) => !d)}
      >
        {dark ? (
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
        ) : (
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>
        )}
        {hovered === "dark" }
      </button>
    </nav>
  );
};

export default FloatingMenu; 