import React, { useState, useEffect, useRef } from "react";
import "./photo-img.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PhotoImg = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const gridRef = useRef(null);
  const sectionRef = useRef(null);

  const allPhotos = [
    { id: 1, title: "Architectural Minimalist Space", category: "studio", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" },
    { id: 2, title: "Modern High-End Fashion", category: "fashion", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop" },
    { id: 3, title: "Luxury Timepiece Setup", category: "product", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop" },
    { id: 4, title: "Cinematic Dark Mood Frame", category: "editorial", img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop" },
    { id: 5, title: "Designer Apparel Showcase", category: "fashion", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" },
    { id: 6, title: "Organic Skincare Bottle", category: "product", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=1200&auto=format&fit=crop" },
    { id: 7, title: "Vogue Streetwear Campaign", category: "fashion", img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1200&auto=format&fit=crop" },
    { id: 8, title: "Minimalist Footwear Display", category: "product", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200&auto=format&fit=crop" },
    { id: 9, title: "Monochrome Portrait Master", category: "editorial", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" },
    { id: 10, title: "Pro Lighting Strobe Setup", category: "studio", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop" },
    { id: 11, title: "Haute Couture Runway", category: "fashion", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop" },
    { id: 12, title: "Luxury Tech Artifacts", category: "product", img: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?q=80&w=1200&auto=format&fit=crop" },
    { id: 13, title: "Shadow Play Editorial", category: "editorial", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" },
    { id: 14, title: "Backstage Production Studio", category: "studio", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop" },
    { id: 15, title: "Urban Fall Collection", category: "fashion", img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop" },
    { id: 16, title: "Curated Accessories Flatlay", category: "product", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop" },
    { id: 17, title: "Classic Studio Portrait", category: "editorial", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop" },
    { id: 18, title: "Commercial Softbox Array", category: "studio", img: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=1200&auto=format&fit=crop" },
    { id: 19, title: "Avant-Garde Style Look", category: "fashion", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop" },
    { id: 20, title: "Bespoke Fragrance Bottle", category: "product", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop" },
  ];

  const filteredPhotos = activeFilter === "all" 
    ? allPhotos 
    : allPhotos.filter(item => item.category === activeFilter);

  // Clean, high-performance stagger batch entry without scroll stuttering (scrub removed to fix jitter)
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        const cards = gridRef.current.children;
        
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section ref={sectionRef} className="photo-gallery-section">
      <div className="section-divider"></div>

      <div className="photo-gallery-container">
        
        <div className="gallery-header-row">
          <div className="gallery-title-box">
            <h2>Portfolio Archive</h2>
            <p>A curated collection of high-end commercial, fashion, and editorial productions.</p>
          </div>

          <div className="filter-buttons">
            {["all", "fashion", "product", "editorial", "studio"].map((category) => (
              <button 
                key={category}
                className={activeFilter === category ? "filter-btn active" : "filter-btn"} 
                onClick={() => setActiveFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)} {category === "all" ? `(${allPhotos.length})` : ""}
              </button>
            ))}
          </div>
        </div>

        <div ref={gridRef} className="photos-grid-container">
          {filteredPhotos.map((photo, index) => (
            <div key={photo.id} className="photo-card">
              <div className="photo-wrapper">
                <img src={photo.img} alt={photo.title} loading="lazy" />
                <div className="photo-overlay">
                  <span className="photo-index">//{String(index + 1).padStart(2, '0')}</span>
                  <h4>{photo.title}</h4>
                  <span className="photo-cat">{photo.category.toUpperCase()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PhotoImg;