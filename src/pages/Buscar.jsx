import { useState } from "react";
import { useNavigate } from "react-router-dom";
import contenidosPAES from "../data/contenidos";
import BackButton from "../components/BackButton";

function Buscar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Flatten the nested data for searching
  const flattenedData = contenidosPAES.flatMap(eje => [
    { id: eje.id, tipo: 'Eje', nombre: eje.nombre, descripcion: eje.descripcion },
    ...eje.unidades.flatMap(unidad => [
      { id: unidad.id, tipo: 'Unidad', nombre: unidad.nombre, descripcion: `${eje.nombre}`, ejeId: eje.id },
      ...unidad.temas.map(tema => ({
        id: tema.id,
        tipo: 'Tema',
        nombre: tema.nombre,
        descripcion: `${eje.nombre} - ${unidad.nombre}`,
        ejeId: eje.id,
        unidadId: unidad.id
      }))
    ])
  ]);

  const resultados = query
    ? flattenedData.filter(item =>
        item.nombre?.toLowerCase().includes(query.toLowerCase()) ||
        item.descripcion?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const handleItemClick = (item) => {
    if (item.tipo === 'Eje') {
      navigate(`/eje/${item.id}`);
    } else if (item.tipo === 'Unidad') {
      navigate(`/eje/${item.ejeId}/unidad/${item.id}`);
    } else if (item.tipo === 'Tema') {
      navigate(`/eje/${item.ejeId}/unidad/${item.unidadId}/tema/${item.id}`);
    }
  };

  return (
    <div>
      <h2>Buscador de contenidos</h2>

      <input
        className="form-control mb-3"
        placeholder="Buscar tema..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {resultados.map(item => (
        <div 
          key={`${item.tipo}-${item.id}`} 
          className="card mb-2 p-3" 
          style={{ cursor: 'pointer' }}
          onClick={() => handleItemClick(item)}
        >
          <span className="badge bg-secondary me-2">{item.tipo}</span>
          {item.nombre}
        </div>
      ))}

      {query && resultados.length === 0 && (
        <p>No se encontraron resultados</p>
      )}
          <BackButton />

    </div>
    
  );
}

export default Buscar;
