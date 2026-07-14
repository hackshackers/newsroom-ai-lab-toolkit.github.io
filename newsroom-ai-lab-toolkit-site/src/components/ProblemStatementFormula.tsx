import React from 'react';

export default function ProblemStatementFormula() {
  return (
    <>
      <p className="problem-statement-formula">
        <span className="highlight-user">[User]</span> <em>needs</em> <span className="highlight-need">[need]</span> <em>so that</em> <span className="highlight-goal">[goal]</span>.
      </p>
      <ul>
        <li><strong><span className="highlight-user">User</span></strong>: <em>Who</em> is affected? (Reporter, editor, another specific role, a specific desk or team?)</li>
        <li><strong><span className="highlight-need">Need</span></strong>: <em>What</em> do they need to accomplish, avoid, or understand?</li>
        <li><strong><span className="highlight-goal">Goal</span></strong>: <em>Why</em> does it matter? What's the bigger outcome or value?</li>
      </ul>
    </>
  );
}
