import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">

        {/* LOGO */}
        <Link className="navbar-brand fw-bold" to="/">
          PAES Lenguaje
        </Link>

        {/* BOTON MOBILE */}
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="menu" className="collapse navbar-collapse">

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/buscar">
                Buscar
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/acerca">
                Acerca de
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
