// Aplicación principal de la plataforma de diagnósticos.
// La lógica usa el diagnóstico seleccionado desde window.DIAGNOSTICS.

const state = {
  participantName: "",
  selectedDiagnosticId: "",
  currentQuestionIndex: 0,
  answers: [],
  activeQuestions: [] // copia mezclada (preguntas y alternativas) del intento actual
};

const screens = {
  start: document.getElementById("start-screen"),
  quiz: document.getElementById("quiz-screen"),
  result: document.getElementById("result-screen")
};

const elements = {
  startForm: document.getElementById("start-form"),
  participantName: document.getElementById("participant-name"),
  diagnosticSelect: document.getElementById("diagnostic-select"),
  diagnosticTitle: document.getElementById("diagnostic-title"),
  diagnosticDescription: document.getElementById("diagnostic-description"),
  diagnosticDuration: document.getElementById("diagnostic-duration"),
  questionProgress: document.getElementById("question-progress"),
  answeredCount: document.getElementById("answered-count"),
  progressBar: document.getElementById("progress-bar"),
  questionCourse: document.getElementById("question-course"),
  questionDifficulty: document.getElementById("question-difficulty"),
  questionText: document.getElementById("question-text"),
  optionsList: document.getElementById("options-list"),
  prevBtn: document.getElementById("prev-btn"),
  nextBtn: document.getElementById("next-btn"),
  finishBtn: document.getElementById("finish-btn"),
  overlay: document.getElementById("analysis-overlay"),
  resultTitle: document.getElementById("result-title"),
  resultSummary: document.getElementById("result-summary"),
  generalScore: document.getElementById("general-score"),
  mainCourse: document.getElementById("main-course"),
  mainCourseText: document.getElementById("main-course-text"),
  secondCourse: document.getElementById("second-course"),
  strengths: document.getElementById("strengths"),
  opportunities: document.getElementById("opportunities"),
  courseResults: document.getElementById("course-results"),
  closingMessage: document.getElementById("closing-message"),
  restartBtn: document.getElementById("restart-btn"),
  printBtn: document.getElementById("print-btn")
};

/*
  FUTURO LOGIN
  En una siguiente etapa se puede agregar autenticación con usuario y contraseña
  antes de iniciar el diagnóstico. La pantalla inicial podría validar credenciales
  contra un servicio externo, guardar un token de sesión y asociar los resultados
  al usuario autenticado. Para mantener esta versión simple y ejecutable desde
  index.html, el flujo actual solo solicita el nombre del participante.
*/

initializeDiagnostics();

elements.diagnosticSelect.addEventListener("change", () => {
  state.selectedDiagnosticId = elements.diagnosticSelect.value;
  state.currentQuestionIndex = 0;
  updateDiagnosticIntro();
});

elements.startForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = elements.participantName.value.trim();

  if (!state.selectedDiagnosticId) {
    elements.diagnosticSelect.focus();
    return;
  }

  if (!name) {
    elements.participantName.focus();
    return;
  }

  const diagnostic = getActiveDiagnostic();
  state.participantName = name;
  state.currentQuestionIndex = 0;
  state.activeQuestions = buildShuffledQuestions(diagnostic);
  state.answers = new Array(state.activeQuestions.length).fill(null);
  showScreen("quiz");
  renderQuestion();
});

elements.prevBtn.addEventListener("click", () => {
  if (state.currentQuestionIndex > 0) {
    state.currentQuestionIndex -= 1;
    renderQuestion();
  }
});

elements.nextBtn.addEventListener("click", () => {
  if (state.answers[state.currentQuestionIndex] === null) {
    highlightMissingAnswer();
    return;
  }

  const diagnostic = getActiveDiagnostic();
  if (state.currentQuestionIndex < state.activeQuestions.length - 1) {
    state.currentQuestionIndex += 1;
    renderQuestion();
  }
});

elements.finishBtn.addEventListener("click", () => {
  if (state.answers.includes(null)) {
    const firstMissing = state.answers.findIndex((answer) => answer === null);
    state.currentQuestionIndex = firstMissing;
    renderQuestion();
    highlightMissingAnswer();
    return;
  }

  elements.overlay.classList.remove("hidden");
  setTimeout(() => {
    const results = calculateResults();
    renderResults(results);
    elements.overlay.classList.add("hidden");
    showScreen("result");
  }, 1800);
});

