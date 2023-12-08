import './TodoSearch.css'
import React from 'react'
import { TodoContext } from '../TodoContext';

function TodoSearch() {
  const {searchValue,
    setSearchValue} = React.useContext(TodoContext)
    return (
      <input 
      placeholder="ingrese to-do"
      className="TodoSearch"
      value={searchValue} //el valor del input es lo que ingreso el usuario que se seteo en searchValue gracias a setSearchValue haciendo que lo que ingreso el usuario sea el valor del input
      onChange={(event) =>{ //en este caso el evento es la escritura en el input
        setSearchValue(event.target.value) //esto permite guardar lo que ingreso el usuario en searchValue
      }}
      />
    )
  }
  
//estamos exportando el componente hacia App que nos permite el rederizado
  export {TodoSearch};
