import "./App.css";
import { useContext, useState } from "react";
import { Tareas } from "./components/Tareas";
import { Heady } from "./components/Header";
import { FormuTarea } from "./components/FormuTarea";
import { ThemeProvider,ThemeContext } from "./components/ThemeContext";
import { FormuSignUp } from "./components/FormuSignUp";
import { BotonToggle } from "./components/BotonToggle";
import { PanelRedux } from "./components/PanelRedux";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
<Provider store={store}>
<ThemeProvider>
<EnvolvedApp />
</ThemeProvider>
</Provider>
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

  const mensaje = {
    dark: "Dark",
    light: "Light"
  };
  
  const { isDark, toggleTheme } = useContext(ThemeContext); // Ahora lo usamos dentro del ThemeProvider por envolver App en EnvolvedApp traballamos millor
  return (
    <div className="App">
      <div>
      <PanelRedux />
      </div>
      <h1>Kanpus</h1>
      <Heady tareas={tareas} />
      <BotonToggle mensaje={mensaje} onClick={toggleTheme}/>

      <ul className={isDark ? 'dark' : 'light'}>
        {tareas.map((tarea, id) => (
          <Tareas {...tarea} key={id} tareas={tareas} setTareas={setTareas} />
        ))}
      </ul>
      <div className="formuTarea">
        <h3>Añadir tarea:</h3>
        <FormuTarea tareas={tareas} setTareas={setTareas} />
      </div>
      <div className={isDark ? 'FormuSignUp dark' : 'FormuSignUp light'}>
      <h3>Registrarse:</h3>
        <FormuSignUp />
      </div>
    </div>
    
  );
}

export default App;
