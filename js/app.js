function normaliseAnswer(value) {
  return value
    .toString()
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

function getMissionById(id) {
  return MISSIONS.find((mission) => mission.id === Number(id));
}

function getThinkingPrompt(mission, promptText = "") {
  const combined = `${mission.title} ${mission.topic} ${promptText}`.toLowerCase();

  if (combined.includes("fractions, decimals and percentages") || combined.includes("fdp")) {
    return "Try converting the value into a form you know well first. Ask yourself whether dividing, making a denominator of 100, or multiplying by 100 would help.";
  }

  if (combined.includes("equivalent fractions")) {
    return "Look at how one part of the fraction has changed. What number would multiply or divide one denominator into the other, and can you use the same number on the numerator?";
  }

  if (combined.includes("ordering and rounding decimals")) {
    if (combined.includes("round")) {
      return "Find the place value you are rounding to, then check the digit immediately to its right. Is it 5 or more, or less than 5?";
    }
    return "Line up the decimal points and compare from left to right: ones, tenths, then hundredths.";
  }

  if (combined.includes("calculating percentages") || combined.includes("percentage of a quantity")) {
    return "Think about a percentage you already know, such as 10%, 50% or 25%. Can you build the answer from one of those friendly percentages?";
  }

  if (combined.includes("adding fractions")) {
    return "Check the denominators first. If they already match, add the numerators. If they do not match, rename the fractions using a common denominator before adding.";
  }

  if (combined.includes("mixed numbers") || combined.includes("improper fractions")) {
    return "Ask yourself whether you are changing a whole-and-part number into one fraction, or splitting an improper fraction into wholes and a remainder.";
  }

  if (combined.includes("adding and subtracting decimals")) {
    return "Rewrite the numbers so the decimal points line up vertically. Then work one place value column at a time.";
  }

  if (combined.includes("multiplying and dividing fractions")) {
    if (combined.includes("÷")) {
      return "For division, remember: keep the first fraction, change division to multiplication, and flip the second fraction.";
    }
    return "For multiplication, multiply the numerators, then multiply the denominators, and simplify at the end if possible.";
  }

  if (combined.includes("multiplying and dividing decimals")) {
    if (combined.includes("÷")) {
      return "Think about place value. How many tenths or hundredths are being shared, and what should the size of the answer be?";
    }
    return "Use place value and known number facts first, then decide where the decimal point belongs in the product.";
  }

  return "Look back at the worked example and identify the first step. Try that same first step on this question before checking again.";
}

function renderMissionGroups() {
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
    const missions = MISSIONS.filter((mission) => mission.group === groupName);
    element.innerHTML = missions.map((mission) => `
      <article class="mission-card">
        <div>
          <div class="mission-meta">
            <span class="topic-label">${escapeHtml(mission.topic)}</span>
            <span class="${className}">${escapeHtml(mission.group)}</span>
          </div>
          <h3>${escapeHtml(mission.title)}</h3>
          <p>${escapeHtml(mission.shortDescription)}</p>
        </div>
        <a class="button button-primary" href="mission.html?id=${mission.id}">Open mission</a>
      </article>
    `).join("");
  });
}

