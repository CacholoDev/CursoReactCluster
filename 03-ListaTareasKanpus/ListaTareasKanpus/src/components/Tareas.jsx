import PropTypes from "prop-types";
import { useState } from "react";

export const Tareas = ({ titulo, isChecked, tareas, setTareas }) => {
  // Estado local para manejar el estado del checkbox
  const [checked, setChecked] = useState(isChecked);

  // Función para eliminar una tarea
  const eliminarTarea = (titulo) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.titulo !== titulo);
    setTareas(tareasFiltradas);
  };

  // Función para manejar el cambio del checkbox
  const handleCheckboxChange = () => {
    setChecked(!checked);
    const tareasActualizadas = tareas.map((tarea) =>
      tarea.titulo === titulo ? { ...tarea, isChecked: !checked } : tarea
    );
    setTareas(tareasActualizadas);
  };

  return (
    <li className={checked ? "done" : "todo"}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {checked ? "DONE" : "TODO"}
      </label>
      {titulo}
      {checked && <button onClick={() => eliminarTarea(titulo)}>Eliminar</button>}
      {!checked && <button>Editar</button>}
    </li>
  );
};

Tareas.propTypes = {
  titulo: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  tareas: PropTypes.array.isRequired,
  setTareas: PropTypes.func.isRequired,
};