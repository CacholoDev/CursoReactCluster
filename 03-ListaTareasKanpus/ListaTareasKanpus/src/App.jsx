import "./App.css";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { Tareas } from "./components/Tareas";
import { Heady } from "./components/Header";
import { FormuTarea } from "./components/FormuTarea";
import { ThemeProvider, ThemeContext } from "./components/ThemeContext";
import { FormuSignUp } from "./components/FormuSignUp";
import { BotonToggle } from "./components/BotonToggle";
import { Provider } from "react-redux";
import { store } from "./ReduxToolKit/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <EnvolvedApp />
      </ThemeProvider>
    </Provider>
  );
}

function EnvolvedApp() {
  // Usamos useSelector para obtener la lista de tareas desde el estado de Redux
  const tareas = useSelector((state) => state.tareasSlice.lista);
  
  // Obtenemos el contexto del tema (dark o light)
  const { isDark, toggleTheme } = useContext(ThemeContext);

  // Mensajes para el botón de toggle del tema
  const mensaje = {
    dark: "Dark",
    light: "Light"
  };

  return (
    <div className="App">
      <div>
        {/* <PanelRedux /> */}
      </div>
      <h1>Kanpus</h1>
      {/* Botón para cambiar el tema */}
      <BotonToggle mensaje={mensaje} onClick={toggleTheme} />
      {/* Pasamos la lista de tareas a Heady */}
      <Heady tareas={Object.values(tareas)} />
      {/* Renderizamos la lista de tareas */}
      <ul className={isDark ? 'dark' : 'light'}>
      {Object.entries(tareas).map(([id, tarea]) => (
          <Tareas 
            key={id} 
            id={id}  // Aquí estamos pasando el id correcto
            titulo={tarea.titulo}
            isChecked={tarea.isChecked}
          />
        ))}
      </ul>
      <div className="formuTarea">
        <h3>Añadir tarea:</h3>
        {/* Formulario para añadir una nueva tarea */}
        <FormuTarea  />
      </div>
      <div className={isDark ? 'FormuSignUp dark' : 'FormuSignUp light'}>
        {/* Formulario para registrarse */}
        <details><summary className="desple">Crear cuenta</summary><FormuSignUp /></details>
      
      </div>
    </div>
  );
}

export default App;