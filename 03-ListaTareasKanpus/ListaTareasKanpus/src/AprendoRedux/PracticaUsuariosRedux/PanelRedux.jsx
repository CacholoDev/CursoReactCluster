import { LoginRedux } from "./LoginRedux";
import { UserRedux } from "./UsersRedux";
import { useSelector, useDispatch } from "react-redux";
import { iniciarSesion, cerrarSesion } from "./redux/Slices/UserSlice";

export const PanelRedux = () => {
  // Estado para el usuario actual
  const userActual = useSelector((state) => state.session.userActual);
  const usuarios = useSelector((state) => state.session.usuarios);
  const dispatch = useDispatch();

  // Función para manejar el inicio de sesión
  const handleInicioSesion = (userName) => {
    dispatch(iniciarSesion(userName));
  };

  // Función para manejar el cierre de sesión
  const handleCerrarSesion = () => {
    dispatch(cerrarSesion());
  };

  return (
    <div className="panel">
      <h2>Panel de control</h2>
      <h3>
        {userActual === null ? "Inicia sesión" : `Hola de nuevo, ${userActual}`}
      </h3>
      {userActual === null ? (
        <LoginRedux inicioSesion={handleInicioSesion} />
      ) : (
        <UserRedux
          usuario={userActual}
          userInfo={usuarios[userActual]}
          cerrarSesion={handleCerrarSesion}
        />
      )}
    </div>
  );
};
