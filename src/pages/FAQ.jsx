import React, { useState } from 'react';
import { faqs } from '../data';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="container section">
      <div className="text-center max-w-3xl">
        <h1 className="section-title">Frequently Asked Questions</h1>
        <p className="section-subtitle">Find quick answers to booking rules, diagnostic reports, accepted payment modes, and OPD hours.</p>
      </div>

      <div className="max-w-3xl" style={{ margin: '0 auto' }}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="faq-item">
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  {faq.q}
                </span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p style={{ margin: 0 }}>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
