// Diagnóstico: Inteligencia Artificial Generativa.
// Archivo autocontenido: agrupa cursos, preguntas y el registro del diagnóstico.
// Sigue el mismo patrón que js/diagnostics/excel-productividad.js.
(function () {
  window.DIAGNOSTICS = window.DIAGNOSTICS || [];

  // ---- Cursos / módulos ----
  // El id debe coincidir con courseId en las preguntas de abajo.
  // priority define el orden pedagógico para desempatar cursos con el mismo porcentaje.
  // Modifica aquí los cursos, competencias y mensajes comerciales.
// El id debe coincidir con courseId en las preguntas de este mismo archivo.
// priority define el orden pedagógico para desempatar cursos con el mismo porcentaje.
const IA_COURSES = [
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

  // ---- Preguntas ----
  // correctAnswer usa índice desde 0: 0 = primera alternativa, 1 = segunda, etc.
  // weight permite ponderar preguntas; todas parten en 1.
  // Banco editable de preguntas.
// correctAnswer usa indice desde 0: 0 = primera alternativa, 1 = segunda, etc.
// weight permite ponderar preguntas; todas parten en 1.
const IA_QUESTIONS = [
  {
    id: 1,
    courseId: "curso1",
    competence: "Conceptos básicos",
    difficulty: "fácil",
    weight: 1,
    question: "Qué caracteriza principalmente a la Inteligencia Artificial Generativa?",
    options: [
      "Que solo almacena datos históricos",
      "Qué puede crear contenido nuevo a partir de instrucciones",
      "Que funciona únicamente con planillas de cálculo",
      "Que reemplaza completamente a todos los trabajadores"
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    courseId: "curso1",
    competence: "Tipos de IA",
    difficulty: "fácil",
    weight: 1,
    question: "Cuál de estos ejemplos corresponde a un uso de IA Generativa?",
    options: [
      "Crear un borrador de correo a partir de una instrucción",
      "Encender manualmente un computador",
      "Guardar archivos en una carpeta",
      "Conectar un cable HDMI"
    ],
    correctAnswer: 0
  },
  {
    id: 3,
    courseId: "curso1",
    competence: "IA tradicional e IA Generativa",
    difficulty: "media",
    weight: 1,
    question: "Una diferencia importante entre IA tradicional e IA Generativa es que la IA Generativa suele:",
    options: [
      "Bloquear todo contenido nuevo",
      "Crear textos, imágenes u otros contenidos según una solicitud",
      "Funcionar sin datos ni entrenamiento previo",
      "Trabajar solo sin intervención humana"
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    courseId: "curso1",
    competence: "Usos cotidianos",
    difficulty: "fácil",
    weight: 1,
    question: "Cuál es una tarea cotidiana donde puede apoyar la IA Generativa?",
    options: [
      "Redactar ideas para una presentación",
      "Reparar físicamente una impresora",
      "Cambiar una batería descargada",
      "Aumentar la memoria de un computador"
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    courseId: "curso1",
    competence: "Conceptos básicos",
    difficulty: "media",
    weight: 1,
    question: "Por qué se dice que una respuesta de IA Generativa debe revisarse?",
    options: [
      "Porque siempre incluye virus",
      "Porque puede contener errores o información desactualizada",
      "Porque no permite editar texto",
      "Porque solo responde en inglés"
    ],
    correctAnswer: 1
  },
  {
    id: 6,
    courseId: "curso1",
    competence: "Tipos de IA",
    difficulty: "fácil",
    weight: 1,
    question: "Un asistente que resume un documento y propone ideas nuevas es un ejemplo de:",
    options: [
      "IA Generativa aplicada a información",
      "Un antivirus tradicional",
      "Un cable de red inteligente",
      "Una impresora automatica"
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    courseId: "curso1",
    competence: "IA tradicional e IA Generativa",
    difficulty: "media",
    weight: 1,
    question: "Que afirmacion es mas correcta sobre la IA Generativa?",
    options: [
      "Siempre entrega respuestas perfectas",
      "Puede apoyar tareas creativas y analiticas, pero requiere criterio humano",
      "Solo sirve para crear imágenes",
      "No puede trabajar con lenguaje natural"
    ],
    correctAnswer: 1
  },
  {
    id: 8,
    courseId: "curso1",
    competence: "Usos cotidianos",
    difficulty: "fácil",
    weight: 1,
    question: "Que tipo de instrucción puede entender un asistente de IA Generativa?",
    options: [
      "Una petición escrita en lenguaje natural",
      "Solo comandos de programación avanzada",
      "Exclusivamente codigos numericos",
      "Solo imágenes sin texto"
    ],
    correctAnswer: 0
  },
  {
    id: 9,
    courseId: "curso1",
    competence: "Conceptos básicos",
    difficulty: "media",
    weight: 1,
    question: "Qué significa que la IA Generativa produzca una respuesta probabilística?",
    options: [
      "Que responde según patrones aprendidos y no como una fuente infalible",
      "Que siempre adivina al azar",
      "Que no usa ningun dato",
      "Que solo funciona con calculadoras"
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    courseId: "curso1",
    competence: "Usos cotidianos",
    difficulty: "fácil",
    weight: 1,
    question: "Cuál es una buena expectativa al usar IA Generativa por primera vez?",
    options: [
      "Recibir apoyo para crear borradores, ideas y explicaciones",
      "Eliminar toda necesidad de revisar el trabajo",
      "Obtener siempre información oficial garantizada",
      "Reemplazar todas las herramientas de una empresa"
    ],
    correctAnswer: 0
  },
  {
    id: 11,
    courseId: "curso2",
    competence: "Interaccion con asistentes",
    difficulty: "fácil",
    weight: 1,
    question: "Qué mejora normalmente la calidad de una respuesta de ChatGPT?",
    options: [
      "Entregar contexto claro y una tarea especifica",
      "Escribir solo una palabra",
      "Pedir varias cosas contradictorias",
      "Evitar explicar el objetivo"
    ],
    correctAnswer: 0
  },
  {
    id: 12,
    courseId: "curso2",
    competence: "Consultas efectivas",
    difficulty: "media",
    weight: 1,
    question: "Si una respuesta es demasiado general, Qué conviene hacer?",
    options: [
      "Cerrar la herramienta inmediatamente",
      "Pedir una versión mas especifica indicando formato y contexto",
      "Aceptar la respuesta sin revisar",
      "Cambiar de computador"
    ],
    correctAnswer: 1
  },
  {
    id: 13,
    courseId: "curso2",
    competence: "Productividad",
    difficulty: "fácil",
    weight: 1,
    question: "Cuál tarea puede acelerar un asistente de IA en el trabajo diario?",
    options: [
      "Ordenar ideas para una reunion",
      "Firmar legalmente por una persona",
      "Garantizar ventas automáticamente",
      "Evitar toda comunicación humana"
    ],
    correctAnswer: 0
  },
  {
    id: 14,
    courseId: "curso2",
    competence: "análisis de información",
    difficulty: "media",
    weight: 1,
    question: "Al pedir a la IA que analice un texto largo, que instrucción ayuda mas?",
    options: [
      "Lee esto y haz algo",
      "Resume los puntos principales, riesgos y acciones sugeridas en una tabla",
      "No uses ningun criterio",
      "Responde lo mas largo posible sin estructura"
    ],
    correctAnswer: 1
  },
  {
    id: 15,
    courseId: "curso2",
    competence: "Interaccion con asistentes",
    difficulty: "fácil",
    weight: 1,
    question: "Qué es una conversacion Iterativa con un asistente de IA?",
    options: [
      "Hacer una pregunta y mejorar la respuesta con nuevas instrucciones",
      "Enviar siempre el mismo mensaje",
      "No permitir correcciones",
      "Usar solo respuestas de una palabra"
    ],
    correctAnswer: 0
  },
  {
    id: 16,
    courseId: "curso2",
    competence: "Consultas efectivas",
    difficulty: "media",
    weight: 1,
    question: "Cuál solicitud esta mejor formulada?",
    options: [
      "Hazme algo de marketing",
      "Crea 5 ideas de publicaciones para LinkedIn dirigidas a gerentes de RRHH",
      "Marketing ya",
      "Escribe Cuálquier cosa"
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    courseId: "curso2",
    competence: "Productividad",
    difficulty: "fácil",
    weight: 1,
    question: "Para usar IA como apoyo de productividad, lo más recomendable es:",
    options: [
      "Definir la tarea, revisar el resultado y ajustarlo al contexto",
      "Copiar todo sin leer",
      "Usarla solo para entretencion",
      "Compartir datos sensibles sin filtro"
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    courseId: "curso2",
    competence: "análisis de información",
    difficulty: "media",
    weight: 1,
    question: "Qué puede pedirle a un asistente para entender mejor un informe?",
    options: [
      "Identificar conclusiones, datos clave y preguntas pendientes",
      "Eliminar el informe original",
      "Inventar cifras sin base",
      "Responder sin leer el contenido"
    ],
    correctAnswer: 0
  },
  {
    id: 19,
    courseId: "curso2",
    competence: "Interaccion con asistentes",
    difficulty: "fácil",
    weight: 1,
    question: "Cuando la IA no entiende bien una solicitud, que accion es adecuada?",
    options: [
      "Reformular con mas contexto y ejemplos",
      "Asumir que la herramienta no sirve",
      "Pedirle que adivine",
      "Ignorar la respuesta"
    ],
    correctAnswer: 0
  },
  {
    id: 20,
    courseId: "curso2",
    competence: "Consultas efectivas",
    difficulty: "media",
    weight: 1,
    question: "Que elemento ayuda a obtener una respuesta util para un público especifico?",
    options: [
      "Indicar audiencia, tono y objetivo",
      "No mencionar a quien va dirigido",
      "Pedir una respuesta al azar",
      "Usar solo abreviaturas confusas"
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    courseId: "curso3",
    competence: "Estructura de prompts",
    difficulty: "fácil",
    weight: 1,
    question: "Qué es un prompt?",
    options: [
      "La instrucción o solicitud que se entrega a una IA",
      "Un archivo obligatorio del sistema operativo",
      "Una clave bancaria",
      "Un tipo de monitor"
    ],
    correctAnswer: 0
  },
  {
    id: 22,
    courseId: "curso3",
    competence: "Contexto",
    difficulty: "media",
    weight: 1,
    question: "Por Qué es importante incluir contexto en un prompt?",
    options: [
      "Porque ayuda a adaptar la respuesta a la situacion real",
      "Porque hace que la IA ignore la solicitud",
      "Porque obliga a responder siempre con imágenes",
      "Porque reduce la claridad"
    ],
    correctAnswer: 0
  },
  {
    id: 23,
    courseId: "curso3",
    competence: "instrucciones",
    difficulty: "fácil",
    weight: 1,
    question: "Cuál instrucción es mas clara para pedir un resumen?",
    options: [
      "Resume este texto en 5 puntos, con lenguaje simple",
      "Hazlo",
      "Algo corto",
      "No se, revisa"
    ],
    correctAnswer: 0
  },
  {
    id: 24,
    courseId: "curso3",
    competence: "Mejora de resultados",
    difficulty: "media",
    weight: 1,
    question: "Qué conviene hacer si el primer resultado no cumple lo esperado?",
    options: [
      "Pedir ajustes concretos y explicar que debe cambiar",
      "No revisar el contenido",
      "Usar la respuesta aunque no sirva",
      "Borrar todas las instrucciones"
    ],
    correctAnswer: 0
  },
  {
    id: 25,
    courseId: "curso3",
    competence: "Método CLARO",
    difficulty: "media",
    weight: 1,
    question: "En un método de prompts como CLARO, que idea representa mejor una buena práctica?",
    options: [
      "Ser claro sobre contexto, limites, audiencia, rol y objetivo",
      "Entregar instrucciones vagas",
      "Evitar mencionar el resultado esperado",
      "Pedir respuestas sin ningun criterio"
    ],
    correctAnswer: 0
  },
  {
    id: 26,
    courseId: "curso3",
    competence: "Estructura de prompts",
    difficulty: "fácil",
    weight: 1,
    question: "Cuál componente suele mejorar un prompt profesional?",
    options: [
      "Formato de salida esperado",
      "Errores intencionales",
      "Contradicciones",
      "Datos privados innecesarios"
    ],
    correctAnswer: 0
  },
  {
    id: 27,
    courseId: "curso3",
    competence: "Contexto",
    difficulty: "media",
    weight: 1,
    question: "Si necesitas una respuesta para clientes, que deberías indicar?",
    options: [
      "Que el tono sea profesional y orientado a clientes",
      "Que use información inventada",
      "Que ignore el público objetivo",
      "Que responda sin estructura"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    courseId: "curso3",
    competence: "instrucciones",
    difficulty: "fácil",
    weight: 1,
    question: "Qué opción es una instrucción util para controlar la extensión?",
    options: [
      "Responde en maximo 120 palabras",
      "Escribe sin limite y sin foco",
      "Hazlo como sea",
      "No importa el largo"
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    courseId: "curso3",
    competence: "Mejora de resultados",
    difficulty: "media",
    weight: 1,
    question: "Qué es una buena forma de mejorar una respuesta generada?",
    options: [
      "Solicitar una segunda versión con criterios específicos",
      "Aceptar errores evidentes",
      "Pedir que no use contexto",
      "Eliminar el objetivo de la tarea"
    ],
    correctAnswer: 0
  },
  {
    id: 30,
    courseId: "curso3",
    competence: "Método CLARO",
    difficulty: "media",
    weight: 1,
    question: "Qué prompt esta mejor orientado a un resultado accionable?",
    options: [
      "Actúa como asesor de capacitación y crea un plan de 3 pasos para enseñar IA a un equipo administrativo",
      "IA equipo ahora",
      "Dime cosas de tecnologia",
      "Haz un texto Cuálquiera"
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    courseId: "curso4",
    competence: "Casos de uso",
    difficulty: "fácil",
    weight: 1,
    question: "Cuál es un caso de uso laboral razonable para IA Generativa?",
    options: [
      "Preparar borradores de informes y correos",
      "Aprobar contratos sin revision",
      "Reemplazar toda la gestion de una empresa",
      "Evitar toda supervisión humana"
    ],
    correctAnswer: 0
  },
  {
    id: 32,
    courseId: "curso4",
    competence: "Eficiencia",
    difficulty: "media",
    weight: 1,
    question: "Cómo puede aportar IA Generativa a la eficiencia de un equipo?",
    options: [
      "Reduciendo tiempos en tareas repetitivas de redacción y análisis",
      "Eliminando todos los procesos internos",
      "Haciendo innecesaria la planificacion",
      "Garantizando decisiones perfectas"
    ],
    correctAnswer: 0
  },
  {
    id: 33,
    courseId: "curso4",
    competence: "análisis documental",
    difficulty: "media",
    weight: 1,
    question: "Al analizar documentos con IA, que practica es recomendable?",
    options: [
      "Pedir resumen, hallazgos y dudas, revisando contra el documento original",
      "Aceptar Cuálquier conclusion sin revisar",
      "Usar documentos confidenciales sin autorización",
      "Pedir que invente datos faltantes"
    ],
    correctAnswer: 0
  },
  {
    id: 34,
    courseId: "curso4",
    competence: "Apoyo a decisiones",
    difficulty: "media",
    weight: 1,
    question: "La IA puede apoyar decisiones de negocio principalmente al:",
    options: [
      "Ordenar información, comparar opciones y sugerir criterios",
      "Tomar decisiones legales finales por si sola",
      "Eliminar la responsabilidad de las personas",
      "Garantizar que no existan riesgos"
    ],
    correctAnswer: 0
  },
  {
    id: 35,
    courseId: "curso4",
    competence: "automatización basica",
    difficulty: "fácil",
    weight: 1,
    question: "Qué tarea se puede preparar para automatización basica con ayuda de IA?",
    options: [
      "Crear plantillas de respuestas para consultas frecuentes",
      "Firmar documentos oficiales por terceros",
      "Acceder a cuentas sin permiso",
      "Eliminar controles de seguridad"
    ],
    correctAnswer: 0
  },
  {
    id: 36,
    courseId: "curso4",
    competence: "Casos de uso",
    difficulty: "fácil",
    weight: 1,
    question: "Qué área puede beneficiarse de IA Generativa en una organización?",
    options: [
      "capacitación, ventas, soporte, administracion y comunicaciónes",
      "Solo mantencion electrica",
      "únicamente areas sin computador",
      "Ninguna area con información"
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    courseId: "curso4",
    competence: "Eficiencia",
    difficulty: "media",
    weight: 1,
    question: "Qué indicador podría mostrar una mejora por uso de IA?",
    options: [
      "Menor tiempo para generar un primer borrador revisable",
      "Cero necesidad de capacitación",
      "Eliminacion total de reuniones",
      "Respuestas siempre identicas"
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    courseId: "curso4",
    competence: "análisis documental",
    difficulty: "media",
    weight: 1,
    question: "Qué solicitud es adecuada para revisar un documento comercial?",
    options: [
      "Identifica puntos clave, posibles riesgos y acciones recomendadas",
      "Inventate una versión sin leer",
      "Cambia todos los datos confidenciales por azar",
      "Ignora Cuálquier condicion"
    ],
    correctAnswer: 0
  },
  {
    id: 39,
    courseId: "curso4",
    competence: "Apoyo a decisiones",
    difficulty: "fácil",
    weight: 1,
    question: "Qué rol debería tener la IA en una decisión importante?",
    options: [
      "Apoyar con información y alternativas, dejando la decisión final a personas responsables",
      "Decidir sin supervisión",
      "Ocultar información relevante",
      "Reemplazar políticas internas"
    ],
    correctAnswer: 0
  },
  {
    id: 40,
    courseId: "curso4",
    competence: "automatización basica",
    difficulty: "media",
    weight: 1,
    question: "Antes de automatizar una tarea con IA, Qué conviene revisar?",
    options: [
      "Objetivo, datos necesarios, riesgos y responsable de validación",
      "Solo que sea rápida",
      "Que no exista supervisión",
      "Que use toda la información disponible sin filtros"
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    courseId: "curso5",
    competence: "Privacidad",
    difficulty: "fácil",
    weight: 1,
    question: "Qué dato no deberías ingresar en una herramienta de IA publica sin autorización?",
    options: [
      "información personal o confidencial de clientes",
      "Una pregunta general sobre productividad",
      "Un ejemplo ficticio",
      "Una idea sin datos sensibles"
    ],
    correctAnswer: 0
  },
  {
    id: 42,
    courseId: "curso5",
    competence: "sesgos",
    difficulty: "media",
    weight: 1,
    question: "Qué son los sesgos en respuestas de IA?",
    options: [
      "Tendencias o errores Qué pueden favorecer ciertas perspectivas",
      "Una garantia de neutralidad total",
      "Una funcion para mejorar la velocidad",
      "Una clave de acceso"
    ],
    correctAnswer: 0
  },
  {
    id: 43,
    courseId: "curso5",
    competence: "Riesgos",
    difficulty: "fácil",
    weight: 1,
    question: "Cuál es un riesgo al usar IA Generativa sin revision?",
    options: [
      "Difundir información incorrecta o incompleta",
      "Mejorar siempre la precision",
      "Evitar todos los errores humanos",
      "Eliminar la necesidad de fuentes"
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    courseId: "curso5",
    competence: "Verificacion de información",
    difficulty: "media",
    weight: 1,
    question: "Que deberías hacer con una respuesta importante entregada por IA?",
    options: [
      "Verificarla con fuentes confiables antes de usarla",
      "Publicarla inmediatamente",
      "Asumir que siempre es oficial",
      "Eliminar las fuentes originales"
    ],
    correctAnswer: 0
  },
  {
    id: 45,
    courseId: "curso5",
    competence: "Buenas prácticas",
    difficulty: "fácil",
    weight: 1,
    question: "Cuál es una buena práctica al trabajar con IA?",
    options: [
      "Usarla como apoyo y mantener criterio profesional",
      "Copiar todo sin adaptar",
      "Compartir claves y datos sensibles",
      "Evitar revisar resultados"
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    courseId: "curso5",
    competence: "Privacidad",
    difficulty: "media",
    weight: 1,
    question: "Antes de subir un documento interno a una IA, que deberías confirmar?",
    options: [
      "Permisos, confidencialidad y políticas de la organización",
      "Que el archivo sea largo",
      "Que tenga imágenes",
      "Que no exista objetivo de uso"
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    courseId: "curso5",
    competence: "sesgos",
    difficulty: "media",
    weight: 1,
    question: "Cómo se puede reducir el impacto de sesgos en una respuesta?",
    options: [
      "Solicitando varias perspectivas y revisando con criterio humano",
      "Aceptando solo la primera respuesta",
      "Evitando toda pregunta",
      "Pidiendo que ignore el contexto"
    ],
    correctAnswer: 0
  },
  {
    id: 48,
    courseId: "curso5",
    competence: "Riesgos",
    difficulty: "fácil",
    weight: 1,
    question: "Que indica una actitud responsable frente a la IA?",
    options: [
      "Reconocer beneficios, limites y riesgos",
      "Creer que nunca falla",
      "Usarla para ocultar errores",
      "Compartir Cuálquier dato disponible"
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    courseId: "curso5",
    competence: "Verificacion de información",
    difficulty: "media",
    weight: 1,
    question: "Si la IA entrega una cifra o dato crítico, que accion corresponde?",
    options: [
      "Contrastar con una fuente oficial o confiable",
      "Usarlo sin comprobacion",
      "Cambiarlo para que suene mejor",
      "Eliminar el contexto"
    ],
    correctAnswer: 0
  },
  {
    id: 50,
    courseId: "curso5",
    competence: "Buenas prácticas",
    difficulty: "fácil",
    weight: 1,
    question: "Que recomendación resume mejor el uso seguro de IA?",
    options: [
      "Definir el objetivo, proteger datos, verificar resultados y mantener supervisión humana",
      "Entregar toda la información posible sin revisar",
      "Delegar decisiones sensibles completamente",
      "Evitar políticas internas"
    ],
    correctAnswer: 0
  }
];

  // ---- Registro del diagnóstico ----
  window.DIAGNOSTICS.push({
  id: "ia-generativa",
  name: "Inteligencia Artificial Generativa",
  title: "Diagnóstico de Competencias relevantes",
  description: "Selecciona este diagnóstico para conocer tu nivel actual en IA Generativa y recibir una recomendación personalizada del curso que mejor se ajusta a tus necesidades.",
  duration: "Duración estimada: 10 a 15 minutos",
  resultLabel: "curso",
  masteryThreshold: 70,
  useSequentialLevel: true,
  assimilationThreshold: 70,
  recommendByPriority: true,
  showOnlyMasteredStrengths: true,
  maxRecommendations: 2,
  maxStrengths: 2,
  courses: IA_COURSES,
  questions: IA_QUESTIONS
});
})();
