import React from 'react';

const footerStyle: React.CSSProperties = {
  padding: '2rem 1.5rem',
  backgroundColor: 'var(--hh-ink, oklch(0.18 0.01 180))',
  color: 'color-mix(in oklch, var(--hh-paper, oklch(0.99 0.005 90)) 70%, transparent)',
  fontFamily: "'Geist', sans-serif",
};

const linkStyle: React.CSSProperties = {
  color: 'color-mix(in oklch, var(--hh-paper, oklch(0.99 0.005 90)) 70%, transparent)',
  textDecoration: 'none',
  transition: 'color 0.2s',
};

const accentLinkStyle: React.CSSProperties = {
  color: 'var(--hh-accent, oklch(0.50 0.24 158))',
  textDecoration: 'none',
  transition: 'color 0.2s',
};

const NAV = [
  {
    heading: 'Community',
    links: [
      { label: 'Hacks / Hackers', href: 'https://www.hackshackers.com' },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer style={footerStyle}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {NAV.map(({ heading, links }) => (
            <div key={heading}>
              <h4 style={{
                fontWeight: 600,
                marginBottom: '0.75rem',
                color: 'var(--hh-paper, oklch(0.99 0.005 90))',
              }}>
                {heading}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      style={linkStyle}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hh-accent, oklch(0.50 0.24 158))'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'color-mix(in oklch, var(--hh-paper, oklch(0.99 0.005 90)) 70%, transparent)'; }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: '2rem',
          textAlign: 'center',
          borderTop: '1px solid color-mix(in oklch, var(--hh-paper, oklch(0.99 0.005 90)) 20%, transparent)',
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
          <p style={{ marginTop: '1.5rem', fontSize: '0.875rem' }}>
            Copyright © {new Date().getFullYear()} <a href="https://www.hackshackers.com/" style={accentLinkStyle} onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--hh-paper, oklch(0.99 0.005 90))'; }} onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--hh-accent, oklch(0.50 0.24 158))'; }}>Hacks/Hackers</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}
