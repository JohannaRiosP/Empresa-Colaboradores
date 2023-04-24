import './MiOrg.css'


const MiOrg = (props) => {
    //Estado - hooks = funcionalidades para trabajar con React
    //useState=utiliza el estado, es una funcion
    //const [nombreVariable, funcion que actualizaVariable]= useState(valor inicial)
 
    console.log(props)
    // const [mostrar, actualizarMostrar]= useState(true) // puede ser true, objetos, arreglos
    // const manejarClick = () =>{
    //     console.log("Mostrar / Ocultar elemento")
    //     actualizarMostrar(!mostrar) // Es la info nueva que se va a mostrat en lugar de true, lo invierte pues se coloca !
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>

    </section>
}

export default MiOrg