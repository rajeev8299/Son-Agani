/**
 * Smart Scroll-to-Top Utility
 * Respects user's reduced-motion preferences.
 */
export const scrollToTop = (behavior = 'smooth') => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finalBehavior = prefersReducedMotion ? 'auto' : behavior;

  // Primary window scroll
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: finalBehavior,
  });

  // Fallback for documentElement / body in certain viewport engines
  if (finalBehavior === 'instant' || finalBehavior === 'auto') {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
};

/**
 * Handle navigation link clicks.
 * If clicking a link pointing to the same page, smoothly scroll to top immediately.
 */
export const handleNavLinkClick = (targetPath, currentPathname, onNavigate) => {
  // Normalize paths (strip trailing slashes except for root '/')
  const normalize = (p) => (p && p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p);
  const target = normalize(targetPath);
  const current = normalize(currentPathname);

  if (target === current) {
    scrollToTop('smooth');
  }

  if (onNavigate) {
    onNavigate();
  }
};

