import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, ArrowRight } from 'lucide-react';
import SEO from '../components/common/SEO';
import { ROUTES } from '../config/routes';
import { companyConfig } from '../data/companyInfo';

const NotFound = () => {
  return (
    <div className="not-found-page" style={{
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '8rem 1.5rem 5rem 1.5rem',
      backgroundColor: 'var(--color-primary-black)'
    }}>
      <SEO 
        title={`Page Not Found (404) | ${companyConfig.brandName}`}
        description="The requested page could not be located on the SON AGNI SECURITIES portal."
      />
      <div className="container" style={{ maxWidth: '640px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          backgroundColor: 'rgba(200, 16, 46, 0.15)',
          border: '1px solid var(--color-primary-red)',
          borderRadius: 'var(--radius-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-primary-red)',
          margin: '0 auto 1.5rem auto'
        }}>
          <ShieldAlert size={44} />
        </div>

        <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--color-primary-red)', lineHeight: 1, marginBottom: '0.75rem' }}>
          404
        </h1>
        <h2 style={{ fontSize: '1.75rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>
          SECURITY RESTRICTED ZONE / PAGE NOT FOUND
        </h2>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
          The requested URL path does not exist or has been relocated to another sector. Please verify the URL or return to our public portal.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to={ROUTES.HOME} className="btn btn-primary">
            <Home size={16} />
            <span>RETURN TO HOME</span>
          </Link>
          <Link to={ROUTES.SERVICES} className="btn btn-secondary">
            <span>BROWSE SERVICES</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
