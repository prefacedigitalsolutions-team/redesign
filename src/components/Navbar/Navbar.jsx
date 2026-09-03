
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import "./Navbar.css";
import logoImg from "../../assets/home/logo.png";
import LanguageSwitcher from "../Language/LanguageSwitcher";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef(null);
  const rightRef = useRef(null);

  // Sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // GSAP animation - Desktop
  useEffect(() => {
    if (window.innerWidth > 900) {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.fromTo(
        navRef.current,
        {
          y: -80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        }
      ).fromTo(
        [logoRef.current, linksRef.current, rightRef.current],
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
        },
        "-=0.6"
      );
    }
  }, []);

  // Form input
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Thank you ${formData.name}! Your message has been sent.`);

    setIsModalOpen(false);

    setFormData({
      name: "",
      mobile: "",
      message: "",
    });
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        ref={navRef}
        className={`navbar ${isScrolled ? "scrolled" : ""}`}
      >
        {/* Logo */}
        <div ref={logoRef} className="nav-logo">
          <Link to="/">
            <img
              src={logoImg}
              alt="Preface Communications Logo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* ================= DESKTOP MENU ================= */}
        <ul ref={linksRef} className="nav-links">

          {/* HOME */}
          <li>
            <Link to="/" className="active">
              HOME

              <svg
                className="nav-line"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </Link>
          </li>

          {/* ABOUT */}
          <li>
            <Link to="/about">
              ABOUT US

              <svg
                className="nav-line"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </Link>
          </li>

          {/* SERVICES */}
          <li>
            <Link to="/services">
              SERVICES

              <svg
                className="nav-line"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </Link>
          </li>

          {/* PAGES DROPDOWN */}
          <li className="has-dropdown">
            <button
              type="button"
              className="pages-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              PAGES <span className="arrow">▾</span>

              <svg
                className="nav-line"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </button>

            <ul className="dropdown-menu">

              <li>
                <Link to="/#blog">
                  CATALOGUE
                </Link>
              </li>

              <li>
                <Link to="/#news">
                  PHOTOSHOOT
                </Link>
              </li>

              <li>
                <Link to="/#press">
                  WEB DESIGNING
                </Link>
              </li>

              <li>
                <Link to="/#news">
                  WHY PREFACE
                </Link>
              </li>

              <li>
                <Link to="/#press">
                  DIGITAL MARKETING
                </Link>
              </li>

            </ul>
          </li>

          {/* CONTACT */}
          <li>
            <Link to="/contact">
              CONTACT US

              <svg
                className="nav-line"
                viewBox="0 0 100 15"
                preserveAspectRatio="none"
              >
                <path d="M0,10 Q25,2 50,10 T100,10" />
              </svg>
            </Link>
          </li>

        </ul>

        {/* ================= RIGHT SIDE ================= */}
        <div ref={rightRef} className="nav-right">

          <LanguageSwitcher />

          <button
            onClick={() => setIsModalOpen(true)}
            className="lets-talk-btn"
          >
            <span>LET'S TALK</span>
            <span className="arrow-icon">→</span>
          </button>

          {/* Hamburger */}
          <div
            className={`menu-icon-wrapper ${
              isMobileMenuOpen ? "open" : ""
            }`}
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>

        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`mobile-menu-drawer ${
          isMobileMenuOpen ? "active" : ""
        }`}
      >
        <ul className="mobile-nav-links">

          {/* HOME */}
          <li>
            <Link to="/" onClick={closeMobileMenu}>
              HOME
            </Link>
          </li>

          {/* ABOUT */}
          <li>
            <Link to="/about" onClick={closeMobileMenu}>
              ABOUT US
            </Link>
          </li>

          {/* SERVICES */}
          <li>
            <Link to="/services" onClick={closeMobileMenu}>
              SERVICES
            </Link>
          </li>

          {/* MOBILE PAGES */}
          <li className="mobile-dropdown-parent">

            <div
              onClick={() =>
                setIsDropdownOpen(!isDropdownOpen)
              }
              className="mobile-dropdown-toggle"
            >
              PAGES{" "}
              <span>
                {isDropdownOpen ? "▴" : "▾"}
              </span>
            </div>

            {isDropdownOpen && (
              <ul className="mobile-dropdown-menu">

                <li>
                  <Link
                    to="/#blog"
                    onClick={closeMobileMenu}
                  >
                    CATALOGUE
                  </Link>
                </li>

                <li>
                  <Link
                    to="/#news"
                    onClick={closeMobileMenu}
                  >
                    PHOTOSHOOT
                  </Link>
                </li>

                <li>
                  <Link
                    to="/#press"
                    onClick={closeMobileMenu}
                  >
                    WEB DESIGNING
                  </Link>
                </li>

                <li>
                  <Link
                    to="/#news"
                    onClick={closeMobileMenu}
                  >
                    WHY PREFACE
                  </Link>
                </li>

                <li>
                  <Link
                    to="/#press"
                    onClick={closeMobileMenu}
                  >
                    DIGITAL MARKETING
                  </Link>
                </li>

              </ul>
            )}

          </li>

          {/* CONTACT */}
          <li>
            <Link to="/contact" onClick={closeMobileMenu}>
              CONTACT US
            </Link>
          </li>

        </ul>
      </div>

      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <div className="modal-overlay">

          <div className="modal-content">

            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>

            <div className="modal-header">
              <h2>Let's Build Something Great</h2>

              <p>
                Fill out the details below and our team
                will get back to you shortly.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="modal-form"
            >

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

              <button
                type="submit"
                className="submit-btn"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}

export default Navbar;

