import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree-title">{data.degree}</h4>
      <p className="school">
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          {data.school}
        </a>
      </p>
      <p className="degree-details">
        <span className="degree-year">{data.year}</span>
        {data.location && (
          <span className="degree-location"> &ndash; {data.location}</span>
        )}
      </p>
      {data.gpa && (
        <p className="degree-gpa">
          GPA: {data.gpa}{data.gpa_scale ? ` / ${data.gpa_scale}` : ''}
        </p>
      )}
    </header>
    {data.description && (
      <p className="degree-description">{data.description}</p>
    )}
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    location: PropTypes.string,
    gpa: PropTypes.string,
    gpa_scale: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default Degree;
