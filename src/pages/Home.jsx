import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  UserCheck, 
  FileCheck, 
  Clock, 
  Award,
  CheckCircle2,
  ChevronRight,
  Shield,
  Layers,
  PhoneCall,
  MapPin,
  Eye,
  ChevronLeft,
  Building2,
  Lock,
  Truck,
  Activity,
  DoorClosed,
  Factory
} from 'lucide-react';
import { companyConfig } from '../data/companyInfo';
import { 
  industriesList, 
  guardPersonnelCategories, 
  processSteps, 
  sampleTestimonials, 
  galleryItems,
  coverageRegions 
} from '../data/siteData';
import ServiceCard from '../components/ServiceCard';
import IndustryCard from '../components/IndustryCard';
import FAQ from '../components/FAQ';
import EditorialFAQ from '../components/EditorialFAQ';
import Lightbox from '../components/Lightbox';
import CustomerReviewsSlider from '../components/CustomerReviewsSlider';
import DynamicIcon from '../components/DynamicIcon';
import { assetPath } from '../utils/assetPath';
import '../styles/editorialLayouts.css';
import '../styles/processTimeline.css';

const Home = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const openLightbox = (index) => {
    setActiveGalleryIndex(index);
    setLightboxOpen(true);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial(prev => (prev === sampleTestimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev => (prev === 0 ? sampleTestimonials.length - 1 : prev - 1));
  };

  return (
    <div className="home-page">
      {/* SECTION 1: FULL-WIDTH CINEMATIC VIDEO HERO */}
      <section className="hero-cinematic-section">
        {/* Full-width Video Background */}
        <div className="hero-video-bg-wrap" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-cinematic-video"
            poster={assetPath("images/hero-bouncer-indian.jpg")}
          >
            <source
              src="https://res.cloudinary.com/wsligng6/video/upload/v1793184213/Untitled_design.mp4"
              type="video/mp4"
            />
          </video>
          {/* Directional Cinematic Scrim for Text Readability */}
          <div className="hero-cinematic-scrim" />
          {/* Subtle Bottom Ambient Fade into Page Content */}
          <div className="hero-cinematic-bottom-fade" />
        </div>

        {/* Content Container */}
        <div className="container hero-cinematic-container">
          <div className="hero-cinematic-content">
            {/* Small Eyebrow Label */}
            <div className="hero-cinematic-eyebrow">
              <span className="hero-eyebrow-pulse" aria-hidden="true" />
              <span>PROFESSIONAL SECURITY & MANPOWER SOLUTIONS</span>
            </div>

            {/* Main Heading — Exactly 2 lines on desktop: Line 1 White, Line 2 Signature Red */}
            <h1 className="hero-cinematic-headline">
              <span className="hero-headline-line1">YOUR SAFETY.</span>
              <span className="hero-headline-line2">OUR RESPONSIBILITY.</span>
            </h1>

            {/* Supporting Heading */}
            <h2 className="hero-cinematic-support-heading">
              Professional security for the places that matter.
            </h2>

            {/* Description */}
            <p className="hero-cinematic-description">
              SON AGNI SECURITIES delivers dependable security solutions for businesses, warehouses and construction sites. We help protect your people, property and daily operations through professional security services.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cinematic-cta-group">
              <Link to="/get-a-quote" className="btn btn-hero-primary">
                <span>REQUEST A SECURITY QUOTE</span>
                <ArrowRight size={17} />
              </Link>
              <Link to="/services" className="btn btn-hero-secondary">
                <span>EXPLORE OUR SERVICES</span>
              </Link>
            </div>

            {/* Service Highlights */}
            <div className="hero-cinematic-highlights">
              <div className="hero-highlight-item">
                <CheckCircle2 size={15} />
                <span>SITE & PREMISES SECURITY</span>
              </div>
              <span className="hero-highlight-dot" aria-hidden="true">&bull;</span>
              <div className="hero-highlight-item">
                <CheckCircle2 size={15} />
                <span>ACCESS MANAGEMENT</span>
              </div>
              <span className="hero-highlight-dot" aria-hidden="true">&bull;</span>
              <div className="hero-highlight-item">
                <CheckCircle2 size={15} />
                <span>WAREHOUSE & CONSTRUCTION SECURITY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: EDITORIAL OPERATIONAL PILLARS STRIP */}
      <div className="trust-strip-editorial">
        <div className="trust-item-editorial">
          <div>
            <div className="trust-editorial-number">01 / DISCIPLINE</div>
            <div className="trust-editorial-icon">
              <UserCheck size={22} />
            </div>
            <h4>Professional Personnel</h4>
          </div>
          <p>Disciplined, uniformed security personnel configured for commercial & corporate perimeters.</p>
        </div>

        <div className="trust-item-editorial">
          <div>
            <div className="trust-editorial-number">02 / RIGOR</div>
            <div className="trust-editorial-icon">
              <Award size={22} />
            </div>
            <h4>Training Standards</h4>
          </div>
          <p>Rigorous gate log auditing, biometric verification, vehicle frisking, and fire-safety drills.</p>
        </div>

        <div className="trust-item-editorial">
          <div>
            <div className="trust-editorial-number">03 / CONTROL</div>
            <div className="trust-editorial-icon">
              <FileCheck size={22} />
            </div>
            <h4>Security Supervision</h4>
          </div>
          <p>Active field supervision, electronic patrol clocking, and immediate escalation coordination.</p>
        </div>

        <div className="trust-item-editorial">
          <div>
            <div className="trust-editorial-number">04 / SCALABILITY</div>
            <div className="trust-editorial-icon">
              <Clock size={22} />
            </div>
            <h4>Customized Deployment</h4>
          </div>
          <p>Site-specific Standard Operating Procedures matching industrial complexes and logistics yards.</p>
        </div>
      </div>

      {/* SECTION 3: ABOUT SON AGNI SECURITIES (SPLIT SCREEN) */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            {/* Left Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                borderRadius: '24px',
                overflow: 'hidden'
              }}>
                <img 
                  src={assetPath("images/bouncer-corporate.jpg")} 
                  alt="SON AGNI SECURITIES Professional Indian Security Reception and Operations Center" 
                  style={{ width: '100%', height: '500px', objectFit: 'cover', objectPosition: 'center' }}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = assetPath('images/about-formation.jpg');
                  }}
                  loading="lazy"
                />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                backgroundColor: 'rgba(23, 23, 23, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: '#FFFFFF',
                padding: '0.75rem 1.35rem',
                borderRadius: '50px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem'
              }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: 'var(--color-primary-red)', display: 'inline-block' }} />
                <span style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  24/7 ACTIVE OPERATIONAL COMMAND
                </span>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <span className="badge-tag">ABOUT SON AGNI SECURITIES</span>
              <h2 className="section-title">
                SECURING PEOPLE. <br />
                <span>PROTECTING BUSINESSES.</span>
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Operating under the public-facing brand <strong>{companyConfig.brandName}</strong>, our organization provides professional security personnel, disciplined bouncers, and comprehensive manpower services for commercial enterprises, industrial plants, and residential properties across India.
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.75rem' }}>
                We structure our services around premises protection, access control, shift coordination, and asset safety to deliver dependable day-to-day security management for commercial operations.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Warehouse & Storage Facility Security</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Construction Site Security & Machinery Protection</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Structured Access Control & Visitor Management</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-primary-red)' }} />
                  <span style={{ fontSize: '0.95rem', fontWeight: 600 }}>Premises Patrolling & Shift Coordination</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/about" className="btn btn-primary">
                  <span>LEARN MORE ABOUT US</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <span>OFFICIAL COMPANY DETAILS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 5 OFFICIAL PRIMARY SECURITY SERVICES - OPEN EDITORIAL NUMBERED LIST */}
      <section className="section-padding bg-secondary-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">PRIMARY SERVICE PORTFOLIO</span>
            <h2 className="section-title">OUR SECURITY SERVICES</h2>
            <p className="section-subtitle">
              Professional security and manpower solutions configured for commercial business environments, warehouse facilities, and construction sites.
            </p>
          </div>

          <div className="editorial-services-list">
            {companyConfig.services.map((service, sIndex) => (
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
                  <span>DISCOVER SPECIFICATIONS</span>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            <Link to="/services" className="btn btn-outline-red btn-lg">
              <span>EXPLORE ALL SERVICES & PROTOCOLS</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: INDUSTRIES WE PROTECT */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">SECTOR ORIENTATION</span>
            <h2 className="section-title">INDUSTRIES WE SERVE</h2>
            <p className="section-subtitle">
              Delivering premises protection, asset safety, and entry gate management across key operational sectors.
            </p>
          </div>

          <div className="grid-3">
            {industriesList.slice(0, 6).map((ind) => (
              <IndustryCard key={ind.id} industry={ind} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            <Link to="/services" className="btn btn-primary">
              <span>EXPLORE ALL SECURITY SERVICES</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: SERVICE APPROACH - OPEN EDITORIAL GRID */}
      <section className="section-padding bg-secondary-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">OPERATIONAL APPROACH</span>
            <h2 className="section-title">OUR SERVICE APPROACH</h2>
            <p className="section-subtitle">
              Structured operational procedures designed to safeguard facilities, manage access points, and maintain operational continuity.
            </p>
          </div>

          <div className="editorial-approach-grid">
            {companyConfig.serviceApproach.map((item, idx) => (
              <div key={idx} className="editorial-approach-col">
                <div className="editorial-approach-num">
                  0{idx + 1} // PROTOCOL
                </div>
                <h3 className="editorial-approach-title">
                  {item.title}
                </h3>
                <p className="editorial-approach-desc">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: OUR SECURITY PERSONNEL - EDITORIAL ASYMMETRIC SPLIT */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">GUARD FORCE CADRE</span>
            <h2 className="section-title">OUR SECURITY PERSONNEL</h2>
            <p className="section-subtitle">
              Disciplined guard staff trained for gate access control, premises patrolling, register management, and site supervision.
            </p>
          </div>

          <div className="editorial-guard-split">
            {guardPersonnelCategories.slice(0, 2).map((guard, idx) => (
              <div key={idx} className="editorial-guard-item">
                <img 
                  src={guard.image} 
                  alt={guard.category} 
                  className="editorial-guard-photo" 
                  loading="lazy" 
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

          <div style={{ textAlign: 'center', marginTop: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            <Link to="/our-guards" className="btn btn-primary">
              <span>EXPLORE GUARD STANDARDS & VETTING</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: 5-STEP SECURITY DEPLOYMENT PROCESS — ANIMATED GLOWING ARROW TIMELINE */}
      <section className="section-padding bg-secondary-dark process-timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">SYSTEMATIC DEPLOYMENT</span>
            <h2 className="section-title">HOW OUR PROCESS WORKS</h2>
            <p className="section-subtitle">
              A structured 5-step operational timeline from initial requirement submission to continuous post supervision.
            </p>
          </div>

          <div className="process-timeline-wrap">
            {/* Central Vertical Track Line */}
            <div className="timeline-vertical-track" aria-hidden="true" />

            {/* Continuous Travelling Light & Glowing Downward Arrowhead */}
            <div className="timeline-travel-arrow-beam" aria-hidden="true">
              <div className="travel-beam-trail" />
              <div className="travel-beam-arrowhead">
                <svg viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10L0.803848 1L11.1962 1L6 10Z" fill="#C8102E" />
                </svg>
              </div>
            </div>

            {/* Alternating Steps: 01 RIGHT -> 02 LEFT -> 03 RIGHT -> 04 LEFT -> 05 RIGHT */}
            {processSteps.map((step, idx) => {
              const isRight = idx % 2 === 0; // 0, 2, 4 -> Step 01, 03, 05
              const isLeft = !isRight;       // 1, 3 -> Step 02, 04
              const stepNum = idx + 1;

              return (
                <div key={step.number || idx} className="timeline-item-row">
                  {/* Central Numbered Circular Node */}
                  <div 
                    className={`timeline-center-node timeline-node-${stepNum}`}
                    aria-label={`Step ${step.number}`}
                  >
                    {step.number}
                  </div>

                  {/* Alternating Horizontal Connector Line */}
                  <div 
                    className={`timeline-connector ${isRight ? 'connector-right' : 'connector-left'} connector-${stepNum}`}
                    aria-hidden="true"
                  />

                  {/* Left Column Content Slot */}
                  <div className={`timeline-slot-left ${isRight ? 'timeline-slot-empty' : ''}`}>
                    {isLeft && (
                      <div className="timeline-content-block">
                        <span className="timeline-step-badge">STAGE {step.number} // PROTOCOL</span>
                        <h3 className="timeline-step-title">{step.title}</h3>
                        <p className="timeline-step-desc">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Right Column Content Slot */}
                  <div className={`timeline-slot-right ${isLeft ? 'timeline-slot-empty' : ''}`}>
                    {isRight && (
                      <div className="timeline-content-block">
                        <span className="timeline-step-badge">STAGE {step.number} // PROTOCOL</span>
                        <h3 className="timeline-step-title">{step.title}</h3>
                        <p className="timeline-step-desc">{step.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 9: SERVICE COVERAGE */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">NATIONWIDE REACH</span>
            <h2 className="section-title">SERVICE COVERAGE & ENQUIRIES</h2>
            <p className="section-subtitle">
              We welcome security service enquiries for business premises, industrial hubs, educational campuses, and commercial properties across India.
            </p>
          </div>

          <div className="coverage-banner">
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-red)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                DIRECT COORDINATION DESK
              </span>
              <h3 style={{ fontSize: '1.4rem', textTransform: 'uppercase', margin: '0.35rem 0', color: 'var(--color-text-primary)' }}>
                {companyConfig.enquiryScope}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', maxWidth: '640px' }}>
                Dedicated security consulting & emergency deployment line &bull; Call: {companyConfig.phoneNumbers.primary} / {companyConfig.phoneNumbers.secondary}
              </p>
            </div>
            <Link to="/get-a-quote" className="btn btn-primary">
              <span>SUBMIT SERVICE ENQUIRY</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: GALLERY (WITH LIGHTBOX) */}
      <section className="section-padding bg-secondary-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">OPERATIONS SHOWCASE</span>
            <h2 className="section-title">OPERATIONS GALLERY</h2>
            <p className="section-subtitle">
              Photographic documentation of security personnel, access points, and premises patrolling environments.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryItems.slice(0, 6).map((item, index) => (
              <div 
                key={item.id} 
                className="gallery-card"
                onClick={() => openLightbox(index)}
              >
                <div className="gallery-media">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="gallery-img"
                    loading="lazy" 
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-pill">{item.category}</span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                    <div className="gallery-zoom-action">
                      <Eye size={18} /> <span>Inspect Lightbox View</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            <Link to="/our-guards" className="btn btn-outline-red">
              <span>EXPLORE TRAINED GUARDS & BOUNCERS</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 11: DEMO TESTIMONIALS */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">CLIENT PERSPECTIVES</span>
            <h2 className="section-title">WHAT PARTNERS VALUE ABOUT OUR SERVICE</h2>
            <p className="section-subtitle">
              Representative demonstration feedback highlighting our focus on discipline, responsiveness, and premises protection.
            </p>
          </div>

          <div className="testimonial-carousel-box">
            <div className="testimonial-quote-text">
              "{sampleTestimonials[currentTestimonial].quote}"
            </div>

            <div className="testimonial-footer-row">
              <div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--color-text-primary)', marginBottom: '0.2rem' }}>
                  {sampleTestimonials[currentTestimonial].client}
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                  {sampleTestimonials[currentTestimonial].role} - {sampleTestimonials[currentTestimonial].organization}
                </p>
                <span className="testimonial-demo-pill">
                  {sampleTestimonials[currentTestimonial].verifiedBadge}
                </span>
              </div>

              <div className="testimonial-nav-arrows">
                <button 
                  type="button" 
                  onClick={prevTestimonial}
                  className="carousel-btn"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontWeight: 'bold' }}>
                  {currentTestimonial + 1} / {sampleTestimonials.length}
                </span>
                <button 
                  type="button" 
                  onClick={nextTestimonial}
                  className="carousel-btn"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 12: PRIORITY REDESIGN - ANSWERS TO COMMON SECURITY INQUIRIES (EDITORIAL FAQ EXPERIENCE) */}
      <EditorialFAQ faqs={companyConfig.faqs} />

      {/* SECTION 14: PREMIUM CUSTOMER REVIEW SLIDER (Immediately ABOVE Homepage Footer) */}
      <CustomerReviewsSlider />

      {/* Lightbox for Gallery */}
      <Lightbox 
        items={galleryItems.slice(0, 6)}
        currentIndex={activeGalleryIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setActiveGalleryIndex(prev => (prev === 0 ? 5 : prev - 1))}
        onNext={() => setActiveGalleryIndex(prev => (prev === 5 ? 0 : prev + 1))}
      />
    </div>
  );
};

export default Home;
