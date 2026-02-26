'use client';

import * as React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export interface MagicTextProps {
  text: string;
  className?: string;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block', marginRight: '0.28em' }}>
      <span style={{ position: 'absolute', opacity: 0.2 }}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({ text, className }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  // Split into paragraphs on \n\n, then collect all words with their paragraph index
  const paragraphs = text.split('\n\n');
  const allWords = paragraphs.flatMap((p, pi) =>
    p.split(' ').map((word) => ({ word, pi }))
  );
  const total = allWords.length;

  return (
    <div ref={container} className={className} style={{ position: 'relative' }}>
      {paragraphs.map((para, pi) => {
        const paraWords = para.split(' ');
        // global offset of the first word of this paragraph
        const offset = allWords.findIndex((w) => w.pi === pi);

        return (
          <p key={pi} style={{ display: 'flex', flexWrap: 'wrap', margin: 0 }}>
            {paraWords.map((word, wi) => {
              const globalIndex = offset + wi;
              const start = globalIndex / total;
              const end = start + 1 / total;

              return (
                <Word key={wi} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        );
      })}
    </div>
  );
};
