import React from 'react';
import { AlertTriangle, RefreshCw, Home, Phone, Mail } from 'lucide-react';
import { companyConfig } from '../../data/companyInfo';

/**
 * Enterprise Production Error Boundary
 * Catches unhandled UI errors, prevents white screens, and offers one-click recovery.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    // In production, this can send to monitoring services (e.g. Sentry / Datadog)
    console.error('[SON AGNI SECURITIES ErrorBoundary caught error]:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <section 
          className="section-padding bg-dark"
          style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 1.5rem',
            textAlign: 'center'
          }}
          role="alert"
          aria-live="assertive"
        >
          <div 
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              background: 'var(--color-surface)',
              borderRadius: '24px',
              padding: '3rem 2rem',
              boxShadow: 'var(--shadow-lg)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div 
              style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(200, 16, 46, 0.1)',
                color: 'var(--color-primary-red)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}
            >
              <AlertTriangle size={32} />
            </div>

            <span className="badge-tag" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
              OPERATIONAL CONTINUITY NOTICE
            </span>

            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
              We Encountered an Unexpected Interface Issue
            </h1>

            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem' }}>
              Our operational systems are fully active. An unexpected client-side rendering issue occurred while displaying this page view.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
              <button 
                type="button" 
                onClick={this.handleReload}
                className="btn btn-primary"
                style={{ minWidth: '160px' }}
              >
                <RefreshCw size={16} /> Reload Page
              </button>

              <a 
                href={import.meta.env.BASE_URL || '/'}
                className="btn btn-secondary"
                style={{ minWidth: '160px' }}
              >
                <Home size={16} /> Return to Home
              </a>
            </div>

            <div 
              style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '1.5rem',
                fontSize: '0.85rem',
                color: 'var(--color-text-muted)'
              }}
            >
              <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Direct Emergency Operations Support:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
                <a 
                  href={companyConfig.phoneNumbers.primaryTel} 
                  style={{ color: 'var(--color-primary-red)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Phone size={14} /> {companyConfig.phoneNumbers.primary}
                </a>
                <a 
                  href={companyConfig.emailMailto} 
                  style={{ color: 'var(--color-primary-red)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                >
                  <Mail size={14} /> {companyConfig.email}
                </a>
              </div>
            </div>

            {import.meta.env.DEV && this.state.error && (
              <details style={{ marginTop: '2rem', textAlign: 'left', background: '#fff', padding: '1rem', borderRadius: '8px', overflow: 'auto' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 'bold', color: '#c8102e' }}>Technical Details (Dev Mode)</summary>
                <pre style={{ fontSize: '0.75rem', marginTop: '0.5rem', whiteSpace: 'pre-wrap' }}>
                  {this.state.error.toString()}
                  {'\n'}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </section>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
