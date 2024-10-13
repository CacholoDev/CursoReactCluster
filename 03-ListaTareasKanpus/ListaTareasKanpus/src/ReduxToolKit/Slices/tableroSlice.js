import { createSlice, nanoid } from "@reduxjs/toolkit";
import { creada } from "./tareaSlice";
import { eliminada } from "./tareaSlice";
const initialState = {
    todo: {
        nombre: "TODO",
        lista:[2,3]
    },
    doing: {
        nombre: "DOING",
        lista:[1]
    },
    done: {
        nombre: "DONE",
        lista:[]
    }};

const tableroSlice = createSlice({
    name:"tablero",
    initialState,
    reducers:{
        listaCreada: {
            reducer(state, action) {
              state[action.payload.id] = {
                nombre: action.payload.nombre,
                lista: [],
              };
            },
            prepare(nombre) {
              return { payload: { id: nanoid(), nombre } };
            },
          },
          
        tareaQuitada(state, action) {
            state[action.payload.from_id].lista.splice(
              state[action.payload.from_id].lista.indexOf(action.payload.tarea_id),
              1
            );
          },
          
          tareaAgregada(state, action) {
            const orden = action.payload.orden ?? state[action.payload.to_id].lista.length;
            state[action.payload.to_id].lista.splice(orden, 0, action.payload.tarea_id);
          },

         extraReducers: builder => {
              builder.addCase(creada, (state, action) => {
                state[action.payload.listaId].lista.push(action.payload.id)
                }),
                
                builder.addCase(eliminada, (state, action) => {
                    for (let t in state) {
                      const index = state[t].lista.indexOf(action.payload)
                      if (index > -1) {
                        state[t].lista.splice(index, 1)
                      }
                    }
                  })
            }                  
           
    }})

export const { listaCreada, tareaQuitada, tareaAgregada } = tableroSlice.actions;
export default tableroSlice.reducer;