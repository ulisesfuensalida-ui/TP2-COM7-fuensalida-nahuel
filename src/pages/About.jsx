import { useState } from "react";

const intereses = ["Desarrollo frontend", "Diseño de interfaces", "Fotografía", "Aprender cosas nuevas"];
const objetivos = [
  "Profundizar en React y su ecosistema.",
  "Sumar TypeScript y testing a mi stack.",
  "Conseguir mi primera experiencia profesional como desarrollador frontend.",
];

function About() {
  // Estado que controla si se muestra el texto extendido o no.
  const [mostrarMas, setMostrarMas] = useState(false);

  return (
    <section className="pagina">
      <h1 className="titulo-pagina">Sobre mí</h1>

      <p className="texto">
        Me gusta resolver problemas con código y aprender cómo funcionan las
        cosas por dentro. Empecé a programar en la facultad y desde entonces no
        paré de construir pequeños proyectos para practicar.
      </p>

      {mostrarMas && (
        <p className="texto about__extra">
          Me interesa especialmente el desarrollo frontend: la parte visual e
          interactiva de las aplicaciones. Fuera de la programación disfruto el
          diseño y la fotografía, dos cosas que me ayudan a pensar mejor la
          parte visual de mis proyectos.
        </p>
      )}

      <button className="boton boton--texto" onClick={() => setMostrarMas(!mostrarMas)}>
        {mostrarMas ? "Ver menos ▲" : "Ver más ▼"}
      </button>

      <div className="bloques">
        <div className="bloque">
          <h2>Formación</h2>
          <p>Tecnicatura en Programación — Universidad Tecnológica Nacional, Facultad Regional Tucumán.</p>
        </div>

        <div className="bloque">
          <h2>Intereses</h2>
          <ul className="lista">
            {intereses.map((interes) => (
              <li key={interes}>{interes}</li>
            ))}
          </ul>
        </div>

        <div className="bloque">
          <h2>Objetivos profesionales</h2>
          <ul className="lista">
            {objetivos.map((objetivo) => (
              <li key={objetivo}>{objetivo}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
