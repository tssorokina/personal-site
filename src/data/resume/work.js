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
    name: 'BNP Paribas, Data&AI Lab at Global Markets',
    position: 'Quantitative Research Intern',
    url: 'https://group.bnpparibas.com/',
    startDate: '2025-05-01',
    endDate: '2025-10-31',
    summary: 'End of studies 6-month research internship',
    location: ' Paris, France',
    highlights: [
      'Use Graph Neural Network to enhance stock earnings prediction by capturing asset interrelationships',
    ],
  },
  {
    name: 'BNP Paribas, Data&AI Lab at Global Markets',
    position: 'Quantitative Research Intern',
    url: 'https://group.bnpparibas.com/',
    startDate: '2024-07-01',
    endDate: '2024-09-30',
    location: ' Frankfurt am Main, Germany',
    highlights: [
      'Researched Stable Diffusion models for financial data generation',
      'Generated synthetic data for high-frequency algorithmic model back-testing and impact estimation',
      'Built diffusion kernels using Transformer and U-Net architectures in PyTorch',
    ],
    more: `
## Synthetic LOB Generation with Stable Diffusion
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
    location: ' Moscow, Russia',
    summary: 'Credit Risk Analytics',
    highlights: [
      'Developed and integrated a risk-free limit pricing strategy for the main credit product',
      'Maintained and extended statistical models for counter-party risk prediction',
      'Conducted AB-test sensitivity studies and built an NPV model',
      'Performed Monte Carlo stress tests on the credit portfolio',
    ],
    more: `
## Risk-Neutral Pricing via Randomised A/B Testing
I worked in the Risk Analytics team at Tinkoff, focusing on the revolver credit products portfolio. Day-to-day, we calibrated and monitored models of client behaviour. Each client was essentially treated as a separate project, exhibiting behavioural patterns similar to others with comparable characteristics. These behavioural models were built on vintages of past clients and regularly recalibrated against the most recent cohorts.
My team conducted monthly calibrations and stress tests on the entire client portfolio for a given product, to ensure that the overall risk exposure remained within acceptable limits and that the required return targets were being met.

My main project was the development of a new risk-neutral pricing scheme using a randomised A/B testing framework. Instead of assigning clients the usual predetermined product terms (such as interest rate, credit limit, repayment schedule, etc.), we introduced randomisation into these parameters for a portion of the clients. This created an ideal setup for applying econometric tools like Difference-in-Differences or Synthetic Control.

The core hypothesis was that for clients with certain risk profiles, there might be more effective product terms that lead to a lower overall default rate. The test group received product terms that were randomly varied, while the control group continued under the existing pricing strategy. If the treatment had been categorical (e.g. a “yes/no” change), we could have simply run a standard RCT. But since our “treatment” involved continuous variation—like sampling an interest rate from a range or applying a random multiplier to the standard rate—analysing the outcome became significantly more complex.

To handle this, I developed a propensity score framework to estimate the likelihood of a client receiving a “higher” treatment, based on their characteristics. This was viable because only part of the new product terms were randomised; the rest still depended on fundamental client features. Using this score, I grouped clients into strata with similar treatment probabilities. Within these groups, I was then able to compare outcomes using straightforward RCT logic—assessing how the new pricing terms influenced client behaviour.

Off the back of the test results, I worked closely with senior risk managers to identify more effective pricing terms and propose a revised product strategy. We rolled out the new scheme in production, again using an A/B test to measure its impact on client behaviour in real-world conditions.`,
  },
  {
    name: 'Biofarminvest Ltd.',
    position: 'Operations Manager',
    url: 'https://ribav.ru/', // replace with actual URL if available
    startDate: '2019-07-01',
    endDate: '2024-01-31',
    location: ' Ramenskoye, Russia',
    summary: 'Agricultural biotech startup',
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
    location: ' Moscow, Russia',
    summary: 'Taught courses at Faculties of Economic and Computer Sciencesas assisant to the lecturer and as a composer of practice sessions.',
    highlights: [
      'Compiled and taught [“Data Analysis in Python”  practice sessions](https://youtube.com/playlist?list=PLgt6p-DpESX4dl2n-yAZPK4bRRCw-rVPH&si=DSjs8TfIvG01eswb); prepared seminars and quizes, graded exam papers. Topics included: Data scraping and Analysis, Data Visualisation, Statistical Inference, Regression Analysis, Time-Series Analysis, Machine Learning',
      'Prepared and graded assignments for “Introduction to Deep Learning” and “Applied Data Analysis Problems” (lecturer [Evgeny Sokolov](https://www.hse.ru/en/staff/esokolov/)) Topics included: Introduction to Neural Networks, Convolutional Neural Networks, Recurrent Neural Networks, Computer Vision (models of pixel segmentation and object detection), Transformers, Attention Mechanisms, Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), A/B-tests, Time Series Models, and MLOps',
      `Assisted in “Macroeconomics” (lecturers [Olga Osotova](https://www.hse.ru/en/org/persons/11254349/) [Irina Kavitskaya](https://www.hse.ru/en/org/persons/65290/)) course: held consultations, graded assignments, and provided exam materials. 
Topics included: Economic growth and development, Business cycles and economic fluctuations, Monetary policy and central banking, Fiscal policy and public finance, International trade and finance, Exchange rates and currency markets, Financial markets, investments, and asset pricing, Financial crises and systemic risk`,
    ],
  },
];

export default work;
