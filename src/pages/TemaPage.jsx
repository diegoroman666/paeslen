import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom"
import contenidosPAES from "../data/contenidos"

function TemaPage() {
  const { ejeId, unidadId, temaId } = useParams()

  const eje = contenidosPAES.find(e => e.id === ejeId)
  const unidad = eje?.unidades.find(u => u.id === unidadId)
  const tema = unidad?.temas.find(t => t.id === temaId)

  if (!tema) return <div className="container mt-4">Tema no encontrado</div>

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-4">{tema.nombre}</h3>

      {tema.subunidades.map((sub, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5>{sub.nombre}</h5>

            <ul>
              {sub.contenidos?.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            {sub.ejemplo && (
              <div className="mt-3">
                <strong>Ejemplo:</strong>
                <p>{sub.ejemplo.texto}</p>
                <p>{sub.ejemplo.pregunta}</p>
              </div>
            )}
            
          </div>
          
        </div>
      ))}<BackButton />
    </div>
  )
}


export default TemaPage
