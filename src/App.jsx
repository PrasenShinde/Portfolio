import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Default from './components/Default';
import { motion, useReducedMotion } from 'framer-motion';
import WaveBackground from './components/WaveBackground';
import { useScrollProgress } from './hooks/useScrollProgress';
import IntroOverlay from './components/IntroOverlay';

function App() {
  const progress = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();

  const barScaleX = prefersReducedMotion ? 0 : progress;

  return (
    <>
      {/* Intro Overlay */}
      <IntroOverlay />

      {/* Scroll progress bar */}
      <div className="fixed left-0 top-0 z-[60] w-full h-1 bg-transparent pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primarySoft origin-left"
          style={{ scaleX: barScaleX }}
          transition={{ type: 'tween', duration: 0.15, ease: 'easeOut' }}
        />
      </div>

      <div className="app-content">
      <Navbar />
        <WaveBackground />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0, ease: 'easeOut' }}
      >
      <Default />
    </motion.div>
      </div>
    </>
  );
}

export default App;
