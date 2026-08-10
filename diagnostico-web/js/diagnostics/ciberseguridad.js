// PLANTILLA — Copia este archivo para crear un nuevo diagnóstico.
//
// PASOS:
// 1) Duplica este archivo dentro de js/diagnostics/ y renómbralo, por ejemplo:
//    js/diagnostics/ciberseguridad.js
// 2) Cambia la extensión de .js.txt a .js (este archivo termina en .js.txt
//    a propósito, para que el navegador NO lo cargue mientras es solo una plantilla).
// 3) Reemplaza el prefijo "TEMA_" por algo único de tu diagnóstico
//    (ej: CIBER_COURSES, CIBER_QUESTIONS) para no chocar con otros diagnósticos.
// 4) Completa los cursos y las preguntas más abajo.
// 5) Agrega <script src="js/diagnostics/ciberseguridad.js"></script> en
//    index_d.html, en cualquier orden, siempre ANTES de js/app.js.
// ¡Eso es todo! No hay que tocar app.js, diagnostics.js ni ningún otro archivo.

(function () {
  window.DIAGNOSTICS = window.DIAGNOSTICS || [];

  // ---- Cursos / módulos ----
  // - id: identificador único del curso (debe coincidir con courseId en las preguntas).
  // - priority: orden pedagógico, se usa para desempatar cursos con igual porcentaje.
  // - shortName: nombre corto usado en etiquetas y resultados.
  // - competencies: lista de competencias que cubre el curso.
  // - commercialRecommendation: texto que se muestra al recomendar este curso.
  const CIBER_COURSES = [
    {
      id: "Curso01",
      priority: 1,
      name: "Introducción a la Ciber Seguridad",
      shortName: "Intro Ciber",
      description: "Medir las nociones sobre temas relevantes de Ciber Seguridad.",
      competencies: ["Conocimiento 1", "Conocimiento 2"],
      commercialRecommendation: "Por qué recomendamos este curso para los que deseen saber sobre Ciber Seguridad."
    }
    // Agrega más cursos/módulos siguiendo el mismo formato...
  ];

  // ---- Preguntas ----
  // - courseId: debe coincidir con un id de TEMA_COURSES.
  // - difficulty: "fácil" o "media".
  // - weight: peso de la pregunta (por defecto 1).
  // - correctAnswer: índice de la alternativa correcta, empezando en 0.
  const CIBER_QUESTIONS = [
    {
      id: 1,
      courseId: "Curso01",
      competence: "Nombre de la competencia evaluada",
      difficulty: "fácil",
      weight: 1,
      question: "Cual es la letra correcta",
      options: [
        "Alternativa A",
        "Alternativa B",
        "Alternativa C",
        "Alternativa D"
      ],
      correctAnswer: 0
    }
    // Agrega más preguntas siguiendo el mismo formato...
  ];

  // ---- Registro del diagnóstico ----
  // id, name, title, description y duration se muestran en la lista inicial
  // de diagnósticos y en el encabezado del diagnóstico seleccionado.
  window.DIAGNOSTICS.push({
    id: "ciberseguridad",
    name: "Fundamentos de Ciber Seguridad",
    title: "Diagnóstico de Competencias relevantes",
    description: "Evaluar diferentes conocimientos sobre Ciber Seguridad.",
    duration: "Duración estimada: 10 a 15 minutos",
    resultLabel: "curso",
    masteryThreshold: 70,
    assimilationThreshold: 70,
    useSequentialLevel: true,
    recommendByPriority: true,
    showOnlyMasteredStrengths: true,
    maxRecommendations: 2,
    maxStrengths: 2,
    courses: CIBER_COURSES,
    questions: CIBER_QUESTIONS
  });
})();
