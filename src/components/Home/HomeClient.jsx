import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomeClient.css';

// All 11 Logo Imports
import brandActionTesa from '../../assets/home/logo/Action Tesa.jpg';
import brandAsahi from '../../assets/home/logo/Asahi Ropes.png';
import brandAssomac from '../../assets/home/logo/ASSOMAC.png';
import brandBgl from '../../assets/home/logo/BGL.png';
import brandBlackjack from '../../assets/home/logo/Blackjack.png';
import brandLogo6 from '../../assets/home/logo/ERD.png';
import brandLogo7 from '../../assets/home/logo/Geeken.png';
import brandLogo8 from '../../assets/home/logo/Lars.png';
import brandLogo9 from '../../assets/home/logo/Paramount Bed.jpg';
import brandLogo10 from '../../assets/home/logo/Spac.png';
import brandLogo11 from '../../assets/home/logo/Virgo group.jpg';

gsap.registerPlugin(ScrollTrigger);

const clientLogos = [
  { id: 1, name: 'Action Tesa', logo: brandActionTesa },
  { id: 2, name: 'Asahi Ropes', logo: brandAsahi },
  { id: 3, name: 'Assomac', logo: brandAssomac },
  { id: 4, name: 'BGL', logo: brandBgl },
  { id: 5, name: 'Blackjack', logo: brandBlackjack },
  { id: 6, name: 'ERD', logo: brandLogo6 },
  { id: 7, name: 'Geeken', logo: brandLogo7 },
  { id: 8, name: 'Lars', logo: brandLogo8 },
  { id: 9, name: 'Paramount Bed', logo: brandLogo9 },
  { id: 10, name: 'Spac', logo: brandLogo10 },
  { id: 11, name: 'Virgo Group', logo: brandLogo11 },
];

function HomeClient() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Smooth JS Marquee Animation (Zero Jerk)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationFrameId;
    let xPos = 0;
    const speed = 0.8; // Speed adjust karne ke liye (kam ya zyada kar sakte hain)

    // Track ko triple map karke lambi list banate hain taaki reset ka pata na chale
    const scrollStep = () => {
      xPos -= speed;
      // Jab pehla set poora cross ho jaye toh seamlessly 0 par le aayein
      if (Math.abs(xPos) >= track.scrollWidth / 3) {
        xPos = 0;
      }
      track.style.transform = `translateX(${xPos}px)`;
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="hc-section" ref={sectionRef}>
      <div className="hc-container">
        {/* Section Header with Heading and Paragraph */}
        <div className="hc-header" ref={headerRef}>
          <h2 className="hc-title">TRUSTED BY <br className="hc-desktop-br" />LEADING BRANDS</h2>
          <p className="hc-subtitle-desc">
            We collaborate with industry leaders to deliver exceptional results and impactful digital experiences.
          </p>
        </div>

        {/* Infinite Marquee Logos Track */}
        <div className="hc-marquee-container">
          <div className="hc-marquee-track" ref={trackRef}>
            {/* 3 sets map kiye hain taaki infinite loop bilkul smooth chale */}
            {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
              <div key={`${client.id}-${index}`} className="hc-logo-wrapper">
                <img src={client.logo} alt={`${client.name} Logo`} className="hc-logo" />
              </div>
            ))}
          </div>

          <div className="hc-more-brands">and more</div>
        </div>
      </div>
    </section>
  );
}

export default HomeClient;