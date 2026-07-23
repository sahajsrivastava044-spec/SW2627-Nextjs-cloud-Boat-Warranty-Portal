'use client';
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How do I check if my boAt product is still under warranty?',
    a: 'Simply enter your product serial number in the search bar at the top of this page. Our instant lookup tool will check the manufacture date, purchase date, and remaining warranty period in real time.',
  },
  {
    q: 'What is covered under the boAt 1-Year Limited Warranty?',
    a: 'The warranty covers manufacturing defects, internal component failures, driver unit malfunction, Bluetooth connectivity issues, and battery charging defects under normal usage.',
  },
  {
    q: 'What documents are required to claim warranty or replacement?',
    a: 'You need your product serial number and proof of purchase (tax invoice or order invoice from boAt website, Amazon, Flipkart, or authorized retailers).',
  },
  {
    q: 'Is doorstep pick and drop service available for warranty repair?',
    a: 'Yes! boAt offers free doorstep pick and drop courier services across 18,000+ pincodes in India for eligible warranty claims.',
  },
  {
    q: 'Where can I find the serial number on my boAt device or box?',
    a: 'The 10 to 14 digit serial number is printed on the barcode sticker of the original product box, on the charging case bottom (for earbuds), or on the headband inner arm (for headphones).',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      style={{
        background: '#f9fafb',
        padding: '80px 48px',
        position: 'relative',
        borderTop: '1px solid #e5e7eb',
      }}
    >
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span
            style={{
              color: '#E31E24',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '10px',
            }}
          >
            GOT QUESTIONS?
          </span>
          <h2
            style={{
              color: '#111827',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.5rem)',
              fontWeight: 900,
              letterSpacing: '-1px',
              margin: '0 0 12px 0',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Frequently Asked Questions
          </h2>
          <p
            style={{
              color: '#6b7280',
              fontSize: '0.92rem',
              margin: 0,
            }}
          >
            Everything you need to know about boAt warranty coverage, registration, and claims.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: isOpen ? '1.5px solid #E31E24' : '1px solid #e5e7eb',
                  boxShadow: isOpen ? '0 4px 16px rgba(227, 30, 36, 0.08)' : '0 1px 3px rgba(0,0,0,0.02)',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.96rem',
                      fontWeight: 700,
                      color: isOpen ? '#E31E24' : '#111827',
                      fontFamily: "'Inter', sans-serif",
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(227, 30, 36, 0.1)' : '#f3f4f6',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.25s ease, background 0.2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 4l4 4 4-4"
                        stroke={isOpen ? '#E31E24' : '#4b5563'}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px 24px',
                      color: '#4b5563',
                      fontSize: '0.88rem',
                      lineHeight: 1.65,
                      borderTop: '1px solid #f3f4f6',
                      paddingTop: '16px',
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* View All FAQs Link */}
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link
            href="/faq"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#E31E24',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              padding: '10px 22px',
              borderRadius: '8px',
              background: 'rgba(227, 30, 36, 0.06)',
              border: '1px solid rgba(227, 30, 36, 0.2)',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E31E24';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(227, 30, 36, 0.06)';
              e.currentTarget.style.color = '#E31E24';
            }}
          >
            Have more questions? Read Full FAQ Knowledge Base
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
