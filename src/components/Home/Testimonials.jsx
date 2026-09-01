import React, { memo, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Testimonials.css';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS_DATA = [
  { 
    id: '00', 
    quote: "It's a very good experience while dealing with Preface communications for our company's catalog, price list and photo shoot for our company products. Mr. Lakhwinder Arora is highly experienced person with a good cooperative team .Team of preface communications delivered us what they promised while taking orders. I personally highly recommend Preface communications for such jobs", 
    name: '- Sk dua' 
  },


  { 
    id: '01', 
    quote: "This is our eighth catalogue Preface has just created for us and their passion and consistency for quality is the same as it was for our first catalogue ten years ago..it's awesome.", 
    name: '- Jaspreet' 
  },


  { id: '02', quote: ' We are getting our catalogues and other stuff for exhibition from Preface communications for a long time and we are highly satisfied. We just got our website also made from them and they delivered it exceptionally well',
     name: '- Chetan Bhaumik' },

   
  { id: '03', quote: 'Unlike other designers i have come across Preface dives deep into the details to understand the project.It is actually praiseworthy', 
    name: '- Rajan Singh' },


  { id: '04', quote: 'Their experience and professional approach clearly reflect in their work. Highly recommended for catalogue designing ',
     name: '- Kumar Avinash' },


{ 
    id: '05', 
    quote: "Our relationship with Preface communications has been for the last many years and they have never failed us delivering the right product even in tight deadlines.<br>Keep doing the best work Preface", 
    name: '- Manpreet Kaur' 
  },


  { id: '06', quote: 'They did our product shoot , designed and printed  our catalogue in just 10 days and it came out very nice',
     name: '- Alok Kumar Chaubay' },


{ 
    id: '07', 
    quote: "Preface team is honest, dedicated, and guided us throughout our first catalogue. Dealing with them brings complete peace of mind.<br><br>Lakhvinder is passionate and understands requirements perfectly. They are simply the best catalogue designers in Delhi NCR with excellent print quality.", 
    name: 'RITU' 
  },


  { id: '08', quote: ' We manufacture industrial products for various applications and need catalogues very often. Preface team understands the technical briefing with so much ease , it saves our time and energy.',
     name: '- Prateek Kapoor' },



 { 
    id: '09', 
    quote: "I know Lakhvinder and Preface communications for the last 18 years. They're the best one stop solution agency providing photoshoot, catalogue designing and printing services, and website designing and promotion.", 
    name: '-Ajay Wadhawan' 
  },

 //done

 { 
  id: '10', 
  quote: "Working with Preface Communications since 2009 has been flawless. They deliver outstanding quality at an acceptable price and maintain a wonderful family-like relationship.", 
  name: '-Priyanka' 
},

];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const totalSlides = TESTIMONIALS_DATA.length;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      
      gsap.to(trackRef.current, {
        xPercent: -100 * nextIndex,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => {
          isAnimatingRef.current = false;
          if (nextIndex >= totalSlides) {
            gsap.set(trackRef.current, { xPercent: 0 });
            setCurrentIndex(0);
          }
        }
      });

      return nextIndex;
    });
  };

  const handlePrev = () => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    setCurrentIndex((prev) => {
      let nextIndex = prev - 1;
      let targetXPercent = -100 * nextIndex;

      if (nextIndex < 0) {
        gsap.set(trackRef.current, { xPercent: -100 * totalSlides });
        nextIndex = totalSlides - 1;
        targetXPercent = -100 * nextIndex;
      }

      gsap.to(trackRef.current, {
        xPercent: targetXPercent,
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => {
          isAnimatingRef.current = false;
        }
      });

      return nextIndex;
    });
  };

  const handleDotClick = (index) => {
    if (isAnimatingRef.current || currentIndex === index) return;
    isAnimatingRef.current = true;

    setCurrentIndex(index);
    gsap.to(trackRef.current, {
      xPercent: -100 * index,
      duration: 1.2,
      ease: 'power2.inOut',
      onComplete: () => {
        isAnimatingRef.current = false;
      }
    });
  };

  return (
    <section className="testimonials-section" ref={sectionRef} aria-labelledby="testimonials-heading">
      <div className="testimonials-container">
        
        <div className="testimonials-left">
          <span className="testimonials-tag">TESTIMONIALS</span>
          <h2 id="testimonials-heading">WHAT OUR<br />CLIENTS SAY</h2>
          <p className="testimonials-subtitle">Hear what our valued partners and industry leaders have to say about working with us on their digital journeys.</p>
        </div>

        <div className="testimonials-right-wrapper">
          
          <div className="testimonials-viewport">
            <div className="testimonials-track" ref={trackRef}>
              {[...TESTIMONIALS_DATA, TESTIMONIALS_DATA[0]].map((item, index) => (
                <div className="testimonials-card" key={`${item.id}-${index}`}>
                  <div className="testimonials-body">
                    <span className="quote-icon" aria-hidden="true">““</span>
                    {/* dangerouslySetInnerHTML use kiya hai taaki <br> tag properly render ho */}
                    <p 
                      className="testimonial-quote" 
                      dangerouslySetInnerHTML={{ __html: item.quote }} 
                    />
                    <div className="client-info">
                      <h4>{item.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-controls">
            <div className="dots-container">
              {TESTIMONIALS_DATA.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`dot-indicator ${(currentIndex % totalSlides) === index ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="arrow-controls">
              <button 
                type="button" 
                className="control-arrow-btn" 
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <FiChevronLeft />
              </button>
              <span className="control-divider">|</span>
              <button 
                type="button" 
                className="control-arrow-btn" 
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default memo(Testimonials);