import { useState } from "react"
import PropTypes from 'prop-types';

export const UserRedux = ({usuario,userInfo,cerrarSesion}) => {
const [user,setUser] = useState({
    veces: userInfo.veces,
    bio: "",
})

return (
<>
 <div>
    <h2>Usuario: {usuario}</h2>
    <p>el usuario {usuario}, inició sesion {user.veces === 1 ? "1 vez" : `${user.veces}  veces`}</p>
    <textarea placeholder="Bio" value={user.bio} onChange={e => setUser(e.bio.target.value)}></textarea>
    <button>GuardarBio</button>
    <button onClick={cerrarSesion}>CerrarSesion</button>
 </div>
</>
    

)
}

UserRedux.propTypes = {
    usuario: PropTypes.string.isRequired,
    cerrarSesion: PropTypes.func.isRequired,
    userInfo: PropTypes.shape({
        veces: PropTypes.number.isRequired,
    }).isRequired,
};
