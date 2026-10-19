import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-bracket">&lt;/&gt;</span>
            <span className="logo-text">Ngango</span>
          </div>
          <p>Designed & built by S'phelele Lucas Khumalo</p>
        </div>

        <div className="footer-social">
          <a href="https://github.com/S-phelele/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/khumalosphelele4252/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} S'phelele Lucas Khumalo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
