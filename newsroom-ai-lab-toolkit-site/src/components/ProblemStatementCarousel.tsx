import React, { useState } from 'react';

const u = '#fef08a';
const n = '#bfdbfe';
const g = '#bbf7d0';

interface Statement { user: string; need: string; goal: string; note?: string }
interface Example {
  original: Statement;
  discussion?: string;
  notes?: string[];
  questions?: string[];
  improvements: Statement[];
}

const EXAMPLES: Example[] = [
  {
    original: {
      user: 'weekend editors',
      need: 'a faster way to find photos',
      goal: "breaking stories aren't delayed by missing photo content",
    },
    notes: [
      '"Faster way" is a little broad — a fast but random photo wouldn\'t meet the goal since it has to be an appropriate one.',
      'Could be stronger by naming the exact friction: searching archives, confirming rights, or finding the right image under deadline pressure.',
      '"Usable" could still mean a few different things: legally cleared, relevant, high enough quality, or fast to publish.',
    ],
    improvements: [
      {
        user: 'Weekend editors',
        need: 'an efficient way to locate usable photos for breaking stories',
        goal: "breaking stories aren't delayed by missing photo content",
      },
    ],
  },
  {
    original: {
      user: 'Somewhat advanced OSINT researchers',
      need: 'to identify a weapon / weapon characteristics in a still image',
      goal: 'they can identify important information that other methods miss',
    },
    notes: [
      'The slash construction packs two slightly different tasks into one need.',
      '"Important information" is vague — the goal should explain why it matters and connect to a real outcome.',
      'Clarifying which OSINT researchers (not just skill level) makes the statement easier to design around.',
    ],
    improvements: [
      {
        user: 'Somewhat advanced OSINT researchers investigating conflict zones',
        need: 'to identify weapon characteristics in still images',
        goal: 'they can uncover evidence related to the conflict that location, metadata, or other aspects of the image do not expose',
      },
    ],
  },
  {
    original: {
      user: 'the sales team',
      need: 'a way to efficiently manage small advertising campaigns',
      goal: 'staff can focus their time on larger revenue opportunities',
    },
    discussion: '"Manage" is doing too much work. We\'d go back to the sales team to ask: is the time sink in prospecting, campaign setup, or ongoing maintenance after the sale?',
    improvements: [
      {
        user: 'The sales team',
        need: 'a more efficient way to prospect and qualify small advertising clients',
        goal: 'they can focus their time on larger revenue opportunities',
        note: 'Focuses on the front of the funnel',
      },
      {
        user: 'The sales team',
        need: 'a faster way to set up small advertising campaigns',
        goal: 'they can focus their time on larger revenue opportunities',
        note: 'Focuses on campaign setup',
      },
      {
        user: 'The sales team',
        need: 'a less manual way to support small advertising accounts after launch',
        goal: 'they can focus their time on larger revenue opportunities',
        note: 'Focuses on post-sale maintenance',
      },
    ],
  },
  {
    original: {
      user: 'Editors',
      need: "a more efficient way to provide feedback that is tailored to each reporter's strengths, weaknesses, and the collective newsroom style",
      goal: 'editing is faster, more consistent, and aligned with the newsroom\'s mission',
    },
    notes: [
      'The need bundles several different jobs: diagnosing habits, adapting coaching, and aligning to style guides.',
      'Three goals are packed into one "so that" — faster, more consistent, and mission-aligned.',
      '"Aligned with the newsroom\'s mission" is hard to actually observe in practice.',
    ],
    questions: [
      'What is the hardest part for editors right now: identifying the right feedback, phrasing it, tailoring it, or remembering prior coaching?',
      'Is the real need about personalization, consistency, or speed?',
    ],
    improvements: [
      {
        user: 'Editors',
        need: "a faster way to tailor feedback to individual reporters' recurring strengths and weaknesses",
        goal: 'they can coach reporters more consistently during the editing process',
        note: 'Narrows to one core job',
      },
      {
        user: 'Editors',
        need: 'a better way to track and apply reporter-specific feedback patterns',
        goal: 'they can edit more efficiently and support stronger reporting over time',
        note: 'Surfaces the likely underlying problem: remembering and reusing patterns over time',
      },
    ],
  },
  {
    original: {
      user: 'Student reporters',
      need: 'a way to more independently identify gaps in sourcing, missing perspectives, and opportunities for visuals',
      goal: 'they can strengthen their reporting quality before getting a human review',
    },
    notes: [
      'The need bundles three distinct kinds of editorial judgment: sourcing, perspectives, and visuals.',
      '"Strengthen their reporting quality" is directionally good but not yet observable.',
    ],
    questions: [
      'Which is the biggest pain point: sourcing gaps, missing perspectives, or missed visual opportunities?',
      'Are these really one problem, or three separate problems at the same stage?',
      'What does "more independently" mean in practice: without asking an editor first, with less back-and-forth, or with more confidence before submission?',
    ],
    improvements: [
      {
        user: 'Student reporters',
        need: 'to identify gaps in sourcing before editor review',
        goal: 'they can submit stronger first drafts',
        note: 'Isolates one specific, observable need',
      },
      {
        user: 'Student reporters',
        need: 'to spot missing perspectives in their drafts before human review',
        goal: 'they can produce more complete reporting and shorten edit cycles',
        note: '"More complete reporting" is a clearer outcome',
      },
    ],
  },
  {
    original: {
      user: 'Reporters and editors',
      need: 'a way to identify coverage gaps',
      goal: 'they can better serve the audience and community',
    },
    notes: [
      'The user is too broad — editors take a wider view while reporters focus on specific beats.',
      '"Coverage gaps" is vague: missing topics? Missing communities? Missing perspectives? Missed follow-ups?',
      '"Better serve the audience" is not yet observable — what would you actually notice improving?',
    ],
    questions: [
      'Which specific reporters and editors are feeling this most?',
      'What kind of gaps are they actually struggling to see: topics, communities, geography, sourcing, or follow-ups?',
      'How would you know this problem was improved in practice?',
    ],
    improvements: [
      {
        user: 'Beat reporters and assigning editors',
        need: 'to identify missing perspectives in ongoing coverage',
        goal: 'stories better represent the people affected by the issues',
      },
      {
        user: 'Audience and newsroom editors',
        need: 'to see where coverage is not matching community information needs',
        goal: 'they can prioritize reporting that is more relevant and useful',
      },
    ],
  },
];

