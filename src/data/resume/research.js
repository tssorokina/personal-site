/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name        - Name of the company or institution
 * @property {string} position    - Position title
 * @property {string} url         - Company or institution website
 * @property {string} startDate   - Start date in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date in YYYY-MM-DD format (omit if still active)
 * @property {string} summary     - Brief description (location, department, etc.)
 * @property {string[]} highlights- Bulleted highlights of your work
 */
const work = [
  
  {
    name: 'Higher School of Economics',
    position: 'Teaching Assistant',
    url: 'https://www.hse.ru/',
    startDate: '2022-09-01',
    endDate: '2024-07-31',
    summary: 'Faculties of Economic and Computer Sciences, Moscow, Russia',
    highlights: [
      'Compiled and taught “Data Analysis in Python” practice sessions; prepared seminars and graded exam papers',
      'Prepared and graded assignments for “Introduction to Deep Learning” and “Applied Data Analysis Problems” – covering business-data ML, time-series, recommendation systems, sound/CV (YOLO), NLP (transformers), and generative models (GAN, VAE, diffusion)',
      'Assisted in “Macroeconomics” course: held consultations, graded assignments, and provided exam materials',
    ],
  },
  {
    title: 'Research Internship in Computational Economics',
    subtitle: 'CREST (Centre for Research in Economics and Statistics), with Pablo Winant',
    start_date: '2022-06-01',
    end_date: '2022-08-31',
    desc:
      'Extended deep-learning methods for solving dynamic economic models (TensorFlow, JAX); '
      + 'reviewed theoretical frameworks for ML in Computational Economics, contributing to article in a top-10 journal.',
  },
];

export default work;
