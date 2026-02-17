import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="btn btn-outline-primary mb-3 volver-btn"
      onClick={() => navigate(-1)}
    >
      ← Volver
    </button>
  );
}

export default BackButton;
