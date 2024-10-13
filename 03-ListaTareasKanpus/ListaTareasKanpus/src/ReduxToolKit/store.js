import { configureStore } from '@reduxjs/toolkit';
import tareas from './Slices/tareaSlice';
import tablero from './Slices/tableroSlice';
export const store = configureStore({
    reducer: {
        //aquí la sintaxis {tareas} es equivalente a {tareas: tareas}
        tareasSlice: tareas,
        tableroSlice: tablero
    },
    }); 