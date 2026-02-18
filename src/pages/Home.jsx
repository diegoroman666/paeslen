
import { useNavigate } from "react-router-dom"
import contenidosPAES from "../data/contenidos"

// Array de colores para los ejes
const coloresEjes = [
    'btn-rojo',
    'btn-azul',
    'btn-verde',
    'btn-morado'
]

// Emojis para cada eje
const iconosEjes = [
    '📚',
    '✏️',
    '📝',
    '📖'
]

function Home() {
    const navigate = useNavigate()
    return (
        <div className="container-fluid px-3 px-md-5 mt-4 pb-5">
            <div className="text-center mb-5">
                <h2 className="mb-3">
                    🎓 Ejes Temáticos PAES Lenguaje
                </h2>
                <p className="lead text-muted">
                    ¡Aprende lenguaje de forma interactiva y divertida! 
                    Selecciona un eje temático para comenzar.
                </p>
            </div>

            <div className="row g-4 justify-content-center">
                {contenidosPAES.map((eje, index) => (
                    <div
                        key={eje.id}
                        className="col-12 col-sm-6 col-lg-3"
                    >
                        <div className={`card shadow h-100 border-0 ${index === 0 ? 'border-rojo' : index === 1 ? 'border-azul' : index === 2 ? 'border-verde' : 'border-morado'}`}
                             style={{ borderLeftWidth: '5px' }}>
                            <div className="card-body text-center d-flex flex-column p-4">
                                <div className="mb-3" style={{ fontSize: '3rem' }}>
                                    {iconosEjes[index]}
                                </div>
                                <h5 className="card-title mb-3 fw-bold">
                                    {eje.nombre}
                                </h5>

                                <p className="text-muted flex-grow-1 mb-4">
                                    {eje.descripcion || "Contenido educativo"}
                                </p>

                                <button
                                    className={`btn ${coloresEjes[index % coloresEjes.length]} w-100 py-3`}
                                    onClick={() => navigate(`/eje/${eje.id}`)}
                                >
                                    🚀 Explorar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sección de información adicional */}
            <div className="mt-5 p-4 bg-white rounded-4 shadow-sm">
                <div className="row text-center">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="h3 mb-2">📖</div>
                        <h6 className="fw-bold">Contenido Enriquecido</h6>
                        <small className="text-muted">Aprende con explicaciones detalladas</small>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="h3 mb-2">🎯</div>
                        <h6 className="fw-bold">Ejercicios Interactivos</h6>
                        <small className="text-muted">Practica con preguntas modelo</small>
                    </div>
                    <div className="col-md-4">
                        <div className="h3 mb-2">💡</div>
                        <h6 className="fw-bold">Feedback Inmediato</h6>
                        <small className="text-muted">Aprende de tus errores</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

