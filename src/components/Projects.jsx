import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../utils/cn';

const projects = [
  {
    id: 'sahay',
    title: 'Sahay',
    tagline: 'Digital mental health & psychological support system.',
    href: 'https://sahaynew.netlify.app/',
    image: '/Images/Sahay.png',
  },
  {
    id: 'routecraft',
    title: 'RouteCraft',
    tagline: 'Intelligent route optimization for smoother travel and logistics.',
    href: 'https://routecraft10.netlify.app/',
    image: '/Images/RouteCraft.png',
  },
  {
    id: 'eduquest',
    title: 'EduQuest',
    tagline: 'Gamified learning journeys for students with progress tracking.',
    href: 'https://eduquestnew.netlify.app/',
    image: '/Images/Eduquest.png',
  },
  {
    id: 'nurturenest',
    title: 'NurtureNest',
    tagline: 'A companion platform helping for metarnal health care',
    href: 'https://nuturenest.netlify.app/',
    image: '/Images/NurtureNest.png',
  },
  {
    id: 'zero-hunger',
    title: 'Zero Hunger',
    tagline: 'Identifies nearby food banks, community kitchens, and donation centers.',
    href: null,
    image: '/Images/ZeroHunger.png',
  },
];

const gridContainer = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const gridCard = {
  hidden: { opacity: 0, y: 26, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.19, 1, 0.22, 1],
    },
  },
  exit: { opacity: 0, y: 16, scale: 0.96, transition: { duration: 0.25 } },
};

const listContainer = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, delayChildren: 0.04 },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.19, 1, 0.22, 1] },
  },
  exit: { opacity: 0, y: 10, transition: { duration: 0.2 } },
};

const iconGrid = (active) => (
  <span className="grid grid-cols-2 grid-rows-2 gap-0.5 h-4 w-4">
    <span className={cn('rounded-[2px]', active ? 'bg-brand-primary' : 'bg-brand-borderSoft')} />
    <span className={cn('rounded-[2px]', active ? 'bg-brand-primary/80' : 'bg-brand-borderSoft/80')} />
    <span className={cn('rounded-[2px]', active ? 'bg-brand-primary/70' : 'bg-brand-borderSoft/70')} />
    <span className={cn('rounded-[2px]', active ? 'bg-brand-primary/60' : 'bg-brand-borderSoft/60')} />
  </span>
);

const iconLines = (active) => (
  <span className="flex flex-col gap-[3px] h-4 w-4">
    <span
      className={cn(
        'h-[2px] rounded-full',
        active ? 'bg-brand-primary' : 'bg-brand-borderSoft'
      )}
    />
    <span
      className={cn(
        'h-[2px] rounded-full',
        active ? 'bg-brand-primary/80' : 'bg-brand-borderSoft/80'
      )}
    />
    <span
      className={cn(
        'h-[2px] rounded-full',
        active ? 'bg-brand-primary/70' : 'bg-brand-borderSoft/70'
      )}
    />
  </span>
);

function Projects() {
  const [viewMode, setViewMode] = useState('list'); // default to lines

  // GRID CARD – no space between box & img, no padding, no shadow
  const renderImageCard = (project) => {
    const Wrapper = project.href ? 'a' : 'div';

    return (
      <motion.div
        key={project.id}
        layout
        variants={gridCard}
        whileHover={{ y: -4, scale: 1.005 }}
        transition={{ type: 'spring', stiffness: 250, damping: 22 }}
        className="relative group overflow-hidden" // no shadow, no radius, no padding
      >
        <Wrapper
          href={project.href || undefined}
          target={project.href ? '_blank' : undefined}
          rel="noreferrer"
          className="block overflow-hidden"
        >
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="
              w-full
              h-[420px]
              sm:h-[480px]
              lg:h-[520px]
              object-cover
            "
            initial={{ scale: 1.01 }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.85, ease: [0.19, 1, 0.22, 1] }}
          />

          {/* Center overlay with title + tagline */}
          <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center px-6 text-center">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-sm">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
                {project.tagline}
              </p>
            </div>
          </div>
        </Wrapper>
      </motion.div>
    );
  };

  return (
    <section
      id="projects"
      className="relative px-4 md:px-10 lg:px-20 py-20 bg-brand-bgMain overflow-hidden"
    >
      {/* background ambience */}


      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* heading + toggles */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-semibold text-brand-primary tracking-tight text-left md:text-left">
                Projects
              </h2>
            </div>

            {/* toggle with sliding pill */}
            <div className="relative inline-flex w-full max-w-xs md:max-w-none md:w-auto items-center rounded-full border border-transparent md:border-brand-borderSoft/80 bg-brand-cardBg/80 px-1 py-1 backdrop-blur">
              <motion.div
                layout
                className={cn(
                  // full height of pill; width = 50%
                  'absolute top-1 bottom-1 w-1/2 rounded-full bg-brand-bgMain shadow-[0_0_0_1px_rgba(0,0,0,0.04)]',
                  viewMode === 'grid' ? 'left-1' : 'left-1/2'
                )}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              />

              {[
                { id: 'list', label: 'Lines', icon: iconLines },
                { id: 'grid', label: 'Grid', icon: iconGrid },
              ].map((btn) => {
                const active = viewMode === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => setViewMode(btn.id)}
                    className={cn(
                      // flex-1 → each button takes half width on mobile
                      'relative z-10 flex-1 flex items-center justify-center gap-2 px-3 py-1.5 text-xs md:text-sm font-medium transition-colors',
                      active
                        ? 'text-brand-primary'
                        : 'text-brand-textMuted hover:text-brand-textMain'
                    )}
                  >
                    {btn.icon(active)}
                    <span>{btn.label}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* content */}
          <div className="relative min-h-[340px] md:min-h-[380px] mt-3">
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div
                  key="grid"
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-4" // tighter gaps
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={gridContainer}
                >
                  {projects.map((project, idx) => renderImageCard(project, idx))}
                </motion.div>
              ) : (
                <motion.div
                  key="list"
                  layout
                  className="grid grid-cols-1 gap-0" // rows touch, only lines separate
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={listContainer}
                >
                  {/* LINES view: just 2 parallel lines + centered text */}
                  <div className="flex flex-col">
                    {projects.map((project) => {
                      const Wrapper = project.href ? 'a' : 'div';
                      return (
                        <motion.div
                          key={project.id}
                          layout
                          variants={listItem}
                          className="relative group border-t border-b border-brand-borderSoft/80"
                        >
                          <Wrapper
                            href={project.href || undefined}
                            target={project.href ? '_blank' : undefined}
                            rel="noreferrer"
                            className="block"
                          >
                            <div className="flex flex-col items-center justify-center px-4 md:px-6 py-5 md:py-6 text-center">
                              {/* title centered */}
                              <h4 className="text-lg md:text-xl font-semibold text-brand-primary">
                                {project.title}
                              </h4>
                              {/* tagline below, also centered */}
                              <p className="mt-1.5 text-sm text-brand-textMuted max-w-2xl">
                                {project.tagline}
                              </p>
                            </div>

                            {/* full-screen overlay image on hover (like your old design) */}
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300"
                            >
                              <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-black/55 flex items-center justify-center text-center">
                                <div className="space-y-2 px-4">
                                  <h4 className="text-2xl md:text-3xl font-semibold text-white drop-shadow-sm">
                                    {project.title}
                                  </h4>
                                  <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
                                    {project.tagline}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </Wrapper>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
