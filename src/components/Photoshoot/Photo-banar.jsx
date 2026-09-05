import React, { useEffect, useRef } from "react";
import "./Photo-banar.css";
import gsap from "gsap";

const PhotoBanar = () => {
  const containerRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightVisualRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        leftContentRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.2 }
      ).fromTo(
        rightVisualRef.current.children,
        { opacity: 0, scale: 0.94, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.3, stagger: 0.2 },
        "-=0.9"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="standard-banner-section">
      <div className="standard-banner-container">
        
        {/* Left Side: Clean Typography */}
        <div ref={leftContentRef} className="standard-left">
          <h1 className="standard-title">
            Crafting <span className="italic-serif">Editorial</span> Excellence For Global Brands.
          </h1>
          
          <p className="standard-desc">
            Defining visual identities through high-fashion portfolios, avant-garde lighting, 
            and meticulous commercial product production.
          </p>
        </div>

        {/* Right Side: High-End Minimal Visual Showcase */}
        <div ref={rightVisualRef} className="standard-right">
          <div className="minimal-card card-one">
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" 
              alt="High Fashion Editorial" 
            />
          </div>

          <div className="minimal-card card-two">
            <img 
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop" 
              alt="Luxury Commercial Product" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default PhotoBanar;