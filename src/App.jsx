import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Buscar from "./pages/Buscar";
import Acerca from "./pages/Acerca";
import EjePage from "./pages/EjePage";
import UnidadPage from "./pages/UnidadPage";
import TemaPage from "./pages/TemaPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">

      <Navbar />

      <main className="flex-grow-1 container mt-4">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buscar" element={<Buscar />} />
          <Route path="/acerca" element={<Acerca />} />

          <Route path="/eje/:id" element={<EjePage />} />
          <Route path="/eje/:ejeId/unidad/:unidadId" element={<UnidadPage />} />
          <Route path="/eje/:ejeId/unidad/:unidadId/tema/:temaId" element={<TemaPage />} />
        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;
