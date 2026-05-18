import React from 'react';
import { motion } from 'framer-motion';

const directionMap = {
  up:    { hidden: { opacity: 0, y: 36 },      visible: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -28 },     visible: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: 36 },      visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -36 },     visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  none:  { hidden: { opacity: 0 },             visible: { opacity: 1 } },
};

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.65,
}) => {
  const { hidden, visible } = directionMap[direction] ?? directionMap.up;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden,
        visible: {
          ...visible,
          transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
