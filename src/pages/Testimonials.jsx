import React, { useState, useEffect } from 'react';
import { 
  Star, 
  CheckCircle, 
  Quote, 
  ShieldCheck, 
  Building2, 
  Lock, 
  Sparkles 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AdminTestimonialsModal from '../components/AdminTestimonialsModal';
import SEO from '../components/common/SEO';
import { testimonialService } from '../services/testimonialService';
import { companyConfig } from '../data/companyInfo';
import '../styles/testimonials.css';

const Testimonials = () => {
  const [publishedTestimonials, setPublishedTestimonials] = useState([]);
  const [allTestimonials, setAllTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    let isCurrent = true;
    const fetchData = async () => {
      try {
        const [publicItems, adminItems] = await Promise.all([
          testimonialService.getPublished(),
          testimonialService.getAllForAdmin()
        ]);
        if (isCurrent) {
          setPublishedTestimonials(publicItems || []);
          setAllTestimonials(adminItems || []);
        }
      } catch (err) {
        console.error('Failed to load testimonials:', err);
      } finally {
        if (isCurrent) setLoading(false);
      }
    };

    fetchData();
    return () => { isCurrent = false; };
  }, []);

  const reloadData = async () => {
    try {
      setLoading(true);
      const [publicItems, adminItems] = await Promise.all([
        testimonialService.getPublished(),
        testimonialService.getAllForAdmin()
      ]);
      setPublishedTestimonials(publicItems || []);
      setAllTestimonials(adminItems || []);
    } catch (err) {
      console.error('Failed to reload testimonials:', err);
    } finally {
      setLoading(false);
    }
  };

  // Admin Actions
  const handleSaveTestimonial = async (itemData) => {
    try {
      if (itemData.id) {
        await testimonialService.update(itemData.id, itemData);
      } else {
        await testimonialService.create(itemData);
      }
      await reloadData();
    } catch (err) {
      alert('Error saving testimonial: ' + err.message);
    }
  };

  const handleDeleteTestimonial = async (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      try {
        await testimonialService.delete(id);
        await reloadData();
      } catch (err) {
        alert('Error deleting testimonial: ' + err.message);
      }
    }
  };

  const handleTogglePublish = async (id, currentStatus) => {
    try {
      await testimonialService.togglePublish(id, currentStatus);
      await reloadData();
    } catch (err) {
      alert('Error updating status: ' + err.message);
    }
  };

  const handleToggleVerified = async (id, currentStatus) => {
    try {
      await testimonialService.toggleVerified(id, currentStatus);
      await reloadData();
    } catch (err) {
      alert('Error updating verified state: ' + err.message);
    }
  };

  return (
    <div className="testimonials-page">
      <SEO 
        title={`Client Testimonials | ${companyConfig.brandName}`}
        description="Authentic feedback and verified client perspectives regarding SON AGNI SECURITIES security deployments across warehouses, sites, and facilities."
      />
      {/* 1. Page Hero using standardized PageHeader */}
      <PageHeader
        accentLabel="TRUST BUILT THROUGH PROFESSIONAL SECURITY SERVICES"
        title="CLIENT TESTIMONIALS"
        description="Discover what our clients say about SON AGNI SECURITIES and our commitment to reliable security and manpower solutions."
        bgImage="/images/guard-patrol.jpg"
      />

      <div className="container">
        {/* Controls Toolbar with Admin Console Trigger */}
        <div className="testimonials-toolbar">
          <div className="toolbar-info">
            <span className="toolbar-badge">
              <Sparkles size={14} />
              <span>Verified Feedback</span>
            </span>
            <span>
              {publishedTestimonials.length} Published Review{publishedTestimonials.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="toolbar-actions">
            <button 
              type="button" 
              className="btn-admin-toggle"
              onClick={() => setIsAdminOpen(true)}
              title="Open Admin Testimonial Manager"
            >
              <Lock size={14} />
              <span>Admin Management</span>
            </button>
          </div>
        </div>

        {/* 2. Loading State */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#666' }}>
            <div className="empty-state-icon-wrap" style={{ animation: 'spin 1.5s linear infinite' }}>
              <ShieldCheck size={36} />
            </div>
            <p>Loading client reviews...</p>
          </div>
        ) : publishedTestimonials.length === 0 ? (
          /* 3. Empty State: STRICT SPEC REQUIREMENT:
             "If there are no testimonials, display a professional message:
              'Your trust inspires us. Client testimonials will appear here soon.'
              Do not create fake customer reviews." */
          <div className="testimonials-empty-state">
            <div className="empty-state-icon-wrap">
              <ShieldCheck size={36} />
            </div>
            <h2 className="empty-state-title">Client Feedback Notice</h2>
            <p className="empty-state-message">
              "Your trust inspires us. Client testimonials will appear here soon."
            </p>
            <div>
              <span className="empty-state-pill">
                <Building2 size={15} color="#C1121F" />
                <span>SON AGNI SECURITIES • Authentic Verification Policy</span>
              </span>
            </div>
          </div>
        ) : (
          /* 4. Testimonials Grid */
          <div className="testimonials-grid">
            {publishedTestimonials.map((item) => (
              <div key={item.id} className="testimonial-card">
                <div>
                  <div className="testimonial-card-top">
                    {/* Star Rating */}
                    <div className="stars-rating" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                      {[1, 2, 3, 4, 5].map((starVal) => (
                        <Star 
                          key={starVal} 
                          size={16} 
                          className={`star-icon ${starVal <= item.rating ? 'filled' : 'empty'}`} 
                        />
                      ))}
                    </div>
                    {/* Quote Icon */}
                    <div className="quote-decor">
                      <Quote size={28} />
                    </div>
                  </div>

                  {/* Testimonial Message */}
                  <p className="testimonial-message">
                    "{item.message}"
                  </p>
                </div>

                {/* Author Information */}
                <div className="testimonial-author-block">
                  {item.image_url ? (
                    <img 
                      src={item.image_url} 
                      alt={item.client_name} 
                      className="author-avatar"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <div className="author-avatar-fallback">
                      {item.client_name ? item.client_name.charAt(0).toUpperCase() : 'C'}
                    </div>
                  )}

                  <div className="author-meta">
                    <div className="author-name-row">
                      <span className="author-name">{item.client_name}</span>
                      {item.is_verified && (
                        <span className="verified-badge" title="Verified Client">
                          <CheckCircle size={15} />
                        </span>
                      )}
                    </div>
                    
                    {(item.designation || item.company_name) && (
                      <div className="author-role-company">
                        {item.designation && <span>{item.designation}</span>}
                        {item.designation && item.company_name && <span>, </span>}
                        {item.company_name && <span>{item.company_name}</span>}
                      </div>
                    )}

                    {item.testimonial_date && (
                      <div className="author-date">
                        {new Date(item.testimonial_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Admin Testimonial Modal */}
      <AdminTestimonialsModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        testimonials={allTestimonials}
        onSave={handleSaveTestimonial}
        onDelete={handleDeleteTestimonial}
        onTogglePublish={handleTogglePublish}
        onToggleVerified={handleToggleVerified}
      />
    </div>
  );
};

export default Testimonials;

