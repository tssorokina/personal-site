import React from 'react';
import Link from 'next/link';

const Index = () => (
  <article className="post" id="index">
    <header>
      <div className="title">
        <h2>
          <Link href="/">Welcome</Link>
        </h2>
        <p>
          Personal site and CV of Tatiana Sorokina – Quantitative Finance and AI Research
        </p>
      </div>
    </header>
    <p>
      I’m Tatiana, a graduate Data Scientist at BNP Paribas, in Global Markets. My work spans ML-based trading research to Agentic AI, bridging quantitative finance and modern AI systems.
    </p>
    <p>
      You can view my full <Link href="/resume">resume</Link>, or <Link href="mailto:tssorokina@edu.hse.ru">get in touch</Link>.
    </p>
  </article>
);

export default Index;
