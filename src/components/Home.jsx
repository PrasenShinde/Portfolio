import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Linkedin, Instagram, Github } from 'lucide-react';
import BlurText from '../Reactbits/BlurText';

const techChips = ['React', 'JavaScript', 'Node.js', 'Mongo', 'Framer Motion'];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.18,
    },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

function Home() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const [overlayDone, setOverlayDone] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, prefersReducedMotion ? 0 : -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, prefersReducedMotion ? 1 : 0.8]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, prefersReducedMotion ? 1 : 0.9]);
  const blobOneY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -40]);
  const blobTwoY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 40]);
  const blobThreeY = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -20]);

  // Check if overlay is done
  useEffect(() => {
    const checkOverlay = () => {
      if (document.body.classList.contains('overlay-done')) {
        setOverlayDone(true);
      }
    };
    
    // Check immediately
    checkOverlay();
    
    // Also listen for class changes
    const observer = new MutationObserver(checkOverlay);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      className="relative hero-bg min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-12 py-16"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={() => setIsHoveringHero(false)}
    >
    <div className="pointer-events-none hidden md:flex flex-col items-center absolute left-8 lg:left-8 top-1/2 -translate-y-1/2 z-10">
      <div className="w-1.5 h-1.5 rounded-full border border-brand-primary bg-brand-primary" />
      <div className="w-px h-80 bg-brand-primary" />
      <div className="w-1.5 h-1.5 rounded-full border border-brand-primary bg-brand-primary" />
    </div>


      {/* Background blobs & overlay with subtle parallax */}
      <motion.div className="hero-blob hero-blob--one" style={{ y: blobOneY }} />
      <motion.div className="hero-blob hero-blob--two" style={{ y: blobTwoY }} />
      <motion.div className="hero-blob hero-blob--three" style={{ y: blobThreeY }} />
      <div className="hero-overlay-grid" />

      {/* Cursor glow (non-invasive) */}
      {isHoveringHero && (
        <div
          className="hero-cursor-glow"
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        />
      )}

      <motion.div
        className="relative max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 md:gap-14 lg:gap-20 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: 2.5, // ← Start hero animation slightly before overlay ends
        }}
        style={{ y: heroY, opacity: heroOpacity }}
      >

        {/* Left: Content panel - slides from left */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 0.6, ease: [0.65, 0.05, 0.36, 1] }}
>

          <div className="relative rounded-3xl border border-brand-borderSoft bg-brand-cardBg/80 backdrop-blur-xl px-6 py-7 md:px-8 md:py-9 shadow-brand-soft">

            <div className="space-y-2 mb-4">
              <BlurText
                text="I'm Prasen"
                delay={160}
                animateBy="words"
                direction="top"
                className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-primary"
              />
              <BlurText
                text="Shinde"
                delay={220}
                animateBy="words"
                direction="top"
                className="block text-3xl md:text-4xl lg:text-5xl font-semibold text-brand-primary"
              />
            </div>

            <motion.p
              className="text-base md:text-lg text-brand-textMuted mb-4 md:mb-5 max-w-xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
            >
              A full-stack developer who loves learning, building, and improving. I focus on clean code, thoughtful design, and making experiences that genuinely feel good for people.
            </motion.p>

            <div className="flex flex-col gap-4 md:gap-5">
              {/* Primary CTA: Download resume (direct download) */}
              <motion.div
                className="flex flex-wrap items-center gap-3 md:gap-4"
                variants={buttonVariants}
              >
                <motion.a
                  href="/Prasen_Shinde_Resume.pdf"
                  download="Prasen_Shinde_Resume.pdf"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 md:px-7 md:py-3 text-sm md:text-base font-semibold bg-brand-primarySoft text-brand-primary border border-brand-borderSoft hover:bg-brand-bgMain hover:text-brand-primary transition-all duration-200"
                  whileHover={{ scale: 1.04, y: -1 }}
                  whileTap={{ scale: 0.97, y: 1 }}
                >
                  Download Resume
                </motion.a>
              </motion.div>

              {/* Social icons row (replacing the View Projects button visually) */}
              <motion.div
                className="flex items-center gap-4 md:gap-5 pt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
              >
                {[
                  {
                    icon: Linkedin,
                    href: 'https://www.linkedin.com/in/prasen-shinde-482666320',
                    label: 'LinkedIn',
                  },
                  {
                    icon: Instagram,
                    href: 'https://www.instagram.com/prasen_10?igsh=N2tkZWVxYXU4cHl3',
                    label: 'Instagram',
                  },
                  {
                    icon: Github,
                    href: 'https://github.com/PrasenShinde/',
                    label: 'GitHub',
                  },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/60 bg-brand-bgMain/90 text-brand-textMuted shadow-sm hover:bg-brand-primarySoft hover:text-brand-primary transition-all duration-200"
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96, y: 1 }}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Right: Image + tech chips - slides from right */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, delay: 0.65, ease: [0.65, 0.05, 0.36, 1] }}
        >

          <motion.div
            className="relative"
            whileHover={{
              rotateX: -4,
              rotateY: 4,
              y: -4,
            }}
            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-brand-primary via-brand-primarySoft to-brand-bgMain opacity-80 blur-sm" />
            <motion.div
              className="relative rounded-full bg-brand-bgMain/95 border-2 border-brand-primary shadow-brand-soft overflow-hidden w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[320px] lg:h-[320px] flex items-center justify-center"
              style={{ scale: imageScale }}
            >
              <img
                src="./Images/home_photo.png"
                alt="Profile"
                className="w-full h-full object-cover"
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  objectPosition: '25% center',
                }}
              />
            </motion.div>

            {/* Floating tech chips */}
            <div className="absolute inset-0 pointer-events-none">
              {techChips.map((chip, index) => {
                const positions = [
                  'top-4 -left-2',
                  'top-10 -right-6',
                  'bottom-10 -left-4',
                  'bottom-4 right-2',
                  'top-1/2 -right-8',
                ];

                return (
                  <motion.div
                    key={chip}
                    className={`pointer-events-auto absolute ${positions[index]} px-3 py-1.5 rounded-full bg-brand-cardBg text-[11px] font-medium text-brand-textMuted border border-brand-borderSoft shadow-sm`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.12, ease: 'easeOut' }}
                    whileHover={{
                      scale: 1.06,
                      y: -2,
                      backgroundColor: 'rgba(87, 89, 91, 0.95)',
                      color: '#F3E8DF',
                    }}
                    style={{
                      animation: `floatChip${index % 2 === 0 ? 'A' : 'B'} 6s ease-in-out infinite`,
                    }}
                  >
                    {chip}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;