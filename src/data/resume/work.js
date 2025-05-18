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
    name: 'BNP Paribas, Global Markets',
    position: 'Quantitative Research Intern',
    url: 'https://group.bnpparibas.com/',
    startDate: '2025-05-01',
    endDate: '2025-10-31',
    summary: 'Data & AI Lab, Paris, France',
    highlights: [
      'Use Graph Neural Network to enhance stock earnings prediction by capturing asset interrelationships',
    ],
  },
  {
    name: 'BNP Paribas, Global Markets',
    position: 'Quantitative Research Intern',
    url: 'https://group.bnpparibas.com/',
    startDate: '2024-07-01',
    endDate: '2024-09-30',
    summary: 'Global Markets, Frankfurt am Main, Germany',
    highlights: [
      'Researched Stable Diffusion models for financial data generation',
      'Generated synthetic data for high-frequency algorithmic model back-testing and impact estimation',
      'Built diffusion kernels using Transformer and U-Net architectures in PyTorch',
    ],
  },
  {
    name: 'Tinkoff Bank, TCS Group',
    position: 'Risk Analyst, Revolving Credit Products',
    url: 'https://tinkoff-group.com/',
    startDate: '2023-03-01',
    endDate: '2023-08-31',
    summary: 'Credit Risk Analytics, Moscow, Russia',
    highlights: [
      'Developed and integrated a risk-free limit pricing strategy for the main credit product',
      'Maintained and extended statistical models for counter-party risk prediction',
      'Conducted AB-test sensitivity studies and built an NPV model',
      'Performed Monte Carlo stress tests on the credit portfolio',
    ],
  },
  {
    name: 'Biofarminvest Ltd.',
    position: 'Operations Manager',
    url: 'https://biofarminvest.example.com/', // replace with actual URL if available
    startDate: '2019-07-01',
    endDate: '2024-01-31',
    summary: 'Agricultural biotech startup, Ramenskoye, Russia',
    highlights: [
      'Optimised production and delivery operations; researched product-line extensions and conducted market monitoring',
      'Managed cross-border sales and relationships with international clients',
      'Negotiated research contracts and developed a client-relations system (CRS)',
    ],
  },
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
];

export default work;
