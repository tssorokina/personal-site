import React from 'react';
import Link from 'next/link';

import Main from '../src/layouts/Main'; // <-- Fix the import path
import Cell from '../src/components/Projects/Cell';
import data from '../src/data/projects';

const Projects = () => (
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link href="/projects">Projects</Link>
          </h2>
          <p>A selection of my research projects</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
);

export default Projects;