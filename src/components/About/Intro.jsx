import React, { useEffect, useRef } from 'react';
import './Intro.css';
import { playAboutAnim } from '../../components/gsap/gsapAnimations';

import introImage from '../../assets/about/About-intro.jpg';

const Intro = () => {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const contentRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const metaRef = useRef(null);

  useEffect(() => {
    const animation = playAboutAnim({
      section: sectionRef.current,
      visual: visualRef.current,
      content: contentRef.current,
      eyebrow: textRef.current,
      title: titleRef.current,
      desc: descRef.current,
      meta: metaRef.current,
    });

    return () => {
      if (animation) animation.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="intro-section">
      {/* TOP ROW */}
      <div className="intro-top-row">
        <div ref={textRef} className="intro-top-left">
          <h2 ref={titleRef} className="intro-welcome-text">
            Preface Communications has grown over the past 20 years to become one of the leading creators of marketing communication materials. At Preface Communications you will find the facilities and all the creative, technical and organizational skills you need to produce your catalogue and Brochure. Our services include professional design for print and photography that brings your brand to life.
          </h2>
        </div>
        
        <div ref={visualRef} className="intro-top-right">
          <img 
            src={introImage} 
            alt="Creative studio and team" 
            className="intro-hero-img"
          />
          <div className="intro-side-action">
            <span>PREFACE</span>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div ref={contentRef} className="intro-bottom-row">
        {/* Left Vertical Title Block */}
        <div className="intro-bottom-pink-block">
          <span className="intro-rotated-title">About us</span>
        </div>

        {/* Center Content Block */}
        <div ref={descRef} className="intro-bottom-white-block">
          <p className="intro-desc">
            Our in-house team offers complete solutions right from photography of products, concept, designing and printing of Catalogues and Brochures. We design and host advanced, SEO friendly websites and also promote them with effective promotional tools like SEO and SMO also with the effective use of the social media platform.
          </p>
          <p className="intro-desc">
            Based in Janakpuri, New Delhi, India, we are able to render excellent services to our esteemed clients. Our design and photography studio are equipped with the latest digital photographic equipment, high specification graphics design computers and state-of-the-art graphics applications. Our clients include Well Known MNCs, Manufacturers, Corporates, Small and Medium Enterprises.
          </p>
        </div>

        {/* Right Accent Block */}
        <div ref={metaRef} className="intro-bottom-coral-block"></div>
      </div>
    </section>
  );
};

export default Intro;