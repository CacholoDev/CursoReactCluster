import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userActual: null,
  usuarios: {},
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    iniciarSesion: (state, action) => {
      const userName = action.payload; // Extraemos el nombre de usuario desde el "payload"
      state.userActual = userName; // Asignamos el nombre de usuario al estado
      state.usuarios[userName] = {
        veces: state.usuarios[userName]
          ? state.usuarios[userName].veces + 1
          : 1,
        bio: "",
      };
    },
    cerrarSesion: (state) => {
      state.userActual = null;
    },
    guardarBio: (state, action) => {
      const { usuario, bio } = action.payload;
      state.usuarios[usuario].bio = bio;
    },
  },
});

export const { iniciarSesion, cerrarSesion, guardarBio } = UserSlice.actions;