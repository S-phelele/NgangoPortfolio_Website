import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <section className="timeline-section" id="history">
      <div className="container">
        <div className="timeline-header">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Career History</h2>
          <p className="section-subtitle">
            My professional journey building real-world applications and growing as a developer.
          </p>
        </div>

        <VerticalTimeline lineColor="rgba(99, 102, 241, 0.25)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: '#141b2d',
              color: '#f1f5f9',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #141b2d' }}
            date="Aug 2025 – July 2026"
            iconStyle={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Malcam Solutions</h3>
            <h4 className="vertical-timeline-element-subtitle">Full-Stack Developer · Pretoria, Centurion</h4>
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
            contentStyle={{
              background: '#141b2d',
              color: '#f1f5f9',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              borderRadius: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
            contentArrowStyle={{ borderRight: '7px solid #141b2d' }}
            date="July 2024 – June 2025"
            iconStyle={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">ICEP (Informatics Community Engagement Project)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Work Integrated Learning (WIL) – Front-End Developer · Pretoria, Soshanguve
            </h4>
            <p>
              Developed and maintained interactive web applications using React.js and JavaScript.
              Designed responsive and visually appealing UI components with focus on accessibility
              and cross-browser compatibility. Integrated RESTful APIs for data retrieval, user
              authentication, and real-time updates. Optimized application performance through
              lazy loading, code splitting, and reducing unnecessary re-renders.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
