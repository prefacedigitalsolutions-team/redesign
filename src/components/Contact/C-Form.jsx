import React, { useState } from "react";
import "./C-Form.css";

const CForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Designing",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="c-form-section">
      <div className="c-form-container">
        
        {/* LEFT COLUMN: 3 SPECIFIC IMAGE CARDS WITH PREFACE COMMUNICATIONS DETAILS */}
        <div className="c-info-column">
          <div className="c-cards-stack">
            
            {/* BOX 1: STUDIO DETAILS & INTRO */}
            <div className="c-location-card">
              <div className="card-bg card-bg-1"></div>
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <h3>PREFACE COMMUNICATIONS</h3>
                <p>127, First Floor, Kirti Shikhar Building, District Centre, Janakpuri New Delhi – 110058, India.</p>
              </div>
            </div>

            {/* BOX 2: EMAILS & PHONE NUMBERS */}
            <div className="c-location-card">
              <div className="card-bg card-bg-2"></div>
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <h3>DIRECT CONTACT</h3>
                <p>teampreface@gmail.com / prefacecreative@gmail.com</p>
                <div className="card-phone-list">
                  <span>+91-9810968828, +91-8076022293, +91-11-41588967</span>
                </div>
              </div>
            </div>

            {/* BOX 3: REAL SVG SOCIAL ICONS (WhatsApp, Facebook, Instagram, YouTube) */}
            <div className="c-location-card">
              <div className="card-bg card-bg-3"></div>
              <div className="card-gradient-overlay"></div>
              <div className="card-content">
                <h3>CONNECT WITH US</h3>
                <p>Follow our social channels or chat with us.</p>
                <div className="c-social-links-inline">
                  {/* WhatsApp */}
                  <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="WhatsApp">
                    <svg className="social-svg" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </a>
                  {/* Facebook */}
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Facebook">
                    <svg className="social-svg" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="Instagram">
                    <svg className="social-svg" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  {/* YouTube */}
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="YouTube">
                    <svg className="social-svg" viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"></polygon></svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: PROFESSIONAL INQUIRY FORM */}
        <div className="c-form-column">
          {submitted ? (
            <div className="c-success-box">
              <h3>Message Received.</h3>
              <p>Thank you for reaching out. Our team will contact you shortly.</p>
              <button onClick={() => setSubmitted(false)} className="c-reset-btn">
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="c-professional-form">
              
              <div className="c-form-group">
                <label>Your Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="c-form-row">
                <div className="c-form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="c-form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="c-form-group">
                <label>Select Service Required *</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                >
                  <option value="Web Designing">Web Designing</option>
                  <option value="Photoshoot">Photoshoot</option>
                  <option value="Catalogue Design">Catalogue Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Printing">Printing</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="c-form-group">
                <label>Project Details *</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  placeholder="Describe your project goals and scope..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="c-submit-btn">
                <span>Submit Inquiry</span>
                <span>→</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default CForm;