import "./App.css";
import { useContext, useState } from "react";
import { Tareas } from "./components/Tareas";
import { Heady } from "./components/Header";
import { FormuTarea } from "./components/FormuTarea";
import { ThemeProvider,ThemeContext } from "./components/ThemeContext";
import { FormuSignUp } from "./components/FormuSignUp";

function App() {
  return (
<ThemeProvider>
<EnvolvedApp />
</ThemeProvider>
)}

function EnvolvedApp() {

  
  const [tareas,setTareas] = useState([ 
    {
      titulo: "mision aprender React",
      isChecked: true,
    },
    {
      titulo: "mision aprender Java",
      isChecked: false,
    },
    {
      titulo: "mision aprender JS",
      isChecked: true,
    },
  ]);

  
  const { isDark, toggleTheme } = useContext(ThemeContext); // Ahora lo usamos dentro del ThemeProvider por envolver App en EnvolvedApp traballamos millor
  return (
    
    <div className="App">
      
      <h1>Kanpus</h1>
      <Heady tareas={tareas} />
      <button onClick={toggleTheme}>Shadow / Dark</button>
      <ul className={isDark ? 'dark' : 'light'}>
        {tareas.map((tarea, id) => (
          <Tareas {...tarea} key={id} tareas={tareas} setTareas={setTareas} />
        ))}
      </ul>
      <div className="formuTarea">
        <h3>Añadir tarea:</h3>
        <FormuTarea tareas={tareas} setTareas={setTareas} />
      </div>
      <div className="FormuSignUp">
        <h3>Registrarse:</h3>
        <FormuSignUp />
      </div>
    </div>
    
  );
}

export default App;
