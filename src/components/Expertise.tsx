import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Expertise.scss';

/* Official-style SVG marks for tools without solid Font Awesome brand icons */
const SvgIcon = ({ children, viewBox = "0 0 24 24", className = "" }: {
  children: React.ReactNode;
  viewBox?: string;
  className?: string;
}) => (
  <svg viewBox={viewBox} className={`skill-svg ${className}`} aria-hidden="true">
    {children}
  </svg>
);

const TypeScriptIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <path fill="#3178C6" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.568 5.568 0 0 0-1.466-.21c-.821 0-1.44.176-1.857.526-.386.35-.579.837-.579 1.46 0 .47.146.856.437 1.16.29.305.76.577 1.41.815l.629.235c.957.35 1.648.767 2.076 1.25.43.484.645 1.116.645 1.896 0 .954-.345 1.715-1.036 2.282-.69.567-1.73.85-3.12.85-.562 0-1.13-.04-1.704-.12a10.88 10.88 0 0 1-1.79-.412v-2.57c.46.276.93.486 1.41.63.48.143.99.215 1.53.215.703 0 1.24-.152 1.612-.456.372-.304.558-.728.558-1.27 0-.528-.168-.96-.504-1.297-.336-.337-.85-.64-1.54-.91l-.633-.24c-.917-.34-1.58-.746-1.987-1.22-.407-.474-.61-1.08-.61-1.82 0-.89.34-1.615 1.02-2.176.68-.561 1.65-.842 2.91-.842zm-15.113.188h9.563v2.166H9.506v9.625H6.879v-9.625H3.375z"/>
  </SvgIcon>
);

const ReactNativeIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="2.2" fill="#61DAFB"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.2"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)"/>
  </SvgIcon>
);

const CsharpIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <rect width="24" height="24" rx="4" fill="#68217A"/>
    <text x="12" y="16.5" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700" fontFamily="Arial,sans-serif">C#</text>
  </SvgIcon>
);

const PostgresIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <path fill="#336791" d="M17.1 2.1c-1.1-.1-2.1.1-3 .6-.5-.3-1.1-.5-1.8-.6-1.9-.3-3.6.6-4.5 2.1-.6-.2-1.3-.2-1.9 0-1.4.5-2.2 1.8-2.2 3.4 0 .3 0 .6.1.9C2.3 9.5 1.5 11 1.5 12.7c0 2.5 1.6 4.6 3.9 5.3.3 1.5 1.3 2.7 2.7 3.3 1.1.5 2.3.5 3.4.1.4.6 1 1.1 1.7 1.4.9.4 1.9.5 2.9.3 1.5-.3 2.7-1.3 3.3-2.7 1.5-.4 2.6-1.5 3-3 .3-1.1.2-2.2-.3-3.2.5-.7.7-1.6.6-2.5-.2-1.5-1.1-2.7-2.4-3.3.1-.5.1-1 0-1.5-.3-1.5-1.3-2.7-2.7-3.2-.5-.2-1-.2-1.5-.2z"/>
    <path fill="#fff" d="M12.3 6.2c.4 0 .8.1 1.1.3.2.1.3.4.2.6-.1.2-.4.3-.6.2-.2-.1-.4-.1-.6-.1-.8 0-1.5.4-1.9 1-.1.2-.4.2-.6.1-.2-.1-.2-.4-.1-.6.5-.9 1.5-1.5 2.5-1.5zm-3.6 1.3c.2 0 .4.1.5.3.1.2 0 .5-.2.6-.7.4-1.2 1.1-1.3 1.9 0 .2-.2.4-.5.4s-.4-.2-.4-.5c.1-1.1.8-2.1 1.8-2.6.1 0 .1 0 .1-.1zm7.2 1.1c.9.3 1.5 1.1 1.6 2 0 .2-.1.5-.4.5-.2 0-.4-.2-.4-.4-.1-.6-.5-1.1-1.1-1.3-.2-.1-.3-.3-.3-.5 0-.2.2-.4.4-.4.1 0 .1 0 .2.1z"/>
  </SvgIcon>
);

const SqlServerIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <path fill="#CC2927" d="M12 2C6.5 2 2 4.2 2 7v10c0 2.8 4.5 5 10 5s10-2.2 10-5V7c0-2.8-4.5-5-10-5zm0 2c4.4 0 8 1.6 8 3.5S16.4 11 12 11s-8-1.6-8-3.5S7.6 4 12 4zm0 16c-4.4 0-8-1.6-8-3.5v-1.6c1.8 1.3 4.7 2.1 8 2.1s6.2-.8 8-2.1v1.6c0 1.9-3.6 3.5-8 3.5zm0-5c-4.4 0-8-1.6-8-3.5v-1.6c1.8 1.3 4.7 2.1 8 2.1s6.2-.8 8-2.1V13.5c0 1.9-3.6 3.5-8 3.5z"/>
  </SvgIcon>
);

const TailwindIcon = () => (
  <SvgIcon viewBox="0 0 24 24">
    <path fill="#38BDF8" d="M12 6c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3C13.4 11 14.5 12 16.5 12c2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C15.1 7 14 6 12 6zM7 12c-2.7 0-4.4 1.3-5 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3C8.4 17 9.5 18 11.5 18c2.7 0 4.4-1.3 5-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C10.1 13 9 12 7 12z"/>
  </SvgIcon>
);

const skills = [
  {
    name: 'HTML',
    level: 95,
    icon: <FontAwesomeIcon icon={faHtml5} style={{ color: '#E34F26' }} />,
  },
  {
    name: 'CSS',
    level: 90,
    icon: <FontAwesomeIcon icon={faCss3Alt} style={{ color: '#1572B6' }} />,
  },
  {
    name: 'JavaScript',
    level: 90,
    icon: <FontAwesomeIcon icon={faJs} style={{ color: '#F7DF1E' }} />,
  },
  {
    name: 'TypeScript',
    level: 85,
    icon: <TypeScriptIcon />,
  },
  {
    name: 'React.js',
    level: 90,
    icon: <FontAwesomeIcon icon={faReact} style={{ color: '#61DAFB' }} />,
  },
  {
    name: 'React Native',
    level: 80,
    icon: <ReactNativeIcon />,
  },
  {
    name: 'Node.js',
    level: 80,
    icon: <FontAwesomeIcon icon={faNodeJs} style={{ color: '#339933' }} />,
  },
  {
    name: 'ASP.NET Core / C#',
    level: 75,
    icon: <CsharpIcon />,
  },
  {
    name: 'PostgreSQL',
    level: 80,
    icon: <PostgresIcon />,
  },
  {
    name: 'Microsoft SQL Server',
    level: 75,
    icon: <SqlServerIcon />,
  },
  {
    name: 'Tailwind CSS',
    level: 85,
    icon: <TailwindIcon />,
  },
  {
    name: 'Git',
    level: 85,
    icon: <FontAwesomeIcon icon={faGitAlt} style={{ color: '#F05032' }} />,
  },
];

function Expertise() {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">My Skills</span>
          <h2 className="section-title">Technologies I Master</h2>
          <p className="section-subtitle">
            A versatile stack covering front-end, back-end, mobile, and databases —
            focused on building scalable, user-friendly applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-item">
              <div className="skill-top">
                <div className="skill-name-row">
                  <span className="skill-logo" aria-hidden="true">
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Expertise;
