
/* eslint-disable react/prop-types */

export const Heady = ({ tareas }) => {
  
    
    const pendientes = tareas.filter(tarea => !tarea.isChecked).length;


    if (tareas.length === 0) {
        return <p>Felicidades, No tienes tareas pendientes</p>;
    }

    return (
      <p>{`${tareas.length} tareas, ${pendientes} pendiente${pendientes === 1 ? "":"s"}`}</p>
    );
  }
  