import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css'; 
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/Miorg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([ //Para visualizacion se dejan 2 colaboradores, deberia estar vacio

    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/johannariosp.png",
      nombre:"Johanna Rios",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/johannariosp.png",
      nombre:"Jenny Rios",
      puesto: "Head",
      fav: false
    },
  ])

  const [equipos, actualizarEquipos] = useState([ //Para visualizacion se dejan 2 equipos, deberia estar vacio

    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSegundario: "#D9F7E9"
    },

    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSegundario: "#E8F8FF"
    },
  
])


  //Ternario -> condicion ? (verdadera) se muestra : no se muestra 
  //condicion && se muestra, significa q si es verdadera se muestra = corto circuito
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) => {
    console.log ("Nuevo Colaborador: ", colaborador)
    //Spread operator: hace una copia de los valores que existen ...
    actualizarColaboradores([...colaboradores, colaborador])
  }


  const eliminarColaborador = (id)=>{
    console.log ("Eliminar colaborador", id )
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !==id)
    // filtra los colaboradores y por cada colaborador verifica cuales son diferentes al id que clikeo y los guarda en la lista nuevos colaboradores el diferente no lo guarda.
    actualizarColaboradores(nuevosColaboradores)
  }

  const actualizarColor = (color, id) =>{
    console.log ("Actualizar :" , color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

  const like = (id) =>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id ===id){ //Si es igual al id
        colaborador.fav = !colaborador.fav // si es T pasa a F o al contrario
      }
      return colaborador
    })
  }

  return (
    <div>
      <Header />
      {/* {mostrarFormulario ? <Formulario /> : <></>}  */}
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo)=>equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
      />} 
      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          //nombre prop // {funcion eliminar}
        />)//Por cada objeto de la lista no crea un container con un equipo
        
      }
      <Footer />
    </div>
  );
}

export default App;
