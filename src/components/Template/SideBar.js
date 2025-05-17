import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Tatiana Sorokina" />
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
        Hello, I&apos;m Tatiana. I am a final year Mathematics Master&apos;s student with a strong foundation in
        financial mathematics, risk management, and macroeconomic modeling. I'm seeking opportunities in
        Quantitative or AI Research in Financial Markets starting November 2025.
        My experience spans quantitative research, credit risk analysis, teaching, and deep learning applications
        in finance.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              View Resume
            </Link>
          ) : (
            <Link to="/" className="button">
              Home
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Tatiana Sorokina. <Link to="/">tssorokina.dev</Link>
      </p>
    </section>
  </section>
);

export default SideBar;