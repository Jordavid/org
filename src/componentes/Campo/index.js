import { useState } from "react"
import "./Campo.css"

/* Componente en React */
const Campo = (props) => {

    // Se agrega "..." al placeholder
    const placeholderModificado = `${props.placeholder}...`

    // Desctructuracion
    const { type = "text" } = props

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    // Se crean etiquetas <div> <label> <input> 
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder= {placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}       
        />
    </div>
}

export default Campo