'use client';

const stats = [
  {
    value: '5.2M+',
    label: 'Warranties Registered',
    desc: 'Across India for boAt audio & wearables',
  },
  {
    value: '99.8%',
    label: 'Verification Accuracy',
    desc: 'Instant real-time database validation',
  },
  {
    value: '48 Hrs',
    label: 'Avg Turnaround Time',
    desc: 'Rapid doorstep courier pick & drop',
  },
  {
    value: '100%',
    label: 'Genuine Assurance',
    desc: 'Official boAt authentic warranty certificate',
  },
];

export default function TrustStats() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #111111 0%, #000000 100%)',
        padding: '70px 48px',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px',
          }}
        >
          {stats.map((item, index) => (
            <div
              key={item.label}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                padding: '28px 24px',
                textAlign: 'center',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(227, 30, 36, 0.4)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(2.2rem, 3.5vw, 3rem)',
                  fontWeight: 900,
                  color: '#E31E24',
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '-1px',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  marginBottom: '6px',
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  color: '#888888',
                  fontSize: '0.76rem',
                  lineHeight: 1.4,
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
