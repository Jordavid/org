import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

/* Componente en React */
const Formulario = (props) =>{

    const [nombre, actNombre] = useState("");
    const [puesto, actPuesto] = useState("");
    const [foto, actFoto] = useState("");
    const [equipo, actEquipo] = useState("");

    const [titulo, actualizarTitulo] = useState("");
    const [color, actualizarColor] = useState("");

    const { registrarColaborador, crearEquipo } = props

    // "e" se refiere a la palabra "evento"
    const manejarEnvio = (e) =>{
        // Evita que la pagina se recarge al enviar el formulario
        e.preventDefault()
        console.log("Manejar Envio");

        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        //Envia los datos al componente(Padre) App.js
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEnvio = (e) =>{
        e.preventDefault();
        crearEquipo({titulo, colorPrimario: color});
    }

    return <section className="formulario">
        {/* onSubmit es un evento que envia los datos de un formulario */}
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            {/* Campo importa de ../Campo/index.js <label><input> */}
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarValor={actNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto} 
                actualizarValor={actPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarValor={actFoto}
            />
            <ListaOpciones 
                valor = {equipo}
                actualizarEquipo = {actEquipo}
                equipos = {props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEnvio}>
            <h2>Rellena el formulario para crear un nuevo equipo.</h2>
            {/* Campo importa de ../Campo/index.js <label><input> */}
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en haxadecimal" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>

        </form>
    </section>
    
}

/* Exporta la funcion */
export default Formulario; 