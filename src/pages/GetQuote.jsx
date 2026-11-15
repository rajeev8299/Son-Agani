import React from 'react';
import { companyConfig } from '../data/companyInfo';
import QuoteForm from '../components/QuoteForm';
import PremiumPageHero from '../components/PremiumPageHero';
import SEO from '../components/common/SEO';

const GetQuote = () => {
  return (
    <div className="quote-page">
      <SEO 
        title={`Request a Quote | ${companyConfig.brandName}`}
        description={`Request a customized commercial security quotation from ${companyConfig.legalName}. Fast response for warehouse, industrial, and premises protection.`}
      />
      {/* 3D Cinematic Inner Page Hero */}
      <PremiumPageHero
        title="REQUEST A SECURITY QUOTATION"
        description={`Submit your facility profile, required guard headcount, and shift parameters to ${companyConfig.legalName} for an itemized commercial proposal.`}
        bgImage="/images/bouncer-shift.jpg"
        visualTheme="fortress"
        accentLabel="COMMERCIAL APPRAISAL FORM"
      />

      {/* Main Quote Form Section */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="quote-layout-grid">
            {/* Form Column */}
            <div className="quote-main-col">
              <QuoteForm />
            </div>

            {/* Information Sidebar */}
            <div className="quote-sidebar-col">
              <div className="quote-sidebar-card">
                <h3 className="sidebar-title">Quotation Protocol</h3>
                <ul className="sidebar-list">
                  <li>
                    <strong>Facility Assessment:</strong> Our deployment officers evaluate post layout, ingress bottlenecks, and physical parameters.
                  </li>
                  <li>
                    <strong>Customized Guard Force:</strong> We propose the ideal ratio of static guards, patrolling rounds, and supervisor oversight.
                  </li>
                  <li>
                    <strong>Transparent Commercial Terms:</strong> Complete cost itemization with statutory compliance and standard shift allowances.
                  </li>
                </ul>
              </div>

              <div className="quote-sidebar-card urgent-support">
                <h4 style={{ color: 'var(--color-primary-red)', marginBottom: '0.5rem', fontWeight: 800 }}>
                  Immediate Requirement?
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  If you need urgent premises protection within 24 hours, contact our control desk directly:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a 
                    href={companyConfig.phoneNumbers.primaryTel} 
                    style={{ fontWeight: 800, color: 'var(--color-text-primary)', textDecoration: 'none' }}
                  >
                    {companyConfig.phoneNumbers.primary}
                  </a>
                  <a 
                    href={companyConfig.phoneNumbers.secondaryTel} 
                    style={{ fontWeight: 800, color: 'var(--color-text-primary)', textDecoration: 'none' }}
                  >
                    {companyConfig.phoneNumbers.secondary}
                  </a>
                  <a 
                    href={companyConfig.emailMailto} 
                    style={{ color: 'var(--color-primary-red)', fontSize: '0.875rem', textDecoration: 'none', marginTop: '0.25rem' }}
                  >
                    {companyConfig.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetQuote;
