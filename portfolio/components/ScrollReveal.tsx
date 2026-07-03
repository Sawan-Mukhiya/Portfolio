'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to let the new page DOM settle after navigation
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -20px 0px' }
      );

      elements.forEach((el) => {
        // If already in viewport on page load, reveal immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('in-view');
        } else {
          observer.observe(el);
        }
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]); // re-run on every route change

  return null;
}
