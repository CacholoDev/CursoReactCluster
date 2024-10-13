import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { alternada, deleteTarea, modificada } from "../ReduxToolKit/Slices/tareaSlice";
import { useState } from "react";

export const Tareas = ({ id,titulo, isChecked }) => {
  // Estado local para manejar el estado del checkbox
  const dispatch = useDispatch();


  // Función para eliminar una tarea
  const eliminarTarea = (id) => {
    dispatch(deleteTarea(id));
  };

//funcion para modificiar tarea
const [nuevoTitulo, setNuevoTitulo] = useState(titulo);
  const handleModificaTarea = () => {
    dispatch(modificada({ id, titulo: nuevoTitulo }));
  };

  // Función para manejar el cambio del checkbox
  const handleCheckboxChange = (id) => {
    dispatch(alternada(id))
  };

  return (
    <li className={isChecked ? "done" : "todo"}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheckboxChange(id)}
          />
        {isChecked ? "DONE" : "TODO"}
      </label>

      <input type="text" value={nuevoTitulo} onChange={(e) => setNuevoTitulo(e.target.value)}></input>
      
      {isChecked && <button onClick={() => eliminarTarea(id)}>Eliminar</button>}
      {!isChecked && <button onClick={() => handleModificaTarea()}>Editar</button>}
    </li>
  );
};

Tareas.propTypes = {
  id: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,

};