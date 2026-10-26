import projects from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

function Projects() {
  return (
    <section className="pagina">
      <h1 className="titulo-pagina">Proyectos</h1>
      <p className="texto">Una selección de proyectos con los que practico lo que voy aprendiendo.</p>

      <div className="projects__grid">
        {projects.map((proyecto) => (
          <ProjectCard key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
