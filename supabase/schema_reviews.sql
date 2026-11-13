-- ==============================================================================
-- SON AGNI SECURITIES - Reviews Table Schema & Policies
-- Designed for PostgreSQL / Supabase
-- ==============================================================================

-- 1. Create reviews table
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name VARCHAR(150) NOT NULL,
    company_name VARCHAR(200),
    rating SMALLINT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    review_message TEXT NOT NULL,
    is_approved BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast public retrieval sorted by rating/date
CREATE INDEX IF NOT EXISTS idx_reviews_approved 
ON public.reviews (is_approved, created_at DESC);

-- Trigger to auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_reviews_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trigger_reviews_updated_at ON public.reviews;
CREATE TRIGGER trigger_reviews_updated_at
BEFORE UPDATE ON public.reviews
FOR EACH ROW
EXECUTE FUNCTION update_reviews_updated_at();

-- 2. Row Level Security (RLS) Configuration
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can view approved reviews only" ON public.reviews;
DROP POLICY IF EXISTS "Public visitors can submit reviews" ON public.reviews;
DROP POLICY IF EXISTS "Authenticated admins can manage all reviews" ON public.reviews;

-- Policy 1: Public visitors can ONLY read approved reviews
CREATE POLICY "Public can view approved reviews only"
ON public.reviews
FOR SELECT
TO anon, authenticated
USING (is_approved = true);

-- Policy 2: Public visitors can submit reviews (stored as is_approved = false)
CREATE POLICY "Public visitors can submit reviews"
ON public.reviews
FOR INSERT
TO anon, authenticated
WITH CHECK (
    is_approved = false 
    AND length(trim(customer_name)) > 1 
    AND length(trim(review_message)) > 4
    AND rating >= 1 AND rating <= 5
);

-- Policy 3: Authenticated admins can view, approve, reject, or delete all reviews
CREATE POLICY "Authenticated admins can manage all reviews"
ON public.reviews
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

