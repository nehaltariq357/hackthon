import React, { JSX } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function NotFound(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Page Not Found | ${siteConfig.title}`} description="The requested page was not found">
      <main className="container margin-vert--xl">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title">Page Not Found</h1>
            <p className="hero__subtitle">We couldn't find the page you were looking for.</p>
            <div className="margin-vert--lg">
              <Link className="button button--primary button--lg" to="/">
                Back to Homepage
              </Link>
            </div>
            <div className="margin-vert--md">
              <Link className="button button--secondary button--lg" to="/docs/module-1-ros2">
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}