import React, { useEffect, useRef, memo } from 'react';
import './MouseRun.css';

function MouseRun() {
  const dotRef = useRef(null);
  const outlineElementRef = useRef(null);
  
  const mouse = useRef({ x: -100, y: -100, targetX: -100, targetY: -100 });
  const lastTime = useRef(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    let animationFrameId;

    const handleMouseMove = (e) => {
      mouse.current.targetX = e.clientX;
      mouse.current.targetY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      const now = performance.now();
      if (now - lastTime.current > 30) {
        lastTime.current = now;
        createTrailParticle(e.clientX, e.clientY);
      }
    };

    const createTrailParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.className = 'cursor-star-particle';
      
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 10;
      const pX = x + Math.cos(angle) * distance;
      const pY = y + Math.sin(angle) * distance;

      particle.style.left = `${pX}px`;
      particle.style.top = `${pY}px`;
      
      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.22;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.22;

      if (outlineElementRef.current) {
        outlineElementRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"], .interactive-hover')) {
        document.body.classList.add('pro-cursor-hover');
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"], .interactive-hover')) {
        document.body.classList.remove('pro-cursor-hover');
      }
    };

    const handleMouseDown = () => document.body.classList.add('pro-cursor-active');
    const handleMouseUp = () => document.body.classList.remove('pro-cursor-active');

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="pro-cursor-dot" />
      <div ref={outlineElementRef} className="pro-cursor-outline" />
    </>
  );
}

export default memo(MouseRun);