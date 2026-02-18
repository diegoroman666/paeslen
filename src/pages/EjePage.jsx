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

            <div className="row g-3">
                {eje.unidades.map(unidad => (
                    <div key={unidad.id} className="col-12">
                        <div 
                            className="card h-100 shadow-sm card-eje"
                            style={{cursor: 'pointer'}}
                            onClick={() => navigate(`/eje/${id}/unidad/${unidad.id}`)}
                        >
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title text-center">{unidad.nombre}</h5>
                                <p className="card-text text-muted small text-center">
                                    {unidad.temas ? `${unidad.temas.length} temas` : 'Ver contenido'}
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

export default EjePage