elements.restartBtn.addEventListener("click", () => {
  const diagnostic = getActiveDiagnostic();
  state.currentQuestionIndex = 0;
  state.activeQuestions = [];
  state.answers = new Array(diagnostic.questions.length).fill(null);
  elements.participantName.value = "";
  showScreen("start");
});

elements.printBtn.addEventListener("click", () => {
  window.print();
});

function initializeDiagnostics() {
  const diagnostics = window.DIAGNOSTICS || [];
  elements.diagnosticSelect.innerHTML = "";

  diagnostics.forEach((diagnostic) => {
    const option = document.createElement("option");
    option.value = diagnostic.id;
    option.textContent = diagnostic.name;
    elements.diagnosticSelect.appendChild(option);
  });

  if (diagnostics.length > 0) {
    state.selectedDiagnosticId = diagnostics[0].id;
    elements.diagnosticSelect.value = state.selectedDiagnosticId;
    updateDiagnosticIntro();
  }
}

function getActiveDiagnostic() {
  return (window.DIAGNOSTICS || []).find((diagnostic) => diagnostic.id === state.selectedDiagnosticId);
}

// Mezcla aleatoria genérica (Fisher-Yates). Aplica a cualquier diagnóstico,
// actual o futuro, sin necesidad de tocar sus archivos individuales.
function shuffleArray(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// Crea una copia del banco de preguntas del diagnóstico con:
// - el orden de las preguntas mezclado
// - el orden de las alternativas de cada pregunta mezclado
// El correctAnswer se recalcula para seguir apuntando a la alternativa correcta
// en su nueva posición. Los datos originales de js/diagnostics/*.js no se modifican,
// por lo que cada persona que rinde el diagnóstico recibe un orden distinto.
function buildShuffledQuestions(diagnostic) {
  const clonedQuestions = diagnostic.questions.map((question) => ({
    ...question,
    options: question.options.slice()
  }));

  const shuffledQuestions = shuffleArray(clonedQuestions);

  shuffledQuestions.forEach((question) => {
    const optionsWithFlag = question.options.map((option, index) => ({
      option,
      isCorrect: index === question.correctAnswer
    }));
    const shuffledOptions = shuffleArray(optionsWithFlag);

    question.options = shuffledOptions.map((item) => item.option);
    question.correctAnswer = shuffledOptions.findIndex((item) => item.isCorrect);
  });

  return shuffledQuestions;
}

function updateDiagnosticIntro() {
  const diagnostic = getActiveDiagnostic();
  if (!diagnostic) return;

  elements.diagnosticTitle.textContent = diagnostic.title;
  elements.diagnosticDescription.textContent = diagnostic.description;
  elements.diagnosticDuration.textContent = diagnostic.duration || "Duración estimada: 10 a 15 minutos";
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[screenName].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderQuestion() {
  const diagnostic = getActiveDiagnostic();
  const questions = state.activeQuestions;
  const courses = diagnostic.courses;
  const question = questions[state.currentQuestionIndex];
  const course = courses.find((item) => item.id === question.courseId);
  const answered = state.answers.filter((answer) => answer !== null).length;
  const progress = ((state.currentQuestionIndex + 1) / questions.length) * 100;

  elements.questionProgress.textContent = `Pregunta ${state.currentQuestionIndex + 1} de ${questions.length}`;
  elements.answeredCount.textContent = `${answered} respondidas`;
  elements.progressBar.style.width = `${progress}%`;
  elements.questionCourse.textContent = course ? course.shortName : question.courseId;
  elements.questionDifficulty.textContent = `Dificultad ${question.difficulty}`;
  elements.questionText.textContent = buildCaseQuestion(question, course);
  elements.optionsList.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-card";
    button.textContent = option;

    if (state.answers[state.currentQuestionIndex] === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      state.answers[state.currentQuestionIndex] = index;
      renderQuestion();
    });

    elements.optionsList.appendChild(button);
  });

  elements.prevBtn.disabled = state.currentQuestionIndex === 0;
  elements.nextBtn.classList.toggle("hidden", state.currentQuestionIndex === questions.length - 1);
  elements.finishBtn.classList.toggle("hidden", state.currentQuestionIndex !== questions.length - 1);
}

