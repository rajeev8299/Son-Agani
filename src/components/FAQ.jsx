import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = ({ faqs, limit }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const displayList = limit ? faqs.slice(0, limit) : faqs;

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div className="faq-accordion">
      {displayList.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div 
            key={idx} 
            className={`faq-item ${isOpen ? 'active' : ''}`}
          >
            <button
              type="button"
              className="faq-question-btn"
              onClick={() => toggleItem(idx)}
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <div className="faq-icon">
                <ChevronDown size={18} />
              </div>
            </button>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;

