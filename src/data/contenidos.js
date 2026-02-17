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
                ]
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
