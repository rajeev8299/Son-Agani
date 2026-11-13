/**
 * SON AGNI SECURITIES - Testimonial Storage Service
 * Supports:
 * 1. Supabase cloud integration if environment variables (VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY) are provided.
 * 2. High-fidelity persistent browser LocalStorage fallback for seamless development, testing, and offline client demos.
 * 
 * Strict Requirement:
 * "If there are no testimonials, display a professional message: 'Your trust inspires us. Client testimonials will appear here soon.' Do not create fake customer reviews."
 * - Default seed is empty array [] so no fake reviews exist out-of-the-box.
 */

const STORAGE_KEY = 'son_agni_testimonials_v1';

// Initial state: EMPTY by default per strict instruction "Do not create fake customer reviews"
const getLocalData = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error accessing local testimonial storage:', err);
    return [];
  }
};

const saveLocalData = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (err) {
    console.error('Failed to save to local testimonial storage:', err);
  }
};

export const testimonialService = {
  /**
   * Fetch all published testimonials for the public page, sorted by display_order ASC, testimonial_date DESC
   */
  async getPublished() {
    // Check if Supabase client is configured in runtime
    if (window._supabaseClient) {
      try {
        const { data, error } = await window._supabaseClient
          .from('testimonials')
          .select('*')
          .eq('is_published', true)
          .order('display_order', { ascending: true })
          .order('testimonial_date', { ascending: false });
        if (!error && data) return data;
      } catch (err) {
        console.warn('Supabase fetch failed, falling back to local store:', err);
      }
    }

    // Local / Browser storage fallback
    const items = getLocalData();
    return items
      .filter(item => item.is_published)
      .sort((a, b) => {
        if (a.display_order !== b.display_order) {
          return (a.display_order || 0) - (b.display_order || 0);
        }
        return new Date(b.testimonial_date || b.created_at || 0) - new Date(a.testimonial_date || a.created_at || 0);
      });
  },

  /**
   * Fetch all testimonials for admin management (both published and draft/unpublished)
   */
  async getAllForAdmin() {
    if (window._supabaseClient) {
      try {
        const { data, error } = await window._supabaseClient
          .from('testimonials')
          .select('*')
          .order('display_order', { ascending: true })
          .order('created_at', { ascending: false });
        if (!error && data) return data;
      } catch (err) {
        console.warn('Supabase admin fetch failed:', err);
      }
    }

    const items = getLocalData();
    return [...items].sort((a, b) => {
      if (a.display_order !== b.display_order) {
        return (a.display_order || 0) - (b.display_order || 0);
      }
      return new Date(b.created_at || 0) - new Date(a.created_at || 0);
    });
  },

  /**
   * Create a new testimonial
   */
  async create(data) {
    const newItem = {
      id: 'testi_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      client_name: (data.client_name || '').trim(),
      company_name: (data.company_name || '').trim(),
      designation: (data.designation || '').trim(),
      message: (data.message || '').trim(),
      rating: Number(data.rating) || 5,
      image_url: data.image_url || '',
      testimonial_date: data.testimonial_date || new Date().toISOString().split('T')[0],
      is_verified: Boolean(data.is_verified),
      is_published: data.is_published !== undefined ? Boolean(data.is_published) : true,
      display_order: Number(data.display_order) || 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    if (window._supabaseClient) {
      try {
        const { data: inserted, error } = await window._supabaseClient
          .from('testimonials')
          .insert([newItem])
          .select()
          .single();
        if (!error && inserted) return inserted;
      } catch (err) {
        console.warn('Supabase insert failed:', err);
      }
    }

    const items = getLocalData();
    items.unshift(newItem);
    saveLocalData(items);
    return newItem;
  },

  /**
   * Update an existing testimonial
   */
  async update(id, updates) {
    if (window._supabaseClient) {
      try {
        const { data, error } = await window._supabaseClient
          .from('testimonials')
          .update({ ...updates, updated_at: new Date().toISOString() })
          .eq('id', id)
          .select()
          .single();
        if (!error && data) return data;
      } catch (err) {
        console.warn('Supabase update failed:', err);
      }
    }

    const items = getLocalData();
    const index = items.findIndex(item => item.id === id);
    if (index !== -1) {
      items[index] = {
        ...items[index],
        ...updates,
        updated_at: new Date().toISOString()
      };
      saveLocalData(items);
      return items[index];
    }
    throw new Error('Testimonial not found');
  },

  /**
   * Delete a testimonial
   */
  async delete(id) {
    if (window._supabaseClient) {
      try {
        const { error } = await window._supabaseClient
          .from('testimonials')
          .delete()
          .eq('id', id);
        if (error) console.warn('Supabase delete error:', error);
      } catch (err) {
        console.warn('Supabase delete failed:', err);
      }
    }

    const items = getLocalData();
    const filtered = items.filter(item => item.id !== id);
    saveLocalData(filtered);
    return true;
  },

  /**
   * Quick toggle publish status
   */
  async togglePublish(id, currentStatus) {
    return this.update(id, { is_published: !currentStatus });
  },

  /**
   * Quick toggle verified status
   */
  async toggleVerified(id, currentStatus) {
    return this.update(id, { is_verified: !currentStatus });
  }
};

