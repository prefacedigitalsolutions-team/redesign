import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomeAboutMatter.css';

// Apni word-cloud image ka path sahi set karein
import matterImg from '../../assets/home/home-img-matter.jpg';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  { year: '2004', label: 'The Beginning' },
  { year: '2010', label: 'Expanding Horizons' },
  { year: '2016', label: 'Digital Transformation' },
  { year: '2020', label: 'Stronger Together' },
  { year: '2026', label: 'Future Ready' },
];

const HomeAboutMatter = () => {
  /* =====================================================
     GSAP REFS
  ===================================================== */
  const sectionRef = useRef(null);
  const leftTextRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    // GSAP Context to handle React StrictMode safely
    const ctx = gsap.context(() => {

      // Timeline for scroll-triggered animation sequence
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%', // Starts animation when top of section reaches 75% of screen
          toggleActions: 'play none none reverse',
        },
      });

      // 1. Left Paragraphs Reveal
      tl.fromTo(
        leftTextRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: 'power3.out',
        }
      )
      // 2. Right Image Reveal
      .fromTo(
        imageWrapperRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
        },
        '-=0.6' // Overlaps with left text animation
      )
      // 3. Timeline Items Stagger Reveal
      .fromTo(
        timelineItemsRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'back.out(1.7)',
        },
        '-=0.4'
      );

    }, sectionRef);

    return () => ctx.revert(); // Clean up GSAP animations on unmount
  }, []);

  return (
    <section ref={sectionRef} className="about-matter-section">
      <div className="about-matter-container">
        
        {/* LEFT SIDE: MATTER CONTENT */}
        <div ref={leftTextRef} className="about-matter-left">
          <p className="matter-paragraph highlight-text">
            Being creative is seeing the same thing as everybody else but thinking of something different, be it ‘original thinking’, ‘inventiveness’, or ‘the ability to produce something new through imaginative skill’, at Preface Communications we are addicted to it!
          </p>
          
          <p className="matter-paragraph">
            Whether your project requires a photographic image, a new concept, a new page design for your catalogue.
          </p>
        </div>

        {/* RIGHT SIDE: IMAGE + TIMELINE STATS BELOW */}
        <div className="about-matter-right">
          
          {/* TOP: IMAGE FRAME */}
          <div ref={imageWrapperRef} className="matter-image-wrapper">
            <img src={matterImg} alt="Creative Word Cloud" className="matter-img" />
          </div>

          {/* BOTTOM: TIMELINE BLOCKS */}
          <div className="matter-timeline-grid">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (timelineItemsRef.current[index] = el)}
                className="timeline-item"
              >
                <h4 className="timeline-year">{item.year}</h4>
                <p className="timeline-label">{item.label}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HomeAboutMatter;