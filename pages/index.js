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
      I’m Tatiana, a final-year mathematics master’s student based in Paris with experience in
      quantitative research, financial risk modeling, and deep learning. I’m currently looking
      for opportunities at the intersection of quantitative research and AI in financial markets,
      starting in <strong>November 2025</strong>.
    </p>
    <p>
      You can view my full <Link href="/resume">resume</Link>, or <Link href="/contact">get in touch</Link>.
    </p>
  </article>
);

export default Index;
