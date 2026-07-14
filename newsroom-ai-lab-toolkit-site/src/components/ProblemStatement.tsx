import React from 'react';

export interface Statement { user: string; verb?: 'need' | 'needs'; need: string; goal: string; note?: string }

export default function ProblemStatement({ user, verb = 'need', need, goal }: Statement) {
  return (
    <p style={{ fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
      <span className="highlight-user">{user}</span>
      {` ${verb} `}
      <span className="highlight-need">{need}</span>
      {' so that '}
      <span className="highlight-goal">{goal}</span>.
    </p>
  );
}
