import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Animate children one after another
      },
    },
    exit: {
      y: '-100vh', // Slide up on exit
      transition: { ease: 'easeInOut', duration: 0.8 },
    },
  };

  // Animation variants for the letters
  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950"
    >
      <motion.h1
        className="font-mono text-6xl font-bold text-white"
        aria-label="Aditi Joshi"
      >
        <motion.span variants={letterVariants} className="inline-block">A</motion.span>
        <motion.span variants={letterVariants} className="inline-block text-green-400">J</motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default Preloader;