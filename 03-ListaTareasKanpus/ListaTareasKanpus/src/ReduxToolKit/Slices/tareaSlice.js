import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  lista: {
    1: {
      titulo: "mision aprender React",
      isChecked: true,
    },
    2: {
      titulo: "mision aprender Java",
      isChecked: false,
    },
    3: {
      titulo: "mision aprender JS",
      isChecked: true,
    },
  },
};

const tareaSlice = createSlice({
  name: "tareas",
  initialState,
  reducers: {
    /*      addTarea: (state, action) => {
        const { titulo, isChecked } = action.payload;
        const id = Object.keys(state.lista).length + 1;
        state.lista[id] = { titulo, isChecked };
        },
        toggleTarea: (state, action) => {
        const tarea = state.lista[action.payload];
        tarea.isChecked = !tarea.isChecked;
        }, */
    deleteTarea: (state, action) => {
      delete state.lista[action.payload];
    },
    alternada(state, action) {
      const id = action.payload.toString(); // Convierte a string si es necesario
      if (state.lista[id]) {
        state.lista[id].isChecked = !state.lista[id].isChecked;
      } else {
        console.error(`No se encontró la tarea con id: ${id}`);
      }
    },
    
    modificada(state, action) {
      state.lista[action.payload.id].titulo = action.payload.titulo;
    },
    todasCompletadas(state) {
        for (let id in state.lista) {
          state.lista[id].isChecked = true
        }
      },
      creada: {
        prepare(titulo) {
          return { payload: { id: nanoid(), titulo } }
        },
        reducer(state, action) {
          state.lista[action.payload.id] = {
            titulo: action.payload.titulo,
            isChecked: false
          }
        }
      }
      
  },
});

export const { deleteTarea, alternada, modificada, todasCompletadas, creada } = tareaSlice.actions;

export default tareaSlice.reducer;