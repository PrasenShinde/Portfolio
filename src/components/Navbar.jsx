import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [showNav, setShowNav] = useState(false);  // NEW

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' }
  ];

  // 👇 Show navbar after overlay (2.5s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNav(true);
    }, 2000); // 2.5s delay

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLink = ({ name, to, className = '' }) => (
    <Link 
      to={to} 
      smooth={true} 
      duration={500} 
      offset={-70} 
      onClick={() => {
        setActiveLink(to);
        setIsMenuOpen(false);
      }}
      onMouseEnter={() => setActiveLink(to)}
      onMouseLeave={() => {
        if (activeLink !== to) setActiveLink(null);
      }}
      className={`
        relative block text-brand-textMuted text-lg font-medium 
        hover:text-brand-primary
        transition-all duration-300 
        md:py-0 py-3 
        ${className}
      `}
    >
      <span 
        className={`
          absolute inset-0 
          opacity-0 
          ${activeLink === to ? 'opacity-20' : 'group-hover:opacity-20'}
          transition-opacity 
          duration-300 
          -z-10 
          rounded-lg
        `}
      />
      <span className="relative p-4">{name}</span>
    </Link>
  );

  return (
    <motion.nav
      className="fixed top-[20px] w-full z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={showNav ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.65, 0.05, 0.36, 1] }}
    >
      <div className="max-w-6xl mx-auto sm:px-4 lg:px-6">
        <div className="flex items-center justify-between py-3">

          {/* Logo Section */}
          <div className="flex items-center">
            <ChevronLeft className="text-brand-primary" />
            <span className="font-bold text-2xl text-brand-textMain">{'PrasenShinde/'}</span>
            <ChevronRight className="text-brand-primary" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 py-2 rounded-full border border-brand-borderSoft bg-brand-cardBg/80 backdrop-blur">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                name={link.name} 
                to={link.to} 
              />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-brand-textMain focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-4">
          <div className="rounded-xl border border-brand-borderSoft bg-brand-cardBg backdrop-blur px-4 py-4 space-y-3 shadow-brand-soft">
            {navLinks.map((link) => (
              <div key={link.to} className="text-center">
                <NavLink 
                  name={link.name} 
                  to={link.to} 
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
