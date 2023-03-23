import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <img height="400px" width="650px" src="https://user-images.githubusercontent.com/6216945/227110771-71c53663-72da-4a48-9b68-19a7e8783ff8.gif" alt="CodeGPT Chat" />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Code GPT Tutorial 📚
          </Link>
        </div>
        <br></br>
        <div className={styles.buttons}>
          <Link
            className="button button--success button--lg"
            to="vscode:extension/danielsanmedium.dscodegpt">
            Quick Install
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`AI inside your IDE`}
      description="Improve your code with Code GPT <AI />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
