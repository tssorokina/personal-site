import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ContactIcons from './ContactIcons';

const SideBar = () => {
  const router = useRouter();
  const isResume = router.pathname === '/resume';

  return (
    <section id="sidebar">
      <section id="intro">
        <Link href="/" className="logo">
          <img src="/images/me.png" alt="Tatiana Sorokina" />
        </Link>
        <header>
          <h2>Tatiana Sorokina</h2>
          <p>
            <a href="mailto:tssorokina@edu.hse.ru">tssorokina@edu.hse.ru</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          Hello, I&apos;m Tatiana. I am a graduate Data Scientist at BNP Paribas,
          in Global Markets. My work spans ML-based trading research
          to Agentic AI, bridging quantitative finance and modern AI systems.
        </p>
        <ul className="actions">
          <li>
            {!isResume ? (
              <Link href="/resume" className="button">
                View Resume
              </Link>
            ) : (
              <Link href="/" className="button">
                Home
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <p className="copyright">
          &copy; Tatiana Sorokina.
        </p>
        <ContactIcons />
      </section>
    </section>
  );
};

export default SideBar;
