import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "ASP.NET Core",
    "C#",
    "Node.js",
    "Microsoft SQL Server",
    "PostgreSQL",
    "XAMPP"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>

                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />

                        <h3>Full-Stack Development</h3>

                        <p>
                            Results-driven Full-Stack Developer with experience building responsive web and mobile applications. 
                            Proficient in React.js, React Native, ASP.NET Core, C#, and Node.js. Skilled in API integration, 
                            performance optimization, and delivering scalable solutions with seamless user experiences.
                        </p>

                        <div className="flex-chips">
                            <span className="chip-title">
                                Tech stack:
                            </span>

                            {labelsFirst.map((label, index) => (
                                <Chip
                                    key={index}
                                    className="chip"
                                    label={label}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
