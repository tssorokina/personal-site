import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Project = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="project-container">
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

        <p className="project-details">
          <span className="project-date">
            {dayjs(data.date).format('MMMM YYYY')}
          </span>
          {data.location && (
            <span className="project-location">
              &ndash; {data.location}
            </span>
          )}
        </p>
      </header>

      {data.image && (
        <div className="project-image">
          <img src={data.image} alt={data.title} />
        </div>
      )}

      {data.desc && (
        <p className="project-description">
          {data.desc}
        </p>
      )}

      {data.more && (
        <div className="project-more">
          <button
            type="button"
            className="read-more-btn"
            onClick={() => setExpanded((prev) => !prev)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show less' : 'Read more...'}
          </button>
          {expanded && (
            <div className="project-more-content" style={{ marginBottom: '1em' }}>
              {data.more}
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
    date: PropTypes.string.isRequired,
    location: PropTypes.string,
    image: PropTypes.string,
    desc: PropTypes.string.isRequired,
    more: PropTypes.node,
  }).isRequired,
};

export default Project;
