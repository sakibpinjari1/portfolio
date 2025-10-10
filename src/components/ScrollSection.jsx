import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollSection = ({ children, id }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100vh", "0vh"]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="sticky top-0 min-h-screen flex items-center justify-center relative z-10"
      style={{ y }}
    >
      {children}
    </motion.section>
  );
};

export default ScrollSection;