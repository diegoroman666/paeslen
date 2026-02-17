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

      <div className="list-group">
        {unidad.temas.map(tema => (
          <button
            key={tema.id}
            className="list-group-item list-group-item-action"
            onClick={() =>
              navigate(`/eje/${ejeId}/unidad/${unidadId}/tema/${tema.id}`)
            }
          >
            {tema.nombre}
          </button>
        ))}
        
      </div>
           <BackButton /> 

    </div>
  )
}

export default UnidadPage
