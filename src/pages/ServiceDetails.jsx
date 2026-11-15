import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Phone,
  ChevronRight,
  MapPin
} from 'lucide-react';
import { companyConfig } from '../data/companyInfo';
import DynamicIcon from '../components/DynamicIcon';
import CTASection from '../components/CTASection';
import PremiumPageHero from '../components/PremiumPageHero';
import { WhatsAppBrandIcon } from '../components/icons/ContactIcons';

const ServiceDetails = () => {
  const { id } = useParams();
  const service = companyConfig.services.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = companyConfig.services.filter(s => s.id !== service.id);
  const whatsappUrl = `https://wa.me/919628333391?text=${encodeURIComponent(`Hello SON AGNI SECURITIES, I am inquiring about ${service.title} for my facility.`)}`;

  return (
    <div className="service-details-page">
      {/* 3D Cinematic Inner Page Hero */}
      <PremiumPageHero
        title={service.title}
        description={service.shortDesc}
        bgImage={service.image}
        visualTheme="shield"
        accentLabel="OFFICIAL SERVICE DIVISION"
      />

      {/* Main Details Section */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="grid-service-details-layout">
            {/* Left Content Area */}
            <div>
              {/* Overview */}
              <div style={{ marginBottom: '3rem' }}>
                <span className="badge-tag">SERVICE SCOPE</span>
                <h2 style={{ fontSize: '2rem', textTransform: 'uppercase', marginBottom: '1.25rem', color: 'var(--color-text-primary)' }}>
                  Operational Overview & Protocols
                </h2>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  {service.fullDesc}
                </p>
                <div style={{ borderRadius: '24px', overflow: 'hidden', marginBottom: '2.5rem' }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    style={{ width: '100%', maxHeight: '420px', objectFit: 'cover' }}
                  />
                </div>
              </div>

              {/* Key Benefits - Open Layout */}
              <div style={{ marginBottom: '3.5rem' }}>
                <span className="badge-tag">VALUE PROPOSITION</span>
                <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>
                  Core Protection Benefits
                </h3>
                <div className="grid-2" style={{ gap: '1.5rem 3rem' }}>
                  {service.benefits.map((benefit, bIdx) => (
                    <div
                      key={bIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.85rem'
                      }}
                    >
                      <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)', flexShrink: 0, marginTop: '0.2rem' }} />
                      <span style={{ fontSize: '0.975rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guard Responsibilities & SOP - Open Numbered Timeline */}
              <div style={{ marginBottom: '3.5rem' }}>
                <span className="badge-tag">DAILY EXECUTION</span>
                <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>
                  On-Duty Guard Responsibilities
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {service.responsibilities.map((resp, rIdx) => (
                    <div
                      key={rIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1.25rem'
                      }}
                    >
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 900,
                        color: 'var(--color-primary-red)',
                        lineHeight: 1.4,
                        flexShrink: 0
                      }}>
                        0{rIdx + 1}
                      </span>
                      <p style={{ margin: 0, fontSize: '0.975rem', color: 'var(--color-text-secondary)', lineHeight: '1.65' }}>
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Industries */}
              <div>
                <span className="badge-tag">SUITABILITY</span>
                <h3 style={{ fontSize: '1.5rem', textTransform: 'uppercase', marginBottom: '1.25rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>
                  Suitable Operational Environments
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {service.idealIndustries.map((ind, iIdx) => (
                    <span
                      key={iIdx}
                      style={{
                        backgroundColor: 'var(--color-surface)',
                        padding: '0.5rem 1.15rem',
                        borderRadius: 'var(--radius-pill)',
                        fontSize: '0.85rem',
                        color: 'var(--color-text-primary)',
                        fontWeight: 700
                      }}
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar: Booking & Other Services - Open & Borderless */}
            <div>
              <div style={{
                padding: '0 0 2rem 0',
                marginBottom: '2rem'
              }}>
                <span className="badge-tag" style={{ marginBottom: '0.5rem' }}>CUSTOM QUOTATION</span>
                <h3 style={{ fontSize: '1.35rem', textTransform: 'uppercase', marginBottom: '0.75rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>
                  Enquire for {service.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.92rem', marginBottom: '1.75rem', lineHeight: '1.6' }}>
                  Submit your premises details to receive an itemized quotation tailored to your operational requirements.
                </p>

                <Link
                  to="/get-a-quote"
                  className="btn btn-primary"
                  style={{ width: '100%', marginBottom: '0.85rem' }}
                >
                  <span>REQUEST QUOTATION</span>
                  <ArrowRight size={16} />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', marginBottom: '1.5rem', borderColor: '#25D366', color: '#25D366', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <WhatsAppBrandIcon size={18} color="#25D366" />
                  <span>WHATSAPP ENQUIRY</span>
                </a>

                <div style={{ paddingTop: '1rem', fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                  <div style={{ color: 'var(--color-text-primary)', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                    Official Phone Numbers:
                  </div>
                  <a href={companyConfig.phoneNumbers.primaryTel} style={{ color: 'var(--color-text-secondary)', display: 'block', fontWeight: 600 }}>
                    {companyConfig.phoneNumbers.primary}
                  </a>
                  <a href={companyConfig.phoneNumbers.secondaryTel} style={{ color: 'var(--color-text-secondary)', display: 'block', marginTop: '0.15rem', fontWeight: 600 }}>
                    {companyConfig.phoneNumbers.secondary}
                  </a>
                  <div style={{ marginTop: '0.5rem', color: 'var(--color-text-muted)' }}>
                    {companyConfig.legalName} &bull; Security & Manpower Division
                  </div>
                </div>
              </div>

              {/* Other Services - Clean Open List */}
              <div style={{ padding: '0.5rem 0' }}>
                <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase', marginBottom: '1.25rem', color: 'var(--color-text-primary)', fontWeight: 800 }}>
                  Other Core Services
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {otherServices.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/services/${rel.id}`}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem 0',
                        color: 'var(--color-text-primary)',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        transition: 'color 0.2s'
                      }}
                    >
                      <span>{rel.title}</span>
                      <ChevronRight size={16} style={{ color: 'var(--color-primary-red)' }} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={`ENQUIRE FOR ${service.title.toUpperCase()}`}
        subtitle="Contact Sonagni Security Services Private Limited to coordinate on-site guard deployment for your business."
      />
    </div>
  );
};

export default ServiceDetails;
