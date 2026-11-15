/**
 * Centralized Input Validation & Sanitization Helpers
 * SON AGNI SECURITIES PRIVATE LIMITED
 */

/**
 * Validates Indian 10-digit mobile number with optional +91 or 0 prefix
 * @param {string} phone
 * @returns {boolean}
 */
export const isValidIndianPhone = (phone) => {
  if (!phone || typeof phone !== 'string') return false;
  const cleaned = phone.replace(/[\s\-()]/g, '');
  return /^(?:\+91|0)?[6-9]\d{9}$/.test(cleaned);
};

/**
 * Standard email format validator
 * @param {string} email
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
};

/**
 * Validates non-empty string with min length
 * @param {string} val
 * @param {number} minLen
 * @returns {boolean}
 */
export const isValidText = (val, minLen = 2) => {
  if (!val || typeof val !== 'string') return false;
  return val.trim().length >= minLen;
};

/**
 * Sanitizes input string by trimming and capping max length
 * @param {string} val
 * @param {number} maxLength
 * @returns {string}
 */
export const sanitizeString = (val, maxLength = 500) => {
  if (!val) return '';
  return String(val).trim().slice(0, maxLength);
};
