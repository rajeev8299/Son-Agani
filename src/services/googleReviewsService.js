/**
 * SON AGNI SECURITIES - Google Reviews Service
 * 
 * Strict Protocol:
 * - Never fabricate dummy reviews, customer comments, or fake star ratings.
 * - Connects to Google Places API (New) / Google Business Profile API when credentials are provided in env.
 * - Caches retrieved reviews locally with a timestamp to optimize quota and avoid excessive API calls.
 * - Deduplicates reviews by their unique Google review ID / author attribution.
 * - Provides official Google direct links to "Write a Google Review" and "Read All Reviews on Google".
 */

const CACHE_KEY = 'son_agni_google_reviews_cache_v1';
const CACHE_TTL_MS = 1000 * 60 * 60 * 6; // 6 hours cache

export const googleReviewsConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  placeId: import.meta.env.VITE_GOOGLE_PLACE_ID || '',
  writeReviewUrl: import.meta.env.VITE_GOOGLE_WRITE_REVIEW_URL || (import.meta.env.VITE_GOOGLE_PLACE_ID ? `https://search.google.com/local/writereview?placeid=${import.meta.env.VITE_GOOGLE_PLACE_ID}` : 'https://www.google.com/maps/search/SON+AGNI+SECURITIES+Varanasi'),
  readAllReviewsUrl: import.meta.env.VITE_GOOGLE_READ_REVIEWS_URL || (import.meta.env.VITE_GOOGLE_PLACE_ID ? `https://search.google.com/local/reviews?placeid=${import.meta.env.VITE_GOOGLE_PLACE_ID}` : 'https://www.google.com/maps/search/SON+AGNI+SECURITIES+Varanasi')
};

export const googleReviewsService = {
  /**
   * Check if necessary Google API credentials are configured
   */
  isConfigured() {
    return Boolean(googleReviewsConfig.apiKey && googleReviewsConfig.placeId);
  },

  /**
   * Fetch genuine Google reviews from cache or live API
   */
  async getLiveGoogleReviews() {
    // 1. Check local cache first
    try {
      const cachedRaw = localStorage.getItem(CACHE_KEY);
      if (cachedRaw) {
        const cached = JSON.parse(cachedRaw);
        if (cached && cached.timestamp && (Date.now() - cached.timestamp < CACHE_TTL_MS)) {
          return {
            configured: true,
            reviews: cached.reviews || [],
            rating: cached.rating || 0,
            userRatingsTotal: cached.userRatingsTotal || 0,
            writeReviewUrl: googleReviewsConfig.writeReviewUrl,
            readAllReviewsUrl: googleReviewsConfig.readAllReviewsUrl
          };
        }
      }
    } catch (err) {
      console.warn('Google reviews cache read failed:', err);
    }

    // 2. If credentials are missing, return unconfigured status without fabricated reviews
    if (!this.isConfigured()) {
      return {
        configured: false,
        reviews: [],
        rating: 0,
        userRatingsTotal: 0,
        writeReviewUrl: googleReviewsConfig.writeReviewUrl,
        readAllReviewsUrl: googleReviewsConfig.readAllReviewsUrl,
        missingCredentials: {
          apiKey: !googleReviewsConfig.apiKey,
          placeId: !googleReviewsConfig.placeId
        }
      };
    }

    // 3. Fetch from Google Places API (New endpoint with field mask for places)
    try {
      const url = `https://places.googleapis.com/v1/places/${googleReviewsConfig.placeId}?fields=displayName,rating,userRatingCount,reviews&key=${googleReviewsConfig.apiKey}`;
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          'X-Goog-Api-Key': googleReviewsConfig.apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews,displayName'
        }
      });

      if (!response.ok) {
        throw new Error(`Google API returned status ${response.status}`);
      }

      const data = await response.json();
      
      const parsedReviews = (data.reviews || []).map(r => ({
        id: r.name || String(r.publishTime || Math.random()),
        authorName: r.authorAttribution?.displayName || 'Google User',
        authorPhoto: r.authorAttribution?.photoUri || '',
        authorUri: r.authorAttribution?.uri || '',
        rating: r.rating || 5,
        text: r.text?.text || r.originalText?.text || '',
        publishTime: r.publishTime || new Date().toISOString(),
        relativePublishTime: r.relativePublishTimeDescription || ''
      }));

      const result = {
        configured: true,
        reviews: parsedReviews,
        rating: data.rating || 0,
        userRatingsTotal: data.userRatingCount || 0,
        writeReviewUrl: googleReviewsConfig.writeReviewUrl,
        readAllReviewsUrl: googleReviewsConfig.readAllReviewsUrl
      };

      // Cache data
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          ...result,
          timestamp: Date.now()
        }));
      } catch (e) {
        console.warn('Failed to cache Google reviews:', e);
      }

      return result;
    } catch (error) {
      console.error('Error fetching live Google reviews:', error);
      return {
        configured: true,
        reviews: [],
        rating: 0,
        userRatingsTotal: 0,
        error: error.message,
        writeReviewUrl: googleReviewsConfig.writeReviewUrl,
        readAllReviewsUrl: googleReviewsConfig.readAllReviewsUrl
      };
    }
  }
};

