-- ==============================================================================
-- SON AGNI SECURITIES - Testimonials Schema & Policies
-- Designed for Supabase / PostgreSQL
-- ==============================================================================

-- 1. Create testimonials table
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name VARCHAR(150) NOT NULL,
    company_name VARCHAR(200),
    designation VARCHAR(150),
    message TEXT NOT NULL,
    rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    image_url TEXT,
    testimonial_date DATE DEFAULT CURRENT_DATE,
    is_verified BOOLEAN DEFAULT false,
    is_published BOOLEAN DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for speedy public retrieval sorted by display_order & date
CREATE INDEX IF NOT EXISTS idx_testimonials_public 
ON public.testimonials (is_published, display_order ASC, testimonial_date DESC);

-- Trigger to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_testimonials_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_testimonials_updated_at ON public.testimonials;
CREATE TRIGGER trigger_testimonials_updated_at
BEFORE UPDATE ON public.testimonials
FOR EACH ROW
EXECUTE FUNCTION update_testimonials_updated_at();

-- 2. Row Level Security (RLS) Configuration
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Drop prior policies if recreating
DROP POLICY IF EXISTS "Public can view published testimonials only" ON public.testimonials;
DROP POLICY IF EXISTS "Authenticated admins have full access" ON public.testimonials;

-- Policy 1: Public visitors can ONLY read published testimonials
CREATE POLICY "Public can view published testimonials only"
ON public.testimonials
FOR SELECT
TO anon, authenticated
USING (is_published = true);

-- Policy 2: Admin users (authenticated with admin role/claims) can manage all testimonials
CREATE POLICY "Authenticated admins have full access"
ON public.testimonials
FOR ALL
TO authenticated
USING (
    coalesce(auth.jwt() ->> 'role', '') = 'admin' 
    OR coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
    OR (auth.jwt() ->> 'email') LIKE '%@sonagnisecurities.com'
)
WITH CHECK (
    coalesce(auth.jwt() ->> 'role', '') = 'admin' 
    OR coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
    OR (auth.jwt() ->> 'email') LIKE '%@sonagnisecurities.com'
);

-- 3. Storage bucket for client photos / corporate logos (optional setup)
-- Run in Supabase SQL editor:
-- INSERT INTO storage.buckets (id, name, public) VALUES ('testimonials', 'testimonials', true) ON CONFLICT DO NOTHING;
-- CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'testimonials');
-- CREATE POLICY "Admin Upload" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'testimonials');

