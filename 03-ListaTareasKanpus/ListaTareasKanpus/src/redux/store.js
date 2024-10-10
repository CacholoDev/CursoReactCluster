import { configureStore } from '@reduxjs/toolkit';
import { UserSlice } from './Slices/UserSlice';
// Creamos el store
export const store = configureStore({
  reducer: {
    session: UserSlice, // Añadimos nuestro slice
  },
});

export default store;
