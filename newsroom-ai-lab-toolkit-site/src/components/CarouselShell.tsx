import React, { useState } from 'react';

interface CarouselShellProps<T> {
  items: T[];
  renderCard: (item: T, idx: number) => React.ReactNode;
}

export default function CarouselShell<T>({ items, renderCard }: CarouselShellProps<T>) {
  const [idx, setIdx] = useState(0);
  if (!items?.length) return null;
  const total = items.length;

  return (
    <div style={{ border: '2px solid #e5e4e9', borderRadius: '0.75rem', overflow: 'hidden', margin: '1.5rem 0' }}>
      <div style={{ padding: '1.5rem', display: 'grid' }}>
        {items.map((item, i) => (
          <div key={i} style={{ gridColumn: 1, gridRow: 1, visibility: i !== idx ? 'hidden' : undefined, pointerEvents: i === idx ? 'auto' : 'none' }}>
            {renderCard(item, i)}
          </div>
        ))}
      </div>
      <div style={{ borderTop: '2px solid #e5e4e9', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#f9fafb' }}>
        <button
          onClick={() => setIdx(i => Math.max(0, i - 1))}
          style={{ padding: '0.35rem 0.9rem', borderRadius: '0.375rem', border: '2px solid #e5e4e9', background: 'white', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', visibility: idx === 0 ? 'hidden' : 'visible' }}
        >
          ← Prev
        </button>
        <div style={{ flex: 1, margin: '0 1rem', height: 6, background: '#e5e4e9', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${((idx + 1) / total) * 100}%`, background: '#0db4ba', borderRadius: 3, transition: 'width 0.2s ease' }} />
        </div>
        <button
          onClick={() => setIdx(i => Math.min(total - 1, i + 1))}
          style={{ padding: '0.35rem 0.9rem', borderRadius: '0.375rem', border: '2px solid #0db4ba', background: '#0db4ba', color: 'white', cursor: 'pointer', fontWeight: 600, fontSize: '0.9rem', visibility: idx === total - 1 ? 'hidden' : 'visible' }}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
