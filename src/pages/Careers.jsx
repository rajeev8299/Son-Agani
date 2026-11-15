import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  RotateCcw,
  Info,
  CheckCircle2
} from 'lucide-react';
import { jobOpenings } from '../data/siteData';
import { companyConfig } from '../data/companyInfo';
import PremiumPageHero from '../components/PremiumPageHero';
import '../styles/editorialLayouts.css';

const Careers = () => {
  const initialForm = {
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    position: 'Security Guard',
    experience: '1 - 3 Years',
    additionalInfo: ''
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
    
    const cleanPhone = formData.mobileNumber.replace(/[\s\-()]/g, '');
    if (!cleanPhone) {
      errs.mobileNumber = "Mobile Number is required";
    } else if (!/^(?:\+91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
      errs.mobileNumber = "Please enter a valid 10-digit Indian phone number";
    }

    if (!formData.email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.city.trim()) errs.city = "Your Current City is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1100);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="careers-page">
      {/* 3D Cinematic Inner Page Hero */}
      <PremiumPageHero 
        title="JOIN OUR SECURITY CADRE"
        description={`Build an elite career with ${companyConfig.legalName} (${companyConfig.brandName}). We recruit disciplined bouncers, security officers, and site supervisors across India.`}
        bgImage="/images/bouncer-corporate.jpg"
        visualTheme="shield"
        accentLabel="CAREERS & RECRUITMENT DIVISION"
      />

      {/* Available Vacancies */}
      <section className="section-padding bg-dark">
        <div className="container">
          <div className="section-header">
            <span className="badge-tag">RECRUITMENT</span>
            <h2 className="section-title">SECURITY MANPOWER ROLES</h2>
            <p className="section-subtitle">
              We recruit disciplined personnel for static guard posts, site patrolling, and supervisor coordination.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {jobOpenings.slice(0, 3).map((job, jIdx) => (
              <div 
                key={job.id} 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '70px 1.5fr 2fr 180px',
                  gap: '2rem',
                  alignItems: 'center',
                  padding: '1.75rem 1.5rem',
                  borderRadius: '18px',
                  transition: 'background-color 0.25s ease'
                }}
                className="career-opening-row"
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-primary-red)' }}>
                  0{jIdx + 1}
                </div>

                <div>
                  <h3 style={{ fontSize: '1.3rem', textTransform: 'uppercase', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
                    {job.title}
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', color: 'var(--color-text-secondary)', fontSize: '0.825rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={14} style={{ color: 'var(--color-primary-red)' }} />
                      <span>{job.location}</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Clock size={14} style={{ color: 'var(--color-primary-red)' }} />
                      <span>{job.type}</span>
                    </span>
                  </div>
                </div>

                <div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                    {job.requirements.slice(0, 3).map((req, rIdx) => (
                      <li key={rIdx} style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                        <CheckCircle2 size={13} style={{ color: 'var(--color-primary-red)', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <button 
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, position: job.title }));
                      document.getElementById('recruitment-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="btn btn-outline-red btn-sm"
                    style={{ width: '100%' }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="recruitment-form" className="section-padding bg-secondary-dark">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="section-header">
            <span className="badge-tag">CANDIDATE REGISTRATION</span>
            <h2 className="section-title">EMPLOYMENT ENQUIRY FORM</h2>
            <p className="section-subtitle">
              Submit your credentials below to register your interest for security guard or supervisor openings.
            </p>
          </div>

          <div className="form-card">
            {submitSuccess && (
              <div className="feedback-alert success" role="alert">
                <CheckCircle size={22} style={{ color: '#059669', flexShrink: 0 }} />
                <div>
                  <h4>Application Logged (Demonstration Mode)</h4>
                  <p style={{ color: '#065F46', fontSize: '0.9rem' }}>
                    Thank you, <strong>{formData.fullName}</strong>. Your candidate interest for <strong>{formData.position}</strong> has been logged in demonstration mode.
                  </p>
                  <div style={{ marginTop: '0.85rem' }}>
                    <button type="button" onClick={handleReset} className="btn btn-secondary btn-sm">
                      <RotateCcw size={14} /> Submit Another Application
                    </button>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="applicantName">
                    Full Name <span className="req">*</span>
                  </label>
                  <input 
                    type="text"
                    id="applicantName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Surendra Kumar"
                    className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                  />
                  {errors.fullName && <span className="form-error-msg"><AlertCircle size={14} /> {errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="applicantMobile">
                    Mobile Number (India) <span className="req">*</span>
                  </label>
                  <input 
                    type="tel"
                    id="applicantMobile"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    placeholder="e.g. 9628333391"
                    className={`form-input ${errors.mobileNumber ? 'has-error' : ''}`}
                  />
                  {errors.mobileNumber && <span className="form-error-msg"><AlertCircle size={14} /> {errors.mobileNumber}</span>}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="applicantEmail">
                    Email Address <span className="req">*</span>
                  </label>
                  <input 
                    type="email"
                    id="applicantEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. surendra@example.com"
                    className={`form-input ${errors.email ? 'has-error' : ''}`}
                  />
                  {errors.email && <span className="form-error-msg"><AlertCircle size={14} /> {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="applicantCity">
                    Current City / District <span className="req">*</span>
                  </label>
                  <input 
                    type="text"
                    id="applicantCity"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Varanasi, Mirzapur, Jaunpur"
                    className={`form-input ${errors.city ? 'has-error' : ''}`}
                  />
                  {errors.city && <span className="form-error-msg"><AlertCircle size={14} /> {errors.city}</span>}
                </div>
              </div>

              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="applicantPosition">
                    Position Applied For
                  </label>
                  <select 
                    id="applicantPosition"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Security Guard (Day/Night Shift)">Security Guard (Day/Night Shift)</option>
                    <option value="Security Field Supervisor">Security Field Supervisor</option>
                    <option value="Gate Access & Register Incharge">Gate Access & Register Incharge</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="applicantExperience">
                    Years of Relevant Experience
                  </label>
                  <select 
                    id="applicantExperience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="Fresher / No Prior Experience">Fresher / No Prior Experience</option>
                    <option value="1 - 3 Years">1 - 3 Years</option>
                    <option value="4+ Years">4+ Years Experience</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="applicantInfo">
                  Additional Details (Education, Height, Prior Postings)
                </label>
                <textarea
                  id="applicantInfo"
                  name="additionalInfo"
                  rows="3"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="Mention your height, education details, or previous warehouse/premises guarding experience..."
                  className="form-textarea"
                />
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: '1.25rem' }}>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? 'PROCESSING...' : (
                    <>
                      <span>SUBMIT RECRUITMENT DETAILS</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
                <button type="button" onClick={handleReset} className="btn btn-secondary" disabled={isSubmitting}>
                  CLEAR
                </button>
              </div>

              <div className="demo-badge-banner">
                <Info size={16} style={{ flexShrink: 0 }} />
                <span>
                  <strong>Notice:</strong> This interface is a frontend demonstration. In production, registrations are stored in HR databases. Candidates can also send CVs to {companyConfig.email}.
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
