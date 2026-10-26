# TP2 – Mi Portfolio Multipágina con React Router DOM

**Alumno:** Ulises Nahuel Fuensalida
**Comisión:** 7

## Descripción del proyecto

Evolución del portfolio del TP1 a una aplicación **multipágina** con React y
React Router DOM. Un menú lateral (aside, ~30 % del ancho) permanece visible
mientras el área de contenido (main, ~70 %) cambia según la ruta, sin recargar
la página. La opción activa del menú se resalta con `NavLink`. En pantallas
chicas el menú pasa a una barra superior desplegable.

| Página | Ruta |
| --- | --- |
| Home | `/` |
| Sobre mí | `/about` |
| Habilidades | `/skills` |
| Proyectos | `/projects` |
| Contacto | `/contact` |

Se agregó además una página 404 para rutas inexistentes.

Conceptos aplicados: componentes, JSX, props, arrays con `map()` y `key`,
eventos (`onClick`), `useState`, `BrowserRouter`, `Routes`, `Route` y
`Link`/`NavLink`.

## Estructura

```
src/
├── components/   Header, Sidebar, Footer, ProjectCard, SkillCard
├── pages/        Home, About, Skills, Projects, Contact, NotFound
├── data/         persona.js, projects.js, skills.js
├── App.jsx
├── main.jsx
└── index.css / App.css
```

## Tecnologías utilizadas

- React 18
- Vite
- React Router DOM 6
- JavaScript (ES6+) y JSX
- CSS3

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/ulisesfuensalida-ui/TP2-COM7-fuensalida-nahuel.git
   ```
2. Entrar a la carpeta del proyecto:
   ```bash
   cd proyectos-practicas
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```

## Ejecución local

```bash
npm run dev
```

Luego abrir en el navegador la URL que indica la consola (por defecto
`http://localhost:5173`).

## Repositorio

https://github.com/ulisesfuensalida-ui/TP2-COM7-fuensalida-nahuel.git
