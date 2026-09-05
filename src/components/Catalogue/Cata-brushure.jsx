import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Cata-brushure.css';

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

const brochureData = [
  { id: 1, mainImg: p1Main, hoverImg: p1Hover },
  { id: 2, mainImg: p2Main, hoverImg: p2Hover },
  { id: 3, mainImg: p3Main, hoverImg: p3Hover },
  { id: 4, mainImg: p4Main, hoverImg: p4Hover },
  { id: 5, mainImg: p5Main, hoverImg: p5Hover },
  { id: 6, mainImg: p1Main, hoverImg: p2Hover }
];

const CataBrushure = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // 1. Header Scroll Animation
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none'
            }
          }
        );
      }

      // 2. Row-wise Stagger Animation
      const firstRow = cardsRef.current.slice(0, 3);
      const secondRow = cardsRef.current.slice(3, 6);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      });

      tl.fromTo(
        firstRow,
        { opacity: 0, y: 50, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out'
        }
      ).fromTo(
        secondRow,
        { opacity: 0, y: 50, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out'
        },
        '-=0.3'
      );
    }, sectionRef);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  // Smooth Mouse Enter Handler
  const handleMouseEnter = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const mainImg = card.querySelector('.img-main');
    const hoverImg = card.querySelector('.img-hover');

    gsap.to(mainImg, { opacity: 0, scale: 1.08, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
    gsap.to(hoverImg, { opacity: 1, scale: 1.03, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
  };

  // Smooth Mouse Leave Handler
  const handleMouseLeave = (index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const mainImg = card.querySelector('.img-main');
    const hoverImg = card.querySelector('.img-hover');

    gsap.to(mainImg, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
    gsap.to(hoverImg, { opacity: 0, scale: 1, duration: 0.6, ease: 'power2.out', overwrite: 'auto' });
  };

  return (
    <section ref={sectionRef} className="cata-brushure-section">
      <div ref={headerRef} className="cata-brushure-header">
        <h3 className="cata-brushure-subtitle">BROCHURE & CATALOGUE ARCHIVES</h3>
        <p className="cata-brushure-desc">
          It takes a lot to create a catalogue. It is not a piece of paper , it's the image of your brand. Let the experts handle it.
        </p>
      </div>

      <div className="cata-brushure-grid">
        {brochureData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="cata-brushure-card"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              src={item.mainImg}
              alt="Brochure Main"
              className="cata-brushure-img img-main"
            />
            <img
              src={item.hoverImg}
              alt="Brochure Hover"
              className="cata-brushure-img img-hover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CataBrushure;