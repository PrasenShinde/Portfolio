import React from 'react';
import { motion } from 'framer-motion';
import InfiniteTechRows from './InfiniteTechRows';

function TechnicalStack() {
  return (
    <section className="mt-20 w-full">
      <motion.h1
        className="text-[40px] md:text-[50px] font-bold text-brand-primary text-center m-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      >
        Technical Stack
      </motion.h1>

      <InfiniteTechRows />
    </section>
  );
}

export default TechnicalStack;