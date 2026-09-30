'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { EMAIL } from '@/lib/site';

function copyWithTextarea(text: string) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand('copy');
  textarea.remove();
  return ok;
}

/** Copies the email address. `compact` shows "Copy" instead of the address itself. */
export function CopyEmail({
  className = 'btn btn-ghost btn-copy',
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Clipboard API unavailable (permissions, older browsers): legacy copy, then mail app
      if (!copyWithTextarea(EMAIL)) {
        window.location.href = `mailto:${EMAIL}`;
        return;
      }
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      className={className}
      onClick={copy}
      data-copied={copied ? '' : undefined}
      aria-label={`Copy email address ${EMAIL}`}
    >
      {copied ? <Check size={15} strokeWidth={2} aria-hidden /> : <Copy size={15} strokeWidth={2} aria-hidden />}
      {/* Both labels share one grid cell so the button keeps its width when the text swaps */}
      <span className="copy-label" aria-hidden>
        <span data-hidden={copied ? '' : undefined}>{compact ? 'Copy' : EMAIL}</span>
        <span data-hidden={copied ? undefined : ''}>Copied</span>
      </span>
      <span className="visually-hidden" aria-live="polite">
        {copied ? 'Email address copied' : ''}
      </span>
    </button>
  );
}
