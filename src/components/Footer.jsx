import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.65, 0.05, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.65, 0.05, 0.36, 1]
    }
  },
};

function Footer() {
  const footerRef = useRef(null);
  const nameTextRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.15 });
  const currentYear = new Date().getFullYear();

  // GSAP animation for "Prasen Shinde" text - triggers when footer is 80vh from bottom
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer || !nameTextRef.current) return;

    const nameText = nameTextRef.current;
    const letters = nameText.querySelectorAll('.name-letter');

    // Set initial state - letters start from bottom
    gsap.set(letters, {
      y: 30,
      opacity: 0
    });

    // Create scroll trigger - when footer bottom is 80vh from viewport bottom
    ScrollTrigger.create({
      trigger: footer,
      start: 'top 10%',
      onEnter: () => {
        gsap.to(letters, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out'
        });
      },
      onLeaveBack: () => {
        gsap.to(letters, {
          y: 100,
          opacity: 0,
          duration: 0.4,
          stagger: 0.03,
          ease: 'power2.in'
        });
      },
      onEnterBack: () => {
        gsap.to(letters, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out'
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === footer) {
          trigger.kill();
        }
      });
    };
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Work', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' }
  ];

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:prasenshinde8@gmail.com'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prasen-shinde-482666320'
    },
    {
      name: 'Github',
      url: 'https://github.com/PrasenShinde/'
    },
    {
      name: 'X',
      url: 'https://x.com/PrasenShinde'
    },
  ];

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="site-footer relative mt-20 overflow-hidden"
    >
      {/* Footer Content */}
      <motion.div
        className="footer-content"
        variants={sectionVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="footer-container-aziz">
          {/* Left: Links & Socials */}
          <motion.div
            className="footer-left"
            variants={childVariants}
          >
            <div className="footer-columns">
              {/* LINKS Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">LINKS</h3>
                <div className="footer-column-links">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="footer-column-link"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* SOCIALS Column */}
              <div className="footer-column">
                <h3 className="footer-column-title">SOCIALS</h3>
                <div className="footer-column-links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.url.startsWith('mailto:') ? undefined : '_blank'}
                      rel={social.url.startsWith('mailto:') ? undefined : 'noreferrer'}
                      className="footer-column-link"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Empty space for PRASEN text */}
          <motion.div
            className="footer-right"
            variants={childVariants}
          >
            {/* Empty space */}
          </motion.div>
        </div>

        {/* Large PRASEN Text - Middle Bottom */}
        <div className="footer-name-text-bottom" ref={nameTextRef}>
          <span className="name-letter">P</span>
          <span className="name-letter">R</span>
          <span className="name-letter">A</span>
          <span className="name-letter">S</span>
          <span className="name-letter">E</span>
          <span className="name-letter">N</span>
        </div>

        {/* CTA Section - Top Right Corner */}
        <div className="footer-cta-top-right">
          <h2 className="footer-headline">
            Let&apos;s build something great.
          </h2>
          <div className="footer-contact-buttons">
            <a
              href="tel:+918237875696"
              className="footer-phone-button"
            >
              +91 8237875696
            </a>
            <a
              href="mailto:prasenshinde8@gmail.com"
              className="footer-email-button"
            >
              prasenshinde8@gmail.com
            </a>
          </div>
        </div>

        {/* Copyright - Bottom Right Corner (Vertical) */}
        <p className="footer-copy-vertical">
          © {currentYear} Prasen Shinde. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
