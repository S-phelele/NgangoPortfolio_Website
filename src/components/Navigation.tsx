import React, { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../assets/styles/Navigation.scss';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'history' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certificates', id: 'certificate' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-bracket">&lt;/&gt;</span>
          <span className="logo-text">Ngango</span>
        </div>

        <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            className="btn btn-primary hire-btn mobile-only"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me →
          </button>
        </nav>

        <button
          className="btn btn-primary hire-btn desktop-only"
          onClick={() => scrollToSection('contact')}
        >
          Hire Me →
        </button>

        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}

export default Navigation;
