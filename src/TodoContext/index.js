//implementacion de react contect
import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext(); //crear un objeto contexto que con la funcion TodoProvider permite usar los parametros y estados de esta funcion, sin esto no sirven los context

function TodoProvider({children}){

    const {item: todos, //renombramos el parametro
      saveItem: saveTodos, //renombramos el parametro
      loading,
      error} =useLocalStorage('VERSION_V1',[]); //El item seria VERISON_V1 que contiene los todos, el estado incial es un array vacio, ACA invocamos lo que retorna useLocalStorage!!!
  //estado de TodoSearch. todos es un array que contiene los todos de defaultTodos
  const[searchValue, setSearchValue] = React.
   //estado inicial del state que es en este caso searchValue, es decir, antes de interactuar debe ser un string vacio porque el valor de los usuarios sera string y se almacenara alli
  useState('');

  const[openModal, setOpenModal] = React.useState(false)

  const completedTodos = todos.filter( //con todos estas agarrando lo que vale en el estado creado [todos,setTodo] que inicialmente es un array(defaultstodo) con los default todos 
    todo => todo.completed //todo.completed filtra los elementos que sean verdaderos
  ).length //el filter regresa un array con los elementos del array defaultTodos donde sean true, length los cuenta

  const totalTodos = todos.length //cuenta todos los elementos del array todos creado a partir del array defaultTodos

  const todosSearched = todos.filter( //este estado derivado permite filtrar el array todos a traves de la busqueda que ingreso el usuario
    todo => {
      const textTodo = todo.text.toLocaleLowerCase() //estas variables permiten mostrar la busqueda sin importar mayuscula o miniscula
      const searchText = searchValue.toLocaleLowerCase()
      return textTodo.includes(searchText) //si no se busca nada retorna el array todos cumpleto, cambia si se ingresa algo por teclado
    }
  )
 
  const addTodo = (text) =>{
    const newTodos = [...todos] //copiamos todo los elementos de todos
    newTodos.push({
      text,
      completed:false,
    })
    saveTodos(newTodos)
  }
  
  const completeTodo = (text) =>{ //con el text indentificamos que todo queremos setearle un nuevo estado
    const newTodos = [...todos] //copiamos todo los elementos de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    ); //buscamos el indice a cambiar
    newTodos[todoIndex].completed = true //cambiamos el estado del todo al encontrarlo con el indice
    saveTodos(newTodos) 
  }

  const deleteTodo = (text) =>{ //con el text indentificamos que todo queremos setearle un nuevo estado
    const newTodos = [...todos] //copiamos todo los elementos de todos
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    ); //buscamos el indice a cambiar
    newTodos.splice(todoIndex,1); //indicamos el indice del todo que queremos eliminar 
    saveTodos(newTodos);
    };
    

return(
    <TodoContext.Provider value = {{ //creamos la funcionalidad del context
    loading,
    error,
    completedTodos, 
    totalTodos,
    searchValue,
    setSearchValue,
    todosSearched,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    addTodo
    }}>
        {children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider}