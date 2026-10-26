import skills from "../data/skills.js";
import SkillCard from "../components/SkillCard.jsx";

function Skills() {
  return (
    <section className="pagina">
      <h1 className="titulo-pagina">Habilidades</h1>
      <p className="texto">Tecnologías y herramientas con las que trabajo, con un nivel de dominio aproximado.</p>

      <div className="skills__lista">
        {skills.map((skill) => (
          <SkillCard key={skill.id} nombre={skill.nombre} nivel={skill.nivel} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
