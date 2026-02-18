const contenidosPAES = [
  {
    id: "comprension-lectora",
    nombre: "Comprensión Lectora",
    descripcion: "Análisis e interpretación de textos",
    unidades: [
      {
        id: "tipos-texto",
        nombre: "Tipos de Texto",
        temas: [
          {
            id: "narrativo",
            nombre: "Texto Narrativo",
            porqueSeEnseña: "Los textos narrativos son fundamentales en la comprensión lectora porque permiten al estudiante identificar estructuras story-telling que aparecen frecuentemente en evaluaciones y en la vida cotidiana. Dominar la narrativa ayuda a comprender artículos, novelas, noticias y cualquier texto que presente una secuencia de eventos.",
            objetivosAprendizaje: [
              "Identificar los elementos del relato: narrador, personajes, tiempo, espacio y conflicto",
              "Diferenciar entre tipos de narrador: protagonista, omnisciente y testigo",
              "Analizar la estructura narrativa: inicio, desarrollo y desenlace",
              "Interpretar el propósito del autor en textos narrativos"
            ],
            habilidades: [
              "Pensamiento crítico al analizar motivaciones de personajes",
              "Capacidad de seguimiento secuencial de eventos",
              "Empatía al relacionarse con experiencias de otros",
              "Memoria y retención de detalles importantes"
            ],
            subunidades: [
              {
                nombre: "Elementos del relato",
                contenidos: [
                  "narrador",
                  "personajes",
                  "tiempo",
                  "espacio",
                  "conflicto"
                ],
                ejemplo: {
                  texto: "Juan caminaba solo bajo la lluvia pensando en su pasado.",
                  pregunta: "¿Qué tipo de narrador aparece?",
                  opciones: ["protagonista", "omnisciente", "testigo"],
                  correcta: 0
                }
              }
            ]
          },
          {
            id: "expositivo",
            nombre: "Texto Expositivo",
            porqueSeEnseña: "El texto expositivo es el formato más común en contextos académicos y profesionales. La capacidad de comprender este tipo de textos es esencial para el éxito en la educación superior y en el mundo laboral, donde se requiere procesar información técnica y científica.",
            objetivosAprendizaje: [
              "Identificar la idea principal y los detalles que la sustentan",
              "Diferenciar información explícita de información implícita",
              "Realizar inferencias basadas en el texto",
              "Comprender estructuras textuales como causa-efecto y problema-solución"
            ],
            habilidades: [
              "Síntesis de información compleja",
              "Pensamiento analítico",
              "Capacidad de resumir ideas principales",
              "Razonamiento lógico"
            ],
            subunidades: [
              {
                nombre: "Información explícita e implícita",
                contenidos: [
                  "idea principal",
                  "detalles",
                  "inferencias"
                ],
                ejemplo: {
                  texto: "El cambio climático es el aumento de la temperatura global causado por emisiones contaminantes.",
                  pregunta: "¿Cuál es la idea principal del texto?",
                  opciones: [
                    "El clima cambia naturalmente",
                    "El aumento de temperatura global",
                    "Las estaciones del año"
                  ],
                  correcta: 1
                }
              }
            ]
          },
          {
            id: "argumentativo",
            nombre: "Texto Argumentativo",
            porqueSeEnseña: "En una era de información abundante, la capacidad de evaluar argumentos es crucial. Este contenido desarrolla habilidades para identificar falacias, evaluar evidencia y formar opiniones fundamentadas, competencias esenciales para la participación ciudadana informada.",
            objetivosAprendizaje: [
              "Identificar la tesis principal de un argumento",
              "Reconocer los argumentos y la evidencia que los sustenta",
              "Analizar la estructura argumentativa: tesis, argumentos, evidencia, conclusión",
              "Evaluar la validez y solidez de los argumentos presentados"
            ],
            habilidades: [
              "Pensamiento crítico y analítico",
              "Evaluación de evidencia",
              "Formulación de opiniones fundamentadas",
              "Comunicación persuasiva"
            ],
            subunidades: [
              {
                nombre: "Estructura argumentativa",
                contenidos: [
                  "tesis",
                  "argumentos",
                  "evidencia",
                  "conclusión"
                ],
                ejemplo: {
                  texto: "La educación gratuita es fundamental porque permite igualdad de oportunidades.",
                  pregunta: "¿Qué elemento representa la postura principal?",
                  opciones: ["tesis", "detalle", "ejemplo"],
                  correcta: 0
                }
              }
            ]
          }
        ]
      },
      {
        id: "habilidades-comprension",
        nombre: "Habilidades de Comprensión",
        temas: [
          {
            id: "localizar-informacion",
            nombre: "Localizar Información",
            porqueSeEnseña: "La capacidad de encontrar información específica rápidamente es una habilidad fundamental en el mundo digital actual. Las pruebas PAES evaluan específicamente esta competencia para asegurar que los estudiantes puedan extraer datos precisos de textos extensos.",
            objetivosAprendizaje: [
              "Localizar datos específicos en textos extensos",
              "Identificar información directa y explícita",
              "Utilizar señales textuales para encontrar información",
              "Distinguir entre información relevante e irrelevante"
            ],
            habilidades: [
              "Escaneo eficiente de textos",
              "Atención al detalle",
              "Organización de información",
              "Velocidad de lectura"
            ],
            subunidades: [
              {
                nombre: "Información explícita",
                contenidos: [
                  "datos directos",
                  "detalles específicos"
                ],
                ejemplo: {
                  texto: "El tratado fue firmado en 1998.",
                  pregunta: "¿En qué año se firmó el tratado?",
                  opciones: ["1998", "2000", "1988"],
                  correcta: 0
                }
              }
            ]
          },
          {
            id: "interpretar",
            nombre: "Interpretar",
            porqueSeEnseña: "Interpretar va más allá de leer palabras: significa comprender el significado más profundo del texto. Esta habilidad es necesaria para la comunicación efectiva y para comprender смыслы implícitos en todas las formas de comunicación humana.",
            objetivosAprendizaje: [
              "Identificar significado contextual de palabras y expresiones",
              "Reconocer la intención del autor",
              "Realizar inferencias lógicas",
              "Interpretar figuras retóricas en contexto"
            ],
            habilidades: [
              "Comprensión lectora profunda",
              "Pensamiento inferencial",
              "Análisis de contexto",
              "Empatía lectora"
            ],
            subunidades: [
              {
                nombre: "Inferencias",
                contenidos: [
                  "significado contextual",
                  "intención del autor"
                ]
              }
            ]
          },
          {
            id: "evaluar",
            nombre: "Evaluar",
            porqueSeEnseña: "Evaluar textos requiere un nivel superior de comprensión que implica juicio crítico. Esta competencia prepara a los estudiantes para ser consumidores críticos de información, capaces de distinguir fuentes confiables de información cuestionable.",
            objetivosAprendizaje: [
              "Identificar la postura o punto de vista del autor",
              "Evaluar la confiabilidad de una fuente",
              "Reconocer sesgos y manipulaciones en el texto",
              "Formular juicios críticos fundamentados"
            ],
            habilidades: [
              "Pensamiento crítico",
              "Evaluación de fuentes",
              "Detección de sesgos",
              "Juicio fundamentado"
            ],
            subunidades: [
              {
                nombre: "Juicio crítico",
                contenidos: [
                  "postura del autor",
                  "confiabilidad"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "vocabulario-contexto",
        nombre: "Vocabulario en Contexto",
        temas: [
          {
            id: "significado-contextual",
            nombre: "Significado contextual",
            porqueSeEnseña: "El vocabulario no existe aislado; las palabras cambian de significado según el contexto. Esta habilidad es esencial para la comprensión lectora avanzada y para evitar malentendidos en la comunicación.",
            objetivosAprendizaje: [
              "Identificar sinonimia contextual",
              "Comprender el sentido figurado de expresiones",
              "Diferenciar significado denotativo de connotativo",
              "Ampliar vocabulario activo y pasivo"
            ],
            habilidades: [
              "Flexibilidad semántica",
              "Interpretación contextual",
              "Ampliación de vocabulario",
              "Expresión precisa"
            ],
            subunidades: [
              {
                nombre: "Sinonimia contextual",
                contenidos: [
                  "reemplazo de palabras",
                  "sentido figurado"
                ],
                ejemplo: {
                  texto: "El panorama era oscuro.",
                  pregunta: "¿Qué significa 'oscuro' en este contexto?",
                  opciones: ["sombrío", "sin luz", "negro"],
                  correcta: 0
                }
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "competencia-linguistica",
    nombre: "Competencia Lingüística",
    descripcion: "Gramática aplicada al texto",
    unidades: [
      {
        id: "lexico-semantica",
        nombre: "Léxico y Semántica",
        temas: [
          {
            id: "relaciones-semanticas",
            nombre: "Relaciones semánticas",
            porqueSeEnseña: "Comprender las relaciones entre palabras enriquece el vocabulario y mejora la comprensión textual. Las relaciones semánticas son la base para entender juegos de palabras, sarcasmo, ironía y expresiones idiomáticas frecuentes en español.",
            objetivosAprendizaje: [
              "Identificar sinónimos y aplicarlos correctamente",
              "Reconocer antónimos y su uso enfático",
              "Comprender la polisemia y sus implicaciones",
              "Utilizar relaciones semánticas para ampliar vocabulario"
            ],
            habilidades: [
              "Ampliación de vocabulario",
              "Expresión precisa",
              "Comprensión de expresiones idiomáticas",
              "Riqueza léxica"
            ],
            subunidades: [
              {
                nombre: "Tipos",
                contenidos: [
                  "sinonimia",
                  "antonimia",
                  "polisemia"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "conectores",
        nombre: "Conectores",
        temas: [
          {
            id: "cohesion-textual",
            nombre: "Cohesión textual",
            porqueSeEnseña: "Los conectores son el 'pegamento' que mantiene unido un texto. Dominarlos permite no solo comprender mejor textos ajenos, sino también producir escritos más claros y coherentes, habilidad fundamental en cualquier contexto académico o profesional.",
            objetivosAprendizaje: [
              "Identificar conectores de causa y efecto",
              "Reconocer conectores de oposición y contraste",
              "Utilizar conectores de adición y secuencia",
              "Aplicar conectores para mejorar la cohesión textual"
            ],
            habilidades: [
              "Producción de textos coherentes",
              "Organización lógica de ideas",
              "Expresión escrita clara",
              "Pensamiento estructurado"
            ],
            subunidades: [
              {
                nombre: "Tipos de conectores",
                contenidos: [
                  "causa",
                  "consecuencia",
                  "oposición",
                  "adición"
                ],
                ejemplo: {
                  texto: "Quería salir, sin embargo, estaba lloviendo.",
                  pregunta: "¿Qué indica 'sin embargo'?",
                  opciones: ["causa", "oposición", "adición"],
                  correcta: 1
                }
              }
            ]
          }
        ]
      },
      {
        id: "normativa",
        nombre: "Normativa",
        temas: [
          {
            id: "uso-idioma",
            nombre: "Uso correcto del idioma",
            porqueSeEnseña: "La normativa lingüística es esencial para la comunicación efectiva y profesional. Un dominio correcto del idioma proyecta credibilidad y asegura que el mensaje sea recibido tal como se intended, evitando ambigüedades y malentendidos.",
            objetivosAprendizaje: [
              "Aplicar reglas de puntuación correctamente",
              "Mantener concordancia gramatical entre sujeto y verbo",
              "Emplear ortografía funcional en escritura",
              "Identificar y corregir errores常见es"
            ],
            habilidades: [
              "Escritura correcta y precisa",
              "Atención al detalle",
              "Autocorrección",
              "Comunicación profesional efectiva"
            ],
            subunidades: [
              {
                nombre: "Reglas",
                contenidos: [
                  "puntuación",
                  "concordancia",
                  "ortografía funcional"
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "produccion-textos",
    nombre: "Producción y Análisis de Textos",
    unidades: [
      {
        id: "organizacion-textual",
        nombre: "Organización textual",
        temas: [
          {
            id: "coherencia",
            nombre: "Coherencia",
            porqueSeEnseña: "Un texto coherente es aquel donde las ideas se relacionan lógicamente y forman un conjunto comprensible. La coherencia es lo que diferencia un texto efectivo de uno confuso, y es una habilidad evaluada en todas las pruebas de lenguaje.",
            objetivosAprendizaje: [
              "Identificar el tema central y las ideas secundarias",
              "Reconocer la progresión temática en un texto",
              "Establecer relaciones lógicas entre párrafos",
              "Evaluar la coherencia global de un texto"
            ],
            habilidades: [
              "Organización de ideas",
              "Pensamiento lógico",
              "Estructuración de argumentos",
              "Comprensión global de textos"
            ],
            subunidades: [
              {
                nombre: "Estructura",
                contenidos: [
                  "orden lógico",
                  "progresión temática"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "proposito-comunicativo",
        nombre: "Propósito comunicativo",
        temas: [
          {
            id: "intencion-emisor",
            nombre: "Intención del emisor",
            porqueSeEnseña: "Todo texto tiene un propósito: informar, persuadir, entretener, etc. Comprender la intención del emisor permite una lectura más profunda y crítica, siendo fundamental para responder adecuadamente a diferentes situaciones comunicativas.",
            objetivosAprendizaje: [
              "Identificar el propósito comunicativo de un texto",
              "Diferenciar entre informar, persuadir y expresar",
              "Reconocer estrategias discursivas según el propósito",
              "Adaptar la lectura al propósito del texto"
            ],
            habilidades: [
              "Lectura crítica",
              "Análisis de intención comunicativa",
              "Flexibilidad lectora",
              "Comprensión de estrategias persuasivas"
            ],
            subunidades: [
              {
                nombre: "Tipos",
                contenidos: [
                  "informar",
                  "persuadir",
                  "expresar"
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  {
    id: "literatura",
    nombre: "Literatura",
    unidades: [
      {
        id: "generos-literarios",
        nombre: "Géneros literarios",
        temas: [
          {
            id: "narrativo-lit",
            nombre: "Narrativo",
            porqueSeEnseña: "El género narrativo es el más antiguo y universal de todos. Comprender sus formas (cuento, novela) permite disfrutar de la literatura y desarrollar la imaginación, además de identificar estructuras narrativas presentes en medios contemporáneos como el cine y series.",
            objetivosAprendizaje: [
              "Diferenciar entre cuento y novela",
              "Identificar elementos narrativos en obras literarias",
              "Analizar la estructura temporal de un relato",
              "Comprender la evolución de personajes"
            ],
            habilidades: [
              "Imaginación y creatividad",
              "Análisis de personajes",
              "Comprensión de estructuras narrativas",
              "Apreciación literaria"
            ],
            subunidades: [
              {
                nombre: "Formas",
                contenidos: ["cuento", "novela"]
              }
            ]
          },
          {
            id: "lirico",
            nombre: "Lírico",
            porqueSeEnseña: "La poesía desarrolla la sensibilidad lingüística y permite expresar emociones de manerabeautiful. El género lírico entrena la atención al lenguaje figurado y a las emociones, competencias fundamentales para una comprensión lectora profunda.",
            objetivosAprendizaje: [
              "Identificar el hablante lírico en un poema",
              "Reconocer figuras literarias: metáfora, comparación, personificación",
              "Analizar el uso del ritmo y la sonoridad",
              "Interpretar el significado emocional de un poema"
            ],
            habilidades: [
              "Expresión emocional",
              "Análisis de lenguaje figurado",
              "Sensibilidad estética",
              "Interpretación simbólica"
            ],
            subunidades: [
              {
                nombre: "Elementos",
                contenidos: [
                  "hablante lírico",
                  "figuras literarias"
                ]
              }
            ]
          },
          {
            id: "dramatico",
            nombre: "Dramático",
            porqueSeEnseña: "El teatro integra palabra, acción y emoción. Estudiar el género dramático desarrolla la comprensión de diálogos, conflictos y caracterización, habilidades transferibles a la comprensión de interacciones humanas en cualquier contexto.",
            objetivosAprendizaje: [
              "Identificar elementos del texto dramático: diálogo, acotaciones",
              "Analizar conflictos en obras teatrales",
              "Comprender la caracterización de personajes",
              "Diferenciar tragedia de comedia"
            ],
            habilidades: [
              "Análisis de diálogo",
              "Comprensión de conflicto",
              "Interpretación de personajes",
              "Pensamiento crítico sobre motivaciones"
            ],
            subunidades: [
              {
                nombre: "Elementos",
                contenidos: [
                  "diálogo",
                  "conflicto"
                ]
              }
            ]
          }
        ]
      },
      {
        id: "recursos-literarios",
        nombre: "Recursos Literarios",
        temas: [
          {
            id: "figuras",
            nombre: "Figuras literarias",
            porqueSeEnseña: "Las figuras literarias son herramientas que usan los autores para crear эффекты específicos. Conocerlas permite una lectura más profunda y apreciativa, además de mejorar las propias habilidades de expresión escrita y oral.",
            objetivosAprendizaje: [
              "Identificar metáforas y comparaciones",
              "Reconocer hipérbole y sus efectos",
              "Comprender la personificación",
              "Aplicar figuras literarias en escritura propia"
            ],
            habilidades: [
              "Expresión creativa",
              "Análisis estilístico",
              "Escritura descriptiva",
              "Apreciación del lenguaje artístico"
            ],
            subunidades: [
              {
                nombre: "Tipos",
                contenidos: [
                  "metáfora",
                  "hipérbole",
                  "comparación",
                  "personificación"
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

export default contenidosPAES;

