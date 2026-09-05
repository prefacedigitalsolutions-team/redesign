import React from "react";
import "./C-Banar.css";

const CBanar = () => {
  return (
    <section className="c-banar-wrapper">
      <div className="c-banar-bg-layer"></div>
      
      <div className="c-banar-content-area">
        <div className="c-banar-top-bar">
          <span className="c-status-indicator">
            <span className="pulse-dot"></span>
            AVAILABLE FOR NEW PROJECTS
          </span>
          <span className="c-location-tag">DELHI / GLOBAL</span>
        </div>

        <div className="c-headline-group">
          <h1>
            Let's Shape Your 
            <br />
            <span className="outline-text">Digital Presence.</span>
          </h1>
          <p>
            Partner with our expert studio for high-converting landing pages, advanced web architecture, precision print collateral, and enterprise SEO.
          </p>
        </div>

        <div className="c-quick-stats">
          <div className="stat-card">
            <span className="stat-num">24H</span>
            <span className="stat-label">Response Time</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">70+</span>
            <span className="stat-label">Specialized Services</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">100%</span>
            <span className="stat-label">Custom Code & Design</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CBanar;