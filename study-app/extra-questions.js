/*
  Extra practice bank added after the first 120 questions.
  The weighting intentionally favours the quantitative/statistics lectures because
  the revision brief says Sarah needs more support there.
*/
(function () {
  const moreQuestions = [
    // Research foundations: light extra coverage for construct/design basics.
    {
      id: "foundations-11",
      topic: "foundations",
      difficulty: "applied",
      prompt: "A researcher says they are studying 'motivation' and measures how many optional revision quizzes each student completes. In this example, quiz completion is best described as:",
      options: ["An operational measure of motivation.", "The research paradigm.", "A Type I error.", "A sampling distribution."],
      answer: 0,
      explanation: "The observable behaviour is being used to represent the construct of motivation."
    },
    {
      id: "foundations-12",
      topic: "foundations",
      difficulty: "core",
      prompt: "Which statement best describes a limitation of using only quantitative scores to study exam anxiety?",
      options: ["Scores may miss the context and meaning of the anxiety experience.", "Scores can never be reliable.", "Scores automatically prove causation.", "Scores remove the need for a research question."],
      answer: 0,
      explanation: "The lecture contrast is not that numbers are bad, but that they can miss lived meaning and context."
    },
    {
      id: "foundations-13",
      topic: "foundations",
      difficulty: "applied",
      prompt: "A study asks, 'How do first-year students make sense of belonging at university?' Which data source is most aligned with that question?",
      options: ["Semi-structured interviews about students' experiences.", "A one-way ANOVA table only.", "A stopwatch measure of reaction time.", "A list of participant ID numbers."],
      answer: 0,
      explanation: "The question asks about meaning-making, so qualitative interview data are well aligned."
    },

    // Ethics and Māori research: light extra coverage for values and data governance.
    {
      id: "ethics-maori-11",
      topic: "ethics-maori",
      difficulty: "core",
      prompt: "Which action best reflects manaakitanga in a research relationship?",
      options: ["Showing care, respect, and reciprocity toward participants and communities.", "Reporting only significant p values.", "Removing all cultural context from the project.", "Treating consent as the only ethical issue."],
      answer: 0,
      explanation: "Manaakitanga concerns care, hospitality, respect, and reciprocal responsibility."
    },
    {
      id: "ethics-maori-12",
      topic: "ethics-maori",
      difficulty: "applied",
      prompt: "A team wants to link school and health data about Māori youth. Which question is most important from a Māori Data Sovereignty perspective?",
      options: ["Who has authority over the data, linkage, interpretation, and future use?", "Can the data be forced into a paired t-test?", "Are all variables written in English?", "Can the results be published before consultation?"],
      answer: 0,
      explanation: "Māori Data Sovereignty centres Māori rights, governance, relationships, and benefit."
    },
    {
      id: "ethics-maori-13",
      topic: "ethics-maori",
      difficulty: "core",
      prompt: "Why is whakapapa relevant to research and data?",
      options: ["It points to relationships, origins, context, and connectedness.", "It is another name for alpha.", "It means every variable must be continuous.", "It makes quantitative research impossible."],
      answer: 0,
      explanation: "Whakapapa foregrounds relationships and context rather than treating data as disconnected objects."
    },

    // Visual methods and PAR: moderate extra coverage for exam-style distinctions.
    {
      id: "visual-par-11",
      topic: "visual-par",
      difficulty: "core",
      prompt: "Which feature most distinguishes photovoice from a researcher simply taking documentary photos?",
      options: ["Participants create and interpret images as part of a participatory change-oriented process.", "The researcher uses a more expensive camera.", "The study must include a regression model.", "The photos are never discussed."],
      answer: 0,
      explanation: "Photovoice is participatory and commonly linked to voice, consciousness-raising, and action."
    },
    {
      id: "visual-par-12",
      topic: "visual-par",
      difficulty: "applied",
      prompt: "A participant selects one family photo and uses it to explain their migration story in an interview. What is the role of the photo?",
      options: ["It helps elicit discussion and meaning.", "It is a dependent variable in ANOVA.", "It removes the need for interpretation.", "It is a Bayesian prior."],
      answer: 0,
      explanation: "In photo-elicitation, images can act as bridges for discussion and meaning-making."
    },
    {
      id: "visual-par-13",
      topic: "visual-par",
      difficulty: "core",
      prompt: "The question 'Who gets to act on the findings?' is most closely connected to:",
      options: ["Power, benefit, and action in participatory research.", "The value of the regression intercept.", "The formula for variance.", "Whether p is smaller than alpha."],
      answer: 0,
      explanation: "The visual/PAR lectures repeatedly ask who benefits, who decides, and who acts."
    },
    {
      id: "visual-par-14",
      topic: "visual-par",
      difficulty: "applied",
      prompt: "A researcher claims there is a neutral 'god's eye view' in qualitative research. Which lecture idea most directly challenges this?",
      options: ["Positionality and reflexivity.", "Equal variances.", "Base rates.", "The F statistic."],
      answer: 0,
      explanation: "The qualitative lectures reject detached neutrality and ask researchers to examine their own position."
    },

    // Mixed methods: moderate extra coverage for designs and integration.
    {
      id: "mixed-methods-11",
      topic: "mixed-methods",
      difficulty: "applied",
      prompt: "A researcher finds in a survey that Pacific students report high belonging, then runs talanoa groups to understand what belonging means in practice. Which design is this closest to?",
      options: ["Explanatory sequential mixed methods.", "Convergent design with no sequencing.", "One-sample t-test.", "Researcher-found visual data."],
      answer: 0,
      explanation: "Quantitative results are followed by qualitative explanation."
    },
    {
      id: "mixed-methods-12",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "In a convergent mixed-methods design, the qualitative and quantitative strands are usually:",
      options: ["Collected in the same broad phase and integrated during interpretation.", "Collected years apart with no comparison.", "Both replaced by a single p value.", "Always required to have the same sample size."],
      answer: 0,
      explanation: "Convergent designs bring parallel strands together."
    },
    {
      id: "mixed-methods-13",
      topic: "mixed-methods",
      difficulty: "applied",
      prompt: "A qualitative phase identifies three local wellbeing dimensions. A later survey tests whether items for those dimensions work in a larger sample. Which design is this closest to?",
      options: ["Exploratory sequential mixed methods.", "Explanatory sequential mixed methods.", "A paired-samples t-test.", "A pure archival study."],
      answer: 0,
      explanation: "Qualitative exploration is used to build a later quantitative phase."
    },
    {
      id: "mixed-methods-14",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "Which option is an example of integration at the interpretation stage?",
      options: ["Explaining how interview themes clarify, expand, or contradict survey patterns.", "Putting the survey and interview results in separate appendices with no discussion.", "Choosing the largest sample and deleting the other strand.", "Using only the questionnaire because numbers are easier."],
      answer: 0,
      explanation: "Integration requires relating the strands to produce a combined interpretation."
    },
    {
      id: "mixed-methods-15",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "Mixed methods are especially useful when:",
      options: ["One method alone cannot adequately answer both pattern and meaning parts of the question.", "The researcher wants to avoid all design decisions.", "The qualitative and quantitative findings must always match.", "There is no research question."],
      answer: 0,
      explanation: "Mixed methods are justified by the need for complementary forms of evidence."
    },

    // Pacific frameworks and co-design: moderate extra coverage for values/application.
    {
      id: "pacific-11",
      topic: "pacific",
      difficulty: "applied",
      prompt: "A Pacific health study returns findings first to the community advisory group before submitting a journal article. This best reflects:",
      options: ["Reciprocity, respect, and accountability.", "A violation of every research design.", "A larger regression residual.", "A Bonferroni correction."],
      answer: 0,
      explanation: "The Pacific lectures emphasise relational responsibility and returning value to communities."
    },
    {
      id: "pacific-12",
      topic: "pacific",
      difficulty: "core",
      prompt: "Which statement best captures why Pacific frameworks matter for quantitative research?",
      options: ["They help ensure that measurement, interpretation, and use of data respect Pacific values and meanings.", "They make all statistics unnecessary.", "They require all variables to be categorical.", "They guarantee every result is significant."],
      answer: 0,
      explanation: "The Week 6 lectures apply Pacific frameworks to quantitative methods, especially meaning and values."
    },
    {
      id: "pacific-13",
      topic: "pacific",
      difficulty: "applied",
      prompt: "A researcher treats vā as empty space between individuals and ignores family/community relationships. What is the best critique?",
      options: ["They have missed the relational meaning of vā.", "They have correctly applied the framework.", "They need only a larger sample size.", "They should report only R squared."],
      answer: 0,
      explanation: "Vā is relational space that must be cared for."
    },
    {
      id: "pacific-14",
      topic: "pacific",
      difficulty: "core",
      prompt: "In co-design, affected communities should usually be involved:",
      options: ["From problem definition through design, interpretation, and application.", "Only after the article has been accepted.", "Only as anonymous data points.", "Only if the p value is significant."],
      answer: 0,
      explanation: "Co-design shares decision-making across the research process."
    },
    {
      id: "pacific-15",
      topic: "pacific",
      difficulty: "applied",
      prompt: "A Pacific framework is used only as a decorative diagram in the introduction and has no effect on methods. What is the strongest issue?",
      options: ["The framework is tokenistic rather than guiding the research process.", "The study has too many participants.", "The study cannot include qualitative data.", "The framework automatically invalidates statistics."],
      answer: 0,
      explanation: "Frameworks should shape planning, methods, interpretation, and benefit, not just presentation."
    },

    // Quantitative basics: heavy extra coverage for variables, spread, and formulas.
    {
      id: "quant-basics-11",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "If a researcher subtracts each score from the mean and adds the raw deviations, the result will usually be:",
      options: ["Zero.", "The standard deviation.", "The p value.", "The sample size minus one."],
      answer: 0,
      explanation: "Positive and negative deviations from the mean cancel out, which is why squared deviations are used."
    },
    {
      id: "quant-basics-12",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "Why are deviations squared when calculating variance?",
      options: ["To stop positive and negative deviations cancelling and to weight larger deviations more.", "To convert all variables into categories.", "To guarantee p < .05.", "To remove the need for a mean."],
      answer: 0,
      explanation: "Squaring makes deviations positive and gives larger deviations more influence."
    },
    {
      id: "quant-basics-13",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "Two datasets have the same mean, but one has scores tightly clustered and the other has scores spread widely. Which statistic will most clearly differ?",
      options: ["Standard deviation.", "The number of variables.", "The research paradigm.", "The participant names."],
      answer: 0,
      explanation: "Standard deviation measures spread around the mean."
    },
    {
      id: "quant-basics-14",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "A z-score tells you:",
      options: ["How many standard deviations a value is from the mean.", "The probability that the null is true.", "Which group was randomly assigned.", "Whether the study is qualitative."],
      answer: 0,
      explanation: "Standardised scores express location relative to the mean in standard-deviation units."
    },
    {
      id: "quant-basics-15",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "A score has z = -2. Which interpretation is best?",
      options: ["It is two standard deviations below the mean.", "It is two points above the mean.", "It proves the null hypothesis.", "It is the second participant in the dataset."],
      answer: 0,
      explanation: "Negative z-scores are below the mean; the magnitude gives standard deviations."
    },
    {
      id: "quant-basics-16",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "Which graph is usually most useful for seeing the distribution of one continuous variable?",
      options: ["Histogram.", "Pie chart of participant names.", "Scatterplot with no y-axis.", "Path diagram of consent forms."],
      answer: 0,
      explanation: "Histograms show the shape, centre, and spread of continuous data."
    },
    {
      id: "quant-basics-17",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "A scatterplot slopes upward from left to right. Before calculating anything, this suggests:",
      options: ["A positive association between the two variables.", "A negative association between the two variables.", "No possible covariance.", "A guaranteed causal effect."],
      answer: 0,
      explanation: "An upward trend means higher x values tend to pair with higher y values."
    },
    {
      id: "quant-basics-18",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "Which variable is nominal?",
      options: ["Research condition: control, mindfulness, or exercise.", "Reaction time in milliseconds.", "Height in centimetres.", "Anxiety score from 0 to 40."],
      answer: 0,
      explanation: "Nominal variables are categories without inherent numerical order."
    },
    {
      id: "quant-basics-19",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "Which variable is ordinal?",
      options: ["A satisfaction rating: very dissatisfied, dissatisfied, neutral, satisfied, very satisfied.", "Age in years.", "Number of errors.", "Heart rate in beats per minute."],
      answer: 0,
      explanation: "Ordinal variables have ordered categories, but distances between categories are not guaranteed equal."
    },
    {
      id: "quant-basics-20",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "A researcher calculates a mean for participant ID numbers. What is the main problem?",
      options: ["ID numbers are labels, so their mean has no substantive meaning.", "Means can only be used for qualitative data.", "Participant IDs must always be normally distributed.", "The mean will always equal zero."],
      answer: 0,
      explanation: "Numeric labels are not quantities, so arithmetic summaries can be meaningless."
    },
    {
      id: "quant-basics-21",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "If the covariance between X and Y is negative, then as X tends to increase:",
      options: ["Y tends to decrease.", "Y must increase.", "Y must be categorical.", "The sample size becomes negative."],
      answer: 0,
      explanation: "Negative covariance means the variables tend to move in opposite directions."
    },
    {
      id: "quant-basics-22",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "Why is correlation easier to interpret than covariance?",
      options: ["Correlation is standardised to range from -1 to +1.", "Correlation always proves causation.", "Correlation does not use variables.", "Correlation can only be zero or one."],
      answer: 0,
      explanation: "Standardisation gives correlation a fixed scale."
    },
    {
      id: "quant-basics-23",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "A small sample has one extreme outlier. Which descriptive statistic is likely to be pulled most strongly?",
      options: ["Mean.", "Median.", "Mode of a category.", "Participant count."],
      answer: 0,
      explanation: "The mean uses all values directly, so extreme values can pull it."
    },
    {
      id: "quant-basics-24",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "Degrees of freedom are generally related to:",
      options: ["How many independent pieces of information are available after estimating parameters.", "How many lectures are in the course.", "The number of response options in every MCQ.", "Whether participants like the researcher."],
      answer: 0,
      explanation: "Degrees of freedom capture available independent information after constraints such as estimating a mean."
    },
    {
      id: "quant-basics-25",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "For a sample variance based on 20 observations, the usual degrees of freedom are:",
      options: ["19.", "20.", "21.", "0."],
      answer: 0,
      explanation: "Sample variance usually uses n - 1 degrees of freedom."
    },

    // NHST: heavy extra coverage for decisions, errors, CIs, and assumptions.
    {
      id: "nhst-11",
      topic: "nhst",
      difficulty: "applied",
      prompt: "A study uses alpha = .05 and obtains p = .004. Which decision follows?",
      options: ["Reject the null hypothesis.", "Do not reject the null hypothesis.", "Accept the null as proven true.", "Conclude the effect is large."],
      answer: 0,
      explanation: "Because .004 is smaller than .05, the result is statistically significant under the chosen threshold."
    },
    {
      id: "nhst-12",
      topic: "nhst",
      difficulty: "applied",
      prompt: "A study uses alpha = .01 and obtains p = .03. Which decision follows?",
      options: ["Do not reject the null hypothesis at alpha .01.", "Reject the null hypothesis at alpha .01.", "Conclude the null is definitely true.", "Conclude the effect size is exactly .03."],
      answer: 0,
      explanation: "The p value is smaller than .05 but not smaller than the stricter .01 threshold."
    },
    {
      id: "nhst-13",
      topic: "nhst",
      difficulty: "core",
      prompt: "If the null hypothesis is actually true and the test is significant, the result is:",
      options: ["A false positive.", "A true positive.", "A false negative.", "A true negative."],
      answer: 0,
      explanation: "Rejecting a true null is a Type I error, or false positive."
    },
    {
      id: "nhst-14",
      topic: "nhst",
      difficulty: "core",
      prompt: "If a real effect exists but the test is not significant, the result is:",
      options: ["A false negative.", "A false positive.", "A true positive.", "An interaction."],
      answer: 0,
      explanation: "Failing to detect a real effect is a Type II error, or false negative."
    },
    {
      id: "nhst-15",
      topic: "nhst",
      difficulty: "applied",
      prompt: "A confidence interval for a mean difference is [-1.5, 8.0]. If zero represents no difference, which interpretation is best?",
      options: ["The interval includes no difference, so the estimate is compatible with no effect as well as positive effects.", "The effect is definitely negative.", "The p value must be exactly zero.", "The sample has no variability."],
      answer: 0,
      explanation: "Including zero indicates that no difference remains among the compatible values."
    },
    {
      id: "nhst-16",
      topic: "nhst",
      difficulty: "core",
      prompt: "A smaller p value generally indicates:",
      options: ["The observed data are more surprising under the null model.", "The alternative hypothesis is definitely true.", "The sample size is always small.", "The effect is always practically important."],
      answer: 0,
      explanation: "A p value measures extremeness under the null model, not direct truth or importance."
    },
    {
      id: "nhst-17",
      topic: "nhst",
      difficulty: "applied",
      prompt: "A researcher runs 20 outcome tests and reports only the one with p = .04. Which concern is most relevant?",
      options: ["Multiple testing and selective reporting.", "A paired design.", "A stronger prior probability.", "Participant-generated visual data."],
      answer: 0,
      explanation: "Many unreported tests increase the chance that the reported significant result is a false positive."
    },
    {
      id: "nhst-18",
      topic: "nhst",
      difficulty: "core",
      prompt: "Which practice most directly reduces researcher degrees of freedom?",
      options: ["Pre-registering the main hypotheses and analysis plan.", "Trying several exclusion rules and picking the best p value.", "Changing outcomes after looking at results.", "Reporting only significant subgroups."],
      answer: 0,
      explanation: "Pre-registration limits undisclosed flexibility in analysis choices."
    },
    {
      id: "nhst-19",
      topic: "nhst",
      difficulty: "core",
      prompt: "What is the null hypothesis usually intended to represent?",
      options: ["A model of no effect, no difference, or no association.", "The researcher's favourite theory.", "The largest possible effect.", "The qualitative theme."],
      answer: 0,
      explanation: "NHST evaluates the observed data against a specified null model."
    },
    {
      id: "nhst-20",
      topic: "nhst",
      difficulty: "applied",
      prompt: "A researcher says p = .20 means there is a 20% chance the null hypothesis is true. What is wrong?",
      options: ["A p value is not the probability that the null hypothesis is true.", "The statement is exactly correct.", "The p value must be converted to a median.", "A p value can only be interpreted in qualitative research."],
      answer: 0,
      explanation: "The p value is about data extremeness assuming the null, not the probability of the null."
    },
    {
      id: "nhst-21",
      topic: "nhst",
      difficulty: "core",
      prompt: "Which result is a true negative?",
      options: ["There is no real effect and the test is not significant.", "There is no real effect and the test is significant.", "There is a real effect and the test is not significant.", "There is a real effect and the test is significant."],
      answer: 0,
      explanation: "A true negative occurs when the null is effectively true and the test does not reject it."
    },
    {
      id: "nhst-22",
      topic: "nhst",
      difficulty: "core",
      prompt: "Which result is a true positive?",
      options: ["There is a real effect and the test is significant.", "There is no real effect and the test is significant.", "There is a real effect and the test is not significant.", "There is no real effect and the test is not significant."],
      answer: 0,
      explanation: "A true positive occurs when a real effect is detected."
    },
    {
      id: "nhst-23",
      topic: "nhst",
      difficulty: "applied",
      prompt: "A study with a huge sample finds p < .001 for a difference of 0.2 points on a 100-point scale. What should be checked next?",
      options: ["Whether the effect is practically or theoretically meaningful.", "Whether p should be rounded up to .05.", "Whether the null is proven false in all populations.", "Whether the study must become qualitative."],
      answer: 0,
      explanation: "Large samples can make tiny effects statistically significant."
    },
    {
      id: "nhst-24",
      topic: "nhst",
      difficulty: "core",
      prompt: "Which statement about non-parametric tests is most accurate?",
      options: ["They can help with severe assumption violations, but may answer a different question.", "They are always more powerful than parametric tests.", "They remove all need to inspect data.", "They are only used for Bayes' theorem."],
      answer: 0,
      explanation: "The best-practice lecture treats non-parametric tests as useful but not identical replacements."
    },
    {
      id: "nhst-25",
      topic: "nhst",
      difficulty: "applied",
      prompt: "A result is p = .051. Which conclusion is best practice?",
      options: ["Treat it as continuous evidence near the threshold, not as proof that nothing happened.", "Declare it totally different from p = .049 in every practical sense.", "Round it down and call it significant.", "Delete the confidence interval."],
      answer: 0,
      explanation: "Good practice avoids rigid overinterpretation of arbitrary thresholds."
    },

    // t-tests: heavy extra coverage for test selection and interpretation.
    {
      id: "ttests-11",
      topic: "ttests",
      difficulty: "applied",
      prompt: "A researcher compares memory scores for the same participants after caffeine and after placebo. Which test is most appropriate?",
      options: ["Paired-samples t-test.", "Independent-samples t-test.", "One-sample t-test.", "One-way independent ANOVA."],
      answer: 0,
      explanation: "The same participants provide both scores, so the observations are paired."
    },
    {
      id: "ttests-12",
      topic: "ttests",
      difficulty: "applied",
      prompt: "A researcher compares mean wellbeing in students from Auckland and Wellington, with different people in each city. Which test is most appropriate for two means?",
      options: ["Independent-samples t-test.", "Paired-samples t-test.", "One-sample t-test.", "Repeated-measures ANOVA."],
      answer: 0,
      explanation: "The groups contain different people, so the samples are independent."
    },
    {
      id: "ttests-13",
      topic: "ttests",
      difficulty: "core",
      prompt: "The denominator of a t statistic mainly reflects:",
      options: ["Uncertainty or variability in the estimated mean difference.", "The researcher's preferred theory.", "The number of response options.", "The name of the grouping variable."],
      answer: 0,
      explanation: "A t statistic compares an observed difference with its standard error."
    },
    {
      id: "ttests-14",
      topic: "ttests",
      difficulty: "core",
      prompt: "If two groups have the same mean difference but one study has much less variability, its t value will usually be:",
      options: ["Larger in magnitude.", "Closer to zero.", "Exactly unchanged.", "Impossible to calculate."],
      answer: 0,
      explanation: "Less variability reduces the standard error, increasing the t statistic for the same mean difference."
    },
    {
      id: "ttests-15",
      topic: "ttests",
      difficulty: "applied",
      prompt: "A one-sample t-test asks whether:",
      options: ["A sample mean differs from a specified value.", "Two unrelated groups have different medians only.", "Two categorical variables are independent.", "A latent factor exists."],
      answer: 0,
      explanation: "One-sample tests compare one sample mean with a known or hypothesised value."
    },
    {
      id: "ttests-16",
      topic: "ttests",
      difficulty: "core",
      prompt: "Which design violates the independence assumption of an independent-samples t-test?",
      options: ["Each participant contributes one before score and one after score.", "Each participant is in only one of two unrelated groups.", "Scores come from different people in each condition.", "The outcome is continuous."],
      answer: 0,
      explanation: "Repeated measures from the same person are not independent."
    },
    {
      id: "ttests-17",
      topic: "ttests",
      difficulty: "applied",
      prompt: "A paired-samples t-test is significant for pre-post anxiety, but the mean difference is negative. If scores are post minus pre, what does the sign mean?",
      options: ["Post scores were lower than pre scores on average.", "Post scores were higher than pre scores on average.", "The result cannot be significant.", "The samples were independent."],
      answer: 0,
      explanation: "A negative post-minus-pre difference means scores decreased after the intervention."
    },
    {
      id: "ttests-18",
      topic: "ttests",
      difficulty: "core",
      prompt: "Which test is most appropriate for comparing two matched twins per pair on a continuous outcome?",
      options: ["Paired-samples t-test.", "Independent-samples t-test.", "One-sample t-test.", "Correlation only."],
      answer: 0,
      explanation: "Matched pairs create paired observations."
    },
    {
      id: "ttests-19",
      topic: "ttests",
      difficulty: "applied",
      prompt: "A researcher compares three teaching methods using separate groups. Why is a t-test not the first choice?",
      options: ["There are more than two groups, so ANOVA is designed for the omnibus comparison.", "The outcome is continuous.", "The groups are independent.", "The study has a research question."],
      answer: 0,
      explanation: "ANOVA avoids running many t-tests when comparing three or more groups."
    },
    {
      id: "ttests-20",
      topic: "ttests",
      difficulty: "core",
      prompt: "Which assumption is about the shape of residuals or difference scores?",
      options: ["Approximate normality.", "Rangatiratanga.", "Researcher-found images.", "Base-rate updating."],
      answer: 0,
      explanation: "t-tests rely on approximate normality of the relevant residuals or difference scores, especially in small samples."
    },
    {
      id: "ttests-21",
      topic: "ttests",
      difficulty: "applied",
      prompt: "For a paired-samples t-test, what is analysed as the core variable?",
      options: ["The within-person difference scores.", "The group names only.", "The combined total of all p values.", "The loading matrix."],
      answer: 0,
      explanation: "A paired t-test is essentially a one-sample t-test on difference scores."
    },
    {
      id: "ttests-22",
      topic: "ttests",
      difficulty: "core",
      prompt: "Which statement about sample size and t-tests is generally correct?",
      options: ["Larger samples usually reduce standard error if variability is similar.", "Larger samples always make the effect practically important.", "Sample size has no relation to precision.", "Larger samples make the mean impossible to calculate."],
      answer: 0,
      explanation: "Standard error decreases as sample size increases, all else equal."
    },
    {
      id: "ttests-23",
      topic: "ttests",
      difficulty: "applied",
      prompt: "A researcher reports only p = .03 for a group difference. What else would help interpret the result?",
      options: ["The mean difference, confidence interval, and effect size.", "Only the participant ID numbers.", "The colour of the histogram.", "Whether the lecture was on a Tuesday."],
      answer: 0,
      explanation: "Good reporting includes magnitude and uncertainty, not just significance."
    },
    {
      id: "ttests-24",
      topic: "ttests",
      difficulty: "core",
      prompt: "If Cohen's d = 0, this means:",
      options: ["The two means are equal relative to the chosen standard deviation.", "The p value must be zero.", "The sample size must be zero.", "The result must be an interaction."],
      answer: 0,
      explanation: "A d of zero means no standardised mean difference."
    },
    {
      id: "ttests-25",
      topic: "ttests",
      difficulty: "applied",
      prompt: "A study compares reaction time for left and right hands in the same people. Which phrase best describes the design?",
      options: ["Within-subjects or repeated-measures.", "Between-subjects only.", "One-way independent groups.", "Unrelated samples."],
      answer: 0,
      explanation: "Each person contributes both hand measurements, so the design is within-subjects."
    },

    // ANOVA: heavy extra coverage for omnibus tests, factors, and interactions.
    {
      id: "anova-11",
      topic: "anova",
      difficulty: "core",
      prompt: "A factor in ANOVA is:",
      options: ["A categorical predictor or grouping variable.", "The continuous outcome.", "The p value only.", "The residual error term only."],
      answer: 0,
      explanation: "ANOVA factors are categorical predictors with levels."
    },
    {
      id: "anova-12",
      topic: "anova",
      difficulty: "core",
      prompt: "The levels of a factor are:",
      options: ["The categories or conditions within that factor.", "The residuals for every participant.", "The values of p across studies.", "The standard deviation formula."],
      answer: 0,
      explanation: "For example, a caffeine factor might have placebo and caffeine levels."
    },
    {
      id: "anova-13",
      topic: "anova",
      difficulty: "applied",
      prompt: "A 2 x 3 factorial ANOVA has how many cells or condition combinations?",
      options: ["6.", "2.", "3.", "5."],
      answer: 0,
      explanation: "A 2 x 3 design has 2 multiplied by 3 condition combinations."
    },
    {
      id: "anova-14",
      topic: "anova",
      difficulty: "core",
      prompt: "A significant omnibus one-way ANOVA tells you:",
      options: ["At least one group mean differs from at least one other group mean.", "Every group differs from every other group.", "The largest mean caused the smallest mean.", "The data must be qualitative."],
      answer: 0,
      explanation: "The omnibus test does not specify exactly which means differ."
    },
    {
      id: "anova-15",
      topic: "anova",
      difficulty: "applied",
      prompt: "In a two-way ANOVA, there is no interaction. What does that mean?",
      options: ["The effect of one factor is similar across levels of the other factor.", "There can be no main effects.", "The outcome has no variance.", "The p values are all exactly one."],
      answer: 0,
      explanation: "No interaction means the simple effects are roughly parallel or consistent."
    },
    {
      id: "anova-16",
      topic: "anova",
      difficulty: "applied",
      prompt: "A graph shows two nearly parallel lines separated vertically. This most clearly suggests:",
      options: ["A possible main effect without much interaction.", "A strong crossover interaction.", "A correlation of exactly zero.", "A paired t-test only."],
      answer: 0,
      explanation: "Parallel separated lines suggest one factor has an average effect while the other effect is consistent."
    },
    {
      id: "anova-17",
      topic: "anova",
      difficulty: "core",
      prompt: "Which assumption matters for a standard between-groups ANOVA?",
      options: ["Independence of observations.", "Every participant is interviewed twice.", "The outcome must be nominal.", "The factor must be continuous."],
      answer: 0,
      explanation: "ANOVA assumes independent observations for between-subjects designs."
    },
    {
      id: "anova-18",
      topic: "anova",
      difficulty: "core",
      prompt: "Homogeneity of variance means:",
      options: ["The groups have similar outcome variances.", "The group means are identical.", "The p values are all equal.", "The sample contains no categories."],
      answer: 0,
      explanation: "Standard ANOVA assumes similar variances across groups."
    },
    {
      id: "anova-19",
      topic: "anova",
      difficulty: "applied",
      prompt: "A researcher studies the effects of therapy type and gender on anxiety scores. Which term describes therapy type and gender?",
      options: ["Factors.", "Residuals.", "Confidence intervals.", "Difference scores."],
      answer: 0,
      explanation: "Both are categorical predictors in a factorial ANOVA."
    },
    {
      id: "anova-20",
      topic: "anova",
      difficulty: "core",
      prompt: "A simple effect in an interaction analysis is:",
      options: ["The effect of one factor at a particular level of another factor.", "The overall mean across all groups.", "The standard deviation of the outcome.", "The probability of not A."],
      answer: 0,
      explanation: "Simple effects unpack interactions by looking within levels of another factor."
    },
    {
      id: "anova-21",
      topic: "anova",
      difficulty: "applied",
      prompt: "A study has one categorical predictor with four levels and a continuous outcome. Which analysis fits the basic design?",
      options: ["One-way ANOVA.", "Pearson correlation.", "Paired-samples t-test.", "Bayes' theorem."],
      answer: 0,
      explanation: "One factor with more than two levels and a continuous outcome fits one-way ANOVA."
    },
    {
      id: "anova-22",
      topic: "anova",
      difficulty: "core",
      prompt: "Between-group variability in ANOVA reflects:",
      options: ["How far group means are from the grand mean.", "How much each image means to participants.", "The base rate of a disease.", "The number of qualitative paradigms."],
      answer: 0,
      explanation: "Between-group variation captures systematic differences among group means."
    },
    {
      id: "anova-23",
      topic: "anova",
      difficulty: "core",
      prompt: "Within-group variability in ANOVA reflects:",
      options: ["Variation among observations not explained by group membership.", "The number of groups in the design.", "The mean difference between two paired scores.", "The prior odds."],
      answer: 0,
      explanation: "Within-group variability is residual variation around group means."
    },
    {
      id: "anova-24",
      topic: "anova",
      difficulty: "applied",
      prompt: "If between-group variability is large relative to within-group variability, the F statistic will tend to be:",
      options: ["Large.", "Exactly zero.", "Negative.", "Unrelated to the data."],
      answer: 0,
      explanation: "A larger between/within ratio produces a larger F statistic."
    },
    {
      id: "anova-25",
      topic: "anova",
      difficulty: "applied",
      prompt: "A main effect is significant, but there is also a strong interaction. What is the best next step?",
      options: ["Interpret the main effect cautiously and examine simple effects or interaction plots.", "Ignore the interaction.", "Report only the grand mean.", "Convert the data to participant photos."],
      answer: 0,
      explanation: "Interactions can qualify average main effects, so the conditional pattern matters."
    },

    // Correlation and regression: heavy extra coverage for slopes, residuals, r, and R squared.
    {
      id: "correlation-regression-11",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "If Pearson's r = 0, this means:",
      options: ["There is no linear association, though a non-linear pattern may still exist.", "There is no relationship of any kind possible.", "There is a perfect negative relationship.", "The variables are categorical."],
      answer: 0,
      explanation: "Pearson's r captures linear association only."
    },
    {
      id: "correlation-regression-12",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "Which correlation indicates the strongest linear relationship?",
      options: ["r = -.90.", "r = .45.", "r = .10.", "r = 0."],
      answer: 0,
      explanation: "Strength depends on absolute value; .90 is stronger than .45 or .10."
    },
    {
      id: "correlation-regression-13",
      topic: "correlation-regression",
      difficulty: "applied",
      prompt: "A correlation between hours of sleep and tiredness is r = -.65. Which interpretation is best?",
      options: ["More sleep is associated with less tiredness.", "More sleep causes tiredness to increase.", "There is no association.", "The result means 65% of people slept."],
      answer: 0,
      explanation: "The negative sign means higher sleep tends to pair with lower tiredness."
    },
    {
      id: "correlation-regression-14",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "In simple linear regression, the line of best fit is chosen to minimise:",
      options: ["Squared residuals.", "The number of participants.", "The number of variables.", "The base rate."],
      answer: 0,
      explanation: "Ordinary least squares minimises the sum of squared prediction errors."
    },
    {
      id: "correlation-regression-15",
      topic: "correlation-regression",
      difficulty: "applied",
      prompt: "A regression predicts exam score from study hours: score = 50 + 3(hours). What is the predicted score for 4 hours?",
      options: ["62.", "53.", "200.", "47."],
      answer: 0,
      explanation: "50 + 3(4) = 62."
    },
    {
      id: "correlation-regression-16",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "In the model score = 50 + 3(hours), the intercept is:",
      options: ["50.", "3.", "4.", "62."],
      answer: 0,
      explanation: "The intercept is the predicted score when hours equals zero."
    },
    {
      id: "correlation-regression-17",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "In the model score = 50 + 3(hours), the slope is:",
      options: ["3.", "50.", "53.", "0."],
      answer: 0,
      explanation: "The slope is the predicted change in score per extra hour."
    },
    {
      id: "correlation-regression-18",
      topic: "correlation-regression",
      difficulty: "applied",
      prompt: "A participant's observed score is 70 and the regression model predicted 62. What is the residual if residual = observed minus predicted?",
      options: ["8.", "-8.", "132.", "62."],
      answer: 0,
      explanation: "70 - 62 = 8."
    },
    {
      id: "correlation-regression-19",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "If R squared = .25, the model explains:",
      options: ["25% of the variance in the outcome.", "25% of the participants.", "A correlation of exactly .25.", "A p value of .25."],
      answer: 0,
      explanation: "R squared is the proportion of variance explained by the model."
    },
    {
      id: "correlation-regression-20",
      topic: "correlation-regression",
      difficulty: "applied",
      prompt: "A regression slope is negative. Which graph pattern is most consistent with that?",
      options: ["A downward trend from left to right.", "An upward trend from left to right.", "A perfectly flat line with no change.", "A histogram with one bar."],
      answer: 0,
      explanation: "A negative slope means predicted y decreases as x increases."
    },
    {
      id: "correlation-regression-21",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "Multiple regression differs from simple regression because it includes:",
      options: ["More than one predictor.", "No outcome variable.", "Only categorical outcomes.", "No residuals."],
      answer: 0,
      explanation: "Multiple regression predicts an outcome from two or more predictors."
    },
    {
      id: "correlation-regression-22",
      topic: "correlation-regression",
      difficulty: "applied",
      prompt: "A researcher adds sleep and caffeine intake to a regression predicting reaction time. The coefficient for sleep estimates:",
      options: ["The association between sleep and reaction time while holding caffeine intake constant.", "The total sample mean.", "The probability that sleep is true.", "The number of caffeine groups."],
      answer: 0,
      explanation: "Multiple-regression coefficients are interpreted conditional on the other predictors in the model."
    },
    {
      id: "correlation-regression-23",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "Which issue can make extrapolating from a regression line risky?",
      options: ["Predicting far outside the observed range of the predictor.", "Having an intercept.", "Reporting residuals.", "Using a continuous outcome."],
      answer: 0,
      explanation: "The fitted relationship may not hold beyond the range of observed data."
    },
    {
      id: "correlation-regression-24",
      topic: "correlation-regression",
      difficulty: "applied",
      prompt: "A scatterplot contains one extreme point that strongly changes the fitted line. This point is best described as:",
      options: ["Influential.", "A main effect.", "A complement.", "A qualitative paradigm."],
      answer: 0,
      explanation: "Influential observations can have a large effect on a regression line."
    },
    {
      id: "correlation-regression-25",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "Which statement about residual plots is best?",
      options: ["They help check whether model errors show patterns the model has missed.", "They prove causation.", "They replace all effect-size reporting.", "They are only used for interview studies."],
      answer: 0,
      explanation: "Residual plots are useful diagnostics for linearity, spread, and unusual observations."
    },

    // PCA/EFA: heavier than non-stats, but a little lighter than core tests.
    {
      id: "efa-pca-11",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "If two items load strongly on the same factor, this suggests:",
      options: ["They share variance related to that factor.", "They are guaranteed to have the same mean.", "They must be unrelated.", "They prove a causal pathway."],
      answer: 0,
      explanation: "Common loadings suggest items are related to the same latent dimension."
    },
    {
      id: "efa-pca-12",
      topic: "efa-pca",
      difficulty: "applied",
      prompt: "A component explains a large amount of variance but mixes items about anxiety, income, and favourite colour. What should the researcher be cautious about?",
      options: ["Whether the component has a coherent psychological interpretation.", "Whether the p value is below .05.", "Whether all variables are participant IDs.", "Whether the sample has exactly two groups."],
      answer: 0,
      explanation: "Components need substantive interpretation, not just statistical extraction."
    },
    {
      id: "efa-pca-13",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "A scree plot is commonly used to help decide:",
      options: ["How many components or factors to retain.", "Whether two means differ.", "Whether a p value is significant.", "Whether consent is signed."],
      answer: 0,
      explanation: "Scree plots show the pattern of explained variance across components/factors."
    },
    {
      id: "efa-pca-14",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "Eigenvalues in PCA are related to:",
      options: ["How much variance a component accounts for.", "The number of interviewers.", "The p value threshold.", "The base rate of a disease."],
      answer: 0,
      explanation: "Eigenvalues indicate variance captured by each component."
    },
    {
      id: "efa-pca-15",
      topic: "efa-pca",
      difficulty: "applied",
      prompt: "A researcher retains too many factors. Which problem is most likely?",
      options: ["They may interpret noise or overly specific patterns as meaningful constructs.", "They will automatically increase validity.", "They remove all measurement error.", "They guarantee replicability."],
      answer: 0,
      explanation: "Over-extraction can create unstable or unhelpful interpretations."
    },
    {
      id: "efa-pca-16",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "An oblique rotation is useful when the researcher expects factors to be:",
      options: ["Correlated.", "Exactly unrelated.", "Categorical outcomes.", "Participant-generated photographs."],
      answer: 0,
      explanation: "Oblique rotations allow factors to correlate."
    },
    {
      id: "efa-pca-17",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "An orthogonal rotation assumes factors are:",
      options: ["Uncorrelated.", "Always causal.", "Always invalid.", "The same as p values."],
      answer: 0,
      explanation: "Orthogonal rotations keep factors at right angles, meaning uncorrelated."
    },
    {
      id: "efa-pca-18",
      topic: "efa-pca",
      difficulty: "applied",
      prompt: "A researcher names a factor 'social anxiety' because the highest-loading items all involve fear of social judgement. This is an example of:",
      options: ["Interpreting a factor using item content.", "Calculating a paired t-test.", "Ignoring the loading matrix.", "Applying Bayes' theorem."],
      answer: 0,
      explanation: "Factor names should be justified from the content of high-loading items and theory."
    },
    {
      id: "efa-pca-19",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "Which dataset is most suitable for PCA or EFA?",
      options: ["Many questionnaire items measuring related psychological responses.", "One binary condition variable only.", "One participant's name.", "A single p value."],
      answer: 0,
      explanation: "PCA/EFA need multiple observed variables with shared structure."
    },
    {
      id: "efa-pca-20",
      topic: "efa-pca",
      difficulty: "applied",
      prompt: "A factor structure found in one small sample should ideally be checked by:",
      options: ["Testing whether the structure replicates or is confirmed in new data.", "Assuming it is permanent.", "Deleting all low-scoring participants.", "Reporting no method details."],
      answer: 0,
      explanation: "Measurement structures need validation and replication."
    },
    {
      id: "efa-pca-21",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "Communality is about:",
      options: ["How much of an observed variable's variance is accounted for by retained factors.", "The alpha threshold.", "The number of groups in ANOVA.", "A participant's consent status."],
      answer: 0,
      explanation: "Communality reflects shared/explained variance for an item."
    },
    {
      id: "efa-pca-22",
      topic: "efa-pca",
      difficulty: "applied",
      prompt: "An item has low loadings on every factor. What is the most likely interpretation?",
      options: ["It may not fit the retained factor structure well.", "It is the best item in the scale by definition.", "It proves the factor is causal.", "It means alpha is exactly .05."],
      answer: 0,
      explanation: "Low loadings suggest weak relation to the extracted factors."
    },

    // Probability, Bayes, and repeatable science: heavy extra coverage for base rates and evidence.
    {
      id: "probability-repeatability-11",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "If P(A) = .80, what is P(not A)?",
      options: [".20", ".80", ".64", "1.80"],
      answer: 0,
      explanation: "The complement is 1 - .80 = .20."
    },
    {
      id: "probability-repeatability-12",
      topic: "probability-repeatability",
      difficulty: "applied",
      prompt: "A test has high sensitivity but low specificity. What problem is most likely?",
      options: ["It may catch most true cases but also produce many false positives.", "It never detects true cases.", "It has no false positives.", "It makes base rates irrelevant."],
      answer: 0,
      explanation: "Low specificity means healthy/non-case people may be falsely flagged."
    },
    {
      id: "probability-repeatability-13",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "A prior probability is:",
      options: ["Belief or probability before considering the new evidence.", "The p value after the study.", "The residual in a regression.", "The number of ANOVA groups."],
      answer: 0,
      explanation: "Bayesian updating starts with a prior before incorporating evidence."
    },
    {
      id: "probability-repeatability-14",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "A posterior probability is:",
      options: ["Updated belief after considering the evidence.", "A group mean before data collection.", "The same thing as a histogram.", "Always equal to alpha."],
      answer: 0,
      explanation: "Posterior belief combines prior information with evidence."
    },
    {
      id: "probability-repeatability-15",
      topic: "probability-repeatability",
      difficulty: "applied",
      prompt: "A Bayes factor of 10 in favour of a hypothesis means the data are:",
      options: ["Ten times more likely under that hypothesis than under the comparison hypothesis.", "Proof that the hypothesis is definitely true.", "A p value of .10.", "A sample size of 10."],
      answer: 0,
      explanation: "Bayes factors compare how well hypotheses predict the observed data."
    },
    {
      id: "probability-repeatability-16",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "The Linda problem is used to show that people often:",
      options: ["Judge a conjunction as more likely than one of its parts.", "Always calculate base rates correctly.", "Never use representativeness.", "Understand p values perfectly."],
      answer: 0,
      explanation: "Adding a condition narrows an event, but representativeness can mislead intuition."
    },
    {
      id: "probability-repeatability-17",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "Robustness most directly asks whether:",
      options: ["Conclusions hold across reasonable analysis choices or assumptions.", "The same code reruns on the same data only.", "A new sample gives a similar result only.", "A p value is below .05 exactly."],
      answer: 0,
      explanation: "Robustness concerns sensitivity to analytic and modelling choices."
    },
    {
      id: "probability-repeatability-18",
      topic: "probability-repeatability",
      difficulty: "applied",
      prompt: "A researcher excludes participants using five different rules and reports the rule that gives p < .05. Which repeatable-science concern is most relevant?",
      options: ["Analytic flexibility can create fragile significant findings.", "The result is automatically more replicable.", "Base rates have no role.", "The study has too few visual images."],
      answer: 0,
      explanation: "Flexible exclusion choices can turn chance patterns into reported findings."
    },
    {
      id: "probability-repeatability-19",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "Open data and shared analysis code most directly support:",
      options: ["Reproducibility.", "A larger main effect.", "Lower participant anxiety.", "A guaranteed replication."],
      answer: 0,
      explanation: "Shared materials let others rerun and inspect the same analyses."
    },
    {
      id: "probability-repeatability-20",
      topic: "probability-repeatability",
      difficulty: "applied",
      prompt: "A finding appears in one small study but fails in several larger, well-powered studies. Which concern is most relevant?",
      options: ["Replicability.", "Whether the first study used four answer options.", "Whether the first author used a histogram.", "Whether the variable names were short."],
      answer: 0,
      explanation: "Replication asks whether findings recur in new samples and studies."
    },
    {
      id: "probability-repeatability-21",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "Which probability statement is a conditional probability?",
      options: ["The probability of depression given a positive screening result.", "The probability of depression plus the probability of anxiety.", "The probability of not depression.", "The total sample size."],
      answer: 0,
      explanation: "The phrase 'given a positive result' defines a conditional probability."
    },
    {
      id: "probability-repeatability-22",
      topic: "probability-repeatability",
      difficulty: "applied",
      prompt: "A rare-looking result is easier to obtain when a researcher measures many outcomes because:",
      options: ["Each additional test gives another chance for an extreme result under the null.", "More outcomes always reduce false positives.", "The null hypothesis becomes impossible.", "All outcomes become independent of theory."],
      answer: 0,
      explanation: "The repeatable-science lecture uses multiple tests to show how rare-looking findings accumulate."
    },
    {
      id: "probability-repeatability-23",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "Which phrase best captures 'same data, different analysts'?",
      options: ["Reasonable analytic choices can lead to different results.", "All analysts must make identical choices.", "Statistics are never useful.", "Replication is impossible by definition."],
      answer: 0,
      explanation: "Different analytical pipelines can affect conclusions, so transparency and robustness checks matter."
    }
  ];

  window.STUDY_DATA.questions.push(...moreQuestions);
})();
