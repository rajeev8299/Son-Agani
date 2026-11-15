import React, { useState } from 'react';
import { Plus, Minus, Search, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/faqEditorial.css';

/**
 * EditorialFAQ - Premium Two-Column Editorial FAQ Experience
 * 
 * Features:
 * - Two-column full-width responsive editorial layout (Left: Editorial title & CTA, Right: Numbered list)
 * - Numbered questions (01, 02, ...) with subtle plus/minus toggle indicators
 * - Minimal, elegant line-based separators instead of heavy rectangular cards
 * - Accessible ARIA attributes & keyboard focus support
 * - Category filter pills + optional live instant search
 * - Preserves all original questions and answers without any invented data
 */
const EditorialFAQ = ({ faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Categorize questions smartly based on real content
  const categorizedFaqs = faqs.map((item, idx) => {
    let category = 'GENERAL';
    const qLower = item.question.toLowerCase();
    const aLower = item.answer.toLowerCase();

    if (qLower.includes('quotation') || qLower.includes('quote') || qLower.includes('hire') || qLower.includes('cost')) {
      category = 'QUOTATION & HIRING';
    } else if (qLower.includes('personnel') || qLower.includes('guard') || qLower.includes('qualification') || qLower.includes('bouncer')) {
      category = 'GUARD FORCES & DEPLOYMENT';
    } else if (qLower.includes('service') || qLower.includes('property') || qLower.includes('warehouse') || qLower.includes('event')) {
      category = 'SERVICES & COVERAGE';
    }
    return { ...item, originalIndex: idx, category };
  });

  const categories = ['ALL', 'SERVICES & COVERAGE', 'GUARD FORCES & DEPLOYMENT', 'QUOTATION & HIRING'];

  // Filter based on active category and search query
  const filteredFaqs = categorizedFaqs.filter(item => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory;
    const matchesSearch = !searchQuery.trim() || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-editorial-section" aria-label="Frequently Asked Questions">
      <div className="container-fluid-editorial">
        <div className="faq-editorial-grid">
          {/* LEFT SIDE: Editorial Masthead & Direct Consultation CTA */}
          <div className="faq-editorial-left">
            <div className="faq-editorial-sticky-box">
              <span className="faq-eyebrow">
                <HelpCircle size={14} className="eyebrow-icon" />
                <span>FREQUENT QUESTIONS & CLARIFICATIONS</span>
              </span>

              <h2 className="faq-masthead-title">
                ANSWERS TO COMMON <br className="hidden-mobile" />
                <span className="title-accent-red">SECURITY INQUIRIES</span>
              </h2>

              <p className="faq-masthead-desc">
                Clear operational guidance on static guard deployments, event marshals, nationwide service logistics, and formal commercial proposals.
              </p>

              {/* Category Filter Pills */}
              <div className="faq-category-pills" role="tablist" aria-label="FAQ Categories">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === cat}
                    className={`faq-cat-pill ${activeCategory === cat ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenIndex(0); // Open first item in selected category
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Optional Search Bar */}
              <div className="faq-search-wrap">
                <Search size={16} className="faq-search-icon" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Filter inquiries by keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="faq-search-input"
                  aria-label="Filter questions by keyword"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="faq-search-clear"
                    aria-label="Clear keyword filter"
                  >
                    &times;
                  </button>
                )}
              </div>

              {/* Direct Consultation Box */}
              <div className="faq-direct-action-card">
                <div className="faq-action-head">
                  <ShieldCheck size={20} className="action-shield" />
                  <h4>Need site-specific security assessment?</h4>
                </div>
                <p>
                  Our security consultants evaluate premises entry gates, shift rosters, and perimeter risks without delay.
                </p>
                <Link to="/contact" className="faq-action-link">
                  <span>SPEAK DIRECTLY WITH OUR TEAM</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Open Editorial Numbered List with Elegant Hairline Separators */}
          <div className="faq-editorial-right">
            {filteredFaqs.length === 0 ? (
              <div className="faq-no-results">
                <p>No questions matched your search query "{searchQuery}".</p>
                <button
                  type="button"
                  onClick={() => { setSearchQuery(''); setActiveCategory('ALL'); }}
                  className="btn btn-outline-red btn-sm"
                  style={{ marginTop: '1rem' }}
                >
                  View All Questions
                </button>
              </div>
            ) : (
              <div className="faq-editorial-list" role="region" aria-label="Question and Answer List">
                {filteredFaqs.map((item, idx) => {
                  const isOpen = openIndex === idx;
                  const itemNumber = String(idx + 1).padStart(2, '0');

                  return (
                    <div 
                      key={item.originalIndex ?? idx} 
                      className={`faq-editorial-row ${isOpen ? 'is-open' : ''}`}
                    >
                      <button
                        type="button"
                        className="faq-row-trigger"
                        onClick={() => toggleItem(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${idx}`}
                        id={`faq-question-${idx}`}
                      >
                        <div className="faq-row-label-group">
                          <span className="faq-row-number" aria-hidden="true">
                            {itemNumber}
                          </span>
                          <span className="faq-row-question-text">
                            {item.question}
                          </span>
                        </div>

                        <div className="faq-toggle-indicator" aria-hidden="true">
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>

                      <div 
                        id={`faq-answer-${idx}`}
                        role="region"
                        aria-labelledby={`faq-question-${idx}`}
                        className="faq-row-answer-panel"
                        style={{
                          maxHeight: isOpen ? '400px' : '0px',
                          opacity: isOpen ? 1 : 0
                        }}
                      >
                        <div className="faq-row-answer-inner">
                          <p className="faq-row-answer-text">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialFAQ;

