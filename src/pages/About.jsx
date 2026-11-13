import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  MapPin,
  Building2,
  FileText
} from 'lucide-react';
import { companyConfig } from '../data/companyInfo';
import CTASection from '../components/CTASection';
import PremiumPageHero from '../components/PremiumPageHero';
import '../styles/editorialLayouts.css';

const About = () => {
  return (
    <div className="about-page">
      {/* 3D Cinematic Inner Page Hero */}
      <PremiumPageHero 
        title={`ABOUT ${companyConfig.brandName}`}
        description={`${companyConfig.legalName} delivers disciplined private security, VIP protection, and bouncer manpower across India.`}
        bgImage="/images/about-team.jpg"
        visualTheme="shield"
        accentLabel="CORPORATE SECURITY PROFILE"
      />

      {/* SECTION 1: WHO WE ARE & COMPANY INTRODUCTION */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge-tag">REGISTERED CORPORATE PROFILE</span>
              <h2 className="section-title">SECURING PREMISES & ASSETS</h2>
              <p style={{ color: 'var(--color-text-primary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                <strong>{companyConfig.legalName}</strong> is a private security and manpower services company based in Varanasi, Uttar Pradesh, India. Operating under the public-facing brand <strong>{companyConfig.brandName}</strong>, the company focuses on providing professional security and manpower-related services for business premises, warehouses, construction sites and other operational environments.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                We support commercial and industrial clients through structured premises patrolling, visitor management, material entry logging, and shift supervision. Our operations are governed by transparent communication, disciplined workforce deployment, and strict compliance with Indian corporate standards.
              </p>

              <div className="grid-2" style={{ gap: '1rem', marginTop: '1.5rem' }}>
                <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Operational Category</span>
                  <h4 style={{ color: 'var(--color-primary-red)', fontSize: '1.15rem', fontWeight: 800, marginTop: '0.2rem' }}>
                    {companyConfig.businessCategory}
                  </h4>
                </div>
                <div style={{ padding: '1.25rem', backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-card)', boxShadow: 'var(--shadow-sm)' }}>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Service Coverage</span>
                  <h4 style={{ color: 'var(--color-text-primary)', fontSize: '1.15rem', fontWeight: 800, marginTop: '0.2rem' }}>
                    Pan-India Operations
                  </h4>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', border: '1px solid var(--color-border-dark)' }}>
              <img 
                src="/images/about-formation.jpg" 
                alt="SON AGNI SECURITIES Security Personnel"
                style={{ width: '100%', height: '460px', objectFit: 'cover', objectPosition: 'center' }}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/about-team.jpg';
                }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CORE SPECIALIZATIONS & SCOPE */}
      <section className="section-padding bg-secondary-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">SERVICE SCOPE</span>
            <h2 className="section-title">WHAT WE FOCUS ON</h2>
            <p className="section-subtitle">
              Our manpower and security assignments concentrate on critical operational areas that protect physical property and daily workflow.
            </p>
          </div>

          <div className="editorial-approach-grid">
            <div className="editorial-approach-col">
              <div className="editorial-approach-num">01 // LOGISTICS</div>
              <h3 className="editorial-approach-title">
                Warehouse & Storage Facilities
              </h3>
              <p className="editorial-approach-desc">
                Premises protection, delivery gate documentation, weighbridge auditing support, and deterrence against inventory loss.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">02 // INDUSTRIAL</div>
              <h3 className="editorial-approach-title">
                Construction Site Security
              </h3>
              <p className="editorial-approach-desc">
                Safeguarding heavy machinery, raw materials, boundary perimeters, and supervising contractor worker gate movements.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">03 // INGRESS</div>
              <h3 className="editorial-approach-title">
                Access Control & Visitor Logs
              </h3>
              <p className="editorial-approach-desc">
                Accurate visitor records, courier handovers, pedestrian turnstile supervision, and boom barrier operation.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">04 // SURVEILLANCE</div>
              <h3 className="editorial-approach-title">
                Premises Patrolling
              </h3>
              <p className="editorial-approach-desc">
                Regular scheduled foot rounds along perimeter walls, back alleys, utility rooms, and after-hours checking of doors and locks.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">05 // READINESS</div>
              <h3 className="editorial-approach-title">
                Shift Management
              </h3>
              <p className="editorial-approach-desc">
                Punctual shift changeovers, structured roll calls, uninterrupted post coverage, and shift handover logbooks.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">06 // PROTOCOLS</div>
              <h3 className="editorial-approach-title">
                Incident Response Procedures
              </h3>
              <p className="editorial-approach-desc">
                Clear reporting protocols for unauthorized presence, damage, or boundary irregularities with prompt client communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem' }}>
            <div className="form-card" style={{ padding: '3rem 2.5rem', borderLeft: '4px solid var(--color-primary-red)' }}>
              <div className="trust-icon-box" style={{ width: 54, height: 54, marginBottom: '1.5rem' }}>
                <Target size={28} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--color-text-primary)' }}>Our Mission</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
                To provide dependable, disciplined, and customer-aligned security and manpower services that help commercial establishments, construction sites, and storage facilities safeguard their daily operations, assets, and personnel.
              </p>
            </div>

            <div className="form-card" style={{ padding: '3rem 2.5rem', borderLeft: '4px solid var(--color-primary-red)' }}>
              <div className="trust-icon-box" style={{ width: 54, height: 54, marginBottom: '1.5rem' }}>
                <Eye size={28} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', textTransform: 'uppercase', color: 'var(--color-text-primary)' }}>Our Vision</h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
                To build an established and trusted reputation across Uttar Pradesh and throughout India as a reliable partner for private security, disciplined manpower coordination, and premises protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE VALUES */}
      <section className="section-padding bg-secondary-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">ETHICAL COMMITMENT</span>
            <h2 className="section-title">OUR CORE VALUES</h2>
            <p className="section-subtitle">
              Guiding principles that define our security deployments, guard turnout, and client communications.
            </p>
          </div>

          <div className="trust-strip-editorial">
            <div className="trust-item-editorial">
              <span className="trust-editorial-number">01 // CODE</span>
              <h4>Discipline</h4>
              <p>Clean turnout, punctuality for scheduled shifts, and adherence to assigned post duties.</p>
            </div>

            <div className="trust-item-editorial">
              <span className="trust-editorial-number">02 // CODE</span>
              <h4>Integrity</h4>
              <p>Truthful incident reporting, zero tolerance for inventory theft, and respectful gate interactions.</p>
            </div>

            <div className="trust-item-editorial">
              <span className="trust-editorial-number">03 // CODE</span>
              <h4>Vigilance</h4>
              <p>Attentive observation of entry points, boundary fencing, visitor badges, and material movements.</p>
            </div>

            <div className="trust-item-editorial">
              <span className="trust-editorial-number">04 // CODE</span>
              <h4>Responsibility</h4>
              <p>Honoring our service commitments and maintaining active operational coordination with our clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="LOOKING FOR RELIABLE SECURITY PERSONNEL?" 
        subtitle="Connect with our administrative desk to discuss guard deployments or request a formal commercial quotation."
      />
    </div>
  );
};

export default About;
