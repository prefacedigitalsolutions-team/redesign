
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./S-Service.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    no: "01",
    title: " Catalogue Designing",
    text: "We create unique catalogue designs that make an impact and promote your brand. With years of experience, Preface Communications delivers proven design solutions",
    link: "/services/catalogue-designing",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    no: "02",
    title: "Brochure Designing",
    text: "We design brochures that reflect your brand’s image with style and creativity, ensuring they connect with your audience and highlight your products effectively.",
    link: "/services/brochure-designing",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1400&auto=format&fit=crop",
  },
  {
    no: "03",
    title: "Offset Printing",
    text: "High quality offset printing done on most modern & advance machines, that transforms our creatives into reality on to piece of paper.",
    link: "/services/offset-printing",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1400&auto=format&fit=crop",
  },
  {
    no: "04",
    title: "E-brochure/catalogue",
    text: "The internet is a fast, cost-effective way to reach audiences—convert your catalogue or brochure into digital format for easy sharing and emailing.",
    link: "/services/e-brochure-catalogue",
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1400&auto=format&fit=crop",
  },
  {
    no: "05",
    title: "Photoshoot Services",
    text: "With advanced studio facilities, our expert photographers deliver creative images—from product and food shots to lifestyle, advertising, and catalogue photography.",
    link: "/services/photoshoot-services",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1400&auto=format&fit=crop",
  },
  {
    no: "06",
    title: "Web-Designing & Promotions",
    text: "Social media marketing helps brands connect with audiences of all sizes—we create tailored campaigns that boost visibility and engagement.",
    link: "/services/web-designing-promotions",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop",
  },
  {
    no: "07",
    title: "Short Run Printing-Digital",
    text: "For test marketing or events needing just 50–100 copies, we design and deliver quick digital prints with short-run printing machines",
    link: "/services/short-run-printing-digital",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop",
  },
  {
    no: "08",
    title: "Exhibition Posters",
    text: "From vinyl posters to exhibition displays, we create impactful branding solutions that transform spaces and give your products maximum exposure.",
    link: "/services/exhibition-posters",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1400&auto=format&fit=crop",
  },
  {
    no: "09",
    title: "Advertising-Magazine Ad",
    text: "We craft creative ads and branding solutions that capture attention, refresh outdated designs, and keep your business ahead of the competition.",
    link: "/services/advertising-magazine-ad",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
  },
];

