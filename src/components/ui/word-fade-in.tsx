'use client';

import { Fragment } from 'react';
import { motion } from 'framer-motion';

interface WordFadeInProps {
  text: string;
  className?: string;
  delay?: number;    // seconds between each word, default 0.04
  duration?: number; // per-word animation duration, default 0.3
}

export default function WordFadeIn({
  text,
  className,
  delay = 0.04,
  duration = 0.3,
}: WordFadeInProps) {
  const words = text.split(' ');

  return (
    <motion.p className={className}>
      {words.map((word, i) => (
        <Fragment key={i}>
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * delay,
              duration,
              ease: 'easeOut',
            }}
            style={{ display: 'inline-block' }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </Fragment>
      ))}
    </motion.p>
  );
}
