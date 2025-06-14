import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const Project = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  const getIcons = (markdown) => {
    const icons = [];
    if (typeof markdown === 'string') {
      if (markdown.match(/github\.com/)) {
        icons.push(
          <a
            key="github"
            href={markdown.match(/\[.*?\]\((https:\/\/github\.com[^\)]*)\)/)?.[1] || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '0.5em' }}
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        );
      }
      if (markdown.match(/\.pdf\)/)) {
        icons.push(
          <a
            key="pdf"
            href={markdown.match(/\[.*?\]\(([^)]+\.pdf)\)/)?.[1] || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '0.5em' }}
            aria-label="Download PDF"
          >
            <FontAwesomeIcon icon={faDownload} />
          </a>
        );
      }
    }
    return icons;
  };

const markdownOverrides = {
  a: {
    component: ({ children, ...props }) => {
      // If the link text is "See the project on GitHub", prepend the GitHub icon
      if (
        typeof children[0] === 'string' &&
        children[0].toLowerCase().includes('github')
      ) {
        return (
          <a {...props} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '0.3em' }} />
            {children}
          </a>
        );
      }
      // If the link text is "Download PDF of the paper", prepend the Download icon
      if (
        typeof children[0] === 'string' &&
        children[0].toLowerCase().includes('download pdf')
      ) {
        return (
          <a {...props} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: '0.3em' }} />
            {children}
          </a>
        );
      }
      // Otherwise, render the link normally
      return (
        <a {...props} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

  return (
    <article className="jobs-container">
      <header>
        <h4 className="project-title">
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
        </h4>

        {data.subtitle && (
          <p className="project-subtitle">
            {data.subtitle}
          </p>
        )}

        <div className="project-details">
          <p className="daterange" style={{ margin: '-10px 0 0 0' }}>
            {dayjs(data.StartDate).format('MMMM YYYY')} - {' '}
            {data.EndDate ? dayjs(data.EndDate).format('MMMM YYYY') : 'PRESENT'}
          </p>
          {data.location && (
            <span className="project-location">
              &ndash; {data.location}
            </span>
          )}
        </div>
      </header>

      {data.image && (
        <div className="project-image">
          <img src={data.image} alt={data.title} />
        </div>
      )}

      {data.desc && (
        <div className="job-summary">
          <Markdown>{data.desc}</Markdown>
        </div>
      )}
      
      {data.highlights && data.highlights.length > 0 && (
        <ul className="points">
          {data.highlights.map((highlight) => (
            <li key={highlight}><Markdown>{highlight}</Markdown></li>
          ))}
        </ul>
      )}

      {data.more && (
        <div className="job-more" style={{ marginBottom: '2em' }}>
          <button
            type="button"
            className="read-more-btn"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
            style={{ marginTop: '0.5em', marginBottom: '0.5em' }}
          >
            {expanded ? 'Show less' : 'Show details'}
          </button>
          {expanded && (
            <div className="job-more-content">
              <Markdown options={{ overrides: markdownOverrides }}>{data.more}</Markdown>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    StartDate: PropTypes.string.isRequired,
    EndDate: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string.isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string),
    more: PropTypes.node,
  }).isRequired,
};

export default Project;
