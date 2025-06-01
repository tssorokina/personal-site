import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const Degree = ({ data }) => (
  <div className="jobs-container">
    <header>
      <h4>
        <a href={data.link} target="_blank" rel="noopener noreferrer">
          {data.school} &middot; {data.location}
        </a>
      </h4>
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexWrap: 'wrap',
      }}
      >
        <h4
          className="daterange"
          style={{
            margin: '-5px 0 0 0', // smaller space above degree
            // fontStyle: 'bold',
            textTransform: 'none',
            lineHeight: 1.2, // tighter line height
          }}
        >
          {data.degree}
        </h4>
        <p className="daterange" style={{ margin: '0 0 -5px 0' }}>
          {data.year}
        </p>
      </div>
    </header>
    {data.gpa && (
      <div style={{ marginTop: '0.25em' }}>
        GPA: {data.gpa}/{data.gpa_scale}
      </div>
    )}
    {data.description && data.description.length > 0 && (
      <ul className="points">
        {data.description.map((item) => (
          <li key={typeof item === 'string' ? item : item.text}>
            {typeof item === 'string' ? (
              <Markdown>{item}</Markdown>
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
    )}
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
