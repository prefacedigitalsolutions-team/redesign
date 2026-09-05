import React, { useEffect, useRef } from "react";
import "./Cata-Banar.css";
import { playHeadingAnim, playCardsAnim, playTextAnim } from "../../components/gsap/gsapAnimations";

// Custom Local Images Paths
import p1Main from '../../assets/home/4c.jpg';
import p2Main from '../../assets/home/3c.jpg';
import p3Main from '../../assets/home/5c.jpg';

const CataBanar = () => {
  const headerRef = useRef(null);
  const cardsRef = useRef([]);
  const footerRef = useRef(null);

  useEffect(() => {
    // Header animation
    playHeadingAnim(headerRef.current);

    // Cards Stagger animation (using your existing utility)
    playCardsAnim(cardsRef.current);

    // Footer description and metrics animation
    playTextAnim(footerRef.current);
  }, []);

  return (
    <section className="catalog-showcase-section">
      <div className="showcase-wrapper">
        
        {/* Header Block */}
        <div ref={headerRef} className="showcase-header">
          <div className="showcase-meta">
            <span className="meta-dot"></span>
            <span>CATALOGUE ARCHIVE // 2026</span>
          </div>
          <h1 className="showcase-title">
            Master Catalogue <span>& Visual Systems</span>
          </h1>
        </div>

        {/* Dynamic 3-Column Immersive Image Grid */}
        <div className="showcase-grid">
          
          <div 
            ref={(el) => (cardsRef.current[0] = el)} 
            className="showcase-card"
          >
            <div className="card-img-wrapper">
              <img 
                src={p1Main} 
                alt="Primary Architecture View" 
              />
            </div>
            <div className="card-overlay-badge">01 // STRUCTURAL GRID</div>
          </div>

          <div 
            ref={(el) => (cardsRef.current[1] = el)} 
            className="showcase-card"
          >
            <div className="card-img-wrapper">
              <img 
                src={p2Main} 
                alt="Interior Spatial Layout" 
              />
            </div>
            <div className="card-overlay-badge">02 // SPATIAL FLOW</div>
          </div>

          <div 
            ref={(el) => (cardsRef.current[2] = el)} 
            className="showcase-card"
          >
            <div className="card-img-wrapper">
              <img 
                src={p3Main} 
                alt="Material Finish" 
              />
            </div>
            <div className="card-overlay-badge">03 // MATERIAL FINISH</div>
          </div>

        </div>

        {/* Bottom Details Bar */}
        <div ref={footerRef} className="showcase-footer">
          <p className="showcase-desc">
            Precision-crafted layouts engineered for high-end global enterprises and architecture studios.
          </p>
          <div className="showcase-metrics">
            <div className="metric-item"><strong>12+</strong> Frameworks</div>
            <div className="metric-item"><strong>100%</strong> Dynamic Grid</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CataBanar;