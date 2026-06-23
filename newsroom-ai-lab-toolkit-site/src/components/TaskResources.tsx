import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import SkillViewer from './SkillViewer';

export default function TaskResources() {
  const { frontMatter } = useDoc();
  const { coach_url, skill_url } = frontMatter as { coach_url?: string; skill_url?: string };

  if (!coach_url && !skill_url) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      {coach_url && (
        <a
          className="button button--primary button--lg"
          href={coach_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          Work with coach in ChatGPT →
        </a>
      )}
      {skill_url && <SkillViewer url={skill_url} />}
    </div>
  );
}
