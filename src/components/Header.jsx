// Barra superior: solo se ve en pantallas chicas y tiene el botón del menú.
// Recibe datos y una función por props.
function Header({ nombre, menuAbierto, onToggleMenu }) {
  return (
    <header className="header">
      <span className="header__logo">{nombre.split(" ")[0]}</span>
      <button
        className="header__boton"
        onClick={onToggleMenu}
        aria-expanded={menuAbierto}
        aria-label="Abrir o cerrar el menú"
      >
        {menuAbierto ? "✕ Cerrar" : "☰ Menú"}
      </button>
    </header>
  );
}

export default Header;
