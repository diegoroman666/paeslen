import { useState } from "react"
import contenidosPAES from "../data/contenidos"

function Buscador() {
  const [query, setQuery] = useState("")
  const [resultados, setResultados] = useState([])

  const buscar = () => {
    if (!query.trim()) return setResultados([])

    const q = query.toLowerCase()
    let res = []

    contenidosPAES.forEach(eje => {
      // eje
      if (eje.nombre.toLowerCase().includes(q)) {
        res.push(`Eje: ${eje.nombre}`)
      }

      eje.unidades.forEach(unidad => {
        // unidad
        if (unidad.nombre.toLowerCase().includes(q)) {
          res.push(`Unidad: ${unidad.nombre}`)
        }

        unidad.temas.forEach(tema => {
          // tema
          if (tema.nombre.toLowerCase().includes(q)) {
            res.push(`Tema: ${tema.nombre}`)
          }

          tema.subunidades?.forEach(sub => {
            // subunidad
            if (sub.nombre?.toLowerCase().includes(q)) {
              res.push(`Subunidad: ${sub.nombre}`)
            }

            // contenidos
            sub.contenidos?.forEach(con => {
              if (con.toLowerCase().includes(q)) {
                res.push(`Contenido: ${con}`)
              }
            })
          })
        })
      })
    })

    setResultados(res)
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Buscar contenido</h2>

      <div className="input-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar eje, tema o contenido..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button
          className="btn btn-duo"
          onClick={buscar}
        >
          Buscar
        </button>
      </div>

      {resultados.length === 0 && query && (
        <p>No se encontraron resultados.</p>
      )}

      {resultados.map((r, i) => (
        <div key={i} className="card p-3 mb-2 shadow-sm">
          {r}
        </div>
      ))}
    </div>
  )
}

export default Buscador
