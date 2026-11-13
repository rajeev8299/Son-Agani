import React from 'react';
import './PageHeader.css';

/**
 * PageHeader - Reusable, compact, premium header component for all inner pages.
 * 
 * Features:
 * - Unified design structure across all inner pages.
 * - Clean page identification badge/label.
 * - Bold, premium clamp-sized heading.
 * - Concise, comfortable reading-width description.
 * - Completely removes the extra floating shield/emblem graphics.
 * - Controlled compact heights:
 *     Desktop: ~220-280px total height
 *     Tablet:  ~200-240px total height
 *     Mobile:  ~170-220px total height
 * - Brand-aligned theme: Dark off-white background (#EAE7DC), dark typography, Sonagni red accent.
 */
const PageHeader = ({
  title,
  description,
  accentLabel,
  bgImage,
  className = ''
}) => {
  return (
    <section className={`page-header-unified ${className}`} aria-label={title}>
      {/* Subtle contextual ambient texture / imagery */}
      {bgImage && (
        <div className="page-header-bg-wrap" aria-hidden="true">
          <img 
            src={bgImage} 
            alt="" 
            className="page-header-bg-img" 
            loading="eager"
          />
          <div className="page-header-vignette" />
        </div>
      )}

      {/* Subtle architectural security gridline floor */}
      <div className="page-header-grid" aria-hidden="true" />

      {/* Ambient soft volumetric red illumination */}
      <div className="page-header-ambient-glow" aria-hidden="true" />

      <div className="container">
        <div className="page-header-content">
          {/* 1. Small, clean page identification label */}
          {accentLabel && (
            <div className="page-header-badge">
              <span className="badge-pulse-dot" />
              <span className="badge-text">{accentLabel}</span>
            </div>
          )}

          {/* 2. Main page heading */}
          <h1 className="page-header-title">
            {title}
          </h1>

          {/* 3. Subtle balanced divider */}
          <div className="page-header-divider" aria-hidden="true">
            <span className="divider-line left" />
            <span className="divider-node" />
            <span className="divider-line right" />
          </div>

          {/* 4. Short, relevant description */}
          {description && (
            <p className="page-header-desc">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;

