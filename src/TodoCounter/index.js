import { TodoContext } from '../TodoContext';
import './TodoCounter.css'
import React from 'react';
//se esta haciendo uso de los props para el dinamismo del counter
function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext)
    return (
      <h2 className='TodoCounter'>
        Has completado <span>{completedTodos} </span>de <span>{totalTodos}</span> Todos
      </h2>
    )
  }

//estamos exportando el componente hacia App que nos permite el rederizado
export {TodoCounter};