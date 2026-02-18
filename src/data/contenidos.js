
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
                porqueSeEnseña: "El texto narrativo es fundamental en la comprensión lectora porque permite al estudiante identificar las voces narrativas, distinguir la perspectiva del autor y comprender cómo se construyen las historias. Esto es esencial para el análisis de obras literarias y textos informativos.",
                objetivosAprendizaje: [
                  "Identificar los diferentes tipos de narrador (protagonista, testigo, omnisciente)",
                  "Comprender la diferencia entre primera y tercera persona",
                  "Analizar cómo la voz narrativa afecta la historia"
                ],
                habilidades: [
                  "Pensamiento crítico",
                  "Análisis de perspectivas",
                  "Interpretación de intenciones del autor"
                ],
                ejemplo: {
                  texto: "Caminé por la calle desierta recordando lo aquella noche.",
                  pregunta: "¿Quién narra la historia?",
                  opciones: ["Narrador omnisciente", "Narrador protagonista", "Narrador testigo", "Narrador objetivo"],
                  correcta: 1,
                  explicacion: "Usa primera persona ('caminé'), el narrador participa en los hechos como protagonista de la historia."
                }
              }
            ]
          },
          {
            id: "expositivo",
            nombre: "Texto Expositivo",
            subunidades: [
              {
                nombre: "Información explícita e implícita",
                contenidos: [
                  "idea principal",
                  "detalles",
                  "inferencias"
                ],
                porqueSeEnseña: "Los textos expositivos son la base del aprendizaje académico. Identificar ideas principales permite a los estudiantes organizar información y construir conocimiento de manera estructurada.",
                objetivosAprendizaje: [
                  "Identificar la idea principal de un párrafo",
                  "Diferenciar información explícita de la implícita",
                  "Realizar inferencias lógicas"
                ],
                habilidades: [
                  "Comprensión de información",
                  "Organización de ideas",
                  "Razonamiento lógico"
                ],
                ejemplo: {
                  texto: "El cambio climático ha provocado un aumento en las temperaturas globales, afectando ecosistemas y especies.",
                  pregunta: "¿Cuál es la idea principal?",
                  opciones: ["Los ecosistemas son importantes", "El cambio climático afecta el planeta", "Existen especies en peligro", "La temperatura cambia diariamente"],
                  correcta: 1,
                  explicacion: "La oración central explica el efecto general del cambio climático sobre el planeta."
                }
              }
            ]
          },
          {
            id: "argumentativo",
            nombre: "Texto Argumentativo",
            subunidades: [
              {
                nombre: "Estructura argumentativa",
                contenidos: [
                  "tesis",
                  "argumentos",
                  "evidencia",
                  "conclusión"
                ],
                porqueSeEnseña: "La argumentación es esencial para el pensamiento crítico. Los estudiantes deben aprender a construir y evaluar argumentos para participar activamente en debates académicos y ciudadanos.",
                objetivosAprendizaje: [
                  "Identificar la tesis en un texto argumentativo",
                  "Reconocer los argumentos de apoyo",
                  "Evaluar la validez de las evidencias"
                ],
                habilidades: [
                  "Pensamiento crítico",
                  "Evaluación de argumentos",
                  "Comunicación persuasiva"
                ],
                ejemplo: {
                  texto: "El uso del transporte público debería aumentar porque reduce la contaminación.",
                  pregunta: "¿Qué elemento corresponde a la tesis?",
                  opciones: ["reduce la contaminación", "transporte público", "debería aumentar el uso del transporte público", "contaminación ambiental"],
                  correcta: 2,
                  explicacion: "La tesis es la postura o posición que se defendedebe aumentar el uso del transporte público."
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
            subunidades: [
              {
                nombre: "Información explícita",
                contenidos: [
                  "datos directos",
                  "detalles específicos"
                ],
                porqueSeEnseña: "La habilidad de localizar información explícita es la base de la comprensión lectora. Permite al estudiante encontrar respuestas directas en el texto sin necesidad de inferir.",
                objetivosAprendizaje: [
                  "Encontrar datos específicos en un texto",
                  "Identificar detalles relevantes",
                  "Localizar información numérica y fechas"
                ],
                habilidades: [
                  "Búsqueda de información",
                  "Atención al detalle",
                  "Lectura eficiente"
                ],
                ejemplo: {
                  texto: "El museo abre sus puertas a las 9:00 de la mañana.",
                  pregunta: "¿A qué hora abre el museo?",
                  opciones: ["8:00", "9:00", "10:00", "No se indica"],
                  correcta: 1,
                  explicacion: "Información explícita: aparece textual en el texto - 'a las 9:00 de la mañana'."
                }
              }
            ]
          },
          {
            id: "interpretar",
            nombre: "Interpretar",
            subunidades: [
              {
                nombre: "Inferencias",
                contenidos: [
                  "significado contextual",
                  "intención del autor"
                ],
                porqueSeEnseña: "La inferencia es una habilidad cognitiva superior que permite comprender información no explícita. Es esencial para la comprensión profunda de textos.",
                objetivosAprendizaje: [
                  "Realizar inferencias lógicas",
                  "Comprender el significado contextual",
                  "Identificar la intención del autor"
                ],
                habilidades: [
                  "Razonamiento deductivo",
                  "Pensamiento crítico",
                  "Comprensión profunda"
                ],
                ejemplo: {
                  texto: "Pedro salió con paraguas y abrigo grueso.",
                  pregunta: "¿Qué se puede inferir?",
                  opciones: ["Hace calor", "Está lloviendo o hace frío", "Es verano", "Pedro está enfermo"],
                  correcta: 1,
                  explicacion: "Inferencia: el paraguas y el abrigo sugieren lluvia o frío, información no explícita que se deduce del contexto."
                }
              }
            ]
          },
          {
            id: "evaluar",
            nombre: "Evaluar",
            subunidades: [
              {
                nombre: "Juicio crítico",
                contenidos: [
                  "postura del autor",
                  "confiabilidad"
                ],
                porqueSeEnseña: "Evaluar textos críticamente es fundamental en la era de la información. Los estudiantes deben distinguir entre hechos y opiniones para evitar desinformación.",
                objetivosAprendizaje: [
                  "Identificar opiniones vs. hechos",
                  "Evaluar la confiabilidad de fuentes",
                  "Reconocer sesgos en textos"
                ],
                habilidades: [
                  "Pensamiento crítico",
                  "Evaluación de fuentes",
                  "Alfabetización cívica"
                ],
                ejemplo: {
                  texto: "Este producto es el mejor del mercado, según nuestra empresa.",
                  pregunta: "¿Qué caracteriza esta afirmación?",
                  opciones: ["Objetividad científica", "Información verificable", "Opinión interesada", "Dato estadístico"],
                  correcta: 2,
                  explicacion: "Proviene de la misma empresa que vende el producto, por lo tanto es una opinión interesada y sesgada."
                }
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
            subunidades: [
              {
                nombre: "Sinonimia contextual",
                contenidos: [
                  "reemplazo de palabras",
                  "sentido figurado"
                ],
                porqueSeEnseña: "Las palabras pueden tener diferentes significados según el contexto. Comprender el sentido figurado permite una lectura más rica y profunda de los textos literarios.",
                objetivosAprendizaje: [
                  "Identificar sinónimos en contexto",
                  "Comprender sentido figurado vs. literal",
                  "Ampliar vocabulario activo"
                ],
                habilidades: [
                  "Comprensión contextual",
                  "Interpretación literaria",
                  "Expansión léxica"
                ],
                ejemplo: {
                  texto: "El panorama era oscuro.",
                  pregunta: "¿Qué palabra reemplaza 'oscuro' en el contexto de incertidumbre?",
                  opciones: ["negro", "sombrío", "sucio", "apagado"],
                  correcta: 1,
                  explicacion: "No se refiere al color, sino al sentido figurado: situación sombría o incierta."
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
            subunidades: [
              {
                nombre: "Tipos",
                contenidos: [
                  "sinonimia",
                  "antonimia",
                  "polisemia"
                ],
                porqueSeEnseña: "Las relaciones semánticas son esenciales para la comprensión de textos y la expansión del vocabulario. Permiten entender mejor las palabras y sus relaciones.",
                objetivosAprendizaje: [
                  "Identificar sinónimos y antónimos",
                  "Comprender la polisemia",
                  "Usar vocabulario variado en producción"
                ],
                habilidades: [
                  "Ampliación de vocabulario",
                  "Comprensión lectora",
                  "Expresión escrita"
                ],
                ejemplo: {
                  texto: "¿Cuál es sinónimo de 'rápido'?",
                  opciones: ["veloz", "lento", "débil", "firme"],
                  correcta: 0,
                  explicacion: "Sinónimo: palabras con significado equivalente o muy similar."
                }
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
            subunidades: [
              {
                nombre: "Tipos de conectores",
                contenidos: [
                  "causa",
                  "consecuencia",
                  "oposición",
                  "adición"
                ],
                porqueSeEnseña: "Los conectores son esenciales para la coherencia textual. Permiten linking ideas y crear textos con fluidez lógica.",
                objetivosAprendizaje: [
                  "Identificar diferentes tipos de conectores",
                  "Usar conectores apropiadamente",
                  "Mejorar la cohesión de textos propios"
                ],
                habilidades: [
                  "Producción textual",
                  "Coherencia argumentativa",
                  "Organización de ideas"
                ],
                ejemplo: {
                  texto: "Selecciona el conector de oposición:",
                  opciones: ["además", "porque", "sin embargo", "entonces"],
                  correcta: 2,
                  explicacion: "'Sin embargo' expresa oposición o contraste entre dos ideas."
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
            subunidades: [
              {
                nombre: "Reglas",
                contenidos: [
                  "puntuación",
                  "concordancia",
                  "ortografía funcional"
                ],
                porqueSeEnseña: "El uso correcto del idioma es fundamental para la comunicación efectiva. La normativa asegura que los textos sean claros y comprensibles.",
                objetivosAprendizaje: [
                  "Aplicar reglas de concordancia",
                  "Usar correctamente los signos de puntuación",
                  "Ortografía funcional para la comunicación"
                ],
                habilidades: [
                  "Comunicación escrita",
                  "Atención al detalle",
                  "Corrección lingüística"
                ],
                ejemplo: {
                  texto: "¿Qué oración está correcta en concordancia?",
                  opciones: ["La personas estudia.", "Las personas estudian.", "La personas studian.", "Las persona estudia."],
                  correcta: 1,
                  explicacion: "Sujeto plural 'las personas' requiere verbo plural 'estudian'."
                }
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
            subunidades: [
              {
                nombre: "Estructura",
                contenidos: [
                  "orden lógico",
                  "progresión temática"
                ],
                porqueSeEnseña: "La coherencia es lo que hace que un texto tenga sentido. Un texto coherente permite al lector seguir el hilo de las ideas fácilmente.",
                objetivosAprendizaje: [
                  "Organizar ideas en orden lógico",
                  "Mantener progresión temática",
                  "Crear textos cohesivos y coherentes"
                ],
                habilidades: [
                  "Organización de ideas",
                  "Producción textual",
                  "Pensamiento lógico"
                ],
                ejemplo: {
                  texto: "¿Cuál secuencia tiene orden lógico de acciones?",
                  opciones: ["Dormí — Me acosté — Apagué la luz", "Me acosté — Apagué la luz — Dormí", "Apagué la luz — Desperté — Me acosté", "Dormí — Desperté — Me acosté"],
                  correcta: 1,
                  explicacion: "Orden lógico: primero me acuesto, luego apago la luz, finalmente duermo."
                }
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
            subunidades: [
              {
                nombre: "Tipos",
                contenidos: [
                  "informar",
                  "persuadir",
                  "expresar"
                ],
                porqueSeEnseña: "Identificar el propósito comunicativo permite comprender la intención del autor y responder apropiadamente al texto.",
                objetivosAprendizaje: [
                  "Diferenciar propósitos comunicativos",
                  "Identificar intención del emisor",
                  "Adaptar la lectura al propósito"
                ],
                habilidades: [
                  "Comprensión pragmática",
                  "Análisis textual",
                  "Comunicación efectiva"
                ],
                ejemplo: {
                  texto: "'Compra este producto ahora.'",
                  pregunta: "El propósito es:",
                  opciones: ["informar", "persuadir", "describir", "narrar"],
                  correcta: 1,
                  explicacion: "El objetivo es influir en el receptor para que compre, es un propósito persuasivo."
                }
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
            id: "narrativo",
            nombre: "Narrativo",
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
            subunidades: [
              {
                nombre: "Elementos",
                contenidos: [
                  "hablante lírico",
                  "figuras literarias"
                ],
                porqueSeEnseña: "El género lírico expresa emociones y sentimientos a través de la poesía. Comprender el hablante lírico permite una lectura más profunda de la poesía.",
                objetivosAprendizaje: [
                  "Diferenciar autor de hablante lírico",
                  "Identificar emociones en poesía",
                  "Analizar recursos expresivos"
                ],
                habilidades: [
                  "Interpretación emocional",
                  "Análisis poético",
                  "Apreciación literaria"
                ],
                ejemplo: {
                  texto: "¿Quién expresa emociones en el poema?",
                  opciones: ["narrador", "hablante lírico", "autor real", "lector"],
                  correcta: 1,
                  explicacion: "El hablante lírico es la voz que presenta el poema, no necesariamente el autor real."
                }
              }
            ]
          },
          {
            id: "dramatico",
            nombre: "Dramático",
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
            subunidades: [
              {
                nombre: "Tipos",
                contenidos: [
                  "metáfora",
                  "hipérbole",
                  "comparación",
                  "personificación"
                ],
                porqueSeEnseña: "Las figuras literarias enriquecen el lenguaje y crean efectos específicos. Son fundamentales para el análisis de textos literarios.",
                objetivosAprendizaje: [
                  "Identificar metáforas, comparaciones, personificaciones",
                  "Comprender el efecto de las figuras retóricas",
                  "Usar figuras en producción propia"
                ],
                habilidades: [
                  "Análisis literario",
                  "Interpretación simbólica",
                  "Expresión creativa"
                ],
                ejemplo: {
                  texto: "'Sus ojos eran dos estrellas.'",
                  pregunta: "¿Qué figura aparece?",
                  opciones: ["hipérbole", "metáfora", "ironía", "personificación"],
                  correcta: 1,
                  explicacion: "Metáfora: comparación implícita sin usar 'como'. Los ojos se transforman directamente en estrellas."
                },
                ejemplo2: {
                  texto: "'El viento susurraba.'",
                  pregunta: "¿Qué figura aparece?",
                  opciones: ["metáfora", "comparación", "personificación", "ironía"],
                  correcta: 2,
                  explicacion: "Personificación: se atribuyen características humanas (susurrar) a un elemento de la naturaleza (viento)."
                }
              }
            ]
          }
        ]
      }
    ]
  }
];

export default contenidosPAES;

