// src/data/projects.js

// Research & Teaching projects drawn from Tatiana Sorokina’s CV
const data = [
  {
    title: 'Research Internship in Macroeconomic Modelling',
    subtitle: 'HSE, Laboratory of Macro-Structural Modeling of the Russian Economy',
    start_date: '2023-03-01',
    end_date: '2025-12-31',
    desc:
      'Developed a PyTorch neural-network solver for high-dimensional DSGE models; '
      + 'presented conference talk on parameter identification in dynamic structural models; '
      + 'automated data-scraping for monthly now-casting of Russian macroeconomic statistics.',
  },
  {
    title: 'Teaching Assistant: Data Analysis & Deep Learning',
    subtitle: 'HSE, Faculties of Economic and Computer Sciences',
    start_date: '2022-06-01',
    end_date: '2022-08-31',
    desc:
      'Led Python data-analysis labs for Economics undergrads; co-taught Deep Learning & Applied Data Analysis '
      + 'courses (YOLO, transformers, GANs/VAE/diffusion models); prepared and graded assignments/exams.',
  },
  {
    title: 'Solving & Estimating Non-Linear HANK Models with ML',
    subtitle: 'HSE, Faculty of Economic Sciences',
    start_date: '2023-01-01',
    end_date: '2023-05-31',
    desc:
      'Surveyed machine-learning solution algorithms for large-scale dynamic structural models; '
      + 'researched neural-network methods for parameter identification in non-linear HANK frameworks.',
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
  {
    title: 'Monetary Policy Effectiveness with NLP',
    subtitle: 'HSE, Faculty of Economic Sciences (supervisor: Mariam Mamedli)',
    start_date: '2022-01-01',
    end_date: '2022-06-21',
    desc:
      'Customized transformer models to extract economic information from Russian Central Bank releases; '
      + 'demonstrated that informational channels improve instrument strength in SVAR monetary-shock analysis.',
  },
];

export default data;
