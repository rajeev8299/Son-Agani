import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight
} from 'lucide-react';
import { companyConfig } from '../data/companyInfo';
import { WhatsAppBrandIcon, PhoneHandsetIcon, EnvelopeMailIcon } from './icons/ContactIcons';
import { handleNavLinkClick } from '../utils/scroll';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const location = useLocation();

  const onLinkClick = (targetPath) => {
    handleNavLinkClick(targetPath, location.pathname);
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Company Information */}
            <div className="footer-col footer-col-company">
              <h4 className="footer-heading">Company Information</h4>
              <Link 
                to="/" 
                className="brand-logo footer-brand-logo" 
                aria-label={`${companyConfig.brandName} Home`}
                onClick={() => onLinkClick('/')}
              >
                <img 
                  src={companyConfig.logo} 
                  alt={`${companyConfig.brandName} Official Logo`} 
                  className="logo-img footer-logo-img" 
                />
                <div className="brand-text">
                  <span className="brand-title">SON AGNI <span>SECURITIES</span></span>
                  <span className="brand-subtitle">{companyConfig.tagline}</span>
                </div>
              </Link>

              <div className="footer-company-details">
                <p className="footer-entity-line">
                  <strong className="footer-detail-label">Registered Legal Entity:</strong>
                  <span className="footer-detail-value">{companyConfig.legalName}</span>
                </p>
                <p className="footer-meta-line">
                  <span className="footer-meta-tag">Category:</span> {companyConfig.businessCategory}
                </p>
              </div>

              <div className="footer-socials" aria-label="Official Communication Channels">
                <a 
                  href={companyConfig.whatsapp.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-icon-btn whatsapp-social" 
                  aria-label="Direct WhatsApp Enquiry"
                  title="WhatsApp"
                >
                  <WhatsAppBrandIcon size={24} color="#25D366" />
                </a>
                <a 
                  href={companyConfig.phoneNumbers.primaryTel} 
                  className="social-icon-btn phone-social" 
                  aria-label="Call Primary Official Phone"
                  title="Call Primary Phone"
                >
                  <PhoneHandsetIcon size={24} color="#C1121F" />
                </a>
                <a 
                  href={companyConfig.emailMailto} 
                  className="social-icon-btn email-social" 
                  aria-label="Send Official Email"
                  title="Email"
                >
                  <EnvelopeMailIcon size={24} color="#171717" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Navigation */}
            <div className="footer-col footer-col-nav">
              <h4 className="footer-heading">Quick Navigation</h4>
              <ul className="footer-nav-dual-grid">
                <li><Link to="/" onClick={() => onLinkClick('/')}><ChevronRight size={13} /> Home</Link></li>
                <li><Link to="/about" onClick={() => onLinkClick('/about')}><ChevronRight size={13} /> About Us</Link></li>
                <li><Link to="/services" onClick={() => onLinkClick('/services')}><ChevronRight size={13} /> Our Services</Link></li>
                <li><Link to="/our-guards" onClick={() => onLinkClick('/our-guards')}><ChevronRight size={13} /> Our Guards</Link></li>
                <li><Link to="/careers" onClick={() => onLinkClick('/careers')}><ChevronRight size={13} /> Careers</Link></li>
                <li><Link to="/get-a-quote" onClick={() => onLinkClick('/get-a-quote')}><ChevronRight size={13} /> Get a Quote</Link></li>
                <li><Link to="/contact" onClick={() => onLinkClick('/contact')}><ChevronRight size={13} /> Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 3: Core Services */}
            <div className="footer-col footer-col-services">
              <h4 className="footer-heading">Our Core Services</h4>
              <ul className="footer-services-list">
                {companyConfig.services.map((srv) => (
                  <li key={srv.id}>
                    <Link to={`/services/${srv.id}`} onClick={() => onLinkClick(`/services/${srv.id}`)}>
                      <ChevronRight size={13} /> <span>{srv.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Registered Office */}
            <div className="footer-col footer-col-office">
              <h4 className="footer-heading">Registered Office</h4>
              <div className="footer-office-content">
                <div className="footer-contact-item">
                  <MapPin size={17} />
                  <span className="footer-address-text">{companyConfig.registeredAddress.full}</span>
                </div>
                <div className="footer-contact-item">
                  <Phone size={17} />
                  <div className="footer-phone-group">
                    <a href={companyConfig.phoneNumbers.primaryTel} className="footer-contact-link">
                      {companyConfig.phoneNumbers.primary}
                    </a>
                    <a href={companyConfig.phoneNumbers.secondaryTel} className="footer-contact-link">
                      {companyConfig.phoneNumbers.secondary}
                    </a>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <Mail size={17} />
                  <a href={companyConfig.emailMailto} className="footer-contact-link footer-break-all">
                    {companyConfig.email}
                  </a>
                </div>

                <div className="footer-quote-action">
                  <Link 
                    to="/get-a-quote" 
                    className="btn btn-outline-red btn-sm footer-quote-btn"
                    onClick={() => onLinkClick('/get-a-quote')}
                  >
                    Request Service Quotation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <div className="footer-copyright-text">
            &copy; {currentYear} {companyConfig.legalNameUpper} (Brand: {companyConfig.brandName}). All Rights Reserved.
          </div>
          <div className="footer-legal-links">
            <Link to="/contact" onClick={() => onLinkClick('/contact')}>Privacy Policy</Link>
            <Link to="/contact" onClick={() => onLinkClick('/contact')}>Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
