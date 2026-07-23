'use client';
import Link from 'next/link';

export default function LandingNavbar() {
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '76px',
        background: 'rgba(13, 13, 13, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        boxSizing: 'border-box',
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <Link
        href="/"
        style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'baseline',
          gap: '10px',
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.9rem',
            fontWeight: 900,
            fontStyle: 'italic',
            letterSpacing: '-1.5px',
            lineHeight: 1,
            color: '#ffffff',
          }}
        >
          bo<span style={{ color: '#E31E24' }}>A</span>t
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.56rem',
            fontWeight: 700,
            letterSpacing: '2.8px',
            textTransform: 'uppercase',
            color: '#b0b0b0',
            lineHeight: 1,
            paddingBottom: '1px',
          }}
        >
          WARRANTY HUB
        </span>
      </Link>

      {/* Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link
          href="/login"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '8px 22px',
            height: '38px',
            background: 'transparent',
            border: '1.5px solid #333',
            borderRadius: '9px',
            color: '#ffffff',
            fontSize: '0.8rem',
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            textDecoration: 'none',
            letterSpacing: '0.1px',
            transition: 'background 0.15s, color 0.15s, border-color 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = '#0d0d0d';
            e.currentTarget.style.borderColor = '#ffffff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#ffffff';
            e.currentTarget.style.borderColor = '#333';
          }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Log In
        </Link>

        <Link
          href="/signup"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '8px 22px',
            height: '38px',
            background: '#E31E24',
            border: '1.5px solid #E31E24',
            borderRadius: '9px',
            color: '#ffffff',
            fontSize: '0.8rem',
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            textDecoration: 'none',
            letterSpacing: '0.1px',
            transition: 'background 0.15s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#c41920'; }}
          onMouseLeave={e => { e.currentTarget.style.background = '#E31E24'; }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
            <path d="M2 20c0-4 3.6-7 8-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <path d="M19 15v6M16 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
