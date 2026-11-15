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
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Both public brand name and registered legal entity details are provided below for commercial verification.
              </p>

              {/* Legal identity details - Open & Borderless */}
              <div style={{ marginBottom: '1.75rem' }}>
                <div style={{ marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, display: 'block' }}>
                    PUBLIC BRAND NAME
                  </span>
                  <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                    {companyConfig.brandName}
                  </div>
                </div>
                
                <div style={{ marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, display: 'block' }}>
                    REGISTERED LEGAL ENTITY
                  </span>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>
                    {companyConfig.legalName}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-primary-red)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 800, display: 'block' }}>
                    OPERATIONAL CATEGORY
                  </span>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--color-text-primary)', marginTop: '0.2rem' }}>
                    {companyConfig.businessCategory}
                  </div>
                </div>
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
              <div style={{ marginTop: '1.75rem' }}>
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

      {/* Nationwide Operations & Deployment Reach - Seamless Open Presentation */}
      <section className="section-padding bg-secondary-dark">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <MapPin size={40} style={{ color: 'var(--color-primary-red)', margin: '0 auto 1.25rem auto' }} />
            <span className="badge-tag" style={{ margin: '0 auto 0.75rem auto' }}>PAN-INDIA DEPLOYMENT</span>
            <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', textTransform: 'uppercase', marginBottom: '1rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>
              Nationwide Operational Reach
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7' }}>
              We deploy trained security personnel, bouncers, and facility marshals to commercial, industrial, and residential establishments across Uttar Pradesh and major metropolitan corridors throughout India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
