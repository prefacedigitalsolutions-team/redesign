import React, { useEffect, useRef } from "react";
import "./web-banner.css";
import gsap from "gsap";

const WebBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="elite-web-banner" ref={bannerRef}>
      <div className="elite-container">
        
        {/* Top Editorial Header */}
        <div className="elite-header-row">
          <div className="elite-title-group">
            <span className="elite-subtitle">ENTERPRISE WEB ARCHITECTURE</span>
            <h1>Crafting Digital Legacy</h1>
          </div>
          <div className="elite-desc-group">
            <p>
              We merge uncompromising design precision with elite full-stack engineering 
              to build iconic digital platforms that command absolute market authority.
            </p>
          </div>
        </div>

        {/* Immersive Full-Width Showcase Frame */}
        <div className="elite-showcase-box">
          <div className="red-glow-accent"></div>
          <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1800" 
            alt="Elite Web Design Showcase" 
            className="elite-main-image"
          />
          <div className="elite-floating-tag">
            <span className="tag-dot"></span>
            <span>NEXT-GEN SYSTEM ARCHITECTURE</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebBanner;