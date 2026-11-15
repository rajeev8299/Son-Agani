import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight,
  UserCheck,
  FileCheck,
  Activity,
  HeartHandshake,
  MapPin
} from 'lucide-react';
import { guardPersonnelCategories } from '../data/siteData';
import { companyConfig } from '../data/companyInfo';
import CTASection from '../components/CTASection';
import PremiumPageHero from '../components/PremiumPageHero';
import '../styles/editorialLayouts.css';

const OurGuards = () => {
  return (
    <div className="guards-page">
      {/* 3D Cinematic Inner Page Hero */}
      <PremiumPageHero 
        title="OUR SECURITY PERSONNEL & RIGOROUS STANDARDS"
        description={`Every bouncer and guard deployed by SON AGNI SECURITIES represents physical conditioning, ethical integrity, and uncompromising vigilance.`}
        bgImage="/images/bouncer-team.jpg"
        visualTheme="shield"
        accentLabel="DISCIPLINED SECURITY CADRE"
      />

      {/* Guard Force Categories */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">GUARD PERSONNEL</span>
            <h2 className="section-title">SECURITY FORCE CATEGORIES</h2>
            <p className="section-subtitle">
              We deploy disciplined guard staff and supervisors focused on gate security, access control, and premises patrolling.
            </p>
          </div>

          <div className="editorial-guard-split">
            {guardPersonnelCategories.slice(0, 2).map((guard, idx) => (
              <div key={idx} className="editorial-guard-item">
                <img 
                  src={guard.image} 
                  alt={guard.category} 
                  className="editorial-guard-photo" 
                />
                <div className="editorial-guard-info">
                  <span className="editorial-guard-cat">{guard.role}</span>
                  <h3 className="editorial-guard-title">{guard.category}</h3>
                  <p className="editorial-guard-desc">
                    {guard.description}
                  </p>
                  <ul className="editorial-guard-list">
                    {guard.standards.map((std, sIdx) => (
                      <li key={sIdx}>
                        <CheckCircle2 size={15} style={{ color: 'var(--color-primary-red)', flexShrink: 0 }} />
                        <span>{std}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Stage Vetting Pipeline */}
      <section className="section-padding bg-secondary-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">RIGOROUS VETTING</span>
            <h2 className="section-title">OUR RECRUITMENT & VETTING PROCESS</h2>
            <p className="section-subtitle">
              Prior to being stationed on site, our personnel undergo verification and operational briefing.
            </p>
          </div>

          <div className="editorial-approach-grid">
            <div className="editorial-approach-col">
              <div className="editorial-approach-num">01 // VERIFICATION</div>
              <h3 className="editorial-approach-title">
                1. Background Checks
              </h3>
              <p className="editorial-approach-desc">
                Thorough identity checks, address confirmation, and clean police background records.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">02 // STAMINA</div>
              <h3 className="editorial-approach-title">
                2. Physical Fitness
              </h3>
              <p className="editorial-approach-desc">
                Stamina benchmarks, alert physical presence, and readiness for active post standing and patrolling.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">03 // GATE LOGS</div>
              <h3 className="editorial-approach-title">
                3. Register Operations
              </h3>
              <p className="editorial-approach-desc">
                Clear instruction in visitor badges, outward/inward material logging, and gate pass inspection.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">04 // DRILLS</div>
              <h3 className="editorial-approach-title">
                4. Safety Awareness
              </h3>
              <p className="editorial-approach-desc">
                Familiarity with fire extinguisher locations, emergency assembly zones, and panic notification chains.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">05 // ORIENTATION</div>
              <h3 className="editorial-approach-title">
                5. On-Site Client Induction
              </h3>
              <p className="editorial-approach-desc">
                Specific site orientation matching the client's gates, storage areas, and daily shift hours.
              </p>
            </div>

            <div className="editorial-approach-col">
              <div className="editorial-approach-num">06 // INTEGRITY</div>
              <h3 className="editorial-approach-title">
                6. Guard Welfare
              </h3>
              <p className="editorial-approach-desc">
                Timely on-time payroll, standard shift rotations, and fair operational treatment for all guards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="ARRANGE SECURITY PERSONNEL FOR YOUR PREMISES"
        subtitle="Contact Sonagni Security Services Private Limited to schedule an on-site security assessment."
      />
    </div>
  );
};

export default OurGuards;
