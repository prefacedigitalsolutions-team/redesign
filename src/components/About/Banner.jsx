import React, { useEffect, useRef } from 'react';
import './Banner.css';

/* Local images import */
import mainImage from '../../assets/about/about-banner.jpg'; 
import subImage from '../../assets/about/About-banar-02.jpg';   

import { playAboutAnim } from '../../components/gsap/gsapAnimations';

const Banner = () => {
  /* gsap */
  const sectionRef = useRef(null);
  const visualClusterRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const metaGridRef = useRef(null);

  /* gsap animation hook */
  useEffect(() => {
    const animation = playAboutAnim({
      section: sectionRef.current,
      visual: visualClusterRef.current,
      content: contentWrapperRef.current,
      eyebrow: eyebrowRef.current,
      title: titleRef.current,
      desc: descRef.current,
      meta: metaGridRef.current
    });

    return () => {
      if (animation) {
        animation.kill();
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="zenith-about-section">
      {/* Background Subtle Grain Texture Overlay */}
      <div className="zenith-grain-overlay"></div>

      <div className="zenith-container">
        
        {/* Left Side: Asymmetric Dual Image Showcase */}
        <div ref={visualClusterRef} className="zenith-visual-cluster">
          <div className="zenith-primary-frame">
            <img 
              src={mainImage} 
              alt="Creative studio and product design setup" 
              className="zenith-img-main"
            />
          </div>
          <div className="zenith-floating-frame">
            <img 
              src={subImage} 
              alt="Detailed print and catalogue work" 
              className="zenith-img-sub"
            />
          </div>
          <div className="zenith-badge-pill">
            <span className="pill-dot"></span>
            <span>Est. 25+ Years // New Delhi</span>
          </div>
        </div>

        {/* Right Side: Editorial Typography & Preface Philosophy */}
        <div ref={contentWrapperRef} className="zenith-content-wrapper">
          <div ref={eyebrowRef} className="zenith-eyebrow-row">
            <span className="eyebrow-index">01 / WHO WE ARE</span>
            <span className="eyebrow-rule"></span>
          </div>

          <h1 ref={titleRef} className="zenith-title">
            Design is Thinking Made Visual
          </h1>

          <p ref={descRef} className="zenith-description">
            With 25+ years of expertise, Preface Communications is a premier creative agency transforming brand values into bold market leaders through precision product photography, catalogue design, and print solutions.
          </p>

          <div ref={metaGridRef} className="zenith-meta-grid">
            <div className="meta-box">
              <span className="meta-val">25+</span>
              <span className="meta-lbl">Years Experience</span>
            </div>
            <div className="meta-box">
              <span className="meta-val">100%</span>
              <span className="meta-lbl">In-House Studio</span>
            </div>
            <div className="meta-box">
              <span className="meta-val">End-to-End</span>
              <span className="meta-lbl">Print & Design</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;