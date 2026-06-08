/*
  Initial assignment document reference:
  - Lecture slides are treated as the source of truth for examinable content.
  - The annotated 2025 PSYCH 306 exam is used only to mirror question style:
    applied scenarios, four alternatives, and single-best-answer wording.
*/
window.STUDY_DATA = {
  topics: [
    {
      id: "foundations",
      title: "Research Foundations",
      weeks: "Weeks 1 and 3",
      sources: ["W01_L1 Welcome", "W03_L1 Qualitative paradigms"],
      summary: "Research methods connect broad research aims to operational decisions: what counts as evidence, how constructs are measured, and what kinds of claims can be made.",
      keyPoints: [
        "A theoretical construct is the abstract idea being studied; operationalisation is the observable way it is measured or represented.",
        "Quantitative approaches usually prioritise measurement, patterns, prediction, and hypothesis testing.",
        "Qualitative approaches usually prioritise meaning, context, lived experience, and how or why questions.",
        "A paradigm shapes assumptions about reality, knowledge, values, methodology, and valid evidence.",
        "Good research design keeps the research question, data generation, analysis, and ethical commitments aligned."
      ]
    },
    {
      id: "ethics-maori",
      title: "Ethics, Mātauranga Māori and Kaupapa Māori",
      weeks: "Weeks 1 and 2",
      sources: ["W01_L2 Ethics", "W01_L3 Mātauranga Māori", "W02_L1 Kaupapa Māori", "W02_L2 Māori Data Sovereignty"],
      summary: "The early lectures frame research as an ethical, relational practice. Māori research requires attention to tikanga, rangatiratanga, whanaungatanga, whakapapa, manaakitanga, and collective benefit.",
      keyPoints: [
        "Ethics includes institutional rules and ongoing relational responsibilities before, during, and after a project.",
        "Kaupapa Māori is a non-deficit, by Māori/for Māori approach that challenges colonial assumptions in research.",
        "Vision Mātauranga asks researchers to value and apply Māori knowledge in ways that benefit Aotearoa.",
        "Māori Data Sovereignty concerns Māori rights and interests in data about Māori people, resources, and environments.",
        "Te Mana Raraunga principles include rangatiratanga, whakapapa, whanaungatanga, kotahitanga, manaakitanga, and kaitiakitanga."
      ]
    },
    {
      id: "visual-par",
      title: "Visual Methods and Participatory Action Research",
      weeks: "Weeks 3 and 4",
      sources: ["W03_L3 Visual research", "W04_L1 Democratising the method", "W04_L2 Photovoice", "W04_L3 PAR"],
      summary: "Visual methods can democratise research by shifting who produces data, who sets the agenda, and how findings are represented. PAR links participation, action, and reflexivity.",
      keyPoints: [
        "The four Rs classify visual data as researcher-found, researcher-created, participant-generated, or representation/visualisation of data.",
        "Photovoice is participatory and often aims to raise consciousness or support social change.",
        "Photo-elicitation uses images to support discussion; the interview may focus on the image or use the image as a bridge.",
        "Participatory Action Research treats participants as co-researchers and follows cycles of plan, act, observe, reflect, and repeat.",
        "Visual projects still require careful attention to consent, image safety, power, and accountability."
      ]
    },
    {
      id: "mixed-methods",
      title: "Mixed Methods",
      weeks: "Week 5",
      sources: ["W05_L1 Introduction to mixed methods", "W05_L2 Mixed methods designs", "W05_L3 Sampling and integration"],
      summary: "Mixed methods deliberately combine qualitative and quantitative approaches so that each contributes to the research question. Integration is the defining feature.",
      keyPoints: [
        "Convergent designs collect qualitative and quantitative data in the same phase and bring results together.",
        "Explanatory sequential designs use quantitative results first, then qualitative follow-up to explain them.",
        "Exploratory sequential designs begin qualitatively, then build or test quantitatively.",
        "Sampling can be nested, parallel, sequential, or multilevel depending on the design purpose.",
        "Integration can occur through design, methods, interpretation, joint displays, or meta-inferences."
      ]
    },
    {
      id: "pacific",
      title: "Pacific Frameworks and Co-Design",
      weeks: "Week 6",
      sources: ["W06_L1 Pacific methods", "W06_L2 Co-design in Pacific mixed methods", "W06_L3 Applying Pacific frameworks"],
      summary: "Pacific research frameworks centre relationships, values, cultural knowledge, and community benefit. Co-design makes affected communities partners in shaping research.",
      keyPoints: [
        "Pacific research values commonly include relationality, respect, reciprocity, collective responsibility, and service.",
        "Va or vā highlights relational space rather than empty space.",
        "Co-design involves shared problem definition, design, interpretation, and use of findings.",
        "The Manalagi example links Pacific Rainbow+ health research with mixed methods and community partnership.",
        "The Tivaevae framework can guide planning, methods, data collection, interpretation, and return of findings."
      ]
    },
    {
      id: "quant-basics",
      title: "Quantitative Basics",
      weeks: "Week 7",
      sources: ["W07_L01 Intro to quantitative methods"],
      summary: "The quantitative block starts with variables, distributions, descriptive statistics, variance, covariance, and translating research questions into statistical questions.",
      keyPoints: [
        "A variable is any measured or manipulated feature that can vary across cases.",
        "The mean is sensitive to outliers; the median is often more robust for skewed data.",
        "Variance and standard deviation describe spread around the mean.",
        "Covariance describes whether two variables vary together; correlation standardises covariance.",
        "Statistical questions need a defined outcome variable, predictor or grouping variable, and population/sample context."
      ]
    },
    {
      id: "nhst",
      title: "NHST, p Values and Uncertainty",
      weeks: "Weeks 7 and 8",
      sources: ["W07_L02 NHST", "W08_L3 NHST best practice"],
      summary: "Null-hypothesis significance testing asks how surprising data would be under a null model. Good practice avoids overclaiming and reports uncertainty.",
      keyPoints: [
        "A p value is the probability of data at least as extreme as observed, assuming the null model is true.",
        "Alpha is the long-run false-positive threshold chosen before testing.",
        "A Type I error is a false positive; a Type II error is a false negative.",
        "Confidence intervals show a range of compatible parameter values under repeated-sampling logic.",
        "Researcher degrees of freedom, multiple testing, and selective reporting increase false-positive risk."
      ]
    },
    {
      id: "ttests",
      title: "t-Tests and Two-Group Designs",
      weeks: "Week 8",
      sources: ["W08_L1 Introduction to t-tests", "W08_L2 Comparing two groups", "W08_L3 Assumptions"],
      summary: "t-tests compare means while accounting for variability and sample size. The correct test depends on the study design and whether observations are independent or paired.",
      keyPoints: [
        "A one-sample t-test compares a sample mean with a known or hypothesised value.",
        "An independent-samples t-test compares two separate groups.",
        "A paired-samples t-test compares two linked measurements from the same units or matched pairs.",
        "Welch's t-test is useful when group variances are unequal.",
        "Non-parametric alternatives can help when assumptions are badly violated, but they answer slightly different questions."
      ]
    },
    {
      id: "anova",
      title: "ANOVA, Factorial Designs and Interactions",
      weeks: "Week 9",
      sources: ["W09_L1 ANOVA", "W09_L2 Factorial ANOVA", "W09_L3 Interactions"],
      summary: "ANOVA compares means across groups using variance partitioning. Factorial ANOVA examines more than one predictor and whether predictors interact.",
      keyPoints: [
        "A one-way ANOVA tests mean differences across three or more groups for one factor.",
        "The F statistic compares between-group variability with within-group variability.",
        "An omnibus ANOVA can show that not all means are equal, but follow-up tests identify where differences lie.",
        "A main effect is the average effect of one factor across levels of another factor.",
        "An interaction means the effect of one predictor changes depending on the level of another predictor."
      ]
    },
    {
      id: "correlation-regression",
      title: "Correlation and Regression",
      weeks: "Week 10",
      sources: ["W10_L1 Correlation", "W10_L2 Regression"],
      summary: "Correlation quantifies association between continuous variables. Regression builds a line or model for prediction and explains fitted values, residuals, slopes, and goodness of fit.",
      keyPoints: [
        "Pearson's r ranges from -1 to +1 and describes direction and strength of linear association.",
        "Correlation does not establish causation.",
        "A regression intercept is the predicted outcome when the predictor equals zero.",
        "A regression slope is the expected change in the outcome for a one-unit change in the predictor.",
        "Residuals are prediction errors; R squared describes the proportion of outcome variance explained by the model."
      ]
    },
    {
      id: "efa-pca",
      title: "PCA, EFA and Measurement",
      weeks: "Week 10",
      sources: ["W10_L3 EFA/PCA wrap-up"],
      summary: "PCA and EFA are dimension-reduction tools used to find structure in many measured variables, but they answer different questions and require careful interpretation.",
      keyPoints: [
        "PCA creates components that summarise variance in observed variables.",
        "EFA estimates latent factors that may explain patterns of covariance among observed variables.",
        "Loadings describe how strongly variables relate to components or factors.",
        "Rotation can make patterns easier to interpret without changing the underlying data source.",
        "These methods support measurement thinking but do not prove a construct is real on their own."
      ]
    },
    {
      id: "probability-repeatability",
      title: "Probability, Bayes and Repeatable Science",
      weeks: "Weeks 11 and 12",
      sources: ["W11 Probability", "W11 Reproducibility", "W11-12 Bayes", "W11-12 Repeatable science"],
      summary: "The final lectures frame probability as uncertainty, Bayes as updating belief with evidence, and repeatable science as reproducible, robust, and replicable evidence.",
      keyPoints: [
        "Complements mean not A; intersections mean A and B; conditional probability means A given B.",
        "Base rates matter when interpreting tests and screening results.",
        "Bayes' theorem updates prior beliefs using evidence or likelihood ratios/Bayes factors.",
        "Multiple tests create more opportunities for rare-looking significant findings.",
        "Reproducibility, robustness, and replicability are related but distinct checks on evidence."
      ]
    }
  ],
  questions: [
    {
      id: "foundations-01",
      topic: "foundations",
      difficulty: "core",
      prompt: "A researcher wants to know whether time pressure reduces careful reading. They record how many factual errors students make while reading under a two-minute deadline. What is the theoretical construct and how is it operationalised?",
      options: ["Time pressure, operationalised as factual errors.", "Careful reading, operationalised as the number of factual errors.", "The two-minute deadline, operationalised as careful reading.", "Students, operationalised as factual errors."],
      answer: 1,
      explanation: "The construct is careful reading. The observable measure is the number of factual errors made under the timed condition."
    },
    {
      id: "foundations-02",
      topic: "foundations",
      difficulty: "core",
      prompt: "Which research question is most naturally aligned with a qualitative research design?",
      options: ["What proportion of students use lecture recordings each week?", "Does a revision app increase quiz scores by at least 10%?", "How do students describe the experience of preparing for a high-stakes exam?", "Is mean attendance higher in tutorials or lectures?"],
      answer: 2,
      explanation: "Qualitative designs are well suited to meaning, experience, context, and how/why questions."
    },
    {
      id: "foundations-03",
      topic: "foundations",
      difficulty: "core",
      prompt: "A survey asks participants to rate loneliness from 1 to 7. In this study, the rating scale is best described as:",
      options: ["A paradigm.", "An operationalisation of loneliness.", "A sampling frame.", "A qualitative interview prompt."],
      answer: 1,
      explanation: "The scale turns the abstract construct of loneliness into an observable measured variable."
    },
    {
      id: "foundations-04",
      topic: "foundations",
      difficulty: "applied",
      prompt: "A researcher says, 'Reality can be measured objectively if we use reliable instruments.' Which part of a research paradigm is this statement mainly about?",
      options: ["Ontology and epistemology.", "Participant recruitment only.", "The formatting of a questionnaire.", "The number of variables in the dataset."],
      answer: 0,
      explanation: "The statement concerns assumptions about reality and how knowledge about it can be produced."
    },
    {
      id: "foundations-05",
      topic: "foundations",
      difficulty: "core",
      prompt: "Which pairing is the best match?",
      options: ["Quantitative: lived meaning; Qualitative: numerical prediction.", "Quantitative: measurement and patterns; Qualitative: meaning and context.", "Quantitative: no theory; Qualitative: no evidence.", "Quantitative: ethics; Qualitative: statistics."],
      answer: 1,
      explanation: "The lectures contrast quantitative measurement/patterns with qualitative meaning/context, while noting both can be rigorous."
    },
    {
      id: "foundations-06",
      topic: "foundations",
      difficulty: "applied",
      prompt: "A student proposes to study 'wellbeing' by asking only whether people own a car. What is the main design problem?",
      options: ["The operationalisation may not validly capture the construct.", "The research has too many dependent variables.", "The project is automatically qualitative.", "The sample size must be exactly 30."],
      answer: 0,
      explanation: "Owning a car is unlikely to be a valid stand-in for the broader construct of wellbeing without a strong rationale."
    },
    {
      id: "foundations-07",
      topic: "foundations",
      difficulty: "core",
      prompt: "Which statement best describes why research questions matter for method choice?",
      options: ["They determine whether the findings will be true before data are collected.", "They align the construct, data generation, analysis, and interpretation.", "They remove the need for ethics review.", "They make all qualitative and quantitative methods interchangeable."],
      answer: 1,
      explanation: "The method should follow from the question and the kind of evidence needed to answer it."
    },
    {
      id: "foundations-08",
      topic: "foundations",
      difficulty: "applied",
      prompt: "A project asks whether a new sleep programme lowers average anxiety scores compared with usual care. Which wording best captures the statistical version of the question?",
      options: ["What does anxiety feel like for participants?", "Is the mean anxiety score different between the programme and usual-care groups?", "Why do people value sleep?", "How should the researchers build rapport?"],
      answer: 1,
      explanation: "The statistical question defines the outcome, groups, and comparison."
    },
    {
      id: "foundations-09",
      topic: "foundations",
      difficulty: "core",
      prompt: "Which claim is the weakest if it comes from a cross-sectional observational survey?",
      options: ["The variables were associated in this sample.", "Participants reported both variables at one point in time.", "The survey proves that one variable caused the other.", "The results may motivate future research."],
      answer: 2,
      explanation: "Causal claims need stronger design support than a one-time observational association."
    },
    {
      id: "foundations-10",
      topic: "foundations",
      difficulty: "applied",
      prompt: "A researcher changes their interview questions after early participants raise an unexpected issue. This is most consistent with:",
      options: ["A flexible qualitative design responsive to emerging meaning.", "A violation that makes all qualitative research invalid.", "A one-way ANOVA.", "A fixed operational definition for a lab measure."],
      answer: 0,
      explanation: "Qualitative designs often adapt to emerging context while maintaining reflexive and ethical rigour."
    },

    {
      id: "ethics-maori-01",
      topic: "ethics-maori",
      difficulty: "core",
      prompt: "Which option best reflects relational ethics as discussed in the early lectures?",
      options: ["Ethics ends once the consent form is signed.", "Ethics includes ongoing responsibilities within relationships and contexts.", "Ethics is only relevant to clinical trials.", "Ethics is mainly about avoiding statistics errors."],
      answer: 1,
      explanation: "Relational ethics goes beyond compliance and considers responsibilities, relationships, power, and accountability."
    },
    {
      id: "ethics-maori-02",
      topic: "ethics-maori",
      difficulty: "core",
      prompt: "Kaupapa Māori research is best described as:",
      options: ["A deficit model for explaining Māori outcomes.", "A by Māori, for Māori approach grounded in Māori values and self-determination.", "A method that excludes qualitative data.", "A synonym for random sampling."],
      answer: 1,
      explanation: "The lecture frames Kaupapa Māori as non-deficit, Indigenous, and grounded in Māori authority and benefit."
    },
    {
      id: "ethics-maori-03",
      topic: "ethics-maori",
      difficulty: "core",
      prompt: "In Māori Data Sovereignty, rangatiratanga most directly points to:",
      options: ["Authority and control over Māori data.", "The p value of a test.", "A purely individual consent process.", "Removing whakapapa from data interpretation."],
      answer: 0,
      explanation: "Rangatiratanga concerns authority, self-determination, and control."
    },
    {
      id: "ethics-maori-04",
      topic: "ethics-maori",
      difficulty: "applied",
      prompt: "A research team collects iwi affiliation data, stores it overseas without consultation, and plans commercial reuse. Which concern is most directly raised by the Māori Data Sovereignty lecture?",
      options: ["Whether the data are normally distributed.", "Whether Māori rights and interests in the data are being upheld.", "Whether the survey has too many Likert items.", "Whether the project should use a paired t-test."],
      answer: 1,
      explanation: "The issue is governance, authority, relationships, and future use of Māori data."
    },
    {
      id: "ethics-maori-05",
      topic: "ethics-maori",
      difficulty: "core",
      prompt: "Which principle is most closely linked with relationships and obligations in Te Mana Raraunga?",
      options: ["Whanaungatanga.", "Homoscedasticity.", "Omnibus testing.", "Principal components."],
      answer: 0,
      explanation: "Whanaungatanga centres relationships and obligations."
    },
    {
      id: "ethics-maori-06",
      topic: "ethics-maori",
      difficulty: "applied",
      prompt: "A non-Māori researcher wants to include mātauranga Māori because it will make a grant application look stronger, but has no plan for Māori partnership or benefit. What is the best critique?",
      options: ["The project may be extractive because it uses Māori knowledge without appropriate relationships or benefit.", "The project is invalid only because it is qualitative.", "The project must use Bayesian analysis.", "The project has too much collective benefit."],
      answer: 0,
      explanation: "The lectures stress partnership, tikanga, rangatiratanga, and meaningful benefit rather than tokenistic inclusion."
    },
    {
      id: "ethics-maori-07",
      topic: "ethics-maori",
      difficulty: "core",
      prompt: "Vision Mātauranga is best understood in this course as encouraging researchers to:",
      options: ["Treat Māori knowledge as irrelevant to science.", "Recognise and apply Māori knowledge for social, cultural, environmental, and economic benefit.", "Replace all research methods with surveys.", "Avoid consultation because it slows research down."],
      answer: 1,
      explanation: "Vision Mātauranga values Māori knowledge and its application for Aotearoa."
    },
    {
      id: "ethics-maori-08",
      topic: "ethics-maori",
      difficulty: "core",
      prompt: "Which option best captures a non-deficit approach?",
      options: ["Explaining outcomes only as failures of Māori individuals.", "Starting from strengths, context, self-determination, and structural conditions.", "Removing culture from interpretation.", "Assuming Western measures are always neutral."],
      answer: 1,
      explanation: "A non-deficit stance resists blaming communities and attends to strengths, context, and power."
    },
    {
      id: "ethics-maori-09",
      topic: "ethics-maori",
      difficulty: "applied",
      prompt: "A team promises participants that findings will be returned to their community in an accessible hui. Which ethical idea does this most clearly support?",
      options: ["Reciprocity and accountability.", "Alpha inflation.", "Random assignment.", "Regression to the mean."],
      answer: 0,
      explanation: "Returning findings supports reciprocal and accountable relationships."
    },
    {
      id: "ethics-maori-10",
      topic: "ethics-maori",
      difficulty: "core",
      prompt: "Kaitiakitanga in data and research contexts most closely refers to:",
      options: ["Guardianship or stewardship responsibilities.", "The spread of a sampling distribution.", "The slope of a regression line.", "The number of ANOVA factors."],
      answer: 0,
      explanation: "Kaitiakitanga is about guardianship, care, and stewardship."
    },

    {
      id: "visual-par-01",
      topic: "visual-par",
      difficulty: "core",
      prompt: "A researcher brings newspaper photographs to an interview and asks participants what the images mean to them. Which of the four Rs best fits the visual material?",
      options: ["Researcher-found visual data.", "Researcher-created visual data.", "Participant-generated visual data.", "Statistical visualisation of data."],
      answer: 0,
      explanation: "The images already existed and were introduced by the researcher."
    },
    {
      id: "visual-par-02",
      topic: "visual-par",
      difficulty: "core",
      prompt: "Participants take photographs of places where they feel safe, then discuss them in small groups. This is best described as:",
      options: ["Participant-generated visual data.", "A one-sample t-test.", "Researcher-found visual data only.", "A purely archival design."],
      answer: 0,
      explanation: "Participants create the visual material used for discussion and analysis."
    },
    {
      id: "visual-par-03",
      topic: "visual-par",
      difficulty: "applied",
      prompt: "Why might visual methods help democratise an interview with a marginalised community?",
      options: ["They guarantee the researcher has no power.", "They can let participants set more of the agenda and shift the exchange away from extraction.", "They remove the need for consent.", "They convert all qualitative data into numbers."],
      answer: 1,
      explanation: "The lecture links visual methods to shifting power and making interviews more of an exchange."
    },
    {
      id: "visual-par-04",
      topic: "visual-par",
      difficulty: "core",
      prompt: "Participatory Action Research is defined most directly by which combination?",
      options: ["Participation, action, and reflexivity.", "Randomisation, blinding, and control.", "Mean, median, and mode.", "PCA, EFA, and rotation."],
      answer: 0,
      explanation: "PAR treats participants as co-researchers, aims for change, and requires reflexivity about power and bias."
    },
    {
      id: "visual-par-05",
      topic: "visual-par",
      difficulty: "core",
      prompt: "The PAR cycle is best represented as:",
      options: ["Plan, act, observe, reflect, repeat.", "Sample, regress, rotate, publish.", "Consent, conceal, exclude, forget.", "Hypothesise, p-hack, report, replicate."],
      answer: 0,
      explanation: "The slide states the iterative PAR cycle as plan, act, observe, reflect, repeat."
    },
    {
      id: "visual-par-06",
      topic: "visual-par",
      difficulty: "applied",
      prompt: "A photovoice project ends with a public exhibition intended to influence policy. Which lecture idea does this most closely reflect?",
      options: ["Research should result in some action.", "Visual methods are only decorative.", "Participants should not interpret their own photos.", "Researcher neutrality means no social change goal."],
      answer: 0,
      explanation: "Photovoice and PAR emphasise action, consciousness-raising, and practical outcomes."
    },
    {
      id: "visual-par-07",
      topic: "visual-par",
      difficulty: "core",
      prompt: "Which of the following is NOT one of the four Rs of visual research methods?",
      options: ["Researcher-found visual data.", "Respondent-generated visual data.", "Representation and visualisation of data.", "Randomised visual data."],
      answer: 3,
      explanation: "Randomised visual data is not part of the four Rs framework."
    },
    {
      id: "visual-par-08",
      topic: "visual-par",
      difficulty: "applied",
      prompt: "A researcher photographs their own community practice and writes from their position as a member of that community. This most closely fits:",
      options: ["Researcher-created visual data.", "Participant-generated survey data.", "A Bonferroni correction.", "A null model."],
      answer: 0,
      explanation: "The visual material is created by the researcher, often with autoethnographic or autobiographical possibilities."
    },
    {
      id: "visual-par-09",
      topic: "visual-par",
      difficulty: "core",
      prompt: "In visual qualitative analysis, why are both the image and the interview account treated as data?",
      options: ["Because meaning is made through both visual material and participant talk.", "Because images are always more objective than speech.", "Because the interview should be ignored.", "Because all photos have a single correct meaning."],
      answer: 0,
      explanation: "The lecture notes that visual materials and interview accounts are both analysed."
    },
    {
      id: "visual-par-10",
      topic: "visual-par",
      difficulty: "applied",
      prompt: "A photo-elicitation project asks participants to photograph family members without discussing consent or safety. What is the best concern?",
      options: ["Image-making ethics and participant safety have not been adequately considered.", "The project is impossible because photos cannot be analysed.", "The only issue is that the sample size is too small for ANOVA.", "The method must be converted to PCA."],
      answer: 0,
      explanation: "Visual methods require training and attention to ethical and safe image making."
    },

    {
      id: "mixed-methods-01",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "What is the defining feature of mixed-methods research?",
      options: ["Using two surveys instead of one.", "Integrating qualitative and quantitative approaches to answer a research question.", "Avoiding interpretation.", "Collecting data from exactly equal sample sizes."],
      answer: 1,
      explanation: "Integration is the defining feature, not merely having two datasets."
    },
    {
      id: "mixed-methods-02",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "A study collects survey scores and interview data during the same phase, then compares and combines the findings. Which design is this?",
      options: ["Convergent mixed-methods design.", "Explanatory sequential design.", "Exploratory sequential design.", "One-way ANOVA."],
      answer: 0,
      explanation: "Convergent designs collect qualitative and quantitative data in parallel and bring results together."
    },
    {
      id: "mixed-methods-03",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "A researcher first runs a large survey, then interviews selected participants to explain surprising survey patterns. Which design is this?",
      options: ["Explanatory sequential design.", "Exploratory sequential design.", "Pure ethnography.", "Participant-generated visual design."],
      answer: 0,
      explanation: "Quantitative results come first, with qualitative follow-up to explain them."
    },
    {
      id: "mixed-methods-04",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "A team interviews participants to build a culturally appropriate scale, then tests the scale in a larger sample. Which design is this?",
      options: ["Exploratory sequential design.", "Convergent design.", "Explanatory sequential design.", "Factorial ANOVA."],
      answer: 0,
      explanation: "Qualitative exploration comes first, followed by quantitative development or testing."
    },
    {
      id: "mixed-methods-05",
      topic: "mixed-methods",
      difficulty: "applied",
      prompt: "A project reports a survey and interview study but never connects the two results. What is the main mixed-methods weakness?",
      options: ["There is little or no integration.", "The project has too much qualitative depth.", "The p value is automatically invalid.", "The sample must be multilevel."],
      answer: 0,
      explanation: "Without integration, the project is not making full mixed-methods use of both strands."
    },
    {
      id: "mixed-methods-06",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "Which tool is often used to show integration by placing qualitative and quantitative results together?",
      options: ["A joint display.", "A normal distribution only.", "A random number table.", "A consent withdrawal form."],
      answer: 0,
      explanation: "Joint displays help compare, connect, or merge qualitative and quantitative findings."
    },
    {
      id: "mixed-methods-07",
      topic: "mixed-methods",
      difficulty: "applied",
      prompt: "In a nested mixed-methods design, the qualitative component is usually:",
      options: ["Embedded within a larger design to address a specific part of the question.", "Always unrelated to the quantitative strand.", "Required to have a larger sample than the quantitative strand.", "The same thing as a confidence interval."],
      answer: 0,
      explanation: "Nested sampling embeds one strand within another for a clear purpose."
    },
    {
      id: "mixed-methods-08",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "What is a meta-inference in mixed methods?",
      options: ["An overall interpretation drawn from integrated qualitative and quantitative findings.", "A statistical test used only for two groups.", "A rule that qualitative data should be excluded.", "A measure of standard deviation."],
      answer: 0,
      explanation: "Meta-inferences are the broader conclusions formed after integration."
    },
    {
      id: "mixed-methods-09",
      topic: "mixed-methods",
      difficulty: "applied",
      prompt: "A researcher uses interviews to explain why one survey subgroup scored lower than expected. The qualitative sample is selected from survey respondents. This is best described as:",
      options: ["Sequential sampling that links the quantitative and qualitative phases.", "A violation of all mixed-methods designs.", "Researcher-created visual data.", "A one-sample design."],
      answer: 0,
      explanation: "The sample is intentionally linked across phases to support explanation."
    },
    {
      id: "mixed-methods-10",
      topic: "mixed-methods",
      difficulty: "core",
      prompt: "Which question best fits the logic of mixed methods?",
      options: ["How common is an outcome, and how do participants explain their experiences of it?", "What is the exact value of alpha?", "Can we remove all context from interpretation?", "How many photos fit on one slide?"],
      answer: 0,
      explanation: "Mixed methods are useful when both pattern/extent and meaning/explanation matter."
    },

    {
      id: "pacific-01",
      topic: "pacific",
      difficulty: "core",
      prompt: "In Pacific research frameworks, vā is best understood as:",
      options: ["Relational space that needs care and attention.", "Empty space between unrelated individuals.", "A measure of sampling error.", "A regression coefficient."],
      answer: 0,
      explanation: "The Pacific methods lecture frames space as relational, not empty."
    },
    {
      id: "pacific-02",
      topic: "pacific",
      difficulty: "core",
      prompt: "Which set best matches common Pacific research values discussed in the lectures?",
      options: ["Respect, reciprocity, relationships, collective responsibility.", "Randomisation, blinding, alpha, beta.", "Outliers, residuals, variance, covariance.", "Isolation, extraction, speed, anonymity only."],
      answer: 0,
      explanation: "Pacific methods centre relational values, respect, reciprocity, and collective responsibility."
    },
    {
      id: "pacific-03",
      topic: "pacific",
      difficulty: "applied",
      prompt: "A study invites Pacific Rainbow+ communities only after the questionnaire is finalised. What is the strongest co-design critique?",
      options: ["Community partners were not involved early enough in defining the problem and design.", "The study has too many qualitative themes.", "All Pacific research must avoid surveys.", "The study should use only PCA."],
      answer: 0,
      explanation: "Co-design involves shared shaping of the research, not just late consultation."
    },
    {
      id: "pacific-04",
      topic: "pacific",
      difficulty: "core",
      prompt: "The Manalagi example is most closely connected to:",
      options: ["Pacific Rainbow+ health research using co-design and mixed methods.", "A one-way ANOVA comparing three means.", "A formula for covariance.", "A purely researcher-created visual method."],
      answer: 0,
      explanation: "The lecture uses Manalagi as an example of Pacific Rainbow+ co-designed mixed-methods research."
    },
    {
      id: "pacific-05",
      topic: "pacific",
      difficulty: "core",
      prompt: "The Tivaevae framework is useful in research because it:",
      options: ["Offers a culturally meaningful way to guide planning, methods, interpretation, and returning findings.", "Removes the need for participants.", "Applies only to statistical formulae.", "Requires all research to be individualistic."],
      answer: 0,
      explanation: "The framework supports culturally grounded decisions across the research process."
    },
    {
      id: "pacific-06",
      topic: "pacific",
      difficulty: "applied",
      prompt: "A Pacific research team plans a community talanoa before designing the survey. What value is most clearly being supported?",
      options: ["Relational engagement before data extraction.", "A higher Type I error rate.", "Removing participant voice.", "Ignoring collective benefit."],
      answer: 0,
      explanation: "The action prioritises relationship-building and community input."
    },
    {
      id: "pacific-07",
      topic: "pacific",
      difficulty: "core",
      prompt: "Co-design in research most directly means:",
      options: ["Affected communities share decisions across the research process.", "Participants only fill out forms designed by researchers.", "The researcher hides all findings until publication.", "The project must avoid mixed methods."],
      answer: 0,
      explanation: "Co-design shares power over design, interpretation, and application."
    },
    {
      id: "pacific-08",
      topic: "pacific",
      difficulty: "applied",
      prompt: "A project measures distress in a Pacific community using a Western scale without checking cultural meaning. What is the best concern?",
      options: ["The measure may miss culturally specific values and meanings.", "The project is invalid because it includes numbers.", "The answer must be Bonferroni corrected.", "The project is automatically a photovoice study."],
      answer: 0,
      explanation: "The lecture on applying Pacific frameworks stresses values, meanings, and culturally grounded measurement."
    },
    {
      id: "pacific-09",
      topic: "pacific",
      difficulty: "core",
      prompt: "Which phrase best captures 'service' in Pacific research values?",
      options: ["Research should contribute to community benefit and responsibilities.", "Research should maximise researcher control.", "Research should avoid returning findings.", "Research should only produce p values."],
      answer: 0,
      explanation: "Service is linked to responsibility, contribution, and collective benefit."
    },
    {
      id: "pacific-10",
      topic: "pacific",
      difficulty: "applied",
      prompt: "If a Pacific mixed-methods project finds survey results and talanoa accounts disagree, what should the researchers do?",
      options: ["Treat the difference as an integration finding that needs interpretation with partners.", "Delete the qualitative data.", "Assume the survey is automatically wrong.", "Report only the result with p < .05."],
      answer: 0,
      explanation: "Mixed and Pacific frameworks both support careful interpretation with context and relationships."
    },

    {
      id: "quant-basics-01",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "Which variable is continuous?",
      options: ["Reaction time in milliseconds.", "Tutorial group name.", "Whether a participant consented.", "Study condition: control or treatment."],
      answer: 0,
      explanation: "Reaction time can take many numeric values along a continuum."
    },
    {
      id: "quant-basics-02",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "A distribution has a few extremely high scores. Which measure of central tendency is usually more robust to those outliers?",
      options: ["Median.", "Mean.", "Variance.", "Covariance."],
      answer: 0,
      explanation: "The median is less pulled by extreme scores than the mean."
    },
    {
      id: "quant-basics-03",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "What does standard deviation describe?",
      options: ["Typical spread of scores around the mean.", "The direction of a causal relationship.", "The number of variables in a dataset.", "The probability that the null is true."],
      answer: 0,
      explanation: "Standard deviation describes variability around the mean in original units."
    },
    {
      id: "quant-basics-04",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "If every score in a dataset is identical, the variance is:",
      options: ["Zero.", "One.", "Negative.", "Impossible to calculate because the mean is missing."],
      answer: 0,
      explanation: "There is no spread around the mean when every value is identical."
    },
    {
      id: "quant-basics-05",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "Covariance is mainly about:",
      options: ["Whether two variables vary together.", "Whether one group has exactly 30 people.", "Whether a codebook is public.", "Whether a qualitative interview is structured."],
      answer: 0,
      explanation: "Covariance captures joint variation between two variables."
    },
    {
      id: "quant-basics-06",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "A researcher records condition as 0 = control and 1 = intervention. The numbers are best understood as:",
      options: ["Category labels, not true quantities.", "A continuous measure of wellbeing.", "A standard deviation.", "A p value."],
      answer: 0,
      explanation: "Numeric coding can represent categories; it does not make the variable continuous."
    },
    {
      id: "quant-basics-07",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "What is a dataset row most commonly used to represent?",
      options: ["One observation or case.", "One theory chapter.", "One p value only.", "One research paradigm."],
      answer: 0,
      explanation: "Rows usually represent cases or observations, while columns represent variables."
    },
    {
      id: "quant-basics-08",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "A histogram has most scores near the lower end and a long tail to the right. It is best described as:",
      options: ["Right-skewed.", "Perfectly symmetric.", "A categorical variable.", "A factorial interaction."],
      answer: 0,
      explanation: "A long tail toward higher values is right skew."
    },
    {
      id: "quant-basics-09",
      topic: "quant-basics",
      difficulty: "core",
      prompt: "Which statement about sum of squares is correct?",
      options: ["It adds squared deviations from a reference value such as the mean.", "It is always the same as the sample size.", "It is the probability of the observed data.", "It can only be used in qualitative research."],
      answer: 0,
      explanation: "Sum of squares accumulates squared deviations and underpins variance and ANOVA."
    },
    {
      id: "quant-basics-10",
      topic: "quant-basics",
      difficulty: "applied",
      prompt: "Which option best translates 'Does stress predict sleep quality?' into quantitative variables?",
      options: ["Predictor: stress score; outcome: sleep quality score.", "Predictor: sleep quality score; outcome: tutorial room.", "Predictor: ethics approval; outcome: paradigm.", "Predictor: participant name; outcome: consent form."],
      answer: 0,
      explanation: "The predictor is stress and the outcome is sleep quality."
    },

    {
      id: "nhst-01",
      topic: "nhst",
      difficulty: "core",
      prompt: "A p value is best interpreted as:",
      options: ["The probability of data at least this extreme if the null model were true.", "The probability that the null hypothesis is true.", "The size of the effect.", "The probability that the researcher is biased."],
      answer: 0,
      explanation: "The lectures emphasise the conditional logic: data extremeness given the null model."
    },
    {
      id: "nhst-02",
      topic: "nhst",
      difficulty: "core",
      prompt: "A test gives p = .078 with alpha = .05. Which decision follows under standard NHST?",
      options: ["Do not reject the null hypothesis.", "Reject the null hypothesis because .078 is below .05.", "Accept the alternative as proven.", "Conclude the null is definitely true."],
      answer: 0,
      explanation: "Because .078 is greater than .05, the result is not statistically significant at alpha .05."
    },
    {
      id: "nhst-03",
      topic: "nhst",
      difficulty: "core",
      prompt: "A false positive in NHST is also called:",
      options: ["A Type I error.", "A Type II error.", "A confidence interval.", "A residual."],
      answer: 0,
      explanation: "A Type I error occurs when the test rejects a true null hypothesis."
    },
    {
      id: "nhst-04",
      topic: "nhst",
      difficulty: "core",
      prompt: "A false negative in NHST is also called:",
      options: ["A Type II error.", "A Type I error.", "A main effect.", "A regression slope."],
      answer: 0,
      explanation: "A Type II error occurs when the test fails to reject a false null hypothesis."
    },
    {
      id: "nhst-05",
      topic: "nhst",
      difficulty: "applied",
      prompt: "A result is statistically significant but the effect is tiny and practically unimportant. What should the researcher conclude?",
      options: ["Statistical significance does not by itself establish practical importance.", "The effect must be large because p < .05.", "The null hypothesis is impossible.", "The confidence interval is irrelevant."],
      answer: 0,
      explanation: "Good NHST practice separates statistical evidence from practical or theoretical importance."
    },
    {
      id: "nhst-06",
      topic: "nhst",
      difficulty: "core",
      prompt: "Which practice increases false-positive risk?",
      options: ["Trying many analyses and reporting only the significant one.", "Pre-specifying the analysis plan.", "Reporting confidence intervals.", "Explaining all exclusions transparently."],
      answer: 0,
      explanation: "Researcher degrees of freedom and selective reporting inflate false positives."
    },
    {
      id: "nhst-07",
      topic: "nhst",
      difficulty: "applied",
      prompt: "If alpha is set to .01 instead of .05, what happens to the threshold for rejecting the null?",
      options: ["It becomes stricter.", "It becomes more lenient.", "It guarantees no Type II errors.", "It changes the sample mean."],
      answer: 0,
      explanation: "A lower alpha requires stronger evidence to reject the null."
    },
    {
      id: "nhst-08",
      topic: "nhst",
      difficulty: "core",
      prompt: "A 95% confidence interval is best used to:",
      options: ["Show a range of parameter values compatible with the data under repeated-sampling logic.", "Prove there is a 95% probability the null is false.", "Replace the research question.", "Measure participant motivation directly."],
      answer: 0,
      explanation: "Confidence intervals communicate uncertainty around an estimate."
    },
    {
      id: "nhst-09",
      topic: "nhst",
      difficulty: "applied",
      prompt: "A study reports p = .049 and says the theory is definitely true. What is the best critique?",
      options: ["The p value does not prove the theory; it only evaluates data under the null model.", "The result must be ignored because it is below .05.", "The p value is the effect size.", "A p value below .05 means no uncertainty remains."],
      answer: 0,
      explanation: "NHST does not prove theories; it provides one piece of evidence."
    },
    {
      id: "nhst-10",
      topic: "nhst",
      difficulty: "core",
      prompt: "Power is most directly related to:",
      options: ["The probability of detecting an effect when it is really there.", "The probability that a histogram is normal.", "The number of qualitative themes.", "The definition of a paradigm."],
      answer: 0,
      explanation: "Power is one minus the Type II error rate."
    },

    {
      id: "ttests-01",
      topic: "ttests",
      difficulty: "core",
      prompt: "A researcher compares one sample's mean anxiety score with a known population mean of 50. Which test is most appropriate?",
      options: ["One-sample t-test.", "Independent-samples t-test.", "Paired-samples t-test.", "Factorial ANOVA."],
      answer: 0,
      explanation: "A one-sample t-test compares a sample mean with a reference value."
    },
    {
      id: "ttests-02",
      topic: "ttests",
      difficulty: "core",
      prompt: "A researcher compares exam scores for students randomly assigned to a practice-app group or a usual-study group. Which test is most appropriate for two group means?",
      options: ["Independent-samples t-test.", "Paired-samples t-test.", "One-sample t-test.", "Pearson correlation."],
      answer: 0,
      explanation: "The two groups are separate, so the observations are independent."
    },
    {
      id: "ttests-03",
      topic: "ttests",
      difficulty: "core",
      prompt: "The same students complete a stress scale before and after a workshop. Which test is most appropriate for the mean change?",
      options: ["Paired-samples t-test.", "Independent-samples t-test.", "One-way ANOVA.", "PCA."],
      answer: 0,
      explanation: "The observations are linked within the same students."
    },
    {
      id: "ttests-04",
      topic: "ttests",
      difficulty: "applied",
      prompt: "Why does study design matter when choosing between independent and paired t-tests?",
      options: ["The tests assume different dependency structures among observations.", "Paired tests are always used for larger samples.", "Independent tests require qualitative interviews.", "The choice only changes graph colours."],
      answer: 0,
      explanation: "Paired data contain within-person or matched dependencies that the test must account for."
    },
    {
      id: "ttests-05",
      topic: "ttests",
      difficulty: "core",
      prompt: "Welch's t-test is commonly preferred when:",
      options: ["The two groups may have unequal variances.", "There are three independent groups.", "The outcome is a photograph.", "The researcher wants to run PCA."],
      answer: 0,
      explanation: "Welch's t-test handles unequal group variances better than the classic equal-variance test."
    },
    {
      id: "ttests-06",
      topic: "ttests",
      difficulty: "core",
      prompt: "Cohen's d is a measure of:",
      options: ["Effect size in standard-deviation units.", "The probability that the null is true.", "The number of groups.", "The p value threshold."],
      answer: 0,
      explanation: "Cohen's d expresses a mean difference relative to standard deviation."
    },
    {
      id: "ttests-07",
      topic: "ttests",
      difficulty: "applied",
      prompt: "A t-test is non-significant but Cohen's d is moderate with a wide confidence interval. What is the best interpretation?",
      options: ["The estimate is uncertain; the study may lack precision or power.", "There is definitely no effect.", "The p value proves the effect is exactly zero.", "The confidence interval should be deleted."],
      answer: 0,
      explanation: "A wide interval signals uncertainty; non-significance does not prove no effect."
    },
    {
      id: "ttests-08",
      topic: "ttests",
      difficulty: "core",
      prompt: "Which assumption is especially relevant for an independent-samples t-test?",
      options: ["Observations are independent within and between groups.", "Participants generated photographs.", "There are at least four factors.", "All variables are names."],
      answer: 0,
      explanation: "Independence is central; other assumptions include approximate normality and variance considerations."
    },
    {
      id: "ttests-09",
      topic: "ttests",
      difficulty: "applied",
      prompt: "A researcher compares reaction times between two groups, but the data are extremely skewed with severe outliers. Which response is most reasonable?",
      options: ["Check assumptions and consider robust, transformed, or non-parametric approaches.", "Ignore the distribution because t-tests have no assumptions.", "Change the research question after seeing p values only.", "Use a factorial ANOVA because it always fixes outliers."],
      answer: 0,
      explanation: "The best-practice lecture emphasises checking assumptions and choosing appropriate alternatives."
    },
    {
      id: "ttests-10",
      topic: "ttests",
      difficulty: "core",
      prompt: "A paired-samples design generally has more power than an independent design when:",
      options: ["The paired observations are strongly related within people.", "The two groups are unrelated.", "The outcome is categorical.", "The sample has no repeated measures."],
      answer: 0,
      explanation: "Pairing can remove stable between-person variability when repeated measures are correlated."
    },

    {
      id: "anova-01",
      topic: "anova",
      difficulty: "core",
      prompt: "A researcher compares mean stress across three study strategies: flashcards, rereading, and practice tests. Which test is most appropriate?",
      options: ["One-way ANOVA.", "Paired-samples t-test.", "Pearson correlation.", "Bayes' theorem."],
      answer: 0,
      explanation: "A one-way ANOVA compares means across three or more levels of one factor."
    },
    {
      id: "anova-02",
      topic: "anova",
      difficulty: "core",
      prompt: "Why not run many t-tests instead of one ANOVA for several groups?",
      options: ["Multiple tests increase the chance of false positives.", "ANOVA cannot compare means.", "t-tests only work with qualitative data.", "Multiple tests always reduce Type I error."],
      answer: 0,
      explanation: "Repeated pairwise tests inflate the familywise false-positive rate."
    },
    {
      id: "anova-03",
      topic: "anova",
      difficulty: "core",
      prompt: "The F statistic in ANOVA compares:",
      options: ["Between-group variability to within-group variability.", "The median to the mode.", "Prior odds to posterior odds.", "Photovoice to photo-elicitation."],
      answer: 0,
      explanation: "ANOVA partitions variance and compares systematic group differences with residual variation."
    },
    {
      id: "anova-04",
      topic: "anova",
      difficulty: "applied",
      prompt: "A one-way ANOVA is significant for four groups. What is usually needed next to know which groups differ?",
      options: ["Planned contrasts or post-hoc comparisons.", "A statement that all groups differ equally.", "Deleting the outcome variable.", "A qualitative paradigm table only."],
      answer: 0,
      explanation: "The omnibus test shows not all means are equal; follow-up comparisons locate differences."
    },
    {
      id: "anova-05",
      topic: "anova",
      difficulty: "core",
      prompt: "A factorial ANOVA with sleep condition and caffeine condition tests:",
      options: ["Main effects of each factor and their interaction.", "Only one group mean.", "Only whether two continuous variables correlate.", "Only the median."],
      answer: 0,
      explanation: "Factorial ANOVA includes more than one predictor/factor and can test interactions."
    },
    {
      id: "anova-06",
      topic: "anova",
      difficulty: "core",
      prompt: "An interaction means:",
      options: ["The effect of one predictor changes depending on another predictor.", "Both predictors must have significant main effects.", "There are no group differences.", "The outcome has no variance."],
      answer: 0,
      explanation: "Interactions are about conditional effects, not just average differences."
    },
    {
      id: "anova-07",
      topic: "anova",
      difficulty: "applied",
      prompt: "Caffeine improves test performance for sleep-deprived students but has little effect for well-rested students. This pattern is best described as:",
      options: ["An interaction between caffeine and sleep condition.", "Only a main effect of caffeine.", "Only a main effect of sleep.", "A one-sample t-test."],
      answer: 0,
      explanation: "The caffeine effect differs across sleep conditions."
    },
    {
      id: "anova-08",
      topic: "anova",
      difficulty: "core",
      prompt: "A main effect of sleep condition in a factorial ANOVA is:",
      options: ["The average effect of sleep condition across levels of the other factor.", "The effect of sleep only when caffeine is absent.", "Proof that no interaction exists.", "The same thing as a residual."],
      answer: 0,
      explanation: "Main effects average over the other factor's levels."
    },
    {
      id: "anova-09",
      topic: "anova",
      difficulty: "applied",
      prompt: "A plot shows two lines crossing. In the factorial ANOVA lecture, this visual pattern most strongly suggests:",
      options: ["A possible interaction.", "A guaranteed null result.", "No need for interpretation.", "A simple correlation only."],
      answer: 0,
      explanation: "Non-parallel or crossing lines often indicate that effects differ by factor level."
    },
    {
      id: "anova-10",
      topic: "anova",
      difficulty: "core",
      prompt: "Which design needs a two-way ANOVA rather than a one-way ANOVA?",
      options: ["A study with two categorical predictors and one continuous outcome.", "A study with one sample compared with a fixed number.", "A study with two continuous variables only.", "A study with only interview transcripts."],
      answer: 0,
      explanation: "Two-way ANOVA examines two categorical predictors/factors."
    },

    {
      id: "correlation-regression-01",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "Pearson's r = -0.80 indicates:",
      options: ["A strong negative linear association.", "A weak positive association.", "No association.", "Proof of a causal effect."],
      answer: 0,
      explanation: "The sign shows direction and the magnitude shows strong linear association."
    },
    {
      id: "correlation-regression-02",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "Which statement about correlation is correct?",
      options: ["Correlation does not by itself establish causation.", "A correlation of .20 proves a strong causal effect.", "Correlation can only be negative.", "Correlation is the same as the mean."],
      answer: 0,
      explanation: "Associations can arise from causation, confounding, reverse causation, or chance."
    },
    {
      id: "correlation-regression-03",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "In the regression equation y = b0 + b1x, b1 is:",
      options: ["The slope.", "The intercept.", "The residual.", "The sample size."],
      answer: 0,
      explanation: "The slope is the expected change in y for a one-unit change in x."
    },
    {
      id: "correlation-regression-04",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "In regression, a residual is:",
      options: ["Observed outcome minus predicted outcome.", "The average of all predictors.", "The alpha threshold.", "A category label."],
      answer: 0,
      explanation: "Residuals are prediction errors left after fitting the model."
    },
    {
      id: "correlation-regression-05",
      topic: "correlation-regression",
      difficulty: "applied",
      prompt: "A regression slope for hours studied predicting exam score is 4. What is the best interpretation?",
      options: ["Each additional study hour is associated with 4 more predicted exam-score points.", "Each student studied exactly 4 hours.", "The model explains 4% of variance automatically.", "The intercept must be 4."],
      answer: 0,
      explanation: "The slope describes the expected outcome change per one-unit predictor change."
    },
    {
      id: "correlation-regression-06",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "R squared describes:",
      options: ["The proportion of outcome variance explained by the regression model.", "The probability that the alternative hypothesis is true.", "The number of response options.", "The slope in original units only."],
      answer: 0,
      explanation: "R squared is a goodness-of-fit measure for explained variance."
    },
    {
      id: "correlation-regression-07",
      topic: "correlation-regression",
      difficulty: "applied",
      prompt: "A scatterplot has a curved relationship. Pearson's r is close to zero. What is the best conclusion?",
      options: ["Pearson's r may miss non-linear patterns.", "There is definitely no relationship of any kind.", "The mean is invalid.", "The data must be qualitative."],
      answer: 0,
      explanation: "Pearson correlation captures linear association, so non-linear patterns can be missed."
    },
    {
      id: "correlation-regression-08",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "The intercept in a linear regression is:",
      options: ["The predicted outcome when the predictor is zero.", "The effect of a one-unit increase in the predictor.", "The p value.", "The total sample variance."],
      answer: 0,
      explanation: "The intercept is the model's predicted y value at x = 0."
    },
    {
      id: "correlation-regression-09",
      topic: "correlation-regression",
      difficulty: "applied",
      prompt: "A researcher finds that ice-cream sales and sunburn are correlated. Which explanation should they consider?",
      options: ["A third variable such as sunny weather may explain the association.", "Ice cream must chemically cause sunburn.", "The correlation proves reverse causation only.", "Correlation cannot be computed for positive variables."],
      answer: 0,
      explanation: "Confounding variables are a classic reason correlation is not causation."
    },
    {
      id: "correlation-regression-10",
      topic: "correlation-regression",
      difficulty: "core",
      prompt: "Which pair of variables is suitable for Pearson correlation?",
      options: ["Hours slept and reaction time.", "Treatment group and participant ID.", "Ethics approval status and consent form version.", "Interview transcript and photo caption."],
      answer: 0,
      explanation: "Pearson correlation is used for two continuous variables."
    },

    {
      id: "efa-pca-01",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "The basic purpose of PCA is to:",
      options: ["Create components that summarise variation across many observed variables.", "Test whether two means are equal.", "Estimate the p value for a t-test.", "Replace informed consent."],
      answer: 0,
      explanation: "PCA is a dimension-reduction technique based on observed variance."
    },
    {
      id: "efa-pca-02",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "Exploratory factor analysis is usually more focused than PCA on:",
      options: ["Latent factors that may explain covariance among observed variables.", "Counting how many participants attended a lecture.", "Comparing two group means.", "Calculating Bayes' theorem from a screening test."],
      answer: 0,
      explanation: "EFA is used to model underlying latent factors."
    },
    {
      id: "efa-pca-03",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "A high loading of an item on a factor means:",
      options: ["The item is strongly related to that factor.", "The item has no relationship to the factor.", "The item is a participant ID.", "The item proves causality."],
      answer: 0,
      explanation: "Loadings describe the relationship between observed variables and factors/components."
    },
    {
      id: "efa-pca-04",
      topic: "efa-pca",
      difficulty: "applied",
      prompt: "Why might a researcher rotate factors after extraction?",
      options: ["To make the pattern of loadings easier to interpret.", "To make p values smaller automatically.", "To remove the need for theory.", "To turn qualitative interviews into surveys."],
      answer: 0,
      explanation: "Rotation can clarify which items cluster together."
    },
    {
      id: "efa-pca-05",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "Which is the best warning about PCA/EFA?",
      options: ["They can suggest structure, but they do not alone prove a construct is real.", "They are never affected by sample or measurement choices.", "They always establish causation.", "They only apply to one variable."],
      answer: 0,
      explanation: "Dimension-reduction results require theory, judgement, and validation."
    },
    {
      id: "efa-pca-06",
      topic: "efa-pca",
      difficulty: "applied",
      prompt: "A scale has many items about worry, tension, and panic. EFA shows these items load together. What is the most cautious interpretation?",
      options: ["The items may reflect a common underlying factor, subject to validation.", "The items prove all anxiety has one cause.", "The sample size is irrelevant.", "The result means the p value is .05."],
      answer: 0,
      explanation: "EFA suggests a latent structure but does not prove it definitively."
    },
    {
      id: "efa-pca-07",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "PCA is most useful when the researcher has:",
      options: ["Many correlated observed variables and wants fewer summary dimensions.", "Only one categorical predictor and one outcome.", "A single interview transcript.", "No measured variables."],
      answer: 0,
      explanation: "PCA reduces many variables into fewer components."
    },
    {
      id: "efa-pca-08",
      topic: "efa-pca",
      difficulty: "applied",
      prompt: "A component has strong positive loadings for all wellbeing items. Naming it 'general wellbeing' is:",
      options: ["An interpretation that should be justified by item content and theory.", "A mechanical fact requiring no judgement.", "A Type II error.", "A paired-samples design."],
      answer: 0,
      explanation: "Components/factors are named through interpretation, not automatically by the software."
    },
    {
      id: "efa-pca-09",
      topic: "efa-pca",
      difficulty: "core",
      prompt: "Which output would you inspect to see which items belong with which factor?",
      options: ["The loading matrix.", "The consent form only.", "The alpha threshold only.", "The raw participant names."],
      answer: 0,
      explanation: "The loading matrix shows item-factor or item-component relationships."
    },
    {
      id: "efa-pca-10",
      topic: "efa-pca",
      difficulty: "applied",
      prompt: "A researcher runs PCA on items that are unrelated to each other. What is the likely problem?",
      options: ["There may be little meaningful shared structure to summarise.", "The PCA will automatically produce a valid construct.", "Unrelated items are always ideal for PCA.", "The result must be a significant ANOVA."],
      answer: 0,
      explanation: "Dimension reduction is more meaningful when variables share patterns of variance."
    },

    {
      id: "probability-repeatability-01",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "If P(A) = .30, what is P(not A)?",
      options: [".70", ".30", ".09", "Cannot be known because A is an event."],
      answer: 0,
      explanation: "The complement is 1 - P(A)."
    },
    {
      id: "probability-repeatability-02",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "The probability of A and B together is called:",
      options: ["An intersection.", "A complement.", "A residual.", "A main effect."],
      answer: 0,
      explanation: "Intersections describe joint events: A and B."
    },
    {
      id: "probability-repeatability-03",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "Conditional probability P(A|B) means:",
      options: ["The probability of A given that B is true.", "The probability of A plus B.", "The probability that neither A nor B exists.", "The standard deviation of A."],
      answer: 0,
      explanation: "The vertical bar means 'given'."
    },
    {
      id: "probability-repeatability-04",
      topic: "probability-repeatability",
      difficulty: "applied",
      prompt: "A rare condition has a test with some false positives. A positive result does not always mean the person likely has the condition because:",
      options: ["The base rate of the condition matters.", "False positives are impossible.", "P values prove diagnosis.", "The complement is always zero."],
      answer: 0,
      explanation: "Bayesian reasoning shows that prior/base-rate information affects posterior belief."
    },
    {
      id: "probability-repeatability-05",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "Bayes' theorem is mainly about:",
      options: ["Updating beliefs using prior information and evidence.", "Comparing three group means.", "Naming qualitative themes.", "Creating participant photographs."],
      answer: 0,
      explanation: "Bayesian inference updates prior beliefs in light of evidence."
    },
    {
      id: "probability-repeatability-06",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "Running many independent significance tests at alpha = .05 mainly increases:",
      options: ["The chance of at least one false positive.", "The certainty that all findings are true.", "The number of participants automatically.", "The strength of every theory."],
      answer: 0,
      explanation: "More tests create more chances for rare-looking findings under the null."
    },
    {
      id: "probability-repeatability-07",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "Reproducibility most directly means:",
      options: ["Getting the same results when the same data and analysis are used.", "Finding the same effect in a new independent study only.", "Changing the analysis until p < .05.", "Having a larger sample than every previous study."],
      answer: 0,
      explanation: "Reproducibility concerns whether results can be regenerated from the same data/code/analysis."
    },
    {
      id: "probability-repeatability-08",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "Replicability most directly means:",
      options: ["Finding a similar result in a new study or sample.", "Rerunning the same spreadsheet only.", "Rotating factor loadings.", "Choosing the largest p value."],
      answer: 0,
      explanation: "Replication checks whether findings recur with new data."
    },
    {
      id: "probability-repeatability-09",
      topic: "probability-repeatability",
      difficulty: "applied",
      prompt: "Different analysts reach different conclusions from the same dataset. Which concept from repeatable science does this highlight?",
      options: ["Analytic flexibility and robustness of conclusions.", "The impossibility of all statistics.", "The definition of a visual method.", "The need to avoid all theory."],
      answer: 0,
      explanation: "Robustness asks whether conclusions hold across reasonable analytic choices."
    },
    {
      id: "probability-repeatability-10",
      topic: "probability-repeatability",
      difficulty: "core",
      prompt: "The strongest scientific claims usually need evidence that is:",
      options: ["Reproducible, robust, and replicable.", "Significant once and never checked.", "Based only on a single small p value.", "Free from all context and theory."],
      answer: 0,
      explanation: "The repeatable-science lecture distinguishes and values all three checks."
    }
  ]
};
