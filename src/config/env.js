/**
 * Centralized, validated environment configuration
 * SON AGNI SECURITIES PRIVATE LIMITED
 */

const getEnvVar = (key, fallback = '') => {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[key] !== undefined) {
    return import.meta.env[key];
  }
  return fallback;
};

export const envConfig = Object.freeze({
  /** Base URL for client routing and asset resolution */
  BASE_URL: getEnvVar('BASE_URL', '/'),
  /** Node environment: development | production | test */
  MODE: getEnvVar('MODE', 'development'),
  /** True when running in production mode */
  IS_PROD: getEnvVar('PROD', false),
  /** True when running in local development mode */
  IS_DEV: getEnvVar('DEV', true),

  /** Google Places API Key */
  GOOGLE_MAPS_API_KEY: getEnvVar('VITE_GOOGLE_MAPS_API_KEY', ''),
  /** Official Google Place ID for SON AGNI SECURITIES */
  GOOGLE_PLACE_ID: getEnvVar('VITE_GOOGLE_PLACE_ID', ''),
  /** Direct URL to prompt customer for Google Review */
  GOOGLE_WRITE_REVIEW_URL: getEnvVar('VITE_GOOGLE_WRITE_REVIEW_URL', ''),
  /** Direct URL to browse all verified Google Reviews */
  GOOGLE_READ_REVIEWS_URL: getEnvVar('VITE_GOOGLE_READ_REVIEWS_URL', ''),

  /** Supabase Project URL if configured */
  SUPABASE_URL: getEnvVar('VITE_SUPABASE_URL', ''),
  /** Supabase Anon Key if configured */
  SUPABASE_ANON_KEY: getEnvVar('VITE_SUPABASE_ANON_KEY', '')
});

export default envConfig;
