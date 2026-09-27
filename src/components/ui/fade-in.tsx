'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  /** Blur-in is a per-frame repaint of the whole subtree; turn it off for image-heavy blocks. */
  blur?: boolean;
}

export function FadeIn({ children, className, style, delay = 0, blur = true }: FadeInProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={blur ? { opacity: 0, filter: 'blur(8px)', y: 8 } : { opacity: 0, y: 8 }}
      whileInView={blur ? { opacity: 1, filter: 'blur(0px)', y: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
