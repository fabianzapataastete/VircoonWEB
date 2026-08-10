// Diagnóstico: Excel para la productividad laboral.
// Basado en los syllabus CertificateHoy Excel Fundamentals, Protech y Ultimate.
(function () {
  window.DIAGNOSTICS = window.DIAGNOSTICS || [];

  const EXCEL_COURSES = [
    {
      id: "excel-basico",
      priority: 1,
      name: "Excel Básico - Fundamentals",
      shortName: "Excel Básico",
      description: "Evalúa competencias esenciales de uso de la aplicación, celdas, formatos, fórmulas básicas, bases de datos, gráficos y preparación de resultados.",
      competencies: ["uso de la aplicación", "celdas y rangos", "formatos", "fórmulas y funciones básicas", "filtros", "gráficos", "configuración de impresión"],
      commercialRecommendation: "Recomendado para consolidar una base operativa de Excel antes de avanzar hacia funciones, validación y gestión avanzada de datos."
    },
    {
      id: "excel-intermedio",
      priority: 2,
      name: "Excel Intermedio - Protech",
      shortName: "Excel Intermedio",
      description: "Evalúa el trabajo con libros y hojas, áreas de trabajo, rangos nombrados, funciones de texto, lógicas, fecha, validación, auditoría y gestión de datos.",
      competencies: ["libros y hojas", "rangos nombrados", "funciones de texto", "funciones lógicas", "validación de datos", "auditoría de fórmulas", "búsqueda y ordenación avanzada"],
      commercialRecommendation: "Ideal para usuarios que ya manejan operaciones básicas y necesitan resolver tareas laborales con mayor control, precisión y automatización funcional."
    },
    {
      id: "excel-avanzado",
      priority: 3,
      name: "Excel Avanzado - Ultimate",
      shortName: "Excel Avanzado",
      description: "Evalúa cálculos avanzados, funciones anidadas, análisis de datos, tablas dinámicas, Power Query, datos externos, macros y VBA básico.",
      competencies: ["funciones anidadas", "tablas dinámicas", "Power Query", "datos externos", "consolidación avanzada", "macros", "VBA básico"],
      commercialRecommendation: "Recomendado para perfiles que requieren análisis avanzado, integración de datos y automatización de procesos en Excel."
    }
  ];
  
  const EXCEL_QUESTIONS = [
    {
      id: 1,
      courseId: "excel-basico",
      competence: "Uso de la aplicación",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: Debes orientar a una persona que abrió Excel por primera vez y necesita ubicar las herramientas principales para trabajar con una hoja de cálculo.",
      question: "¿Qué elemento debería reconocer para acceder rápidamente a comandos como copiar, formato, insertar o revisar datos?",
      options: ["La cinta de opciones", "La barra de tareas de Windows", "El Explorador de archivos", "El Administrador de dispositivos"],
      correctAnswer: 0
    },
    {
      id: 2,
      courseId: "excel-basico",
      competence: "Productividad",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: Una asistente repite muchas veces la acción de guardar y deshacer mientras actualiza una planilla de seguimiento.",
      question: "¿Qué herramienta de Excel puede personalizar para tener esos comandos siempre disponibles?",
      options: ["Barra de acceso rápido", "Cuadro de nombres", "Barra de desplazamiento", "Vista de salto de página"],
      correctAnswer: 0
    },
    {
      id: 3,
      courseId: "excel-basico",
      competence: "Celdas",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: En una tabla de ventas se ingresó mal el nombre de un cliente en la celda B4 y se debe corregir sin borrar toda la hoja.",
      question: "¿Qué acción corresponde realizar?",
      options: ["Editar el contenido de la celda B4", "Eliminar el libro completo", "Cambiar el zoom de la hoja", "Insertar un gráfico circular"],
      correctAnswer: 0
    },
    {
      id: 4,
      courseId: "excel-basico",
      competence: "Rangos",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: Necesitas aplicar el mismo formato a los datos ubicados desde A2 hasta D20.",
      question: "¿Cómo se identifica correctamente ese conjunto de celdas?",
      options: ["A2:D20", "A2-D20", "A2+D20", "A2/D20"],
      correctAnswer: 0
    },
    {
      id: 5,
      courseId: "excel-basico",
      competence: "Formato de celdas",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: Una columna contiene valores monetarios y quieres que se vean como importes con separador de miles y símbolo de moneda.",
      question: "¿Qué herramienta deberías usar?",
      options: ["Formato de número", "Ordenar de A a Z", "Insertar comentario", "Buscar objetivo"],
      correctAnswer: 0
    },
    {
      id: 6,
      courseId: "excel-basico",
      competence: "Formatos visuales",
      difficulty: "media",
      weight: 1,
      case: "Caso: En una planilla de cumplimiento quieres destacar automáticamente las celdas cuyo avance sea menor al 70%.",
      question: "¿Qué herramienta permite aplicar ese destaque según el valor de la celda?",
      options: ["Formato condicional", "Combinar y centrar", "Validación de datos", "Consolidar"],
      correctAnswer: 0
    },
    {
      id: 7,
      courseId: "excel-basico",
      competence: "Fórmulas básicas",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: En la celda E2 necesitas calcular el total de unidades vendidas multiplicando cantidad por precio unitario.",
      question: "¿Qué tipo de entrada corresponde usar en Excel?",
      options: ["Una fórmula con referencias de celda", "Un encabezado de página", "Un filtro avanzado", "Una macro VBA"],
      correctAnswer: 0
    },
    {
      id: 8,
      courseId: "excel-basico",
      competence: "Funciones básicas",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: Tienes valores mensuales en el rango B2:B13 y necesitas obtener el total anual.",
      question: "¿Qué función usarías?",
      options: ["SUMA(B2:B13)", "PROMEDIO(B2:B13)", "MÍNIMO(B2:B13)", "DERECHA(B2:B13)"],
      correctAnswer: 0
    },
    {
      id: 9,
      courseId: "excel-basico",
      competence: "Referencias",
      difficulty: "media",
      weight: 1,
      case: "Caso: Copiarás una fórmula hacia abajo, pero necesitas que siempre use la tasa ubicada en la celda H1.",
      question: "¿Qué referencia deberías usar para fijar esa celda?",
      options: ["$H$1", "H1", "H$1:H2", "H1#"],
      correctAnswer: 0
    },
    {
      id: 10,
      courseId: "excel-basico",
      competence: "Filtros",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: Una lista contiene cientos de registros y solo quieres ver las ventas de la zona Norte.",
      question: "¿Qué comando permite mostrar únicamente esos registros sin borrar los demás?",
      options: ["Filtro", "Guardar como", "Combinar celdas", "Inmovilizar paneles"],
      correctAnswer: 0
    },
    {
      id: 11,
      courseId: "excel-basico",
      competence: "Ordenación",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: El jefe solicita revisar una lista de productos desde el menor al mayor precio.",
      question: "¿Qué acción corresponde aplicar sobre el rango de datos?",
      options: ["Ordenar por precio de menor a mayor", "Insertar una imagen", "Crear un encabezado", "Usar formato de fecha"],
      correctAnswer: 0
    },
    {
      id: 12,
      courseId: "excel-basico",
      competence: "Subtotales",
      difficulty: "media",
      weight: 1,
      case: "Caso: Tienes ventas por vendedor y necesitas calcular totales parciales por cada vendedor.",
      question: "¿Qué herramienta básica puede ayudarte a resumir esos grupos?",
      options: ["Subtotales", "Ortografía", "Proteger libro", "Buscar y reemplazar"],
      correctAnswer: 0
    },
    {
      id: 13,
      courseId: "excel-basico",
      competence: "Gráficos",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: Debes comparar ventas mensuales de enero a diciembre en una presentación.",
      question: "¿Qué herramienta usarías para representar visualmente esos datos?",
      options: ["Gráfico de columnas o líneas", "Administrador de nombres", "Conexión ODBC", "Editor de VBA"],
      correctAnswer: 0
    },
    {
      id: 14,
      courseId: "excel-basico",
      competence: "Personalización de gráficos",
      difficulty: "media",
      weight: 1,
      case: "Caso: Un gráfico no se entiende porque no indica qué representa cada serie de datos.",
      question: "¿Qué elemento conviene ajustar?",
      options: ["Título, leyenda o etiquetas de datos", "Contraseña del archivo", "Nombre del libro", "Área de portapapeles"],
      correctAnswer: 0
    },
    {
      id: 15,
      courseId: "excel-basico",
      competence: "Preparación de resultados",
      difficulty: "fácil",
      weight: 1,
      case: "Caso: Antes de enviar una hoja impresa, quieres que solo se imprima la tabla A1:G40.",
      question: "¿Qué configuración debes definir?",
      options: ["Área de impresión", "Formato condicional", "Validación de lista", "Tabla dinámica"],
      correctAnswer: 0
    },
    {
      id: 16,
      courseId: "excel-intermedio",
      competence: "Libros y ventanas",
      difficulty: "media",
      weight: 1,
      case: "Caso: Trabajas con dos libros de Excel y necesitas compararlos en pantalla al mismo tiempo.",
      question: "¿Qué herramienta o comando facilita trabajar con varias ventanas?",
      options: ["Organizar ventanas o ver en paralelo", "Combinar correspondencia", "Formato de número", "Insertar SmartArt"],
      correctAnswer: 0
    },
    {
      id: 17,
      courseId: "excel-intermedio",
      competence: "Hojas de cálculo",
      difficulty: "media",
      weight: 1,
      case: "Caso: Una tabla tiene encabezados en la fila 1 y al desplazarte hacia abajo pierdes la referencia de cada columna.",
      question: "¿Qué comando conviene aplicar?",
      options: ["Inmovilizar paneles", "Validar datos", "Consolidar", "Grabar macro"],
      correctAnswer: 0
    },
    {
      id: 18,
      courseId: "excel-intermedio",
      competence: "Protección",
      difficulty: "media",
      weight: 1,
      case: "Caso: Debes compartir un libro para revisión, pero quieres evitar cambios accidentales en las fórmulas.",
      question: "¿Qué opción se relaciona con este control?",
      options: ["Proteger hoja o libro", "Insertar gráfico circular", "Ajustar margen", "Cambiar tema de Office"],
      correctAnswer: 0
    },
    {
      id: 19,
      courseId: "excel-intermedio",
      competence: "Rangos nombrados",
      difficulty: "media",
      weight: 1,
      case: "Caso: Un informe usa muchas fórmulas con el rango B2:B200 y quieres que sea más fácil de leer y mantener.",
      question: "¿Qué herramienta permite asignar un nombre como Ventas al rango?",
      options: ["Administrador de nombres", "Formato como tabla", "Buscar objetivo", "Revisión ortográfica"],
      correctAnswer: 0
    },
    {
      id: 20,
      courseId: "excel-intermedio",
      competence: "Rangos en fórmulas",
      difficulty: "media",
      weight: 1,
      case: "Caso: Ya creaste un rango nombrado llamado Costos y quieres usarlo dentro de una fórmula.",
      question: "¿Qué ventaja entrega usar ese nombre?",
      options: ["Hace más clara la referencia del rango", "Convierte el archivo en PDF", "Elimina todas las fórmulas", "Impide ordenar datos"],
      correctAnswer: 0
    },
    {
      id: 21,
      courseId: "excel-intermedio",
      competence: "Funciones de texto",
      difficulty: "media",
      weight: 1,
      case: "Caso: En la celda A2 hay un código 'CLI-2026-015' y necesitas extraer los tres primeros caracteres.",
      question: "¿Qué función usarías?",
      options: ["IZQUIERDA", "SUMA", "HOY", "BUSCARV"],
      correctAnswer: 0
    },
    {
      id: 22,
      courseId: "excel-intermedio",
      competence: "Funciones de texto",
      difficulty: "media",
      weight: 1,
      case: "Caso: Tienes nombre en A2 y apellido en B2, y necesitas unirlos en C2 para un listado de asistencia.",
      question: "¿Qué función o recurso se ajusta mejor?",
      options: ["CONCATENAR o CONCAT", "PROMEDIO", "DÍA", "BDCONTAR"],
      correctAnswer: 0
    },
    {
      id: 23,
      courseId: "excel-intermedio",
      competence: "Funciones lógicas",
      difficulty: "media",
      weight: 1,
      case: "Caso: Si una venta en D2 supera 100000, debes mostrar 'Meta lograda'; si no, 'Pendiente'.",
      question: "¿Qué función permite evaluar esa condición?",
      options: ["SI", "EXTRAER", "FECHA", "ÍNDICE"],
      correctAnswer: 0
    },
    {
      id: 24,
      courseId: "excel-intermedio",
      competence: "Control de errores",
      difficulty: "media",
      weight: 1,
      case: "Caso: Una fórmula de búsqueda puede devolver error cuando no encuentra el código solicitado.",
      question: "¿Qué función ayuda a mostrar un mensaje controlado en vez del error?",
      options: ["SI.ERROR", "MÁXIMO", "DERECHA", "SUBTOTALES"],
      correctAnswer: 0
    },
    {
      id: 25,
      courseId: "excel-intermedio",
      competence: "Funciones de fecha",
      difficulty: "media",
      weight: 1,
      case: "Caso: En un reporte necesitas mostrar automáticamente la fecha actual cada vez que se abre el archivo.",
      question: "¿Qué función corresponde usar?",
      options: ["HOY", "O", "COINCIDIR", "CONSOLIDAR"],
      correctAnswer: 0
    },
    {
      id: 26,
      courseId: "excel-intermedio",
      competence: "Validación de datos",
      difficulty: "media",
      weight: 1,
      case: "Caso: En una columna de estado solo se deberían permitir las opciones Pendiente, En proceso y Cerrado.",
      question: "¿Qué herramienta permite crear esa lista desplegable?",
      options: ["Validación de datos", "Formato de número", "Auditoría de fórmulas", "Tabla dinámica"],
      correctAnswer: 0
    },
    {
      id: 27,
      courseId: "excel-intermedio",
      competence: "Validación de datos",
      difficulty: "media",
      weight: 1,
      case: "Caso: En una celda de descuento quieres impedir que se ingresen valores mayores al 30%.",
      question: "¿Qué configuración se debe usar?",
      options: ["Criterios de validación con límite de valor", "Ordenar de Z a A", "Combinar celdas", "Insertar encabezado"],
      correctAnswer: 0
    },
    {
      id: 28,
      courseId: "excel-intermedio",
      competence: "Auditoría de fórmulas",
      difficulty: "media",
      weight: 1,
      case: "Caso: Una celda muestra un resultado inesperado y necesitas revisar qué celdas alimentan la fórmula.",
      question: "¿Qué herramienta de auditoría corresponde usar?",
      options: ["Rastrear precedentes", "Cambiar orientación", "Insertar segmentación", "Crear macro"],
      correctAnswer: 0
    },
    {
      id: 29,
      courseId: "excel-intermedio",
      competence: "Búsqueda de datos",
      difficulty: "media",
      weight: 1,
      case: "Caso: Tienes una tabla con códigos de producto y necesitas devolver el precio asociado al código ingresado.",
      question: "¿Qué función es una alternativa válida para esta búsqueda?",
      options: ["BUSCARV", "PROMEDIO", "HOY", "LARGO"],
      correctAnswer: 0
    },
    {
      id: 30,
      courseId: "excel-intermedio",
      competence: "Gestión de datos",
      difficulty: "media",
      weight: 1,
      case: "Caso: Necesitas ordenar una base primero por región y luego por vendedor para revisar el desempeño.",
      question: "¿Qué opción corresponde?",
      options: ["Ordenación con criterios múltiples", "Formato condicional básico", "Vista previa de salto de página", "Insertar comentario"],
      correctAnswer: 0
    },
    {
      id: 31,
      courseId: "excel-avanzado",
      competence: "Funciones anidadas",
      difficulty: "media",
      weight: 1,
      case: "Caso: Debes clasificar clientes usando una condición y, si se cumple, buscar su categoría en otra tabla.",
      question: "¿Qué enfoque corresponde a un cálculo avanzado?",
      options: ["Anidar SI con BUSCARV o ÍNDICE/COINCIDIR", "Aplicar solo negrita al encabezado", "Cambiar el color de la pestaña", "Insertar una imagen"],
      correctAnswer: 0
    },
    {
      id: 32,
      courseId: "excel-avanzado",
      competence: "Múltiples hojas",
      difficulty: "media",
      weight: 1,
      case: "Caso: Un resumen debe consolidar datos que se encuentran en hojas mensuales llamadas Enero, Febrero y Marzo.",
      question: "¿Qué práctica permite relacionar datos entre planillas?",
      options: ["Vincular celdas o rangos de distintas hojas", "Cerrar todas las hojas", "Usar solo valores escritos manualmente", "Desactivar fórmulas"],
      correctAnswer: 0
    },
    {
      id: 33,
      courseId: "excel-avanzado",
      competence: "Funciones financieras",
      difficulty: "media",
      weight: 1,
      case: "Caso: Finanzas necesita estimar el pago periódico de un crédito según tasa, plazo y monto.",
      question: "¿Qué función financiera se asocia a este cálculo?",
      options: ["PAGO", "DERECHA", "DÍA", "CONCATENAR"],
      correctAnswer: 0
    },
    {
      id: 34,
      courseId: "excel-avanzado",
      competence: "Búsqueda avanzada",
      difficulty: "media",
      weight: 1,
      case: "Caso: Una búsqueda debe encontrar la posición de un código y devolver un valor desde una matriz flexible.",
      question: "¿Qué combinación de funciones es adecuada?",
      options: ["ÍNDICE y COINCIDIR", "SUMA y PROMEDIO", "HOY y FECHA", "IZQUIERDA y DERECHA únicamente"],
      correctAnswer: 0
    },
    {
      id: 35,
      courseId: "excel-avanzado",
      competence: "Tablas dinámicas",
      difficulty: "media",
      weight: 1,
      case: "Caso: Tienes miles de filas de ventas y necesitas resumir rápidamente importes por región y vendedor.",
      question: "¿Qué herramienta avanzada facilita ese análisis?",
      options: ["Tabla dinámica", "Combinar celdas", "Encabezado y pie de página", "Barra de acceso rápido"],
      correctAnswer: 0
    },
    {
      id: 36,
      courseId: "excel-avanzado",
      competence: "Análisis de sensibilidad",
      difficulty: "media",
      weight: 1,
      case: "Caso: Quieres saber qué valor de ventas se necesita para alcanzar una utilidad objetivo.",
      question: "¿Qué herramienta permite calcular el valor necesario para lograr un resultado?",
      options: ["Buscar objetivo", "Ortografía", "Formato como tabla", "Validación de lista"],
      correctAnswer: 0
    },
    {
      id: 37,
      courseId: "excel-avanzado",
      competence: "Power Query",
      difficulty: "media",
      weight: 1,
      case: "Caso: Recibes archivos mensuales con estructura similar y necesitas combinarlos, limpiar columnas y cargar el resultado en Excel.",
      question: "¿Qué herramienta se ajusta mejor?",
      options: ["Power Query", "Formato condicional", "Reemplazar fuente", "Pegado especial de valores"],
      correctAnswer: 0
    },
    {
      id: 38,
      courseId: "excel-avanzado",
      competence: "Transformación de datos",
      difficulty: "media",
      weight: 1,
      case: "Caso: Un archivo externo trae fechas como texto, columnas innecesarias y nombres con espacios al inicio.",
      question: "¿Qué proceso corresponde aplicar antes del análisis?",
      options: ["Limpiar y transformar datos en Power Query", "Ocultar la cinta de opciones", "Cambiar el color del gráfico", "Insertar una forma"],
      correctAnswer: 0
    },
    {
      id: 39,
      courseId: "excel-avanzado",
      competence: "Funciones de base de datos",
      difficulty: "media",
      weight: 1,
      case: "Caso: Necesitas contar registros de una base que cumplen criterios específicos definidos en un rango de criterios.",
      question: "¿Qué función se relaciona con ese escenario?",
      options: ["BDCONTAR", "ALEATORIO", "EXTRAER", "DÍA"],
      correctAnswer: 0
    },
    {
      id: 40,
      courseId: "excel-avanzado",
      competence: "Consolidación avanzada",
      difficulty: "media",
      weight: 1,
      case: "Caso: Debes sumar ventas por región y categoría usando más de una condición.",
      question: "¿Qué función es apropiada?",
      options: ["SUMAR.SI.CONJUNTO", "MÍNIMO", "CONCAT", "HOY"],
      correctAnswer: 0
    },
    {
      id: 41,
      courseId: "excel-avanzado",
      competence: "Datos externos",
      difficulty: "media",
      weight: 1,
      case: "Caso: Un reporte debe alimentarse periódicamente desde un archivo de texto o una base de datos externa.",
      question: "¿Qué capacidad de Excel permite establecer esa integración?",
      options: ["Conexiones de datos", "Combinar y centrar", "Insertar nota", "Cambiar zoom"],
      correctAnswer: 0
    },
    {
      id: 42,
      courseId: "excel-avanzado",
      competence: "Integración de datos",
      difficulty: "media",
      weight: 1,
      case: "Caso: El área comercial tiene datos en Excel y operaciones tiene datos en otro archivo; necesitas unirlos para un análisis completo.",
      question: "¿Qué enfoque es más adecuado?",
      options: ["Combinar consultas o consolidar fuentes", "Escribir todo nuevamente a mano", "Aplicar solo color a las celdas", "Eliminar encabezados"],
      correctAnswer: 0
    },
    {
      id: 43,
      courseId: "excel-avanzado",
      competence: "Macros",
      difficulty: "media",
      weight: 1,
      case: "Caso: Todos los viernes realizas la misma secuencia de limpiar datos, aplicar formato y generar un reporte.",
      question: "¿Qué herramienta permite grabar esa secuencia para repetirla?",
      options: ["Macro", "Validación de datos", "Formato de moneda", "Filtro simple"],
      correctAnswer: 0
    },
    {
      id: 44,
      courseId: "excel-avanzado",
      competence: "VBA básico",
      difficulty: "media",
      weight: 1,
      case: "Caso: Una macro grabada necesita ajustes para personalizar pasos y controlar mejor el proceso.",
      question: "¿Dónde se puede editar esa lógica?",
      options: ["Editor de VBA", "Vista previa de impresión", "Administrador de escenarios únicamente", "Cuadro de nombres"],
      correctAnswer: 0
    },
    {
      id: 45,
      courseId: "excel-avanzado",
      competence: "Automatización",
      difficulty: "media",
      weight: 1,
      case: "Caso: Quieres que un botón ejecute automáticamente un proceso de actualización y formato del reporte.",
      question: "¿Qué recurso permite asociar una acción automatizada a ese botón?",
      options: ["Asignar una macro", "Aplicar bordes", "Ordenar por color", "Crear una lista desplegable"],
      correctAnswer: 0
    }
  ];
  
  window.DIAGNOSTICS.push({
    id: "excel-productividad",
    name: "Excel para la productividad laboral",
    title: "Diagnóstico de Competencias relevantes",
    description: "Evalúa competencias de Excel Básico, Intermedio y Avanzado para identificar el curso más adecuado según tu nivel de dominio laboral.",
    duration: "Duración estimada: 10 a 15 minutos",
    resultLabel: "curso",
    assimilationThreshold: 70,
    masteryThreshold: 70,
    useSequentialLevel: true,
    recommendByPriority: true,
    showOnlyMasteredStrengths: true,
    recommendOnlyGaps: true,
    maxRecommendations: 2,
    maxStrengths: 2,
    courses: EXCEL_COURSES,
    questions: EXCEL_QUESTIONS
  });
})();
