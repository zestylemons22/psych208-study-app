(function () {
  const data = window.STUDY_DATA;
  const progressKey = "psych208-study-progress-v1";

  const els = {
    topicFilter: document.getElementById("topicFilter"),
    statusFilter: document.getElementById("statusFilter"),
    sortMode: document.getElementById("sortMode"),
    examMode: document.getElementById("examMode"),
    shuffleBtn: document.getElementById("shuffleBtn"),
    resetBtn: document.getElementById("resetBtn"),
    topicNav: document.getElementById("topicNav"),
    summarySheets: document.getElementById("summarySheets"),
    questionNumber: document.getElementById("questionNumber"),
    questionTopic: document.getElementById("questionTopic"),
    questionDifficulty: document.getElementById("questionDifficulty"),
    questionText: document.getElementById("questionText"),
    options: document.getElementById("options"),
    feedback: document.getElementById("feedback"),
    prevBtn: document.getElementById("prevBtn"),
    checkBtn: document.getElementById("checkBtn"),
    nextBtn: document.getElementById("nextBtn"),
    summaryLink: document.getElementById("summaryLink"),
    markBtn: document.getElementById("markBtn"),
    answeredCount: document.getElementById("answeredCount"),
    correctCount: document.getElementById("correctCount"),
    accuracyRate: document.getElementById("accuracyRate")
  };

  // Initial assignment note: progress is cached on the iPad/browser so revision can continue between sessions.
  let progress = loadProgress();
  let orderedQuestions = [];
  let currentIndex = 0;
  let selectedOption = null;

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(progressKey)) || {};
    } catch {
      return {};
    }
  }

  function saveProgress() {
    localStorage.setItem(progressKey, JSON.stringify(progress));
    renderScore();
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function topicById(id) {
    return data.topics.find((topic) => topic.id === id);
  }

  function statusFor(question) {
    const entry = progress[question.id];
    if (!entry || entry.lastAnswer === null || entry.lastAnswer === undefined) return "unanswered";
    return entry.correct ? "correct" : "missed";
  }

  function buildControls() {
    els.topicFilter.innerHTML = [
      '<option value="all">All topics</option>',
      ...data.topics.map((topic) => `<option value="${topic.id}">${topic.title}</option>`)
    ].join("");

    els.topicNav.innerHTML = data.topics
      .map((topic) => `<a href="#summary-${topic.id}">${topic.title}</a>`)
      .join("");
  }

  function renderSummaries() {
    els.summarySheets.innerHTML = data.topics.map((topic) => {
      const points = topic.keyPoints.map((point) => `<li>${point}</li>`).join("");
      const sources = topic.sources.join("; ");
      return `
        <article id="summary-${topic.id}" class="summary-card">
          <p class="eyebrow">${topic.weeks}</p>
          <h3>${topic.title}</h3>
          <p>${topic.summary}</p>
          <ul>${points}</ul>
          <p class="sources"><strong>Source slides:</strong> ${sources}</p>
        </article>
      `;
    }).join("");
  }

  function buildQuestionSet(forceShuffle = false) {
    const topic = els.topicFilter.value;
    const status = els.statusFilter.value;
    const sort = forceShuffle ? "random" : els.sortMode.value;

    let questions = data.questions.filter((question) => {
      const topicMatch = topic === "all" || question.topic === topic;
      const statusMatch = status === "all" ||
        (status === "marked" ? Boolean(progress[question.id]?.marked) : statusFor(question) === status);
      return topicMatch && statusMatch;
    });

    if (sort === "random") {
      questions = shuffle(questions);
    } else if (sort === "topic") {
      questions.sort((a, b) => a.topic.localeCompare(b.topic) || a.id.localeCompare(b.id));
    } else if (sort === "difficulty") {
      const order = { core: 0, applied: 1, challenge: 2 };
      questions.sort((a, b) => (order[a.difficulty] ?? 9) - (order[b.difficulty] ?? 9));
    } else if (sort === "leastSeen") {
      questions.sort((a, b) => (progress[a.id]?.seen || 0) - (progress[b.id]?.seen || 0));
    }

    orderedQuestions = questions;
    currentIndex = 0;
    renderQuestion();
  }

  function renderQuestion() {
    selectedOption = null;
    els.feedback.hidden = true;
    els.feedback.className = "feedback";

    if (!orderedQuestions.length) {
      els.questionNumber.textContent = "No questions";
      els.questionTopic.textContent = "Change filters";
      els.questionDifficulty.textContent = "";
      els.questionText.textContent = "No questions match the current filters.";
      els.options.innerHTML = '<div class="empty-state">Try another topic or status filter.</div>';
      els.summaryLink.href = "#summaries";
      els.checkBtn.disabled = true;
      return;
    }

    els.checkBtn.disabled = false;
    const question = orderedQuestions[currentIndex];
    const topic = topicById(question.topic);
    const entry = progress[question.id] || {};
    entry.seen = (entry.seen || 0) + 1;
    progress[question.id] = entry;
    saveProgress();

    els.questionNumber.textContent = `Question ${currentIndex + 1} of ${orderedQuestions.length}`;
    els.questionTopic.textContent = topic.title;
    els.questionDifficulty.textContent = question.difficulty;
    els.questionText.textContent = question.prompt;
    els.summaryLink.href = `#summary-${topic.id}`;
    els.summaryLink.textContent = `Open ${topic.title} summary sheet`;
    els.markBtn.textContent = entry.marked ? "Unmark review" : "Mark for review";

    els.options.innerHTML = question.options.map((option, index) => `
      <button class="option" type="button" data-index="${index}">
        <span class="letter">${String.fromCharCode(65 + index)}</span>
        <span>${option}</span>
      </button>
    `).join("");

    els.options.querySelectorAll(".option").forEach((button) => {
      button.addEventListener("click", () => selectOption(Number(button.dataset.index)));
    });
  }

  function selectOption(index) {
    selectedOption = index;
    els.options.querySelectorAll(".option").forEach((button) => {
      button.classList.toggle("selected", Number(button.dataset.index) === index);
    });
  }

  function checkAnswer() {
    if (selectedOption === null) return;
    const question = orderedQuestions[currentIndex];
    const correct = selectedOption === question.answer;
    progress[question.id] = {
      ...(progress[question.id] || {}),
      lastAnswer: selectedOption,
      correct,
      attempts: (progress[question.id]?.attempts || 0) + 1
    };
    saveProgress();

    els.options.querySelectorAll(".option").forEach((button) => {
      const index = Number(button.dataset.index);
      button.classList.toggle("correct", index === question.answer);
      button.classList.toggle("incorrect", index === selectedOption && !correct);
    });

    if (els.examMode.checked) {
      els.feedback.hidden = false;
      els.feedback.innerHTML = "<strong>Saved.</strong><span>Explanation hidden because exam mode is on.</span>";
      return;
    }

    els.feedback.hidden = false;
    els.feedback.classList.toggle("is-wrong", !correct);
    els.feedback.innerHTML = `
      <strong>${correct ? "Correct." : "Not quite."}</strong>
      <span>${question.explanation}</span>
    `;
  }

  function move(delta) {
    if (!orderedQuestions.length) return;
    currentIndex = (currentIndex + delta + orderedQuestions.length) % orderedQuestions.length;
    renderQuestion();
  }

  function randomNext() {
    if (orderedQuestions.length <= 1) return;
    let next = currentIndex;
    while (next === currentIndex) {
      next = Math.floor(Math.random() * orderedQuestions.length);
    }
    currentIndex = next;
    renderQuestion();
  }

  function toggleMarked() {
    if (!orderedQuestions.length) return;
    const question = orderedQuestions[currentIndex];
    progress[question.id] = {
      ...(progress[question.id] || {}),
      marked: !progress[question.id]?.marked
    };
    saveProgress();
    els.markBtn.textContent = progress[question.id].marked ? "Unmark review" : "Mark for review";
  }

  function renderScore() {
    const answered = data.questions.filter((question) => progress[question.id]?.lastAnswer !== undefined);
    const correct = answered.filter((question) => progress[question.id]?.correct);
    els.answeredCount.textContent = answered.length;
    els.correctCount.textContent = correct.length;
    els.accuracyRate.textContent = answered.length ? `${Math.round((correct.length / answered.length) * 100)}%` : "0%";
  }

  function resetProgress() {
    const confirmed = window.confirm("Reset all saved answers and practice history on this browser?");
    if (!confirmed) return;
    progress = {};
    saveProgress();
    buildQuestionSet();
  }

  function bindEvents() {
    [els.topicFilter, els.statusFilter, els.sortMode].forEach((control) => {
      control.addEventListener("change", () => buildQuestionSet());
    });
    els.shuffleBtn.addEventListener("click", () => buildQuestionSet(true));
    els.resetBtn.addEventListener("click", resetProgress);
    els.prevBtn.addEventListener("click", () => move(-1));
    els.nextBtn.addEventListener("click", randomNext);
    els.checkBtn.addEventListener("click", checkAnswer);
    els.markBtn.addEventListener("click", toggleMarked);
  }

  buildControls();
  renderSummaries();
  bindEvents();
  buildQuestionSet();
})();
