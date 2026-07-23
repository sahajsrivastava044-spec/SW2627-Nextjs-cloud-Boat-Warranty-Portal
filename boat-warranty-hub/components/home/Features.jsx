'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
  return (
    <section
      style={{
        background: '#f3f4f6',
        padding: 'clamp(40px, 5vw, 60px) clamp(20px, 4vw, 48px)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}
      >
        {/* Left — Where to Find Serial Number */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '28px 32px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            gridColumn: 'span 2 / span 2',
          }}
        >
          <h2
            style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              color: '#111827',
              marginBottom: '24px',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Where to Find Your Serial Number?
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap',
            }}
          >
            {/* Product Label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 240px' }}>
              <div
                style={{
                  flexShrink: 0,
                  background: '#f9fafb',
                  borderRadius: '10px',
                  width: '120px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                }}
              >
                <Image
                  src="/boat_product_label.png"
                  alt="boAt product label showing serial number"
                  width={120}
                  height={100}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
                  On Product Label
                </div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.5 }}>
                  Check the printed label on your product body or earbud charging case.
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              style={{
                width: '1px',
                height: '80px',
                background: '#e5e7eb',
                flexShrink: 0,
                display: 'block',
              }}
            />

            {/* Product Box */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '1 1 240px' }}>
              <div
                style={{
                  flexShrink: 0,
                  background: '#f9fafb',
                  borderRadius: '10px',
                  width: '120px',
                  height: '100px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  border: '1px solid #e5e7eb',
                }}
              >
                <Image
                  src="/boat_product_box.png"
                  alt="boAt product box showing barcode label"
                  width={120}
                  height={100}
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
                  On Product Box
                </div>
                <div style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.5 }}>
                  Check the barcode sticker printed on the back/side of the retail packaging.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Support Card */}
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            padding: '28px 24px',
            border: '1px solid #e5e7eb',
            boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                border: '1.5px solid rgba(227, 30, 36, 0.25)',
                background: 'rgba(227, 30, 36, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.24 2.22 2 2 0 012.24 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121 14.92z"
                  stroke="#E31E24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#111827', marginBottom: '6px' }}>
                Need Assistance?
              </h3>
              <p style={{ fontSize: '0.78rem', color: '#6b7280', lineHeight: 1.5, margin: 0 }}>
                Our customer care team is available 24/7 to resolve warranty queries.
              </p>
            </div>
          </div>

          <Link
            id="contact-support-btn"
            href="/contact"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              border: '1.5px solid #E31E24',
              color: '#E31E24',
              fontSize: '0.85rem',
              fontWeight: 700,
              padding: '12px 20px',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#E31E24';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#E31E24';
            }}
          >
            Contact Support
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
