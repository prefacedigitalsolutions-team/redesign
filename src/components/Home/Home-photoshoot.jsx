import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';

import './Home-photoshoot.css';

// GSAP animations
import { 
  playHeadingAnim, 
  playTextAnim 
} from '../../components/gsap/gsapAnimations';

import img1 from '../../assets/home/home-industrie-photoshoot.jpg';
import img2 from '../../assets/home/home-chair-photoshoot.jpg';
import img3 from '../../assets/home/home-toti-photosghoot.jpg';
import img4 from '../../assets/home/home-table-photography.jpg';

const photoshootItems = [
  { 
    id: '01', 
    title: 'INDUSTRIAL PHOTOSHOOT', 
    description: 'Capturing large-scale industrial setups with absolute clarity and professional precision.', 
    image: img1, 
    link: '/photoshoot/1' 
  }, 
  { 
    id: '02', 
    title: 'FURNITURE PHOTOGRAPHY', 
    description: 'Highlighting textures, craftsmanship, and modern aesthetics of furniture designs.', 
    image: img2, 
    link: '/photoshoot/2' 
  },
  { 
    id: '03', 
    title: 'PRODUCT PHOTOGRAPHY', 
    description: 'Detailed and vibrant shots designed to make your products stand out commercially.', 
    image: img3, 
    link: '/photoshoot/3' 
  },
  { 
    id: '04', 
    title: 'TABLETOP SHOOTS', 
    description: 'Creative arrangement and lighting to bring out the finest details in every frame.', 
    image: img4, 
    link: '/photoshoot/4' 
  },
];

function HomePhotoshoot() {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (headingRef.current) playHeadingAnim(headingRef.current);
    if (textRef.current) playTextAnim(textRef.current);
  }, []);

  return (
    <section className="home-photoshoot-section">
      <div className="photoshoot-container">
        {/* Top Centered Content */}
        <div className="photoshoot-header">
          <span ref={headingRef} className="photoshoot-heading">
            PHOTOSHOOT
          </span>
          <h2 ref={textRef} className="photoshoot-description">
            Discover stunning moments captured by our expert photographers. We specialize in creative, vibrant, and professional photoshoots that bring your vision to life.
          </h2>
        </div>

        {/* Swiper Carousel (Hover par autoplay pause nahi hoga) */}
        <div className="photoshoot-slider-wrapper">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false, 
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 15 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 20 },
            }}
            className="mySwiper"
          >
            {photoshootItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="carousel-card">
                  {/* Background Image */}
                  <img src={item.image} alt={item.title} className="carousel-card-bg" />

                  {/* Top-to-Bottom Overlay */}
                  <div className="photoshoot-overlay">
                    <div className="photoshoot-overlay-content">
                      <h3 className="photoshoot-item-title">{item.title}</h3>
                      <p className="photoshoot-item-desc">{item.description}</p>
                      
                      {/* Sirf Explore More button par click karne se page change hoga */}
                      <button 
                        className="photoshoot-explore-btn"
                        onClick={() => navigate(item.link)}
                      >
                        <span>EXPLORE MORE</span>
                        <div className="photoshoot-btn-arrow">→</div>
                      </button>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default HomePhotoshoot;