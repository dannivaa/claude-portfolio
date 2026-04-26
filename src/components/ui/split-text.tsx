'use client';

import { motion } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  const words = text.split(' ');
  let charIndex = 0;

  return (
    <span className={className} aria-label={text} style={{ display: 'inline' }}>
      {words.map((word, wi) => {
        const chars = word.split('');
        const wordStart = charIndex;
        charIndex += chars.length + 1; // +1 for the space

        return (
          <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {chars.map((char, ci) => (
              <motion.span
                key={ci}
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0, filter: 'blur(8px)', y: 8 }}
                animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: 'easeOut',
                  delay: delay + (wordStart + ci) * 0.02,
                }}
              >
                {char}
              </motion.span>
            ))}
            {wi < words.length - 1 && (
              <motion.span
                style={{ display: 'inline-block', whiteSpace: 'pre' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: delay + (wordStart + chars.length) * 0.02 }}
              >
                {' '}
              </motion.span>
            )}
          </span>
        );
      })}
    </span>
  );
}
