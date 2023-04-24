import "./Campo.css"

const Campo = (props) => {
 

    const placeholderModificado =`${props.placeholder}...`//coge los placeholder y les suma los ...

    //Destructuración
    const {type = "text"} = props

    const manejarCambio =(e) =>{
      props.actualizarValor(e.target.value) // Actualiza lo que ingresemos por techado en el input

    }
      return <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
            />

        </div>
}

export default Campo