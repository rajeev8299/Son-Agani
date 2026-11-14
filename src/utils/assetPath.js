/**
 * Helper to resolve static asset paths under public/
 * Prepends Vite's base URL (import.meta.env.BASE_URL) so assets load
 * correctly both locally (/) and under subpaths (/Son-Agani/ on GitHub Pages).
 */
export const assetPath = (path) => {
  if (!path) return '';
  // If already absolute URL (http, https, data:), leave untouched
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:')) {
    return path;
  }
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};
