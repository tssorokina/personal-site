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
          <img src={`/images/me.png`} alt="Tatiana Sorokina" />
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
          Hello, I&apos;m Tatiana. I am a recent graduate of Mathematics Master&apos;s from
          TSE (France) with a strong foundation in financial mathematics, credit risk management,
          and macroeconomic modeling. I&apos;m seeking opportunities in Quantitative or AI Research
          in Financial Markets starting November 2025.
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
