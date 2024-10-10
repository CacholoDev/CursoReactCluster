import  { useState } from "react";
import PropTypes from 'prop-types';
export function BotonToggle({mensaje, onClick}) { 
const [buticon,setButicon] = useState(true);
const handleClick = () => {
    setButicon(!buticon);
    if (onClick) {
      onClick();
    }
  };

return (
  <button onClick={handleClick}>
      {buticon ? mensaje.dark : mensaje.light}
   
  </button>
);
}

BotonToggle.propTypes = {
  mensaje: PropTypes.shape({
    dark: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func
};