function highlightMissingAnswer() {
  elements.optionsList.classList.add("needs-answer");
  setTimeout(() => elements.optionsList.classList.remove("needs-answer"), 700);
}

function calculateResults() {
  const diagnostic = getActiveDiagnostic();
  const questions = state.activeQuestions;
  const courseScores = diagnostic.courses.map((course) => {
    const courseQuestions = questions.filter((question) => question.courseId === course.id);
    const maxScore = courseQuestions.reduce((sum, question) => sum + question.weight, 0);
    const obtainedScore = courseQuestions.reduce((sum, question) => {
      const questionIndex = questions.findIndex((item) => item.id === question.id);
      const isCorrect = state.answers[questionIndex] === question.correctAnswer;
      return sum + (isCorrect ? question.weight : 0);
    }, 0);
    const percentage = maxScore > 0 ? Math.round((obtainedScore / maxScore) * 100) : 0;
    const gap = 100 - percentage;

    return {
      ...course,
      maxScore,
      obtainedScore,
      percentage,
      gap,
      level: getLevel(percentage)
    };
  });

  const sortedAscending = [...courseScores].sort(sortByGapPriority);
  const sortedDescending = [...courseScores].sort(sortByStrengthPriority);
  const recommendations = getRecommendations(diagnostic, sortedAscending);
  const sequentialLevel = getSequentialLevel(diagnostic, courseScores);
  const strengths = getStrengths(diagnostic, sortedDescending);
  const totalObtained = courseScores.reduce((sum, course) => sum + course.obtainedScore, 0);
  const totalMax = courseScores.reduce((sum, course) => sum + course.maxScore, 0);
  const generalPercentage = Math.round((totalObtained / totalMax) * 100);

  return {
    diagnostic,
    courseScores,
    generalPercentage,
    sequentialLevel,
    recommendations,
    mainRecommendation: recommendations[0] || null,
    secondRecommendation: recommendations[1] || null,
    strengths,
    opportunities: recommendations.length > 0 ? recommendations : sortedAscending.slice(0, 1)
  };
}

function getLevel(percentage) {
  if (percentage <= 39) return "Inicial";
  if (percentage <= 59) return "Básico";
  if (percentage <= 79) return "Intermedio";
  return "Avanzado";
}

function sortByGapPriority(a, b) {
  if (a.percentage !== b.percentage) return a.percentage - b.percentage;
  return (a.priority || 999) - (b.priority || 999);
}

function sortByStrengthPriority(a, b) {
  if (a.percentage !== b.percentage) return b.percentage - a.percentage;
  return (a.priority || 999) - (b.priority || 999);
}

function getRecommendations(diagnostic, sortedAscending) {
  const maxRecommendations = diagnostic.maxRecommendations || 2;
  const threshold = diagnostic.assimilationThreshold || 60;

  if (diagnostic.recommendByPriority) {
    return [...sortedAscending]
      .sort((a, b) => (a.priority || 999) - (b.priority || 999))
      .filter((course) => course.percentage < threshold)
      .slice(0, maxRecommendations);
  }

  if (diagnostic.recommendOnlyGaps) {
    return sortedAscending.filter((course) => course.percentage < threshold).slice(0, maxRecommendations);
  }

  return sortedAscending.slice(0, maxRecommendations);
}

function getStrengths(diagnostic, sortedDescending) {
  const maxStrengths = diagnostic.maxStrengths || 2;
  const threshold = diagnostic.masteryThreshold || 70;

  if (diagnostic.showOnlyMasteredStrengths) {
    return sortedDescending.filter((course) => course.percentage >= threshold).slice(0, maxStrengths);
  }

  return sortedDescending.slice(0, maxStrengths);
}

function getSequentialLevel(diagnostic, courseScores) {
  if (!diagnostic.useSequentialLevel) return null;

  const threshold = diagnostic.masteryThreshold || 70;
  const orderedCourses = [...courseScores].sort((a, b) => (a.priority || 999) - (b.priority || 999));
  let achieved = null;

  for (const course of orderedCourses) {
    if (course.percentage >= threshold) {
      achieved = course;
    } else {
      break;
    }
  }

  return achieved;
}

