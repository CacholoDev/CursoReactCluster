import './App.css'
import { Tareas } from './components/Tareas'
function App() {
  const tareas = [{
    text:"mision aprender React", 
    isChecked:true
  },
  {
    text:"mision aprender Java", 
    isChecked:false
  },
  {
    text:"mision aprender JS", 
    isChecked:true
  }
]
  return (
 
<div className="App">
<h1>lista</h1>
<ul>
    {tareas.map((tarea,id) => <Tareas text={tarea} key={id}/>)}

</ul>
</div>

  )
}

export default App
