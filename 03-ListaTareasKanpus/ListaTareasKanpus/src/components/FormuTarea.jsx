import { useState } from "react";
import PropTypes from 'prop-types';

export const FormuTarea = ({tareas,setTareas}) => {
    
    const [nuevoTitulo,setTitulo] = useState('')


     const addTarea = (event) => {
        event.preventDefault();
        const nuevaTarea = { titulo: nuevoTitulo, isChecked: false };
        setTareas([...tareas, nuevaTarea]);
        setTitulo('');
        console.log(`añadiendo tarea ${nuevoTitulo}`);
    }
    return (
    <form onSubmit={addTarea}>
        <input type="text" 
        placeholder="Añadir tarea" 
        value={nuevoTitulo} 
        onChange={(e) => setTitulo(e.target.value)} />
        <button type="submit">Añadir</button>
    </form>
    )
}
FormuTarea.propTypes = {
    tareas: PropTypes.array.isRequired,
    setTareas: PropTypes.func.isRequired,
};