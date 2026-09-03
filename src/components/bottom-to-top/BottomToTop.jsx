import React, { useState, useEffect, memo } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './BottomToTop.css';

function BottomToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;

      // Show button after scrolling down 300px
      if (currentScroll > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage for circular indicator
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`btt-container ${isVisible ? 'btt-show' : ''}`}>
      <button
        type="button"
        className="btt-button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg className="btt-progress-ring" width="50" height="50" viewBox="0 0 50 50">
          <circle
            cx="25"
            cy="25"
            r="21"
            className="btt-ring-bg"
          />
          <circle
            cx="25"
            cy="25"
            r="21"
            className="btt-ring-fill"
            style={{
              strokeDasharray: 132,
              strokeDashoffset: 132 - (132 * scrollProgress) / 100,
            }}
          />
        </svg>
        <FiArrowUp className="btt-icon" />
      </button>
    </div>
  );
}

export default memo(BottomToTop);