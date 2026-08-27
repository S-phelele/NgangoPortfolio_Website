import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2025 - July 2026"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Malcam Solutions</h3>
            <h4 className="vertical-timeline-element-title">Full-Stack Developer</h4>
            <h4 className="vertical-timeline-element-subtitle">Pretoria, Centurion</h4>
            <p>
              Developed and maintained interactive web applications using React.js and JavaScript. 
              Built mobile applications with React Native. Created responsive, accessible UI components. 
              Integrated RESTful APIs for data fetching, authentication, and dynamic updates. 
              Improved performance with lazy loading, code splitting, and reduced re-renders. 
              Hosted applications on Google Play Store and Apple App Store.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2024 - June 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ICEP (Informatics Community Engagement Project)</h3>
            <h4 className="vertical-timeline-element-title">Work Integrated Learning (WIL) - Front-End Developer</h4>
            <h4 className="vertical-timeline-element-subtitle">Pretoria, Soshanguve</h4>
            <p>
              Developed and maintained interactive web applications using React.js and JavaScript. 
              Designed responsive and visually appealing UI components with focus on accessibility and cross-browser compatibility. 
              Integrated RESTful APIs for data retrieval, user authentication, and real-time updates. 
              Optimized application performance through lazy loading, code splitting, and reducing unnecessary re-renders.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
