import React, { useState, useEffect, useRef } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);
  const [manualOffset, setManualOffset] = useState(0);

  const touchStartX = useRef(0);
  const touchCurrentX = useRef(0);
  const isDragging = useRef(false);
  const groupRef = useRef(null);

  // Fetch live reviews from Google API or fallback to isolated demo reviews
  useEffect(() => {
    let isMounted = true;
    const loadReviews = async () => {
      try {
        const liveData = await googleReviewsService.getLiveGoogleReviews();
        if (isMounted && liveData && liveData.reviews && liveData.reviews.length > 0) {
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

  // Calculate card step distance (card width + gap) for manual arrow navigation
  const getStepDistance = () => {
    if (window.innerWidth < 640) return 319; // 295px + 24px gap
    if (window.innerWidth < 1024) return 364; // 340px + 24px gap
    return 404; // 380px + 24px gap
  };

  const handleManualPrev = () => {
    const step = getStepDistance();
    setManualOffset(prev => prev + step);
  };

  const handleManualNext = () => {
    const step = getStepDistance();
    setManualOffset(prev => prev - step);
  };

  // Desktop pointer hover: pause only when cursor is inside the complete outer review section
  const handlePointerEnter = (e) => {
    // Only pause on actual mouse/pointer cursors, avoid synthetic touch tap events
    if (e.pointerType === 'mouse' || e.pointerType === 'pen' || !e.pointerType) {
      setIsPaused(true);
    }
  };

  const handlePointerLeave = (e) => {
    if (e.pointerType === 'mouse' || e.pointerType === 'pen' || !e.pointerType) {
      setIsPaused(false);
    }
  };

  // Mobile Touch Gestures
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchCurrentX.current = e.targetTouches[0].clientX;
    isDragging.current = true;
    setIsPaused(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchCurrentX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    const diff = touchStartX.current - touchCurrentX.current;
    if (diff > 45) {
      handleManualNext();
    } else if (diff < -45) {
      handleManualPrev();
    }
    isDragging.current = false;
    setIsPaused(false);
  };

  const renderCard = (rev, keyPrefix = '') => (
    <div key={`${keyPrefix}-${rev.id}`} className="review-panel-card">
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
  );

  return (
    <section 
      className={`customer-reviews-section ${isPaused ? 'is-paused' : ''}`}
      aria-label="Client Reviews and Ratings"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
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

        {/* Continuous Seamless Auto-Rotating Marquee Viewport */}
        <div 
          className="reviews-slider-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={handleTouchEnd}
          title="Reviews slide continuously. Hover or touch to pause."
        >
          <div 
            className="reviews-marquee-wrapper"
            style={{
              transform: `translateX(${manualOffset}px)`,
              transition: isDragging.current ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          >
            <div className={`reviews-marquee-track ${isPaused ? 'is-paused' : ''}`}>
              {/* Primary Sequence */}
              <div className="reviews-marquee-group" ref={groupRef}>
                {reviews.map((rev) => renderCard(rev, 'p1'))}
              </div>

              {/* Seamless Duplicate Sequence 1 */}
              <div className="reviews-marquee-group" aria-hidden="true">
                {reviews.map((rev) => renderCard(rev, 'd1'))}
              </div>

              {/* Seamless Duplicate Sequence 2 (Guarantees infinite continuity on ultra-wide screens) */}
              <div className="reviews-marquee-group" aria-hidden="true">
                {reviews.map((rev) => renderCard(rev, 'd2'))}
              </div>

              {/* Seamless Duplicate Sequence 3 */}
              <div className="reviews-marquee-group" aria-hidden="true">
                {reviews.map((rev) => renderCard(rev, 'd3'))}
              </div>
            </div>
          </div>
        </div>

        {/* Controls & Navigation Row */}
        <div className="reviews-slider-footer-bar">
          <div className="reviews-marquee-hint">
            <span className="marquee-pulse-dot" />
            <span>Continuous live client feedback &bull; Hover to pause</span>
          </div>

          <div className="reviews-slider-arrows">
            <button
              type="button"
              className="reviews-arrow-btn"
              onClick={handleManualPrev}
              aria-label="Previous Review"
              title="Previous Review"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="reviews-arrow-btn"
              onClick={handleManualNext}
              aria-label="Next Review"
              title="Next Review"
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
