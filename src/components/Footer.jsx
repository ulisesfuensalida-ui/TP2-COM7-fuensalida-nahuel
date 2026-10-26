function Footer({ nombre }) {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer">
      © {anioActual} {nombre}. Hecho con React + Vite + React Router.
    </footer>
  );
}

export default Footer;
