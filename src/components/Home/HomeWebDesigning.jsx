import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomeWebDesigning.css';

// Web Designing se related 3 Images
import webImg1 from '../../assets/home/home-web-design.jpg';
import webImg2 from '../../assets/home/brochure-service.jpg';
import webImg3 from '../../assets/home/photoshoot-service.jpg';

gsap.registerPlugin(ScrollTrigger);

const webDesigningData = [
  {
    id: '1',
    title: 'CUSTOM UI/UX DESIGN',
    description: 'Pixel-perfect, engaging interfaces tailored specifically to build your unique brand identity.',
    image: webImg1,
    path: '/services/ui-ux-design'
  },
  {
    id: '2',
    title: 'RESPONSIVE WEB APPS',
    description: 'Flawless performance, fast loading speeds, and seamless layouts across all mobile and desktop screens.',
    image: webImg2,
    path: '/services/responsive-web'
  },
  {
    id: '3',
    title: 'E-COMMERCE SOLUTIONS',
    description: 'Secure, scalable, and high-converting online stores built using modern technologies.',
    image: webImg3,
    path: '/services/ecommerce-development'
  }
];

function HomeWebDesigning() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // GSAP Scroll Animations
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
        }
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="hwd-section">
      <div className="hwd-container">
        {/* Section Header */}
        <div className="hwd-header" ref={headerRef}>
          <span className="hwd-subtitle">WEB DESIGNING</span>
          <h2 className="hwd-title">Social media marketing campaigns are a key opportunity to reach your customers. The way people communicate and seek information is evolving and so the way your brand can now reach out is fundamentally changing too.</h2>
        </div>

        {/* 3 Box Grid */}
        <div className="hwd-grid">
          {webDesigningData.map((item, index) => (
            <div
              key={item.id}
              className="hwd-card"
              ref={(el) => (cardsRef.current[index] = el)}
              onClick={() => navigate(item.path)}
            >
              {/* Box Image */}
              <img
                src={item.image}
                alt={item.title}
                className="hwd-card-bg"
              />

              {/* Smooth Top-to-Bottom Overlay (01, 02, 03 removed) */}
              <div className="hwd-overlay">
                <div className="hwd-overlay-content">
                  <h3 className="hwd-item-title">{item.title}</h3>
                  <p className="hwd-item-desc">{item.description}</p>
                  
                  <button className="hwd-explore-btn">
                    <span>EXPLORE MORE</span>
                    <div className="hwd-btn-arrow">→</div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeWebDesigning;