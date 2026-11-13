import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  Edit3, 
  Sparkles, 
  CheckCircle2,
  MessageSquareHeart
} from 'lucide-react';
import { reviewService } from '../services/reviewService';
import WriteReviewModal from './WriteReviewModal';
import '../styles/reviews.css';

const HomeReviewsSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  
  // Touch swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const timerRef = useRef(null);

  // Responsive visible cards count calculation
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

  // Fetch approved reviews only
  const loadReviews = useCallback(async () => {
    try {
      const items = await reviewService.getApprovedReviews();
      setReviews(items);
    } catch (err) {
      console.error('Failed to load reviews:', err);
    }
  }, []);

  useEffect(() => {
    loadReviews();

    // Listen for custom event when reviews update
    const onReviewsUpdated = () => {
      loadReviews();
    };
    window.addEventListener('son_agni_reviews_updated', onReviewsUpdated);
    return () => window.removeEventListener('son_agni_reviews_updated', onReviewsUpdated);
  }, [loadReviews]);

  // Compute metrics dynamically from actual approved customer reviews
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? (reviews.reduce((sum, r) => sum + (Number(r.rating) || 5), 0) / totalReviews).toFixed(1)
    : '0';

  // Navigation handlers
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

  // Automatic slow sliding timer (4.5s)
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

  // Touch Swipe Handlers for mobile devices
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
      // Swiped Left -> Next
      onManualNext();
    } else if (diff < -45) {
      // Swiped Right -> Prev
      onManualPrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      className="home-reviews-section" 
      aria-label="Customer Reviews & Ratings"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Header & Dynamic Summary Toolbar */}
        <div className="reviews-header-wrap">
          <div className="reviews-titles">
            <span className="reviews-badge-tag">
              <Sparkles size={14} />
              <span>TESTED & TRUSTED SECURITY</span>
            </span>
            <h2 className="reviews-main-title">WHAT OUR CLIENTS SAY</h2>
            <p className="reviews-subtitle">
              Trusted by businesses. Recognized for reliable security and professional service.
            </p>
          </div>

          <div className="reviews-actions-wrap">
            {totalReviews > 0 && (
              <div className="reviews-score-pill" aria-label={`Average rating ${averageRating} out of 5 based on ${totalReviews} reviews`}>
                <div className="reviews-stars-wrap">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={17} 
                      fill={star <= Math.round(Number(averageRating)) ? '#F59E0B' : 'transparent'} 
                      color={star <= Math.round(Number(averageRating)) ? '#F59E0B' : '#D1D5DB'} 
                    />
                  ))}
                </div>
                <span className="reviews-score-num">★ {averageRating} / 5</span>
                <span className="reviews-count-text">
                  Based on {totalReviews} {totalReviews === 1 ? 'Review' : 'Reviews'}
                </span>
              </div>
            )}

            <button 
              type="button" 
              className="btn-write-review"
              onClick={() => setIsWriteModalOpen(true)}
              aria-label="Write a customer review"
            >
              <Edit3 size={15} />
              <span>WRITE A REVIEW</span>
            </button>
          </div>
        </div>

        {/* 7. COMPACT EMPTY STATE (When no approved reviews exist yet) */}
        {totalReviews === 0 ? (
          <div className="reviews-compact-empty">
            <div className="reviews-empty-text-wrap">
              <div className="reviews-empty-icon-badge">
                <MessageSquareHeart size={20} />
              </div>
              <p className="reviews-empty-short-msg">
                Be the first to share your experience with SON AGNI SECURITIES.
              </p>
            </div>
            <button 
              type="button" 
              className="btn-empty-review"
              onClick={() => setIsWriteModalOpen(true)}
            >
              <Edit3 size={14} />
              <span>SHARE YOUR FEEDBACK</span>
            </button>
          </div>
        ) : (
          /* 4. INFINITE / CONTINUOUS REVIEW SLIDER */
          <div 
            className="slider-outer-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="slider-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
                width: `${(reviews.length / visibleCount) * 100}%`
              }}
            >
              {reviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="slider-slide-item"
                  style={{ width: `${100 / reviews.length}%` }}
                >
                  <div className="home-review-card">
                    <div>
                      <div className="card-top-row">
                        <div className="review-stars" aria-label={`${rev.rating} out of 5 stars`}>
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star 
                              key={s} 
                              size={16} 
                              fill={s <= rev.rating ? '#F59E0B' : '#E5E7EB'} 
                              color={s <= rev.rating ? '#F59E0B' : '#D1D5DB'} 
                            />
                          ))}
                        </div>
                        <div className="review-quote-mark" aria-hidden="true">
                          <Quote size={22} />
                        </div>
                      </div>

                      <p className="review-message-text">
                        "{rev.review_message}"
                      </p>
                    </div>

                    <div className="card-bottom-row">
                      <div className="review-avatar-circle" aria-hidden="true">
                        {rev.customer_name ? rev.customer_name.charAt(0).toUpperCase() : 'C'}
                      </div>
                      <div className="review-client-info">
                        <div className="client-name-row">
                          <span className="client-name-text">{rev.customer_name}</span>
                          {rev.is_verified && (
                            <span className="verified-pill" title="Verified Customer">
                              <CheckCircle2 size={13} color="#10B981" />
                              <span>Verified</span>
                            </span>
                          )}
                        </div>
                        {rev.company_name && (
                          <div className="client-company-text">{rev.company_name}</div>
                        )}
                        <div className="review-date-text">
                          {new Date(rev.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Navigation Controls (Arrow Buttons & Dots) */}
            {reviews.length > visibleCount && (
              <div className="slider-controls-row">
                {/* Dots / Indicators */}
                <div className="slider-indicators">
                  {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className={`indicator-dot ${currentIndex === idx ? 'active' : ''}`}
                      onClick={() => {
                        resetTimer();
                        setCurrentIndex(idx);
                      }}
                      aria-label={`Go to review group ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Left / Right Nav Arrows */}
                <div className="slider-nav-btns">
                  <button 
                    type="button" 
                    className="slider-arrow-btn" 
                    onClick={onManualPrev}
                    aria-label="Previous Reviews"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button 
                    type="button" 
                    className="slider-arrow-btn" 
                    onClick={onManualNext}
                    aria-label="Next Reviews"
                  >
                    <ChevronRight size={22} />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Write Review Modal */}
      <WriteReviewModal 
        isOpen={isWriteModalOpen}
        onClose={() => setIsWriteModalOpen(false)}
        onReviewSubmitted={loadReviews}
      />
    </section>
  );
};

export default HomeReviewsSlider;
