/**
 * Centralized Application Route Constants
 * SON AGNI SECURITIES PRIVATE LIMITED
 */

export const ROUTES = Object.freeze({
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  SERVICE_DETAILS: '/services/:id',
  OUR_GUARDS: '/our-guards',
  CAREERS: '/careers',
  TESTIMONIALS: '/testimonials',
  CONTACT: '/contact',
  GET_QUOTE: '/get-a-quote',
  NOT_FOUND: '*'
});

/**
 * Helper to build dynamic service detail path
 * @param {string} serviceId
 * @returns {string}
 */
export const getServiceDetailRoute = (serviceId) => `/services/${encodeURIComponent(serviceId)}`;
