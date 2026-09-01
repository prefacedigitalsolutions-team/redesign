import React, { memo } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './common.css';
import studioBannerImg from '../../assets/home/footer-top.jpg'; 

function CommonBanner({ 
  title = "LET'S CREATE SOMETHING EXTRAORDINARY TOGETHER.", 
  buttonText = "LET'S TALK",
  onButtonClick 
}) {
  return (
    <section 
      className="common-banner-section"
      style={{ backgroundImage: `url(${studioBannerImg})` }}
    >
      <div className="common-banner-overlay"></div>
      <div className="common-banner-container">
        <h2 className="common-banner-title">{title}</h2>
        <button 
          type="button" 
          className="explore-btn common-banner-btn"
          onClick={onButtonClick}
        >
          <span>{buttonText}</span>
          <FiArrowRight className="btn-arrow" />
        </button>
      </div>
    </section>
  );
}

export default memo(CommonBanner);