import { useState } from "react";

// Componente reutilizable: recibe toda la información del proyecto por props.
function ProjectCard({ proyecto }) {
  const { titulo, descripcion, detalle, tecnologias, estado, link } = proyecto;
  const finalizado = estado === "Finalizado";

  // Estado: muestra u oculta el detalle del proyecto al presionar el botón.
  const [verDetalle, setVerDetalle] = useState(false);

  return (
    <article className="project-card">
      <div className="project-card__encabezado">
        <h3>{titulo}</h3>
        <span className={`badge ${finalizado ? "badge--ok" : "badge--progreso"}`}>
          {estado}
        </span>
      </div>

      <p>{descripcion}</p>

      {verDetalle && <p className="project-card__detalle">{detalle}</p>}

      <ul className="project-card__tecnologias">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>

      <div className="project-card__acciones">
        <button
          className="boton boton--texto"
          onClick={() => setVerDetalle(!verDetalle)}
        >
          {verDetalle ? "Ver menos ▲" : "Ver detalle ▼"}
        </button>
        <a href={link} target="_blank" rel="noreferrer" className="boton boton--secundario">
          Ver repositorio
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
