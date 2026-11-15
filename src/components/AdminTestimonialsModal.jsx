import React, { useState, useEffect } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  Edit3, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  Star, 
  ShieldCheck,
  List,
  MessageSquare,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { reviewService } from '../services/reviewService';

const AdminTestimonialsModal = ({ 
  isOpen, 
  onClose, 
  testimonials = [], 
  onSave, 
  onDelete, 
  onTogglePublish,
  onToggleVerified 
}) => {
  const [panelSection, setPanelSection] = useState('testimonials'); // 'testimonials' | 'reviews'
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'add' | 'edit'
  const [editingId, setEditingId] = useState(null);

  // Reviews state for admin moderation
  const [adminReviews, setAdminReviews] = useState([]);
  const [loadingReviews, setLoadingReviews] = useState(false);

  const fetchAdminReviews = async () => {
    try {
      setLoadingReviews(true);
      const revs = await reviewService.getAllReviewsForAdmin();
      setAdminReviews(revs);
    } catch (err) {
      console.error('Error fetching admin reviews:', err);
    } finally {
      setLoadingReviews(false);
    }
  };

  useEffect(() => {
    if (isOpen && panelSection === 'reviews') {
      fetchAdminReviews();
    }
  }, [isOpen, panelSection]);

  // Form State for Testimonials
  const initialForm = {
    client_name: '',
    company_name: '',
    designation: '',
    message: '',
    rating: 5,
    image_url: '',
    testimonial_date: new Date().toISOString().split('T')[0],
    is_verified: true,
    is_published: true,
    display_order: 0
  };

  const [formData, setFormData] = useState(initialForm);

  if (!isOpen) return null;

  const handleEditClick = (item) => {
    setEditingId(item.id);
    setFormData({
      client_name: item.client_name || '',
      company_name: item.company_name || '',
      designation: item.designation || '',
      message: item.message || '',
      rating: item.rating || 5,
      image_url: item.image_url || '',
      testimonial_date: item.testimonial_date || new Date().toISOString().split('T')[0],
      is_verified: Boolean(item.is_verified),
      is_published: item.is_published !== undefined ? Boolean(item.is_published) : true,
      display_order: item.display_order || 0
    });
    setActiveTab('edit');
  };

  const handleAddNewClick = () => {
    setEditingId(null);
    setFormData(initialForm);
    setActiveTab('add');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.client_name.trim() || !formData.message.trim()) {
      alert('Please fill in Client Name and Testimonial Message.');
      return;
    }

    onSave({
      ...formData,
      id: editingId || undefined
    });

    setActiveTab('list');
    setEditingId(null);
    setFormData(initialForm);
  };

  // Review Actions
  const handleApproveReview = async (id) => {
    try {
      await reviewService.approveReview(id);
      await fetchAdminReviews();
    } catch (err) {
      alert('Error approving review: ' + err.message);
    }
  };

  const handleRejectReview = async (id) => {
    try {
      await reviewService.rejectReview(id);
      await fetchAdminReviews();
    } catch (err) {
      alert('Error rejecting review: ' + err.message);
    }
  };

  const handleDeleteReview = async (id) => {
    if (window.confirm('Are you sure you want to delete this review permanently?')) {
      try {
        await reviewService.deleteReview(id);
        await fetchAdminReviews();
      } catch (err) {
        alert('Error deleting review: ' + err.message);
      }
    }
  };

  return (
    <div className="admin-overlay" role="dialog" aria-modal="true">
      <div className="admin-modal-card">
        {/* Header */}
        <div className="admin-modal-header">
          <div>
            <div className="admin-modal-title">
              <ShieldCheck size={22} color="#C1121F" />
              <span>Admin Management Console</span>
            </div>
            <div className="admin-modal-subtitle">
              SON AGNI SECURITIES • Testimonials & Homepage Reviews Moderation
            </div>
          </div>
          <button 
            type="button" 
            className="admin-close-btn" 
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Section Switcher: Testimonials vs Reviews */}
        <div style={{ padding: '0.75rem 2rem', background: '#F3F4F6', display: 'flex', gap: '0.75rem', borderBottom: '1px solid #E5E7EB' }}>
          <button
            type="button"
            className={`admin-tab-btn ${panelSection === 'testimonials' ? 'active' : ''}`}
            onClick={() => setPanelSection('testimonials')}
          >
            <List size={16} style={{ display: 'inline', marginRight: '6px' }} />
            Page Testimonials ({testimonials.length})
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${panelSection === 'reviews' ? 'active' : ''}`}
            onClick={() => setPanelSection('reviews')}
          >
            <MessageSquare size={16} style={{ display: 'inline', marginRight: '6px' }} />
            Homepage Client Reviews ({adminReviews.length})
          </button>
        </div>

        {/* Body */}
        <div className="admin-modal-body">
          {panelSection === 'testimonials' ? (
            <>
              {/* Testimonials Tabs */}
              <div className="admin-tabs">
                <button 
                  type="button" 
                  className={`admin-tab-btn ${activeTab === 'list' ? 'active' : ''}`}
                  onClick={() => setActiveTab('list')}
                >
                  <List size={16} style={{ display: 'inline', marginRight: '6px' }} />
                  Manage All ({testimonials.length})
                </button>
                <button 
                  type="button" 
                  className={`admin-tab-btn ${activeTab === 'add' ? 'active' : ''}`}
                  onClick={handleAddNewClick}
                >
                  <Plus size={16} style={{ display: 'inline', marginRight: '6px' }} />
                  Add New Testimonial
                </button>
                {activeTab === 'edit' && (
                  <button 
                    type="button" 
                    className="admin-tab-btn active"
                  >
                    <Edit3 size={16} style={{ display: 'inline', marginRight: '6px' }} />
                    Edit Testimonial
                  </button>
                )}
              </div>

              {/* Tab 1: List View */}
              {activeTab === 'list' && (
                <div>
                  {testimonials.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#6B7280' }}>
                      <p style={{ fontSize: '1.05rem', fontWeight: 600 }}>No testimonials found in database.</p>
                      <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
                        Click "Add New Testimonial" to enter client feedback.
                      </p>
                    </div>
                  ) : (
                    <div className="admin-items-list">
                      {testimonials.map((item) => (
                        <div key={item.id} className="admin-item-card">
                          <div className="admin-item-main">
                            {item.image_url ? (
                              <img 
                                src={item.image_url} 
                                alt={item.client_name} 
                                className="admin-item-avatar" 
                              />
                            ) : (
                              <div className="admin-item-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                                {item.client_name.charAt(0)}
                              </div>
                            )}
                            <div className="admin-item-details">
                              <div className="admin-item-name">
                                <span>{item.client_name}</span>
                                {item.is_verified && (
                                  <CheckCircle size={14} color="#10B981" />
                                )}
                                <span className={`admin-badge-status ${item.is_published ? 'published' : 'draft'}`}>
                                  {item.is_published ? 'PUBLISHED' : 'DRAFT / HIDDEN'}
                                </span>
                              </div>
                              <div className="admin-item-sub">
                                {item.company_name ? `${item.company_name} • ` : ''}
                                Rating: {item.rating}/5 ★ • Order: #{item.display_order} • Date: {item.testimonial_date}
                              </div>
                            </div>
                          </div>

                          <div className="admin-item-actions">
                            <button 
                              type="button" 
                              className="btn-icon-action" 
                              title={item.is_published ? "Unpublish" : "Publish"}
                              onClick={() => onTogglePublish(item.id, item.is_published)}
                            >
                              {item.is_published ? <Eye size={16} /> : <EyeOff size={16} color="#DC2626" />}
                            </button>

                            <button 
                              type="button" 
                              className="btn-icon-action" 
                              title={item.is_verified ? "Mark unverified" : "Mark verified"}
                              onClick={() => onToggleVerified(item.id, item.is_verified)}
                            >
                              <ShieldCheck size={16} color={item.is_verified ? "#10B981" : "#9CA3AF"} />
                            </button>

                            <button 
                              type="button" 
                              className="btn-icon-action" 
                              title="Edit"
                              onClick={() => handleEditClick(item)}
                            >
                              <Edit3 size={16} />
                            </button>

                            <button 
                              type="button" 
                              className="btn-icon-action danger" 
                              title="Delete"
                              onClick={() => {
                                if (window.confirm(`Delete testimonial from "${item.client_name}"?`)) {
                                  onDelete(item.id);
                                }
                              }}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2 & 3: Add / Edit Form */}
              {(activeTab === 'add' || activeTab === 'edit') && (
                <form onSubmit={handleSubmit} className="admin-form-grid">
                  <div className="admin-field-group">
                    <label className="admin-field-label">Client Name *</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      placeholder="e.g. Ramesh Chandra Verma"
                      value={formData.client_name}
                      onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                      required 
                    />
                  </div>

                  <div className="admin-field-group">
                    <label className="admin-field-label">Company / Organization</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      placeholder="e.g. Varanasi Logistics Hub"
                      value={formData.company_name}
                      onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    />
                  </div>

                  <div className="admin-field-group">
                    <label className="admin-field-label">Designation</label>
                    <input 
                      type="text" 
                      className="admin-input" 
                      placeholder="e.g. General Manager Operations"
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    />
                  </div>

                  <div className="admin-field-group">
                    <label className="admin-field-label">Rating *</label>
                    <select 
                      className="admin-select"
                      value={formData.rating}
                      onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                    >
                      <option value={5}>★★★★★ (5 Stars)</option>
                      <option value={4}>★★★★☆ (4 Stars)</option>
                      <option value={3}>★★★☆☆ (3 Stars)</option>
                      <option value={2}>★★☆☆☆ (2 Stars)</option>
                      <option value={1}>★☆☆☆☆ (1 Star)</option>
                    </select>
                  </div>

                  <div className="admin-field-group">
                    <label className="admin-field-label">Photo / Logo URL</label>
                    <input 
                      type="url" 
                      className="admin-input" 
                      placeholder="https://..."
                      value={formData.image_url}
                      onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
                    />
                  </div>

                  <div className="admin-field-group">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <div>
                        <label className="admin-field-label">Date</label>
                        <input 
                          type="date" 
                          className="admin-input" 
                          value={formData.testimonial_date}
                          onChange={(e) => setFormData({ ...formData, testimonial_date: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="admin-field-label">Order #</label>
                        <input 
                          type="number" 
                          className="admin-input" 
                          value={formData.display_order}
                          onChange={(e) => setFormData({ ...formData, display_order: Number(e.target.value) })}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="admin-field-group form-full-col">
                    <label className="admin-field-label">Message *</label>
                    <textarea 
                      className="admin-textarea" 
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-full-col admin-checkbox-group">
                    <label className="admin-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.is_published}
                        onChange={(e) => setFormData({ ...formData, is_published: e.target.checked })}
                      />
                      <span>Publish on /testimonials</span>
                    </label>

                    <label className="admin-checkbox-label">
                      <input 
                        type="checkbox" 
                        checked={formData.is_verified}
                        onChange={(e) => setFormData({ ...formData, is_verified: e.target.checked })}
                      />
                      <span>Mark Verified Client</span>
                    </label>
                  </div>

                  <div className="form-full-col" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                    <button 
                      type="button" 
                      className="btn-admin-cancel"
                      onClick={() => setActiveTab('list')}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="btn-admin-save"
                    >
                      {activeTab === 'edit' ? 'Update Testimonial' : 'Save Testimonial'}
                    </button>
                  </div>
                </form>
              )}
            </>
          ) : (
            /* Panel Section: Reviews Moderation */
            <div>
              <div style={{ marginBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#171717' }}>
                  Homepage Reviews & Moderation Queue
                </h4>
                <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>
                  {adminReviews.filter(r => r.is_approved).length} Approved / {adminReviews.length} Total
                </span>
              </div>

              {loadingReviews ? (
                <div style={{ textAlign: 'center', padding: '2rem' }}>Loading reviews...</div>
              ) : adminReviews.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#6B7280' }}>
                  <p style={{ fontSize: '1rem', fontWeight: 600 }}>No submitted client reviews in the queue.</p>
                  <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
                    Reviews submitted via the homepage "WRITE A REVIEW" modal will arrive here for approval.
                  </p>
                </div>
              ) : (
                <div className="admin-items-list">
                  {adminReviews.map((rev) => (
                    <div key={rev.id} className="admin-item-card">
                      <div className="admin-item-main">
                        <div className="admin-item-avatar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                          {rev.customer_name ? rev.customer_name.charAt(0) : 'R'}
                        </div>
                        <div className="admin-item-details">
                          <div className="admin-item-name">
                            <span>{rev.customer_name}</span>
                            <span className={`admin-badge-status ${rev.is_approved ? 'published' : 'draft'}`}>
                              {rev.is_approved ? 'APPROVED & VISIBLE' : 'PENDING APPROVAL'}
                            </span>
                          </div>
                          <div className="admin-item-sub">
                            {rev.company_name ? `${rev.company_name} • ` : ''}
                            Rating: {rev.rating}/5 ★ • Submitted: {new Date(rev.created_at).toLocaleDateString()}
                          </div>
                          <p style={{ fontSize: '0.85rem', color: '#374151', marginTop: '0.4rem', fontStyle: 'italic' }}>
                            "{rev.review_message}"
                          </p>
                        </div>
                      </div>

                      <div className="admin-item-actions">
                        {rev.is_approved ? (
                          <button 
                            type="button" 
                            className="btn-icon-action" 
                            title="Unapprove / Reject Review"
                            onClick={() => handleRejectReview(rev.id)}
                          >
                            <ThumbsDown size={16} color="#DC2626" />
                          </button>
                        ) : (
                          <button 
                            type="button" 
                            className="btn-icon-action" 
                            title="Approve Review for Homepage Slider"
                            onClick={() => handleApproveReview(rev.id)}
                            style={{ background: '#D1FAE5', borderColor: '#10B981' }}
                          >
                            <ThumbsUp size={16} color="#059669" />
                          </button>
                        )}

                        <button 
                          type="button" 
                          className="btn-icon-action danger" 
                          title="Delete Review Permanently"
                          onClick={() => handleDeleteReview(rev.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTestimonialsModal;
