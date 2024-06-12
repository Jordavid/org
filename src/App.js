import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Headers/Header.js';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/index.js';
import Equipo from './componentes/Equipo/index.js';
import Footer from './componentes/Footer/index.jsx';


function App() {

  // Operador ternario - condicion ? true(seMuestra) : false(noSeMuestra)  
  // ó
  // condicion && seMuestra

  const [mostrarForm, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo:"Front End",
      foto:"https://github.com/Jordavid.png",
      nombre:"Jordavid",
      puesto:"Front End",
      fav: true
    },
    {
      id: uuid(),
      equipo:"Programación",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto:"Desarrollador FrontEnd e Instructor",
      fav:false
    },
    {
      id: uuid(),
      equipo:"Data Science",
      foto:"https://github.com/genesysR-dev.png",
      nombre:"Genesys Rondón",
      puesto:"Desarrolladora de software e instructora",
      fav:false
    },
    {
      id: uuid(),
      equipo:"Devops",
      foto:"https://github.com/christianpva.png",
      nombre:"Christian Velasco",
      puesto:"Head de Alura e instructor",
      fav:false
    },
    {
      id: uuid(),
      equipo:"UX y Diseño",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      nombre:"Jose Gonzalez",
      puesto:"Dev. FullStack",
      fav:false
    },
    {
      id: uuid(),
      equipo:"Móvil",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      nombre:"Jeanmarie Quijada",
      puesto:"Instructora en Alura Latam",
      fav:false
    },
    {
      id: uuid(),
      equipo:"Innovación y  Gestión",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      nombre:"Jeanmarie Quijada",
      puesto:"Instructora en Alura Latam",
      fav:false
    }
  ]);

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ])

  const cambiarMostrar  = () =>{
    actualizarMostrar(!mostrarForm)
  }

  // Agrega y guarda los datos recibidos de Formulario en "useState([])"
  const registrarColaborador = (colaborador ) => {
    console.log("Nuevo Colaborador", colaborador);
    // Spread operator ...
    actualizarColaboradores([...colaboradores, colaborador])
  }

  // Eliminar Colaborador
  const eliminarColaborador = (id)=>{
    console.log("Eliminar Colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id  !== id)
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    console.log("Actualizar Color: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  // Crear Equipo
  const crearEquipo = (nuevoEquipo) =>{
    console.log(nuevoEquipo);
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
  }

  // Dar like a un colaborador
  const like = (id) =>{
    console.log("Like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* Operacion Ternario - Si mostrarForm es true muesta el formulario si es false cambia todo el form por un <div></div>*/}
      {/* {mostrarForm === true ? <Formulario/> : <></>} */}
      
      {
        mostrarForm && <Formulario
        equipos={equipos.map( (equipo)=> equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        // Cada vez que se use "map()" se tiene que usar "key={}"
        equipos.map( (team)=> 
          <Equipo 
            datos={team} 
            key={team.titulo} 
            // crea un nuevo arreglo que contiene solo los colaboradores cuyo equipo coincide con el título del equipo actual.
            // solo se muestran los colaboradores que pertenecen al equipo actual
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === team.titulo)}
            // nombre de la prop "eliminarColaborador"
            eliminarColaborador = {eliminarColaborador}
            actualizarColor = {actualizarColor}
            like={like}
          />
        )
      }

      <Footer />
    </div>
  );  
}

export default App;
