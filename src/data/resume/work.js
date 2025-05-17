/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'BNP Paribas CIB',
    position: 'Quantitative and AI Research Intern',
    url: 'https://promptfoo.dev',
    startDate: '2025-05-01',
    summary: 'Data&AI Lab',
    highlights: [
      'Developpment of a GNN-based model for portfolio volatility hedging during earnings publication period.',
    ],
  }
];

export default work;
