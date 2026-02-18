import { useNavigate } from "react-router-dom"

import contenidosPAES from "../data/contenidos"

// Array de colores para los ejes
const coloresEjes = [
    'btn-rojo',
    'btn-azul',
    'btn-verde',
    'btn-morado'
]

function Home() {
    const navigate = useNavigate()
    return (
        <div className="container-fluid px-3 px-md-5 mt-4">
            <h2 className="text-center mb-4">
                🎓 Ejes Temáticos PAES Lenguaje
            </h2>

            <div className="row g-4">
                {contenidosPAES.map((eje, index) => (
                    <div
                        key={eje.id}
                        className="col-12 col-sm-6 col-lg-3"
                    >
                        <div className={`card shadow h-100 border-0 ${index === 0 ? 'border-rojo' : index === 1 ? 'border-azul' : index === 2 ? 'border-verde' : 'border-morado'}`}>
                            <div className="card-body text-center d-flex flex-column">
                                <h5 className="card-title mb-3">
                                    {eje.nombre}
                                </h5>

                                <p className="text-muted flex-grow-1">
                                    {eje.descripcion || "Contenido educativo"}
                                </p>

                                <button
                                    className={`btn ${coloresEjes[index % coloresEjes.length]} w-100`}
                                    onClick={() => navigate(`/eje/${eje.id}`)}
                                >
                                    🚀 Explorar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home

