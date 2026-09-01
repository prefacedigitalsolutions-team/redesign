import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomePortfolio.css';

// Custom Images Paths
import p1Main from '../../assets/home/portfolio-1.jpg';
import p1Hover from '../../assets/home/portfolio-2.jpg';

import p2Main from '../../assets/home/3c.jpg';
import p2Hover from '../../assets/home/4c.jpg';

import p3Main from '../../assets/home/5c.jpg';
import p3Hover from '../../assets/home/6c.jpg';

import p4Main from '../../assets/home/7c.jpg';
import p4Hover from '../../assets/home/8c.jpg';

import p5Main from '../../assets/home/12c.jpg';
import p5Hover from '../../assets/home/13c.jpg';

gsap.registerPlugin(ScrollTrigger);

const portfolioData = [
  {
    id: 1,
    title: '',
    link: '/portfolio/saafrah',
    mainImg: p1Main,
    hoverImg: p1Hover,
    isLarge: true
  },
  {
    id: 2,
    title: '',
    link: '/portfolio/qalamkar',
    mainImg: p2Main,
    hoverImg: p2Hover
  },
  {
    id: 3,
    title: '',
    link: '/portfolio/royal-look',
    mainImg: p3Main,
    hoverImg: p3Hover
  },
  {
    id: 4,
    title: '',
    link: '/portfolio/catalogue',
    mainImg: p4Main,
    hoverImg: p4Hover
  },
  {
    id: 5,
    title: '',
    link: '/portfolio/maiyaa',
    mainImg: p5Main,
    hoverImg: p5Hover
  }
];

const HomePortfolio = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Scroll Animation
      gsap.fromTo(
        headerRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 2. Grid Cards Stagger Animation
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 45, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);

    // Refresh calculations for layout shifts
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  // GSAP Mouse Hover Handler
  const handleMouseEnter = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const mainImg = card.querySelector('.img-main');
    const hoverImg = card.querySelector('.img-hover');

    gsap.to(mainImg, { opacity: 0, scale: 1.06, duration: 0.5, ease: 'power2.out' });
    gsap.to(hoverImg, { opacity: 1, scale: 1.06, duration: 0.5, ease: 'power2.out' });
  };

  // GSAP Mouse Leave Handler
  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const mainImg = card.querySelector('.img-main');
    const hoverImg = card.querySelector('.img-hover');

    gsap.to(mainImg, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' });
    gsap.to(hoverImg, { opacity: 0, scale: 1, duration: 0.5, ease: 'power2.out' });
  };

  return (
    <section ref={sectionRef} className="home-portfolio-section">
      <div ref={headerRef} className="home-portfolio-header">
        <span className="portfolio-tagline">Portfolio-Catalogues/Brochures</span>
        <h2 className="portfolio-title">It takes a lot to create a catalogue It is not a piece of paper,<br></br> it's the image of your brand, let the experts handle it</h2>
      </div>

      <div className="portfolio-grid-container">
        {portfolioData.map((item, index) => (
          <Link
            to={item.link}
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`portfolio-card ${item.isLarge ? 'card-large' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={item.mainImg}
              alt={item.title}
              className="portfolio-img img-main"
            />
            <img
              src={item.hoverImg}
              alt={`${item.title} Hover`}
              className="portfolio-img img-hover"
            />
            
            <div className="portfolio-overlay">
              <span className="portfolio-card-title">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomePortfolio;