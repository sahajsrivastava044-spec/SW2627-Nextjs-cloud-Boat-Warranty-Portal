'use client';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'airdopes',
    title: 'Airdopes & TWS',
    subtitle: 'True Wireless Earbuds',
    warranty: '1 Year Brand Warranty',
    image: '/boat_earbuds.png',
    badge: 'Popular',
    desc: 'Instant replacement coverage for battery, charging & sound output issues.',
  },
  {
    id: 'rockerz',
    title: 'Rockerz Headphones',
    subtitle: 'Wireless & Overhead',
    warranty: '1 Year Warranty',
    image: '/boat_headphones.png',
    badge: 'Best Seller',
    desc: 'Full coverage for driver units, headband structure, and Bluetooth connectivity.',
  },
  {
    id: 'stone',
    title: 'Stone Speakers',
    subtitle: 'Bluetooth & Soundbars',
    warranty: '1 Year Replacement',
    image: '/boat_speakers.png',
    badge: 'Heavy Bass',
    desc: 'Water resistance seal, passive radiator, and acoustic driver protection.',
  },
  {
    id: 'wearables',
    title: 'Wave Smartwatches',
    subtitle: 'Fitness & Call Series',
    warranty: '1 Year Standard',
    image: '/boat_smartwatch.png',
    badge: 'Smart Tech',
    desc: 'Screen glass clarity, touch sensor calibration, and magnetic charger coverage.',
  },
];

export default function CategoriesGrid() {
  return (
    <section
      style={{
        background: '#0a0a0a',
        padding: 'clamp(50px, 6vw, 80px) clamp(20px, 4vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid #1f1f1f',
        borderBottom: '1px solid #1f1f1f',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-100px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(227, 30, 36, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 5vw, 52px)' }}>
          <span
            style={{
              color: '#E31E24',
              fontSize: 'clamp(0.68rem, 0.75vw, 0.78rem)',
              fontWeight: 800,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              display: 'inline-block',
              marginBottom: '8px',
            }}
          >
            COVERED PRODUCTS
          </span>
          <h2
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
              fontWeight: 900,
              letterSpacing: '-1px',
              margin: '0 0 12px 0',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            boAt Product Categories Under Warranty
          </h2>
          <p
            style={{
              color: '#a0a0a0',
              fontSize: 'clamp(0.84rem, 0.9vw, 0.96rem)',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            All official boAt audio devices, smart wearables, and soundbars come with hassle-free manufacturer warranty support across India.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
          }}
        >
          {categories.map((cat) => (
            <div
              key={cat.id}
              style={{
                background: 'linear-gradient(145deg, #141414 0%, #0d0d0d 100%)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(227, 30, 36, 0.5)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(227, 30, 36, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Top Badge */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '16px',
                }}
              >
                <span
                  style={{
                    background: 'rgba(227, 30, 36, 0.12)',
                    border: '1px solid rgba(227, 30, 36, 0.3)',
                    color: '#E31E24',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '20px',
                    letterSpacing: '0.5px',
                  }}
                >
                  {cat.badge}
                </span>

                <span
                  style={{
                    color: '#888',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      stroke="#E31E24"
                      strokeWidth="2"
                    />
                  </svg>
                  {cat.warranty}
                </span>
              </div>

              {/* Product Image Box */}
              <div
                style={{
                  height: '140px',
                  width: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '8px 0 16px 0',
                }}
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={180}
                  height={130}
                  style={{
                    objectFit: 'contain',
                    maxHeight: '100%',
                    maxWidth: '100%',
                    filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.5))',
                  }}
                />
              </div>

              {/* Title & Desc */}
              <div>
                <h3
                  style={{
                    color: '#ffffff',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    margin: '0 0 4px 0',
                  }}
                >
                  {cat.title}
                </h3>
                <div
                  style={{
                    color: '#E31E24',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    marginBottom: '8px',
                  }}
                >
                  {cat.subtitle}
                </div>
                <p
                  style={{
                    color: '#888888',
                    fontSize: '0.78rem',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {cat.desc}
                </p>
              </div>

              {/* Bottom Link */}
              <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <Link
                  href="/login"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#E31E24')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#ffffff')}
                >
                  Check Warranty Status
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
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
          ))}
        </div>
      </div>
    </section>
  );
}
