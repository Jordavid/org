import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    /* Metodoto map -> arreglo.map ( (equipo,index) => {
        return <optio></optio>
    }) */

    const manejarCambio = (e) =>{
        console.log("Cambio", e.target.value);
        props.actualizarEquipo(e.target.value);
    }

    return <div className="lista_opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            {/* Se disimula un placeholder */}
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {/* Itera sobre el array equipos y devuelve un nuevo array  */}
            { props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>) }
        </select>
    </div>
}

export default ListaOpciones