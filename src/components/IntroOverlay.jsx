
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function IntroOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [showText, setShowText] = useState(true);
  const [startReveal, setStartReveal] = useState(false);

  // 1.2s text + 0.3s delay + 1.4s reveal
  const overlayDuration = 1200 + 300 + 1400;

  const endOverlay = () => {
    if (!showOverlay) return;
    setShowOverlay(false);
    document.body.classList.remove("overlay-active");
    document.body.classList.add("overlay-done");
  };

  useEffect(() => {
    document.body.classList.add("overlay-active");

    const textTimer = setTimeout(() => {
      setShowText(false);
      setTimeout(() => setStartReveal(true), 300);
    }, 1200);

    const overlayTimer = setTimeout(() => {
      endOverlay();
    }, overlayDuration);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(overlayTimer);
      document.body.classList.remove("overlay-active");
    };
  }, []);

  if (!showOverlay) return null;

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* SVG curved curtain */}
          <motion.svg
            className="intro-curtain-svg"
            viewBox="0 0 100 120"
            preserveAspectRatio="none"
            initial={{ y: "0%" }}
            animate={startReveal ? { y: "-110%" } : { y: "0%" }}
            transition={{
              duration: 0.9,
              ease: [0.65, 0.05, 0.36, 1],
            }}
          >
            <defs>
              <linearGradient
                id="curtainGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#8D493A" />
                <stop offset="100%" stopColor="#6F3A2F" />
              </linearGradient>
            </defs>

            {/* Desktop curve (deep U) */}
            <path
              className="curtain-path curtain-desktop"
              d="
                M0 0
                H100
                V100
                C 75 120, 25 120, 0 100
                Z
              "
              fill="url(#curtainGradient)"
            />

            {/* Mobile curve (subtle, shallow U) */}
            <path
              className="curtain-path curtain-mobile"
              d="
                M0 0
                H100
                V100
                C 75 104, 25 104, 0 100
                Z
              "
              fill="url(#curtainGradient)"
            />
          </motion.svg>


          {/* Centered Text */}
          <AnimatePresence>
            {showText && (
              <motion.div
                className="intro-text-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.97 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <motion.h1
                  className="intro-hello"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                    ease: "easeOut",
                  }}
                >
                  Hello World!!
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroOverlay;
