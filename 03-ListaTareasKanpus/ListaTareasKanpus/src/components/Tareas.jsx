import PropTypes from 'prop-types';

export const Tareas = ({text,isChecked}) => {
    return (
    <li>
  <input type="checkbox" defaultChecked={isChecked} />
  {text} 
  <button>Eliminar</button>
</li>
);
};


Tareas.propTypes= {
    text: PropTypes.string.isRequired,
    isChecked:PropTypes.bool.isRequired
}