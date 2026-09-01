import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap"; 
import "./Navbar.css";
import logoImg from '../../assets/home/logo.png';
import LanguageSwitcher from '../Language/LanguageSwitcher';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", mobile: "", message: "" });

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const rightRef = useRef(null);

  // Scroll listener effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animation - Desktop (> 900px)
  useEffect(() => {
    if (window.innerWidth > 900) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        navRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
      .fromTo(
        [logoRef.current, linksRef.current, rightRef.current],
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        "-=0.6"
      );
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been sent.`);
    setIsModalOpen(false);
    setFormData({ name: "", mobile: "", message: "" });
  };

  return (
    <>
      <nav ref={navRef} className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Brand Logo */}
        <div ref={logoRef} className="nav-logo">
          <img src={logoImg} alt="Preface Communications Logo" className="logo-img" />
        </div>

        {/* Desktop Navigation Links */}
        <ul ref={linksRef} className="nav-links">
          <li>
            <a href="#work" className="active">
              HOME
              <svg className="nav-line" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#about">
              ABOUT US
              <svg className="nav-line" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#services">
              SERVICES
              <svg className="nav-line" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </a>
          </li>

          <li className="has-dropdown">
            <a href="#insights">
              PAGES <span className="arrow">▾</span>
              <svg className="nav-line" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </a>
            <ul className="dropdown-menu">
              <li><a href="#blog">CATALOGUE</a></li>
              <li><a href="#news">PHOTOSHOOT</a></li>
              <li><a href="#press">WEB DESIGNING</a></li>
              <li><a href="#news">WHY PREFACE</a></li>
              <li><a href="#press">DIGITAL MARKETING</a></li>
            </ul>
          </li>

          <li>
            <a href="#contact">
              CONTACT US
              <svg className="nav-line" viewBox="0 0 100 15" preserveAspectRatio="none">
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Right Side Items (Language Switcher, Button & Hamburger) */}
        <div ref={rightRef} className="nav-right">
          <LanguageSwitcher />

          <button onClick={() => setIsModalOpen(true)} className="lets-talk-btn">
            <span>LET'S TALK</span>
            <span className="arrow-icon">→</span>
          </button>

          <div 
            className={`menu-icon-wrapper ${isMobileMenuOpen ? "open" : ""}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Navigation Overlay */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-links">
          <li><a href="#work" onClick={() => setIsMobileMenuOpen(false)}>HOME</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>SERVICES</a></li>

          <li className="mobile-dropdown-parent">
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="mobile-dropdown-toggle">
              PAGES <span>{isDropdownOpen ? "▴" : "▾"}</span>
            </div>
            {isDropdownOpen && (
              <ul className="mobile-dropdown-menu">
                <li><a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>CATALOGUE</a></li>
                <li><a href="#news" onClick={() => setIsMobileMenuOpen(false)}>PHOTOSHOOT</a></li>
                <li><a href="#press" onClick={() => setIsMobileMenuOpen(false)}>WEB DESIGNING</a></li>
                <li><a href="#news" onClick={() => setIsMobileMenuOpen(false)}>WHY PREFACE</a></li>
                <li><a href="#press" onClick={() => setIsMobileMenuOpen(false)}>DIGITAL MARKETING</a></li>
              </ul>
            )}
          </li>

          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</a></li>
        </ul>
      </div>

      {/* Professional Popup Form Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>×</button>
            <div className="modal-header">
              <h2>Let's Build Something Great</h2>
              <p>Fill out the details below and our team will get back to you shortly.</p>
            </div>
            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label>Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="John Doe" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input 
                  type="tel" 
                  name="mobile" 
                  placeholder="+91 98765 43210" 
                  value={formData.mobile} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Your Message / SMS</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  placeholder="Tell us about your project..." 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;