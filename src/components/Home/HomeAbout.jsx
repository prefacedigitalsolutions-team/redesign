import React, { useEffect, useRef } from 'react';
import './HomeAbout.css';
import aboutBannerImg from '../../assets/home/Home-about.jpg'; // Path aapke folder structure ke hisab se set karein

import { 
  playHeadingAnim, 
  playTextAnim, 
  playImageAnim 
} from '../../components/gsap/gsapAnimations';

function HomeAbout() {
  /* =====================================================
     GSAP REFS
  ===================================================== */
  const headingRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  /* =====================================================
     GSAP SCROLLTRIGGER ANIMATIONS
  ===================================================== */
  useEffect(() => {
    // Animations Trigger
    playHeadingAnim(headingRef.current);
    playTextAnim(leftTextRef.current);
    playTextAnim(rightTextRef.current);
    playTextAnim(buttonRef.current);
    playImageAnim(imageRef.current);

    // ScrollTrigger Cleanup on Component Unmount
    return () => {
      // Cleanup handling automatically handled by GSAP ScrollTrigger
    };
  }, []);

  return (
    <section className="home-about-section">
      <div className="home-about-container">
        {/* Top Content Row */}
        <div className="text-content-row">
          {/* Left Column */}
          <div className="column-left">
            <h2 ref={headingRef}>About Us</h2>
            <p ref={leftTextRef} className="italic-intro">
              We design & print impactful marketing communication materials. Our services include creative design, high-quality printing, Website Designing & professional photography.
            </p>
          </div>

          {/* Right Column */}
          <div className="column-right" ref={rightTextRef}>
            <p>
              Preface Communications has grown over 20 years to become a leading creator of marketing materials.
            </p>

            <p>
              We provide all the creative, technical, and organizational skills to produce your catalogue and brochure, including professional design and photography that bring your brand to life.
            </p>

            <p>
              Our in-house team handles everything—from product photography and concept to designing and printing catalogues and brochures. We also create SEO-friendly websites and promote them through SEO, SMO, and social media.<br />
              <br />
              Based in Janakpuri, New Delhi, our studio is equipped with the latest photographic and design technology. Our clients include MNCs, manufacturers, corporates, and SMEs.
            </p>

            {/* Read More / Explore Button */}
            
            <div className="about-buttons-wrapper" ref={buttonRef}>
              <button className="explore-btn">
                <span>READ MORE</span>
                <span className="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Image Section */}
      <div className="full-width-image-container" ref={imageRef}>
        <img 
          src={aboutBannerImg} 
          alt="Studio Work Desk" 
          className="full-width-image" 
        />
      </div>
    </section>
  );
}

export default HomeAbout;