function renderMissionPage() {
  const container = document.getElementById("mission-container");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const missionId = params.get("id") || 1;
  const mission = getMissionById(missionId) || MISSIONS[0];

  container.innerHTML = `
    <section class="mission-shell">
      <div class="mission-top">
        <div>
          <div class="mission-meta">
            <span class="topic-label">${escapeHtml(mission.topic)}</span>
            <span class="level-${mission.group.toLowerCase()}">${escapeHtml(mission.group)}</span>
          </div>
          <h2>${escapeHtml(mission.title)}</h2>
          <p class="muted">${escapeHtml(mission.shortDescription)}</p>
        </div>
      </div>

      <div class="meta-grid">
        <div class="meta-card">
          <h3>Student details</h3>
          <div class="field-group">
            <label for="student-name">Student name</label>
            <input id="student-name" type="text" placeholder="Enter student name" />
          </div>
          <div class="field-group" style="margin-top: 0.8rem;">
            <label for="student-class">Class</label>
            <input id="student-class" type="text" placeholder="Enter class" />
          </div>
        </div>
        <div class="note-card">
          <h3>Mission purpose</h3>
          <p>${escapeHtml(mission.learnIntro)}</p>
        </div>
        ${mission.supportLinks && mission.supportLinks.length ? `
        <div class="note-card">
          <h3>Additional support</h3>
          <p>If you would like another explanation, use the relevant support video${mission.supportLinks.length > 1 ? 's' : ''} below.</p>
          <ul>
            ${mission.supportLinks.map((link) => `<li><a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label)}</a></li>`).join("")}
          </ul>
        </div>
        ` : ""}
      </div>

      <div class="stage-grid">
        <div class="stage-card">
          <h3>Learn</h3>
          <p class="muted">Read the steps and examples before beginning.</p>
        </div>
        <div class="stage-card practice-stage">
          <h3>Practice</h3>
          <p class="muted">Receive feedback, hints and thinking prompts as you work.</p>
        </div>
        <div class="stage-card quiz-stage">
          <h3>Quiz</h3>
          <p class="muted">Submit your final quiz and download your result.</p>
        </div>
      </div>

      <section class="learn-section">
        <h3>Learn</h3>
        <div class="learn-card">
          <h3>Key steps</h3>
          <ol>${mission.keySteps.map(step => `<li>${escapeHtml(step)}</li>`).join("")}</ol>
        </div>
        <div class="learn-grid">
          ${mission.examples.map((example) => `
            <article class="learn-card">
              <h3>${escapeHtml(example.title)}</h3>
              <p class="prompt">${escapeHtml(example.question)}</p>
              <div class="example-box">
                <ol>${example.working.map(line => `<li>${escapeHtml(line)}</li>`).join("")}</ol>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="practice-section" style="margin-top: 2rem;">
        <h3>Practice</h3>
        <div class="practice-grid">
          ${mission.practice.map((item, index) => `
            <article class="practice-card">
              <p class="prompt">${index + 1}. ${escapeHtml(item.prompt)}</p>
              <div class="answer-row">
                <input type="text" id="practice-answer-${index}" placeholder="Type your answer" />
                <button class="button button-soft" data-practice-index="${index}">Check</button>
              </div>
              <div id="practice-feedback-${index}" class="feedback-box" aria-live="polite">
                Enter an answer, then click <strong>Check</strong>.
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="quiz-section" style="margin-top: 2rem;">
        <h3>Quiz</h3>
        <p class="muted">Complete all quiz questions, then click <strong>Submit Quiz</strong>.</p>
        <div class="quiz-grid">
          ${mission.quiz.map((item, index) => `
            <article class="quiz-card">
              <p class="prompt">${index + 1}. ${escapeHtml(item.prompt)}</p>
              <input type="text" id="quiz-answer-${index}" placeholder="Type your answer" />
              <div id="quiz-feedback-${index}" class="quiz-feedback" aria-live="polite"></div>
            </article>
          `).join("")}
        </div>

        <div class="quiz-actions" style="margin-top: 1rem;">
          <button id="submit-quiz" class="button button-primary">Submit Quiz</button>
          <button id="reset-quiz" class="button button-outline">Reset Quiz</button>
          <button id="download-results" class="button button-outline" disabled>Download Results (.doc)</button>
        </div>

        <div id="quiz-summary" class="summary-card">
          <h3>Quiz summary</h3>
          <p class="summary-text">Your quiz score will appear here after submission.</p>
        </div>
      </section>
    </section>
  `;

  bindPracticeHandlers(mission);
  bindQuizHandlers(mission);
}

function bindPracticeHandlers(mission) {
  const buttons = document.querySelectorAll("[data-practice-index]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.getAttribute("data-practice-index"));
      const item = mission.practice[index];
      const input = document.getElementById(`practice-answer-${index}`);
      const feedback = document.getElementById(`practice-feedback-${index}`);
      const userAnswer = normaliseAnswer(input.value);
      const accepted = item.accepted.map(normaliseAnswer);

      if (!userAnswer) {
        feedback.className = "feedback-box warning";
        feedback.innerHTML = `<strong>Please enter an answer first.</strong><br><strong>Hint:</strong> ${escapeHtml(item.hint)}<br><strong>Think about this:</strong> ${escapeHtml(getThinkingPrompt(mission, item.prompt))}`;
        return;
      }

      if (accepted.includes(userAnswer)) {
        feedback.className = "feedback-box correct";
        feedback.innerHTML = `<strong>Correct.</strong> ${escapeHtml(item.answerText)}`;
      } else {
        feedback.className = "feedback-box incorrect";
        feedback.innerHTML = `<strong>Not quite yet.</strong><br><strong>Hint:</strong> ${escapeHtml(item.hint)}<br><strong>Think about this:</strong> ${escapeHtml(getThinkingPrompt(mission, item.prompt))}`;
      }
    });
  });
}

