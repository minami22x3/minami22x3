export const pageVariants = {
  before: { opacity: 0 },
  after: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      delayChildren: 0.25,
      staggerChildren: 0.15,
      duration: 1,
      delay: 0.75,
    },
  },
  exit: { opacity: 0, transition: { duration: 1, delay: 0.25 } },
};

export const loadingVariants = {
  before: { opacity: 0 },
  after: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 1.5,
      delay: 0.5,
    },
  },
};

export const rubberTextVariants = {
  after: {
    transition: { staggerChildren: 0.15, delayChildren: 0.75 },
  },
};

export const fadeInUpVariants = {
  before: { opacity: 0, y: 50 },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      easings: 'easeInOut',
    },
  },
};
