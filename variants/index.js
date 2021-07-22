export const pageVariants = {
  before: { opacity: 0 },
  after: {
    opacity: 1,
    transition: { duration: 1, delay: 1.3, delayChildren: 1 },
  },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export const loadingVariants = {
  before: { translateX: '-100%' },
  after: {
    translateX: ['-100%', '0%', '100%'],
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.3,
      ease: [0.18, 1, 0.24, 1],
      duration: 4,
      delay: 0.5,
    },
  },
};
