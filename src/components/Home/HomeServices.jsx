import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import gsap from 'gsap';
import { 
  playHeadingAnim, 
  playCardsAnim, 
  playImageAnim 
} from '../gsap/gsapAnimations';
import './HomeServices.css';

// 6 Alag-Alag Image Imports
import printerImg1 from '../../assets/home/catalogue-service.jpg';
import printerImg2 from '../../assets/home/brochure-service.jpg';
import printerImg3 from '../../assets/home/photoshoot-service.jpg';
import printerImg4 from '../../assets/home/wed-design-service.jpg';
import printerImg5 from '../../assets/home/digital-marketing-service.jpg';
import printerImg6 from '../../assets/home/corporate-gift-service.jpg';

const servicesData = [
  {
    id: '01',
    title: 'CATALOGUE DESIGNING',
    description: 'Creating unique, impactful designs to promote your brand with proven expertise.',
    image: printerImg1,
    path: '/services/catalogue-design'
  },
  {
    id: '02',
    title: 'CATALOGUE/BROCHURE PRINTING',
    description: 'High-quality offset printing using advanced machines to bring our creative designs to life on paper.',
    image: printerImg2,
    path: '/services/catalogue-printing'
  },
  {
    id: '03',
    title: 'PHOTOSHOOT',
    description: 'Expert photographers capturing quality shots with latest camera equipment & technology.',
    image: printerImg3,
    path: '/services/photoshoot'
  },
  {
    id: '04',
    title: 'WEBSITE DESIGNING & PROMOTION',
    description: 'Creating elegant, user-friendly and futuristic websites with simplified technology.',
    image: printerImg4,
    path: '/services/web-experiences'
  },
  {
    id: '05',
    title: 'DIGITAL MARKETING',
    description: 'Strategic online marketing to boost reach and audience engagement.',
    image: printerImg5,
    path: '/services/digital-marketing'
  },
  {
    id: '06',
    title: 'CORPORATE GIFTING',
    description: 'Thoughtfully curated corporate gifts designed to strengthen relationships, celebrate milestones, and elevate your brand.',
    image: printerImg6,
    path: '/services/corporate-gifting'
  }
];

function HomeServices() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  // GSAP Refs
  const headerRef = useRef(null);
  const listItemsRef = useRef([]);
  const previewBoxRef = useRef(null);
  const activeImageRef = useRef(null);
  const activeTextRef = useRef(null);

  const currentService = servicesData[activeTab];

  // Initial Animations
  useEffect(() => {
    if (headerRef.current) playHeadingAnim(headerRef.current);
    if (listItemsRef.current.length > 0) playCardsAnim(listItemsRef.current);
    
    // Only play image wrapper animation on desktop screens (width > 768px)
    if (previewBoxRef.current && window.innerWidth > 768) {
      playImageAnim(previewBoxRef.current);
    }
  }, []);

  // Fade Animation on Tab Change
  useEffect(() => {
    if (activeImageRef.current && activeTextRef.current) {
      // Clear ongoing animations to avoid scroll interference
      gsap.killTweensOf([activeImageRef.current, activeTextRef.current]);

      // Desktop: Smooth transition / Mobile: Simple opacity fade without heavy transform
      const isMobile = window.innerWidth <= 768;

      gsap.fromTo(
        [activeImageRef.current, activeTextRef.current],
        { opacity: isMobile ? 0.3 : 0, y: isMobile ? 0 : 15 },
        { 
          opacity: 1, 
          y: 0, 
          duration: isMobile ? 0.2 : 0.4, 
          ease: 'power2.out', 
          stagger: isMobile ? 0 : 0.1,
          clearProps: isMobile ? "all" : "" // Auto clean GSAP inline styles on mobile
        }
      );
    }
  }, [activeTab]);

  const handleNavigate = (path) => {
    navigate(path || currentService.path);
  };

  return (
    <section className="hs-section">
      <div className="hs-container">
        
        {/* Main Section Header */}
        <div className="hs-header" ref={headerRef}>
          <span className="hs-subtitle">WHAT WE DO</span>
          <h2 className="hs-title"> End-To-End Creative Solutions</h2>
        </div>

        {/* MAIN OUTLINE CONTAINER */}
        <div className="hs-main-outline-box">
          
          {/* Left Menu List */}
          <div className="hs-list">
            {servicesData.map((service, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={service.id}
                  ref={(el) => (listItemsRef.current[index] = el)}
                  className={`hs-item ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className="hs-item-left">
                    <span className="hs-item-num">{service.id}</span>
                    <span className="hs-item-title">{service.title}</span>
                  </div>
                  
                  {isActive && <FiChevronRight className="hs-arrow-icon" />}
                </div>
              );
            })}
          </div>

          {/* Right Preview Card Box */}
          <div className="hs-preview-container" ref={previewBoxRef}>
            <div className="hs-preview-card">
              
              {/* 1. TOP LOCAL IMAGE SECTION */}
              <div className="hs-card-image-wrapper">
                <img
                  ref={activeImageRef}
                  src={currentService.image}
                  alt={currentService.title}
                  className="hs-card-image"
                />
              </div>

              {/* 2. BOTTOM DESCRIPTION & BUTTON */}
              <div className="hs-card-content">
                <div className="hs-desc-btn-row">
                  <p ref={activeTextRef} className="hs-card-desc">
                    {currentService.description}
                  </p>

                  <button 
                    className="explore-btn"
                    onClick={() => handleNavigate(currentService.path)}
                  >
                    <span>READ MORE</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HomeServices;