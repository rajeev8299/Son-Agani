import React from 'react';
import { 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { companyConfig } from '../data/companyInfo';
import QuoteForm from '../components/QuoteForm';
import PremiumPageHero from '../components/PremiumPageHero';

const GetQuote = () => {
  return (
    <div className="quote-page">
      {/* 3D Cinematic Inner Page Hero */}
      <PremiumPageHero
        title="REQUEST A SECURITY QUOTATION"
        description={`Submit your facility profile, required guard headcount, and shift parameters to ${companyConfig.legalName} for an itemized commercial proposal.`}
        bgImage="/images/bouncer-shift.jpg"
        visualTheme="fortress"
        accentLabel="COMMERCIAL APPRAISAL FORM"
      />

      {/* Form Section */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="grid-quote-layout">
            {/* Left: Main Multi-Section Form */}
            <div>
              <div style={{ marginBottom: '2rem' }}>
                <span className="badge-tag">OFFICIAL REQUIREMENT FORM</span>
                <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-text-primary)' }}>
                  FACILITY SECURITY ENQUIRY
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                  Please fill out the form below with your facility specifications. Our administrative desk coordinates quotations for premises across India.
                </p>
              </div>

              <QuoteForm />
            </div>

            {/* Right: Helpful Quotation Details */}
            <div>
              <div className="form-card" style={{ marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-text-primary)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                  Enquiry Process
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--color-primary-red)', fontWeight: 800 }}>1.</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                      <strong>Submission:</strong> Share your location, shift requirements, and property profile.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--color-primary-red)', fontWeight: 800 }}>2.</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                      <strong>Assessment:</strong> Our operations team reviews guard headcount and gate management requirements.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--color-primary-red)', fontWeight: 800 }}>3.</span>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                      <strong>Quotation:</strong> Receive a clear, itemized commercial estimate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="form-card">
                <h3 style={{ fontSize: '1.2rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-text-primary)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
                  Direct Phone Enquiries
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '1rem', lineHeight: '1.5' }}>
                  Speak directly with {companyConfig.legalName}:
                </p>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.25rem' }}>
                  <a href={companyConfig.phoneNumbers.primaryTel} style={{ color: 'var(--color-text-primary)' }}>{companyConfig.phoneNumbers.primary}</a>
                </div>
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                  <a href={companyConfig.phoneNumbers.secondaryTel} style={{ color: 'var(--color-text-primary)' }}>{companyConfig.phoneNumbers.secondary}</a>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  Email: <a href={companyConfig.emailMailto} style={{ color: 'var(--color-primary-red)', fontWeight: 600 }}>{companyConfig.email}</a>
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
