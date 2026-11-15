import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ items, currentIndex, isOpen, onClose, onPrev, onNext }) => {
  if (!isOpen || currentIndex < 0 || currentIndex >= items.length) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <button 
        type="button" 
        className="lightbox-close" 
        onClick={onClose} 
        aria-label="Close Lightbox Preview"
      >
        <X size={28} />
      </button>

      <button 
        type="button" 
        className="lightbox-arrow prev" 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous Image"
      >
        <ChevronLeft size={32} />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img 
          src={currentItem.image} 
          alt={currentItem.title} 
          className="lightbox-image" 
        />
        <div className="lightbox-info">
          <span className="lightbox-badge">{currentItem.category}</span>
          <h3 className="lightbox-title">{currentItem.title}</h3>
          <p className="lightbox-desc">{currentItem.desc}</p>
        </div>
      </div>

      <button 
        type="button" 
        className="lightbox-arrow next" 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next Image"
      >
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default Lightbox;

