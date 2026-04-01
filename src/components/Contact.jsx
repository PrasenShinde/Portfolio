import React from 'react';
import { Send, PhoneCall, Linkedin, Instagram, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.14,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

function Contact() {
  return (
    <motion.div
      className="mt-20 px-4 md:px-24 h-auto md:h-[70vh]"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h1
        className="text-[40px] md:text-[50px] font-bold text-brand-primary text-center md:text-left"
        variants={childVariants}
      >
        Get in Touch
      </motion.h1>

      <div className="mt-12 space-y-8">
        <motion.div
          className="contact flex items-center justify-center md:justify-start"
          variants={childVariants}
        >
          <Send className="mr-4 md:mr-6" />
          <span>prasenshinde8@gmail.com</span>
        </motion.div>

        <motion.div
          className="contact flex items-center justify-center md:justify-start"
          variants={childVariants}
        >
          <PhoneCall className="mr-4 md:mr-6" />
          <span>8237875696</span>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-start mt-8 space-x-8"
          variants={childVariants}
        >
          <a href="https://www.linkedin.com/in/prasen-shinde-482666320" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>
          <a href="https://www.instagram.com/prasen_10?igsh=N2tkZWVxYXU4cHl3" target="_blank" rel="noreferrer">
            <Instagram />
          </a>
          <a href="https://github.com/Prasen812/" target="_blank" rel="noreferrer">
            <Github />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Contact;
