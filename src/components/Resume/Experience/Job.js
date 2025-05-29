import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Job = ({
  data: {
    name, position, url, startDate, endDate, summary, highlights, more,
  },
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="jobs-container">
      <header>
        <h4>
          <a href={url}>{name}</a> - {position}
        </h4>
        <p className="daterange">
          {dayjs(startDate).format('MMMM YYYY')} -{' '}
          {endDate ? dayjs(endDate).format('MMMM YYYY') : 'PRESENT'}
        </p>
      </header>
      {summary && (
        <div className="job-summary">
          <span>{summary}</span>
        </div>
      )}
      {highlights && highlights.length > 0 && (
        <ul className="points">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}
      {more && (
        <div className="job-more" style={{marginBottom: '2em' }}>
          <button
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
    summary: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    more: PropTypes.string, // new field
  }).isRequired,
};

export default Job;
