# Diagnóstico de Competencias en WEB

Aplicación web profesional para diagnosticar competencias en distintos temas o aplicaciones y recomendar una ruta de capacitación según los resultados.

## Cómo abrir la aplicación

Abre `index.html` directamente en el navegador. No requiere servidor, framework ni instalación de dependencias.

## Estructura

```text
diagnostico-web/
├── index_d.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js               ← motor de la app (no requiere cambios para agregar diagnósticos)
│   ├── diagnostics.js       ← inicializa el catálogo window.DIAGNOSTICS (no se edita)
│   └── diagnostics/
│       ├── _plantilla-nuevo-diagnostico.js.txt  ← copia este archivo para crear uno nuevo
│       ├── ia-generativa.js         ← diagnóstico autocontenido (cursos + preguntas + registro)
│       └── excel-productividad.js   ← diagnóstico autocontenido (cursos + preguntas + registro)
├── assets/
│   ├── logo.png
│   └── hero-person.png
└── README.md
```

Cada diagnóstico vive en **un solo archivo autocontenido** dentro de `js/diagnostics/`: ahí están sus cursos, sus preguntas y el registro que lo suma al catálogo. Ya no existen `js/courses.js` ni `js/questions.js` sueltos (esos datos, que antes eran genéricos y solo servían para IA Generativa, ahora están dentro de `js/diagnostics/ia-generativa.js`, siguiendo el mismo patrón que `excel-productividad.js`).

## Agregar un nuevo diagnóstico

La plataforma usa un catálogo global llamado `window.DIAGNOSTICS`. Cada archivo en `js/diagnostics/` se auto-registra ahí al cargarse.

1. Duplica `js/diagnostics/_plantilla-nuevo-diagnostico.js.txt`, cambia la extensión a `.js` y ponle un nombre descriptivo, por ejemplo `js/diagnostics/ciberseguridad.js`.
2. Dentro del archivo, reemplaza el prefijo `TEMA_` de las constantes (`TEMA_COURSES`, `TEMA_QUESTIONS`) por algo único de tu diagnóstico, por ejemplo `CIBER_COURSES` y `CIBER_QUESTIONS`. Esto evita choques de nombres entre diagnósticos.
3. Completa los cursos/módulos y las preguntas (ver detalle más abajo).
4. Completa el bloque final `window.DIAGNOSTICS.push({ ... })` con `id`, `name`, `title`, `description`, `duration`, `courses` y `questions`.
5. Agrega el script en `index_d.html`, en cualquier orden, siempre **antes** de `js/app.js`:

```html
<script src="js/diagnostics/ciberseguridad.js"></script>
<script src="js/app.js"></script>
```

No es necesario tocar `app.js` ni `diagnostics.js`: ambos son genéricos y funcionan automáticamente con cualquier diagnóstico que se agregue al catálogo.

Cada archivo está envuelto en `(function () { ... })();` (IIFE), por lo que sus variables internas (`TEMA_COURSES`, `TEMA_QUESTIONS`, etc.) quedan aisladas y no interfieren con las de otros diagnósticos, aunque reutilices los mismos nombres.

Cuando la persona seleccione un diagnóstico desde la lista inicial, la aplicación activará sus cursos, preguntas y estadísticas finales.

## Diagnósticos incluidos

- Inteligencia Artificial Generativa (`js/diagnostics/ia-generativa.js`): 5 cursos, 50 preguntas.
- Excel para la productividad laboral (`js/diagnostics/excel-productividad.js`), con 45 preguntas distribuidas en Excel Básico - Fundamentals, Excel Intermedio - Protech y Excel Avanzado - Ultimate.

## Modificar preguntas

Edita el bloque de preguntas dentro del archivo del diagnóstico correspondiente (por ejemplo, `TEMA_QUESTIONS` en `js/diagnostics/ciberseguridad.js`, o `IA_QUESTIONS` en `ia-generativa.js`, o `EXCEL_QUESTIONS` en `excel-productividad.js`). Cada pregunta tiene:

- `id`: número único.
- `courseId`: curso o módulo asociado.
- `competence`: competencia evaluada.
- `difficulty`: `fácil` o `media`.
- `weight`: peso de la pregunta. Por defecto es `1`.
- `question`: texto de la pregunta.
- `options`: cuatro alternativas.
- `correctAnswer`: índice de la alternativa correcta, comenzando en `0`.

Ejemplo: si la respuesta correcta es la segunda alternativa, usa `correctAnswer: 1`.

## Modificar cursos o módulos

Edita el bloque de cursos dentro del archivo del diagnóstico correspondiente (por ejemplo `TEMA_COURSES`, `IA_COURSES` o `EXCEL_COURSES`). Puedes cambiar:

- `name`: nombre completo del curso o módulo.
- `shortName`: nombre breve para etiquetas y resultados.
- `description`: descripción.
- `competencies`: competencias asociadas.
- `commercialRecommendation`: recomendación comercial mostrada al finalizar.

Mantén estable el `id` si ya existen preguntas asociadas a ese curso o módulo.

## Modificar pesos

En el archivo de preguntas, cambia el valor de `weight`. La evaluación suma el peso de cada respuesta correcta y calcula el porcentaje de asimilación por curso o módulo.

## Lógica de recomendación

La recomendación principal es el curso o módulo con menor porcentaje de asimilación. La segunda recomendación es el segundo menor porcentaje.

Niveles:

- 0% a 39%: Inicial
- 40% a 59%: Básico
- 60% a 79%: Intermedio
- 80% a 100%: Avanzado

## Modificar estilos

Edita `css/styles.css`. Los colores principales están al inicio del archivo en `:root`:

- `--navy`: azul oscuro.
- `--blue`: azul corporativo.
- `--sky`: celeste.
- `--green`: acento aqua/verde.
- `--light`: gris claro.

## Cambiar imagen principal

La imagen de la pantalla inicial está en `assets/hero-person.png`. Debe ser PNG con fondo transparente para integrarse correctamente en el panel visual.

## Preparación para login futuro

En `js/app.js` existe una sección comentada llamada `FUTURO LOGIN`, pensada para incorporar más adelante autenticación con usuario y contraseña antes de ingresar al diagnóstico.

## Descargar resultado

El botón "Descargar resultado" usa `window.print()`. Desde el cuadro de impresión del navegador se puede imprimir o guardar como PDF.
