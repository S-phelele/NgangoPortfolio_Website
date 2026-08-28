import React from "react";
import "../assets/styles/Project.scss";

// src/assets/images/journeystore.png
import journeyStoreImg from "../assets/images/journeystore.png";

function Project() {
  const JOURNEYSTORE_DEMO_URL = "https://journeystore.netlify.app/";

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href={JOURNEYSTORE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={journeyStoreImg}
              alt="JourneyStore – pet e-commerce homepage"
              className="zoom"
              style={{ width: "100%", display: "block" }}
            />
          </a>

          <a
            href={JOURNEYSTORE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>JourneyStore</h2>
          </a>

          <p>
            <strong>Full-Stack Pet E-Commerce Platform</strong>
          </p>
          <p>
            A complete pet store web app with customer storefront and admin
            dashboard. Includes product catalogue, cart &amp; checkout, address
            book with geolocation, order notifications, and admin tools for
            inventory, orders, clients, analytics, and audit logs — built with
            React and Supabase.
          </p>
          <p>
            <em>React · Vite · Tailwind CSS · Supabase · PostgreSQL · Recharts</em>
          </p>
          <p>
            <a
              href={JOURNEYSTORE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="zoom"
              style={{
                display: "inline-block",
                padding: "0.5rem 1.25rem",
                backgroundColor: "#2563eb",
                color: "#fff",
                borderRadius: "5px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Demo
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;