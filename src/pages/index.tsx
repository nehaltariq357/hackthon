import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  return (
    <header className="hero hero--primary">
      <div className="container">
        <h1 className="hero__title">AI Robotics Textbook</h1>
        <p className="hero__subtitle">Physical AI & Humanoid Robotics Course</p>
        <div className="button-group button-group--block">
          <Link className="button button--secondary button--lg" to="/docs/module-1-ros2">
            Start Learning
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  const features = [
    {
      title: 'ROS 2 Fundamentals',
      description: 'Learn the robotic nervous system with ROS 2 architecture',
      link: '/docs/module-1-ros2',
    },
    {
      title: 'Digital Twins',
      description: 'Explore Gazebo and Unity simulation environments',
      link: '/docs/module-2-digital-twin',
    },
    {
      title: 'NVIDIA Isaac AI',
      description: 'Master robotics with GPU-accelerated AI capabilities',
      link: '/docs/module-3-nvidia-isaac',
    },
    {
      title: 'Vision-Language-Action',
      description: 'Integrate perception, reasoning, and action systems',
      link: '/docs/module-4-vla',
    },
    {
      title: 'Capstone Project',
      description: 'Build an autonomous humanoid robot system',
      link: '/docs/capstone-project',
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="row">
          {features.map((feature, idx) => (
            <div key={idx} className="col col--2 margin-bottom--lg">
              <div className="text--center padding-horiz--md">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link to={feature.link} className="button button--primary">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`AI Robotics Textbook`}
      description="Physical AI & Humanoid Robotics Course textbook">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}