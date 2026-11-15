import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, RotateCcw, Info } from 'lucide-react';
import { companyConfig } from '../data/companyInfo';

const ContactForm = () => {
  const initialForm = {
    fullName: '',
    mobileNumber: '',
    email: '',
    subject: '',
    message: ''
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
      errs.mobileNumber = "Please enter a valid 10-digit Indian phone number (starting with 6-9)";
    }

    if (!formData.email.trim()) {
      errs.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim()) errs.message = "Message cannot be empty";
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
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
    setSubmitSuccess(false);
  };

  return (
    <div className="form-card">
      {submitSuccess && (
        <div className="feedback-alert success" role="alert">
          <CheckCircle size={22} style={{ color: '#059669', flexShrink: 0 }} />
          <div>
            <h4>Message Received (Demonstration Mode)</h4>
            <p style={{ color: '#065F46', fontSize: '0.9rem' }}>
              Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding "{formData.subject}" has been received in demonstration mode.
            </p>
            <p style={{ color: '#047857', fontSize: '0.825rem', marginTop: '0.35rem' }}>
              To reach {companyConfig.legalName} immediately, call <strong>{companyConfig.phoneNumbers.primary}</strong> or email <strong>{companyConfig.email}</strong>.
            </p>
            <div style={{ marginTop: '0.85rem' }}>
              <button type="button" onClick={handleReset} className="btn btn-secondary btn-sm">
                <RotateCcw size={14} /> Send Another Message
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-grid-2">
          <div className="form-group">
            <label className="form-label" htmlFor="contactFullName">
              Full Name <span className="req">*</span>
            </label>
            <input 
              type="text"
              id="contactFullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Alok Sharma"
              className={`form-input ${errors.fullName ? 'has-error' : ''}`}
            />
            {errors.fullName && <span className="form-error-msg"><AlertCircle size={14} /> {errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contactMobile">
              Mobile Number (India) <span className="req">*</span>
            </label>
            <input 
              type="tel"
              id="contactMobile"
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
            <label className="form-label" htmlFor="contactEmail">
              Email Address <span className="req">*</span>
            </label>
            <input 
              type="email"
              id="contactEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. alok@company.com"
              className={`form-input ${errors.email ? 'has-error' : ''}`}
            />
            {errors.email && <span className="form-error-msg"><AlertCircle size={14} /> {errors.email}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contactSubject">
              Subject <span className="req">*</span>
            </label>
            <input 
              type="text"
              id="contactSubject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g. Warehouse Guarding Enquiry in Varanasi"
              className={`form-input ${errors.subject ? 'has-error' : ''}`}
            />
            {errors.subject && <span className="form-error-msg"><AlertCircle size={14} /> {errors.subject}</span>}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contactMessage">
            Your Message / Query <span className="req">*</span>
          </label>
          <textarea
            id="contactMessage"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please write your operational requirements, facility location or questions in detail..."
            className={`form-textarea ${errors.message ? 'has-error' : ''}`}
          />
          {errors.message && <span className="form-error-msg"><AlertCircle size={14} /> {errors.message}</span>}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginTop: '1.25rem' }}>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'SENDING MESSAGE...' : (
              <>
                <span>SEND MESSAGE</span>
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
          <span>Demo Form: Messages simulate client turnaround. In production, this connects with email services or backends.</span>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
