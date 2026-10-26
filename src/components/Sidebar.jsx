import { NavLink } from "react-router-dom";

// Opciones del menú: array + map() para no repetir JSX.
const enlaces = [
  { ruta: "/", texto: "Home" },
  { ruta: "/about", texto: "Sobre mí" },
  { ruta: "/skills", texto: "Habilidades" },
  { ruta: "/projects", texto: "Proyectos" },
  { ruta: "/contact", texto: "Contacto" },
];

// NavLink agrega la clase "activo" automáticamente al enlace de la ruta actual.
// "end" en "/" evita que Home quede marcado en todas las rutas.
function Sidebar({ nombre, profesion, abierto, onNavegar }) {
  return (
    <aside className={`sidebar ${abierto ? "sidebar--abierto" : ""}`}>
      <div className="sidebar__marca">
        <span className="sidebar__avatar">{nombre.charAt(0)}</span>
        <h2 className="sidebar__nombre">{nombre}</h2>
        <p className="sidebar__profesion">{profesion}</p>
      </div>

      <nav className="sidebar__nav">
        {enlaces.map((enlace) => (
          <NavLink
            key={enlace.ruta}
            to={enlace.ruta}
            end={enlace.ruta === "/"}
            onClick={onNavegar}
            className={({ isActive }) =>
              `sidebar__enlace ${isActive ? "activo" : ""}`
            }
          >
            {enlace.texto}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
