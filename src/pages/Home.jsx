import { Link } from "react-router-dom";
import persona from "../data/persona.js";

// Introducción al contenido del sitio: array + map() + Link.
const secciones = [
  { ruta: "/about", titulo: "Sobre mí", texto: "Quién soy, qué me interesa y hacia dónde voy." },
  { ruta: "/skills", titulo: "Habilidades", texto: "Las tecnologías y herramientas que uso." },
  { ruta: "/projects", titulo: "Proyectos", texto: "Trabajos que hice para practicar y aprender." },
  { ruta: "/contact", titulo: "Contacto", texto: "Dónde encontrarme para charlar o colaborar." },
];

function Home() {
  return (
    <section className="home">
      <p className="home__saludo">¡Hola! Soy</p>
      <h1 className="home__nombre">{persona.nombre}</h1>
      <h2 className="home__profesion">{persona.profesion}</h2>

      <p className="home__descripcion">
        Estudiante de Tecnicatura en Programación (UTN FRT), en proceso de
        aprender React construyendo proyectos como este. Me interesa el
        desarrollo frontend y crear interfaces claras y cuidadas.
      </p>

      <div className="home__botones">
        <Link to="/projects" className="boton boton--primario">
          Ver proyectos
        </Link>
        <Link to="/contact" className="boton boton--secundario">
          Contactarme
        </Link>
      </div>

      <h3 className="home__subtitulo">¿Qué vas a encontrar acá?</h3>
      <div className="home__secciones">
        {secciones.map((seccion) => (
          <Link key={seccion.ruta} to={seccion.ruta} className="home__tarjeta">
            <strong>{seccion.titulo}</strong>
            <span>{seccion.texto}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Home;
