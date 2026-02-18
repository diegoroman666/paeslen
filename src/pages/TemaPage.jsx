
import BackButton from "../components/BackButton";
import EjercicioInteractivo from "../components/EjercicioInteractivo";
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

// Colores para los títulos
const coloresTitulos = [
    'subtitulo-rojo',
    'subtitulo-azul',
    'subtitulo-verde',
    'subtitulo-morado',
    'subtitulo-naranja',
    'subtitulo-cyan'
]

// Componente para mostrar un contenido individual con sus definiciones
function ContenidoItem({ contenido }) {
    // Verificar si es un objeto con definiciones o solo un string
    if (typeof contenido === 'object' && contenido.nombre) {
        return (
            <div className="mb-4 p-3 bg-light rounded-3">
                <h6 className="fw-bold text-primary mb-2">{contenido.nombre}</h6>
                
                {contenido.definicion && (
                    <div className="mb-2">
                        <small className="text-muted fw-bold d-block">Definición:</small>
                        <small className="ms-2">{contenido.definicion}</small>
                    </div>
                )}
                
                {contenido.descripcion && (
                    <div className="mb-2">
                        <small className="text-muted fw-bold d-block">Descripción:</small>
                        <small className="ms-2">{contenido.descripcion}</small>
                    </div>
                )}
                
                {contenido.definicionFormal && (
                    <div className="mb-2">
                        <small className="text-muted fw-bold d-block">Definición Formal:</small>
                        <small className="ms-2 fst-italic">{contenido.definicionFormal}</small>
                    </div>
                )}
            </div>
        );
    }
    
    // Si es solo un string, mostrar como antes
    return <li className="mb-1">{contenido}</li>;
}

function TemaPage() {
  const { ejeId, unidadId, temaId } = useParams()

  const eje = contenidosPAES.find(e => e.id === ejeId)
  const unidad = eje?.unidades.find(u => u.id === unidadId)
  const tema = unidad?.temas.find(t => t.id === temaId)

  if (!tema) return <div className="container mt-4">Tema no encontrado</div>

  // Obtener el primer subtema que tenga información de enriquecimiento
  const primerSubenriquecido = tema.subunidades?.find(sub => 
    sub.porqueSeEnseña || (sub.objetivosAprendizaje?.length > 0) || (sub.habilidades?.length > 0)
  )

  return (
    <div className="container mt-4 pb-5">
      <h3 className="text-center mb-4 fw-bold">📖 {tema.nombre}</h3>

      {/* ¿Por qué se enseña? - Información general del tema */}
      {(tema.porqueSeEnseña || primerSubenriquecido?.porqueSeEnseña) && (
        <div className="seccion-porque mb-4 fade-in">
          <h5 className="titulo-seccion">📚 ¿Por qué se enseña este contenido?</h5>
          <p className="mb-0">{tema.porqueSeEnseña || primerSubenriquecido?.porqueSeEnseña}</p>
        </div>
      )}

      {/* Objetivos de aprendizaje */}
      {(tema.objetivosAprendizaje?.length > 0 || primerSubenriquecido?.objetivosAprendizaje?.length > 0) && (
        <div className="seccion-aprendizaje mb-4 fade-in">
          <h5 className="titulo-seccion">🎯 ¿Qué aprenderás?</h5>
          <ul className="mb-0">
            {(tema.objetivosAprendizaje || primerSubenriquecido?.objetivosAprendizaje || []).map((obj, i) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Habilidades que mejorarás */}
      {(tema.habilidades?.length > 0 || primerSubenriquecido?.habilidades?.length > 0) && (
        <div className="seccion-habilidades mb-4 fade-in">
          <h5 className="titulo-seccion">💪 Habilidades que mejorarás</h5>
          <ul className="mb-0">
            {(tema.habilidades || primerSubenriquecido?.habilidades || []).map((hab, i) => (
              <li key={i}>{hab}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Contenido del tema - Grid hacia abajo */}
      <div className="row g-4">
        {tema.subunidades.map((sub, index) => (
          <div key={index} className="col-12">
            <div className={`card mb-3 ${coloresSubunidades[index % coloresSubunidades.length]} shadow-sm`}>
              <div className="card-body">
                <h5 className={`${coloresTitulos[index % coloresTitulos.length]} mb-3`}>
                    {sub.nombre}
                </h5>

                {/* Lista de contenidos con definiciones */}
                <div className="mb-4">
                    {sub.contenidos?.map((c, i) => (
                        <ContenidoItem key={i} contenido={c} />
                    ))}
                </div>

                {/* Ejercicio Interactivo */}
                {sub.ejemplo && (
                    <EjercicioInteractivo 
                        ejercicio={{
                            texto: sub.ejemplo.texto,
                            pregunta: sub.ejemplo.pregunta,
                            opciones: sub.ejemplo.opciones,
                            correcta: sub.ejemplo.correcta,
                            explicacion: sub.ejemplo.explicacion
                        }}
                    />
                )}
                
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-4 mb-5">
        <BackButton />
      </div>
    </div>
  )
}


export default TemaPage