const SService = () => {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         INTRO ANIMATION
      ========================= */

      gsap.from(".ss-kicker", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".ss-heading", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      gsap.from(".ss-description", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });

      /* =========================
         LEFT CONTENT
      ========================= */

      gsap.from(".ss-extra-content", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".ss-extra-content",
          start: "top 88%",
        },
      });

      /* =========================
         SERVICE ROWS
      ========================= */

      rowsRef.current.forEach((row, index) => {
        if (!row) return;

        gsap.from(row, {
          y: 45,
          opacity: 0,
          duration: 0.75,
          delay: index * 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      /* =========================
         IMAGE INITIAL STATE
      ========================= */

      rowsRef.current.forEach((row) => {
        if (!row) return;

        const image = row.querySelector(".ss-hover-image");

        if (!image) return;

        gsap.set(image, {
          opacity: 0,
          scale: 0.92,
        });
      });

      /* =========================
         IMAGE HOVER
      ========================= */

      rowsRef.current.forEach((row) => {
        if (!row) return;

        const image = row.querySelector(".ss-hover-image");

        if (!image) return;

        const enter = () => {
          gsap.killTweensOf(image);

          gsap.set(image, {
            opacity: 1,
            scale: 0.92,
          });

          gsap.to(image, {
            scale: 1,
            duration: 0.45,
            ease: "power3.out",
            overwrite: true,
          });
        };

        const leave = () => {
          gsap.killTweensOf(image);

          gsap.to(image, {
            opacity: 0,
            scale: 0.92,
            duration: 0.3,
            ease: "power3.inOut",
            overwrite: true,
          });
        };

        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", leave);

        row._enter = enter;
        row._leave = leave;
      });
    }, sectionRef);

    return () => {
      rowsRef.current.forEach((row) => {
        if (!row) return;

        row.removeEventListener("mouseenter", row._enter);
        row.removeEventListener("mouseleave", row._leave);

        const image = row.querySelector(".ss-hover-image");

        if (image) {
          gsap.killTweensOf(image);
        }
      });

      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="ss-section">
      <div className="ss-intro">

        {/* =================================
            LEFT SIDE
        ================================= */}

        <div className="ss-intro-left">

          <div className="ss-kicker">
            <span className="ss-kicker-dot" />
            OUR SERVICES
          </div>

          <div className="ss-sticky-title">

            <h2 className="ss-heading">
              We provide
              <br />
              <em>unmatched services.</em>
            </h2>

            <div className="ss-heading-line" />

            <p className="ss-description">
              “Creativity is seeing what everyone else sees, but thinking differently.” At Preface Communication, we turn ideas into impactful designs from photography and catalogues to branding, packaging, and advertising.
            </p>

            {/* =================================
                COMPANY RELATED CONTENT
            ================================= */}

            <div className="ss-extra-content">

              {/* BUSINESS INTRO */}

              <div className="ss-business-intro">

                <span className="ss-mini-label">
                  WHAT WE DO
                </span>

                <p>
                  From professional product photoshoots and
                  catalogue designing to printing, digital
                  marketing and modern website designing —
                  we provide complete creative solutions for
                  your business under one roof.
                </p>

              </div>


              {/* SERVICE TAGS */}

              <div className="ss-service-tags">

                <span>PHOTOSHOOT</span>

                <span>CATALOGUE DESIGN</span>

                <span>PRINTING</span>

                <span>DIGITAL MARKETING</span>

                <span>WEB DESIGNING</span>

                <span>CREATIVE DESIGN</span>

              </div>


              {/* COMPANY NOTE */}

              <div className="ss-company-note">

                <div className="ss-note-number">
                  01
                </div>

                <div className="ss-note-content">

                  <h4>
                    From product
                    <br />
                    <em>to presence.</em>
                  </h4>

                  <p>
                    We help businesses take their products from
                    a simple idea to a complete market presence.
                    Photography, catalogue, print, digital and
                    web — every part is designed to work together
                    and give your brand a professional identity.
                  </p>

                </div>

              </div>


              {/* BOTTOM CATEGORIES */}

              <div className="ss-business-bottom">

                <span>CREATIVE</span>

                <span>PRINT</span>

                <span>DIGITAL</span>

                <span>WEB</span>

              </div>

            </div>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE SERVICES
        ================================= */}

        <div className="ss-list">

          {services.map((service, index) => (

            <article
              key={service.no}
              ref={(el) => {
                rowsRef.current[index] = el;
              }}
              className="ss-row"
            >

              <div className="ss-number">
                {service.no}
              </div>


              <div className="ss-main">

                <div className="ss-title-row">

                  <h3>
                    {service.title}
                  </h3>

                  {/* =================================
                      CLICKABLE DIAMOND BUTTON
                  ================================= */}

                  <a
                    href={service.link}
                    className="ss-arrow"
                    aria-label={`View ${service.title}`}
                  >
                    ↗
                  </a>

                </div>

                <p>
                  {service.text}
                </p>

              </div>


              {/* HOVER IMAGE */}

              <div className="ss-hover-image">

                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />

              </div>


              <div className="ss-indicator">
                <span />
              </div>

            </article>

          ))}

        </div>

      </div>


      {/* =================================
          FOOTER
      ================================= */}

      <div className="ss-footer">

        <span>
          CAPABILITIES / 2026
        </span>

        <div />

        <span>
          PHOTOSHOOT · PRINT · DIGITAL · WEB
        </span>

      </div>

    </section>
  );
};

export default SService;

