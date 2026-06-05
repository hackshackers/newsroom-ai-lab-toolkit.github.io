import React, { useState } from 'react';
import { usePluginData } from '@docusaurus/useGlobalData';

const u = '#fef08a';
const n = '#bfdbfe';
const g = '#bbf7d0';

interface Statement { user: string; verb?: 'need' | 'needs'; need: string; goal: string; note?: string }
interface ProblemStatementExample {
  original: Statement;
  discussion?: string;
  notes?: string[];
  questions?: string[];
  improvements: Statement[];
}

function Stmt({ user, verb = 'need', need, goal }: Statement) {
  return (
    <p style={{ fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
      <span style={{ background: u, padding: '1px 4px', borderRadius: 3 }}>{user}</span>
      {` ${verb} `}
      <span style={{ background: n, padding: '1px 4px', borderRadius: 3 }}>{need}</span>
      {' so that '}
      <span style={{ background: g, padding: '1px 4px', borderRadius: 3 }}>{goal}</span>.
    </p>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: '#6b7280',
  marginBottom: '0.4rem',
};

export default function ProblemStatementCarousel() {
  const { items } = usePluginData('load-markdown-data', 'problem-statement-examples') as { items: ProblemStatementExample[] };
  const [idx, setIdx] = useState(0);

  if (!items?.length) return null;

  const ex = items[idx];
  const total = items.length;

  return (
    <div style={{ border: '2px solid #e5e4e9', borderRadius: '0.75rem', overflow: 'hidden', margin: '1.5rem 0' }}>

      {/* Card body */}
      <div style={{ padding: '1.5rem' }}>

        {/* Original */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={labelStyle}>Original</div>
          <Stmt {...ex.original} />
        </div>

        {/* Discussion / notes */}
        {(ex.discussion || ex.notes) && (
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={labelStyle}>What could be stronger</div>
            {ex.discussion && <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem', color: '#4b5563' }}>{ex.discussion}</p>}
            {ex.notes && (
              <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {ex.notes.map((note, i) => <li key={i}>{note}</li>)}
              </ul>
            )}
          </div>
        )}

        {/* Questions */}
        {ex.questions && (
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={labelStyle}>Questions to ask</div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {ex.questions.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </div>
        )}

        {/* Improvements */}
        <div>
          <div style={labelStyle}>{ex.improvements.length === 1 ? 'Improved' : 'Improvement options'}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {ex.improvements.map((imp, i) => (
              <div key={i} style={{ background: '#f9fafb', borderRadius: '0.5rem', padding: '0.75rem' }}>
                <Stmt {...imp} />
                {imp.note && <p style={{ margin: '0.4rem 0 0', fontSize: '0.8rem', color: '#6b7280', fontStyle: 'italic' }}>{imp.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Nav footer */}
      <div style={{ borderTop: '2px solid #e5e4e9', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f9fafb' }}>
        <button
          onClick={() => setIdx(i => Math.max(0, i - 1))}
          disabled={idx === 0}
          style={{ padding: '0.35rem 0.9rem', borderRadius: '0.375rem', border: '2px solid #e5e4e9', background: 'white', cursor: idx === 0 ? 'not-allowed' : 'pointer', opacity: idx === 0 ? 0.4 : 1, fontWeight: 600, fontSize: '0.9rem' }}
        >
          ← Prev
        </button>
        <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 600 }}>
          Example {idx + 1} of {total}
        </span>
        <button
          onClick={() => setIdx(i => Math.min(total - 1, i + 1))}
          disabled={idx === total - 1}
          style={{ padding: '0.35rem 0.9rem', borderRadius: '0.375rem', border: '2px solid #0db4ba', background: '#0db4ba', color: 'white', cursor: idx === total - 1 ? 'not-allowed' : 'pointer', opacity: idx === total - 1 ? 0.4 : 1, fontWeight: 600, fontSize: '0.9rem' }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
