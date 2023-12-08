import './TodoList.css'

function TodoList({children}) {
    return (
      <ul className="TodoList">
        {/* la propiedad children se usa cuando dentro del componente hayan mas
        componentes para poder renderizarlos */}
        {children} 
      </ul>
    )
  }
  
//estamos exportando el componente hacia App que nos permite el rederizado
  export {TodoList};