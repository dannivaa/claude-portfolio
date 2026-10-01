'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { getCalApi } from '@calcom/embed-react';

const NAMESPACE = 'intro';

/**
 * A link that opens Cal.com's booking popup over the page. Until the embed has loaded (or if
 * it never does) it is a plain link to the Cal.com page, so booking always works.
 */
export function CalBookingLink({
  calLink,
  href,
  className,
  children,
}: {
  calLink: string;
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const ready = useRef(false);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal('ui', {
        theme: 'light',
        layout: 'month_view',
        cssVarsPerTheme: { light: { 'cal-brand': '#14203a' }, dark: { 'cal-brand': '#e8ebf2' } },
      });
      ready.current = true;
    })();
  }, []);

  return (
    <a
      href={href}
      className={className}
      data-cal-namespace={NAMESPACE}
      data-cal-link={calLink}
      data-cal-config='{"layout":"month_view","theme":"light"}'
      target="_blank"
      rel="noreferrer noopener"
      onClick={(e) => {
        // The embed opens its popup from the same click; only then stay on the page
        if (ready.current) e.preventDefault();
      }}
    >
      {children}
    </a>
  );
}
