import React, { useState } from "react";
import "./S-All.css";

const servicesData = [
  {
    category: "PRINT",
    tagline: "High-impact physical marketing & collateral materials.",
    items: [
      "Catalogues", "Brochures", "Company Profile", "Annual Reports", "Posters",
      "Coffee Table Book", "Leaflets", "Folders", "Placement Brochures", "Dockets",
      "Prospectus", "School Souvenir", "Sustainability Reports", "Mailers", "Danglers",
      "Warranty Cards", "Estimate Pads", "Medical Visual Aid Folders", "Sample Folders",
      "Instruction Manual", "Shade Cards", "Dealer Certificate", "Stickers",
      "Tent Cards", "Note Books", "Diaries", "Paper Carry Bags"
    ],
  },
  {
    category: "DIGITAL & WEB",
    tagline: "High-converting landing pages, full-stack web development, and digital scaling.",
    items: [
      "Landing Page Design",
      "Website Designing",
      "Web Development",
      "Search Engine Optimization (SEO)",
      "E-catalogue",
      "E-brochure",
      "Logo Design",
      "PPT Presentation Design",
      "Magazine Ads Design",
      "Directory Ad Design",
      "News Paper Ad Design",
      "Hoardings / Glow Sign",
      "Kiosk Design",
      "Packaging Design",
      "Vinyl / Eco Solvent Posters",
      "Standies",
      "Exhibition Posters",
      "Social Media Banners",
      "Short Run Digital Printing"
    ],
  },
  {
    category: "PHOTOGRAPHY",
    tagline: "Commercial, industrial, and product visual storytelling.",
    items: [
      "Product Photography", "Industrial Photography", "Interior Photography",
      "Food Photography", "Jewellery Photography", "Fashion Photography"
    ],
  },
  {
    category: "BRANDING",
    tagline: "Corporate identity, utility merchandise, and custom giveaways.",
    items: [
      "Desktop Calendars", "Wall Calendars", "Price Tags", "Merchandise Branding",
      "T-Shirts", "Caps", "Mugs", "Mouse Pads", "Pen Drives",
      "Canvas Bags / Jute Bags", "Pen Stands", "Pens", "Posters",
      "Backpacks", "Water Bottles", "Wall Clocks", "Keychains"
    ],
  },
];

const getLink = (item) => {
  const printServices = [
    "Catalogues", "Brochures", "Company Profile", "Annual Reports", "Posters",
    "Coffee Table Book", "Leaflets", "Folders", "Placement Brochures", "Dockets",
    "Prospectus", "School Souvenir", "Sustainability Reports", "Mailers", "Danglers",
    "Warranty Cards", "Estimate Pads", "Medical Visual Aid Folders", "Sample Folders",
    "Instruction Manual", "Shade Cards", "Dealer Certificate", "Stickers",
    "Tent Cards", "Note Books", "Diaries", "Paper Carry Bags"
  ];
  return printServices.includes(item) ? "/catalogues" : "/other";
};

const SAll = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentCategory = servicesData[activeTab];

  return (
    <section className="modern-services-section">
      <div className="modern-container">
        
        {/* HEADER AREA */}
        <div className="modern-header">
          <div className="modern-badge">
            <span className="badge-dot"></span>
            OUR CAPABILITIES & EXPERTISE
          </div>
          <div className="modern-meta">
            <span>EST. 2000+</span>
            <span className="separator">•</span>
            <span>DELHI, INDIA</span>
          </div>
        </div>

        <div className="modern-intro-row">
          <h2>
            One Studio. <br />
            <span className="plain-white-text">Infinite Brand Solutions.</span>
          </h2>
          <p className="modern-desc">
            Delivering precision across print, custom web design, landing pages, development, and corporate branding to scale your enterprise forward.
          </p>
        </div>

        {/* INTERACTIVE CATEGORY TABS */}
        <div className="modern-tabs">
          {servicesData.map((cat, index) => (
            <button
              key={cat.category}
              className={`modern-tab-btn ${activeTab === index ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-num">0{index + 1}</span>
              <span className="tab-text">{cat.category}</span>
              <span className="tab-count">({cat.items.length})</span>
            </button>
          ))}
        </div>

        {/* ACTIVE CATEGORY SHOWCASE */}
        <div className="modern-showcase">
          <div className="showcase-header">
            <h3>{currentCategory.category} DIVISION</h3>
            <p>{currentCategory.tagline}</p>
          </div>

          <div className="modern-grid">
            {currentCategory.items.map((item, idx) => (
              <a 
                href={getLink(item)} 
                key={item} 
                className="modern-service-card"
              >
                <div className="card-top">
                  <span className="card-index">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="card-arrow">↗</span>
                </div>
                <h4 className="card-title">{item}</h4>
              </a>
            ))}
          </div>

          {/* ADDED: SPECIAL ACTION BUTTONS SECTION FOR WEB/LANDING/SEO */}
          {activeTab === 1 && (
            <div className="web-action-buttons">
              <a href="/contact" className="action-btn primary-btn">
                <span>Get a Custom Landing Page</span>
                <span>→</span>
              </a>
              <a href="/portfolio" className="action-btn secondary-btn">
                <span>View Web Portfolio</span>
                <span>↗</span>
              </a>
            </div>
          )}
        </div>

        {/* FOOTER BAR */}
        <div className="modern-footer-bar">
          <span>70+ SPECIALIZED SERVICES</span>
          <span>SCROLL TO DISCOVER MORE</span>
        </div>

      </div>
    </section>
  );
};

export default SAll;