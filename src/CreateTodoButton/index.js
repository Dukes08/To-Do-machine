import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}){
    return(
        <button className="CreateTodoButton"
        onClick={()=>{setOpenModal(state => !state)} //asi tambien podemos actualizar el estado
        }>+</button>
    )
  }

  export {CreateTodoButton};
