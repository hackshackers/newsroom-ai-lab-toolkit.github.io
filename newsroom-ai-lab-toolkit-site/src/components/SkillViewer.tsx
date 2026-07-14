import React, { useState } from 'react';
import { resourceButtonStyle } from './resourceButtonStyle';

export default function SkillViewer({ url }: { url: string }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggle = async () => {
    if (!open && !content) {
      setLoading(true);
      const res = await fetch(url);
      setContent(await res.text());
      setLoading(false);
    }
    setOpen(o => !o);
  };

  const copy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ marginTop: '1rem', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '0.5rem', overflow: 'hidden', fontFamily: 'var(--ifm-font-family-base)' }}>
      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls="skill-viewer-content"
        style={{ ...resourceButtonStyle, borderRadius: 0 }}
      >
        <span>Use Agent Skill in your preferred tool</span>
        <span style={{ fontSize: '0.75rem' }}>{open ? '▲ collapse' : '▼ expand'}</span>
      </button>
      {open && (
        <div id="skill-viewer-content" style={{ position: 'relative' }}>
          <button onClick={copy} style={{ position: 'absolute', top: '0.625rem', right: '0.625rem', zIndex: 1, padding: '0.2rem 0.6rem', borderRadius: '0.25rem', border: '1px solid var(--ifm-color-emphasis-300)', background: 'var(--ifm-background-color)', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 600 }}>
            {copied ? '✓ Copied' : 'Copy'}
          </button>
          <pre style={{ margin: 0, padding: '1rem', overflow: 'auto', maxHeight: '420px', fontSize: '0.8rem', lineHeight: 1.6, background: 'var(--ifm-background-surface-color)' }}>
            {loading ? 'Loading…' : content}
          </pre>
        </div>
      )}
    </div>
  );
}
