import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <p style={{ gridColumn: '1 / -1', textAlign: 'center', opacity: 0.7, fontSize: '1.1rem' }}>
                Projects coming soon. Check back later!
            </p>
        </div>
    </div>
    );
}

export default Project;
