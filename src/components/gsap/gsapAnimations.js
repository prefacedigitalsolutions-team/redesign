import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


/* =====================================================
   1. HERO BANNER ANIMATION
===================================================== */

export const playHeroAnim = (refs) => {
  if (!refs) return;

  const {
    section,
    textBox,
    title,
    description,
    buttons,
    badge,
    scroll,
    socialIcons
  } = refs;

  const elements = [
    section,
    textBox,
    title,
    description,
    buttons,
    badge,
    scroll
  ];

  if (elements.some((el) => !el)) return;

  // Initial state
  gsap.set(
    [
      title,
      description,
      buttons,
      badge,
      scroll,
      ...(socialIcons || [])
    ],
    {
      opacity: 0
    }
  );

  gsap.set(title, {
    y: 70
  });

  gsap.set(description, {
    y: 35
  });

  gsap.set(buttons, {
    y: 30
  });

  gsap.set(badge, {
    scale: 0.7,
    y: 40
  });

  gsap.set(scroll, {
    y: 20
  });

  if (socialIcons?.length) {
    gsap.set(socialIcons, {
      x: 50
    });
  }


  /* =========================================
     HERO TIMELINE
  ========================================= */

  const tl = gsap.timeline({
    defaults: {
      ease: 'power3.out'
    }
  });


  // Heading
  tl.to(title, {
    opacity: 1,
    y: 0,
    duration: 1.1
  });


  // Description
  tl.to(
    description,
    {
      opacity: 1,
      y: 0,
      duration: 0.8
    },
    '-=0.65'
  );


  // Buttons
  tl.to(
    buttons,
    {
      opacity: 1,
      y: 0,
      duration: 0.8
    },
    '-=0.45'
  );


  // Badge
  tl.to(
    badge,
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1,
      ease: 'back.out(1.5)'
    },
    '-=0.6'
  );


  // Scroll indicator
  tl.to(
    scroll,
    {
      opacity: 1,
      y: 0,
      duration: 0.7
    },
    '-=0.5'
  );


  // Social icons
  if (socialIcons?.length) {
    tl.to(
      socialIcons,
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      },
      '-=0.4'
    );
  }

  return tl;
};


/* =====================================================
   2. HEADING ANIMATION
===================================================== */

export const playHeadingAnim = (el) => {
  if (!el) return;

  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};


/* =====================================================
   3. PARAGRAPH ANIMATION
===================================================== */

export const playTextAnim = (el) => {
  if (!el) return;

  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      delay: 0.2,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};


/* =====================================================
   4. IMAGE / CARD ANIMATION
===================================================== */

export const playImageAnim = (el) => {
  if (!el) return;

  gsap.fromTo(
    el,
    {
      opacity: 0,
      scale: 0.9,
      y: 40
    },
    {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 1.2,
      ease: 'power2.out',

      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};


/* =====================================================
   5. MULTIPLE CARDS STAGGER
===================================================== */

export const playCardsAnim = (elements) => {
  if (!elements || elements.length === 0) return;

  gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 60
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',

      scrollTrigger: {
        trigger: elements[0],
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    }
  );
};


/* =====================================================
   6. ABOUT BANNER ANIMATION (NEWLY ADDED)
===================================================== */

export const playAboutAnim = (refs) => {
  if (!refs) return;

  const { section, visual, content, eyebrow, title, desc, meta } = refs;
  const elements = [section, visual, content];

  if (elements.some((el) => !el)) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse'
    },
    defaults: {
      ease: 'power3.out'
    }
  });

  // Left Image Cluster Slide In
  tl.fromTo(
    visual,
    { opacity: 0, x: -40 },
    { opacity: 1, x: 0, duration: 1.1 }
  )
  // Right Content Elements Stagger
  .fromTo(
    [eyebrow, title, desc, meta],
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
    '-=0.7'
  );

  return tl;
};