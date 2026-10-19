import React from "react";
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Resume.scss';

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <div className="container">
        <div className="resume-header">
          <span className="section-label">Resume</span>
          <h2 className="section-title">My Resume</h2>
          <p className="section-subtitle">
            You can view my resume below or download it as a PDF.
          </p>
          <a
            href="/resume.pdf"
            download="S'phelele_Khumalo_Resume.pdf"
            className="btn btn-primary"
            style={{ marginTop: 20 }}
          >
            Download Resume (PDF) <DownloadIcon style={{ fontSize: 18 }} />
          </a>
        </div>

        <div className="resume-viewer card">
          <iframe
            src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
            title="S'phelele Lucas Khumalo Resume"
          />
        </div>
      </div>
    </section>
  );
}

export default Resume;
