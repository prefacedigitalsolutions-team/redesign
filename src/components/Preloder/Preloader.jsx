import React, { useEffect, useState } from 'react';
import './Preloader.css';

function Preloader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="preloader-container">
      <div className="preloader-center-content">
        
        {/* Subtle Tagline */}
        <div className="preloader-tagline-wrapper">
          <span className="preloader-tagline">DIGITAL CREATIVE AGENCY</span>
        </div>

        {/* Main Animated Brand Title */}
        <div className="preloader-title-wrapper">
          <h1 className="preloader-logo">PREFACE</h1>
          <span className="logo-dot">.</span>
        </div>

        {/* Center Progress Bar & Counter */}
        <div className="preloader-progress-box">
          <div className="loader-track">
            <div className="loader-fill" style={{ width: `${count}%` }}></div>
          </div>
          <span className="loader-counter">{count}%</span>
        </div>

      </div>
    </div>
  );
}

export default Preloader;