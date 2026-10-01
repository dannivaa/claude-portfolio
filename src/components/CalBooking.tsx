'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

const NAMESPACE = 'intro';

/**
 * Cal.com's booking calendar inline on the page, so a visitor can pick a time without
 * leaving. The embed sizes itself to its content and takes the site's navy as its brand.
 */
export function CalBooking({ calLink }: { calLink: string }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal('ui', {
        theme: 'light',
        layout: 'month_view',
        hideEventTypeDetails: true,
        cssVarsPerTheme: { light: { 'cal-brand': '#14203a' }, dark: { 'cal-brand': '#e8ebf2' } },
      });
    })();
  }, []);

  return (
    <Cal
      namespace={NAMESPACE}
      calLink={calLink}
      config={{ layout: 'month_view', theme: 'light' }}
      className="contact-cal-frame"
    />
  );
}
