import React from 'react';
import Link from 'next/link';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Education from '../src/components/Resume/Education';
import Experience from '../src/components/Resume/Experience';
// import Skills from '../src/components/Resume/Skills';
// import Courses from '../src/components/Resume/Courses';
import References from '../src/components/Resume/References';
import Cell from '../src/components/Projects/Cell';

import data from '../src/data/projects';
// import courses from '../src/data/resume/courses';
import degrees from '../src/data/resume/degrees';
import work from '../src/data/resume/work';
// import { skills, categories } from '../src/data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  // Skills: () => <Skills skills={skills} categories={categories} />,
  // Courses: () => <Courses data={courses} />,
  References: () => <References />,
};

const resumePdfUrl = '/documents/Tatiana_Sorokina_CV.pdf';

const Resume = () => (
  <article className="post" id="resume">
    <header>
      <div className="title" style={{ width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <h2 style={{ display: 'inline-block', marginRight: '1em', marginBottom: 0 }}>
            <Link href="/resume">Curriculum Vitae</Link>
          </h2>
          <a
            href={resumePdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: '0.5em' }} />
            Download CV as PDF
          </a>
        </div>
        <div className="link-container" style={{ marginTop: '0.75em' }}>
          {Object.keys(sections).map((sec) => sec !== 'References' && (
          <h4 key={sec}>
            <a href={`#${sec.toLowerCase()}`}>{sec}</a>
          </h4>
          ))}
          <h4>
            <a href="#projects-on-resume">Projects</a>
          </h4>
          <h4>
            <a href="#references">References</a>
          </h4>
        </div>
      </div>
    </header>
    {Object.entries(sections).map(([name, Section]) => (name !== 'References' ? <Section key={name} /> : null))}
    <section id="projects-on-resume">
      <div className="title">
        <h3>Research Projects and Internships</h3>
      </div>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </section>
    <section id="references">
      <div className="title" />
      <References />
    </section>
  </article>
);

export default Resume;
