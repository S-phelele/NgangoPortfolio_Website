import React from "react";
import '../assets/styles/Resume.scss';

function Resume() {
  return (
    <div className="container" id="resume">
      <div className="resume-section">
        <h1>Resume</h1>
        <p className="resume-intro">
          You can view my resume below or download it.
        </p>
        <div className="resume-actions">
          <a 
            href="/resume.pdf" 
            download="S'phelele_Khumalo_Resume.pdf"
            className="resume-download-btn"
          >
            Download Resume (PDF)
          </a>
        </div>
        <div className="resume-viewer">
          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
            title="S'phelele Lucas Khumalo Resume"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
