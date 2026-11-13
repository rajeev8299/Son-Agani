import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useScrollReveal:
 * Automatically observes elements matching selector `.reveal-on-scroll`
 * and applies `.is-revealed` when entering the viewport.
 * Disconnects on unmount or respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    // Respect user's motion preferences
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    // Check if IntersectionObserver is supported
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve after initial reveal so we don't re-trigger unnecessarily
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.12,
      }
    );

    // Give DOM a micro-tick to render before querying targets
    const timer = setTimeout(() => {
      // Auto-tag common card, grid, and section elements if not already tagged
      const autoTargets = document.querySelectorAll(
        '.service-card, .industry-card, .guard-card, .gallery-item, .trust-card, .form-card, .faq-item, .process-card, .about-highlight-card, .feature-block, .industry-detail-card, .section-header'
      );
      autoTargets.forEach((el) => {
        if (!el.classList.contains('reveal-on-scroll') && !el.classList.contains('is-revealed')) {
          el.classList.add('reveal-on-scroll');
        }
      });

      const revealElements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      revealElements.forEach((el) => observer.observe(el));
    }, 40);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [location.pathname]);
}

