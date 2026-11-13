import React, { useState } from 'react';
import { X, Star, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { reviewService } from '../services/reviewService';

const WriteReviewModal = ({ isOpen, onClose, onReviewSubmitted }) => {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewMessage, setReviewMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: '' }

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!fullName.trim()) {
      setStatusMessage({ type: 'error', text: 'Please enter your Full Name.' });
      return;
    }
    if (!reviewMessage.trim() || reviewMessage.trim().length < 5) {
      setStatusMessage({ type: 'error', text: 'Please write a review message of at least 5 characters.' });
      return;
    }

    try {
      setIsSubmitting(true);
      await reviewService.submitReview({
        customer_name: fullName,
        company_name: companyName,
        rating,
        review_message: reviewMessage
      });

      setStatusMessage({ 
        type: 'success', 
        text: 'Thank you! Your review has been submitted and is currently pending verification before appearing publicly.' 
      });

      setTimeout(() => {
        setFullName('');
        setCompanyName('');
        setRating(5);
        setReviewMessage('');
        setStatusMessage(null);
        if (onReviewSubmitted) onReviewSubmitted();
        onClose();
      }, 2400);

    } catch (err) {
      setStatusMessage({ type: 'error', text: err.message || 'Failed to submit review.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="review-modal-backdrop" role="dialog" aria-modal="true">
      <div className="review-modal-window">
        {/* Header */}
        <div className="review-modal-header">
          <div className="modal-header-text">
            <h3>Write a Client Review</h3>
            <p>SON AGNI SECURITIES • Client Feedback Portal</p>
          </div>
          <button 
            type="button" 
            className="modal-close-icon"
            onClick={onClose}
            aria-label="Close review modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="review-modal-form">
          {statusMessage && (
            <div className={`submit-alert-box ${statusMessage.type}`}>
              {statusMessage.type === 'success' ? (
                <CheckCircle2 size={18} />
              ) : (
                <AlertCircle size={18} />
              )}
              <span>{statusMessage.text}</span>
            </div>
          )}

          {/* 1. Full Name */}
          <div className="form-group-item">
            <label htmlFor="rev-name">Full Name *</label>
            <input 
              id="rev-name"
              type="text" 
              className="form-input-field" 
              placeholder="e.g. Anand Vardhan Sharma"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* 2. Company Name */}
          <div className="form-group-item">
            <label htmlFor="rev-company">Company / Organization (Optional)</label>
            <input 
              id="rev-company"
              type="text" 
              className="form-input-field" 
              placeholder="e.g. Apex Industrial Warehousing"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          {/* 3. Star Rating */}
          <div className="form-group-item">
            <label>Star Rating (1–5) *</label>
            <div className="star-picker" role="radiogroup" aria-label="Select rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`star-pick-btn ${(hoverRating || rating) >= star ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  aria-label={`${star} star`}
                  disabled={isSubmitting}
                >
                  <Star 
                    size={28} 
                    fill={(hoverRating || rating) >= star ? '#F59E0B' : 'transparent'} 
                  />
                </button>
              ))}
            </div>
          </div>

          {/* 4. Write Your Review */}
          <div className="form-group-item">
            <label htmlFor="rev-msg">Write Your Review *</label>
            <textarea 
              id="rev-msg"
              className="form-textarea-field" 
              rows={4}
              placeholder="Describe your experience with SON AGNI security guards, bouncers, or management services..."
              value={reviewMessage}
              onChange={(e) => setReviewMessage(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Submit */}
          <button 
            type="submit" 
            className="btn-submit-review"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting Review...' : 'SUBMIT REVIEW'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default WriteReviewModal;

