import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { googleReviewsService, googleReviewsConfig } from '../services/googleReviewsService';
import '../styles/googleReviews.css';

// Official SVG Multi-Color Google "G" Logo
const GoogleLogo = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const HomeGoogleReviews = () => {
  const [reviewsData, setReviewsData] = useState({
    configured: false,
    reviews: [],
    rating: 0,
    userRatingsTotal: 0,
    writeReviewUrl: googleReviewsConfig.writeReviewUrl,
    readAllReviewsUrl: googleReviewsConfig.readAllReviewsUrl
  });
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const timerRef = useRef(null);

  // Responsive visible count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch live reviews from Google API
  useEffect(() => {
    let isMounted = true;
    const fetchReviews = async () => {
      try {
        setLoading(true);
        const data = await googleReviewsService.getLiveGoogleReviews();
        if (isMounted) {
          setReviewsData(data);
        }
      } catch (err) {
        console.error('Failed to load Google reviews:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchReviews();
    return () => { isMounted = false; };
  }, []);

  const reviews = reviewsData.reviews || [];
  const maxIndex = Math.max(0, reviews.length - visibleCount);

  const resetTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const onManualNext = () => {
    resetTimer();
    handleNext();
  };

  const onManualPrev = () => {
    resetTimer();
    handlePrev();
  };

  // Automatic slow continuous rotation
  useEffect(() => {
    if (isPaused || reviews.length <= visibleCount) {
      resetTimer();
      return;
    }

    const handleVisibility = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        setIsPaused(false);
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    timerRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      resetTimer();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isPaused, reviews.length, visibleCount, handleNext, resetTimer]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      onManualNext();
    } else if (diff < -45) {
      onManualPrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      className="google-reviews-section" 
      aria-label="Live Google Reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Header with Google Logo & Direct Action Buttons */}
        <div className="google-reviews-header">
          <div>
            <div className="google-brand-badge">
              <GoogleLogo size={16} />
              <span>OFFICIAL GOOGLE BUSINESS PROFILE</span>
            </div>
            <h2 className="google-section-title">
              WHAT OUR CLIENTS SAY
            </h2>
            <p className="google-section-subtitle">
              Trusted by businesses. Recognized for reliable security and professional service on Google.
            </p>
          </div>

          <div className="google-header-actions">
            {/* Dynamic Google Rating Pill (Calculated from real API data when available) */}
            {reviewsData.rating > 0 && (
              <div className="google-rating-score-pill">
                <GoogleLogo size={18} />
                <span className="google-score-number">{reviewsData.rating.toFixed(1)}</span>
                <div className="google-stars-row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={15} 
                      fill={star <= Math.round(reviewsData.rating) ? '#FBBC04' : 'transparent'} 
                      color={star <= Math.round(reviewsData.rating) ? '#FBBC04' : '#D1D5DB'} 
                    />
                  ))}
                </div>
                <span className="google-total-count">
                  {reviewsData.userRatingsTotal} Google Review{reviewsData.userRatingsTotal === 1 ? '' : 's'}
                </span>
              </div>
            )}

            {/* Write a Google Review Button (Directly opens Google Business Review Dialog) */}
            <a 
              href={reviewsData.writeReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-write-google-review"
              title="Write an official review directly on Google"
            >
              <GoogleLogo size={16} />
              <span>WRITE A GOOGLE REVIEW</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Reviews Presentation or Elegant Credential Notice */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: '#666' }}>
            <div style={{ display: 'inline-block', animation: 'spin 1.5s linear infinite' }}>
              <GoogleLogo size={28} />
            </div>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem' }}>Synchronizing with Google Business Profile...</p>
          </div>
        ) : reviews.length > 0 ? (
          /* Live Google Reviews Open-Layout Slider */
          <div 
            className="google-slider-wrapper"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="google-slider-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                width: `${(reviews.length / visibleCount) * 100}%`
              }}
            >
              {reviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="google-slider-slide"
                  style={{ width: `${100 / reviews.length}%` }}
                >
                  <div className="google-open-review-block">
                    <div>
                      <div className="google-review-top">
                        <div className="google-review-stars">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star 
                              key={s} 
                              size={15} 
                              fill={s <= rev.rating ? '#FBBC04' : '#E5E7EB'} 
                              color={s <= rev.rating ? '#FBBC04' : '#D1D5DB'} 
                            />
                          ))}
                        </div>
                        <div className="google-mini-logo-icon">
                          <GoogleLogo size={18} />
                        </div>
                      </div>

                      <p className="google-review-comment">
                        "{rev.text}"
                      </p>
                    </div>

                    <div className="google-review-user-row">
                      {rev.authorPhoto ? (
                        <img 
                          src={rev.authorPhoto} 
                          alt={rev.authorName} 
                          className="google-user-avatar"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div 
                        className="google-user-avatar-initial"
                        style={{ display: rev.authorPhoto ? 'none' : 'flex' }}
                      >
                        {rev.authorName.charAt(0)}
                      </div>

                      <div>
                        <div className="google-user-name">
                          <span>{rev.authorName}</span>
                          <CheckCircle2 size={13} color="#1A73E8" title="Verified Google Reviewer" />
                        </div>
                        <div className="google-review-date">
                          {rev.relativePublishTime || new Date(rev.publishTime).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls Row: Read all on Google & Left/Right Arrows */}
            <div className="google-slider-controls">
              <a 
                href={reviewsData.readAllReviewsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="google-read-all-link"
              >
                <span>Read All Reviews on Google Business</span>
                <ExternalLink size={14} />
              </a>

              {reviews.length > visibleCount && (
                <div className="google-slider-nav-btns">
                  <button 
                    type="button" 
                    className="google-arrow-btn" 
                    onClick={onManualPrev}
                    aria-label="Previous Google Reviews"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    type="button" 
                    className="google-arrow-btn" 
                    onClick={onManualNext}
                    aria-label="Next Google Reviews"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Card-Free Elegant Integration Notice (Strict Spec: Never show dummy or fabricated reviews) */
          <div className="google-credentials-notice">
            <div className="google-notice-content">
              <div className="google-notice-icon-box">
                <GoogleLogo size={26} />
              </div>
              <div>
                <h3 className="google-notice-heading">Official Google Business Profile Reviews</h3>
                <p className="google-notice-desc">
                  Live reviews will synchronize here automatically once the Google Business Profile API keys (<code>VITE_GOOGLE_MAPS_API_KEY</code> & <code>VITE_GOOGLE_PLACE_ID</code>) are configured in your environment. Customers can post verified reviews directly on Google.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a 
                href={reviewsData.readAllReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-empty-review"
                style={{ background: '#EAE7DC', color: '#171717', borderColor: '#D1D5DB' }}
              >
                <span>View Google Profile</span>
                <ExternalLink size={14} />
              </a>
              <a 
                href={reviewsData.writeReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-write-google-review"
              >
                <GoogleLogo size={14} />
                <span>WRITE A GOOGLE REVIEW</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeGoogleReviews;

