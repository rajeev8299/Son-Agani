import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Quote,
  ShieldCheck
} from 'lucide-react';
import { demoReviews } from '../data/demoReviews';
import { googleReviewsService } from '../services/googleReviewsService';
import '../styles/customerReviewsSlider.css';

const CustomerReviewsSlider = () => {
  const [reviews, setReviews] = useState(demoReviews);
  const [isLiveGoogle, setIsLiveGoogle] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const timerRef = useRef(null);

  // Responsive slide card count
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

  // Try checking for genuine Google reviews; fallback to isolated demo reviews
  useEffect(() => {
    let isMounted = true;
    const loadReviews = async () => {
      try {
        const liveData = await googleReviewsService.getLiveGoogleReviews();
        if (isMounted && liveData && liveData.reviews && liveData.reviews.length > 0) {
          // Normalize live reviews
          const formatted = liveData.reviews.map((r) => ({
            id: r.id,
            name: r.authorName,
            rating: r.rating || 5,
            comment: r.text,
            company: r.relativePublishTime || 'Google Verified Client',
            isDemo: false
          }));
          setReviews(formatted);
          setIsLiveGoogle(true);
        } else if (isMounted) {
          setReviews(demoReviews);
          setIsLiveGoogle(false);
        }
      } catch {
        if (isMounted) {
          setReviews(demoReviews);
          setIsLiveGoogle(false);
        }
      }
    };

    loadReviews();
    return () => { isMounted = false; };
  }, []);

  const totalReviews = reviews.length;
  const maxIndex = Math.max(0, totalReviews - visibleCount);

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

  // 4.5s Continuous Auto-Rotation with pause on hover
  useEffect(() => {
    if (isPaused || totalReviews <= visibleCount) {
      resetTimer();
      return;
    }

    const handleVisibility = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    timerRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      resetTimer();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isPaused, totalReviews, visibleCount, handleNext, resetTimer]);

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
      className="customer-reviews-section" 
      aria-label="Client Reviews and Ratings"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Section Header */}
        <div className="reviews-slider-header">
          <div className="badge-tag">
            <ShieldCheck size={15} /> CLIENT TESTIMONIALS
          </div>
          <h2 className="reviews-slider-title">
            WHAT OUR CLIENTS SAY
          </h2>
          <p className="reviews-slider-subtitle">
            Trusted by businesses. Recognized for reliable security and professional service.
          </p>
        </div>

        {/* Continuous Slider Viewport */}
        <div 
          className="reviews-slider-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="reviews-slider-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              width: `${(totalReviews / visibleCount) * 100}%`
            }}
          >
            {reviews.map((rev) => (
              <div 
                key={rev.id} 
                className="reviews-slider-slide"
                style={{ width: `${100 / totalReviews}%` }}
              >
                <div className="review-panel-card">
                  {/* Top: Star Rating & Elegant Quotation Icon */}
                  <div>
                    <div className="review-panel-top">
                      <div className="review-panel-stars" aria-label={`${rev.rating} out of 5 stars`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={18} 
                            className={star <= rev.rating ? 'review-star-icon' : 'review-star-empty'}
                          />
                        ))}
                      </div>
                      <div className="review-panel-quote-icon" aria-hidden="true">
                        <Quote size={18} />
                      </div>
                    </div>

                    {/* Customer Review Comment (Italic Typography) */}
                    <p className="review-panel-comment">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Thin Divider & Author Details */}
                  <div>
                    <div className="review-panel-divider" aria-hidden="true" />
                    <div className="review-panel-bottom">
                      <div>
                        <h4 className="review-author-name">{rev.name}</h4>
                        {rev.company && (
                          <p className="review-author-company">{rev.company}</p>
                        )}
                      </div>
                      {rev.isDemo && (
                        <span className="review-demo-tag" title="Representative Demo Review">
                          Preview
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="reviews-slider-footer-bar">
          <div className="reviews-slider-arrows">
            <button
              type="button"
              className="reviews-arrow-btn"
              onClick={onManualPrev}
              aria-label="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="reviews-arrow-btn"
              onClick={onManualNext}
              aria-label="Next Review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewsSlider;

