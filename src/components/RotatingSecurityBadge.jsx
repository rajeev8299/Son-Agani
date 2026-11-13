import React from 'react';
import './RotatingSecurityBadge.css';

/**
 * RotatingSecurityBadge
 * 
 * High-authority, continuous slow-rotating 24x7 security seal for SON AGNI SECURITIES.
 * Integrates the official SON AGNI circular emblem (eagle shield, red palette, "SSS")
 * and an outer circular typography ring: "• 24×7 ROUND THE CLOCK PROTECTION • SON AGNI SECURITY SERVICES •"
 * 
 * Features:
 * - Smooth 360-degree continuous clockwise rotation (38s linear infinite).
 * - Multi-layered metallic bevel & warm ambient glow.
 * - Central official emblem preserved with crystal clarity.
 * - Responsive sizing and accessible reduced-motion support.
 */
const RotatingSecurityBadge = ({ className = '' }) => {
  return (
    <div className={`sonagni-rotating-badge-wrapper ${className}`} aria-label="SON AGNI 24x7 Certified Security Badge">
      <div className="badge-outer-glow" />
      
      {/* 3D Circular Bevel & Frame */}
      <div className="badge-disc">
        {/* Rotating Ring Layer (SVG textPath + decorative ticks/stars) */}
        <div className="badge-rotating-ring">
          <svg viewBox="0 0 300 300" className="badge-ring-svg">
            <defs>
              {/* Circular path centered at (150, 150) with radius 118 */}
              <path
                id="badgeTextCircle"
                d="M 150, 150 m -118, 0 a 118,118 0 1,1 236,0 a 118,118 0 1,1 -236,0"
              />
              <radialGradient id="badgeGoldSheen" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF2D6" />
                <stop offset="70%" stopColor="#F5D77F" />
                <stop offset="100%" stopColor="#C99834" />
              </radialGradient>
            </defs>

            {/* Concentric subtle decorative dashed rings */}
            <circle cx="150" cy="150" r="144" className="badge-svg-border outer-border" />
            <circle cx="150" cy="150" r="139" className="badge-svg-border dash-border" />
            <circle cx="150" cy="150" r="96" className="badge-svg-border inner-border" />

            {/* Text along path: 24x7 Security & Round-the-clock protection */}
            <text className="badge-circular-text">
              <textPath href="#badgeTextCircle" startOffset="0%">
                ★ 24×7 SECURITY SERVICES ★ ROUND THE CLOCK PROTECTION ★ RAPID RESPONSE ★
              </textPath>
            </text>
          </svg>
        </div>

        {/* Central Core Emblem: Official SON AGNI circular emblem */}
        <div className="badge-center-emblem">
          <img 
            src="/son-agni-logo-transparent.png" 
            alt="SON AGNI SECURITIES Official Emblem" 
            className="badge-emblem-img"
            loading="eager"
          />
          <div className="badge-center-glass" />
        </div>

        {/* 24x7 Corner Accent / Micro Pill (non-rotating stamp for instant punch) */}
        <div className="badge-status-pill" title="Active 24x7 Protection">
          <span className="pulse-dot" />
          <span className="pill-text">24×7 ACTIVE</span>
        </div>
      </div>
    </div>
  );
};

export default RotatingSecurityBadge;

