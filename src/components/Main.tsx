import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import profileImg from '../assets/images/profile.jpg';
import '../assets/styles/Main.scss';

const techIcons = [
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'JS', color: '#F7DF1E' },
  { name: 'TS', color: '#3178C6' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Node', color: '#339933' },
  { name: 'C#', color: '#239120' },
];

function Main() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="section-label">I'm a Full-Stack Developer</span>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">S'phelele</span>
          </h1>
          <h2 className="hero-subtitle">I build things for the web.</h2>
          
          <p className="hero-desc">
            I'm a passionate full-stack developer specializing in building
            exceptional digital experiences with modern technologies.
            From responsive web apps to mobile solutions, I turn ideas into reality.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
              View My Work <ArrowForwardIcon style={{ fontSize: 18 }} />
            </button>
            <a
              href="/resume.pdf"
              download="S'phelele_Khumalo_Resume.pdf"
              className="btn btn-outline"
            >
              Download CV <DownloadIcon style={{ fontSize: 18 }} />
            </a>
          </div>

          <div className="hero-tech">
            <span className="tech-label">TECHNOLOGIES I WORK WITH</span>
            <div className="tech-icons">
              {techIcons.map((t) => (
                <div key={t.name} className="tech-icon" title={t.name} style={{ borderColor: t.color + '40' }}>
                  <span style={{ color: t.color }}>{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-wrapper">
            <div className="profile-ring"></div>
            <img src={profileImg} alt="S'phelele Lucas Khumalo" className="profile-img" />
          </div>
          
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <span className="code-title">developer.ts</span>
            </div>
            <pre className="code-body">
{`const developer = {
  name: "S'phelele",
  skills: ["React", "Node.js",
           "TypeScript", "C#"],
  passion: "building things
            for the web"
};`}
            </pre>
          </div>

          <div className="hero-social">
            <a href="https://github.com/S-phelele" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/khumalosphelele4252/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
