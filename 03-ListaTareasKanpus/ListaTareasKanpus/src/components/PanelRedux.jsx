import { useState } from "react";
import { LoginRedux } from "./LoginRedux";
import { UserRedux } from "./UsersRedux";

export const PanelRedux = () => {
    // Estado para el usuario actual
    const [userActual, setUserActual] = useState(null);
    // Estado para almacenar la información de todos los usuarios
    const [usuarios, setUsuarios] = useState({});

    // Función para manejar el inicio de sesión
    const handleInicioSesion = (userName) => {
        // Actualiza el usuario actual
        setUserActual(userName);
        // Actualiza la información de los usuarios
        setUsuarios((usuarioAnterior) => {
            return {
                ...usuarioAnterior,
                [userName]: {
                    // Incrementa el contador de veces que el usuario ha iniciado sesión
                    veces: usuarioAnterior[userName] ? usuarioAnterior[userName].veces + 1 : 1,
                    bio: "" // Inicializa la bio como una cadena vacía
                }
            };
        });
    };

    // Función para manejar el cierre de sesión
    const handleCerrarSesion = () => {
        setUserActual(null);
    };

    return (
        <div className="panel">
            <h2>Panel de control</h2>
            <h3>{userActual === null ? "Inicia sesión" : `Hola de nuevo, ${userActual}`}</h3>
            {userActual === null ? (
                <LoginRedux inicioSesion={handleInicioSesion} />
            ) : (
                <UserRedux usuario={userActual} userInfo={usuarios[userActual]} cerrarSesion={handleCerrarSesion} />
            )}
        </div>
    );
};