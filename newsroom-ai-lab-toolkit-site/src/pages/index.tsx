import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import NewsroomLandingPage from '@site/src/components/NewsroomLandingPage';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
>
      <NewsroomLandingPage />
    </Layout>
  );
}
