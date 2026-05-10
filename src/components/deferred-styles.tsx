'use client';

import { useEffect } from 'react';

interface DeferredStylesProps {
  /** Path(s) to non-critical CSS files */
  hrefs: string[];
}

/**
 * Loads non-critical CSS after first paint.
 * Drop this at the bottom of your layout to defer heavy stylesheets.
 *
 * Usage:
 *   <DeferredStyles hrefs={['/styles/animations.css', '/styles/vendor.css']} />
 */
export function DeferredStyles({ hrefs }: DeferredStylesProps) {
  useEffect(() => {
    hrefs.forEach((href) => {
      const existing = document.querySelector(`link[href="${href}"]`);
      if (existing) return;

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  }, [hrefs]);

  return null;
}
