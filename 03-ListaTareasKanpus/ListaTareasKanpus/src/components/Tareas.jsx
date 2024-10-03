import PropTypes from "prop-types";

export const Tareas = ({ titulo, isChecked, tareas, setTareas }) => {
    const eliminarTarea = (titulo) => { 
        const tareasFiltradas = tareas.filter(tarea => tarea.titulo !== titulo);
        setTareas(tareasFiltradas);
    }

    return (
    <li className={isChecked ? "done" : "todo"}> 
      <label>
        <input type="checkbox" defaultChecked={isChecked} />
        {isChecked ? "DONE" : "TODO"}
      </label>
        {titulo}
        {isChecked && <button onClick={() => eliminarTarea(titulo)}>Eliminar</button>}
        {isChecked || <button>Editar</button>}
      
    </li>
  );
};

Tareas.propTypes = {
  titulo: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  tareas: PropTypes.array.isRequired,
  setTareas: PropTypes.func.isRequired,
};
