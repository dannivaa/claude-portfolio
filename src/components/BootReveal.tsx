'use client';

import { useEffect } from 'react';

/**
 * The first page load plays the same settle-in as a page change. The server marks
 * <html data-boot>; CSS animates the page while it's there, and this clears it once
 * the entrance has played so later navigations are left to the view transition.
 */
export function BootReveal() {
  useEffect(() => {
    const t = window.setTimeout(() => document.documentElement.removeAttribute('data-boot'), 900);
    return () => window.clearTimeout(t);
  }, []);
  return null;
}
