import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './StaticSection.css';

import bgImage from '../../assets/home/static-image-01.jpg';

gsap.registerPlugin(ScrollTrigger);

const StaticSection = ({
  bg = bgImage,
  heading = "We love playing with colors because we know we can handle them with ease",
  counters = [
    { target: 250, suffix: "+", label: "Happy Clients" },
    { target: 25, suffix: "+", label: "Years of Experience" },
    { target: 58, suffix: "%", label: "Industries Served" }
  ]
}) => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [counts, setCounts] = useState(counters.map(() => 0));

  useEffect(() => {
    // 1. Entrance Fade & Slide Up (Only for Card)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );

      // 2. Numbers Counter Animation
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          counters.forEach((item, index) => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: item.target,
              duration: 2,
              ease: 'power1.out',
              onUpdate: () => {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = Math.floor(obj.val);
                  return updated;
                });
              }
            });
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []); // Empty dependency array taaki counts update hone par GSAP reset na ho

  return (
    <section 
      ref={sectionRef}
      className="static-main-section" 
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="static-section-overlay"></div>

      <div className="static-container">
        {/* Card Reference Handled Safely */}
        <div ref={cardRef} className="static-content-card">
          <h2 className="static-card-heading">{heading}</h2>

          <div className="static-card-counters">
            {counters.map((item, index) => (
              <div key={index} className="card-counter-item">
                <h3 className="card-counter-number">
                  {counts[index]}
                  <span className="counter-suffix">{item.suffix}</span>
                </h3>
                <p className="card-counter-label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StaticSection;