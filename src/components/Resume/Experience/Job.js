import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights, more, pdfLink, descLink, location,
  },
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="jobs-container">
      <header>
        <h4>
          <a href={url}>{name}</a> - {position}
        </h4>
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap',
        }}
        >
          <p className="daterange" style={{ margin: '-10px 0 0 0' }}>
            {dayjs(startDate).format('MMMM YYYY')} - {' '}
            {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
          </p>
          {location && (
            <p className="daterange" style={{ margin: '-5px 0 5px 0', fontStyle: 'italic', textTransform: 'none' }}>
              {location}
            </p>
          )}
        </div>
      </header>
      {summary && (
        <div className="job-summary">
          <span>{summary}</span>
        </div>
      )}
      {highlights && highlights.length > 0 && (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}><Markdown>{highlight}</Markdown></li>
          ))}
        </ul>
      )}
      {more && (
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
            <Markdown>{more}</Markdown>
            {pdfLink && (
            <div style={{ marginTop: '1.5em' }}>
              <a
                href={pdfLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-link"
                style={{
                  color: '#76223F',
                  fontWeight: 'bold',
                  textDecoration: 'underline',
                }}
              >
                {descLink}
              </a>
            </div>
            )}
          </div>
          )}
        </div>
      )}
    </article>
  );
};

Job.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    location: PropTypes.string.isRequired,
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    more: PropTypes.string,
    pdfLink: PropTypes.string,
    descLink: PropTypes.string, // new field
  }),
};

Job.defaultProps = {
  data: {},
};

export default Job;
