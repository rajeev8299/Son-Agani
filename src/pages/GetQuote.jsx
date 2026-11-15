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

            {/* Right: Helpful Quotation Details - Open & Borderless */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ padding: '0.5rem 0' }}>
                <span className="badge-tag">STEP-BY-STEP</span>
                <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '1.25rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>
                  Enquiry Process
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <span style={{ color: 'var(--color-primary-red)', fontWeight: 900, fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>01</span>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                      <strong style={{ color: 'var(--color-text-primary)' }}>Submission:</strong> Share your location, shift requirements, and property profile.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <span style={{ color: 'var(--color-primary-red)', fontWeight: 900, fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>02</span>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                      <strong style={{ color: 'var(--color-text-primary)' }}>Assessment:</strong> Our operations team reviews guard headcount and gate management requirements.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <span style={{ color: 'var(--color-primary-red)', fontWeight: 900, fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>03</span>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', margin: 0 }}>
                      <strong style={{ color: 'var(--color-text-primary)' }}>Quotation:</strong> Receive a clear, itemized commercial estimate.
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.5rem 0' }}>
                <span className="badge-tag">DIRECT ASSISTANCE</span>
                <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>
                  Direct Phone Enquiries
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                  Speak directly with our command coordinators:
                </p>
                <div style={{ fontWeight: '800', fontSize: '1.15rem', marginBottom: '0.35rem' }}>
                  <a href={companyConfig.phoneNumbers.primaryTel} style={{ color: 'var(--color-text-primary)' }}>{companyConfig.phoneNumbers.primary}</a>
                </div>
                <div style={{ fontWeight: '800', fontSize: '1.15rem', marginBottom: '1rem' }}>
                  <a href={companyConfig.phoneNumbers.secondaryTel} style={{ color: 'var(--color-text-primary)' }}>{companyConfig.phoneNumbers.secondary}</a>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                  Email: <a href={companyConfig.emailMailto} style={{ color: 'var(--color-primary-red)', fontWeight: 700 }}>{companyConfig.email}</a>
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
