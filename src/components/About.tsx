import React from "react";
import '../assets/styles/About.scss';

function About() {
  return (
    <div className="container" id="about">
      <div className="about-me-section">
        <h1>About Me</h1>
        <p className="about-text">
          I am a detail-oriented Full-Stack Developer with a strong foundation in Front-End and Backend Development. 
          I specialize in building responsive, user-friendly web and mobile applications using React.js, 
          React Native, JavaScript, TypeScript, HTML, and CSS. On the back end I work with Node.js, Express, 
          ASP.NET Core, and databases such as PostgreSQL and Microsoft SQL Server. I enjoy turning ideas into 
          practical digital solutions, writing clean code, and continuously improving both the performance 
          and user experience of the applications I build.
        </p>
      </div>
    </div>
  );
}

export default About;