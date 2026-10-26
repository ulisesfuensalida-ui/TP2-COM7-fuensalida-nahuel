// Muestra una habilidad. Recibe nombre y nivel por props.
function SkillCard({ nombre, nivel }) {
  return (
    <div className="skill">
      <div className="skill__encabezado">
        <span>{nombre}</span>
        <span>{nivel}%</span>
      </div>
      <div className="skill__barra">
        <div className="skill__progreso" style={{ width: `${nivel}%` }}></div>
      </div>
    </div>
  );
}

export default SkillCard;
