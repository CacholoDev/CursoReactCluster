import { useState } from "react";

export const FormuSignUp = () => {
    const [datos, setDatos] = useState({
        user: '',
        mail: '',
        pass: ''
    })

    const error = {
        user: datos.user.length < 3 ? 'El usuario debe tener al menos 3 caracteres' : '',
        pass: datos.pass.length < 6 ? 'La contraseña debe tener al menos 6 caracteres' : '',
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('datos enviados',datos);
        setDatos({
            user: '',
            mail: '',
            pass: ''
        });
    }

    return (
        <form onSubmit={handleSubmit} className="formySign">
            <fieldset>
                <legend><strong>Crear nueva cuenta</strong></legend>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, voluptate?</p>
                <label htmlFor="user">Usuario</label>
                <input type="text"
                 name="user" 
                 id="user" 
                 placeholder="Escribe tu nombre"
                 value={datos.user} 
                    onChange={(e) => setDatos({...datos, user: e.target.value})}
                />

                <label htmlFor="mail">Email</label>
                <input type="email" name="mail" id="mail" placeholder="abc123@gmail.com"
                value={datos.mail}
                onChange={(e) => setDatos({...datos, mail:e.target.value})} />

                <label htmlFor="pass">Contraseña</label>
                <input type="password" name="pass" id="pass" placeholder="Escribe la contraseña"
                value={datos.pass}
                    onChange={e => setDatos({...datos, pass:e.target.value})} />

            </fieldset>
            <button type="submit">Crear cuenta</button>
        </form>
    )
}