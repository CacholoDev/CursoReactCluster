import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listaCreada } from "../ReduxToolKit/Slices/tableroSlice";
import { Tareas } from "./Tareas";
import { BotonToggle } from "./BotonToggle";

const Tablero = () => {
    const listas = useSelector(state => Object.keys(state.tablero))
    const [nuevaLista, setNuevaLista] = useState("")
    const dispatch = useDispatch()
    
    const crearLista = (event) => {
      event.preventDefault()
      dispatch(listaCreada(nuevaLista))
      setNuevaLista("")
    }
    return (
      <div className="tablero">
        {listas.map(id => <Tareas key={id} id={id} />)}
        <div className="lista">
          <form onSubmit={crearLista}>
            <input type="text" placeholder="Nueva lista" value={nuevaLista} onChange={e => setNuevaLista(e.target.value)} />
            <p><BotonToggle type="submit">Crear lista</BotonToggle></p>
          </form>
        </div>
      </div>
    )
  }
  
  export default Tablero;
  