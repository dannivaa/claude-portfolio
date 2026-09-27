'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ReactLenis, useLenis } from 'lenis/react';

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    // Arriving from another page via /#section → land on that section instead of the top
    const hash = window.location.hash;
    const target = hash ? document.getElementById(hash.slice(1)) : null;
    lenis?.scrollTo(target ?? 0, { immediate: true });
  }, [pathname]);

  return null;
}

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
