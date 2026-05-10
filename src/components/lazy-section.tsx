'use client';

import { useRef, useState, useEffect, type ReactNode } from 'react';

interface LazySectionProps {
  children: ReactNode;
  /** Pixels before the viewport to start loading (default: 200) */
  rootMargin?: string;
  /** Minimum height placeholder to prevent layout shift */
  minHeight?: string;
  /** Optional className for the wrapper div */
  className?: string;
}

/**
 * Defers rendering of children until the element is near the viewport.
 * Uses native IntersectionObserver — no external deps.
 *
 * Usage:
 *   <LazySection>
 *     <HeavyComponent />
 *   </LazySection>
 */
export function LazySection({
  children,
  rootMargin = '200px',
  minHeight = '200px',
  className,
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: visible ? undefined : minHeight }}
    >
      {visible ? children : null}
    </div>
  );
}
