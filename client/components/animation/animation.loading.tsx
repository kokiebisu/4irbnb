import { motion } from 'framer-motion';
import React from 'react';
import { LoadingAnimationProps } from './props';

export const LoadingAnimation: React.FC<LoadingAnimationProps> = () => {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial='start'
      animate='end'>
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

const loadingContainer = {
  width: '2rem',
  height: '2rem',
  display: 'flex',
  justifyContent: 'space-around',
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircle = {
  display: 'block',
  width: '0.5rem',
  height: '0.5rem',
  backgroundColor: 'white',
  borderRadius: '0.25rem',
};

const loadingCircleVariants = {
  start: {
    y: '50%',
  },
  end: {
    y: '150%',
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: 'easeInOut',
};
