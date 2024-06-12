import "./MiOrg.css"

const MiOrg = (props) =>{
    /* Estados - hooks
       useState*/

    // Como utilizar los estados 
    // const [nombreVariable, funcionActualiza] = useState(valorInicial)

    /* const [mostar, actulizarMostrar] = useState(true)

    const manejarClick = () =>{
        console.log("Mostrar/Ocultar elemento")
        // Al hacer click en el btn la funcion "actualizarMostrar" va a cambiar el useState de "true" a "Hola"
        actulizarMostrar(!mostar)
    } */

    return <section className="orgSeccion">
        <h3 className="tittle">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg