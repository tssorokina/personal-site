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
    more: `
The idea behind this project was to see whether a diffusion model could be trained to generate realistic Limit Order Book (LOB) data—something that could later be used for various downstream tasks. The motivation came from a pretty common problem in production-level models used by market makers. Take, for instance, an optimal trade execution model—one that tries to decide the best time, size, and price for a trade so it gets executed quickly and cheaply.

Now, if the trade size is large enough, it might clear several levels of the book and push the price to a less favorable level. But if you train such models on historical data alone, they never really learn what effect their actions have on the price—they have no concept of market impact. As a result, they tend to make decisions that are theoretically optimal in hindsight but not in practice. So the idea is: what if we could generate synthetic data that is dynamic and reactive to agents’ behavior, but still behaves like the real thing?

The standard way of generating such data is to hand-craft an environment based on something like a stochastic differential equation (SDE), which, if well-tuned, mimics how a product moves in response to actions in the market. But this approach relies heavily on the researcher being right about how the market works—which is a big “if.”

So instead, I looked into a more flexible, non-parametric approach: using diffusion models. These models start with actual LOB data (in short time windows), then progressively add noise until all structure is gone (basically pure Gaussian noise). A neural network is then trained to reverse this process and reconstruct the original data from the noise—learning, in effect, the underlying data distribution.

The goal of this research internship was to test whether this kind of generative model could actually recreate realistic LOB behavior. A key point here is that at the level of individual order updates, the data isn't driven by macroeconomic news or trends—it’s just local interactions, which renders most standard predictive approaches pretty useless.

I experimented with various architectures—convolutional and RNN-based denoisers—and came to an interesting conclusion. Even though transformer-style models are typically the go-to for sequence data, in this case, reshaping the LOB windows into image-like matrices (centered around the mid-price at time 0) and using a standard stable diffusion model gave better results. This image-based setup allowed the model to learn the implicit logic of how the book gets cleared and filled—and it managed to reproduce the fine-grained dynamics of the LOB quite well.
`,
    pdfLink: '/documents/TS_diffusion_slides.pdf',
    descLink: 'View project presentation slides (internship report)',
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
