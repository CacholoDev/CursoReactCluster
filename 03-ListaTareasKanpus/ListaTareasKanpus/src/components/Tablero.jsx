import { useState } from "react";
import { useSelector } from "react-redux";

const Tablero = () => {
    const listas = useSelector(state => Object.keys(state.tablero));
    const [nuevaLista, setNuevaLista] = useState("");
    
}