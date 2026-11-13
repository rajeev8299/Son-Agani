/**
 * SON AGNI SECURITIES - Review Service
 * Handles:
 * 1. Public approved reviews fetching (realtime / polling / storage)
 * 2. Visitor review submissions (saved as pending approval `is_approved: false`)
 * 3. Spam protection & client-side rate limiting
 * 4. Admin moderation (approve, reject, delete)
 * 5. Supabase connection if available, with robust persistent LocalStorage fallback
 * 
 * Strict Requirement:
 * "Do not generate fake reviews or artificial customer ratings."
 * - Default seed is empty array [] so no fake reviews appear.
 */

const STORAGE_KEY = 'son_agni_client_reviews_v1';
const RATE_LIMIT_KEY = 'son_agni_review_last_submission';

const getLocalReviews = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading local reviews:', err);
    return [];
  }
};

const saveLocalReviews = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    // Dispatch custom event for real-time reactivity across same-window components
    window.dispatchEvent(new CustomEvent('son_agni_reviews_updated'));
  } catch (err) {
    console.error('Error saving local reviews:', err);
  }
};

export const reviewService = {
  /**
   * Fetch approved reviews for public homepage display
   */
  async getApprovedReviews() {
    if (window._supabaseClient) {
      try {
        const { data, error } = await window._supabaseClient
          .from('reviews')
          .select('*')
          .eq('is_approved', true)
          .order('created_at', { ascending: false });
        if (!error && data) return data;
      } catch (err) {
        console.warn('Supabase reviews fetch failed, using local store:', err);
      }
    }

    const items = getLocalReviews();
    return items
      .filter(item => item.is_approved)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },

  /**
   * Fetch all reviews for admin moderation
   */
  async getAllReviewsForAdmin() {
    if (window._supabaseClient) {
      try {
        const { data, error } = await window._supabaseClient
          .from('reviews')
          .select('*')
          .order('created_at', { ascending: false });
        if (!error && data) return data;
      } catch (err) {
        console.warn('Supabase admin reviews fetch failed:', err);
      }
    }

    const items = getLocalReviews();
    return [...items].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },

  /**
   * Submit a new customer review (rate limited & pending approval)
   */
  async submitReview({ customer_name, company_name, rating, review_message }) {
    // 1. Client-side rate-limiting / spam check
    const lastSub = localStorage.getItem(RATE_LIMIT_KEY);
    const now = Date.now();
    if (lastSub && now - Number(lastSub) < 30000) { // 30 seconds cooldown
      throw new Error('Please wait 30 seconds before submitting another review.');
    }

    // 2. Data validation & sanitization
    const cleanName = (customer_name || '').trim().slice(0, 150);
    const cleanCompany = (company_name || '').trim().slice(0, 200);
    const cleanMessage = (review_message || '').trim().slice(0, 1000);
    const numRating = Math.max(1, Math.min(5, Math.round(Number(rating) || 5)));

    if (!cleanName || cleanName.length < 2) {
      throw new Error('Please enter a valid full name.');
    }
    if (!cleanMessage || cleanMessage.length < 5) {
      throw new Error('Please enter a review message of at least 5 characters.');
    }

    const newReview = {
      id: 'rev_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      customer_name: cleanName,
      company_name: cleanCompany,
      rating: numRating,
      review_message: cleanMessage,
      is_approved: false, // Strict: Pending admin approval
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    if (window._supabaseClient) {
      try {
        const { data, error } = await window._supabaseClient
          .from('reviews')
          .insert([newReview])
          .select()
          .single();
        if (!error && data) {
          localStorage.setItem(RATE_LIMIT_KEY, String(now));
          return data;
        }
      } catch (err) {
        console.warn('Supabase insert review failed, falling back to local store:', err);
      }
    }

    const items = getLocalReviews();
    items.unshift(newReview);
    saveLocalReviews(items);
    localStorage.setItem(RATE_LIMIT_KEY, String(now));
    return newReview;
  },

  /**
   * Admin approve review
   */
  async approveReview(id) {
    if (window._supabaseClient) {
      try {
        await window._supabaseClient
          .from('reviews')
          .update({ is_approved: true, updated_at: new Date().toISOString() })
          .eq('id', id);
      } catch (err) {
        console.warn('Supabase approve error:', err);
      }
    }

    const items = getLocalReviews();
    const idx = items.findIndex(r => r.id === id);
    if (idx !== -1) {
      items[idx].is_approved = true;
      items[idx].updated_at = new Date().toISOString();
      saveLocalReviews(items);
      return items[idx];
    }
    throw new Error('Review not found');
  },

  /**
   * Admin reject (unapprove) review
   */
  async rejectReview(id) {
    if (window._supabaseClient) {
      try {
        await window._supabaseClient
          .from('reviews')
          .update({ is_approved: false, updated_at: new Date().toISOString() })
          .eq('id', id);
      } catch (err) {
        console.warn('Supabase reject error:', err);
      }
    }

    const items = getLocalReviews();
    const idx = items.findIndex(r => r.id === id);
    if (idx !== -1) {
      items[idx].is_approved = false;
      items[idx].updated_at = new Date().toISOString();
      saveLocalReviews(items);
      return items[idx];
    }
    throw new Error('Review not found');
  },

  /**
   * Admin delete review
   */
  async deleteReview(id) {
    if (window._supabaseClient) {
      try {
        await window._supabaseClient
          .from('reviews')
          .delete()
          .eq('id', id);
      } catch (err) {
        console.warn('Supabase delete error:', err);
      }
    }

    const items = getLocalReviews();
    const filtered = items.filter(r => r.id !== id);
    saveLocalReviews(filtered);
    return true;
  }
};