let latestQuizResult = null;

function bindQuizHandlers(mission) {
  const submitButton = document.getElementById("submit-quiz");
  const resetButton = document.getElementById("reset-quiz");
  const downloadButton = document.getElementById("download-results");

  submitButton.addEventListener("click", () => submitQuiz(mission));
  resetButton.addEventListener("click", resetQuiz);
  downloadButton.addEventListener("click", () => downloadResults(mission));
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
      feedback.innerHTML = `<strong>Correct.</strong> ${escapeHtml(item.explanation)}`;
    } else {
      feedback.className = "quiz-feedback incorrect show";
      feedback.innerHTML = `<strong>Not quite.</strong> ${escapeHtml(feedbackNote)}`;
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
  let message = "A good next step is to review the worked examples and try the quiz again.";

  if (percentage === 100) {
    message = "Excellent work. You answered every quiz question correctly.";
  } else if (percentage >= 80) {
    message = "Strong work. You have shown a secure understanding of this mission.";
  } else if (percentage >= 60) {
    message = "You are making progress. Review the practice feedback to strengthen the skill.";
  }

  summary.innerHTML = `
    <h3>Quiz summary</h3>
    <p class="score-text">Score: ${score} / ${mission.quiz.length} (${percentage}%)</p>
    <p class="summary-text">${message}</p>
  `;

  latestQuizResult = {
    missionTitle: mission.title,
    group: mission.group,
    topic: mission.topic,
    score,
    total: mission.quiz.length,
    percentage,
    studentName: document.getElementById("student-name")?.value.trim() || "Student",
    studentClass: document.getElementById("student-class")?.value.trim() || "Not entered",
    completedAt: new Date().toLocaleString(),
    results
  };

  document.getElementById("download-results").disabled = false;
}

function resetQuiz() {
  document.querySelectorAll('[id^="quiz-answer-"]').forEach((input) => {
    input.value = "";
  });

  document.querySelectorAll('[id^="quiz-feedback-"]').forEach((box) => {
    box.className = "quiz-feedback";
    box.innerHTML = "";
  });

  const summary = document.getElementById("quiz-summary");
  if (summary) {
    summary.innerHTML = `
      <h3>Quiz summary</h3>
      <p class="summary-text">Your quiz score will appear here after submission.</p>
    `;
  }

  latestQuizResult = null;
  const downloadButton = document.getElementById("download-results");
  if (downloadButton) {
    downloadButton.disabled = true;
  }
}

function downloadResults(mission) {
  if (!latestQuizResult) return;

  const rows = latestQuizResult.results.map((result, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${escapeHtml(result.question)}</td>
      <td>${escapeHtml(result.userAnswer)}</td>
      <td>${escapeHtml(result.status)}</td>
      <td>${escapeHtml(result.feedbackNote)}</td>
    </tr>
  `).join("");

  const documentHtml = `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>${escapeHtml(latestQuizResult.missionTitle)} Results</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 24px; color: #172033; }
          h1, h2 { color: #1746bf; }
          p { margin: 4px 0; }
          table { border-collapse: collapse; width: 100%; margin-top: 18px; }
          th, td { border: 1px solid #98a3b5; padding: 8px; vertical-align: top; text-align: left; }
          th { background: #edf3ff; }
          .meta { margin-bottom: 14px; }
          .score { font-size: 18px; font-weight: bold; margin-top: 10px; }
        </style>
      </head>
      <body>
        <h1>FDP Mission Quiz Results</h1>
        <div class="meta">
          <p><strong>Student:</strong> ${escapeHtml(latestQuizResult.studentName)}</p>
          <p><strong>Class:</strong> ${escapeHtml(latestQuizResult.studentClass)}</p>
          <p><strong>Mission:</strong> ${escapeHtml(latestQuizResult.missionTitle)}</p>
          <p><strong>Group:</strong> ${escapeHtml(latestQuizResult.group)}</p>
          <p><strong>Topic:</strong> ${escapeHtml(latestQuizResult.topic)}</p>
          <p><strong>Completed:</strong> ${escapeHtml(latestQuizResult.completedAt)}</p>
          <p class="score"><strong>Score:</strong> ${latestQuizResult.score} / ${latestQuizResult.total} (${latestQuizResult.percentage}%)</p>
        </div>
        <h2>Question-by-question results</h2>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Student answer</th>
              <th>Status</th>
              <th>Feedback</th>
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
}

renderMissionGroups();
renderMissionPage();
