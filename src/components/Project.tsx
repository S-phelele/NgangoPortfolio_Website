import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import journeyStoreImg from "../assets/images/journeystore.png";
import '../assets/styles/Project.scss';

const projects = [
  {
    number: '01',
    title: 'JourneyStore',
    description:
      'Full-stack pet e-commerce with storefront and admin dashboard — catalogue, cart, checkout, geolocation addresses, orders, analytics, and audit logs.',
    image: journeyStoreImg,
    alt: 'JourneyStore – pet e-commerce homepage',
    url: 'https://journeystore.netlify.app/',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Recharts'],
  },
  // Add more projects here later — the grid is ready for 2–3 columns
];

function Project() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">Some of My Recent Work</h2>
          <p className="section-subtitle">
            Real projects I've built — from full-stack e-commerce to collaborative tools.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.number} className="project-card card">
              <div className="project-image">
                <img src={project.image} alt={project.alt} />
                <div className="project-overlay">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    View Project <ArrowForwardIcon style={{ fontSize: 16 }} />
                  </a>
                </div>
              </div>
              <div className="project-body">
                <span className="project-number">{project.number}</span>
                <h3 className="project-title">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <ArrowForwardIcon style={{ fontSize: 16 }} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
