import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import persona from "./data/persona.js";
import "./App.css";

function App() {
  // Estado: controla si el menú lateral está desplegado en pantallas chicas.
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="layout">
      <Header
        nombre={persona.nombre}
        menuAbierto={menuAbierto}
        onToggleMenu={() => setMenuAbierto(!menuAbierto)}
      />

      {/* El aside (30%) queda fuera de <Routes>, por eso siempre es visible. */}
      <Sidebar
        nombre={persona.nombre}
        profesion={persona.profesion}
        abierto={menuAbierto}
        onNavegar={() => setMenuAbierto(false)}
      />

      {/* El main (70%): <Routes> decide qué página se dibuja según la URL. */}
      <main className="contenido">
        <div className="contenido__pagina">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer nombre={persona.nombre} />
      </main>
    </div>
  );
}

export default App;
