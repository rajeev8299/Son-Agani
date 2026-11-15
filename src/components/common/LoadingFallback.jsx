import React from 'react';

/**
 * Enterprise Route Loading Fallback
 * Dignified, lightweight spinner with SON AGNI primary red styling
 */
export const LoadingFallback = () => {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        width: '100%',
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-text-secondary)',
        padding: '2rem'
      }}
      role="status"
      aria-live="polite"
    >
      <div 
        style={{
          width: '44px',
          height: '44px',
          border: '3px solid rgba(200, 16, 46, 0.15)',
          borderTopColor: 'var(--color-primary-red)',
          borderRadius: '50%',
          animation: 'spin 0.75s linear infinite',
          marginBottom: '1rem'
        }}
      />
      <span style={{ fontSize: '0.875rem', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>
        Loading SON AGNI System...
      </span>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingFallback;
