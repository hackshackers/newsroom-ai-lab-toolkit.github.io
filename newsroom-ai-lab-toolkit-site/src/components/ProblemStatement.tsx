import React from 'react';

const u = '#fef08a';
const n = '#bfdbfe';
const g = '#bbf7d0';

export interface Statement { user: string; verb?: 'need' | 'needs'; need: string; goal: string; note?: string }

export default function ProblemStatement({ user, verb = 'need', need, goal }: Statement) {
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
