import React from 'react';
import PropTypes from 'prop-types';

import Degree from './Education/Degree';

const Education = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <Degree data={degree} key={degree.school} />
    ))}
  </div>
);

Education.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      link: PropTypes.string,
      year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.shape({
            text: PropTypes.string.isRequired,
            link: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
          }),
        ]),
      ),
      location: PropTypes.string,
      gpa: PropTypes.string,
      gpa_scale: PropTypes.string,
    }),
  ),
};

Education.defaultProps = {
  data: [],
};

export default Education;
