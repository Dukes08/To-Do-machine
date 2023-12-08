import React from 'react';
import '../index.css'
import { AppUI } from './AppUI';
import { TodoContext, TodoProvider } from '../TodoContext';

{/*En el componente App se encuentran todos los componentes que pasaran a la maquina de renderizado
 de react para que se transforme el jsx en html y se logre mostrar a usuario*/}

// Aca estamos haciendo un array de objetos con los todos que existen
// const defaultsTodo =[{text:'Cortar cebolla', completed: true },
// {text:'Tomer curso de react intro', completed: false },
// {text:'Tomar curso de docker', completed: false },
// {text:'Que edward me regale una macbook pro 2024 con m3', completed: false },
// {text:'Que moris haga shawarma', completed: true},
// {text:'Mostrar este proyecto', completed: true}
// ]

// localStorage.setItem('VERSION_V1', JSON.stringify(defaultsTodo)); stringify permite pasar el array a un json que luego se parseara
//costum hook


function App() {

    
  return (
    /*React solo permite que un solo elemento se retorne
    es decir no podemos retornar todos los componentes que
    queremos renderizar al mismo por ende necesitamos encapsularlos para
    que no hayan errores por consiguiente existe <React.Fragment></React.Fragment>
    permitiendonos encapsular el codigo para poder renderizarlo
    Ademas con esto se nos muestran nuestros componentes en inspector de pagina directamente*/
   <TodoProvider>
       <AppUI
    
    // loading = {loading}
    // error = {error}
    // completedTodos = {completedTodos}
    // totalTodos = {totalTodos}
    // searchValue = {searchValue}
    // setSearchValue = {setSearchValue}
    // todosSearched = {todosSearched}
    // completeTodo = {completeTodo}
    // deleteTodo = {deleteTodo}

    />
   </TodoProvider>
   
  );
}


//exportamos App a index.js para poder renderizar el componente
export default App;
//exportamos TodoItem a index.js para poder renderizar el componente
//export default TodoItem;