import React from 'react';

const columns = [
  {
    emoji: '😤',
    label: 'Pain points',
    items: [
      "Not everyone knows where Instagram documentation/logins live",
      "Old captions get recycled in WordPress photos",
      "Can't search many municipal agendas/minutes because software is terrible",
      "Work that takes months disappears from organizational awareness",
    ],
  },
  {
    emoji: '🐢',
    label: 'Inefficiencies & Bottlenecks',
    items: [
      "So hard to create timelines from FOIA dumps of thousands of emails",
      "I have to manually convert municipal data from PDFs/websites into spreadsheets",
      "It's total chaos when coordinating long-form stories",
    ],
  },
  {
    emoji: '🧙',
    label: 'Aspirational Capabilities',
    items: [
      "I want to be able to surface trends across state legislation",
      "I want to automatically connect House bills to historical reporting / stories",
      "I want to turn podcasts into newsletters/articles",
      "I need an impact-tracking system for fundraising and reporting that helps me tell compelling stories to funders",
    ],
  },
];

export default function ObservationExamples() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
      {columns.map(({ emoji, label, items }) => (
        <div key={label}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', marginBottom: '0.625rem' }}>
            <span style={{ fontSize: 16 }}>{emoji}</span>
            <span style={{ fontFamily: "'Geist', sans-serif", fontSize: 12, fontWeight: 600, color: 'var(--ifm-color-emphasis-600)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {items.map(text => (
              <div key={text} style={{ background: 'var(--ifm-background-color)', border: '1px solid var(--ifm-color-emphasis-200)', borderRadius: '0.5rem', padding: '0.625rem 0.75rem', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
                <p style={{ fontFamily: "'Fraunces', serif", fontSize: 14, lineHeight: 1.5, margin: 0 }}>{text}</p>
              </div>
            ))}
            <p style={{ fontFamily: "'Geist', sans-serif", fontSize: 16, color: 'var(--ifm-color-emphasis-200)', textAlign: 'center', letterSpacing: '0.3em', userSelect: 'none', margin: 0 }}>· · ·</p>
          </div>
        </div>
      ))}
    </div>
  );
}
