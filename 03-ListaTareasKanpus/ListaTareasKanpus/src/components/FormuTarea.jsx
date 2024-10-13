import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { creada } from "../ReduxToolKit/Slices/tareaSlice";
import { ThemeContext } from "./ThemeContext"; // Asegúrate de importar el contexto

export const FormuTarea = () => {
  // Estado local para almacenar el título de la nueva tarea
  const [nuevoTitulo, setTitulo] = useState('');
  // Hook de Redux para despachar acciones
  const dispatch = useDispatch();

  const { isDark } = useContext(ThemeContext); // Obtén isDark del contexto


  // Función que se llama cuando se envía el formulario
  const addTarea = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    dispatch(creada(nuevoTitulo)); // Despachar la acción para crear una nueva tarea
    setTitulo(''); // Limpiar el campo de entrada
    console.log(`añadiendo tarea ${nuevoTitulo}`); // Log para depuración
  }

  return (
    <form onSubmit={addTarea}>
      {/* Campo de entrada para el título de la nueva tarea */}
      <input 
        type="text" 
        className={isDark ? 'dark' : 'light'}
        value={nuevoTitulo} 
        onChange={(e) => setTitulo(e.target.value)} 
        placeholder="Nueva tarea" 
      />
      <button type="submit">Añadir</button>
    </form>
  );
}