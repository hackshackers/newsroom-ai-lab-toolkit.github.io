import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function HomepageIntro() {
  return (
    <section className={styles.intro}>
      <div className={clsx('container', styles.introInner)}>
        <p>Newsrooms are full of observations.</p>
        <p>Things that feel harder than they should.</p>
        <p>Workflows that don't quite work.</p>
        <p>Questions that keep coming up.</p>
        <p>Ideas people are excited about but haven't had time to explore.</p>
        <p>And increasingly:</p>
        <p><em>"We think AI might help somehow."</em></p>
        <p>The challenge is that it's often difficult to tell which observations are actually worth pursuing, what problem you're really trying to solve, or where technology can genuinely help.</p>
        <p>This guide is the process we use in the Newsroom AI Lab to make sense of that uncertainty.</p>
        <p>We start by gathering observations from the people closest to the work: reporters, editors, producers, audience teams, product teams, business teams, and community members.</p>
        <p>Then we look for patterns.</p>
        <p>We narrow those observations into one thing worth exploring.</p>
        <p>Not a solution.</p>
        <p>Not a tool.</p>
        <p>Not an AI use case.</p>
        <p>Just a clearer understanding of a challenge, opportunity, or need.</p>
        <p>From there, we build a shared understanding of why it matters, who it affects, what success would look like, and what we still need to learn.</p>
        <p>Then we break that challenge into smaller, solvable parts.</p>
        <p>For each part, we ask:</p>
        <ul className={styles.featureList}>
          <li>What is happening here?</li>
          <li>What inputs and outputs are involved?</li>
          <li>Where is human judgment essential?</li>
          <li>What risks exist?</li>
          <li>What kind of support would help most?</li>
        </ul>
        <p>Sometimes the answer is AI.</p>
        <p>Sometimes it's automation.</p>
        <p>Sometimes it's a process change.</p>
        <p>Sometimes the best answer is to keep the work entirely human.</p>
        <p>The goal isn't to use AI.</p>
        <p>The goal is to understand the work deeply enough to make thoughtful decisions about what to build, test, and improve.</p>
        <p>This process was developed through real newsroom partnerships and refined through dozens of conversations, workshops, experiments, successes, dead ends, and lessons learned along the way.</p>
        <p>Inside you'll find practical exercises and frameworks to help you:</p>
        <ul className={styles.featureList}>
          <li>Start with newsroom needs, not technology</li>
          <li>Turn observations into clear needs and opportunities</li>
          <li>Build problem briefs that clarify impact and value</li>
          <li>Break complex challenges into solvable parts</li>
          <li>Evaluate whether AI is actually the right fit</li>
          <li>Define responsible requirements</li>
          <li>Prototype, test, learn, and iterate</li>
        </ul>
        <p>Start with many observations.</p>
        <p>Find one thing worth exploring.</p>
        <p>Break it into solvable parts.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/start">
            Start building →
          </Link>
        </div>
        <p>Questions, feedback, or ideas for improving this handbook? We'd love to hear from you.</p>
        <p className={styles.authors}>
          Jake Kara &amp; Paige Moody<br />
          <a href="mailto:jakek@hackshackers.com">jakek@hackshackers.com</a>
          {' '}&amp;{' '}
          <a href="mailto:paige@hackshackers.com">paige@hackshackers.com</a>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageIntro />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
