import React from 'react';

const ink = 'oklch(0.18 0.01 180)';
const text = 'oklch(0.30 0.01 180)';
const textSec = 'oklch(0.48 0.01 180)';
const border = 'oklch(0.92 0.008 90)';
const surface = 'oklch(0.96 0.006 90)';

const Cp: React.CSSProperties = { fontFamily: "'Chakra Petch', sans-serif" };
const Fr: React.CSSProperties = { fontFamily: "'Fraunces', serif" };
const Gs: React.CSSProperties = { fontFamily: "'Geist', sans-serif" };

const TOKENS = [
  { token: 'User', bg: '#fef08a', label: 'Who is affected?',   hint: 'Reporter, editor, another specific role, a specific desk or team, the whole newsroom?' },
  { token: 'Need', bg: '#bfdbfe', label: 'What do they need?', hint: 'What do they need to accomplish, avoid, or understand?' },
  { token: 'Goal', bg: '#bbf7d0', label: 'Why does it matter?', hint: "What's the bigger outcome or value?" },
];

export default function ProblemStatementFormula() {
  return (
    <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: '0.75rem', padding: '1.25rem', margin: '1rem 0' }}>
      <p style={{ ...Cp, fontSize: 20, fontWeight: 500, margin: '0 0 1rem', lineHeight: 1.5 }}>
        <span style={{ borderRadius: 4, padding: '2px 6px', background: '#fef08a', color: ink }}>[User]</span>
        {' '}<span style={{ color: textSec, fontStyle: 'italic', fontWeight: 400 }}>needs</span>{' '}
        <span style={{ borderRadius: 4, padding: '2px 6px', background: '#bfdbfe', color: ink }}>[need]</span>
        {' '}<span style={{ color: textSec, fontStyle: 'italic', fontWeight: 400 }}>so that</span>{' '}
        <span style={{ borderRadius: 4, padding: '2px 6px', background: '#bbf7d0', color: ink }}>[goal]</span>.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {TOKENS.map(({ token, bg, label, hint }) => (
          <p key={token} style={{ ...Fr, fontSize: 17, color: text, lineHeight: 1.5, margin: 0 }}>
            <span style={{ ...Gs, fontSize: 13, fontWeight: 600, borderRadius: 4, padding: '2px 6px', marginRight: 6, background: bg, color: ink }}>{token}</span>
            <span style={{ color: textSec, fontStyle: 'italic', marginRight: 4 }}>{label}</span>
            {hint}
          </p>
        ))}
      </div>
    </div>
  );
}
