import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom"
import contenidosPAES from "../data/contenidos"

// Colores para las subunidades
const coloresSubunidades = [
    'border-rojo',
    'border-azul',
    'border-verde',
    'border-morado',
    'border-naranja',
    'border-cyan'
]

function TemaPage() {
  const { ejeId, unidadId, temaId } = useParams()

  const eje = contenidosPAES.find(e => e.id === ejeId)
  const unidad = eje?.unidades.find(u => u.id === unidadId)
  const tema = unidad?.temas.find(t => t.id === temaId)

  if (!tema) return <div className="container mt-4">Tema no encontrado</div>

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">📖 {tema.nombre}</h3>

      {/* ¿Por qué se enseña? */}
      {tema.porqueSeEnseña && (
        <div className="seccion-porque mb-4">
          <h5 className="titulo-seccion">📚 ¿Por qué se enseña este contenido?</h5>
          <p>{tema.porqueSeEnseña}</p>
        </div>
      )}

      {/* Objetivos de aprendizaje */}
      {tema.objetivosAprendizaje && tema.objetivosAprendizaje.length > 0 && (
        <div className="seccion-aprendizaje mb-4">
          <h5 className="titulo-seccion">🎯 ¿Qué aprenderás?</h5>
          <ul>
            {tema.objetivosAprendizaje.map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Habilidades que mejorarás */}
      {tema.habilidades && tema.habilidades.length > 0 && (
        <div className="seccion-habilidades mb-4">
          <h5 className="titulo-seccion">💪 Habilidades que mejorarás</h5>
          <ul>
            {tema.habilidades.map((hab, i) => (
              <li key={i}>{hab}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contenido del tema - Grid hacia abajo */}
      <div className="row g-3">
        {tema.subunidades.map((sub, index) => (
          <div key={index} className="col-12">
            <div className={`card mb-3 ${coloresSubunidades[index % coloresSubunidades.length]}`}>
              <div className="card-body">
                <h5 className="text-primary">{sub.nombre}</h5>

                <ul>
                  {sub.contenidos?.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>

                {sub.ejemplo && (
                  <div className="mt-3 p-3 bg-light rounded border-start border-4 border-danger">
                    <strong>📝 Ejemplo:</strong>
                    <p className="mb-1"><em>"{sub.ejemplo.texto}"</em></p>
                    <p className="mb-2"><strong>Pregunta:</strong> {sub.ejemplo.pregunta}</p>
                    <div>
                      <strong>Opciones:</strong>
                      <ul>
                        {sub.ejemplo.opciones.map((op, i) => (
                          <li key={i}>{op}</li>
                        ))}
                      </ul>
                    </div>
                    {sub.ejemplo.explicacion && (
                      <div className="mt-2 p-2 bg-white rounded border-start border-3 border-info">
                        <strong>💡 Explicación:</strong>
                        <p className="mb-0 mt-1">{sub.ejemplo.explicacion}</p>
                      </div>
                    )}
                  </div>
                )}
                
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-3">
        <BackButton />
      </div>
    </div>
  )
}


export default TemaPage

