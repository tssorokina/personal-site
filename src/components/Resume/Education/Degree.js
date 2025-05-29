import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <div className="degree">
    <h4>
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        {data.school} &middot; {data.location}
      </a>
    </h4>
    <div className="project-subtitle">{data.degree}</div>
    <div>{data.year}</div>
    {data.gpa && (
      <div>
        GPA: {data.gpa}/{data.gpa_scale}
      </div>
    )}
    <ul>
      {data.description.map((item) => (
        <li key={typeof item === 'string' ? item : item.text}>
          {typeof item === 'string' ? (
            item
          ) : (
            <a
              className="resume-link"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={item.title}
            >
              {item.text}
            </a>
          )}
        </li>
      ))}
    </ul>
  </div>
);

Degree.propTypes = {
  data: PropTypes.shape({
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    link: PropTypes.string,
    year: PropTypes.string,
    description: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          title: PropTypes.string,
        }),
      ]),
    ),
    location: PropTypes.string,
    gpa: PropTypes.string,
    gpa_scale: PropTypes.string,
  }),
};

Degree.defaultProps = {
  data: {},
};

export default Degree;
