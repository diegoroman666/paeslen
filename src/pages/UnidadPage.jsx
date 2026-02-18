import { useParams, useNavigate } from "react-router-dom"
import contenidosPAES from "../data/contenidos"
import BackButton from "../components/BackButton";

function UnidadPage() {
  const { ejeId, unidadId } = useParams()
  const navigate = useNavigate()

  const eje = contenidosPAES.find(e => e.id === ejeId)
  const unidad = eje?.unidades.find(u => u.id === unidadId)

  if (!unidad) return <div className="container mt-4">Unidad no encontrada</div>

  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">{unidad.nombre}</h3>

      <div className="row g-3">
        {unidad.temas.map(tema => (
          <div key={tema.id} className="col-12">
            <div 
              className="card h-100 shadow-sm card-eje"
              style={{cursor: 'pointer'}}
              onClick={() =>
                navigate(`/eje/${ejeId}/unidad/${unidadId}/tema/${tema.id}`)
              }
            >
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center">{tema.nombre}</h5>
                <p className="card-text text-muted small text-center">
                  {tema.objetivosAprendizaje ? `${tema.objetivosAprendizaje.length} objetivos de aprendizaje` : 'Ver contenido'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <BackButton />
      </div>
    </div>
  )
}

export default UnidadPage

