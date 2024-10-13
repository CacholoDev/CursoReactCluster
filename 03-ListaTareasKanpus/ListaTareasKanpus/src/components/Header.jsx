
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { todasCompletadas } from "../ReduxToolKit/Slices/tareaSlice";
export const Heady = ({ tareas }) => {
  
    
    const pendientes = tareas.filter(tarea => !tarea.isChecked).length;
    const dispatch = useDispatch();
    const todasCompletas = () => {
      
      dispatch(todasCompletadas());
    }

    if (tareas.length === 0) {
        return <p>Felicidades, No tienes tareas pendientes</p>;
    }

    return (
      <>
  <div>
      <button onClick={todasCompletas}>Completar todas las Tareas</button>
      <p>{`${tareas.length} tareas, ${pendientes} pendiente${pendientes === 1 ? "":"s"}`}</p>
      </div>
      </>
    );
  }
  