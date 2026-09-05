import React from "react";
import "./C-Map.css";

const CMap = () => {
  return (
    <section className="c-map-section">
      <div className="c-map-container">
        
        {/* LEFT SIDE: COLORFUL GOOGLE MAP EMBED */}
        <div className="c-map-column">
          <div className="map-wrapper">
            <iframe
              title="Preface Communications Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9961688647575!2d77.08173457549987!3d28.63004517566601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d048455555555%3A0x5608d5b161df595b!2sDistrict%20Centre%2C%20Janakpuri%2C%20New%20Delhi%2C%20Delhi%20110058!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE: PROFESSIONAL GLOBAL STUDIO SUPPORT CARD */}
        <div className="c-info-column-right">
          <div className="info-card-box">
            <div className="card-top-header">
              <span className="card-tag">EXECUTIVE DESK</span>
              <span className="status-badge"><span className="live-dot"></span> Open Now</span>
            </div>
            
            <h3>Preface Communications</h3>
            <p className="address-text">
              127, First Floor, Kirti Shikhar Building, District Centre, Janakpuri, New Delhi – 110058, India.
            </p>

            <div className="support-features">
              <div className="support-item">
                <div className="support-icon">⚡</div>
                <div>
                  <h4>Rapid Response</h4>
                  <p>Inquiries acknowledged under 2 hours during shift timings.</p>
                </div>
              </div>
              <div className="support-item">
                <div className="support-icon">🎯</div>
                <div>
                  <h4>Dedicated Consultation</h4>
                  <p>Direct appointments available with our senior design leads.</p>
                </div>
              </div>
            </div>

            <div className="hours-divider"></div>

            <div className="direction-box">
              <a 
                href="https://maps.google.com/?q=Kirti+Shikhar+Building+District+Centre+Janakpuri+New+Delhi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="direction-btn"
              >
                <span>Navigate to Studio</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CMap;