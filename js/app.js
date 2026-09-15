const STUDENT_KEY = "fdpHubStudent";
const STATE_KEY = "fdpHubMissionState";

function normaliseAnswer(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ")
    .replace(/\s*,\s*/g, ",")
    .replace(/\s*\/\s*/g, "/");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getStudentData() {
  try {
    return JSON.parse(localStorage.getItem(STUDENT_KEY)) || { name: "", className: "" };
  } catch {
    return { name: "", className: "" };
  }
}

function saveStudentData(data) {
  localStorage.setItem(STUDENT_KEY, JSON.stringify(data));
}

function getMissionStateStore() {
  try {
    return JSON.parse(localStorage.getItem(STATE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveMissionStateStore(store) {
  localStorage.setItem(STATE_KEY, JSON.stringify(store));
}

function getMissionState(missionId) {
  const store = getMissionStateStore();
  return store[missionId] || {
    practiceAnswers: {},
    quizAnswers: {},
    quizSubmitted: false,
    score: null,
    total: null,
    uploaded: false,
    downloaded: false,
    lastVisited: null
  };
}

function setMissionState(missionId, updates) {
  const store = getMissionStateStore();
  store[missionId] = { ...getMissionState(missionId), ...updates };
  saveMissionStateStore(store);
  updateSaveStatus();
}

function getMissionById(id) {
  return MISSIONS.find((mission) => mission.id === Number(id));
}

function getCoreMissions() {
  return MISSIONS.filter((mission) => mission.collection === "core");
}

function getExtendedMissions() {
  return MISSIONS.filter((mission) => mission.collection === "extended");
}

function getMissionStatusLabel(mission) {
  const state = getMissionState(mission.id);
  const hasAnswers = Object.values(state.practiceAnswers || {}).some(Boolean) || Object.values(state.quizAnswers || {}).some(Boolean);
  if (state.uploaded) {
    return { label: "Uploaded to Daymap", className: "status-uploaded" };
  }
  if (state.quizSubmitted) {
    return { label: "Quiz complete", className: "status-complete" };
  }
  if (hasAnswers) {
    return { label: "In progress", className: "status-in-progress" };
  }
  return { label: "Not started", className: "status-not-started" };
}

function getThinkingPrompt(mission, promptText = "") {
  const combined = `${mission.title} ${mission.topic} ${promptText}`.toLowerCase();

  if (combined.includes("fractions, decimals and percentages") || combined.includes("fdp") || combined.includes("comparing and ordering fdp")) {
    return "Try converting the values into one form you know well. Would decimals, percentages, or fractions be easiest to compare?";
  }
  if (combined.includes("equivalent fractions")) {
    return "Look for the scale factor between the numerators or denominators. What number changes one part into the other?";
  }
  if (combined.includes("ordering and rounding decimals")) {
    return combined.includes("round") ? "Find the place you are rounding to, then check the digit just to the right. Does it tell you to keep the digit or change it?" : "Line up the decimal points and compare from left to right: ones, tenths, then hundredths.";
  }
  if (combined.includes("adding fractions")) {
    return "Check the denominators first. Do they already match, or do you need to rename the fractions before adding?";
  }
  if (combined.includes("mixed numbers") || combined.includes("improper fractions")) {
    return "Decide which way you are converting. Are you building one large fraction, or splitting an improper fraction into wholes and a leftover part?";
  }
  if (combined.includes("decimal")) {
    return combined.includes("÷") || combined.includes("divide") ? "Think about place value and the size of the answer. Should the quotient be more than 1 or less than 1?" : "Use place value carefully. Would lining up decimal points or using known number facts help?";
  }
  if (combined.includes("percentage") || combined.includes("discount") || combined.includes("increase") || combined.includes("decrease")) {
    return "Look for a friendly percentage such as 10%, 50%, 25% or 5%. Can you build the answer from those parts?";
  }
  if (combined.includes("ratio")) {
    return combined.includes("share") || combined.includes("scale") ? "How many total parts are in the ratio? Find the value of one part before finding each share." : "Keep the ratio in the correct order. If one part changes, what must happen to the other part to stay equivalent?";
  }
  if (combined.includes("fraction operations in context")) {
    return "Read the context again. Are you combining parts, removing a part, or finding a fraction of an amount?";
  }
  return "Look back at the worked example and identify the first step. Try that same first step on this question.";
}

function getMissionBackLink(mission) {
  return mission.collection === "extended" ? "extended.html" : "index.html";
}

function iconForMission(mission) {
  return mission.icon || "⭐";
}

function renderCoreHome() {
  const supportGrid = document.getElementById("support-grid");
  const consolidateGrid = document.getElementById("consolidate-grid");
  const extendGrid = document.getElementById("extend-grid");
  if (!supportGrid || !consolidateGrid || !extendGrid) return;

  const groups = {
    Support: supportGrid,
    Consolidate: consolidateGrid,
    Extend: extendGrid
  };

  Object.entries(groups).forEach(([groupName, element]) => {
    const className = `level-${groupName.toLowerCase()}`;
    const missions = getCoreMissions().filter((mission) => mission.landingGroup === groupName);
    element.innerHTML = missions.map(renderMissionCard.bind(null, className)).join("");
  });

  renderSummaryBlocks();
  renderBadgeCabinet("badge-cabinet-core", "core");
}

function renderMissionCard(levelClass, mission) {
  const status = getMissionStatusLabel(mission);
  return `
    <article class="mission-card">
      <div>
        <div class="mission-meta">
          <span class="topic-label">${escapeHtml(mission.topic)}</span>
          <span class="${levelClass}">${escapeHtml(mission.level)}</span>
        </div>
        <div class="mission-title-row">
          <div class="mission-emoji">${escapeHtml(iconForMission(mission))}</div>
          <div>
            <h3>${escapeHtml(mission.title)}</h3>
            <p>${escapeHtml(mission.shortDescription)}</p>
          </div>
        </div>
        <div class="status-line">
          <span class="status-pill ${status.className}">${escapeHtml(status.label)}</span>
        </div>
      </div>
      <a class="button button-primary" href="mission.html?id=${mission.id}">Open mission</a>
    </article>
  `;
}

function renderExtendedHome() {
  const container = document.getElementById("extended-topic-sections");
  if (!container) return;

  const order = [
    "adv-fdp",
    "compare-fdp",
    "frac-context",
    "dec-reason",
    "perc-real",
    "perc-change",
    "ratio-basics",
    "ratio-share"
  ];

  const extended = getExtendedMissions();
  container.innerHTML = order.map((topicKey) => {
    const topicMissions = extended.filter((m) => m.topicKey === topicKey);
    if (!topicMissions.length) return "";
    const missionCards = topicMissions.map((mission) => renderMissionCard(`level-extend`, mission)).join("");
    return `
      <section class="topic-shell">
        <div class="topic-heading">
          <div>
            <span class="topic-label">${escapeHtml(topicMissions[0].topic)}</span>
            <h3>${escapeHtml(topicMissions[0].icon || "⭐")} ${escapeHtml(topicMissions[0].topic)}</h3>
          </div>
          <p>Three missions, three levels, one powerful topic.</p>
        </div>
        <div class="mission-grid">${missionCards}</div>
      </section>
    `;
  }).join("");

  renderSummaryBlocks();
  renderBadgeCabinet("badge-cabinet-extended", "extended");
}

function renderSummaryBlocks() {
  const states = getMissionStateStore();
  const core = getCoreMissions();
  const extended = getExtendedMissions();

  const coreCompleted = core.filter((m) => states[m.id]?.quizSubmitted).length;
  const coreUploaded = core.filter((m) => states[m.id]?.uploaded).length;
  const extCompleted = extended.filter((m) => states[m.id]?.quizSubmitted).length;
  const extUploaded = extended.filter((m) => states[m.id]?.uploaded).length;

  const coreSummary = document.getElementById("core-progress-summary");
  if (coreSummary) {
    coreSummary.innerHTML = `<strong>${coreCompleted}/12</strong> core quizzes complete<br><strong>${coreUploaded}/12</strong> Daymap uploads checked`;
  }
  const extSummary = document.getElementById("extended-progress-summary");
  if (extSummary) {
    extSummary.innerHTML = `<strong>${extCompleted}/24</strong> extended quizzes complete<br><strong>${extUploaded}/24</strong> uploads checked`;
  }

  const dashboardStats = document.getElementById("dashboard-stats");
  if (dashboardStats) {
    const pct = Math.round((coreCompleted / Math.max(core.length, 1)) * 100);
    dashboardStats.innerHTML = `
      <p><strong>Core quiz completion:</strong> ${coreCompleted} / ${core.length}</p>
      <p><strong>Marked uploaded:</strong> ${coreUploaded} / ${core.length}</p>
      <div class="progress-bar-shell"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
      <p class="small-note">Complete all 12 core missions to feel fully ready for the extended page.</p>
    `;
  }
}

function getBadges() {
  const store = getMissionStateStore();
  const core = getCoreMissions();
  const extended = getExtendedMissions();
  const coreDone = core.filter((m) => store[m.id]?.quizSubmitted).length;
  const coreUploaded = core.filter((m) => store[m.id]?.uploaded).length;
  const extendedDone = extended.filter((m) => store[m.id]?.quizSubmitted).length;

  const topicKeys = [...new Set(extended.map((m) => m.topicKey))];
  const topicComplete = topicKeys.reduce((acc, topicKey) => {
    const topicMissions = extended.filter((m) => m.topicKey === topicKey);
    acc[topicKey] = topicMissions.every((m) => store[m.id]?.quizSubmitted);
    return acc;
  }, {});

  return [
    { key: "starter", icon: "🌱", title: "Mission Starter", description: "Complete your first quiz.", earned: coreDone + extendedDone >= 1, collection: "core" },
    { key: "core6", icon: "⚡", title: "Core 6 Conqueror", description: "Complete 6 core mission quizzes.", earned: coreDone >= 6, collection: "core" },
    { key: "core12", icon: "🏆", title: "Core Champion", description: "Complete all 12 core mission quizzes.", earned: coreDone >= 12, collection: "core" },
    { key: "daymap", icon: "📤", title: "Daymap Hero", description: "Mark all 12 core missions as uploaded to Daymap.", earned: coreUploaded >= 12, collection: "core" },
    { key: "extended1", icon: "🚀", title: "Extended Explorer", description: "Complete your first extended mission quiz.", earned: extendedDone >= 1, collection: "extended" },
    { key: "fdp-master", icon: "🔮", title: "FDP Mastermind", description: "Complete all Advanced FDP Conversions and Comparing & Ordering FDP missions.", earned: topicComplete["adv-fdp"] && topicComplete["compare-fdp"], collection: "extended" },
    { key: "ratio-rookie", icon: "🧃", title: "Ratio Rookie", description: "Complete all Ratio Basics missions.", earned: topicComplete["ratio-basics"], collection: "extended" },
    { key: "ratio-ranger", icon: "🛶", title: "Ratio Ranger", description: "Complete all Sharing and Scaling with Ratio missions.", earned: topicComplete["ratio-share"], collection: "extended" },
    { key: "topic-master", icon: "🎯", title: "Topic Master", description: "Complete every mission in any one extended topic.", earned: Object.values(topicComplete).some(Boolean), collection: "extended" },
    { key: "extended24", icon: "🌟", title: "Extended Champion", description: "Complete all 24 extended mission quizzes.", earned: extendedDone >= 24, collection: "extended" }
  ];
}

function renderBadgeCabinet(containerId, collection) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const badges = getBadges().filter((badge) => badge.collection === collection);
  container.innerHTML = badges.map((badge) => `
    <article class="badge-card ${badge.earned ? "badge-earned" : "badge-locked"}">
      <div class="badge-icon">${badge.icon}</div>
      <h3>${escapeHtml(badge.title)}</h3>
      <p>${escapeHtml(badge.description)}</p>
      <span class="badge-ribbon">${badge.earned ? "Unlocked" : "Locked"}</span>
    </article>
  `).join("");
}

function renderMissionPage() {
  const container = document.getElementById("mission-container");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const missionId = params.get("id") || 1;
  const mission = getMissionById(missionId) || MISSIONS[0];
  const state = getMissionState(mission.id);
  const student = getStudentData();

  const backLink = document.getElementById("mission-back-link");
  if (backLink) backLink.href = getMissionBackLink(mission);

  container.innerHTML = `
    <section class="mission-shell">
      <div class="mission-top">
        <div>
          <div class="mission-meta">
            <span class="topic-label">${escapeHtml(mission.topic)}</span>
            <span class="level-pill level-${mission.collection === "core" ? mission.landingGroup.toLowerCase() : "extend"}">${escapeHtml(mission.level)}</span>
            <span class="status-pill ${getMissionStatusLabel(mission).className}">${escapeHtml(getMissionStatusLabel(mission).label)}</span>
          </div>
          <div class="mission-title-row">
            <div class="mission-emoji">${escapeHtml(iconForMission(mission))}</div>
            <div>
              <h2>${escapeHtml(mission.title)}</h2>
              <p class="muted">${escapeHtml(mission.shortDescription)}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="meta-grid">
        <div class="meta-card">
          <h3>Student details</h3>
          <div class="field-group">
            <label for="student-name">Student name</label>
            <input id="student-name" type="text" placeholder="Enter student name" value="${escapeHtml(student.name || "")}" />
          </div>
          <div class="field-group" style="margin-top:0.8rem;">
            <label for="student-class">Class</label>
            <input id="student-class" type="text" placeholder="Enter class" value="${escapeHtml(student.className || "")}" />
          </div>
        </div>
        <div class="note-card">
          <h3>Mission purpose</h3>
          <p>${escapeHtml(mission.learnIntro)}</p>
        </div>
        ${mission.supportLinks && mission.supportLinks.length ? `
        <div class="note-card">
          <h3>Extra support videos</h3>
          <p>If you want another explanation, these links can help.</p>
          <ul>${mission.supportLinks.map((link) => `<li><a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a></li>`).join("")}</ul>
        </div>` : ""}
      </div>

      <div class="stage-grid">
        <div class="stage-card"><h3>Learn</h3><p class="muted">Read the examples and spot the strategy.</p></div>
        <div class="stage-card practice-stage"><h3>Practice</h3><p class="muted">Use hints and thinking prompts to grow your understanding.</p></div>
        <div class="stage-card quiz-stage"><h3>Quiz</h3><p class="muted">Submit your quiz, download your evidence, and mark your upload.</p></div>
      </div>

      <section>
        <h3>Learn</h3>
        <div class="learn-card">
          <h3>Key steps</h3>
          <ol>${mission.keySteps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
        </div>
        <div class="cheer-box">🌟 Growth tip: If you feel stuck, go back to the first step and try just that one part.</div>
        <div class="learn-grid">
          ${mission.examples.map((example) => `
            <article class="learn-card">
              <h3>${escapeHtml(example.title)}</h3>
              <p class="prompt">${escapeHtml(example.question)}</p>
              <div class="example-box"><ol>${example.working.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ol></div>
            </article>
          `).join("")}
        </div>
      </section>

      <section style="margin-top:2rem;">
        <h3>Practice</h3>
        <div class="practice-grid">
          ${mission.practice.map((item, index) => `
            <article class="practice-card">
              <p class="prompt">${index + 1}. ${escapeHtml(item.prompt)}</p>
              <div class="answer-row">
                <input type="text" id="practice-answer-${index}" value="${escapeHtml(state.practiceAnswers?.[index] || "")}" placeholder="Type your answer" />
                <button class="button button-soft" data-practice-index="${index}">Check</button>
              </div>
              <div id="practice-feedback-${index}" class="feedback-box">Type an answer, then click <strong>Check</strong>.</div>
            </article>
          `).join("")}
        </div>
      </section>

      <section style="margin-top:2rem;">
        <h3>Quiz</h3>
        <p class="muted">Complete the quiz when you feel ready. Your responses are saved on this device.</p>
        <div class="quiz-grid">
          ${mission.quiz.map((item, index) => `
            <article class="quiz-card">
              <p class="prompt">${index + 1}. ${escapeHtml(item.prompt)}</p>
              <input type="text" id="quiz-answer-${index}" value="${escapeHtml(state.quizAnswers?.[index] || "")}" placeholder="Type your answer" />
              <div id="quiz-feedback-${index}" class="quiz-feedback"></div>
            </article>
          `).join("")}
        </div>
        <div class="quiz-actions" style="margin-top:1rem;">
          <button id="submit-quiz" class="button button-primary">Submit Quiz</button>
          <button id="reset-quiz" class="button button-outline">Reset Quiz</button>
          <button id="download-results" class="button button-outline" ${state.quizSubmitted ? "" : "disabled"}>Download Results (.doc)</button>
          <button id="toggle-uploaded" class="button ${state.uploaded ? "button-success" : "button-warning"}" ${state.quizSubmitted ? "" : "disabled"}>${state.uploaded ? "Uploaded to Daymap ✓" : "Mark Complete when Uploaded to Daymap"}</button>
        </div>
        <div id="quiz-summary" class="summary-card">
          ${state.quizSubmitted ? renderSavedSummaryHtml(state) : `<h3>Quiz summary</h3><p class="summary-text">Your quiz score will appear here after submission.</p>`}
        </div>
      </section>
    </section>
  `;

  bindStudentInfo(mission);
  bindMissionInputs(mission);
  bindPracticeHandlers(mission);
  bindQuizHandlers(mission);
  restoreQuizFeedback(mission);
}

function renderSavedSummaryHtml(state) {
  const percentage = state.total ? Math.round((state.score / state.total) * 100) : 0;
  return `
    <h3>Quiz summary</h3>
    <p class="score-text">Saved score: ${state.score} / ${state.total} (${percentage}%)</p>
    <p class="summary-text">Great job returning to continue your mission. You can download your evidence or improve your score by trying again.</p>
  `;
}

function bindStudentInfo() {
  const nameInput = document.getElementById("student-name");
  const classInput = document.getElementById("student-class");
  if (!nameInput || !classInput) return;

  function save() {
    saveStudentData({ name: nameInput.value, className: classInput.value });
    updateSaveStatus();
  }

  nameInput.addEventListener("input", save);
  classInput.addEventListener("input", save);
}

function bindMissionInputs(mission) {
  document.querySelectorAll('[id^="practice-answer-"]').forEach((input, index) => {
    input.addEventListener("input", () => {
      const state = getMissionState(mission.id);
      const practiceAnswers = { ...(state.practiceAnswers || {}), [index]: input.value };
      setMissionState(mission.id, { practiceAnswers, lastVisited: new Date().toLocaleString() });
    });
  });

  document.querySelectorAll('[id^="quiz-answer-"]').forEach((input, index) => {
    input.addEventListener("input", () => {
      const state = getMissionState(mission.id);
      const quizAnswers = { ...(state.quizAnswers || {}), [index]: input.value };
      setMissionState(mission.id, { quizAnswers, lastVisited: new Date().toLocaleString() });
    });
  });
}

function bindPracticeHandlers(mission) {
  document.querySelectorAll("[data-practice-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.getAttribute("data-practice-index"));
      const item = mission.practice[index];
      const input = document.getElementById(`practice-answer-${index}`);
      const feedback = document.getElementById(`practice-feedback-${index}`);
      const userAnswer = normaliseAnswer(input.value);
      const accepted = item.accepted.map(normaliseAnswer);

      if (!userAnswer) {
        feedback.className = "feedback-box warning";
        feedback.innerHTML = `<strong>Give it a go first!</strong><br><strong>Hint:</strong> ${escapeHtml(item.hint)}<br><strong>Thinking prompt:</strong> ${escapeHtml(getThinkingPrompt(mission, item.prompt))}`;
        return;
      }

      if (accepted.includes(userAnswer)) {
        feedback.className = "feedback-box correct";
        feedback.innerHTML = `<strong>Nice work!</strong> You used a successful strategy. 🌟`;
      } else {
        feedback.className = "feedback-box incorrect";
        feedback.innerHTML = `<strong>Not quite yet — keep going.</strong><br><strong>Hint:</strong> ${escapeHtml(item.hint)}<br><strong>Thinking prompt:</strong> ${escapeHtml(getThinkingPrompt(mission, item.prompt))}`;
      }
    });
  });
}

function bindQuizHandlers(mission) {
  const submitButton = document.getElementById("submit-quiz");
  const resetButton = document.getElementById("reset-quiz");
  const downloadButton = document.getElementById("download-results");
  const uploadButton = document.getElementById("toggle-uploaded");

  if (submitButton) submitButton.addEventListener("click", () => submitQuiz(mission));
  if (resetButton) resetButton.addEventListener("click", () => resetQuiz(mission));
  if (downloadButton) downloadButton.addEventListener("click", () => downloadResults(mission));
  if (uploadButton) uploadButton.addEventListener("click", () => toggleUploaded(mission));
}

function submitQuiz(mission) {
  let score = 0;
  const results = [];

  mission.quiz.forEach((item, index) => {
    const input = document.getElementById(`quiz-answer-${index}`);
    const feedback = document.getElementById(`quiz-feedback-${index}`);
    const userAnswer = normaliseAnswer(input.value);
    const accepted = item.accepted.map(normaliseAnswer);
    let status = "Incorrect";
    let feedbackNote = getThinkingPrompt(mission, item.prompt);

    if (accepted.includes(userAnswer)) {
      score += 1;
      status = "Correct";
      feedbackNote = item.explanation;
      feedback.className = "quiz-feedback correct show";
      feedback.innerHTML = `<strong>Correct!</strong> ${escapeHtml(item.explanation)} 🎉`;
    } else {
      feedback.className = "quiz-feedback incorrect show";
      feedback.innerHTML = `<strong>Keep thinking.</strong> ${escapeHtml(feedbackNote)}`;
    }

    results.push({
      question: item.prompt,
      userAnswer: input.value.trim() || "No answer",
      status,
      feedbackNote
    });
  });

  const percentage = Math.round((score / mission.quiz.length) * 100);
  const summary = document.getElementById("quiz-summary");
  let message = "A strong next step is to revisit the examples, use the thinking prompts, and try again.";
  if (percentage === 100) message = "Outstanding effort! You completed this mission perfectly. 🏆";
  else if (percentage >= 80) message = "Excellent progress! You have a strong understanding of this mission. 🌟";
  else if (percentage >= 60) message = "You are building confidence. A few more careful checks will help you level up. 💪";

  summary.innerHTML = `
    <h3>Quiz summary</h3>
    <p class="score-text">Score: ${score} / ${mission.quiz.length} (${percentage}%)</p>
    <p class="summary-text">${message}</p>
  `;

  const state = getMissionState(mission.id);
  const quizAnswers = {};
  mission.quiz.forEach((item, index) => {
    quizAnswers[index] = document.getElementById(`quiz-answer-${index}`).value;
  });

  setMissionState(mission.id, {
    ...state,
    quizAnswers,
    quizSubmitted: true,
    score,
    total: mission.quiz.length,
    results,
    lastVisited: new Date().toLocaleString()
  });

  const downloadButton = document.getElementById("download-results");
  const uploadButton = document.getElementById("toggle-uploaded");
  if (downloadButton) downloadButton.disabled = false;
  if (uploadButton) uploadButton.disabled = false;
  maybeCelebrateBadgeUnlock(mission.collection);
}

function maybeCelebrateBadgeUnlock(collection) {
  const badges = getBadges().filter((badge) => badge.collection === collection && badge.earned);
  const newest = badges[badges.length - 1];
  if (!newest) return;
  const summary = document.getElementById("quiz-summary");
  if (summary) {
    summary.innerHTML += `<div class="cheer-box">🏅 Badge check: You may have unlocked <strong>${escapeHtml(newest.title)}</strong>!</div>`;
  }
}

function restoreQuizFeedback(mission) {
  const state = getMissionState(mission.id);
  if (!state.quizSubmitted || !Array.isArray(state.results)) return;
  state.results.forEach((result, index) => {
    const feedback = document.getElementById(`quiz-feedback-${index}`);
    if (!feedback) return;
    feedback.className = `quiz-feedback ${result.status === "Correct" ? "correct" : "incorrect"} show`;
    feedback.innerHTML = result.status === "Correct"
      ? `<strong>Correct!</strong> ${escapeHtml(result.feedbackNote)}`
      : `<strong>Keep thinking.</strong> ${escapeHtml(result.feedbackNote)}`;
  });
}

function resetQuiz(mission) {
  document.querySelectorAll('[id^="quiz-answer-"]').forEach((input) => { input.value = ""; });
  document.querySelectorAll('[id^="quiz-feedback-"]').forEach((box) => {
    box.className = "quiz-feedback";
    box.innerHTML = "";
  });

  document.getElementById("quiz-summary").innerHTML = `
    <h3>Quiz summary</h3>
    <p class="summary-text">Your quiz score will appear here after submission.</p>
  `;

  setMissionState(mission.id, {
    ...getMissionState(mission.id),
    quizAnswers: {},
    quizSubmitted: false,
    score: null,
    total: null,
    results: [],
    uploaded: false
  });

  const downloadButton = document.getElementById("download-results");
  const uploadButton = document.getElementById("toggle-uploaded");
  if (downloadButton) downloadButton.disabled = true;
  if (uploadButton) {
    uploadButton.disabled = true;
    uploadButton.textContent = "Mark Complete when Uploaded to Daymap";
    uploadButton.className = "button button-warning";
  }
}

function toggleUploaded(mission) {
  const state = getMissionState(mission.id);
  const uploaded = !state.uploaded;
  setMissionState(mission.id, { ...state, uploaded });
  const btn = document.getElementById("toggle-uploaded");
  if (btn) {
    btn.textContent = uploaded ? "Uploaded to Daymap ✓" : "Mark Complete when Uploaded to Daymap";
    btn.className = `button ${uploaded ? "button-success" : "button-warning"}`;
  }
}

function downloadResults(mission) {
  const state = getMissionState(mission.id);
  if (!state.quizSubmitted || !Array.isArray(state.results)) return;
  const student = getStudentData();

  const rows = state.results.map((result, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(result.question)}</td>
      <td>${escapeHtml(result.userAnswer)}</td>
      <td>${escapeHtml(result.status)}</td>
      <td>${escapeHtml(result.feedbackNote)}</td>
    </tr>`).join("");

  const percentage = state.total ? Math.round((state.score / state.total) * 100) : 0;
  const documentHtml = `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${escapeHtml(mission.title)} Results</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #1c2440; }
          h1, h2 { color: #1947b8; }
          table { border-collapse: collapse; width: 100%; margin-top: 18px; }
          th, td { border: 1px solid #9aa8c0; padding: 8px; text-align: left; vertical-align: top; }
          th { background: #eef3ff; }
          .score { font-size: 18px; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>FDP Mission Quiz Results</h1>
        <p><strong>Student:</strong> ${escapeHtml(student.name || "Student")}</p>
        <p><strong>Class:</strong> ${escapeHtml(student.className || "Not entered")}</p>
        <p><strong>Mission:</strong> ${escapeHtml(mission.title)}</p>
        <p><strong>Topic:</strong> ${escapeHtml(mission.topic)}</p>
        <p><strong>Completed:</strong> ${escapeHtml(state.lastVisited || new Date().toLocaleString())}</p>
        <p class="score"><strong>Score:</strong> ${state.score} / ${state.total} (${percentage}%)</p>
        <h2>Question-by-question feedback</h2>
        <table>
          <thead>
            <tr>
              <th>#</th><th>Question</th><th>Student answer</th><th>Status</th><th>Feedback</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", documentHtml], { type: "application/msword" });
  const link = document.createElement("a");
  const safeTitle = mission.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  link.href = URL.createObjectURL(blob);
  link.download = `${safeTitle}-quiz-results.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setMissionState(mission.id, { ...state, downloaded: true });
}

function updateSaveStatus() {
  const pill = document.getElementById("mission-save-status");
  if (!pill) return;
  pill.textContent = "Saved on this device ✓";
  clearTimeout(updateSaveStatus._timer);
  updateSaveStatus._timer = setTimeout(() => {
    pill.textContent = "Autosaving on this device";
  }, 1400);
}

function initPage() {
  const page = document.body.dataset.page;
  if (page === "core-home") renderCoreHome();
  if (page === "extended-home") renderExtendedHome();
  if (page === "mission") renderMissionPage();
}

initPage();
