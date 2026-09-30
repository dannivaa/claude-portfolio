'use client';

import { useSyncExternalStore } from 'react';

let formatter: Intl.DateTimeFormat | null | undefined;

// Browsers on older ICU data only know the legacy "Europe/Kiev" id.
function getFormatter() {
  if (formatter !== undefined) return formatter;
  formatter = null;
  for (const timeZone of ['Europe/Kyiv', 'Europe/Kiev']) {
    for (const timeZoneName of ['shortOffset', undefined] as const) {
      try {
        formatter = new Intl.DateTimeFormat('en-GB', { timeZone, hour: '2-digit', minute: '2-digit', timeZoneName });
        return formatter;
      } catch {
        // Unknown zone id or unsupported timeZoneName; try the next combination
      }
    }
  }
  return formatter;
}

function getSnapshot() {
  const format = getFormatter();
  if (!format) return null;
  const parts = format.formatToParts(new Date());
  const get = (type: Intl.DateTimeFormatPartTypes) => parts.find((p) => p.type === type)?.value;
  const offset = get('timeZoneName');
  return `${get('hour')}:${get('minute')}${offset ? ` ${offset}` : ''}`;
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 10_000);
  return () => window.clearInterval(id);
}

/** Current time in Kyiv, e.g. "14:32 GMT+3". Renders nothing on the server. */
export function KyivTime({ className, suffix }: { className?: string; suffix?: string }) {
  const time = useSyncExternalStore(subscribe, getSnapshot, () => null);
  if (!time) return null;
  return (
    <span className={className}>
      {time}
      {suffix}
    </span>
  );
}
