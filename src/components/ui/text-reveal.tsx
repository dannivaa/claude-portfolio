"use client";
import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({ text, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[500vh]", className)}>
      <div
        className="sticky top-0 mx-auto flex max-w-4xl bg-transparent"
        style={{ padding: '4rem 2rem' }}
      >
        <p
          className="flex flex-wrap font-normal text-black/20"
          style={{ gap: '0.35rem', fontSize: '20px', lineHeight: '1.6', letterSpacing: '-0.5px' }}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative" style={{ display: 'inline-block' }}>
      <span style={{ opacity: 0.3 }}>{children}</span>
      <motion.span
        style={{ opacity, position: 'absolute', left: 0, top: 0 }}
        className="text-black"
      >
        {children}
      </motion.span>
    </span>
  );
};

export { TextRevealByWord };
