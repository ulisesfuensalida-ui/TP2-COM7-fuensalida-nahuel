import { Link } from "react-router-dom";

// Se muestra cuando la URL no coincide con ninguna ruta definida.
function NotFound() {
  return (
    <section className="pagina">
      <h1 className="titulo-pagina">Página no encontrada</h1>
      <p className="texto">La dirección que buscás no existe.</p>
      <Link to="/" className="boton boton--primario">Volver al inicio</Link>
    </section>
  );
}

export default NotFound;
