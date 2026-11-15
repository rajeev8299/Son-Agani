import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { companyConfig } from '../data/companyInfo';
import { handleNavLinkClick } from '../utils/scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prevPathRef = useRef(location.pathname);
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setMoreDropdownOpen(false);
      setMobileMoreOpen(false);
    }
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open, restore when closed
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Helper for clicking navigation links
  const onLinkClick = (targetPath) => {
    handleNavLinkClick(targetPath, location.pathname, () => {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setMoreDropdownOpen(false);
      setMobileMoreOpen(false);
    });
  };

  const morePaths = ['/our-guards', '/careers', '/testimonials', '/contact'];
  const isMoreActive = morePaths.some(p => location.pathname === p || location.pathname.startsWith(p + '/'));

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          {/* Logo with Public Brand Name */}
          <Link 
            to="/" 
            className="brand-logo" 
            aria-label={`${companyConfig.brandName} Home`}
            onClick={() => onLinkClick('/')}
          >
            <img 
              src={companyConfig.logo} 
              alt={`${companyConfig.brandName} Official Logo`} 
              className="logo-img" 
            />
            <div className="brand-text">
              <span className="brand-title">SON AGNI <span>SECURITIES</span></span>
              <span className="brand-subtitle">SECURITY & MANPOWER SERVICES</span>
            </div>
          </Link>

          {/* Desktop Navigation - 4 Options Only: HOME, ABOUT, SERVICES, MORE */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => onLinkClick('/')}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => onLinkClick('/about')}
            >
              About
            </NavLink>

            {/* Services Dropdown */}
            <div 
              className="nav-dropdown-item"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <NavLink 
                to="/services" 
                className={({ isActive }) => `nav-link dropdown-trigger ${isActive ? 'active' : ''}`}
                onClick={() => {
                  onLinkClick('/services');
                }}
              >
                Services <ChevronDown size={14} className={`dropdown-caret ${servicesDropdownOpen ? 'open' : ''}`} />
              </NavLink>
              <div className={`dropdown-menu ${servicesDropdownOpen ? 'show' : ''}`}>
                <Link 
                  to="/services" 
                  className="dropdown-link highlight"
                  onClick={() => onLinkClick('/services')}
                >
                  <span>All 5 Core Services</span>
                  <ArrowRight size={14} />
                </Link>
                {companyConfig.services.map((srv) => (
                  <Link 
                    key={srv.id} 
                    to={`/services/${srv.id}`} 
                    className="dropdown-link"
                    onClick={() => onLinkClick(`/services/${srv.id}`)}
                  >
                    {srv.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* More Dropdown (Our Guards, Careers, Testimonials, Contact) */}
            <div 
              className="nav-dropdown-item more-dropdown-item"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button
                type="button"
                className={`nav-link dropdown-trigger more-trigger ${isMoreActive ? 'active' : ''}`}
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                aria-expanded={moreDropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <ChevronDown size={14} className={`dropdown-caret ${moreDropdownOpen ? 'open' : ''}`} />
              </button>
              <div className={`dropdown-menu more-dropdown-menu ${moreDropdownOpen ? 'show' : ''}`}>
                <NavLink 
                  to="/our-guards" 
                  className={({ isActive }) => `dropdown-link ${isActive ? 'active-dropdown-link' : ''}`}
                  onClick={() => onLinkClick('/our-guards')}
                >
                  <span>Our Guards</span>
                  <ArrowRight size={14} />
                </NavLink>
                <NavLink 
                  to="/careers" 
                  className={({ isActive }) => `dropdown-link ${isActive ? 'active-dropdown-link' : ''}`}
                  onClick={() => onLinkClick('/careers')}
                >
                  <span>Careers</span>
                  <ArrowRight size={14} />
                </NavLink>
                <NavLink 
                  to="/testimonials" 
                  className={({ isActive }) => `dropdown-link ${isActive ? 'active-dropdown-link' : ''}`}
                  onClick={() => onLinkClick('/testimonials')}
                >
                  <span>Testimonials</span>
                  <ArrowRight size={14} />
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `dropdown-link ${isActive ? 'active-dropdown-link' : ''}`}
                  onClick={() => onLinkClick('/contact')}
                >
                  <span>Contact</span>
                  <ArrowRight size={14} />
                </NavLink>
              </div>
            </div>
          </nav>

          {/* Header Action Button */}
          <div className="header-actions">
            <Link 
              to="/get-a-quote" 
              className="btn btn-primary btn-sm header-quote-btn"
              onClick={() => onLinkClick('/get-a-quote')}
            >
              <span>GET A QUOTE</span>
              <ArrowRight size={15} />
            </Link>

            {/* Mobile menu toggle */}
            <button 
              type="button" 
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop */}
      <div 
        className={`drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`} 
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true">
        <div className="drawer-header">
          <Link 
            to="/"
            className="brand-logo"
            onClick={() => onLinkClick('/')}
            style={{ textDecoration: 'none' }}
          >
            <img 
              src={companyConfig.logo} 
              alt={companyConfig.brandName} 
              className="logo-img" 
              style={{ width: 42, height: 42 }}
            />
            <div className="brand-text">
              <span className="brand-title" style={{ fontSize: '1rem' }}>SON AGNI <span>SECURITIES</span></span>
              <span className="brand-subtitle" style={{ fontSize: '0.6rem' }}>SECURITY & MANPOWER</span>
            </div>
          </Link>
          <button 
            type="button" 
            className="drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="drawer-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => onLinkClick('/')}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => `drawer-link ${isActive ? 'active' : ''}`}
            onClick={() => onLinkClick('/about')}
          >
            About Us
          </NavLink>
          
          <div>
            <button 
              type="button"
              className="drawer-link drawer-accordion-btn"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              <span>Our Services ({companyConfig.services.length})</span>
              <ChevronDown size={16} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {servicesDropdownOpen && (
              <div className="drawer-sub-links">
                <Link 
                  to="/services" 
                  className="drawer-sub-link highlight"
                  onClick={() => onLinkClick('/services')}
                >
                  Overview & All Services
                </Link>
                {companyConfig.services.map((srv) => (
                  <Link 
                    key={srv.id} 
                    to={`/services/${srv.id}`} 
                    className="drawer-sub-link"
                    onClick={() => onLinkClick(`/services/${srv.id}`)}
                  >
                    {srv.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* More Expandable Section on Mobile */}
          <div>
            <button 
              type="button"
              className={`drawer-link drawer-accordion-btn ${isMoreActive ? 'active' : ''}`}
              onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
            >
              <span>More Options ({morePaths.length})</span>
              <ChevronDown size={16} style={{ transform: mobileMoreOpen ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {mobileMoreOpen && (
              <div className="drawer-sub-links">
                <NavLink 
                  to="/our-guards" 
                  className={({ isActive }) => `drawer-sub-link ${isActive ? 'highlight' : ''}`}
                  onClick={() => onLinkClick('/our-guards')}
                >
                  Our Guards
                </NavLink>
                <NavLink 
                  to="/careers" 
                  className={({ isActive }) => `drawer-sub-link ${isActive ? 'highlight' : ''}`}
                  onClick={() => onLinkClick('/careers')}
                >
                  Careers
                </NavLink>
                <NavLink 
                  to="/testimonials" 
                  className={({ isActive }) => `drawer-sub-link ${isActive ? 'highlight' : ''}`}
                  onClick={() => onLinkClick('/testimonials')}
                >
                  Testimonials
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `drawer-sub-link ${isActive ? 'highlight' : ''}`}
                  onClick={() => onLinkClick('/contact')}
                >
                  Contact
                </NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="drawer-footer">
          <Link 
            to="/get-a-quote" 
            className="btn btn-primary drawer-quote-btn"
            onClick={() => onLinkClick('/get-a-quote')}
          >
            <span>GET A QUOTE</span>
            <ArrowRight size={15} />
          </Link>
          <div className="drawer-contact-info">
            <span className="drawer-contact-label">Official Support Line</span>
            <a href={companyConfig.phoneNumbers.primaryTel} className="drawer-contact-phone">
              <PhoneCall size={14} />
              <span>{companyConfig.phoneNumbers.primary}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
