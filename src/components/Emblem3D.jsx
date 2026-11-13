import React from 'react';

/**
 * Premium 3D Emblem Vectors
 * Custom engineered SVG assets featuring realistic metallic facets,
 * beveled 3D lighting, subtle internal red core glows, and isometric angles.
 */
export const Emblem3D = ({ theme = 'shield', size = 110, className = '' }) => {
  if (theme === 'shield') {
    // 3D Metallic Security Shield with red photon core
    return (
      <svg
        width={size}
        height={size * 1.15}
        viewBox="0 0 160 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`hero-3d-emblem-svg ${className}`}
        aria-hidden="true"
      >
        <defs>
          {/* Subtle Ambient Red Glow Filter */}
          <filter id="shieldRedGlow" x="-20%" y="-20%" width="140%" height="140%" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          {/* Beveled Metallic Outer Rim */}
          <linearGradient id="metallicRimLeft" x1="20" y1="10" x2="80" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#888888" />
            <stop offset="45%" stopColor="#3A3A3C" />
            <stop offset="70%" stopColor="#1E1E20" />
            <stop offset="100%" stopColor="#111111" />
          </linearGradient>
          <linearGradient id="metallicRimRight" x1="140" y1="10" x2="80" y2="160" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#48484A" />
            <stop offset="35%" stopColor="#1C1C1E" />
            <stop offset="80%" stopColor="#2C2C2E" />
            <stop offset="100%" stopColor="#0B0B0C" />
          </linearGradient>
          {/* Inner Titanium Facets */}
          <linearGradient id="facetLeft" x1="80" y1="26" x2="30" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2E2E32" />
            <stop offset="50%" stopColor="#18181A" />
            <stop offset="100%" stopColor="#0A0A0C" />
          </linearGradient>
          <linearGradient id="facetRight" x1="80" y1="26" x2="130" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1A1A1C" />
            <stop offset="50%" stopColor="#0E0E10" />
            <stop offset="100%" stopColor="#1E1E22" />
          </linearGradient>
          {/* Laser-Cooled Red Core */}
          <linearGradient id="redCoreGrad" x1="80" y1="44" x2="80" y2="130" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF2E3E" />
            <stop offset="40%" stopColor="#C1121F" />
            <stop offset="100%" stopColor="#550008" />
          </linearGradient>
          <linearGradient id="rimSpecular" x1="30" y1="10" x2="130" y2="10" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#555555" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#555555" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Ambient Red Glow Halo */}
        <path
          d="M80 18L136 38V88C136 128 80 162 80 162C80 162 24 128 24 88V38L80 18Z"
          fill="#C1121F"
          opacity="0.32"
          filter="url(#shieldRedGlow)"
        />

        {/* Outer Beveled Frame - Left & Right Chamfers */}
        <path
          d="M80 18L24 38V88C24 128 80 162 80 162V18Z"
          fill="url(#metallicRimLeft)"
          stroke="#555555"
          strokeWidth="1.2"
        />
        <path
          d="M80 18L136 38V88C136 128 80 162 80 162V18Z"
          fill="url(#metallicRimRight)"
          stroke="#333333"
          strokeWidth="1.2"
        />

        {/* Top Specular Edge Highlight */}
        <path
          d="M26 38L80 19L134 38"
          stroke="url(#rimSpecular)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Inner Recessed Facet Body */}
        <path
          d="M80 28L36 44V84C36 118 80 148 80 148V28Z"
          fill="url(#facetLeft)"
        />
        <path
          d="M80 28L124 44V84C124 118 80 148 80 148V28Z"
          fill="url(#facetRight)"
        />

        {/* Center Vertical Crest Ridge Line */}
        <line x1="80" y1="20" x2="80" y2="158" stroke="#FFFFFF" strokeOpacity="0.28" strokeWidth="1.5" />

        {/* Inner Security Chevron / Emblem Inlay */}
        <path
          d="M80 48L108 62V88C108 112 80 132 80 132C80 132 52 112 52 88V62L80 48Z"
          fill="url(#redCoreGrad)"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="1.5"
        />
        <path
          d="M80 50L54 63V88C54 110 80 130 80 130V50Z"
          fill="white"
          opacity="0.12"
        />

        {/* Central Protective Monogram / Emblem Star */}
        <path
          d="M80 68L84 78L95 80L87 88L89 99L80 94L71 99L73 88L65 80L76 78L80 68Z"
          fill="#FFFFFF"
          opacity="0.9"
        />
      </svg>
    );
  }

  if (theme === 'radar' || theme === 'security') {
    // 3D Isometric Geometric Defense Ring with Hexagon Nodes
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`hero-3d-emblem-svg ${className}`}
        aria-hidden="true"
      >
        <defs>
          <filter id="radarRedGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
          </filter>
          <linearGradient id="radarHexGrad1" x1="20" y1="20" x2="140" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#55555A" />
            <stop offset="50%" stopColor="#1E1E22" />
            <stop offset="100%" stopColor="#0C0C0E" />
          </linearGradient>
          <linearGradient id="radarRedBeam" x1="80" y1="20" x2="80" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF3344" />
            <stop offset="100%" stopColor="#88000F" />
          </linearGradient>
        </defs>

        <circle cx="80" cy="80" r="64" fill="#C1121F" opacity="0.25" filter="url(#radarRedGlow)" />
        <circle cx="80" cy="80" r="64" stroke="#444448" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="80" cy="80" r="50" stroke="url(#radarRedBeam)" strokeWidth="2" opacity="0.65" />
        <circle cx="80" cy="80" r="32" stroke="#66666E" strokeWidth="1.5" />

        {/* 3D Hexagonal Perimeter Defense Points */}
        <polygon points="80,24 128,52 128,108 80,136 32,108 32,52" stroke="#77777F" strokeWidth="2.5" fill="none" opacity="0.75" />
        <polygon points="80,32 120,56 120,104 80,128 40,104 40,56" fill="url(#radarHexGrad1)" opacity="0.85" />

        {/* Center Target Core */}
        <circle cx="80" cy="80" r="16" fill="url(#radarRedBeam)" stroke="#FFFFFF" strokeWidth="1.5" />
        <circle cx="80" cy="80" r="6" fill="#FFFFFF" />

        {/* Crosshair Marks */}
        <line x1="80" y1="12" x2="80" y2="34" stroke="#C1121F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="80" y1="126" x2="80" y2="148" stroke="#C1121F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="80" x2="34" y2="80" stroke="#C1121F" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="126" y1="80" x2="148" y2="80" stroke="#C1121F" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (theme === 'fortress' || theme === 'industrial') {
    // 3D Metallic Prism / Diamond Armor Element
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`hero-3d-emblem-svg ${className}`}
        aria-hidden="true"
      >
        <defs>
          <filter id="prismGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
          </filter>
          <linearGradient id="prismLeft" x1="20" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A4A50" />
            <stop offset="100%" stopColor="#18181A" />
          </linearGradient>
          <linearGradient id="prismRight" x1="140" y1="80" x2="80" y2="20" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2A2A2E" />
            <stop offset="100%" stopColor="#0F0F12" />
          </linearGradient>
          <linearGradient id="prismBottomLeft" x1="20" y1="80" x2="80" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E1E22" />
            <stop offset="100%" stopColor="#0C0C0E" />
          </linearGradient>
          <linearGradient id="prismBottomRight" x1="140" y1="80" x2="80" y2="140" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#323236" />
            <stop offset="100%" stopColor="#121214" />
          </linearGradient>
        </defs>

        <polygon points="80,18 142,80 80,142 18,80" fill="#C1121F" opacity="0.3" filter="url(#prismGlow)" />

        {/* 4 Multi-Faceted 3D Diamond Faces */}
        <polygon points="80,24 80,80 24,80" fill="url(#prismLeft)" stroke="#555" strokeWidth="1" />
        <polygon points="80,24 136,80 80,80" fill="url(#prismRight)" stroke="#666" strokeWidth="1" />
        <polygon points="24,80 80,80 80,136" fill="url(#prismBottomLeft)" stroke="#333" strokeWidth="1" />
        <polygon points="80,80 136,80 80,136" fill="url(#prismBottomRight)" stroke="#444" strokeWidth="1" />

        {/* Center High-Energy Red Monolith */}
        <polygon points="80,48 104,80 80,112 56,80" fill="#C1121F" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.9" />
        <polygon points="80,48 80,112 56,80" fill="#FFFFFF" opacity="0.18" />
        <circle cx="80" cy="80" r="5" fill="#FFFFFF" />
      </svg>
    );
  }

  // Default: Shield
  return null;
};

