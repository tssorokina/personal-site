import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


const markdownOverrides = {
  a: {
    component: ({ children, ...props }) => {
      // Safely extract text from children for icon logic
      let text = '';
      if (typeof children === 'string') {
        text = children;
      } else if (Array.isArray(children)) {
        text = children
          .map(child => (typeof child === 'string' ? child : ''))
          .join('');
      } else if (children && typeof children.props === 'object' && children.props.children) {
        // If children is a React element with its own children
        if (typeof children.props.children === 'string') {
          text = children.props.children;
        }
      }

      if (text && text.toLowerCase().includes('github')) {
        return (
          <a {...props} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} style={{ marginRight: '0.3em' }} />
            {children}
          </a>
        );
      }
      if (text && text.toLowerCase().includes('download pdf')) {
        return (
          <a {...props} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDownload} style={{ marginRight: '0.3em' }} />
            {children}
          </a>
        );
      }
      return (
        <a {...props} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

const Project = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

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
