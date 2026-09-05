import React, { useState, useEffect, useRef } from 'react';

import {
  BsPlayFill,
  BsX,
  BsInstagram,
  BsYoutube,
  BsTelephoneFill,
  BsWhatsapp
} from 'react-icons/bs';

import './HomeBanner.css';

// Desktop Banners (Badi Images)
import printerImg1 from '../../assets/home/printing-banar.jpg';
import printerImg2 from '../../assets/home/web-designing-banar.jpg';
import printerImg3 from '../../assets/home/photoshoot-banar.jpg';

// Mobile Banners (Choti Images - Apni mobile images ka path yahan set karein)
import printerImg1Mobile from '../../assets/home/printing-m1.jpg';
import printerImg2Mobile from '../../assets/home/wed-design-m-2.jpg';
import printerImg3Mobile from '../../assets/home/photoshoot-m-03.jpg';

import { playHeroAnim } from '../../components/gsap/gsapAnimations';

// Desktop aur Mobile dono images ko object me pass kiya hai
const bannerImages = [
  { desktop: printerImg1, mobile: printerImg1Mobile },
  { desktop: printerImg2, mobile: printerImg2Mobile },
  { desktop: printerImg3, mobile: printerImg3Mobile }
];

function HomeBanar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  /* =====================================================
     GSAP REFS
  ===================================================== */
  const heroSectionRef = useRef(null);
  const heroTextBoxRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroDescriptionRef = useRef(null);
  const heroButtonsRef = useRef(null);
  const heroBadgeRef = useRef(null);
  const heroScrollRef = useRef(null);
  const socialIconsRef = useRef([]);

  /* banar auto slider */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  /* gsap hero animation */
  useEffect(() => {
    const animation = playHeroAnim({
      section: heroSectionRef.current,
      textBox: heroTextBoxRef.current,
      title: heroTitleRef.current,
      description: heroDescriptionRef.current,
      buttons: heroButtonsRef.current,
      badge: heroBadgeRef.current,
      scroll: heroScrollRef.current,
      socialIcons: socialIconsRef.current
    });

    return () => {
      if (animation) {
        animation.kill();
      }
      socialIconsRef.current = [];
    };
  }, []);

  /* escape key video close */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsVideoOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section ref={heroSectionRef} className="hero-section">

      {/*BACKGROUND SLIDES (DESKTOP & MOBILE RESPONSIVE) */}
      {bannerImages.map((slide, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${
            index === currentIndex ? 'active' : ''
          }`}
          style={{
            '--bg-desktop': `url(${slide.desktop})`,
            '--bg-mobile': `url(${slide.mobile})`
          }}
        />
      ))}

      <div className="hero-overlay"></div>

      {/* hero content */}
      <div className="hero-content">
        {/* TEXT BOX */}
        <div ref={heroTextBoxRef} className="hero-text-box">
          <h1 ref={heroTitleRef} className="hero-title">
            Powerful <br />
            Ideas To <br />
            <span className="hero-highlight">POWER YOUR BRAND</span>
          </h1>

          <p ref={heroDescriptionRef} className="hero-description">
            Every Brand Needs More Than Just Awareness
            <br />
            It Needs Bold, Creative Ideas To Stand Out & Lead
          </p>

          {/* BUTTONS */}
          <div ref={heroButtonsRef} className="hero-buttons">
            <button className="explore-btn">
              <span>EXPLORE CATALOGS</span>
              <span className="btn-arrow">→</span>
            </button>

            <button
              className="play-btn"
              onClick={() => setIsVideoOpen(true)}
            >
              <span className="play-icon-wrapper">
                <BsPlayFill />
              </span>
              <span>WATCH PRINT PROCESS</span>
            </button>
          </div>
        </div>

        {/* CIRCULAR BADGE */}
        <div
          ref={heroBadgeRef}
          className="hero-badge-container"
          onClick={() => setIsVideoOpen(true)}
        >
          <div className="badge-glow-bg"></div>

          <div className="hero-badge">
            <svg viewBox="0 0 150 150" className="badge-svg">
              <path
                id="exactCirclePath"
                d="
                  M 75,75
                  m -50,0
                  a 50,50 0 1,1 100,0
                  a 50,50 0 1,1 -100,0
                "
                fill="transparent"
              />

              <text
                fill="#ffffff"
                fontSize="12.5"
                fontWeight="600"
                letterSpacing="3.5"
                textAnchor="middle"
              >
                <textPath href="#exactCirclePath" startOffset="50%">
                  25+ YEARS OF • CREATIVE EXCELLENCE •
                </textPath>
              </text>
            </svg>

            <div className="badge-center">25+</div>
          </div>
        </div>

        {/* SCROLL */}
        <div ref={heroScrollRef} className="hero-scroll">
          <span>SCROLL</span>
          <div className="scroll-line"></div>
        </div>
      </div>

      {/* =================================================
          SOCIAL SIDEBAR
      ================================================= */}
      <div className="social-sidebar">
        <a
          ref={(el) => {
            socialIconsRef.current[0] = el;
          }}
          href="tel:+919876543210"
          className="social-icon phone"
          title="Call Us"
        >
          <BsTelephoneFill className="s-icon" />
          <span className="social-text">+91 98765 43210</span>
        </a>

        <a
          ref={(el) => {
            socialIconsRef.current[1] = el;
          }}
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
          title="WhatsApp"
        >
          <BsWhatsapp className="s-icon" />
          <span className="social-text">WhatsApp</span>
        </a>

        <a
          ref={(el) => {
            socialIconsRef.current[2] = el;
          }}
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon youtube"
          title="YouTube"
        >
          <BsYoutube className="s-icon" />
          <span className="social-text">YouTube</span>
        </a>

        <a
          ref={(el) => {
            socialIconsRef.current[3] = el;
          }}
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          title="Instagram"
        >
          <BsInstagram className="s-icon" />
          <span className="social-text">Instagram</span>
        </a>
      </div>

      {/* =================================================
          VIDEO MODAL
      ================================================= */}
      {isVideoOpen && (
        <div
          className="video-modal-overlay"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal-btn"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              <BsX />
            </button>

            <div className="video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Printing Process Showreel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default HomeBanar;