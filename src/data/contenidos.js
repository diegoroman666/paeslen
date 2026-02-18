
const contenidosPAES = [
  {
    id: "comprension-lectora",
    nombre: "Comprensión Lectora",
    descripcion: "Análisis e interpretación de textos de diversos tipos, desarrollando habilidades para comprender, analizar y evaluar información escrita de manera crítica.",
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
                  {
                    nombre: "Narrador",
                    definicion: "Es la voz que cuenta la historia dentro de un texto narrativo. Es el ente que organiza y presenta los eventos al lector.",
                    descripcion: "El narrador es la instancia textual que relays los hechos de la historia. Puede ser personaje dentro del relato o un observador externo.",
                    definicionFormal: "Es la voz discursiva responsable de relatar los eventos en una narrativa. Se define por su posición respecto a los hechos que cuenta: puede participar como personaje (narrador protagonista), conocerlos desde fuera (narrador testigo) o tener conocimiento total de la historia (narrador omnisciente)."
                  },
                  {
                    nombre: "Personajes",
                    definicion: "Son los seres ficticios que intervienen en la acción narrada, con características físicas, psicológicas y sociales que los definen.",
                    descripcion: "Los personajes son los protagonistas de la historia. Pueden ser principales (centrales en la trama) o secundarios (complementan la narrativa).",
                    definicionFormal: "Son construcciones textuales que representan a seres ficcionales dentro del relato. Se caracterizan por atributos fisicos, psicologicos, morales y sociales que el narrador u otros personajes revelan a lo largo de la narracion."
                  },
                  {
                    nombre: "Tiempo",
                    definicion: "Es el momento o periodo en que transcurren los eventos narrados. Puede ser lineal (cronológico) o no lineal (con flashback/flashforward).",
                    descripcion: "El tiempo narrativo organiza la secuencia de los acontecimientos. El orden temporal puedealterarse mediante analepsis (regresos al pasado) o prolepsis (anticipaciones del futuro).",
                    definicionFormal: "Es la dimension temporal en la que se situan los eventos narrados. Se analiza mediante el orden (secuencia temporal), la duracion (tiempo narrado vs. tiempo de lectura) y la frecuencia (repeticion de eventos)."
                  },
                  {
                    nombre: "Espacio",
                    definicion: "Es el lugar físico o geográfico donde se desarrolla la acción narrada, incluyendo entornos físicos, sociales y psicológicos.",
                    descripcion: "El espacio narrativo puede ser real o imaginario, detalladamente descrito o sugerido. Constituye el escenario donde los personajes actúan.",
                    definicionFormal: "Es el entorno fisico, geografico y simbolico en el que se desarrollan las acciones. El espacio puede funcionar como mero escenario o como elemento significante que refleja estados emocionales, contextos sociales o simboliza aspectos de la narracion."
                  },
                  {
                    nombre: "Conflicto",
                    definicion: "Es el problema o tensión central que enfrentan los personajes y que impulsa la acción narrativa hacia su resolución.",
                    descripcion: "El conflicto es el motor de la narración. Puede ser interno (dentro del personaje) o externo (contra otros personajes, la sociedad, la naturaleza).",
                    definicionFormal: "Es la противоречие fundamental que genera el desarrollo plotetico. Puede ser: persona vs. persona, persona vs. naturaleza, persona vs. sociedad, o persona vs. si mismo. El conflicto genera la peripecia y conduce al climax y desenlace de la historia."
                  }
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
                  {
                    nombre: "Idea principal",
                    definicion: "Es el pensamiento central o fundamental que el autor desea comunicar en un párrafo o texto. Representa la tesis o punto más importante.",
                    descripcion: "La idea principal puede ser explícita (expresada directamente) o implícita (sugerida, deducible del contexto). Es el eje alrededor del cual se organizan las demás ideas.",
                    definicionFormal: "Es la proposicion fundamental que condensa el mensaje esencial de un texto o parrafo. Funciona como centro gravitacional del discurso, alrededor del cual se articulan las ideas secundarias, ejemplos y detalles de apoyo."
                  },
                  {
                    nombre: "Detalles",
                    definicion: "Son información secundaria que apoya, desarrolla o ilustra la idea principal. Incluyen ejemplos, datos, hechos, cifras y descripciones.",
                    descripcion: "Los detalles complementan y enriquecen la idea principal, proporcionando evidencia, especificaciones y contexto que facilitan la comprensión.",
                    definicionFormal: "Son elementos informativos subordinados a la idea principal que cumplen funcion de expansion, ejemplificacion, especificacion o fundamentacion. Los detalles pueden ser: ejemplos concretos, datos estadisticos, citas de autoridad, descripciones o narraciones breves."
                  },
                  {
                    nombre: "Inferencias",
                    definicion: "Es la información no explícita que el lector deduce a partir de lo escrito, combinando datos del texto con conocimientos previos.",
                    descripcion: "Las inferencias permiten completar significados no expresados directamente, interpretar intenciones del autor y establecer conexiones lógicas.",
                    definicionFormal: "Es el proceso cognitivo mediante el cual el lector construye significados que no estan explicitamente declarados en el texto, pero que se derivan logicamente de la informacion presente y el conocimiento previo del lector. Requiere integracion de pistas textuales con esquemas de conocimiento."
                  }
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
                  {
                    nombre: "Tesis",
                    definicion: "Es la posición, postura o punto de vista principal que el autor defendera en un texto argumentativo. Es la afirmación central que se intentará justificar.",
                    descripcion: "La tesis es el eje de todo texto argumentativo. Debe ser clara, especificay susceptible de ser cuestionada o defendida.",
                    definicionFormal: "Es la proposicion fundamental que el emisor presenta como objeto de debate o defensa. Funciona como premisa principal de la argumentacion, de la cual se derivan los argumentos que la respaldan. Se distingue por su caracter controversial y su potencial para generar discusion."
                  },
                  {
                    nombre: "Argumentos",
                    definicion: "Son las razones, justificaciones o motivos que el autor presenta para sostener y demostrar la validez de su tesis.",
                    descripcion: "Los argumentos pueden ser de diversos tipos: racionales (lógicos), emocionales (apelan a sentimientos), éticos (basados en valores) o de autoridad (citando expertos).",
                    definicionFormal: "Son las proposiciones secundarias que se emplean para demostrar o hacer plausible la tesis. Los argumentos se clasifican en: inductivos (particular a general), deductivos (general a particular), logicos (basados en razonamiento) y retoricos (apelan a emocion o etica)."
                  },
                  {
                    nombre: "Evidencia",
                    definicion: "Son los datos, hechos, ejemplos, citas o información concreta que respaldan los argumentos presentados.",
                    descripcion: "La evidencia da credibilidad y fundamento a los argumentos. Puede incluir estadísticas, estudios, testimonios, ejemplos verificables, etc.",
                    definicionFormal: "Es el conjunto de datos, hechos o informacion verificable que se presenta para sustentar la veracidad o validez de los argumentos. Incluye: datos empiricos, investigaciones, testimonios de expertos, ejemplos documentados y citas textuales de fuentes confiables."
                  },
                  {
                    nombre: "Conclusión",
                    definicion: "Es el cierre del texto argumentativo donde se resume la posición del autor y se refuerzan las ideas principales.",
                    descripcion: "La conclusión retoma la tesis inicial, sintetiza los argumentos principales y puede incluir una llamada a la acción o reflexión final.",
                    definicionFormal: "Es la proposicion final que cierra el discurso argumentativo, sintetizando la tesis a la luz de los argumentos presentados. Su funcion es reforzar la posicion del emisor y dejar una impresion duradera en el receptor. Puede incluir: resumen de puntos clave, implicaciones futuras o llamado a la accion."
                  }
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
                  {
                    nombre: "Datos directos",
                    definicion: "Es la información que aparece textual y explícitamente en el texto, sin necesidad de interpretación o deducción.",
                    descripcion: "Los datos directos son aquellos que el autor incluye de manera explícita y que pueden localizarse mediante una lectura atenta.",
                    definicionFormal: "Es la informacion que se encuentra literalmente expresada en el texto, sin mediacion de inferencias o interpretaciones. El lector puede localizarla mediante busqueda directa, localizando palabras clave, fechas, numeros, nombres o hechos declarados."
                  },
                  {
                    nombre: "Detalles específicos",
                    definicion: "Son pieces of information concretas y precisas que complementan la idea principal, como nombres, fechas, lugares, cifras o características.",
                    descripcion: "Los detalles específicos proporcionan precisión y evidencia al texto, permitiendo verificar o ilustrar las ideas principales.",
                    definicionFormal: "Son elementos informativos particularizados que aportan precision y concretez al discurso. Incluyen: datos numericos exactos, nombres propios completos, fechas especificas, ubicaciones geograficas precisas y caracteristicas detalladas de personas, objetos o fenomenos."
                  }
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
                  {
                    nombre: "Significado contextual",
                    definicion: "Es el significado de una palabra o expresión que se deduce del contexto en que aparece, pudiendo diferir de su significado literal o de diccionario.",
                    descripcion: "El significado contextual permite comprender expresiones figuradas, ironías, doubles sens o usos especiales del lenguaje según el entorno textual.",
                    definicionFormal: "Es la acepcion particular de un termino o expresion que se deriva del entorno linguistico y situacional en el que aparece. El contexto proporciona pistas sobre: registro linguistico, tono emocional, intencionalidad comunicativa y relaciones semanticas que determinan el significado."
                  },
                  {
                    nombre: "Intención del autor",
                    definicion: "Es el propósito o objetivo comunicativo que el autor persigue al escribir un texto: informar, convencer, entretener, persuadir, etc.",
                    descripcion: "Identificar la intención del autor permite una comprensión más profunda del texto y una evaluación crítica del mensaje.",
                    definicionFormal: "Es el proposito comunicativo deliberado que guia la produccion textual. Se manifiesta a traves de: seleccion lexical, estructuras gramaticales elegidas, tipo de argumentos empleados y organizacion del discurso. Las intenciones pueden ser: informativas, instructivas, persuasivas, entretenimiento, expresivas o mixture."
                  }
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
                  {
                    nombre: "Postura del autor",
                    definicion: "Es la posición, perspectiva o punto de vista particular que el autor adopta respecto al tema que trata, influye en cómo presenta la información.",
                    descripcion: "La postura del autor revela sus creencias, valores, sesgos y relaciones con el tema, afectando la manera en que se construye el mensaje.",
                    definicionFormal: "Es la posicion ideologica, conceptual o emocional que el emisor asume frente al objeto del discurso. Se manifiesta mediante: seleccion de informacion (que incluye y omite), lexicalizacion (palabras elegidas), modalizacion (grado de certeza) y estructura argumentativa. La postura puede ser explicita o estar sutilmente implícita."
                  },
                  {
                    nombre: "Confiabilidad",
                    definicion: "Es el grado de credibilidad, veracidad y trustworthiness que merece un texto o fuente de información.",
                    descripcion: "Evaluar la confiabilidad implica considerar la autoridad del autor, la verificación de datos, la objetividad y la actualización de la información.",
                    definicionFormal: "Es la valoracion de la credibilidad de una fuente basada en criterios como: competencia y autoridad del autor (formacion, experiencia), verificabilidad de la informacion (citas, datos comprobables), objetividad (presencia de sesgos o intereses), actualidad (fecha de publicacion) y reputacion de la publicadora. La confiabilidad es fundamental en la era de la información."
                  }
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
                  {
                    nombre: "Reemplazo de palabras",
                    definicion: "Es la sustitución de una palabra por otra de significado equivalente o similar en un contexto específico.",
                    descripcion: "El reemplazo de palabras permite variar la expresión sin perder el sentido, enriqueciendo el texto y evitando repeticiones.",
                    definicionFormal: "Es la tecnica linguistica que consiste en sustituir un termino por otro con significado equivalente o muy similar en un contexto dado. El reemplazo puede ser: sinonimico exacto (sinonimos perfectos), sinonimico parcial (sinonimos que comparten nucleo semantico) o sustitucion lexical (hiperonimos, hiponimos o palabras relacionadas)."
                  },
                  {
                    nombre: "Sentido figurado",
                    definicion: "Es el significado de una expresión que no es literal, sino que utiliza recursos lingüísticos para crear efectos especiales o comunicar ideas de manera más expresiva.",
                    descripcion: "El sentido figurado incluye metáforas, comparaciones, personificaciones, hipérboles y otras figuras retóricas que trascienden el significado denotativo.",
                    definicionFormal: "Es la utilizacion del lenguaje en sentido no literal, donde las palabras adquieren significados simbolicos, connotativos o simbolicos que trascienden su definicion denotativa. El sentido figurado se distingue del sentido literal por: uso de figuras retoricas, comunicacion de emociones, creacion de imagenes sensoriales y transmision de significados abstractos."
                  }
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
    descripcion: "Gramática aplicada al texto: estudio del léxico, semántica, conectores y normativa para mejorar la comprensión y producción textual.",
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
                  {
                    nombre: "Sinonimia",
                    definicion: "Es la relación semántica entre palabras que tienen significado equivalente o muy similar en al menos un contexto.",
                    descripcion: "Los sinónimos permiten variar la expresión, evitar repeticiones y precisar matices de significado.",
                    definicionFormal: "Es la relacion lexica en la que dos o mas palabras comparten un nucleo de significado comun, permitiendo la sustitucion mutua en determinados contextos. Se clasifica en: sinonimia absoluta (sustitucion perfecta), sinonimia parcial (sustitucion con matices) y cuasi-sinonimia (sustitucion con restricciones de uso)."
                  },
                  {
                    nombre: "Antonimia",
                    definicion: "Es la relación semántica entre palabras de significado opuesto o complementario.",
                    descripcion: "Los antónimos permiten expresar contrastes, oposiciones y matices dentro del discurso.",
                    definicionFormal: "Es la relacion lexica que conecta palabras con significados semanticamente opuestos. Se distingue entre: antonimia complementaria (verdadero/falso), antonimia gradativa (calido/frio con terminos intermedios) y antonimia reciproca (comprar/vender, vender/comprar)."
                  },
                  {
                    nombre: "Polisemia",
                    definicion: "Es la propiedad de una palabra de tener múltiples significados relacionados pero distintos entre sí.",
                    descripcion: "La polisemia explica cómo una misma palabra puede tener diferentes acepciones según el contexto de uso.",
                    definicionFormal: "Es el fenomeno linguistico por el cual un mismo significante (palabra) puede tener multiples acepciones relacionadas semanticamente pero distintas. Se diferencia de la homonimia en que los significados polisemicos mantienen una conexion historica o conceptual, mientras que los homonimos tienen origenes etymologicos diferentes."
                  }
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
                  {
                    nombre: "Causa",
                    definicion: "Son palabras o expresiones que establecen una relación de causa-efecto entre dos ideas, indicando el motivo o razón de un hecho.",
                    descripcion: "Los conectores de causa introducen la razón o motivo de un evento. Ejemplos: porque, ya que, debido a, puesto que, como, porqe.",
                    definicionFormal: "Son elementos coesivos que establecen una relacion logica de causalidad entre dos proposiciones, donde la segunda expresa la consecuencia o efecto de la primera. Su funcion es explicativa o justificativa. Incluyen: conectores causales (porque, ya que, puesto que), preposiciones causales (a causa de, debido a) y locuciones causales (dado que, en vista de que)."
                  },
                  {
                    nombre: "Consecuencia",
                    definicion: "Son expresiones que indican el resultado o efecto derivado de una causa previamente mencionada.",
                    descripcion: "Los conectores de consecuencia muestran el resultado de algo. Ejemplos: por lo tanto, entonces, por ende, en consecuencia, de modo que.",
                    definicionFormal: "Son elementos linguisticos que introducen el resultado o efecto de una accion o situacion previa. Establecen una relacion de implicacion donde la segunda proposicion es consecuencia de la primera. Incluyen: conectores consecutivos (por lo tanto, en consecuencia), adverbios consecutivos (luego, pues) y locuciones consecutivas (de modo que, de manera que)."
                  },
                  {
                    nombre: "Oposición",
                    definicion: "Son conectores que establecen una relación de contraste, adversidad o contraposición entre dos ideas.",
                    descripcion: "Los conectores de oposición muestran contraste o contradicción. Ejemplos: pero, sin embargo, no obstante, aunque, mientras que, por el contrario.",
                    definicionFormal: "Son elementos coesivos que expresan una relacion semantica de contraste, adversidad o concession entre dos proposiciones. Se clasifican en: conectores adversativos (pero, sin embargo, no obstante), conectores concessivos (aunque, aunq, si bien) y locuciones adverso-concesivas (por el contrario, en cambio)."
                  },
                  {
                    nombre: "Adición",
                    definicion: "Son conectores que incorporan información adicional, sumando o acumulando ideas en una misma dirección.",
                    descripcion: "Los conectores de adición agregan información que complementa o extiende lo anterior. Ejemplos: además, también, igualmente, además de, también.",
                    definicionFormal: "Son elementos coesivos cuya funcion es incorporar nuevos elementos informativos que se suman a los anteriores sin contradiccion ni contraste. Establecen una relacion de adicion o acumulacion. Incluyen: conectores additivos (ademas, tbien, igualmente), preposiciones (ademas de, junto a) y locuciones (aun mas, es mas)."
                  }
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
                  {
                    nombre: "Puntuación",
                    definicion: "Son los signos ortográficos que estructuran el texto, indican pausas, entonación y organizan las ideas dentro de la oración y el párrafo.",
                    descripcion: "Los signos de puntuación incluyen: punto (.), coma (,), punto y coma (;), dos puntos (:), signos de interrogación (¿?), signos de exclamación (¡!), comillas (\"\"), paréntesis (), guiones (-), etc.",
                    definicionFormal: "Es el sistema de signos graficos que cumple funciones sintacticas, prosodicas y comunicativas en el texto escrito. Los signos de puntuacion: delimitan oraciones (punto, interrogacion, exclamacion), organizan componentes oracionales (coma, punto y coma, dos puntos), incluyen citas (comillas, parenthesis) y crean efectos estilisticos. Su uso correcto es esencial para la claridad comunicativa."
                  },
                  {
                    nombre: "Concordancia",
                    definicion: "Es la correspondencia gramatical entre los elementos de una oración: sujeto y verbo, determinante y nombre, adjetivo y nombre.",
                    descripcion: "La concordancia asegura la coherencia gramatical. Incluye: concordancia nominal (artículo-sustantivo-adjetivo) y concordancia verbal (sujeto-verbo).",
                    definicionFormal: "Es la relacion de acuerdo grammatico entre dos o mas elementos linguisticos que comparten genero y numero. Se distingue: concordancia nominal (entre determinante, sustantivo y adjetivo: 'la casa blanca') y concordancia verbal (entre sujeto y verbo: 'las personas estudian'). La falta de concordancia genera agramaticalidad."
                  },
                  {
                    nombre: "Ortografía funcional",
                    definicion: "Es el conjunto de reglas que garantizan la correcta escritura de las palabras, incluyendo acentuación, división silábica y uso de letras.",
                    descripcion: "La ortografía funcional se centra en escritura correcta para la comunicación efectiva, no en reglas teórico-lingüísticas.",
                    definicionFormal: "Es el conjunto de convenciones graficas que rigen la escritura correcta de las palabras. Incluye: ortografia acentual (colocacion del acento grafico), ortografia literal (uso correcto de b/v, h, j/g, etc.), division silabica al final de linea y uso de mayusculas. La ortografia funcional prioriza la precision comunicativa."
                  }
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
    descripcion: "Desarrollo de habilidades para organizar, estructurar y producir textos coherentes con propósito comunicativo definido.",
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
                  {
                    nombre: "Orden lógico",
                    definicion: "Es la secuencia progresiva de ideas que sigue un desarrollo natural y comprensible, donde cada elemento se deriva del anterior.",
                    descripcion: "El orden lógico facilita la comprensión del lector, presentando la información de manera que pueda seguir el razonamiento del autor.",
                    definicionFormal: "Es la disposicion secuencial de las ideas segun criterios de causalidad, temporalidad, importancia o espacialidad. El orden logico puede ser: cronologico (secuencia temporal), causal (causa-efecto), espacial (ubicacion fisica), importancial (de mayor a menor relevancia) o problem-solucion (presentacion-resolucion)."
                  },
                  {
                    nombre: "Progresión temática",
                    definicion: "Es el avance ordenado del texto desde un tema inicial hacia nuevos subtemas, manteniendo un hilo conductor claro.",
                    descripcion: "La progresión temática asegura que el texto avance y no se estanque, introduciendo información nueva de manera sistemática.",
                    definicionFormal: "Es el mecanismo discursivo por el cual el texto desarrolla su tema central mediante la introduccion progresiva de informacion nueva. Se construye mediante: tematizacion (presentacion del tema), rematizacion (comentario sobre el tema) y encadenamiento (cada rema se convierte en nuevo tema). Mantiene la coherencia y el interes del lector."
                  }
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
                  {
                    nombre: "Informar",
                    definicion: "Es el propósito comunicativo cuyo objetivo es transmitir conocimientos, datos o noticias de manera objetiva y clara.",
                    descripcion: "Los textos informativos buscan comunicar hechos, datos o conceptos sin influir en la opinión del receptor.",
                    definicionFormal: "Es la intencionalidad comunicativa orientada a la transmision de contenidos factuales o conceptuales. Se caracteriza por: objetividad, verificabilidad de la informacion, organizacion clara y ausencia de apelos emocionales. Incluye: noticias, reportajes, articulos cientificos, enciclopedias y manuales informativos."
                  },
                  {
                    nombre: "Persuadir",
                    definicion: "Es el propósito comunicativo que busca influir en las creencias, actitudes o comportamientos del receptor.",
                    descripcion: "Los textos persuasivos presentan argumentos y evidencias para convencer al lector de adoptar una posición o realizar una acción.",
                    definicionFormal: "Es la intencionalidad comunicativa dirigida a modificar las creencias, actitudes o conductas del receptor mediante el uso de argumentos, emociones o valores. Se caracteriza por: presentacion de una tesis, uso de evidencias, apelos emocionales y racionales, y llamada a la accion. Incluye: publicidad, discursos politicos, ensayos argumentativos."
                  },
                  {
                    nombre: "Expresar",
                    definicion: "Es el propósito comunicativo centrado en manifestar emociones, sentimientos, estados de ánimo o experiencias subjetivas.",
                    descripcion: "Los textos expresivos priorizan la comunicación de la interioridad del emisor, su mundo emocional y subjetivo.",
                    definicionFormal: "Es la intencionalidad comunicativa cuya funcion principal es la manifestacion de la subjetividad del emisor. Se caracteriza por: predominio de la primera persona, lenguaje connotativo, expresion emocional y funcion poetica. Incluye: poesia lirica, diarios intimos, cartas personales y textos autobiograficos."
                  }
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
    descripcion: "Estudio de la literatura, géneros literarios, recursos y figuras retóricas propias de la expresión artística mediante la palabra.",
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
                contenidos: [
                  {
                    nombre: "Cuento",
                    definicion: "Es un género narrativo breve que presenta una historia condensada con pocos personajes, una acción centrada y un desenlace definido.",
                    descripcion: "El cuento se caracteriza por su brevedad, intensidad narrativa y efecto único. Suele tener un único clímax y una extensión que permite lectura en una sesión.",
                    definicionFormal: "Es una forma narrativa breve caracterizada por: extension limitada (generalmente menos de 10,000 palabras), economia narrativa (cada elemento contribuye a la trama), unidad de accion (una linea argumental principal), concentracion temporal y espacial, y efecto de cierre definitivo. El cuento moderno se diferencia del relato por su complejidad estructural."
                  },
                  {
                    nombre: "Novela",
                    definicion: "Es un género narrativo de extensión variable que desarrolla múltiples personajes, tramas y ambientes a lo largo de una historia compleja.",
                    descripcion: "La novela permite mayor profundidad en el desarrollo de personajes, tramas paralelas y exploración extensiva de temas y contextos.",
                    definicionFormal: "Es una forma narrativa extensa que se distingue del cuento por: extension considerable (mas de 20,000 palabras tipicamente), complejidad estructural (multiples tramas, personajes y lineas temporales), desarrollo profundo de personajes, variedad de registros y voces, y exploracion exhaustiva de temas y contextos. La novela permite la coexistencia de diversos estilos y perspectivas."
                  }
                ],
                porqueSeEnseña: "El texto narrativo es fundamental en la comprensión lectora porque permite al estudiante identificar las voces narrativas, distinguir la perspectiva del autor y comprender cómo se construyen las historias. Esto es esencial para el análisis de obras literarias y textos informativos.",
                objetivosAprendizaje: [
                  "Identificar las características del cuento y la novela",
                  "Comprender la estructura narrativa",
                  "Analizar elementos de la narración"
                ],
                habilidades: [
                  "Análisis literario",
                  "Comprensión lectora",
                  "Interpretación de obras"
                ],
                ejemplo: {
                  texto: "El viento soplaba con fuerza entre los árboles antiguos del bosque.",
                  pregunta: "¿Qué tipo de texto narrativo es más probable que contenga esta descripción?",
                  opciones: ["Cuento", "Novela", "Artículo periodístico", "Poesía"],
                  correcta: 1,
                  explicacion: "La descripción detallada del ambiente es más propia de la novela, que desarrolla más los escenarios."
                }
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
                  {
                    nombre: "Hablante lírico",
                    definicion: "Es la voz que pronuncia el poema, distinta del autor real. Es una instancia lírica que expresa sentimientos, emociones y percepciones.",
                    descripcion: "El hablante lírico puede ser un personaje, una entidad abstracta o una máscara poética. No debe confundirse con el autor biográfico.",
                    definicionFormal: "Es la instancia discursiva que enuncia el poema, constituida por el conjunto de marcas textuales que definen una voz poetica particular. Se distingue del autor real por su naturaleza ficcional. El hablante lyrico puede: adoptar diversas perspectivas (primera, segunda, tercera persona), expresar estados emocionales subjetivos, y crear una presencia poetica especifica."
                  },
                  {
                    nombre: "Figuras literarias",
                    definicion: "Son recursos lingüísticos que embellecen el lenguaje, creando efectos sonoros, visuales o semánticos especiales.",
                    descripcion: "Las figuras literarias incluyen recursos como metáfora, símil, personificación, hipérbole, aliteración, etc.",
                    definicionFormal: "Son procedimientos linguisticos que alteran el uso ordinario del lenguaje con fines esteticos o expresivas. Se clasifican en: figuras de diccion (aliteracion, onomatopeya), figuras de pensamiento (metáfora, símil, personificación), figuras de construccion (anáfora, elipsis) y figuras de puntuacion (aposiopesis). Su funcion es enriquecer la expresion poetica."
                  }
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
                  {
                    nombre: "Diálogo",
                    definicion: "Es la forma de comunicación verbal entre dos o más personajes en una obra dramática.",
                    descripcion: "El diálogo en el teatro sirve para revelar caracteres, desarrollar la acción y comunicar el conflicto dramático.",
                    definicionFormal: "Es la forma discursiva caracteristica del genero dramatica, consistente en el intercambio verbal entre personajes. El dialogo teatral cumple funciones de: caracterizacion de personajes (a traves de su habla), desarrollo de la accion, transmision de informacion al espectador, y creacion de conflicto dramaturgico. Se diferencia del dialogo narrativo por su dimension performativa."
                  },
                  {
                    nombre: "Conflicto",
                    definicion: "Es la tensión o problema central que enfrentan los personajes y que impulsa la acción dramática.",
                    descripcion: "El conflicto dramático puede ser interno (del personaje consigo mismo) o externo (contra otros personajes, la sociedad, fuerzas naturales).",
                    definicionFormal: "Es el elemento estructurador de la accion dramatica, constituido por la противоречие que enfrentan los personajes. El conflicto genera la intriga y mantiene el interes del espectador. Se clasifica en: conflicto interpersonal (entre personajes), conflicto social (personaje vs. sociedad), conflicto natural (personaje vs. naturaleza), y conflicto interno (dilema moral o psicologico)."
                  }
                ],
                porqueSeEnseña: "El género dramático presenta historias a través de la acción y el diálogo. Comprender sus elementos es esencial para el análisis teatral.",
                objetivosAprendizaje: [
                  "Identificar elementos del texto dramático",
                  "Comprender la función del diálogo",
                  "Analizar el conflicto en obras teatrales"
                ],
                habilidades: [
                  "Análisis teatral",
                  "Comprensión de estructuras",
                  "Interpretación de acción dramática"
                ],
                ejemplo: {
                  texto: "-¿Por qué me mintiste? -No tenía otra opción.",
                  pregunta: "¿Qué elemento dramático predomina?",
                  opciones: ["Narrador", "Diálogo", "Descripción", "Monólogo"],
                  correcta: 1,
                  explicacion: "El intercambio verbal entre personajes constituye el diálogo dramático."
                }
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
                  {
                    nombre: "Metáfora",
                    definicion: "Es una figura retórica que establece una comparación implícita, identificando dos elementos sin usar conectores comparativos como 'como'.",
                    descripcion: "La metáfora crea una transferencia de significado entre dos términos, atribuyendo cualidades de uno a otro.",
                    definicionFormal: "Es una figura de pensamiento que establece una identificacion directa entre dos terminos sin explicitar la comparacion. A diferencia del simil, no utiliza nexos comparativos. La metfora crea una transferencia de significado (transfer) que enriquece la expresion. Ejemplo: 'Sus ojos eran estrellas' (identifica ojos con estrellas)."
                  },
                  {
                    nombre: "Hipérbole",
                    definicion: "Es una figura retórica que exagera cualidades o cantidades para producir un efecto enfático o expresivo.",
                    descripcion: "La hipérbole amplifica o minimiza exageradamente algo para generar impacto emocional o énfasis.",
                    definicionFormal: "Es una figura de pensamiento que consiste en la exageracion deliberada de una cualidad o cantidad. Su funcion es enfatizar, generar impacto emocional o crear efectos comicos. La hiperbole no debe tomarse literalmente. Se clasifica en: hiperbole de aumento ('te lo he dicho mil veces') y hiperbole de disminucion ('no tengo ni un centavo')."
                  },
                  {
                    nombre: "Comparación",
                    definicion: "Es una figura retórica que establece una relación de similitud entre dos elementos utilizando conectores como 'como', 'tal como', 'semejante a'.",
                    descripcion: "La comparación (también llamada símil) crea imágenes y analogías para enriquecer la expresión.",
                    definicionFormal: "Es una figura de pensamiento que establece una relacion de similitud entre dos elementos mediante conectores especificos. A diferencia de la метафора, la comparacion explicita la analogia. Se estructura como: termino comparado + nexo comparativo + termino comparante. Ejemplo: 'fresco como la mañana'."
                  },
                  {
                    nombre: "Personificación",
                    definicion: "Es una figura retórica que atribuye características humanas a seres inanimados, animales, conceptos abstractos o fuerzas naturales.",
                    descripcion: "La personificación da vida y emociones a elementos no humanos, creando una conexión más emotiva con el lector.",
                    definicionFormal: "Es una figura de pensamiento que consiste en atribuir cualidades, acciones o emociones humanas a seres inanimados, animales, fenomenos naturales o conceptos abstractos. Es una forma de метафора donde el termino no humano recibe caracteristicas antropomorficas. Ejemplo: 'el viento susurraba' o 'la noche dormia'."
                  }
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

