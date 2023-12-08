import React from 'react'
import { TodoContext } from '../TodoContext';
import './TodoForm.css'
function TodoForm() {

    const onSubmit = (event)=>{
        event.preventDefault();//este metodo evita que los botones actuen por default, no recargaran la pagina
        addTodo(newTodoValue)
        setOpenModal(false) ;
       }
    const onCancel = () => { //cerrar la
        setOpenModal(false);
       }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);

    }

    const [newTodoValue, setNewTodoValue] = React.useState(''); //no se crea en el context porque este solo necesita el valor final, es decir, el todo no todo lo que escribe el usuario letra por letra

    const{setOpenModal,
        addTodo} =React.useContext(TodoContext) //usamos context para llamar a setOpenModdal

  return (
   <form className='form' onSubmit={onSubmit}>

        <label>Escribe tu nuevo todo</label>
        <textarea 
        placeholder='ingresa un todo'
        value = {newTodoValue}
        onChange={onChange}
        required
        ></textarea>

        <div className='TodoForm-container'>

            <button className='TodoForm-button TodoForm-button--cancel' 
            onClick={onCancel}
            type='button'>
                cancelar
            </button>

            <button className='Todo-Forn-button TodoForm-button--add'
            onClick={addTodo}>
                añadir
            </button>

        </div>
   </form>
  )
}

export {TodoForm}