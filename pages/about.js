import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/about.md')
      .then((r) => r.text())
      .then(setMarkdown);
  }, []);

  const count = markdown
    ? markdown
        .split(/\s+/)
        .map((s) => s.replace(/\W/g, ''))
        .filter((s) => s.length).length
    : 0;

  return (
    <article className="post markdown" id="about">
      <header>
        <div className="title">
          <h2>
            <Link href="/about">About Me</Link>
          </h2>
          <p>(in about {count} words)</p>
        </div>
      </header>
      {markdown ? <Markdown>{markdown}</Markdown> : <p>Loading...</p>}
    </article>
  );
};

export default About;
