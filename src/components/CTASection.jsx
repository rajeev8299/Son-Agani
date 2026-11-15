import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, MessageCircle } from 'lucide-react';
import { companyConfig } from '../data/companyInfo';

const CTASection = ({ 
  title = "LET'S SECURE WHAT MATTERS MOST.",
  subtitle = "Discuss your warehouse protection, construction site guarding, or premises access control requirements with SON AGNI SECURITIES.",
  showPhone = true
}) => {
  return (
    <section className="section-padding bg-dark">
      <div className="container">
        <div className="cta-banner">
          <div className="badge-tag" style={{ margin: '0 auto 1.25rem auto' }}>
            PROFESSIONAL SECURITY & MANPOWER SOLUTIONS
          </div>
          <h2 className="cta-banner-title">{title}</h2>
          <p className="cta-banner-desc">{subtitle}</p>

          <div className="cta-btn-group">
            <Link to="/get-a-quote" className="btn btn-primary btn-lg">
              <span>REQUEST A FREE QUOTE</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              <span>CONTACT OUR TEAM</span>
            </Link>
          </div>

          {showPhone && (
            <div style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>
              Official Contact Line: {' '}
              <a href={companyConfig.phoneNumbers.primaryTel} style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>
                {companyConfig.phoneNumbers.primary}
              </a>
              {' '}|{' '}
              <a href={companyConfig.phoneNumbers.secondaryTel} style={{ color: 'var(--color-text-primary)', fontWeight: 'bold' }}>
                {companyConfig.phoneNumbers.secondary}
              </a>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '0.4rem' }}>
                {companyConfig.legalName} &bull; Security & Manpower Services
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
