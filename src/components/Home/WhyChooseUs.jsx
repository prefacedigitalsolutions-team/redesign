
import React, { memo, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FiLayers,
  FiZap,
  FiShield,
  FiArrowUpRight,
} from 'react-icons/fi';

import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    id: '01',
    icon: FiLayers,
    title: 'Out of The Box Creativity',
    description: 'Creative ideas that make your brand stand out.',
  },
  {
    id: '02',
    icon: FiZap,
    title: 'Team of experienced professionals.',
    description: 'Expert team, quality work.',
  },
  {
    id: '03',
    icon: FiShield,
    title: 'Timely Delivery',
    description: 'Quality work delivered on time, every time.',
  },
];


const FeatureCard = memo(function FeatureCard({
  feature,
  cardRef,
  onLearnMore,
}) {
  const Icon = feature.icon;

  return (
    <article className="wcu-card" ref={cardRef}>
      <div className="wcu-card-top">
        <span className="wcu-number">{feature.id}</span>

        <div className="wcu-icon">
          <Icon aria-hidden="true" />
        </div>

        <button
          type="button"
          className="wcu-arrow"
          onClick={onLearnMore}
          aria-label={`Learn more about ${feature.title}`}
        >
          <FiArrowUpRight aria-hidden="true" />
        </button>
      </div>

      <div className="wcu-card-content">
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </article>
  );
});

function WhyChooseUs() {
  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current.children,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 82%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
      cardsRef.current = [];
    };
  }, []);

  const handleLearnMore = () => {
    navigate('/about');
  };

  return (
    <section
      className="wcu-section"
      ref={sectionRef}
      aria-labelledby="wcu-heading"
    >
      <div className="wcu-container">

        <header className="wcu-header" ref={headerRef}>
          <span className="wcu-label">Why should you choose us as <br></br>your own creative partners</span>

          <h2 id="wcu-heading">
           If you have good product, you need an effective creative agency as well to understand your product & services as deep as you do
          </h2>

          <p>
           
          </p>
        </header>

        <div className="wcu-grid">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              cardRef={(el) => {
                cardsRef.current[index] = el;
              }}
              onLearnMore={handleLearnMore}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default memo(WhyChooseUs);

