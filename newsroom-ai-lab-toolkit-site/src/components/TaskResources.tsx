import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import SkillViewer from './SkillViewer';
import { resourceButtonStyle } from './resourceButtonStyle';

export default function TaskResources() {
  const { frontMatter } = useDoc();
  const { coach_url, skill_url } = frontMatter as { coach_url?: string; skill_url?: string };

  if (!coach_url && !skill_url) return null;

  return (
    <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {coach_url && (
        <a
          href={coach_url}
          target="_blank"
          rel="noopener noreferrer"
          style={resourceButtonStyle}
        >
          <span>Work with coach in ChatGPT →</span>
        </a>
      )}
      {skill_url && <SkillViewer url={skill_url} />}
    </div>
  );
}
