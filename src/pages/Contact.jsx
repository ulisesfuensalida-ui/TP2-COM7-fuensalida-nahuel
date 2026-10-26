import persona from "../data/persona.js";

function Contact() {
  const contactos = [
    { etiqueta: "Email", texto: persona.email, href: `mailto:${persona.email}` },
    { etiqueta: "GitHub", texto: persona.github.replace("https://", ""), href: persona.github },
  ];

  return (
    <section className="pagina">
      <h1 className="titulo-pagina">Contacto</h1>
      <p className="texto">¿Querés charlar sobre algún proyecto? Escribime por cualquiera de estos medios.</p>

      <ul className="contacto__lista">
        {contactos.map((c) => (
          <li key={c.etiqueta} className="contacto__item">
            <span className="contacto__etiqueta">{c.etiqueta}</span>
            <a href={c.href} target="_blank" rel="noreferrer">{c.texto}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Contact;
