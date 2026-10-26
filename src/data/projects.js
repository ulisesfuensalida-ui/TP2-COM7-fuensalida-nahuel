// Array de datos: cada objeto se pasa como props a <ProjectCard />
// dentro de la página Projects. "detalle" se muestra al presionar el botón.
const projects = [
  {
    id: 1,
    titulo: "Gestor de Tareas",
    descripcion:
      "Aplicación para organizar tareas diarias con categorías, prioridades y filtros. Pensada para practicar manejo de estado en React.",
    tecnologias: ["React", "CSS3", "LocalStorage"],
    estado: "Finalizado",
    detalle:
      "Permite crear, editar y eliminar tareas, agruparlas por categoría y filtrarlas por prioridad. Los datos se guardan en el navegador con LocalStorage.",
    link: "https://github.com/Ulisesfuensalida-ui/gestor-tareas",
  },
  {
    id: 2,
    titulo: "Clima Ahora",
    descripcion:
      "Consulta el clima actual de cualquier ciudad consumiendo una API pública. Incluye búsqueda y manejo de errores.",
    tecnologias: ["React", "Fetch API", "CSS3"],
    estado: "Finalizado",
    detalle:
      "Busca una ciudad, muestra temperatura, humedad y viento, y maneja los casos de ciudad inexistente o falla de red.",
    link: "https://github.com/Ulisesfuensalida-ui/clima-ahora",
  },
  {
    id: 3,
    titulo: "Blog Personal",
    descripcion:
      "Sitio de artículos cortos sobre tecnología, con listado dinámico de posts y vista de detalle.",
    tecnologias: ["React", "Vite", "React Router"],
    estado: "En desarrollo",
    detalle:
      "Está pensado para tener una lista de artículos y una página de detalle por post, usando React Router para navegar entre ellas.",
    link: "https://github.com/Ulisesfuensalida-ui/blog-personal",
  },
];

export default projects;
