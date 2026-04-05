// animations/experienceAnimations.js

// Timeline date animation variants
export const timelineDateVariants = {
  left: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
};

// Experience card content animation
export const experienceCardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

// Experience points animation
export const experiencePointVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0 },
};

// Technology tags animation
export const technologyTagsVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0 },
};

// Timeline container animation
export const timelineContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Bottom CTA animation
export const bottomCtaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Animation transition functions
export const getDateTransition = (index) => ({
  duration: 0.5,
  delay: index * 0.1,
});

export const getCardTransition = (index) => ({
  duration: 0.5,
  delay: index * 0.1,
});

export const getPointTransition = (index, pointIndex) => ({
  duration: 0.4,
  delay: index * 0.1 + pointIndex * 0.05,
});

export const getTagsTransition = (index) => ({
  duration: 0.4,
  delay: index * 0.1 + 0.2,
});

export const getTimelineTransition = () => ({
  duration: 0.6,
});

export const getCtaTransition = () => ({
  duration: 0.5,
  delay: 0.3,
});

// education animations -----------------------------------------

export const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};
