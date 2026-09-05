
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./S-Banner.css";

const slides = [
  {
    id: "01",
    category: "Photography",
    title: "Visual",
    title2: "Excellence",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "02",
    category: "Brand Identity",
    title: "Print &",
    title2: "Branding",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "03",
    category: "Digital",
    title: "Digital",
    title2: "Ecosystems",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "04",
    category: "Creative Direction",
    title: "Creative",
    title2: "Direction",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1800&auto=format&fit=crop",
  },
  {
    id: "05",
    category: "Experience",
    title: "Modern",
    title2: "Experience",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1800&auto=format&fit=crop",
  },
];

const SBanner = () => {
  const [active, setActive] = useState(0);

  const rootRef = useRef(null);
  const imageRefs = useRef([]);
  const contentRefs = useRef([]);
  const progressRef = useRef(null);
  const intervalRef = useRef(null);

  /* ---------------------------------------
     SLIDE ANIMATION
  --------------------------------------- */

  const animateSlide = (nextIndex) => {
    if (nextIndex === active) return;

    const currentImage = imageRefs.current[active];
    const nextImage = imageRefs.current[nextIndex];

    const currentContent = contentRefs.current[active];
    const nextContent = contentRefs.current[nextIndex];

    const direction = nextIndex > active ? 1 : -1;

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.inOut",
      },
    });

    /* Current image exits */
    tl.to(
      currentImage,
      {
        xPercent: -18 * direction,
        scale: 0.94,
        opacity: 0.35,
        duration: 0.8,
      },
      0
    );

    /* Current text */
    tl.to(
      currentContent,
      {
        y: -30,
        opacity: 0,
        duration: 0.45,
      },
      0
    );

    /* New image */
    tl.fromTo(
      nextImage,
      {
        xPercent: 18 * direction,
        scale: 1.08,
        opacity: 0.4,
      },
      {
        xPercent: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
      },
      0.05
    );

    /* New text */
    tl.fromTo(
      nextContent,
      {
        y: 35,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
      },
      0.4
    );

    setActive(nextIndex);
  };

  /* ---------------------------------------
     AUTO PLAY
  --------------------------------------- */

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((current) => {
        const next = (current + 1) % slides.length;

        const currentImage = imageRefs.current[current];
        const nextImage = imageRefs.current[next];

        const currentContent = contentRefs.current[current];
        const nextContent = contentRefs.current[next];

        const tl = gsap.timeline();

        tl.to(
          currentImage,
          {
            xPercent: -12,
            scale: 0.95,
            opacity: 0.3,
            duration: 0.8,
            ease: "power4.inOut",
          },
          0
        )
          .to(
            currentContent,
            {
              y: -25,
              opacity: 0,
              duration: 0.4,
            },
            0
          )
          .fromTo(
            nextImage,
            {
              xPercent: 12,
              scale: 1.08,
              opacity: 0.3,
            },
            {
              xPercent: 0,
              scale: 1,
              opacity: 1,
              duration: 1,
              ease: "power4.inOut",
            },
            0
          )
          .fromTo(
            nextContent,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
            },
            0.35
          );

        return next;
      });
    }, 4500);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  /* ---------------------------------------
     INITIAL ANIMATION
  --------------------------------------- */

  useEffect(() => {
    gsap.fromTo(
      rootRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      ".sb-top-label",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 0.2,
      }
    );

    gsap.fromTo(
      ".sb-main-heading",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.35,
        ease: "power4.out",
      }
    );
  }, []);

  /* ---------------------------------------
     PROGRESS
  --------------------------------------- */

  useEffect(() => {
    if (!progressRef.current) return;

    gsap.fromTo(
      progressRef.current,
      {
        width: "0%",
      },
      {
        width: "100%",
        duration: 4.5,
        ease: "none",
      }
    );
  }, [active]);

  return (
    <section ref={rootRef} className="sb-section">

      {/* --------------------------------
          TOP
      -------------------------------- */}

      <div className="sb-top">

        <div className="sb-top-label">
          <span className="sb-dot" />
          SELECTED WORK
        </div>

        <div className="sb-top-right">
          <span>CREATIVE STUDIO</span>
          <span className="sb-slash">/</span>
          <span>2026</span>
        </div>

      </div>


      {/* --------------------------------
          HEADING
      -------------------------------- */}

      <div className="sb-heading-wrap">

        <h1 className="sb-main-heading">
          Crafted for
          <span> attention.</span>
        </h1>

        <p className="sb-intro">
          We create visual experiences that connect
          brands with people through design,
          technology and creative direction.
        </p>

      </div>


      {/* --------------------------------
          SLIDER
      -------------------------------- */}

      <div className="sb-slider">

        {slides.map((slide, index) => (

          <div
            key={slide.id}
            className={`sb-slide ${
              index === active ? "is-active" : ""
            }`}
          >

            {/* IMAGE */}

            <div className="sb-image-container">

              <img
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                src={slide.image}
                alt={slide.title}
                className="sb-image"
              />

              <div className="sb-image-overlay" />

            </div>


            {/* IMAGE NUMBER */}

            <div className="sb-slide-number">
              {slide.id}
            </div>


            {/* CONTENT */}

            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              className="sb-slide-content"
            >

              <div className="sb-category">
                {slide.category}
              </div>

              <h2>
                {slide.title}
                <br />
                <span>{slide.title2}</span>
              </h2>

              <div className="sb-view">
                <span>VIEW PROJECT</span>
                <span className="sb-view-arrow">↗</span>
              </div>

            </div>

          </div>

        ))}

      </div>


      {/* --------------------------------
          BOTTOM CONTROLS
      -------------------------------- */}

      <div className="sb-controls">

        <div className="sb-progress">
          <div
            ref={progressRef}
            className="sb-progress-active"
          />
        </div>


        <div className="sb-counter">
          <span>
            {String(active + 1).padStart(2, "0")}
          </span>

          <span className="sb-counter-line">
            /
          </span>

          <span>
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>


        <div className="sb-navigation">

          <button
            type="button"
            onClick={() => {
              clearInterval(intervalRef.current);

              const previous =
                active === 0
                  ? slides.length - 1
                  : active - 1;

              animateSlide(previous);
            }}
            aria-label="Previous slide"
          >
            ←
          </button>

          <button
            type="button"
            onClick={() => {
              clearInterval(intervalRef.current);

              const next =
                (active + 1) % slides.length;

              animateSlide(next);
            }}
            aria-label="Next slide"
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
};

export default SBanner;

