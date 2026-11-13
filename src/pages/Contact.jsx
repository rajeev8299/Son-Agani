import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Building,
  FileText
} from 'lucide-react';
import { companyConfig } from '../data/companyInfo';
import ContactForm from '../components/ContactForm';
import PremiumPageHero from '../components/PremiumPageHero';
import { WhatsAppBrandIcon } from '../components/icons/ContactIcons';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* 3D Cinematic Inner Page Hero */}
      <PremiumPageHero
        title="CONTACT OUR COMMAND TEAM"
        description={`Get in touch with ${companyConfig.legalName} for immediate security deployments, bouncer details, and commercial site protection.`}
        bgImage="/images/banner-dark.jpg"
        visualTheme="radar"
        accentLabel="COMMUNICATIONS & DISPATCH"
      />

      {/* Main Contact Section */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="grid-contact-layout">
            {/* Left: Official Company Information */}
            <div>
              <span className="badge-tag">OFFICIAL CORPORATE DETAILS</span>
              <h2 style={{ fontSize: '1.85rem', textTransform: 'uppercase', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
                COMPANY INFORMATION
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                Both public brand name and registered legal entity details are provided below for commercial verification.
              </p>

              {/* Legal identity box */}
              <div style={{
                backgroundColor: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderLeft: '4px solid var(--color-primary-red)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-card)',
                marginBottom: '2rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Public Brand Name</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-primary)', marginTop: '0.15rem' }}>{companyConfig.brandName}</div>
                
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.75rem' }}>Registered Legal Name</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>{companyConfig.legalName}</div>

                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '0.75rem' }}>Operational Category</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--color-primary-red)', marginTop: '0.15rem' }}>{companyConfig.businessCategory}</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="trust-icon-box" style={{ width: 44, height: 44, flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', marginBottom: '0.2rem', color: 'var(--color-text-primary)' }}>Registered Office</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                      {companyConfig.registeredAddress.full}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="trust-icon-box" style={{ width: 44, height: 44, flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', marginBottom: '0.2rem', color: 'var(--color-text-primary)' }}>Official Phone Numbers</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                      Phone 1: <a href={companyConfig.phoneNumbers.primaryTel} style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{companyConfig.phoneNumbers.primary}</a> <br />
                      Phone 2: <a href={companyConfig.phoneNumbers.secondaryTel} style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{companyConfig.phoneNumbers.secondary}</a>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div className="trust-icon-box" style={{ width: 44, height: 44, flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', marginBottom: '0.2rem', color: 'var(--color-text-primary)' }}>Official Email</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
                      <a href={companyConfig.emailMailto} style={{ color: 'var(--color-primary-red)', textDecoration: 'underline' }}>
                        {companyConfig.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct CTA */}
              <div style={{ marginTop: '2.5rem' }}>
                <a 
                  href={companyConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', backgroundColor: '#25D366', borderColor: '#25D366', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.65rem' }}
                >
                  <WhatsAppBrandIcon size={22} color="#FFFFFF" />
                  <span>DIRECT WHATSAPP ENQUIRY (+91 96283 33391)</span>
                </a>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div>
              <span className="badge-tag">SEND AN ENQUIRY</span>
              <h2 style={{ fontSize: '1.85rem', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                WRITE TO OUR DESK
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Nationwide Operations & Deployment Reach */}
      <section style={{ backgroundColor: 'var(--color-background)', borderTop: '1px solid var(--color-border)', padding: '3.5rem 0' }}>
        <div className="container">
          <div style={{
            height: '240px',
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <MapPin size={42} style={{ color: 'var(--color-primary-red)', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.35rem', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
              Nationwide Operational Reach
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', maxWidth: '580px', fontSize: '0.925rem' }}>
              We deploy trained security personnel, bouncers, and facility marshals to commercial, industrial, and residential establishments across Uttar Pradesh and major metropolitan corridors throughout India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