function buildCaseQuestion(question, course) {
  if (question.case) return `${question.case} ${question.question}`;
  if (question.question.trim().toLowerCase().startsWith("caso:")) return question.question;

  const caseByCourse = {
    curso1: "Caso: Una persona de tu equipo está comenzando a usar IA Generativa y necesita comprender sus conceptos base antes de aplicarla.",
    curso2: "Caso: En una jornada laboral, un equipo quiere usar ChatGPT o un asistente de IA para ahorrar tiempo y mejorar la calidad de sus tareas.",
    curso3: "Caso: Debes pedirle a una IA Generativa un resultado útil, claro y ajustado a un objetivo profesional específico.",
    curso4: "Caso: Una organización quiere aplicar IA Generativa en procesos reales de trabajo, análisis y toma de decisiones.",
    curso5: "Caso: Un equipo necesita usar IA Generativa con seguridad, criterio ético y resguardo de la información."
  };
  const context = caseByCourse[question.courseId] || `Caso: Estás aplicando tus competencias en ${course ? course.shortName : "este tema"}.`;
  return `${context} ${question.question}`;
}

function renderResults(results) {
  const label = results.diagnostic.resultLabel || "curso";
  const nextCourseContainer = elements.secondCourse.closest(".next-course");

  elements.resultTitle.textContent = `${state.participantName}, este es tu diagnóstico de competencias: ${results.diagnostic.name}`;
  elements.generalScore.textContent = `${results.generalPercentage}%`;
  const levelText = results.sequentialLevel
    ? `Tu nivel diagnosticado es ${results.sequentialLevel.shortName}, porque es el mayor nivel consecutivo con asimilación igual o superior al ${results.diagnostic.masteryThreshold || 70}%.`
    : `Tu nivel general es ${getLevel(results.generalPercentage)}.`;
  elements.resultSummary.textContent = `${levelText} El análisis considera el porcentaje de asimilación por cada ${label}. Si existe empate, se usa el orden pedagógico definido para priorizar la recomendación.`;

  if (results.mainRecommendation) {
    elements.mainCourse.textContent = results.mainRecommendation.name;
    elements.mainCourseText.textContent = results.mainRecommendation.commercialRecommendation;
  } else {
    elements.mainCourse.textContent = "No se detectan brechas prioritarias";
    elements.mainCourseText.textContent = "El resultado muestra asimilación suficiente en los cursos evaluados. Se recomienda continuar con práctica aplicada o avanzar hacia contenidos superiores.";
  }

  if (results.secondRecommendation) {
    nextCourseContainer.classList.remove("hidden");
    elements.secondCourse.textContent = results.secondRecommendation.name;
  } else {
    nextCourseContainer.classList.add("hidden");
    elements.secondCourse.textContent = "";
  }

  elements.strengths.textContent = formatCourseList(
    results.strengths,
    "No se identifican cursos o temáticas asimiladas en este diagnóstico."
  );
  elements.opportunities.textContent = formatCourseList(
    results.opportunities,
    "No se identifican brechas prioritarias en este diagnóstico."
  );
  elements.courseResults.innerHTML = "";

  results.courseScores.forEach((course) => {
    const card = document.createElement("article");
    card.className = "course-card";
    card.innerHTML = `
      <div class="course-card-text">
        <div class="course-card-head">
          <div>
            <h4>${course.name}</h4>
            <p>${course.description}</p>
          </div>
          <strong>${course.percentage}%</strong>
        </div>
        <div class="course-card-foot">
          <span>Nivel: ${course.level}</span>
          <span>Puntaje: ${course.obtainedScore}/${course.maxScore}</span>
        </div>
      </div>
      <div class="gap-chart" aria-label="Brecha de ${course.gap}%">
        <div class="gap-chart-bar">
          <span style="height: ${course.gap}%"></span>
        </div>
        <strong>${course.gap}%</strong>
        <small>brecha</small>
      </div>
    `;
    elements.courseResults.appendChild(card);
  });

  elements.closingMessage.textContent = "Este resultado entrega una orientación profesional para planificar tu ruta de aprendizaje. Se recomienda iniciar por la recomendación principal y continuar avanzando desde las competencias ya dominadas.";
}

function formatCourseList(courses, emptyMessage) {
  if (!courses || courses.length === 0) return emptyMessage || "No se identifican resultados en este diagnóstico.";
  return courses.map((course) => `${course.shortName} (${course.percentage}%)`).join(" y ");
}
