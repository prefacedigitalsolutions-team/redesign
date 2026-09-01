import React from 'react';
import './Footer.css';
import { 
  BsTelephoneFill, 
  BsEnvelopeFill, 
  BsGeoAltFill, 
  BsInstagram, 
  BsYoutube, 
  BsFacebook, 
  BsWhatsapp 
} from 'react-icons/bs';

function Footer() {
  return (
    <footer className="cs-footer">
      <div className="cs-footer-container">
        
        {/* Top Grid Section */}
        <div className="cs-footer-grid">
          
          {/* Brand Logo & Tagline */}
          <div className="cs-footer-brand">
            <h2 className="cs-logo">PREFACE<span>.</span></h2>
            <p className="cs-brand-subtitle">
              Creating impactful marketing communication materials with 20+ years of expertise.
            </p>
          </div>

          {/* Column 1: Services */}
          <div className="cs-footer-col">
            <h4 className="cs-col-title">Services</h4>
            <ul className="cs-col-links">
              <li><a href="#design">Catalogue Designing</a></li>
              <li><a href="#print">Photoshoot</a></li>
              <li><a href="#web">Website Designing</a></li>
              <li><a href="#photo">Why Preface</a></li>
              <li><a href="#seo">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="cs-footer-col">
            <h4 className="cs-col-title">Company</h4>
            <ul className="cs-col-links">
                <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#clients">Pages</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="cs-footer-col cs-contact-col">
            <h4 className="cs-col-title">Contact Us</h4>
            <ul className="cs-contact-list">
              <li>
                <BsGeoAltFill className="cs-icon" />
                <span>127, First Floor, Kirti Shikhar Building, District Centre, Janakpuri New Delhi – 110058, India</span>
              </li>
              <li>
                <BsTelephoneFill className="cs-icon" />
                <a href="tel:+919876543210">+91-9810968828</a>
                
              </li>
              <li>
                <BsEnvelopeFill className="cs-icon" />
                <a href="mailto:info@preface.com">teampreface@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider Line */}
        <div className="cs-footer-divider"></div>

        {/* Bottom Bar Section */}
        <div className="cs-footer-bottom">
          <div className="cs-copyright-group">
            <p className="cs-copyright">
              Copyright © 2026 Preface Communications. All rights reserved.
            </p>
            <div className="cs-legal-links">
              <a href="#terms">Terms of Use</a>
              <span className="cs-pipe">|</span>
              <a href="#privacy">Privacy & Cookie Policy</a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="cs-social-icons">
            <a href="#facebook" aria-label="Facebook"><BsFacebook /></a>
            <a href="#instagram" aria-label="Instagram"><BsInstagram /></a>
            <a href="#youtube" aria-label="YouTube"><BsYoutube /></a>
            <a href="#whatsapp" aria-label="WhatsApp"><BsWhatsapp /></a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;