function Stmt({ user, need, goal }: Statement) {
  return (
    <p style={{ fontSize: '1rem', lineHeight: 1.7, margin: 0 }}>
      <span style={{ background: u, padding: '1px 4px', borderRadius: 3 }}>{user}</span>
      {' need '}
      <span style={{ background: n, padding: '1px 4px', borderRadius: 3 }}>{need}</span>
      {' so that '}
      <span style={{ background: g, padding: '1px 4px', borderRadius: 3 }}>{goal}</span>.
    </p>
  );
}

const label: React.CSSProperties = {
  fontSize: '0.7rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: '#6b7280',
  marginBottom: '0.4rem',
};

export default function ProblemStatementCarousel() {
  const [idx, setIdx] = useState(0);
  const ex = EXAMPLES[idx];
  const total = EXAMPLES.length;

  return (
    <div style={{ border: '2px solid #e5e4e9', borderRadius: '0.75rem', overflow: 'hidden', margin: '1.5rem 0' }}>

      {/* Card body */}
      <div style={{ padding: '1.5rem' }}>

        {/* Original */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={label}>Original</div>
          <Stmt {...ex.original} />
        </div>

        {/* Discussion / notes */}
        {(ex.discussion || ex.notes) && (
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={label}>What could be stronger</div>
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
            <div style={label}>Questions to ask</div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#4b5563', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {ex.questions.map((q, i) => <li key={i}>{q}</li>)}
            </ul>
          </div>
        )}

        {/* Improvements */}
        <div>
          <div style={label}>{ex.improvements.length === 1 ? 'Improved' : 'Improvement options'}</div>
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
