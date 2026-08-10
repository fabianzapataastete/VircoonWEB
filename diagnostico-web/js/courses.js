// Modifica aquí los cursos, competencias y mensajes comerciales.
// El id debe coincidir con courseId en questions.js.
// priority define el orden pedagógico para desempatar cursos con el mismo porcentaje.
const COURSES = [
  {
    id: "curso1",
    priority: 1,
    name: "Fundamentos de Inteligencia Artificial Generativa",
    shortName: "Fundamentos de IA Generativa",
    description: "Curso orientado a comprender qué es la IA Generativa, cómo se diferencia de otros tipos de IA y dónde puede aplicarse en la vida diaria.",
    competencies: ["conceptos básicos", "tipos de IA", "diferencias entre IA tradicional e IA Generativa", "usos cotidianos"],
    commercialRecommendation: "Ideal para construir una base sólida antes de avanzar hacia herramientas, prompts y aplicaciones laborales."
  },
  {
    id: "curso2",
    priority: 2,
    name: "Uso práctico de ChatGPT y asistentes de IA",
    shortName: "ChatGPT y asistentes de IA",
    description: "Curso práctico para interactuar con asistentes de IA, formular consultas efectivas y aumentar la productividad personal.",
    competencies: ["interacción con asistentes", "consultas efectivas", "productividad", "análisis de información"],
    commercialRecommendation: "Recomendado para usuarios que desean incorporar asistentes de IA en tareas concretas y cotidianas."
  },
  {
    id: "curso3",
    priority: 3,
    name: "Prompts efectivos para IA Generativa",
    shortName: "Prompts efectivos",
    description: "Curso enfocado en construir instrucciones claras, entregar contexto y mejorar progresivamente la calidad de los resultados.",
    competencies: ["estructura de prompts", "contexto", "instrucciones", "mejora de resultados", "Método CLARO"],
    commercialRecommendation: "Clave para transformar solicitudes simples en instrucciones profesionales y reutilizables."
  },
  {
    id: "curso4",
    priority: 4,
    name: "IA Generativa aplicada al trabajo y los negocios",
    shortName: "IA aplicada al trabajo",
    description: "Curso para identificar casos de uso, apoyar decisiones, analizar documentos y automatizar tareas básicas con IA Generativa.",
    competencies: ["casos de uso", "eficiencia", "análisis documental", "apoyo a decisiones", "automatización básica"],
    commercialRecommendation: "Pensado para equipos que buscan productividad, eficiencia y aplicación real de IA en procesos laborales."
  },
  {
    id: "curso5",
    priority: 5,
    name: "Uso responsable, ético y seguro de IA",
    shortName: "IA responsable y segura",
    description: "Curso centrado en privacidad, sesgos, riesgos, verificación de información y buenas prácticas de uso responsable.",
    competencies: ["privacidad", "sesgos", "riesgos", "verificación de información", "buenas prácticas"],
    commercialRecommendation: "Necesario para usar IA con criterio profesional, seguridad y responsabilidad organizacional."
  }
];


