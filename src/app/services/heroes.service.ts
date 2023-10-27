import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  private heroeService: heroe[] = [
    {
      id:0,
      nombre: 'GitFlow',
      bio: 'GitFlow es un modelo de ramificación en Git que se utiliza comúnmente en el desarrollo de software. Promueve la organización y eficiencia al establecer un conjunto de reglas y buenas prácticas para la gestión de ramas en un repositorio. Esto ayuda a los desarrolladores y a la organización de las siguientes maneras:',
      beneficios: ["Mejora la organización del trabajo en equipo al definir roles y responsabilidades claras para los desarrolladores.",
        "Facilita la colaboración al separar las tareas y características en ramas específicas, lo que permite un desarrollo más paralelo.",
        "Incrementa la calidad del software al fomentar la revisión de código, pruebas y control de calidad en cada etapa del proceso.",
        "Hace que el despliegue y lanzamiento de nuevas características sean más predecibles y controlados.",
        "Contribuye a la estabilidad del proyecto al mantener una rama principal (master) estable y lista para su lanzamiento en cualquier momento.",
        "Ayuda a documentar el historial del proyecto, lo que facilita la identificación de cambios y resolución de problemas."],
      img: 'assets/img/gitflow.png',
      explicaciones: [
        {
          "titulo": "Inicialización de GitFlow",
          "explicacion": "Para iniciar un nuevo proyecto con GitFlow, ejecuta el siguiente comando:",
          "code": "git flow init"
        },
        {
          "titulo": "Crear una Nueva Característica",
          "explicacion": "Para empezar a trabajar en una nueva característica, ejecuta:",
          "code": "git flow feature start nombre_de_la_caracteristica"
        },
        {
          "titulo": "Trabajar en la Característica",
          "explicacion": "Realiza cambios en tu código y confirma tus modificaciones como lo harías normalmente con Git."
        },
        {
          "titulo": "Finalizar una Característica",
          "explicacion": "Cuando hayas completado la característica, finalízala con:"
        },
        {
          "titulo": "Crear un Nuevo Lanzamiento",
          "explicacion": "Si estás listo para lanzar una nueva versión, utiliza el siguiente comando:",
          "code": "git flow release start 1.0.0"
        },
        {
          "titulo": "Realizar Correcciones de Lanzamiento",
          "explicacion": "Si es necesario realizar correcciones en el lanzamiento, crea una rama de corrección:"
        },
        {
          "titulo": "Finalizar un Lanzamiento",
          "explicacion": "Cuando estés listo para finalizar un lanzamiento, ejecuta:"
        },
        {
          "titulo": "Publicar Cambios",
          "explicacion": "Asegúrate de publicar tus cambios en el repositorio remoto con:"
        }],
      aparicion: "General",
      recursos: [{
        titulo: 'Consejos basicos',
        recurso: 'https://danielkummer.github.io/git-flow-cheatsheet/index.es_ES.html'
      }],
    },
    {
      id:1,
      nombre: 'Ecmascript',
      bio: 'ECMAScript es un estándar de lenguaje de programación que define la especificación de JavaScript. Su objetivo principal es estandarizar las características y funcionalidades del lenguaje JavaScript, lo que permite que los desarrolladores escriban código JavaScript consistente y portable en diferentes entornos y navegadores. ECMAScript se actualiza regularmente para incorporar nuevas funcionalidades y mejoras en el lenguaje.',
      beneficios: [
        "Compatibilidad y Portabilidad: Garantiza una experiencia de usuario consistente en diferentes navegadores y plataformas.",
        "Mayor Innovación: Permite mantenerse al día con las últimas tendencias tecnológicas y brindar soluciones avanzadas.",
        "Mantenibilidad: El código ECMAScript es más limpio y fácil de mantener, lo que reduce los costos a largo plazo.",
        "Reutilización de Código: Facilita la reutilización de bibliotecas y componentes de terceros, acelerando el desarrollo de software.",
        "Mejor Productividad: Ofrece características de lenguaje que simplifican tareas comunes y reducen la necesidad de escribir código adicional.",
        "Mayor Capacidad de Expresión: Permite a los desarrolladores expresar sus ideas de manera más efectiva y concisa.",
        "Acceso a las Últimas Tecnologías: Introduce nuevas tecnologías y técnicas de programación, manteniendo a los desarrolladores actualizados.",
        "Depuración Más Sencilla: El código ECMAScript más limpio y las características de lenguaje mejoradas facilitan la depuración y reducen los errores.",
        "Facilidad de Colaboración: Simplifica la colaboración en proyectos, ya que los desarrolladores pueden comprender y contribuir al código más fácilmente."
      ]
      ,
      img: 'assets/img/ecmascript.png',
      explicaciones: [
        {
          "titulo": "Declaración de Variables con let y const",
          "explicacion": " ECMAScript introduce let y const para declarar variables. La palabra clave let permite variables reasignables, mientras que const crea variables de solo lectura. Esto mejora la claridad del alcance de las variables y evita problemas de hoisting.",
          "code": "\nlet nombre = 'John'; // Variable reasignable\nconst edad = 30;    // Variable de solo lectura",
          "lenguaje": 'javascript'
        },
        {
          "titulo": "Funciones de Flecha",
          "explicacion": " Las funciones de flecha en ECMAScript simplifican la sintaxis de las funciones. Son ideales para funciones simples con una sola expresión de retorno.",
          "code": "const sumar = (a, b) => a + b;",
          "lenguaje": 'javascript'
        },
        {
          "titulo": "Template Strings",
          "explicacion": "Los Template Strings en ECMAScript permiten una interpolación de cadenas más legible y fácil de usar. Puedes insertar expresiones directamente dentro de las cadenas utilizando ${}.",
          "code": '\nconst nombre = "John";\nconst mensaje = `Hola, ${nombre}!`;',
          "lenguaje": 'javascript'
        },
        {
          "titulo": "Desestructuración de Objetos",
          "explicacion": "La desestructuración de objetos en ECMAScript simplifica la extracción de propiedades de objetos. Esto es especialmente útil cuando se trabaja con objetos complejos.",
          "code": '\nconst persona = { nombre: "John", edad: 30 };\n const { nombre, edad } = persona;',
          "lenguaje": 'javascript'
        },
        {
          "titulo": "Spread Operator",
          "explicacion": "El operador Spread (...) en ECMAScript simplifica la concatenación de arrays y objetos. Facilita la creación de nuevas estructuras a partir de otras.",
          "code": '\nconst numeros = [1, 2, 3];\nconst otrosNumeros = [4, 5, 6];\nconst todosLosNumeros = [...numeros, ...otrosNumeros];',
          "lenguaje": 'javascript'
        },
        {
          "titulo": "Promesas",
          "explicacion": "ECMAScript introduce las promesas para trabajar con operaciones asincrónicas de una manera más ordenada y legible. Las promesas permiten manejar casos de éxito y error de manera más estructurada.",
          "code": '\nconst fetchData = () => {\nreturn new Promise((resolve, reject) => {\n// Lógica asincrónica\nif (exito) {\nresolve(datos);\n} else {\nreject(error);\n}\n});\n};',
          "lenguaje": 'javascript'
        },
        {
          "titulo": "Clases",
          "explicacion": "ECMAScript agrega una sintaxis más orientada a objetos para definir clases. Esto facilita la creación de objetos con propiedades y métodos.",
          "code": '\nclass Persona {\nconstructor(nombre, edad) {\nthis.nombre = nombre;\nthis.edad = edad;\n}\nsaludar() {\nreturn `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;\n}\n}',
          "lenguaje": 'javascript'
        },
      ],
      aparicion: "General",
      recursos: [{
        titulo: 'Documentacion objetos, expresiones y declaraciones',
        recurso: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      }],
    },
    {
      id:2,
      "nombre": "Estructura de carpetas en Angular",
      "bio": "La estructura de carpetas en un proyecto de Angular es una organización específica de directorios y archivos que ayuda a mantener el código fuente de una aplicación ordenado y fácil de gestionar. Esta estructura es esencial para garantizar la mantenibilidad y escalabilidad del proyecto.",
      "beneficios": [
        "Organización clara y ordenada del código fuente.",
        "Facilidad de mantenimiento y gestión de recursos.",
        "Modularidad que permite reutilizar componentes y servicios.",
        "Separación de recursos estáticos en la carpeta 'assets'.",
        "Configuración por entorno para variables específicas.",
        "Facilita la colaboración y referenciación del código.",
      ],
      "img": "assets/img/Estructura.png",
      "explicaciones": [
        {
          titulo: "src/",
          explicacion: "Directorio principal que contiene todo el código fuente de la aplicación Angular.",
          code: `src/
        ├── app/
          ├── core/
          ├── modules/
          ├── shared/
          ├── environments/
          ├── styles/
          ├── index.html
          ├── main.ts
        angular.json
        package.json
        tsconfig.json
        tslint.json
        README.md`,
        },
        {
          titulo: "core/",
          explicacion: "En el directorio 'core' se ubican elementos clave para el funcionamiento de la aplicación, como guards, interceptors, pipes y servicios transversales.",
          code: `core/
        ├── guards/
        ├── interceptors/
        ├── pipes/
        ├── services/`,
        },
        {
          titulo: "modules/",
          explicacion: "El directorio 'modules' contiene carpetas para cada módulo específico. En cada módulo, encontrarás componentes únicos, páginas padre y servicios relacionados.",
          code: `modules/
        ├── Componentes/
          ├── componente-1/
            ├── componente-1.component.ts
            ├── componente-1.component.html
            ├── componente-1.component.css
        ├── pages/
          ├── init/
            ├── componente-1/
              ├── componente-1.component.ts
              ├── componente-1.component.html
              ├── componente-1.component.css
        ├── services/`,
          imagenes: ['assets/img/EstructuraModulo.png']
        },
        {
          titulo: "shared/",
          explicacion: "Este directorio contiene componentes transversales compartidos entre diferentes módulos. Pueden ser reutilizados en toda la aplicación.",
          code: `shared/
        ├── component-1/
          ├── component-1.component.ts
          ├── component-1.component.html
          ├── component-1.component.css`,
        },
        {
          titulo: "environments/",
          explicacion: "En 'environments' se pueden configurar variables de entorno para diferentes entornos de desarrollo, como producción o desarrollo.",
          code: `environments/
        ├── environment.prod.ts
        ├── environment.ts`,
        },
        {
          titulo: "styles/",
          explicacion: "El directorio 'styles' contiene hojas de estilo globales, como archivos CSS, que se aplican a toda la aplicación.",
          code: `styles/
        ├── styles.css`,
        },
        {
          titulo: "index.html",
          explicacion: "El archivo 'index.html' es la página principal de la aplicación Angular y es donde se carga la aplicación en el navegador.",
          code: `index.html`,
        },
        {
          titulo: "main.ts",
          explicacion: "El archivo 'main.ts' es el punto de entrada principal de la aplicación Angular, donde se inicia la aplicación.",
          code: `main.ts`,
        },
        {
          titulo: "angular.json",
          explicacion: "El archivo 'angular.json' es el archivo de configuración de Angular que define la estructura del proyecto y las configuraciones específicas.",
          code: `angular.json`,
        },
        {
          titulo: "package.json",
          explicacion: "El archivo 'package.json' contiene información sobre las dependencias y scripts de la aplicación Angular.",
          code: `package.json`,
        },
        {
          titulo: "tsconfig.json",
          explicacion: "El archivo 'tsconfig.json' es la configuración de TypeScript que se utiliza en el proyecto Angular.",
          code: `tsconfig.json`,
        },
        {
          titulo: "tslint.json",
          explicacion: "El archivo 'tslint.json' contiene reglas y configuraciones para el linter de TypeScript, que ayuda a mantener un código limpio y consistente.",
          code: `tslint.json`,
        },
        {
          titulo: "README.md",
          explicacion: "El archivo 'README.md' es una descripción del proyecto y se utiliza para proporcionar información y documentación sobre la aplicación.",
          code: `README.md`,
        },
      ],
      recursos: [
        {
          titulo: 'Microfrontend explicado',
          recurso: 'https://www.angulararchitects.io/en/blog/the-microfrontend-revolution-part-2-module-federation-with-angular/'
        }
      ],
      "aparicion": "General front web",
    },
    {
      id:3,
      "nombre": "Scrum",
      "bio": 'Scrum es un marco de trabajo ágil para la gestión de proyectos que se centra en la colaboración, la transparencia y la adaptación continua. Se basa en principios de agilidad y se utiliza comúnmente en el desarrollo de software, aunque puede aplicarse a una variedad de proyectos. Scrum se caracteriza por sus iteraciones llamadas "Sprints", que generalmente duran de 2 a 4 semanas, durante las cuales se desarrolla y entrega un conjunto de características o funcionalidades del producto.',
      "beneficios": [
        'Mejor satisfacción del cliente',
        'Mayor eficiencia en el desarrollo y entrega de productos',
        'Reducción de riesgos',
        'Mayor adaptación a cambios en el mercado o requisitos',
        'Fomenta la innovación y la creatividad',
        'Mayor calidad en los productos entregados',
        'Mayor productividad y eficiencia en el trabajo',
        'Mayor participación en la toma de decisiones para los equipos de desarrollo',
        'Mayor oportunidad de aprendizaje y desarrollo profesional para los programadores',
        'Mayor colaboración y trabajo en equipo',
        'Mayor autonomía y responsabilidad en la toma de decisiones técnicas',
        'Reducción de la carga de trabajo no planificada',
        'Fomenta un ambiente de trabajo más relajado y motivador',
      ],
      "img": "assets/img/scrum.png",
      "explicaciones": [
        {
          "titulo": "Equipo Scrum",
          "explicacion": "Formar un equipo multifuncional y autoorganizado compuesto por miembros con las habilidades necesarias para llevar a cabo el proyecto.",
          imagenes: ['assets/img/equipoScrum.png']
        },
        {
          "titulo": "Product Owner",
          "explicacion": "Designar a un Product Owner que actúe como representante del cliente o usuario final y sea responsable de definir y priorizar los requisitos del proyecto."
        },
        {
          "titulo": "Backlog del Producto",
          "explicacion": "Crear un backlog del producto que contenga una lista priorizada de todas las características, funcionalidades y requisitos del proyecto.",
          imagenes: ['assets/img/backlog.jpg']
        },
        {
          "titulo": "Sprint Planning",
          "explicacion": "Realizar reuniones de planificación de sprint para seleccionar elementos del backlog y establecer los objetivos del sprint."
        },
        {
          "titulo": "Sprints",
          "explicacion": "Organizar el trabajo en sprints de duración fija (por lo general de 2 a 4 semanas) donde el equipo se enfoca en completar un conjunto de elementos del backlog."
        },
        {
          "titulo": "Daily Standups",
          "explicacion": "Realizar reuniones diarias de seguimiento (daily standups) para mantener a todo el equipo informado sobre el progreso y los obstáculos."
        },
        {
          "titulo": "Revisiones del Sprint",
          "explicacion": "Al final de cada sprint, llevar a cabo una revisión del sprint donde el equipo muestra el trabajo completado y recibe retroalimentación del Product Owner y los stakeholders."
        },
        {
          "titulo": "Retrospectivas del Sprint",
          "explicacion": "Después de cada sprint, realizar una retrospectiva del sprint para identificar mejoras en el proceso y el trabajo del equipo."
        },
        {
          "titulo": "Transparencia y Colaboración",
          "explicacion": "Fomentar la transparencia, la colaboración y la comunicación constante dentro del equipo y con los stakeholders."
        },
        {
          "titulo": "Entrega Incremental",
          "explicacion": "Entregar un incremento funcional del producto al final de cada sprint, lo que permite obtener retroalimentación temprana y ajustar la dirección del proyecto si es necesario."
        },
        {
          "titulo": "Adaptación Continua",
          "explicacion": "Estar dispuesto a adaptarse a medida que surgen cambios en los requisitos o en el mercado. La flexibilidad es un pilar fundamental de Scrum."
        },
        {
          "titulo": "Medición del Progreso",
          "explicacion": "Utilizar métricas y KPIs para evaluar el progreso del proyecto y tomar decisiones informadas."
        },
        {
          "titulo": "Herramientas de Gestión",
          "explicacion": "Emplear herramientas de gestión ágil, como tableros Kanban o software de seguimiento de proyectos, para facilitar la planificación y el seguimiento del trabajo."
        },
        {
          "titulo": "Formación y Capacitación",
          "explicacion": "Proporcionar formación y capacitación en Scrum a los miembros del equipo y a los stakeholders para garantizar una comprensión común del marco de trabajo."
        },
        {
          "titulo": "Compromiso de la Alta Dirección",
          "explicacion": "Obtener el compromiso y el apoyo de la alta dirección de la empresa para asegurar que Scrum se implemente de manera efectiva."
        }
      ],
      "aparicion": "General",
      "recursos": [
        {
          "titulo": "Guia completa Scrum",
          "recurso": "https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-Spanish-Latin-South-American.pdf"
        }
      ]
    },
    {
      id:4,
      "nombre": "Responsive con primeng",
      "bio": "El diseño responsive es fundamental en el desarrollo web, ya que permite que los sitios se adapten y funcionen de manera óptima en una variedad de dispositivos, como teléfonos móviles, tabletas y computadoras de escritorio. Esto asegura una experiencia de usuario consistente, mejora la retención de visitantes, optimiza el SEO, ahorra tiempo y recursos al evitar la necesidad de crear múltiples versiones del sitio, facilita el acceso a la información para personas con discapacidades y se alinea con las tendencias actuales de uso de dispositivos móviles, lo que lo convierte en un enfoque esencial en el desarrollo web.",
      "beneficios": [
        "Mayor Alcance",
        "Experiencia de Usuario Mejorada",
        "Mejora en SEO",
        "Facilita el Mantenimiento",
        "Ahorro de Tiempo y Costos",
        "Accesibilidad",
        "Compatibilidad con Dispositivos Futuros",
        "Tendencias Actuales",
        "Mejor Conversión",
        "Mantenimiento Simplificado",
        "Carga Rápida",
        "Mejor Posicionamiento de Marca",
        "Cumplimiento de Estándares"
      ]
      ,
      "img": "assets/img/primeflex.png",
      "explicaciones": [
        {
          "titulo": "Clases para Pantallas Responsivas",
          "explicacion": "PrimeNG y PrimeFlex proporcionan clases que te permiten crear páginas web responsive, es decir, páginas que se adaptan a diferentes tamaños de pantalla. Esto es crucial para garantizar una buena experiencia del usuario en dispositivos de diferentes dimensiones.",
          "code": "<div class=\"ui-sm-12 ui-g-6 ui-lg-6 ui-md-12\">\n  <!-- Contenido para pantallas pequeñas (small) -->\n</div>",
          "lenguaje": "html"
        },
        {
          "titulo": "Offset en PrimeFlex",
          "explicacion": "En PrimeFlex, el offset se utiliza para ajustar el margen izquierdo de un elemento, lo que permite crear espacios vacíos entre elementos dentro de un diseño de cuadrícula. Puedes utilizar clases como 'ui-g-offset-1' para establecer un espacio de margen izquierdo de 1 columna dentro de una cuadrícula de 12 columnas. Esto es útil para crear diseños más complejos y alinear elementos en tu página de manera precisa.",
          "code": "<div class=\"ui-g-6 ui-lg-4 ui-md-12 ui-g-offset-1\">...</div>",
          "lenguaje": "html"
        },
        {
          "titulo": "Clases para Pantallas Genéricas",
          "explicacion": "Las clases de tamaño genérico en PrimeNG y PrimeFlex son versátiles y permiten adaptar el contenido a una amplia variedad de dispositivos. Son ideales para lograr un diseño flexible que funcione en diferentes tamaños de pantalla.",
          "code": "<div class=\"ui-g-12\">\n  <!-- Contenido para pantallas genéricas -->\n</div>",
          "lenguaje": "html"
        },
        {
          "titulo": "Clases para Pantallas Grandes (Large)",
          "explicacion": "Para pantallas más grandes, puedes usar las clases proporcionadas por PrimeNG y PrimeFlex para diseñar tu página de acuerdo con los requisitos de visualización en pantallas grandes.",
          "code": "<div class=\"ui-lg-6\">\n  <!-- Contenido para pantallas grandes (large) -->\n</div>",
          "lenguaje": "html"
        },
        {
          "titulo": "Clases para Pantallas Medianas (Medium)",
          "explicacion": "PrimeNG y PrimeFlex permiten especificar tamaños de elementos para pantallas de tamaño mediano, lo que facilita la adaptación a dispositivos con pantallas medianas.",
          "code": "<div class=\"ui-md-12\">\n  <!-- Contenido para pantallas medianas (medium) -->\n</div>",
          "lenguaje": "html"
        },
        {
          "titulo": "Clases para Pantallas Pequeñas (Small)",
          "explicacion": "En PrimeNG y PrimeFlex, puedes utilizar clases específicas para definir el comportamiento de elementos en pantallas pequeñas (small). Estas clases te permiten diseñar y adaptar elementos de tu interfaz para que se muestren de manera óptima en dispositivos con pantallas pequeñas.",
          "code": "<div class=\"ui-sm-12\">\n  <!-- Contenido para pantallas pequeñas (small) -->\n</div>",
          "lenguaje": "html"
        },
        {
          "titulo": "Nested Grids en PrimeFlex",
          "explicación": "PrimeFlex permite anidar cuadrículas dentro de otras cuadrículas para crear diseños más complejos y flexibles. Esto es útil cuando necesitas subdividir secciones de tu diseño en una cuadrícula independiente. Puedes anidar elementos 'p-grid' dentro de otros elementos 'p-grid' para lograr una estructura de cuadrícula jerárquica.",
          "code": "<div class=\"p-grid\">\n  <div class=\"p-col-6\">\n    <div class=\"p-grid\">\n      <div class=\"p-col-6\">...</div>\n      <div class=\"p-col-6\">...</div>\n    </div>\n  </div>\n  <div class=\"p-col-6\">...</div>\n</div>",
          "lenguaje": "html"
        },
        {
          "titulo": "Clases p-grid y p-justify-start en PrimeNG",
          "explicacion": "PrimeNG proporciona clases como p-grid y p-justify-start que te permiten establecer una cuadrícula y alinear elementos a la izquierda. Estas clases son útiles para definir una estructura de página y su alineación inicial.",
          "code": "<div class=\"p-grid p-justify-start\">\n  <!-- Contenido de la página -->\n</div>",
          "lenguaje": "html"
        }
      ]
      ,
      "aparicion": "General",
      "recursos": [
        {
          "titulo": "Documentacion version 9",
          "recurso": "https://www.primefaces.org/primeng-v9-lts/#/flexgrid"
        }
      ]
    },
    {
      id:5,
      "nombre": "Diagramas de flujo de datos",
      "bio": "Los diagramas de flujo de datos (DFD) y los diagramas de secuencia son componentes vitales en el desarrollo de software. Los DFD representan de manera gráfica el flujo de datos en un sistema, lo que mejora la comunicación, la detección de errores y el diseño estructurado. Por otro lado, los diagramas de secuencia modelan la interacción entre objetos y clases, ayudando a comprender la dinámica del sistema, detectar problemas y facilitar la colaboración. Ambos tipos de diagramas son esenciales para la claridad de la comunicación, la detección temprana de problemas y la documentación efectiva en proyectos de desarrollo de software.",
      "beneficios": [
        "Mejora la comunicación y comprensión entre equipos y stakeholders.",
        "Ayuda a identificar, analizar y documentar los procesos y flujos de datos de un sistema.",
        "Facilita la detección temprana de problemas y redundancias en el diseño del sistema.",
        "Simplifica la planificación y gestión de proyectos al definir claramente los requerimientos y alcance.",
        "Contribuye a una documentación efectiva, lo que simplifica el mantenimiento y las futuras actualizaciones del sistema.",
        "Permite evaluar el rendimiento y la eficiencia del sistema, así como optimizarlos."
      ],
      "img": "assets/img/dfd.png",
      "explicaciones": [
        {
          "titulo": "Identificación de Componentes del Sistema",
          "explicacion": "El primer paso para crear un DFD es identificar los componentes clave del sistema, como procesos, entidades externas y flujos de datos. Esto ayuda a comprender cómo interactúan estos elementos para lograr un objetivo común."
        },
        {
          "titulo": "Dibujo de Procesos y Entidades",
          "explicacion": "Utiliza círculos para representar los procesos en el sistema y rectángulos para representar las entidades externas, como usuarios o sistemas externos. Los procesos indican cómo se transforma la información, mientras que las entidades muestran las fuentes o destinos de datos."
        },
        {
          "titulo": "Conexión de Componentes",
          "explicacion": "Utiliza flechas para conectar los componentes, mostrando cómo fluye la información entre ellos. Las flechas indican la dirección del flujo de datos, lo que te permite visualizar la interacción entre procesos y entidades."
        },
        {
          "titulo": "Documentación de Flujos de Datos",
          "explicacion": "Etiqueta las flechas con descripciones de los flujos de datos, especificando qué información se transmite entre los componentes. Esto proporciona detalles sobre qué se está procesando y cómo se utiliza la información."
        },
        {
          "titulo": "Revisión y Validación",
          "explicacion": "Una vez que hayas creado el DFD, revisa y valida su precisión con otros miembros del equipo o usuarios. Asegúrate de que refleje con precisión cómo funciona el sistema."
        },
        {
          "titulo": "Actualización y Mantenimiento",
          "explicacion": "Los sistemas evolucionan con el tiempo. Por lo tanto, es importante mantener y actualizar regularmente el DFD para que siga siendo una representación precisa del sistema."
        }
      ],
      "aparicion": "General",
      "recursos": [
        {
          "titulo": "tutorial Diagrama de Flujo de Datos",
          "recurso": "https://www.lucidchart.com/blog/es/tutorial-diagrama-flujo-de-datos"
        }
      ]
    },
    {
      id:6,
      "nombre": "Squeleton",
      "bio": "Skeleton es una librería en Angular que se utiliza para crear vistas temporales de carga o esqueletos en las aplicaciones web. Su integración es beneficiosa, ya que mejora la experiencia del usuario al mostrar una representación visual de la estructura de la página mientras los datos reales se cargan en segundo plano. Estos esqueletos proporcionan retroalimentación inmediata, reduciendo la percepción de tiempo de espera y brindando una sensación de fluidez en la navegación, lo que contribuye a una mejor usabilidad y satisfacción del usuario. Además, Skeleton simplifica la implementación de estas vistas temporales, lo que ahorra tiempo y esfuerzo en el desarrollo de aplicaciones web dinámicas y responsivas.",
      "beneficios": [
        "Mejora la experiencia del usuario al reducir la percepción de tiempo de espera.",
        "Brinda una sensación de fluidez en la navegación de la aplicación.",
        "Proporciona retroalimentación inmediata al usuario mientras se cargan los datos reales.",
        "Facilita el desarrollo de vistas temporales de carga o esqueletos.",
        "Contribuye a una mejor usabilidad y satisfacción del usuario en aplicaciones web.",
        "Ahorra tiempo y esfuerzo en la implementación de vistas temporales.",
        "Ayuda a crear aplicaciones web más dinámicas y responsivas."
      ],
      "img": "https://miro.medium.com/v2/resize:fit:904/1*gCvu3j-bt5JiHT52pYu0UQ.gif",
      "explicaciones": [
        {
          "titulo": "Instalación de Skeleton",
          "explicacion": "Para instalar la librería Skeleton en tu proyecto Angular, puedes usar npm (Node Package Manager). Ejecuta el siguiente comando en la raíz de tu proyecto:",
          "code": "npm install angular-skeleton-loader",
          "lenguaje": "none"
        },
        {
          "titulo": "Uso de Skeleton en Componentes",
          "explicacion": "Una vez instalado, puedes usar la directiva SkeletonLoader en tus componentes de Angular para agregar efectos de carga esqueletal a elementos HTML. Importa el módulo SkeletonLoaderModule en tu módulo y luego utiliza la directiva en tu plantilla HTML:",
          "code": "import { SkeletonLoaderModule } from 'angular-skeleton-loader';\n\n@NgModule({\n  imports: [SkeletonLoaderModule],\n})",
          "lenguaje": "javascript"
        },
        {
          "titulo": "Uso en HTML",
          "explicacion": "En tu plantilla HTML, simplemente agrega la directiva 'skeleton-loader' a los elementos que desees animar durante la carga. Por ejemplo, si deseas aplicar el efecto de carga a un elemento div, puedes hacerlo de la siguiente manera:",
          "code": "<div skeleton-loader></div>",
          "lenguaje": "html"
        },
        {
          "titulo": "Configuración Personalizada",
          "explicacion": "Puedes personalizar el comportamiento de SkeletonLoader ajustando las propiedades en tu plantilla HTML. Esto te permite controlar la velocidad, el color y otros aspectos visuales de los esqueletos de carga. Consulta la documentación de la librería para obtener más detalles sobre las opciones de configuración.",
          imagenes: ['https://codemyui.com/wp-content/uploads/2019/11/Pure-CSS-Skeleton-Screen-Gleam-Animation-for-light-dark-and-grey-mode-Card-UI.gif']
        }
      ]
      ,
      "aparicion": "Libreria angular",
      "recursos": [
        {
          "titulo": "npm de instalación",
          "recurso": "https://www.npmjs.com/package/ngx-skeleton-loader"
        }
      ]
    },
    {
      id:7,
      "nombre":"SOLID",
      "bio":"El principio SOLID, que significa Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation y Dependency Inversion, es un conjunto de pautas para diseñar software de manera más efectiva. Implementar estos principios mejora la mantenibilidad, extensibilidad y escalabilidad del código, lo que resulta en un desarrollo más eficiente y la capacidad de adaptarse a cambios en los requisitos y añadir nuevas funcionalidades de manera más sencilla y segura. Al seguir SOLID, se promueve una estructura de código más limpia y cohesiva, lo que beneficia tanto a los desarrolladores como a las empresas al reducir costos y aumentar la calidad del software.",
      "beneficios":[
        "Mejora la mantenibilidad del código.",
        "Facilita la extensibilidad y escalabilidad del software.",
        "Permite adaptarse más eficazmente a cambios en los requisitos.",
        "Fomenta una estructura de código más cohesiva y organizada.",
        "Reduce costos y aumenta la calidad del software.",
        "Facilita la colaboración entre desarrolladores en proyectos grandes.",
        "Permite una mejor separación de responsabilidades y módulos claros."
      ],
      "img":"https://kata-software.com/sites/default/files/images/Blog%2022-09-2020-imagen.png",
      "explicaciones":[
        {
          "titulo": "SRP - Principio de Responsabilidad Única",
          "explicacion": "Una clase debe tener una única razón para cambiar, lo que significa que debe tener una sola responsabilidad o tarea."
        },
        {
          "titulo": "OCP - Principio de Abierto/Cerrado",
          "explicacion": "Las entidades de software deben estar abiertas para la extensión pero cerradas para la modificación, permitiendo que el código sea extendido sin cambiar las partes existentes."
        },
        {
          "titulo": "LSP - Principio de Sustitución de Liskov",
          "explicacion": "Las subclases deben ser capaces de sustituir a las clases base sin afectar el comportamiento del programa."
        },
        {
          "titulo": "ISP - Principio de Segregación de Interfaces",
          "explicacion": "Las interfaces deben ser específicas para cada cliente y no forzar a las clases a implementar métodos innecesarios."
        },
        {
          "titulo": "DIP - Principio de Inversión de Dependencia",
          "explicacion": "Los módulos de alto nivel no deben depender de los módulos de bajo nivel; ambos deben depender de abstracciones. Las abstracciones no deben depender de los detalles, sino los detalles de las abstracciones."
        }
      ],
      "aparicion":"General",
      "recursos":[
         {
            "titulo":"Que es y para que sirve",
            "recurso":"https://kata-software.com/es/publicaciones/principios-solid-en-programacion#:~:text=SOLID%20es%20un%20acrónimo%20acuñado,eficiente%20y%20fácil%20de%20mantener."
         }
      ]
   }

  ];
  constructor() {
    console.log("servicio listo");
  }
  getData(): heroe[] {
    return this.heroeService;
  }
  getData2(idx: string) {
    return this.heroeService[idx];
  }
  buscar(termino: string) {

    let datosArr: heroe[] = [];
    termino = termino.toLowerCase();

    for (let heroe of this.heroeService) {

      let nombre = heroe.nombre.toLowerCase();

      if (nombre.indexOf(termino) >= 0) {
        datosArr.push(heroe)
      }

    }
    return datosArr;
  }
}

export interface heroe {
  id:number,
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa?: string;
  beneficios?: string[];
  explicaciones?: object[];
  recursos?: object[];
}