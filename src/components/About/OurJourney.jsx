import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './OurJourney.css';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: '2004', label: 'The Beginning' },
  { year: '2010', label: 'Expanding Horizons' },
  { year: '2016', label: 'Digital Transformation' },
  { year: '2020', label: 'Stronger Together' },
  { year: '2026', label: "What's Next" }
];

const OurJourney = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    const el = sectionRef.current;
    const line = lineRef.current;
    const items = itemRefs.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate timeline bar expanding across
    tl.fromTo(
      line,
      { scaleX: 0, transformOrigin: 'left center' },
      { scaleX: 1, duration: 1.2, ease: 'power3.out' }
    );

    // Stagger fade-in and slide-up for each milestone sequentially (2004 -> 2010 -> 2016 -> 2020 -> 2026)
    tl.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.25,
        ease: 'power2.out'
      },
      '-=0.8'
    );

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="journey-section">
      <div className="journey-container">
        <div className="journey-header">
          <span className="journey-eyebrow">OUR JOURNEY</span>
          <h2 className="journey-title">Milestones Over the Years</h2>
        </div>

        <div className="journey-timeline-wrapper">
          {/* Horizontal Line */}
          <div ref={lineRef} className="journey-line"></div>

          {/* Milestones Nodes */}
          <div className="journey-nodes-grid">
            {milestones.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className="journey-node-item"
              >
                <div className="journey-dot-wrapper">
                  <div className="journey-red-dot"></div>
                  <div className="journey-dot-pulse"></div>
                </div>
                <div className="journey-info">
                  <span className="journey-year">{item.year}</span>
                  <span className="journey-label">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;