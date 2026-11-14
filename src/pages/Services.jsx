import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Search,
  MapPin
} from 'lucide-react';
import { companyConfig } from '../data/companyInfo';
import ServiceCard from '../components/ServiceCard';
import DynamicIcon from '../components/DynamicIcon';
import CTASection from '../components/CTASection';
import PremiumPageHero from '../components/PremiumPageHero';
import { assetPath } from '../utils/assetPath';
import '../styles/editorialLayouts.css';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = companyConfig.services.filter(service => {
    return service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="services-page">
      {/* 3D Cinematic Inner Page Hero */}
      <PremiumPageHero
        title="OUR SECURITY SERVICES"
        description={`Explore the specialized security, elite bouncer deployments, and facility protection solutions provided by ${companyConfig.legalName}.`}
        bgImage="/images/hero-bouncer-indian.jpg"
        visualTheme="shield"
        accentLabel="CORE SECURITY SOLUTIONS"
      />

      {/* Services Grid with Search */}
      <section className="section-padding bg-dark">
        <div className="container">
          {/* Controls Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            marginBottom: '3rem',
            padding: '1.25rem 1.75rem',
            backgroundColor: 'var(--color-secondary-black)',
            border: '1px solid var(--color-border-dark)',
            borderRadius: 'var(--radius-card)'
          }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', textTransform: 'uppercase', color: 'var(--color-text-primary)' }}>
                Primary Service Offerings
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                Specialized security and manpower deployment for commercial premises, storage facilities, and construction projects.
              </p>
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px' }}>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  backgroundColor: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-card)',
                  padding: '0.6rem 1rem 0.6rem 2.5rem',
                  color: 'var(--color-text-primary)',
                  fontSize: '0.9rem',
                  boxSizing: 'border-box'
                }}
              />
              <Search size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-muted)' }} />
            </div>
          </div>

          {/* Open Editorial Services List */}
          {filteredServices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--color-text-secondary)' }}>
              <p style={{ fontSize: '1.1rem' }}>No services matched your search query.</p>
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="btn btn-secondary btn-sm"
                style={{ marginTop: '1rem' }}
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="editorial-services-list">
              {filteredServices.map((service, sIndex) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="editorial-service-row"
                >
                  <div className="service-row-num">
                    0{sIndex + 1}
                  </div>

                  <div className="service-row-title-block">
                    <div className="service-row-icon">
                      <DynamicIcon name={service.icon} size={22} />
                    </div>
                    <h3 className="service-row-title">{service.title}</h3>
                  </div>

                  <p className="service-row-desc">
                    {service.shortDesc}
                  </p>

                  <div className="service-row-action">
                    <span>VIEW SCOPE</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Security Scope Standards */}
      <section className="section-padding bg-secondary-dark">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge-tag">WHAT WE DELIVER</span>
              <h2 className="section-title">SERVICE DEPLOYMENT STANDARDS</h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Every security posting coordinated by {companyConfig.legalName} is delivered with operational discipline and clear daily responsibilities:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)' }} />
                  <span style={{ fontSize: '0.925rem' }}>Disciplined guard turnout and post attendance monitoring</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)' }} />
                  <span style={{ fontSize: '0.925rem' }}>Detailed visitor logging and vehicle entry pass inspection</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)' }} />
                  <span style={{ fontSize: '0.925rem' }}>Scheduled foot patrolling rounds across premises and boundary walls</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)' }} />
                  <span style={{ fontSize: '0.925rem' }}>Prompt escalation and formal incident documentation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)' }} />
                  <span style={{ fontSize: '0.925rem' }}>Direct 24/7 administrative communication and incident reporting</span>
                </div>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', border: '1px solid var(--color-border-dark)' }}>
              <img
                src={assetPath("images/bouncer-warehouse.jpg")}
                alt="Security Deployment at Warehouse Logistics Gate"
                style={{ width: '100%', height: '420px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="NEED SECURITY GUARD PERSONNEL FOR YOUR SITE?"
        subtitle="Contact our security management team to review your facility requirements and receive a formal commercial quotation."
      />
    </div>
  );
};

export default Services;
