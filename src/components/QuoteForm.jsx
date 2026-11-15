import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  RotateCcw,
  Info
} from 'lucide-react';
import { companyConfig } from '../data/companyInfo';

const QuoteForm = () => {
  const initialFormState = {
    fullName: '',
    companyName: '',
    mobileNumber: '',
    email: '',
    state: 'Uttar Pradesh',
    city: '',
    serviceRequired: companyConfig.services[0].title,
    propertyType: 'Warehouse / Storage Facility',
    personnelCount: '2 - 5 Personnel',
    shiftDetails: '12 Hours (Day/Night Shift)',
    expectedStartDate: '',
    additionalRequirements: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const indianStates = [
    "Uttar Pradesh", "Delhi NCR", "Maharashtra", "Bihar", "Madhya Pradesh", 
    "Haryana", "Rajasthan", "Gujarat", "West Bengal", "Karnataka", 
    "Telangana", "Tamil Nadu", "Punjab", "Other State / Union Territory"
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full Name is required";
    
    // Indian Mobile Number Validation (10 digits, optional +91 or 0 prefix)
    const mobileClean = formData.mobileNumber.replace(/[\s\-()]/g, '');
    if (!mobileClean) {
      errs.mobileNumber = "Mobile Number is required";
    } else if (!/^(?:\+91|0)?[6-9]\d{9}$/.test(mobileClean)) {
      errs.mobileNumber = "Please enter a valid 10-digit Indian mobile number (starting with 6-9)";
    }

    // Email validation
    if (!formData.email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.city.trim()) errs.city = "City / District is required";
    if (!formData.expectedStartDate) errs.expectedStartDate = "Expected Start Date is required";

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate client-side demo turnaround
    timerRef.current = setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1100);
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="form-card">
      {submitSuccess && (
        <div className="feedback-alert success" role="alert">
          <CheckCircle size={24} style={{ color: '#059669', flexShrink: 0 }} />
          <div>
            <h4>Quotation Request Logged (Demonstration Mode)</h4>
            <p style={{ color: '#065F46', fontSize: '0.9rem' }}>
              Thank you, <strong>{formData.fullName}</strong>. Your requirement for <strong>{formData.serviceRequired}</strong> in <strong>{formData.city}, {formData.state}</strong> has been logged in demonstration mode.
            </p>
            <p style={{ color: '#047857', fontSize: '0.825rem', marginTop: '0.4rem' }}>
              For urgent deployment discussions, you can reach out directly to <strong>{companyConfig.legalName}</strong> at <strong>{companyConfig.phoneNumbers.primary}</strong> or email <strong>{companyConfig.email}</strong>.
            </p>
            <div style={{ marginTop: '0.85rem' }}>
              <button 
                type="button" 
                onClick={handleReset} 
                className="btn btn-secondary btn-sm"
              >
                <RotateCcw size={14} /> Submit Another Requirement
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Section 1: Contact Details */}
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem', color: 'var(--color-text-primary)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          1. Point of Contact Information
        </h3>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              Full Name <span className="req">*</span>
            </label>
            <input 
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rajesh Kumar"
              className={`form-input ${errors.fullName ? 'has-error' : ''}`}
            />
            {errors.fullName && <span className="form-error-msg"><AlertCircle size={14} /> {errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="companyName">
              Company / Business Name
            </label>
            <input 
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g. Kashi Logistics Ltd."
              className="form-input"
            />
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="mobileNumber">
              Mobile Number (India) <span className="req">*</span>
            </label>
            <input 
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="e.g. 9628333391"
              className={`form-input ${errors.mobileNumber ? 'has-error' : ''}`}
            />
            {errors.mobileNumber && <span className="form-error-msg"><AlertCircle size={14} /> {errors.mobileNumber}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Official Email Address <span className="req">*</span>
            </label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. contact@business.com"
              className={`form-input ${errors.email ? 'has-error' : ''}`}
            />
            {errors.email && <span className="form-error-msg"><AlertCircle size={14} /> {errors.email}</span>}
          </div>
        </div>

        {/* Section 2: Deployment Scope */}
        <h3 style={{ fontSize: '1.25rem', margin: '2rem 0 1.25rem 0', color: 'var(--color-text-primary)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>
          2. Deployment Location & Required Services
        </h3>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="state">
              State / Union Territory <span className="req">*</span>
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="form-select"
            >
              {indianStates.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="city">
              City / District <span className="req">*</span>
            </label>
            <input 
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="e.g. Varanasi, Prayagraj, Lucknow"
              className={`form-input ${errors.city ? 'has-error' : ''}`}
            />
            {errors.city && <span className="form-error-msg"><AlertCircle size={14} /> {errors.city}</span>}
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="serviceRequired">
              Service Required <span className="req">*</span>
            </label>
            <select 
              id="serviceRequired"
              name="serviceRequired"
              value={formData.serviceRequired}
              onChange={handleChange}
              className="form-select"
            >
              {companyConfig.services.map((srv) => (
                <option key={srv.id} value={srv.title}>{srv.title}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="propertyType">
              Property / Premise Type
            </label>
            <select 
              id="propertyType"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Warehouse / Storage Facility">Warehouse / Storage Facility</option>
              <option value="Construction Site / Development Project">Construction Site / Development Project</option>
              <option value="Commercial Business Premises">Commercial Business Premises</option>
              <option value="Industrial Plant / Factory">Industrial Plant / Factory</option>
              <option value="Office Building / Hub">Office Building / Hub</option>
              <option value="Residential Society / Complex">Residential Society / Complex</option>
            </select>
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="personnelCount">
              Number of Security Personnel Required
            </label>
            <select 
              id="personnelCount"
              name="personnelCount"
              value={formData.personnelCount}
              onChange={handleChange}
              className="form-select"
            >
              <option value="1 Guard (Single Entry Post)">1 Guard (Single Entry Post)</option>
              <option value="2 - 5 Personnel">2 - 5 Personnel</option>
              <option value="6 - 10 Personnel">6 - 10 Personnel</option>
              <option value="11 - 20 Personnel">11 - 20 Personnel</option>
              <option value="20+ Personnel">20+ Personnel (Large Facility)</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="shiftDetails">
              Required Shift Details
            </label>
            <select 
              id="shiftDetails"
              name="shiftDetails"
              value={formData.shiftDetails}
              onChange={handleChange}
              className="form-select"
            >
              <option value="12 Hours (Day/Night Shift)">12 Hours (Day/Night Shift)</option>
              <option value="24 Hours (Two 12hr Shifts)">24 Hours (Two 12hr Shifts)</option>
              <option value="24 Hours (Three 8hr Shifts)">24 Hours (Three 8hr Shifts)</option>
              <option value="Day Shift Only (8-10 Hours)">Day Shift Only (8-10 Hours)</option>
              <option value="Night Shift Only (Premises Patrolling)">Night Shift Only (Premises Patrolling)</option>
            </select>
          </div>
        </div>

        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="expectedStartDate">
              Expected Start Date <span className="req">*</span>
            </label>
            <input 
              type="date"
              id="expectedStartDate"
              name="expectedStartDate"
              value={formData.expectedStartDate}
              onChange={handleChange}
              className={`form-input ${errors.expectedStartDate ? 'has-error' : ''}`}
            />
            {errors.expectedStartDate && <span className="form-error-msg"><AlertCircle size={14} /> {errors.expectedStartDate}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Company Reference</label>
            <input 
              type="text" 
              readOnly 
              value={companyConfig.legalName}
              className="form-input"
              style={{ backgroundColor: 'var(--color-surface-elevated)', color: 'var(--color-text-muted)', cursor: 'not-allowed' }}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="additionalRequirements">
            Additional Requirements or Specific Site Instructions
          </label>
          <textarea
            id="additionalRequirements"
            name="additionalRequirements"
            rows="4"
            value={formData.additionalRequirements}
            onChange={handleChange}
            placeholder="Mention any specific instructions: e.g. Entry register requirements, night patrol logbooks, vehicle frisking, or multiple gate posts."
            className="form-textarea"
          />
        </div>

        {/* Submit action */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: '1.5rem' }}>
          <button 
            type="submit" 
            className="btn btn-primary btn-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>PROCESSING ENQUIRY...</span>
            ) : (
              <>
                <span>REQUEST DETAILED QUOTATION</span>
                <Send size={18} />
              </>
            )}
          </button>
          
          <button 
            type="button" 
            onClick={handleReset} 
            className="btn btn-secondary"
            disabled={isSubmitting}
          >
            RESET
          </button>
        </div>

        {/* Demo banner notice */}
        <div className="demo-badge-banner">
          <Info size={16} style={{ flexShrink: 0 }} />
          <span>
            <strong>Frontend Demonstration Notice:</strong> This is a client-side interface ready for future API integration. Enquiries submitted here are not stored or transmitted to a backend until a server endpoint or form service is connected. For actual inquiries, please call {companyConfig.phoneNumbers.primary} or email {companyConfig.email}.
          </span>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
