// Standardized Premium Motion System
// Inspired by Apple, Stripe, and Linear animations.

// -----------------------------------------------------------------------------
// EASINGS
// -----------------------------------------------------------------------------
// This is the core spring-like easing curve used globally for almost everything.
export const premiumSpring = [0.16, 1, 0.3, 1] as const;

// A softer ease out for simple opacity fades
export const softEaseOut = [0.25, 0.1, 0.25, 1] as const;

// -----------------------------------------------------------------------------
// DURATIONS
// -----------------------------------------------------------------------------
export const duration = {
  fast: 0.15,
  normal: 0.3,
  medium: 0.6,
  slow: 1.0,
  epic: 1.4, // Hero entrances
};

// -----------------------------------------------------------------------------
// VARIANTS
// -----------------------------------------------------------------------------

// Staggered Container for sections
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Default Fade Up for text blocks and standard cards
export const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.medium, ease: premiumSpring },
  },
};

// Larger vertical entrance for Hero components
export const heroFadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: duration.slow, ease: premiumSpring },
  },
};

// Scale Up for images and focus elements
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: duration.epic, ease: premiumSpring },
  },
};
