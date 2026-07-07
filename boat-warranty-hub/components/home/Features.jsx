'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: '1fr 320px',
      gap: '20px',
      padding: '40px 48px 48px',
      background: 'var(--gray-100)',
    }}>
      {/* Left — Where to Find Serial Number */}
      <div style={{
        background: 'var(--white)',
        borderRadius: '14px',
        padding: '28px 32px',
        border: '1px solid var(--gray-200)',
      }}>
        <h2 style={{
          fontSize: '1.1rem',
          fontWeight: 800,
          color: 'var(--black)',
          marginBottom: '24px',
        }}>
          Where to find serial number?
        </h2>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* Product Label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
            <div style={{
              flexShrink: 0,
              background: 'var(--gray-100)',
              borderRadius: '10px',
              width: '130px',
              height: '110px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <Image
                src="/boat_product_label.png"
                alt="boAt product label showing serial number"
                width={130}
                height={110}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--black)', marginBottom: '6px' }}>
                On Product Label
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', lineHeight: 1.5, maxWidth: '200px' }}>
                Check the label on your product for the serial number.
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', height: '100px', background: 'var(--gray-200)', margin: '0 32px', flexShrink: 0 }} />

          {/* Product Box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
            <div style={{
              flexShrink: 0,
              background: 'var(--gray-100)',
              borderRadius: '10px',
              width: '130px',
              height: '110px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}>
              <Image
                src="/boat_product_box.png"
                alt="boAt product box showing barcode label"
                width={130}
                height={110}
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            </div>
            <div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--black)', marginBottom: '6px' }}>
                On Product Box
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gray-500)', lineHeight: 1.5, maxWidth: '200px' }}>
                Check the barcode label on the product box.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right — Need Help Card */}
      <div style={{
        background: 'var(--white)',
        borderRadius: '14px',
        padding: '28px 24px',
        border: '1px solid var(--gray-200)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '24px',
      }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
          {/* Phone Icon */}
          <div style={{
            width: '52px', height: '52px',
            borderRadius: '50%',
            border: '1.5px solid rgba(232,0,29,0.25)',
            background: 'rgba(232,0,29,0.05)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.24 2.22 2 2 0 012.24 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121 14.92z" stroke="#E8001D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--black)', marginBottom: '8px' }}>
              Need Help?
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'var(--gray-500)', lineHeight: 1.55 }}>
              Our support team is here to help you with any warranty related queries.
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
            border: '1.5px solid var(--red)',
            color: 'var(--red)',
            fontSize: '0.85rem',
            fontWeight: 700,
            padding: '12px 20px',
            borderRadius: '10px',
            textDecoration: 'none',
            transition: 'background 0.2s, color 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--red)';
            e.currentTarget.style.color = 'var(--white)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--red)';
          }}
        >
          Contact Support
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
