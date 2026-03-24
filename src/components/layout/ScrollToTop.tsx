import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

export function ScrollToTop() {
  const pathname  = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}