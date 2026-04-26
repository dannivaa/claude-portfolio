'use client';

import { motion } from 'framer-motion';
import { ReactNode, CSSProperties } from 'react';

interface FadeInMountProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export function FadeInMount({ children, delay = 0, className, style }: FadeInMountProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
      animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
