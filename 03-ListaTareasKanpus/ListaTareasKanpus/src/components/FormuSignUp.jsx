/*### Resumen

- **Estado [`datos`]: Maneja los datos del formulario.
- **Función `validarDatos`**: Valida los datos del formulario y devuelve los errores.
- **Estado `errores`**: Almacena los errores de validación.
- **Función `handleSubmit`**: Maneja el envío del formulario, valida los datos y actualiza el estado de errores.
- **Función `getErrores`**: Verifica si hay errores en el formulario para deshabilitar el botón de envío.
- **Renderizado del Formulario**: Renderiza el formulario con los campos y muestra los errores si existen.
 */

import { useState } from "react";

export const FormuSignUp = () => {
  const [datos, setDatos] = useState({
    user: "",
    mail: "",
    pass: "",
    date: "",
    texty: "",
    selecty: "",
    pago:"",
    caduca:"",
    cvv: "",
  });

  const validarDatos = (datos) => {
   const errores = {
      user:
        datos.user.length < 3
          ? "El usuario debe tener al menos 3 caracteres"
          : "",
      pass:
        datos.pass.length < 6
          ? "La contraseña debe tener al menos 6 caracteres"
          : "",
      date:""
       ,
    };
    const validarFecha =  new Date(datos.date) 
      if(validarFecha >= new Date()) {
          errores.date = "La fecha de nacimiento no puede ser en el futuro";
          
      }
      // Si es selección de pago, validar campos adicionales
if (datos.selecty === "Pago") {
  if (!datos.pago) errores.pago = "Introduce el número de tarjeta";
  if (!datos.caduca) errores.caduca = "Introduce la fecha de caducidad";
  if (!datos.cvv || datos.cvv.length !== 3)
    errores.cvv = "Introduce un CVV válido de 3 dígitos";
}

      return errores;
  };

  const [errores, setErrores] = useState({}); // Estado para almacenar errores

/* Maneja el envío del formulario, valida los datos y actualiza el estado de errores si es necesario. 
Si no hay errores, limpia el formulario y los errores.
Previene el envío del formulario utilizando event.preventDefault().
Valida los datos del formulario llamando a validarDatos(datos).
Muestra errores si los hay.
Limpia los datos del formulario y los errores si no hay problemas.*/
  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarDatos(datos); // Validar los datos
    if (Object.values(errores).some((error) => error !== "") ) {
      setErrores(errores);
      console.log("Hay errores en el formulario", errores);
      return;
    }
    setDatos({
      user: "",
      mail: "",
      pass: "",
      date: "",
      texty: "",
      selecty: "",
      pago:"",
      caduca:"",
      cvv: "",
    });
    setErrores({}); // Limpiar los errores
    console.log("Formulario enviado", datos);
  };

//verificar si hay errores para deshabilitar boton
const getErrores = () => {
    return Object.values(errores).some((error) => error !== "");
  };
  

  return (
    <form onSubmit={handleSubmit} className="form-signup">
      <fieldset className="form-fieldset">
        <legend className="form-legend">
          <strong>Crear nueva cuenta</strong>
        </legend>
        <p className="form-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, voluptate?
        </p>

        <label htmlFor="user" className="form-label">
          Usuario
        </label>
        <input
          type="text"
          name="user"
          id="user"
          placeholder="Escribe tu nombre"
          value={datos.user}
          onChange={(e) => setDatos({ ...datos, user: e.target.value })}
          className="form-input"
        />
        {errores.user && <p className="form-error">{errores.user}</p>}

        <label htmlFor="mail" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="mail"
          id="mail"
          placeholder="abc123@gmail.com"
          value={datos.mail}
          onChange={(e) => setDatos({ ...datos, mail: e.target.value })}
          className="form-input"
        />

        <label htmlFor="pass" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          name="pass"
          id="pass"
          placeholder="Escribe la contraseña"
          value={datos.pass}
          onChange={(e) => setDatos({ ...datos, pass: e.target.value })}
          className="form-input"
        />
        {errores.pass && <p className="form-error">{errores.pass}</p>}

        <label htmlFor="date" className="form-label">
          FechaNacimiento
        </label>
        <input
          type="date"
          name="date"
          id="date"
          value={datos.date}
          onChange={(e) => setDatos({ ...datos, date: e.target.value })}
          className="form-input"

        />
        {errores.date && <p className="form-error">{errores.date}</p>}

        <label htmlFor="texty" className="form-label">
          texty
        </label>
        <input
          type="textarea"
          name="texty"
          id="texty"
          placeholder="Biografia"
          value={datos.texty}
          onChange={(e) => setDatos({ ...datos, texty: e.target.value })}
          className="form-input"
        />

                <label htmlFor="selecty" className="form-label">
          selecty
        </label>
        <select
        name="selecty"
        id="selecty"
        value={datos.selecty}
        onChange={(e) => setDatos({ ...datos, selecty: e.target.value })}
        className="form-input" 
          
        >
 <option value="Gratuito">Gratuito</option>
 <option value="Pago">Pago - 20€</option>
</select>
  {datos.selecty == "Pago" &&
  <>
    <label htmlFor="pago" className="form-label">
    Rellenar datos de pago
  </label>
  numero tarjeta
  <input
    type="text"
    name="pago"
    id="pago"
    placeholder="7880 6417 6464 6417"
    value={datos.pago}
    onChange={(e) => setDatos({ ...datos, pago: e.target.value })}
    className="form-input"
  /> 
      {errores.pago && <p className="form-error">{errores.pago}</p>}

    fecha caducidad
  <input
    type="text"
    name="caduca"
    id="caduca"
    placeholder="12/23"
    value={datos.caduca}
    onChange={(e) => setDatos({ ...datos, caduca: e.target.value })}
    className="form-input"
  />
      {errores.caduca && <p className="form-error">{errores.caduca}</p>}

    CVV
  <input
    type="text"
    name="cvv"
    id="cvv"
    placeholder="036"
    value={datos.cvv} // Añadir valor del campo CVV
              onChange={(e) => setDatos({ ...datos, cvv: e.target.value })} // Actualizar el estado CVV
              className="form-input"
  />
      {errores.cvv && <p className="form-error">{errores.cvv}</p>}

  </>}
      </fieldset>
      <label>
        <input type="checkbox" required />
        Acepto los términos y condiciones
      </label>
      <button type="submit" className="form-button" disabled={getErrores()}>
        Crear cuenta
      </button>
    </form>
  );
};
