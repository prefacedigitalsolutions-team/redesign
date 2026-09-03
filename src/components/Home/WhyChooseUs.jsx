import React, { memo } from 'react';
import { FiGlobe } from 'react-icons/fi';
import './WhyChooseUs.css';

function WhyChooseUs() {
  return (
    <section className="wcu-section" aria-labelledby="wcu-heading">
      <div className="wcu-wrapper">
        
        {/* Top Company Brand Header */}
        <div className="wcu-brand">
          <span className="wcu-brand-dot"></span>
          <span>Why should you choose us as <br></br>your own creative partners</span>
        </div>

        {/* Wide Landscape SMS / Chat Bubble Card */}
        <div className="wcu-landscape-card">
          <div className="wcu-overlay"></div>
          
          <div className="wcu-content-grid">
            {/* Left Side: Title */}
            <div className="wcu-title-column">
              <div className="wcu-highlight-box">Why</div>
              <div className="wcu-highlight-box" id="wcu-heading">
                Choose Us?
              </div>
            </div>

            {/* Right Side: Professional Pill Tags */}
            <div className="wcu-pills-column">
              <div className="wcu-pill maroon-pill">Out of The Box Creativity</div>
              <div className="wcu-pill white-pill">Team of experienced professionals.</div>
              <div className="wcu-pill white-pill">Timely Delivery</div>
              <div className="wcu-pill maroon-pill">Strong Support</div>
            </div>
          </div>
        </div>

        {/* Bottom Website Button */}
        <div className="wcu-footer-badge">
          <a
            href="https://www.prefacecommunications.com"
            target="_blank"
            rel="noreferrer"
            className="wcu-web-btn"
          >
            <FiGlobe className="wcu-globe-icon" />
            <span>WWW.PREFACECOMMUNICATIONS.COM</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default memo(WhyChooseUs);