  // Componente para el formulario de inicio de sesión
  import  { useState } from "react";
  import PropTypes from 'prop-types';

export const LoginRedux = ({inicioSesion}) => {
    const [iniciarUsuario,setIniciarUsuario] = useState("");

    const handleSubmit = (e) => {
e.preventDefault();
inicioSesion(iniciarUsuario);
    }

    return (
       <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Alice" value={iniciarUsuario} onChange={e => setIniciarUsuario(e.target.value)}/>
        <br />
       {iniciarUsuario.length>0 && <button type="submit">iniciar sesion como {iniciarUsuario}</button>}
        </form>
        </>
    )
}
// Definir PropTypes para validar props
LoginRedux.propTypes = {
    inicioSesion: PropTypes.func.isRequired, // inicioSesion debe ser una función y es requerida
  };