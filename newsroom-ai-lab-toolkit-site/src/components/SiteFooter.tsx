import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

const footerStyle: React.CSSProperties = {
  padding: '2rem 1.5rem',
  backgroundColor: 'var(--hh-ink, oklch(0.18 0.01 180))',
  color: 'color-mix(in oklch, var(--hh-paper, oklch(0.99 0.005 90)) 70%, transparent)',
  fontFamily: "'Geist', sans-serif",
};


const accentLinkStyle: React.CSSProperties = {
  color: 'var(--hh-accent, oklch(0.50 0.24 158))',
  textDecoration: 'none',
  transition: 'color 0.2s',
};


export default function SiteFooter() {
  const sponsorLogo = useBaseUrl('/img/sponsor-mcgovern.png');
  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
        }}>
          <p style={{ marginBottom: '1rem' }}>
            Questions, feedback, or ideas for improving this playbook? We'd love to hear from you.
          </p>
          <p>
            <a href="mailto:jakek@hackshackers.com" style={accentLinkStyle}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hh-paper, oklch(0.99 0.005 90))'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hh-accent, oklch(0.50 0.24 158))'; }}>
              jakek@hackshackers.com
            </a>
            {' · '}
            <a href="mailto:paige@hackshackers.com" style={accentLinkStyle}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hh-paper, oklch(0.99 0.005 90))'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hh-accent, oklch(0.50 0.24 158))'; }}>
              paige@hackshackers.com
            </a>
          </p>
        </div>
        <div style={{
          textAlign: 'center',
          borderTop: '1px solid color-mix(in oklch, var(--hh-paper, oklch(0.99 0.005 90)) 20%, transparent)',
          paddingTop: '2rem',
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ fontFamily: "'Geist', sans-serif", fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'color-mix(in oklch, var(--hh-paper, oklch(0.99 0.005 90)) 45%, transparent)', display: 'block', marginBottom: '1rem' }}>
              Supported by
            </span>
            <a href="https://www.mcgovern.org" target="_blank" rel="noopener noreferrer">
              <img src={sponsorLogo} alt="McGovern Foundation" style={{ height: '8rem', width: 'auto', objectFit: 'contain', opacity: 0.9, filter: 'brightness(0) invert(1)' }} />
            </a>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '0.875rem' }}>
            Copyright © {new Date().getFullYear()} <a href="https://www.hackshackers.com/" style={accentLinkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hh-paper, oklch(0.99 0.005 90))'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hh-accent, oklch(0.50 0.24 158))'; }}>Hacks/Hackers</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
