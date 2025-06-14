// This file contains a list of research and teaching projects
const data = [
    {
    title: 'Creditor-Sovereign Relationship under Asymmetric Information in a Dynamic Model of Sovereign Debt',
    subtitle: 'TSE, Research Seminar on Economic Theory',
    StartDate: '2025-10-01',
    EndDate: '2025-12-31',
    desc: 'Project for [TSE MRes Masters](https://www.tse-fr.eu/ARDE-MRes) course of Contract Theory (Economic Theory research track), taught by [Sara Shahanaghi](https://www.sshahanaghi.com/) and [David Martimort](https://scholar.google.com/citations?user=1LuYK-AAAAAJ&hl=en)',
    highlights:
      ['Used the the neural network model solution framework developped in my previous projects to solve a dynamic optimal contract problem',
        'Modelled optimal government debt contracts from a social perspective, explored different default scenarios'
      ],
    more:
`## Creditor-Sovereign Relationship under Asymmetric Information in a Dynamic Model of Sovereign Debt

This study develops a dynamic sovereign debt model that contrasts full-information and asymmetric-information environments to explore how informational frictions affect sovereign borrowing behavior, default risk, and contract structure. Building on canonical models from Eaton and Gersovitz (1981) and Aguiar and Gopinath (2006), the full-information benchmark assumes that international creditors observe a sovereign’s income directly, enabling them to price debt based on accurate repayment capacity. In contrast, the asymmetric-information model incorporates private knowledge of the sovereign's income and costly signaling mechanisms to capture informational opacity, inspired by Atkeson (1991) and Sandleris (2008).

The sovereign in both settings faces one-period debt constraints and must choose borrowing and consumption paths to maximize utility. The asymmetric model adds a signaling variable, where costly policy signals are used to influence creditor beliefs. Debt is priced by competitive, risk-neutral creditors who account for default risk, inferred directly from states in the full-information case and from observed signals in the asymmetric case.

To solve the model, the study employs a novel machine learning approach. It uses neural networks to approximate both the sovereign’s value function and the creditors’ perceived default probability, following methods proposed by Maliar et al. (2021) and Azinovic et al. (2020). This dual-network architecture allows each agent to independently optimize their objectives, capturing equilibrium dynamics without discretized state grids.

Simulations reveal that in the full-information regime, the sovereign's borrowing behavior adjusts flexibly to income and debt levels, exhibiting some precautionary behavior but limited consumption smoothing due to impatience. Under asymmetric information, the sovereign often issues the maximum allowable debt as a signaling mechanism, which inadvertently exacerbates default risk. This behavior results in a boom-bust cycle of over-borrowing in high-income periods followed by frequent defaults during downturns.

The findings underscore the importance of transparency and signal credibility in sovereign debt markets. They suggest that policies enhancing data disclosure or incentivizing credible signaling could improve borrowing outcomes and reduce default volatility. The paper concludes by outlining several directions for future research, including the incorporation of long-term debt, continuous signaling strategies, and dynamic renegotiation frameworks.

[Download PDF of the report](documents/Contract_Theory.pdf)`,
  },
  {
    title: 'Research Internship in Macroeconomic Modelling',
    subtitle: 'HSE, Laboratory of Macro-Structural Modeling of the Russian Economy',
    StartDate: '2023-03-01',
    highlights:
      ['Developed a PyTorch neural-network solver for high-dimensional DSGE models; ',
      'Prticipated in [XIV International Scientific and Practical Conference of Undergraduate and Postgraduate Students](https://stm.hse.ru/2023/) with a talk on usind macroeconomic statistical data in DSGE models and identification issues',
      'Automated data-scraping for monthly now-casting of Russian macroeconomic statistics',
      'Prepared monthly reviews of recent publications from economic journals',]
  },
  {
    title: 'Solving & Estimating Non-Linear HANK Models with ML',
    subtitle: 'HSE, Faculty of Economic Sciences',
    StartDate: '2023-01-01',
    EndDate: '2023-05-31',
    desc:
`Bachelor's thesis written under supervision of [Nikolay Pilnik](https://www.hse.ru/en/org/persons/11532263/). Received the highest grade, was recommended for publication. It is in a plan for the nearest future to extend the project and apply for a publication.`,
highlights:
[`Used PyTorch to create a fremework for solution of DSGE models using various appropriate parameter values and estimating the parameters using a Kalman filter`,
  `Leveraged the Reinforcement Learning approach from computer science to solve macroeconomic agent-based models with the system behaviour defined as multi-dimensional SDE system`,
  `Explored the behaviour of the algorithm in differect settings, including low- and hight- dimentional decision rules, and systems with prede-fined and unfeasible analytical solutions.`,
],
  more:
`In macroeconomic research, especially at central banks, models used for policy analysis are increasingly complex. One prominent class is Heterogeneous-Agent New Keynesian (HANK) models, which incorporate differences across individual agents—like varying incomes or asset holdings—to capture distributional effects of monetary policy. These models are essential for understanding how economic shocks propagate through society. However, solving them is computationally intense. The state spaces are massive, the decision rules are nonlinear, and existing solution techniques buckle under the sheer dimensionality.

To tackle this, my thesis proposes a machine learning framework for approximating global solutions to such high-dimensional economic models. Specifically, I employ neural networks as flexible function approximators that can learn agents’ optimal behavior directly from the model’s structure, rather than relying on traditional numerical grids. Importantly, the solution framework is not limited to a specific parameter set—it generalizes across the entire parameter space, which lays the groundwork for faster and more flexible model estimation.

The methodology is first tested on simpler setups: a consumption-saving problem with multiple stochastic shocks, and a representative-agent New Keynesian DSGE model with monopolistic competition. These models serve as benchmarks to demonstrate the interpretability and accuracy of the neural network approximation. In both cases, the framework successfully learns economically meaningful decision rules and reproduces sensible dynamics.

However, when scaled up to fully nonlinear HANK models—where heterogeneity and aggregate risk interact—the framework struggles. Despite producing interpretable outcomes in simpler cases, the same approach doesn’t always yield reliable results for HANK models. The problem stems from the difficulty of training neural networks in such irregular and high-dimensional environments. As a response, I suggest refining the training process by targeting the regions of the model’s ergodic state space more effectively and extending the horizon of agents’ simulated expectations via Bellman-style formulations or integral approximations.

In short, while the current method offers a powerful proof of concept for integrating machine learning into macroeconomic model solution and estimation, further refinements are necessary before it becomes a practical tool for policy-relevant HANK models. The thesis ends by laying out these next steps, focusing on enhancing the training procedure, improving sampling, and bridging the gap between micro-level heterogeneity and macro-level interpretability.

[Download PDF of the thesis](documents/HANK_models.pdf)`,
  },
  {
    title: 'Analysing Russian Central Bank Communication Impact on Monetary Policy Effectiveness With Natural Language Processing',
    subtitle: 'HSE, Faculty of Economic Sciences (supervisor: Mariam Mamedli)',
    StartDate: '2022-01-01',
    EndDate: '2022-06-21',
    desc: `Third year project for the seminal on Machine Learning Techniques Usage in Economic Research undersupervision of [Mariam Mamedli](https://www.linkedin.com/in/mariammamedli/?originalSubdomain=sg). Received the highest grade.`,
    highlights:
      ['Customised transformer models for Russian language to extract economic information from Russian Central Bank releases; ',
        'Scraped data of economic texts and news in Russian language to finetune the model to specific text styles',
      'Demonstrated that filtering out the informational part of monetary shocks improves instrument strength in SVAR model of the economy.',],
      more: 
`## Uncovering the Hidden Signals in Central Bank Communications

This research project was a bit of a deep dive into an intersection of monetary policy, market microstructure, and NLP. The idea was to investigate how the Russian Central Bank's official communications—press releases, to be specific—affect financial markets, beyond the standard interest rate decisions. Central banks don’t just set rates—they signal outlooks, priorities, even concerns. And I wanted to see if we could measure that informational content directly.

In most standard macro models, a change in the interest rate is treated as the whole story. But in reality, the announcement often conveys much more: a shift in tone, a new focus, a subtle readjustment in economic expectations. These implicit signals can either reinforce or counteract the effect of the rate change. This idea isn’t new—papers like Nakamura & Steinsson (2018) and Jarociński & Karadi (2020) have shown that central bank communications contain this ‘information effect’. But these papers mostly focus on the US. I was curious: does the same logic apply to an emerging market like Russia?

To get at this hidden information layer, I adapted a methodology originally proposed by Cai et al. (2021). The idea is to use natural language processing to model expectations of the key interest rate before and after the Central Bank's press release. For this, I used press articles from a major Russian business outlet (RBC.ru) to capture public sentiment before the release, and then the Bank’s own official statement for after. Using BERT-based embeddings (from Sberbank and DeepPavlov), I converted the texts into vectors and built models to predict the expected key rate based on each source.

If the expectations before and after the release diverged, it implied that the Central Bank revealed new information the market hadn’t anticipated. This “expectation gap” became my proxy for the informational component of the monetary policy shock. The rest—the pure surprise from the rate change—was treated as a standard monetary policy shock.

To test if this approach held water, I ran regressions against high-frequency price changes in Russian government bond futures and currency futures, controlling for other market noise. I found that, yes—the difference in expectations did explain part of the market’s immediate reaction. Interestingly, in several cases, the informational effect worked against the policy move. For example, a dovish rate cut might come with a gloomy economic outlook, which could neutralise or even reverse the expected positive market reaction.

The second part of the project was all about macro impact. I plugged the “cleaned” monetary shock (with the information component stripped out) into a Structural VAR model to trace how shocks propagate through the real economy—output, inflation, credit spreads, etc. For the small open economy version of the model, the results weren’t perfect (Russian data quirks and small sample sizes definitely didn’t help), but in the baseline model, the responses looked broadly in line with what you’d expect: inflation goes down, credit spreads go up, and so on.

In the end, the project showed that market reactions to monetary policy in Russia are not just about the numbers—they’re also about the story being told. And with the help of NLP and some clever econometrics, we can actually start to unpack that story.

[See the project on GitHub](https://github.com/tssorokina/information_component_of_monetary_shocks)

[Download PDF of the paper](documents/Monetary_Shocks_with_NLP)`
},
];

export default data;
