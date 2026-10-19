import React from "react";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CodeIcon from '@mui/icons-material/Code';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import '../assets/styles/About.scss';

const stats = [
  { icon: <WorkOutlineIcon />, value: '2+', label: 'Years Experience' },
  { icon: <CodeIcon />, value: '10+', label: 'Projects Completed' },
  { icon: <PeopleOutlineIcon />, value: '5+', label: 'Happy Clients' },
  { icon: <EmojiEventsOutlinedIcon />, value: '100%', label: 'Client Satisfaction' },
];

function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text-side">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              I'm passionate about creating digital solutions
            </h2>
            <p className="about-body">
              I am a detail-oriented Full-Stack Developer with a strong foundation in
              Front-End and Backend Development. I specialize in building responsive,
              user-friendly web and mobile applications using React.js, React Native,
              JavaScript, TypeScript, HTML, and CSS. On the back end I work with Node.js,
              Express, ASP.NET Core, and databases such as PostgreSQL and Microsoft SQL Server.
            </p>
            <p className="about-body">
              I enjoy turning ideas into practical digital solutions, writing clean code,
              and continuously improving both the performance and user experience of the
              applications I build.
            </p>
            <button className="btn btn-outline" onClick={() => scrollTo('history')}>
              Learn More About Me <ArrowForwardIcon style={{ fontSize: 18 }} />
            </button>
          </div>

          <div className="about-stats">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
