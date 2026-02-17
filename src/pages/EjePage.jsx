import { useParams, useNavigate } from "react-router-dom"
import contenidosPAES from "../data/contenidos"
import BackButton from "../components/BackButton";

function EjePage() {
    const { id } = useParams()
    const navigate = useNavigate()

    const eje = contenidosPAES.find((e) => e.id === id)

    if (!eje) return <div className="container mt-4">Eje no encontrado</div>

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">{eje.nombre}</h2>

            <div className="list-group">
                {eje.unidades.map(unidad => (
                    <button
                        key={unidad.id}
                        className="list-group-item list-group-item-action"
                        onClick={() => navigate(`/eje/${id}/unidad/${unidad.id}`)}
                    >
                        {unidad.nombre}
                    </button>
                ))}
            </div>
            <BackButton />
      
        </div>
    )
}

export default EjePage
