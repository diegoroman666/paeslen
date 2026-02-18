import { useState } from "react"

function EjercicioInteractivo({ ejercicio }) {
  const [seleccionada, setSeleccionada] = useState(null)
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [mostrarModal, setMostrarModal] = useState(false)

  if (!ejercicio) return null

  const manejarClick = (index) => {
    if (!mostrarResultado) {
      setSeleccionada(index)
    }
  }

  const verificarRespuesta = () => {
    setMostrarResultado(true)
    setMostrarModal(true)
  }

  const cerrarModal = () => {
    setMostrarModal(false)
    setSeleccionada(null)
    setMostrarResultado(false)
  }

  const esCorrecta = seleccionada === ejercicio.correcta

  return (
    <>
      {/* Ejercicio en la página */}
      <div className="card ejercicio-card mb-4 border-0 shadow-lg">
        <div className="card-header bg-gradient-ejercicio py-3">
          <h5 className="mb-0 text-white fw-bold">📝 Ejercicio Interactivo</h5>
        </div>
        <div className="card-body">
          <p className="ejercicio-texto mb-4">{ejercicio.texto}</p>
          
          <div className="pregunta-box mb-4">
            <strong>{ejercicio.pregunta}</strong>
          </div>

          <div className="opciones-container">
            {ejercicio.opciones.map((opcion, index) => (
              <div
                key={index}
                className={`opcion-item ${seleccionada === index ? 'seleccionada' : ''} ${
                  mostrarResultado 
                    ? (index === ejercicio.correcta ? 'correcta' : (seleccionada === index ? 'incorrecta' : ''))
                    : ''
                }`}
                onClick={() => manejarClick(index)}
              >
                <span className="opcion-letra">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="opcion-texto">{opcion}</span>
                {mostrarResultado && index === ejercicio.correcta && (
                  <span className="icono-resultado">✅</span>
                )}
                {mostrarResultado && seleccionada === index && index !== ejercicio.correcta && (
                  <span className="icono-resultado">❌</span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button 
              className={`btn ${seleccionada !== null ? 'btn-rojo' : 'btn-secondary'} px-5 py-2`}
              onClick={verificarRespuesta}
              disabled={seleccionada === null}
            >
              {mostrarResultado ? 'Ver Resultado' : 'Verificar Respuesta'}
            </button>
          </div>
        </div>
      </div>

      {/* Modal de resultado */}
      {mostrarModal && (
        <div className="modal-overlay" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className={`modal-header ${esCorrecta ? 'modal-correcto' : 'modal-incorrecto'}`}>
              <h4 className="mb-0">
                {esCorrecta ? '🎉¡Correcto!' : '💡¡Casi lo logras!'}
              </h4>
              <button className="btn-close-modal" onClick={cerrarModal}>✕</button>
            </div>
            <div className="modal-body">
              <div className="resultado-icon mb-3">
                {esCorrecta ? '⭐' : '📚'}
              </div>
              
              <div className="respuesta-correcta-box mb-3">
                <strong>Respuesta correcta:</strong>
                <p className="mb-0 text-success">
                  {String.fromCharCode(65 + ejercicio.correcta)}) {ejercicio.opciones[ejercicio.correcta]}
                </p>
              </div>

              {ejercicio.explicacion && (
                <div className="explicacion-box">
                  <h6 className="fw-bold">💡 Explicación:</h6>
                  <p className="mb-0">{ejercicio.explicacion}</p>
                </div>
              )}

              <div className="tip-box mt-3">
                <small>💪 ¡Sigue practicando para mejorar!</small>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-rojo" onClick={cerrarModal}>
                Continuar Aprendiendo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EjercicioInteractivo

